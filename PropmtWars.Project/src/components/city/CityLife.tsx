import { useEffect, useMemo, useState } from "react";
import {
  Compass,
  GitCompare,
  Landmark,
  MapPinned,
  Moon,
  Shield,
  Sun,
  Radio,
  Bookmark,
  Search,
  Mic,
  X,
  Phone,
} from "lucide-react";
import { CITY, EMERGENCY, HISTORY, HOSPITALS, MOODS, PLACES, type Mood, type Place } from "@/data/mumbai";
import {
  classifyReport,
  extractInsights,
  hourInMumbai,
  nearestHospital,
  overall,
  recommend,
  reportsNear,
  routeOptions,
  SCORE_LABELS,
  scoresFor,
  trafficBand,
  type ScoreKey,
} from "@/lib/city-logic";
import { hydrateCity, persistCity, useCity } from "@/lib/city-store";
import { cn } from "@/lib/cn";
import { MapCanvas } from "./MapCanvas";

type Tab = "today" | "explore" | "culture" | "safety" | "compare" | "pulse";

type LiveConditions = {
  temp: number | null;
  code: number | null;
  sky: string | null;
  aqi: number | null;
  wind: number | null;
  humidity: number | null;
  rain: number | null;
  updated: string | null;
  hours: { label: string; temp: number; rain: number }[];
  status: "loading" | "live" | "offline";
};

const EMPTY_LIVE: LiveConditions = {
  temp: null,
  code: null,
  sky: null,
  aqi: null,
  wind: null,
  humidity: null,
  rain: null,
  updated: null,
  hours: [],
  status: "loading",
};

const TABS: { id: Tab; label: string; icon: typeof Compass }[] = [
  { id: "today", label: "Today", icon: Radio },
  { id: "explore", label: "Explore", icon: Compass },
  { id: "culture", label: "Culture", icon: Landmark },
  { id: "safety", label: "Safety", icon: Shield },
  { id: "compare", label: "Compare", icon: GitCompare },
  { id: "pulse", label: "Pulse", icon: MapPinned },
];

const KINDS = ["all", "food", "landmark", "hotel", "experience", "neighborhood"] as const;

export function CityLife() {
  const store = useCity();
  const [ready, setReady] = useState(false);
  const [tab, setTab] = useState<Tab>("today");
  const [activeId, setActiveId] = useState<string | null>("marine");
  const [compareA, setCompareA] = useState("bandra-hood");
  const [compareB, setCompareB] = useState("kurla");
  const [routeFrom, setRouteFrom] = useState("csmt");
  const [routeTo, setRouteTo] = useState("marine");
  const [routeId, setRouteId] = useState("safer");
  const [sos, setSos] = useState(false);
  const [reportText, setReportText] = useState("");
  const [listening, setListening] = useState(false);
  const [live, setLive] = useState<LiveConditions>(EMPTY_LIVE);
  const [now, setNow] = useState(() => new Date());
  const hour = hourInMumbai(now);

  useEffect(() => {
    hydrateCity();
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    document.documentElement.dataset.theme = store.theme;
    persistCity();
  }, [ready, store.theme, store.mood, store.saved, store.reports]);

  useEffect(() => {
    const tick = window.setInterval(() => setNow(new Date()), 30_000);
    return () => window.clearInterval(tick);
  }, []);

  useEffect(() => {
    let ignore = false;
    async function pull() {
      try {
        const res = await fetch("/api/live");
        if (!res.ok) throw new Error("live");
        const body = await res.json();
        if (ignore) return;
        setLive({
          temp: body.temp ?? null,
          code: body.code ?? null,
          sky: body.sky ?? null,
          wind: body.wind ?? null,
          humidity: body.humidity ?? null,
          rain: body.rain ?? null,
          aqi: body.aqi ?? null,
          hours: Array.isArray(body.hours) ? body.hours : [],
          updated: body.updated ?? null,
          status: body.status === "live" ? "live" : "offline",
        });
      } catch {
        if (!ignore) {
          setLive((prev) => ({ ...prev, status: prev.status === "live" ? "live" : "offline" }));
        }
      }
    }
    pull();
    const id = window.setInterval(pull, 3 * 60_000);
    return () => {
      ignore = true;
      window.clearInterval(id);
    };
  }, []);

  const filtered = useMemo(() => {
    const q = store.query.trim().toLowerCase();
    return PLACES.filter((p) => {
      if (store.kindFilter !== "all" && p.kind !== store.kindFilter) return false;
      if (store.mood && !p.moods.includes(store.mood) && p.kind !== "neighborhood") return false;
      if (!q) return true;
      return (
        p.name.toLowerCase().includes(q) ||
        p.area.toLowerCase().includes(q) ||
        p.tags.some((t) => t.includes(q)) ||
        (p.cuisine?.toLowerCase().includes(q) ?? false)
      );
    });
  }, [store.query, store.kindFilter, store.mood]);

  const recs = useMemo(
    () => recommend(PLACES, store.mood, hour, store.reports).slice(0, 4),
    [store.mood, store.reports, hour],
  );
  const insights = useMemo(() => extractInsights(store.reports), [store.reports]);
  const traffic = trafficBand(hour);
  const active = PLACES.find((p) => p.id === activeId) ?? null;
  const from = PLACES.find((p) => p.id === routeFrom) ?? PLACES[0];
  const to = PLACES.find((p) => p.id === routeTo) ?? PLACES[1];
  const routes = routeOptions(from, to, hour, store.reports);
  const chosen = routes.find((r) => r.id === routeId) ?? routes[0];
  const hospital = nearestHospital(active ?? CITY.center, HOSPITALS);

  function openPlace(id: string) {
    setActiveId(id);
    setTab("explore");
  }

  function startVoice() {
    const Rec = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!Rec) {
      setReportText((t) => t || "Voice input is not available in this browser.");
      return;
    }
    const rec = new Rec();
    rec.lang = "en-IN";
    rec.onstart = () => setListening(true);
    rec.onend = () => setListening(false);
    rec.onresult = (ev) => {
      const text = ev.results[0]?.[0]?.transcript ?? "";
      if (tab === "pulse") setReportText(text);
      else store.setQuery(text);
    };
    rec.start();
  }

  function submitReport() {
    const text = reportText.trim();
    if (text.length < 8) return;
    const anchor = active ?? PLACES[4];
    store.addReport({
      id: `u-${Date.now()}`,
      lat: anchor.lat + (Math.random() - 0.5) * 0.01,
      lng: anchor.lng + (Math.random() - 0.5) * 0.01,
      area: anchor.area,
      text,
      kind: classifyReport(text),
      at: new Date().toISOString(),
      votes: 1,
      source: "you",
    });
    setReportText("");
    setTab("pulse");
  }

  return (
    <div className="min-h-screen bg-bg text-fg">
      <header className="sticky top-0 z-30 border-b border-border bg-bg/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-3 px-4 py-3">
          <div className="min-w-0">
            <p className="font-display text-xl leading-none tracking-tight">City Life</p>
            <p className="text-sm text-muted">
              {CITY.name} · {CITY.tagline}
            </p>
          </div>
          <label className="relative ml-auto min-w-[12rem] flex-1">
            <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted" />
            <input
              value={store.query}
              onChange={(e) => store.setQuery(e.target.value)}
              placeholder="Search food, Fort, hidden gems…"
              className="h-11 w-full rounded-md border border-border bg-surface pr-12 pl-10 text-sm outline-none focus:border-primary"
            />
            <button
              type="button"
              aria-label="Voice search"
              onClick={startVoice}
              className={cn(
                "absolute top-1/2 right-1 grid size-9 -translate-y-1/2 place-items-center rounded-md",
                listening ? "bg-primary text-primary-fg" : "text-muted",
              )}
            >
              <Mic className="size-4" />
            </button>
          </label>
          <button
            type="button"
            onClick={() => store.setTheme(store.theme === "dark" ? "light" : "dark")}
            className="grid size-11 place-items-center rounded-md border border-border bg-surface"
            aria-label="Toggle theme"
          >
            {store.theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
          <button
            type="button"
            onClick={() => setSos(true)}
            className="h-11 rounded-md bg-danger px-3 text-sm font-semibold text-fg"
          >
            SOS
          </button>
        </div>
        <nav className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 pb-3">
          {TABS.map((item) => {
            const Icon = item.icon;
            const on = tab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setTab(item.id)}
                className={cn(
                  "flex h-10 shrink-0 items-center gap-2 rounded-md px-3 text-sm",
                  on ? "bg-primary text-primary-fg" : "bg-surface text-fg",
                )}
              >
                <Icon className="size-4" />
                {item.label}
              </button>
            );
          })}
        </nav>
      </header>

      <main className="mx-auto max-w-6xl overflow-x-hidden px-4 py-5">
        {tab === "today" && (
          <Today
            hour={hour}
            weather={live}
            traffic={traffic}
            recs={recs}
            insights={insights}
            onOpen={openPlace}
            mood={store.mood}
            setMood={store.setMood}
          />
        )}
        {tab === "explore" && (
          <Explore
            places={filtered}
            reports={store.reports}
            active={active}
            hour={hour}
            saved={store.saved}
            onSelect={setActiveId}
            onToggleSave={store.toggleSaved}
            kind={store.kindFilter}
            setKind={store.setKind}
            mood={store.mood}
            setMood={store.setMood}
          />
        )}
        {tab === "culture" && <Culture onOpen={openPlace} />}
        {tab === "safety" && (
          <Safety
            from={from}
            to={to}
            setFrom={setRouteFrom}
            setTo={setRouteTo}
            routes={routes}
            chosen={chosen}
            setRouteId={setRouteId}
            reports={store.reports}
            onSelect={openPlace}
          />
        )}
        {tab === "compare" && (
          <Compare
            aId={compareA}
            bId={compareB}
            setA={setCompareA}
            setB={setCompareB}
            hour={hour}
            reports={store.reports}
          />
        )}
        {tab === "pulse" && (
          <Pulse
            insights={insights}
            reports={store.reports}
            text={reportText}
            setText={setReportText}
            onSubmit={submitReport}
            onVoice={startVoice}
            listening={listening}
            upvote={store.upvote}
            weather={live}
            traffic={traffic}
          />
        )}
      </main>

      {sos && (
        <div className="fixed inset-0 z-50 grid place-items-end bg-bg/70 p-4 sm:place-items-center">
          <div className="w-full max-w-md rounded-lg border border-border bg-surface p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="font-display text-2xl">Help nearby</h2>
                <p className="text-sm text-muted">
                  Nearest listed hospital: {hospital.name} ({hospital.area})
                </p>
              </div>
              <button type="button" aria-label="Close" onClick={() => setSos(false)} className="grid size-10 place-items-center">
                <X className="size-4" />
              </button>
            </div>
            <ul className="mt-4 space-y-2">
              {EMERGENCY.map((e) => (
                <li key={e.phone}>
                  <a href={`tel:${e.phone}`} className="flex items-center justify-between rounded-md bg-surface-2 px-3 py-3">
                    <span>{e.name}</span>
                    <span className="flex items-center gap-2 font-semibold text-primary">
                      <Phone className="size-4" /> {e.phone}
                    </span>
                  </a>
                </li>
              ))}
              <li>
                <a href={`tel:${hospital.phone}`} className="flex items-center justify-between rounded-md bg-surface-2 px-3 py-3">
                  <span>{hospital.name}</span>
                  <span className="font-semibold text-primary">{hospital.phone}</span>
                </a>
              </li>
            </ul>
            <p className="mt-3 text-xs text-muted">
              Location stays on this device. Sharing uses your phone’s dialer — nothing is uploaded.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

function MoodRow({ mood, setMood }: { mood: Mood | null; setMood: (m: Mood | null) => void }) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1">
      <button
        type="button"
        onClick={() => setMood(null)}
        className={cn("h-9 shrink-0 rounded-md px-3 text-sm", mood === null ? "bg-primary text-primary-fg" : "bg-surface-2")}
      >
        Any mood
      </button>
      {MOODS.map((m) => (
        <button
          key={m.id}
          type="button"
          onClick={() => setMood(mood === m.id ? null : m.id)}
          className={cn("h-9 shrink-0 rounded-md px-3 text-sm", mood === m.id ? "bg-primary text-primary-fg" : "bg-surface-2")}
        >
          {m.label}
        </button>
      ))}
    </div>
  );
}

function Meter({ label, value, hint }: { label: string; value: number; hint?: string }) {
  return (
    <div>
      <div className="flex justify-between text-xs text-muted">
        <span>{label}</span>
        <span className="text-fg">{value}</span>
      </div>
      <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-surface-2">
        <div
          className={cn("h-full rounded-full", value >= 70 ? "bg-ok" : value >= 50 ? "bg-primary" : "bg-danger")}
          style={{ width: `${value}%` }}
        />
      </div>
      {hint && <p className="mt-1 text-xs text-muted">{hint}</p>}
    </div>
  );
}

function Today({
  hour,
  weather,
  traffic,
  recs,
  insights,
  onOpen,
  mood,
  setMood,
}: {
  hour: number;
  weather: LiveConditions;
  traffic: { label: string; detail: string; level: number };
  recs: ReturnType<typeof recommend>;
  insights: ReturnType<typeof extractInsights>;
  onOpen: (id: string) => void;
  mood: Mood | null;
  setMood: (m: Mood | null) => void;
}) {
  const sky = weather.sky ?? weatherLabel(weather.code);
  return (
    <div className="space-y-6">
      <section className="grid min-w-0 gap-3 sm:grid-cols-3">
        <article className="min-w-0 overflow-hidden rounded-lg border border-border bg-surface p-4 sm:col-span-2">
          <p className="text-xs tracking-wide text-muted uppercase">
            Live weather ·{" "}
            {weather.status === "live"
              ? `updated ${weather.updated}`
              : weather.status === "offline"
                ? "feed offline"
                : "connecting"}
          </p>
          <p className="font-display mt-2 text-3xl">{weather.temp == null ? "—" : `${Math.round(weather.temp)}°`}</p>
          <p className="text-sm text-muted">
            {sky}
            {weather.humidity != null ? ` · ${Math.round(weather.humidity)}% humidity` : ""}
            {weather.wind != null ? ` · wind ${Math.round(weather.wind)} km/h` : ""}
            {weather.rain != null ? ` · rain ${weather.rain} mm` : ""}
            {" · "}AQI {weather.aqi == null ? "—" : Math.round(weather.aqi)}
          </p>
          {weather.hours.length > 0 && (
            <ul className="mt-3 flex gap-2 overflow-x-auto">
              {weather.hours.map((h) => (
                <li key={h.label} className="min-w-16 rounded-md bg-surface-2 px-2 py-2 text-center text-xs">
                  <p className="text-muted">{h.label}</p>
                  <p className="font-medium text-fg">{h.temp}°</p>
                  <p className="text-muted">{h.rain}% rain</p>
                </li>
              ))}
            </ul>
          )}
        </article>
        <article className="rounded-lg border border-border bg-surface p-4">
          <p className="text-xs tracking-wide text-muted uppercase">Traffic pattern · {hour}:00 IST</p>
          <p className="font-display mt-2 text-3xl">{traffic.label}</p>
          <p className="text-sm text-muted">{traffic.detail}</p>
        </article>
        <article className="rounded-lg border border-border bg-surface p-4 sm:col-span-3">
          <p className="text-xs tracking-wide text-muted uppercase">City pulse</p>
          <p className="font-display mt-2 text-3xl">{insights.filter((i) => i.tone === "alert").length} alerts</p>
          <p className="text-sm text-muted">Drawn from citizen notes with a keyword reader, not a black-box model.</p>
        </article>
      </section>

      <section>
        <h2 className="font-display text-2xl">Explore by mood</h2>
        <div className="mt-3">
          <MoodRow mood={mood} setMood={setMood} />
        </div>
      </section>

      <section>
        <h2 className="font-display text-2xl">Worth your next hour</h2>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {recs.map(({ place, scores }) => (
            <button
              key={place.id}
              type="button"
              onClick={() => onOpen(place.id)}
              className="rounded-lg border border-border bg-surface p-4 text-left"
            >
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-display text-xl">{place.name}</h3>
                <span className="text-sm text-primary">{overall(scores)}</span>
              </div>
              <p className="mt-1 text-sm text-muted">
                {place.area} · {place.blurb}
              </p>
              <p className="mt-2 text-xs text-muted">
                Safety {scores.safety} · Gem {place.hiddenGem} · {place.hours}
              </p>
            </button>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-display text-2xl">Verified-feeling notes</h2>
        <ul className="mt-3 space-y-2">
          {insights.slice(0, 4).map((item) => (
            <li key={item.id} className="rounded-lg border border-border bg-surface px-4 py-3">
              <p className="text-xs tracking-wide text-muted uppercase">
                {item.area} · {item.topic} · {item.confidence} confidence · {item.votes} votes
              </p>
              <p className="mt-1 text-sm">{item.summary}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

function Explore({
  places,
  reports,
  active,
  hour,
  saved,
  onSelect,
  onToggleSave,
  kind,
  setKind,
  mood,
  setMood,
}: {
  places: Place[];
  reports: ReturnType<typeof useCity.getState>["reports"];
  active: Place | null;
  hour: number;
  saved: string[];
  onSelect: (id: string) => void;
  onToggleSave: (id: string) => void;
  kind: string;
  setKind: (k: string) => void;
  mood: Mood | null;
  setMood: (m: Mood | null) => void;
}) {
  const scores = active ? scoresFor(active, hour, reportsNear(active, reports)) : null;
  return (
    <div className="space-y-3">
      <MoodRow mood={mood} setMood={setMood} />
      <div className="flex gap-2 overflow-x-auto">
        {KINDS.map((k) => (
          <button
            key={k}
            type="button"
            onClick={() => setKind(k)}
            className={cn(
              "h-9 shrink-0 rounded-md px-3 text-sm capitalize",
              kind === k ? "bg-primary text-primary-fg" : "bg-surface",
            )}
          >
            {k}
          </button>
        ))}
      </div>
      <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_22rem]">
        <div className="h-[28rem] overflow-hidden rounded-lg border border-border">
          <MapCanvas places={places} reports={reports} activeId={active?.id} onSelect={onSelect} />
        </div>
        <div className="city-scroll max-h-[28rem] space-y-2 overflow-auto">
          {places.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => onSelect(p.id)}
              className={cn(
                "w-full rounded-md border px-3 py-3 text-left",
                active?.id === p.id ? "border-primary bg-surface" : "border-border bg-surface",
              )}
            >
              <div className="flex justify-between gap-2">
                <span className="font-medium">{p.name}</span>
                <span className="text-xs text-muted">{p.kind}</span>
              </div>
              <p className="text-sm text-muted">
                {p.area} · {"₹".repeat(p.price)} · {p.rating.toFixed(1)}
              </p>
            </button>
          ))}
          {places.length === 0 && <p className="text-sm text-muted">Nothing matches. Clear mood or search.</p>}
        </div>
      </div>
      {active && scores && (
        <article className="rounded-lg border border-border bg-surface p-4">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-xs tracking-wide text-muted uppercase">
                {active.area} · {active.kind}
              </p>
              <h2 className="font-display text-3xl">{active.name}</h2>
              <p className="mt-1 max-w-2xl text-sm text-muted">{active.story}</p>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => onToggleSave(active.id)}
                className="flex h-10 items-center gap-2 rounded-md border border-border px-3 text-sm"
              >
                <Bookmark className={cn("size-4", saved.includes(active.id) && "fill-primary text-primary")} />
                {saved.includes(active.id) ? "Saved" : "Save"}
              </button>
              <button
                type="button"
                onClick={() => speak(active)}
                className="h-10 rounded-md bg-primary px-3 text-sm font-semibold text-primary-fg"
              >
                Audio guide
              </button>
            </div>
          </div>
          <p className="mt-3 text-sm">{active.blurb}</p>
          <p className="mt-1 text-xs text-muted">
            Hours: {active.hours}. Scores shift after 9pm using lighting ({active.lighting}) and nearby safety notes (
            {reportsNear(active, reports).length} within 1.2 km).
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <Meter
              label="Safety now"
              value={scores.safety}
              hint={
                scores.night
                  ? `Night penalty from lighting: −${scores.lightingGap}. Reports: −${scores.reportPenalty}.`
                  : "Daytime: lighting barely moves the score."
              }
            />
            <Meter label="Cleanliness" value={scores.cleanliness} />
            <Meter label="Affordability" value={scores.affordability} />
            <Meter label="Transit" value={scores.transit} />
          </div>
          <p className="mt-3 text-sm">
            Composite <span className="text-primary">{overall(scores)}</span> — safety 28%, ratings 16%, cleanliness 12%,
            transit 10%, affordability 10%, and smaller weights for access, calm, quiet, green.
          </p>
        </article>
      )}
    </div>
  );
}

function Culture({ onOpen }: { onOpen: (id: string) => void }) {
  return (
    <div className="space-y-4">
      <header>
        <h2 className="font-display text-3xl">History that still has an address</h2>
        <p className="mt-1 max-w-2xl text-sm text-muted">
          A short civic timeline for the island city. Each beat links to a place you can open on the map.
        </p>
      </header>
      <ol className="space-y-3 border-l border-border pl-4">
        {HISTORY.map((beat) => (
          <li key={beat.id}>
            <p className="text-xs tracking-wide text-primary uppercase">
              {beat.year} · {beat.area}
            </p>
            <h3 className="font-display text-xl">{beat.title}</h3>
            <p className="text-sm text-muted">{beat.text}</p>
            {beat.placeId && (
              <button type="button" onClick={() => onOpen(beat.placeId!)} className="mt-2 text-sm text-primary">
                Show on the map
              </button>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

function Safety({
  from,
  to,
  setFrom,
  setTo,
  routes,
  chosen,
  setRouteId,
  reports,
  onSelect,
}: {
  from: Place;
  to: Place;
  setFrom: (id: string) => void;
  setTo: (id: string) => void;
  routes: ReturnType<typeof routeOptions>;
  chosen: ReturnType<typeof routeOptions>[number];
  setRouteId: (id: string) => void;
  reports: ReturnType<typeof useCity.getState>["reports"];
  onSelect: (id: string) => void;
}) {
  const hot = [...PLACES].sort((a, b) => a.safety - b.safety).slice(0, 4);
  return (
    <div className="space-y-4">
      <header>
        <h2 className="font-display text-3xl">Safer way across</h2>
        <p className="text-sm text-muted">
          Two walking options. The lit corridor prefers Marine Drive and Fort, where footfall and street lighting are higher in this dataset.
        </p>
      </header>
      <div className="grid gap-3 sm:grid-cols-2">
        <SelectPlace label="From" value={from.id} onChange={setFrom} />
        <SelectPlace label="To" value={to.id} onChange={setTo} />
      </div>
      <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="h-80 overflow-hidden rounded-lg border border-border">
          <MapCanvas places={[from, to]} reports={reports} activeId={to.id} path={chosen.path} onSelect={onSelect} />
        </div>
        <div className="space-y-2">
          {routes.map((r) => (
            <button
              key={r.id}
              type="button"
              onClick={() => setRouteId(r.id)}
              className={cn(
                "w-full rounded-md border p-3 text-left",
                chosen.id === r.id ? "border-primary bg-surface" : "border-border",
              )}
            >
              <div className="flex justify-between">
                <span className="font-medium">{r.name}</span>
                <span className="text-primary">{r.minSafety}</span>
              </div>
              <p className="text-sm text-muted">
                {r.km} km · about {r.minutes} min · via {r.via.join(" → ")}
              </p>
              <p className="mt-1 text-xs text-muted">{r.note}</p>
            </button>
          ))}
        </div>
      </div>
      <section>
        <h3 className="font-display text-xl">Lower base-safety pockets</h3>
        <ul className="mt-2 grid gap-2 sm:grid-cols-2">
          {hot.map((p) => (
            <li key={p.id}>
              <button type="button" onClick={() => onSelect(p.id)} className="w-full rounded-md bg-surface px-3 py-3 text-left">
                <span className="font-medium">{p.name}</span>
                <span className="mt-1 block text-sm text-muted">
                  Base safety {p.safety} · lighting {p.lighting}. {p.blurb}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

function Compare({
  aId,
  bId,
  setA,
  setB,
  hour,
  reports,
}: {
  aId: string;
  bId: string;
  setA: (id: string) => void;
  setB: (id: string) => void;
  hour: number;
  reports: ReturnType<typeof useCity.getState>["reports"];
}) {
  const a = PLACES.find((p) => p.id === aId) ?? PLACES[0];
  const b = PLACES.find((p) => p.id === bId) ?? PLACES[1];
  const sa = scoresFor(a, hour, reportsNear(a, reports));
  const sb = scoresFor(b, hour, reportsNear(b, reports));
  const keys = Object.keys(SCORE_LABELS) as ScoreKey[];
  return (
    <div className="space-y-4">
      <h2 className="font-display text-3xl">Best against worst, in the open</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        <SelectPlace label="Place A" value={a.id} onChange={setA} />
        <SelectPlace label="Place B" value={b.id} onChange={setB} />
      </div>
      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full min-w-[36rem] text-left text-sm">
          <thead className="bg-surface text-muted">
            <tr>
              <th className="px-3 py-2 font-medium">Measure</th>
              <th className="px-3 py-2 font-medium">{a.name}</th>
              <th className="px-3 py-2 font-medium">{b.name}</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-border">
              <td className="px-3 py-2">Composite</td>
              <td className="px-3 py-2 text-primary">{overall(sa)}</td>
              <td className="px-3 py-2 text-primary">{overall(sb)}</td>
            </tr>
            {keys.map((k) => (
              <tr key={k} className="border-t border-border">
                <td className="px-3 py-2">{SCORE_LABELS[k]}</td>
                <td className={cn("px-3 py-2", sa[k] >= sb[k] ? "text-ok" : "")}>{sa[k]}</td>
                <td className={cn("px-3 py-2", sb[k] > sa[k] ? "text-ok" : "")}>{sb[k]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-sm text-muted">
        Green marks the stronger side. Safety already includes the night lighting penalty and nearby citizen safety notes. Affordability is inverted from the price band (1–4).
      </p>
      <RankLists hour={hour} reports={reports} />
    </div>
  );
}

function RankLists({ hour, reports }: { hour: number; reports: ReturnType<typeof useCity.getState>["reports"] }) {
  const ranked = PLACES.map((p) => ({ p, s: scoresFor(p, hour, reportsNear(p, reports)) }));
  const safest = [...ranked].sort((a, b) => b.s.safety - a.s.safety).slice(0, 3);
  const gems = [...PLACES].sort((a, b) => b.hiddenGem - a.hiddenGem).slice(0, 3);
  const avoid = [...ranked]
    .filter((x) => x.s.safety < 55)
    .sort((a, b) => a.s.safety - b.s.safety)
    .slice(0, 3);
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      <Rank title="Higher safety now" rows={safest.map((x) => `${x.p.name} · ${x.s.safety}`)} />
      <Rank title="Hidden gem index" rows={gems.map((p) => `${p.name} · ${p.hiddenGem}`)} />
      <Rank title="Think twice after dark" rows={avoid.map((x) => `${x.p.name} · ${x.s.safety}`)} />
    </div>
  );
}

function Rank({ title, rows }: { title: string; rows: string[] }) {
  return (
    <section className="rounded-lg border border-border bg-surface p-4">
      <h3 className="font-medium">{title}</h3>
      <ul className="mt-2 space-y-1 text-sm text-muted">
        {rows.map((r) => (
          <li key={r}>{r}</li>
        ))}
      </ul>
    </section>
  );
}

function Pulse({
  insights,
  reports,
  text,
  setText,
  onSubmit,
  onVoice,
  listening,
  upvote,
  weather,
  traffic,
}: {
  insights: ReturnType<typeof extractInsights>;
  reports: ReturnType<typeof useCity.getState>["reports"];
  text: string;
  setText: (s: string) => void;
  onSubmit: () => void;
  onVoice: () => void;
  listening: boolean;
  upvote: (id: string) => void;
  weather: LiveConditions;
  traffic: { label: string; detail: string };
}) {
  return (
    <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_20rem]">
      <section className="space-y-3">
        <h2 className="font-display text-3xl">Your city today</h2>
        <p className="text-sm text-muted">
          {weather.temp == null
            ? "Weather feed is connecting."
            : `${Math.round(weather.temp)}° and ${(weather.sky ?? weatherLabel(weather.code)).toLowerCase()}${weather.wind != null ? `, wind ${Math.round(weather.wind)} km/h` : ""}.`}{" "}
          {weather.aqi == null ? "Air quality is not in this feed." : `Air quality index ${Math.round(weather.aqi)}.`} Refreshes every 3 minutes
          {weather.updated ? ` (last ${weather.updated})` : ""}. Traffic is {traffic.label.toLowerCase()} — {traffic.detail}
        </p>
        <ul className="space-y-2">
          {insights.map((item) => (
            <li key={item.id} className="rounded-lg border border-border bg-surface p-3">
              <p className="text-xs text-muted uppercase">
                {item.tone} · {item.topic} · {item.area}
              </p>
              <p className="mt-1 text-sm">{item.summary}</p>
            </li>
          ))}
        </ul>
        <h3 className="font-display pt-2 text-xl">Citizen notes</h3>
        <ul className="space-y-2">
          {reports.map((r) => (
            <li key={r.id} className="rounded-md border border-border px-3 py-3">
              <p className="text-xs text-muted">
                {r.area} · {r.kind} · {r.source === "you" ? "you" : "civic sample"} ·{" "}
                {new Date(r.at).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
              </p>
              <p className="text-sm">{r.text}</p>
              <button type="button" onClick={() => upvote(r.id)} className="mt-2 text-sm text-primary">
                Useful · {r.votes}
              </button>
            </li>
          ))}
        </ul>
      </section>
      <form
        className="h-fit rounded-lg border border-border bg-surface p-4"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <h3 className="font-display text-xl">Add a note</h3>
        <p className="mt-1 text-sm text-muted">
          Dropped near the place you last opened. Keywords such as flood, festival, theft, or traffic set the topic.
        </p>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={5}
          className="mt-3 w-full rounded-md border border-border bg-bg p-3 text-sm outline-none"
          placeholder="Example: Street festival starting at Kala Ghoda, lanes closed."
        />
        <div className="mt-3 flex gap-2">
          <button
            type="button"
            onClick={onVoice}
            className={cn("h-10 rounded-md border border-border px-3 text-sm", listening && "bg-primary text-primary-fg")}
          >
            {listening ? "Listening…" : "Voice note"}
          </button>
          <button type="submit" className="h-10 rounded-md bg-primary px-3 text-sm font-semibold text-primary-fg">
            Publish
          </button>
        </div>
      </form>
    </div>
  );
}

function SelectPlace({ label, value, onChange }: { label: string; value: string; onChange: (id: string) => void }) {
  return (
    <label className="block text-sm">
      <span className="text-muted">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 h-11 w-full rounded-md border border-border bg-surface px-3"
      >
        {PLACES.map((p) => (
          <option key={p.id} value={p.id}>
            {p.name}
          </option>
        ))}
      </select>
    </label>
  );
}

function weatherLabel(code: number | null) {
  if (code == null) return "Conditions pending";
  if (code === 0) return "Clear";
  if (code <= 3) return "Partly cloudy";
  if (code <= 48) return "Foggy";
  if (code <= 67) return "Rain";
  if (code <= 77) return "Snow — unlikely";
  if (code <= 82) return "Showers";
  return "Storm risk";
}

function speak(place: Place) {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(`${place.name}. ${place.story}`);
  u.lang = "en-IN";
  window.speechSynthesis.speak(u);
}

declare global {
  interface Window {
    webkitSpeechRecognition?: SpeechRecognitionConstructor;
    SpeechRecognition?: SpeechRecognitionConstructor;
  }
}

type SpeechRecognitionConstructor = new () => {
  lang: string;
  start: () => void;
  onstart: (() => void) | null;
  onend: (() => void) | null;
  onresult: ((ev: { results: { 0: { 0: { transcript: string } } } }) => void) | null;
};
