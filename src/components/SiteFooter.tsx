import Link from "next/link";

const SiteFooter = () => (
  <footer className="bg-primary text-primary-foreground relative overflow-hidden">
    <div className="absolute inset-0 opacity-[0.03] section-lines" />
    <div className="relative z-10 max-w-3xl mx-auto px-5 py-8">
      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <h3 className="font-display text-lg font-bold mb-3">
            Ateliere de Predicare Expozitivă
          </h3>
          <p className="text-sm opacity-80 leading-relaxed">
            În parteneriat cu Charles Simeon Trust, formăm următoarea generație
            de predicatori expozitivi în România.
          </p>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold mb-3 uppercase tracking-wider opacity-70">
            Navigare
          </h4>
          <div className="flex flex-col gap-2 text-sm">
            <Link
              href="/evenimente"
              className="opacity-80 hover:opacity-100 transition-opacity"
            >
              Evenimente
            </Link>
            <Link
              href="/resurse"
              className="opacity-80 hover:opacity-100 transition-opacity"
            >
              Resurse
            </Link>
            <Link
              href="/despre"
              className="opacity-80 hover:opacity-100 transition-opacity"
            >
              Despre
            </Link>
            <Link
              href="/contact"
              className="opacity-80 hover:opacity-100 transition-opacity"
            >
              Contact
            </Link>
            <Link
              href="/abonare"
              className="opacity-80 hover:opacity-100 transition-opacity"
            >
              Abonare
            </Link>
          </div>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold mb-3 uppercase tracking-wider opacity-70">
            Partener
          </h4>
          <a
            href="https://simeontrust.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm opacity-80 hover:opacity-100 transition-opacity underline underline-offset-2"
          >
            Charles Simeon Trust
          </a>
        </div>
      </div>
      <div className="mt-6 pt-4 border-t border-primary-foreground/20 text-center text-xs opacity-60">
        © {new Date().getFullYear()} Ateliere de predicare expozitivă
      </div>
    </div>
  </footer>
);

export default SiteFooter;
