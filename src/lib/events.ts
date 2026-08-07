import fs from "fs";
import path from "path";

export interface EventLink {
  name: string;
  url: string;
  icon: string;
  active: boolean;
}

export interface EventMeta {
  title: string;
  subtitle: string;
  details: string;
}

export interface EventEntry {
  date: string;
  dateEnd: string;
  title: string;
  location: string;
  type: string;
  link: string;
  eventId?: string;
  urlInregistrare?: string;
  urlFeedback?: string;
  event?: EventMeta;
  links?: EventLink[];
}

export function getAllEvents(): EventEntry[] {
  const file = path.join(process.cwd(), "public", "data", "evenimente.json");
  return JSON.parse(fs.readFileSync(file, "utf-8")) as EventEntry[];
}

export function getEventById(eventId: string): EventEntry | undefined {
  return getAllEvents().find((e) => e.eventId === eventId);
}

export function eventJsonLd(entry: EventEntry, baseUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: entry.title,
    startDate: entry.date,
    endDate: entry.dateEnd,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: entry.location,
      address: { "@type": "PostalAddress", addressLocality: entry.location, addressCountry: "RO" },
    },
    organizer: {
      "@type": "Organization",
      name: "Predicare Expozitivă",
      url: baseUrl,
    },
    inLanguage: "ro",
    ...(entry.event?.subtitle ? { description: entry.event.subtitle } : {}),
    ...(entry.eventId ? { url: `${baseUrl}/events/${entry.eventId}` } : {}),
  };
}
