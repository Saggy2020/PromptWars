import { createFileRoute } from "@tanstack/react-router";
import { handleLive } from "@/lib/live-weather.server";

export const Route = createFileRoute("/api/live")({
  server: { handlers: { GET: () => handleLive() } },
});
