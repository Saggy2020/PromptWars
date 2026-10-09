type LiveBody = {
  temp: number | null;
  code: number | null;
  sky: string | null;
  aqi: number | null;
  wind: number | null;
  humidity: number | null;
  rain: number | null;
  hours: { label: string; temp: number; rain: number }[];
  status: "live" | "offline";
  updated: string | null;
};

let cache: { at: number; body: LiveBody } | null = null;

const MET =
  "https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=19.08&lon=72.88";

function skyFrom(symbol: string | undefined) {
  const s = (symbol ?? "").split("_")[0];
  const map: Record<string, string> = {
    clearsky: "Clear",
    fair: "Fair",
    partlycloudy: "Partly cloudy",
    cloudy: "Cloudy",
    fog: "Fog",
    rain: "Rain",
    lightrain: "Light rain",
    heavyrain: "Heavy rain",
    rainshowers: "Showers",
    lightrainshowers: "Light showers",
    heavyrainshowers: "Heavy showers",
    thunderstorm: "Thunderstorm",
  };
  return map[s] ?? "Live conditions";
}

function json(body: LiveBody) {
  return new Response(JSON.stringify(body), {
    status: 200,
    headers: { "content-type": "application/json", "cache-control": "no-store" },
  });
}

const offline: LiveBody = {
  temp: null,
  code: null,
  sky: null,
  aqi: null,
  wind: null,
  humidity: null,
  rain: null,
  hours: [],
  status: "offline",
  updated: null,
};

export async function handleLive(): Promise<Response> {
  if (cache && Date.now() - cache.at < 120_000) return json(cache.body);
  try {
    const res = await fetch(MET, {
      headers: { "User-Agent": "CityLife/1.0 mumbai-explorer", Accept: "application/json" },
    });
    if (!res.ok) throw new Error("upstream");
    const data = await res.json();
    const series = (data?.properties?.timeseries ?? []).filter(
      (row: { time: string }) => new Date(row.time).getTime() >= Date.now() - 45 * 60_000,
    );
    const slice = series.slice(0, 6);
    if (!slice.length) throw new Error("empty");
    const current = slice[0];
    const details = current.data?.instant?.details ?? {};
    const next = current.data?.next_1_hours;
    const hours = slice.map((row: { time: string; data?: { instant?: { details?: { air_temperature?: number } }; next_1_hours?: { details?: { precipitation_amount?: number; probability_of_precipitation?: number } } } }) => ({
      label: new Date(row.time).toLocaleTimeString("en-IN", { hour: "numeric", timeZone: "Asia/Kolkata" }),
      temp: Math.round(row.data?.instant?.details?.air_temperature ?? 0),
      rain: Math.round(
        row.data?.next_1_hours?.details?.probability_of_precipitation ??
          (row.data?.next_1_hours?.details?.precipitation_amount ? 60 : 0),
      ),
    }));
    const body: LiveBody = {
      temp: details.air_temperature ?? null,
      code: null,
      sky: skyFrom(next?.summary?.symbol_code),
      aqi: null,
      wind: details.wind_speed != null ? Math.round(details.wind_speed * 3.6) : null,
      humidity: details.relative_humidity != null ? Math.round(details.relative_humidity) : null,
      rain: next?.details?.precipitation_amount ?? 0,
      hours,
      status: "live",
      updated: new Date().toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Asia/Kolkata",
      }),
    };
    cache = { at: Date.now(), body };
    return json(body);
  } catch {
    if (cache) return json(cache.body);
    return json(offline);
  }
}
