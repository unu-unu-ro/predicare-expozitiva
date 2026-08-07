import type { MetadataRoute } from "next";
import { getAllEvents } from "@/lib/events";

const BASE_URL = "https://predicare-expozitiva.ro";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/despre`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/evenimente`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/resurse`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/ghid`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/abonare`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];

  const eventPages: MetadataRoute.Sitemap = getAllEvents()
    .filter((e) => e.eventId)
    .map((e) => ({
      url: `${BASE_URL}/events/${e.eventId}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }));

  return [...staticPages, ...eventPages];
}
