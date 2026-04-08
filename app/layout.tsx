import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-cormorant",
});

const BASE_URL = "https://predicare-expozitiva.ro";
const SITE_NAME = "Predicare Expozitivă – Ateliere de predicare";

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: "%s | Predicare Expozitivă",
  },
  description:
    "Ateliere de predicare expozitivă în România, în parteneriat cu Charles Simeon Trust. Formăm predicatori care mânuiesc drept Cuvântul adevărului.",
  metadataBase: new URL(BASE_URL),
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "ro_RO",
    url: BASE_URL,
    title: SITE_NAME,
    description:
      "Ateliere de predicare expozitivă în România, în parteneriat cu Charles Simeon Trust.",
    images: [{ url: "/hero-bible.jpg" }],
  },
  alternates: { canonical: BASE_URL },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro">
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Predicare expozitiva" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={cormorantGaramond.variable}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
