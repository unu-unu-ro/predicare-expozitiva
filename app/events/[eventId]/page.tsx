import type { Metadata } from "next";
import EventHub from "./EventHub";
import { getAllEvents, getEventById, eventJsonLd } from "@/lib/events";

const BASE_URL = "https://predicare-expozitiva.ro";

export function generateStaticParams() {
  return getAllEvents()
    .filter((e) => e.eventId)
    .map((e) => ({ eventId: e.eventId as string }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ eventId: string }>;
}): Promise<Metadata> {
  const { eventId } = await params;
  const entry = getEventById(eventId);

  if (!entry) {
    return { title: "Eveniment", robots: { index: false, follow: true } };
  }

  const title = entry.event?.title
    ? `${entry.title} – ${entry.event.title}`
    : entry.title;
  const description = entry.event
    ? `${entry.event.subtitle}. ${entry.event.details}`
    : `Atelier de predicare expozitivă în ${entry.location}.`;

  return {
    title,
    description,
    alternates: { canonical: `${BASE_URL}/events/${eventId}` },
    openGraph: {
      title: `${title} | Predicare Expozitivă`,
      description,
      url: `${BASE_URL}/events/${eventId}`,
      images: [{ url: `${BASE_URL}/hero-bible.jpg` }],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ eventId: string }>;
}) {
  const { eventId } = await params;
  const entry = getEventById(eventId);

  return (
    <>
      {entry && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(eventJsonLd(entry, BASE_URL)),
          }}
        />
      )}
      <EventHub />
    </>
  );
}
