import { useEffect, useRef, useState } from "react";
import type { CivicReport, Place } from "@/data/mumbai";
import { CITY } from "@/data/mumbai";

type Props = {
  places: Place[];
  reports: CivicReport[];
  activeId?: string | null;
  path?: { lat: number; lng: number }[];
  onSelect: (id: string) => void;
};

export function MapCanvas({ places, reports, activeId, path, onSelect }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const mapRef = useRef<import("leaflet").Map | null>(null);
  const layerRef = useRef<import("leaflet").LayerGroup | null>(null);
  const selectRef = useRef(onSelect);
  const [booted, setBooted] = useState(0);
  selectRef.current = onSelect;

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const L = await import("leaflet");
      await import("leaflet/dist/leaflet.css");
      if (cancelled || !ref.current || mapRef.current) return;
      const map = L.map(ref.current, { zoomControl: false }).setView(
        [CITY.center.lat, CITY.center.lng],
        CITY.zoom,
      );
      L.control.zoom({ position: "bottomright" }).addTo(map);
      L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
        attribution: "&copy; OSM &copy; CARTO",
        subdomains: "abcd",
        maxZoom: 19,
      }).addTo(map);
      layerRef.current = L.layerGroup().addTo(map);
      mapRef.current = map;
      setBooted((n) => n + 1);
      window.setTimeout(() => map.invalidateSize(), 250);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const signature = JSON.stringify({
    ids: places.map((p) => p.id),
    activeId,
    reports: reports.map((r) => r.id),
    path,
  });

  useEffect(() => {
    const map = mapRef.current;
    const layer = layerRef.current;
    if (!map || !layer) return;
    let dead = false;
    (async () => {
      const L = await import("leaflet");
      if (dead || !layerRef.current || !mapRef.current) return;
      layerRef.current.clearLayers();
      for (const place of places) {
        const active = place.id === activeId;
        const color = place.safety >= 75 ? "#7dba8a" : place.safety >= 55 ? "#e2a23a" : "#d4654a";
        const size = active ? 18 : 12;
        const icon = L.divIcon({
          className: "",
          html: `<div style="width:${size}px;height:${size}px;border-radius:999px;background:${color};border:2px solid #f4f1e8;box-shadow:0 0 0 4px rgba(0,0,0,.35)"></div>`,
          iconSize: [size, size],
          iconAnchor: [size / 2, size / 2],
        });
        L.marker([place.lat, place.lng], { icon })
          .addTo(layerRef.current)
          .on("click", () => selectRef.current(place.id));
      }
      for (const report of reports) {
        const icon = L.divIcon({
          className: "",
          html: `<div style="width:8px;height:8px;border-radius:2px;background:#f4f1e8"></div>`,
          iconSize: [8, 8],
          iconAnchor: [4, 4],
        });
        L.marker([report.lat, report.lng], { icon })
          .addTo(layerRef.current)
          .bindTooltip(report.text.slice(0, 90), { direction: "top" });
      }
      if (path && path.length > 1) {
        L.polyline(
          path.map((p) => [p.lat, p.lng] as [number, number]),
          { color: "#e2a23a", weight: 4, opacity: 0.9 },
        ).addTo(layerRef.current);
        mapRef.current.fitBounds(L.latLngBounds(path.map((p) => [p.lat, p.lng] as [number, number])), {
          padding: [24, 24],
        });
      }
      mapRef.current.invalidateSize();
    })();
    return () => {
      dead = true;
    };
  }, [signature, places, reports, activeId, path, booted]);

  return <div ref={ref} className="h-full min-h-72 w-full" />;
}
