import { createFileRoute } from "@tanstack/react-router";
import { CityLife } from "@/components/city/CityLife";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <CityLife />;
}
