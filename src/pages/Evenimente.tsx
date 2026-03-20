import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import HeroBanner from "@/components/HeroBanner";
import SEOHead from "@/components/SEOHead";
import FeaturePlugs from "@/components/FeaturePlugs";
import {
  MapPin,
  Calendar,
  ArrowRight,
  Loader2,
  BookOpen,
  Info,
} from "lucide-react";
import type { FeaturePlug } from "@/components/FeaturePlugs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface EventItem {
  date: string;
  dateEnd: string;
  title: string;
  location: string;
  type: string;
  link: string;
}

function formatDateRange(dateStr: string, dateEndStr: string): string {
  const months = [
    "Ianuarie",
    "Februarie",
    "Martie",
    "Aprilie",
    "Mai",
    "Iunie",
    "Iulie",
    "August",
    "Septembrie",
    "Octombrie",
    "Noiembrie",
    "Decembrie",
  ];
  const d = new Date(dateStr);
  const dEnd = new Date(dateEndStr);
  const day = d.getDate();
  const dayEnd = dEnd.getDate();
  const month = months[d.getMonth()];
  const year = d.getFullYear();
  return `${day}–${dayEnd} ${month} ${year}`;
}

const EvenimentePage = () => {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/evenimente.json")
      .then((r) => r.json())
      .then((data: EventItem[]) => {
        setEvents(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcoming = events.filter((e) => new Date(e.dateEnd) >= today);
  const past = events.filter((e) => new Date(e.dateEnd) < today);

  return (
    <Layout>
      <SEOHead
        title="Evenimente"
        description="Vezi calendarul atelierelor de predicare expozitivă din România. Află când și unde are loc următorul eveniment CST."
        path="/evenimente"
      />
      <HeroBanner
        title="Evenimente"
        subtitle="Atelierele de predicare expozitivă din România."
      />

      <section className="page-section space-y-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-muted-foreground leading-relaxed">
            Atelierele de predicare expozitivă se organizează de două ori pe an,
            în diferite orașe din România. Mai jos găsești evenimentele viitoare
            la care te poți înscrie, precum și un istoric al atelierelor
            trecute.
          </p>
        </motion.div>

        {loading ? (
          <div className="flex items-center justify-center py-8">
            <Loader2 className="animate-spin text-muted-foreground" size={24} />
          </div>
        ) : (
          <>
            {/* Upcoming */}
            {upcoming.length > 0 ? (
              <div className="space-y-3">
                <h2 className="section-subtitle">Evenimente viitoare</h2>
                <div className="gold-divider mb-2" />
                {upcoming.map((event) => (
                  <EventCard key={event.title} event={event} highlight />
                ))}
              </div>
            ) : (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-card rounded-xl border border-border p-6 text-center space-y-2"
                >
                  <Calendar className="mx-auto text-accent" size={28} />
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    Niciun eveniment viitor programat
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Urmărește această pagină pentru următoarele ateliere.
                  </p>
                </motion.div>
                <FeaturePlugs
                  heading="Între timp, explorează"
                  subtext="Descoperă resurse utile sau află mai multe despre atelierele noastre."
                  plugs={[
                    {
                      title: "Vezi resursele",
                      description: "",
                      to: "/resurse",
                      icon: BookOpen,
                    },
                    {
                      title: "Despre ateliere",
                      description: "",
                      to: "/despre",
                      icon: Info,
                      variant: "outline",
                    },
                  ]}
                />
              </>
            )}

            {/* Past */}
            {past.length > 0 && (
              <Accordion type="single" collapsible>
                <AccordionItem value="past">
                  <AccordionTrigger className="font-display text-lg font-semibold">
                    Evenimente trecute ({past.length})
                  </AccordionTrigger>
                  <AccordionContent className="pt-2">
                    <div className="space-y-3">
                      {past.map((event) => (
                        <EventCard key={event.title} event={event} />
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            )}
          </>
        )}
      </section>
    </Layout>
  );
};

const EventCard = ({
  event,
  highlight,
}: {
  event: EventItem;
  highlight?: boolean;
}) => {
  const dateLabel = formatDateRange(event.date, event.dateEnd);
  return (
    <a
      href={event.link}
      className={`group flex items-center gap-4 p-4 rounded-lg border transition-colors ${
        highlight
          ? "bg-accent/5 border-accent/30 hover:border-accent/60"
          : "bg-background border-border hover:border-accent/50"
      }`}
    >
      <div className="flex-shrink-0 text-center min-w-[90px]">
        <div className="text-xs font-semibold text-accent uppercase tracking-wider">
          {dateLabel.split(" ")[0]}
        </div>
        <div className="text-sm text-muted-foreground">
          {dateLabel.split(" ").slice(1).join(" ")}
        </div>
      </div>
      <div className="flex-1">
        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
          {event.title}
        </h4>
        <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
          <MapPin size={14} />
          <span>{event.location}</span>
          <span className="ml-2 text-xs bg-muted px-2 py-0.5 rounded-full">
            {event.type}
          </span>
        </div>
      </div>
      <ArrowRight
        className="text-muted-foreground group-hover:text-accent transition-colors"
        size={18}
      />
    </a>
  );
};

export default EvenimentePage;
