import type { Metadata } from "next";
import EvenimentePage from "./EvenimentePage";

const BASE_URL = "https://predicare-expozitiva.ro";

export const metadata: Metadata = {
  title: "Evenimente",
  description:
    "Vezi calendarul atelierelor de predicare expozitivă din România. Află când și unde are loc următorul eveniment CST.",
  alternates: { canonical: `${BASE_URL}/evenimente` },
  openGraph: {
    title: "Evenimente | Predicare Expozitivă",
    description:
      "Vezi calendarul atelierelor de predicare expozitivă din România.",
    url: `${BASE_URL}/evenimente`,
    images: [{ url: `${BASE_URL}/hero-bible.jpg` }],
  },
};

export default function Page() {
  return <EvenimentePage />;
}
