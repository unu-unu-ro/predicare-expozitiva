import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import HeroBanner from "@/components/HeroBanner";
import { MapPin, Calendar, ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const pastEvents = [
  {
    date: "10–12 Martie 2026",
    title: "CST Brăila 2026",
    location: "Brăila",
    type: "atelier",
    link: "mailto:fauriosua@gmail.com?subject=Inscriere%20seminar%20CST%20Braila%202026",
  },
  {
    date: "4–6 Martie 2026",
    title: "CST Cluj 2026",
    location: "Cluj-Napoca",
    type: "atelier",
    link: "/events/CJ-2026",
  },
];

const EvenimentePage = () => (
  <Layout>
    <HeroBanner title="Evenimente" subtitle="Atelierele de predicare expozitivă din România." />

    <section className="page-section space-y-8">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <p className="text-muted-foreground leading-relaxed">
          Atelierele de predicare expozitivă se organizează de două ori pe an, în diferite orașe din România.
          Mai jos găsești evenimentele viitoare la care te poți înscrie, precum și un istoric al atelierelor trecute.
        </p>
      </motion.div>

      {/* No upcoming events placeholder */}
      <div className="bg-card rounded-xl border border-border p-8 text-center">
        <Calendar className="mx-auto text-accent mb-3" size={32} />
        <h3 className="font-display text-lg font-semibold text-foreground">Niciun eveniment viitor programat</h3>
        <p className="text-sm text-muted-foreground mt-2">Urmărește această pagină pentru următoarele ateliere.</p>
      </div>

      <Accordion type="single" collapsible>
        <AccordionItem value="past">
          <AccordionTrigger className="font-display text-lg font-semibold">
            Evenimente trecute ({pastEvents.length})
          </AccordionTrigger>
          <AccordionContent className="pt-2">
            <div className="space-y-3">
              {pastEvents.map((event) => (
                <a
                  key={event.title}
                  href={event.link}
                  className="group flex items-center gap-4 p-4 rounded-lg bg-background border border-border hover:border-accent/50 transition-colors"
                >
                  <div className="flex-shrink-0 text-center">
                    <div className="text-xs font-semibold text-accent uppercase tracking-wider">{event.date.split(" ")[0]}</div>
                    <div className="text-sm text-muted-foreground">{event.date.split(" ").slice(1).join(" ")}</div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">{event.title}</h4>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                      <MapPin size={14} />
                      <span>{event.location}</span>
                      <span className="ml-2 text-xs bg-muted px-2 py-0.5 rounded-full">{event.type}</span>
                    </div>
                  </div>
                  <ArrowRight className="text-muted-foreground group-hover:text-accent transition-colors" size={18} />
                </a>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  </Layout>
);

export default EvenimentePage;
