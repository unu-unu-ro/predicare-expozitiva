import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  jsonLd?: Record<string, unknown>;
}

const SITE_NAME = "CST România – Ateliere de Predicare Expozitivă";
const BASE_URL = "https://cst.unu-unu.ro";

const SEOHead = ({ title, description, path, type = "website", jsonLd }: SEOHeadProps) => {
  const fullTitle = path === "/" ? SITE_NAME : `${title} | CST România`;
  const canonicalUrl = `${BASE_URL}${path}`;

  useEffect(() => {
    document.title = fullTitle;

    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("name", "description", description);
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", type);
    setMeta("property", "og:url", canonicalUrl);
    setMeta("property", "og:site_name", SITE_NAME);
    setMeta("property", "og:locale", "ro_RO");
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);

    // JSON-LD
    const ldId = "seo-jsonld";
    let ldScript = document.getElementById(ldId) as HTMLScriptElement | null;
    const ldData = jsonLd || {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: fullTitle,
      description,
      url: canonicalUrl,
      isPartOf: {
        "@type": "WebSite",
        name: SITE_NAME,
        url: BASE_URL,
      },
    };
    if (!ldScript) {
      ldScript = document.createElement("script");
      ldScript.id = ldId;
      ldScript.type = "application/ld+json";
      document.head.appendChild(ldScript);
    }
    ldScript.textContent = JSON.stringify(ldData);

    return () => {
      ldScript?.remove();
    };
  }, [fullTitle, description, canonicalUrl, type, jsonLd]);

  return null;
};

export default SEOHead;
