import { create } from "zustand";
import { REPORTS, type CivicReport, type Mood } from "@/data/mumbai";

type State = {
  mood: Mood | null;
  saved: string[];
  reports: CivicReport[];
  theme: "dark" | "light";
  query: string;
  kindFilter: string;
  setMood: (mood: Mood | null) => void;
  toggleSaved: (id: string) => void;
  setQuery: (q: string) => void;
  setKind: (k: string) => void;
  setTheme: (t: "dark" | "light") => void;
  addReport: (report: CivicReport) => void;
  upvote: (id: string) => void;
};

const KEY = "citylife-mumbai-v1";

function load(): Partial<State> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as Partial<State>;
    return {
      mood: parsed.mood ?? null,
      saved: parsed.saved ?? [],
      reports: parsed.reports?.length ? parsed.reports : REPORTS,
      theme: parsed.theme === "light" ? "light" : "dark",
    };
  } catch {
    return {};
  }
}

export const useCity = create<State>((set, get) => ({
  mood: null,
  saved: [],
  reports: REPORTS,
  theme: "dark",
  query: "",
  kindFilter: "all",
  setMood: (mood) => set({ mood }),
  toggleSaved: (id) => {
    const saved = get().saved.includes(id)
      ? get().saved.filter((x) => x !== id)
      : [...get().saved, id];
    set({ saved });
  },
  setQuery: (query) => set({ query }),
  setKind: (kindFilter) => set({ kindFilter }),
  setTheme: (theme) => set({ theme }),
  addReport: (report) => set({ reports: [report, ...get().reports] }),
  upvote: (id) =>
    set({
      reports: get().reports.map((r) => (r.id === id ? { ...r, votes: r.votes + 1 } : r)),
    }),
}));

export function hydrateCity() {
  const data = load();
  useCity.setState({
    mood: data.mood ?? null,
    saved: data.saved ?? [],
    reports: data.reports ?? REPORTS,
    theme: data.theme ?? "dark",
  });
}

export function persistCity() {
  const { mood, saved, reports, theme } = useCity.getState();
  const slim = reports.map((r) => {
    if (r.text.startsWith("data:image") || r.text.length > 4000) {
      return { ...r, text: r.text.slice(0, 500) };
    }
    return r;
  });
  localStorage.setItem(KEY, JSON.stringify({ mood, saved, reports: slim, theme }));
}
