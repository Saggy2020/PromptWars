import type { CivicReport, Place } from "@/data/mumbai";

export type ScoreKey =
  | "safety"
  | "cleanliness"
  | "affordability"
  | "ratings"
  | "accessibility"
  | "calm"
  | "quiet"
  | "green"
  | "transit";

export const SCORE_LABELS: Record<ScoreKey, string> = {
  safety: "Safety",
  cleanliness: "Cleanliness",
  affordability: "Affordability",
  ratings: "Ratings",
  accessibility: "Accessibility",
  calm: "Calm (less crowd)",
  quiet: "Quiet",
  green: "Green cover",
  transit: "Transit",
};

export function clamp(n: number) {
  return Math.max(0, Math.min(100, Math.round(n)));
}

export function hourInMumbai(date = new Date()) {
  return Number(
    new Intl.DateTimeFormat("en-GB", {
      hour: "numeric",
      hourCycle: "h23",
      timeZone: "Asia/Kolkata",
    }).format(date),
  );
}

export function scoresFor(place: Place, hour: number, nearbyReports: CivicReport[]) {
  const night = hour >= 21 || hour < 6;
  const lightingGap = night ? Math.round((100 - place.lighting) * 0.28) : Math.round((100 - place.lighting) * 0.05);
  const safetyReports = nearbyReports.filter((r) => r.kind === "safety");
  const reportPenalty = Math.min(18, safetyReports.length * 6);
  const safety = clamp(place.safety - lightingGap - reportPenalty);
  return {
    safety,
    cleanliness: place.cleanliness,
    affordability: clamp((5 - place.price) * 25),
    ratings: clamp(place.rating * 20),
    accessibility: place.accessibility,
    calm: clamp(100 - place.crowd),
    quiet: clamp(100 - place.noise),
    green: place.green,
    transit: place.transit,
    night,
    lightingGap,
    reportPenalty,
  };
}

export type Scores = ReturnType<typeof scoresFor>;

export function overall(s: Scores) {
  const weights: [ScoreKey, number][] = [
    ["safety", 0.28],
    ["cleanliness", 0.12],
    ["affordability", 0.1],
    ["ratings", 0.16],
    ["accessibility", 0.08],
    ["calm", 0.06],
    ["quiet", 0.05],
    ["green", 0.05],
    ["transit", 0.1],
  ];
  return clamp(weights.reduce((sum, [k, w]) => sum + s[k] * w, 0));
}

export function haversine(a: { lat: number; lng: number }, b: { lat: number; lng: number }) {
  const R = 6371;
  const dLat = ((b.lat - a.lat) * Math.PI) / 180;
  const dLng = ((b.lng - a.lng) * Math.PI) / 180;
  const lat1 = (a.lat * Math.PI) / 180;
  const lat2 = (b.lat * Math.PI) / 180;
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

export function reportsNear(place: Place, reports: CivicReport[], km = 1.2) {
  return reports.filter((r) => haversine(place, r) <= km);
}

const LEXICON: { word: string; kind: CivicReport["kind"]; tone: "alert" | "good" | "note" }[] = [
  { word: "waterlog", kind: "weather", tone: "alert" },
  { word: "flood", kind: "weather", tone: "alert" },
  { word: "rain", kind: "weather", tone: "note" },
  { word: "pickpocket", kind: "safety", tone: "alert" },
  { word: "theft", kind: "safety", tone: "alert" },
  { word: "accident", kind: "safety", tone: "alert" },
  { word: "poorly lit", kind: "safety", tone: "alert" },
  { word: "unsafe", kind: "safety", tone: "alert" },
  { word: "festival", kind: "culture", tone: "note" },
  { word: "music", kind: "culture", tone: "good" },
  { word: "traffic", kind: "traffic", tone: "alert" },
  { word: "crawling", kind: "traffic", tone: "alert" },
  { word: "lighting is even", kind: "safety", tone: "good" },
  { word: "comfortable", kind: "safety", tone: "good" },
];

export function extractInsights(reports: CivicReport[]) {
  return reports
    .map((report) => {
      const lower = report.text.toLowerCase();
      const hit = LEXICON.find((item) => lower.includes(item.word));
      if (!hit) return null;
      return {
        id: report.id,
        area: report.area,
        summary: report.text,
        topic: hit.kind,
        tone: hit.tone,
        confidence: hit.word.length > 8 ? "high" : "medium",
        votes: report.votes,
      };
    })
    .filter((x): x is NonNullable<typeof x> => Boolean(x))
    .sort((a, b) => b.votes - a.votes);
}

export function trafficBand(hour: number) {
  if ((hour >= 8 && hour <= 11) || (hour >= 17 && hour <= 21)) {
    return { label: "Heavy", detail: "Typical island-city peak. Western Express and Linking Road crawl; trains are faster than cabs.", level: 78 };
  }
  if (hour >= 12 && hour <= 16) {
    return { label: "Moderate", detail: "Midday lull on the promenades, still slow through Bhendi Bazaar and Dadar.", level: 52 };
  }
  if (hour >= 22 || hour < 6) {
    return { label: "Light", detail: "Roads open up. Walking safety now depends on lighting, not congestion.", level: 28 };
  }
  return { label: "Building", detail: "Early movement toward the Fort and mill district.", level: 40 };
}

export function recommend(places: Place[], mood: string | null, hour: number, reports: CivicReport[]) {
  return places
    .filter((p) => p.kind !== "neighborhood")
    .map((p) => {
      const s = scoresFor(p, hour, reportsNear(p, reports));
      const moodBoost = mood && p.moods.includes(mood as Place["moods"][number]) ? 18 : 0;
      const gem = p.hiddenGem * 0.35;
      const rank = overall(s) * 0.55 + gem + moodBoost + (hour >= 21 && p.moods.includes("late") ? 8 : 0);
      return { place: p, scores: s, rank };
    })
    .sort((a, b) => b.rank - a.rank);
}

export type RouteOption = {
  id: string;
  name: string;
  minutes: number;
  km: number;
  minSafety: number;
  note: string;
  via: string[];
  path: { lat: number; lng: number }[];
};

export function routeOptions(from: Place, to: Place, hour: number, reports: CivicReport[]): RouteOption[] {
  const directKm = haversine(from, to);
  const walkMin = Math.round((directKm / 4.6) * 60);
  const fromS = scoresFor(from, hour, reportsNear(from, reports)).safety;
  const toS = scoresFor(to, hour, reportsNear(to, reports)).safety;
  const directSafety = Math.min(fromS, toS) - (directKm > 4 ? 8 : 0);
  const marine = { lat: 18.944, lng: 72.823 };
  const fort = { lat: 18.932, lng: 72.834 };
  const via = [from, marine, fort, to];
  const saferKm =
    haversine(from, marine) + haversine(marine, fort) + haversine(fort, to);
  const saferMin = Math.round((saferKm / 4.4) * 60);
  return [
    {
      id: "direct",
      name: "Direct walk",
      minutes: Math.max(8, walkMin),
      km: Number(directKm.toFixed(1)),
      minSafety: clamp(directSafety),
      note: "Shortest path. Risk is the lower of the two ends, plus a penalty if the gap is long and unlit.",
      via: [from.area, to.area],
      path: [
        { lat: from.lat, lng: from.lng },
        { lat: to.lat, lng: to.lng },
      ],
    },
    {
      id: "safer",
      name: "Lit corridor",
      minutes: Math.max(12, saferMin),
      km: Number(saferKm.toFixed(1)),
      minSafety: clamp(Math.min(82, Math.max(fromS, toS, 74))),
      note: "Detour along Marine Drive and the Fort grid — higher lighting, more footfall, fewer reported dark junctions.",
      via: [from.name, "Marine Drive", "Fort", to.name],
      path: via.map((p) => ({ lat: p.lat, lng: p.lng })),
    },
  ];
}

export function nearestHospital<T extends { lat: number; lng: number }>(
  origin: { lat: number; lng: number },
  list: T[],
) {
  return [...list].sort((a, b) => haversine(origin, a) - haversine(origin, b))[0];
}

export function classifyReport(text: string): CivicReport["kind"] {
  const lower = text.toLowerCase();
  const hit = LEXICON.find((item) => lower.includes(item.word));
  return hit?.kind ?? "other";
}
