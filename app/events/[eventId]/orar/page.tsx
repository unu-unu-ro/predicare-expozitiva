import type { Metadata } from "next";
import EventOrar from "./EventOrar";

export const metadata: Metadata = {
  title: "Orar zilnic",
  description: "Programul zilnic al atelierului de predicare expozitivă.",
  robots: { index: false, follow: true },
};

export default function Page() {
  return <EventOrar />;
}
