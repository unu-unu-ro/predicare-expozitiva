import type { Metadata } from "next";
import EventGrupe from "./EventGrupe";

export const metadata: Metadata = {
  title: "Grupe de lucru",
  description: "Grupele de lucru ale atelierului de predicare expozitivă.",
  robots: { index: false, follow: true },
};

export default function Page() {
  return <EventGrupe />;
}
