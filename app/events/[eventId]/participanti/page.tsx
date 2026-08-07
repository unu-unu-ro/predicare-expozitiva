import type { Metadata } from "next";
import EventParticipanti from "./EventParticipanti";

export const metadata: Metadata = {
  title: "Listă participanți",
  description: "Lista participanților la atelierul de predicare expozitivă.",
  robots: { index: false, follow: true },
};

export default function Page() {
  return <EventParticipanti />;
}
