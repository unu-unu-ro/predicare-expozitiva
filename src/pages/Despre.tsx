import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import HeroBanner from "@/components/HeroBanner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const steps = [
  { num: 1, title: "Structura textuală", desc: "Identifică structura literară și fluxul argumentului în pasaj." },
  { num: 2, title: "Contextul", desc: "Înțelege contextul literar, istoric și teologic al pasajului." },
  { num: 3, title: "Ideea centrală a autorului (ACI)", desc: "Formulează într-o propoziție ceea ce autorul biblic comunică în acest pasaj." },
  { num: 4, title: "Legătura cu Evanghelia", desc: "Identifică cum pasajul se conectează cu persoana și lucrarea lui Cristos." },
  { num: 5, title: "Ideea centrală a predicatorului (PCI)", desc: "Reformulează ideea autorului într-un mod relevant pentru ascultătorii de astăzi." },
  { num: 6, title: "Aplicații", desc: "Dezvoltă aplicații concrete care decurg din textul biblic." },
  { num: 7, title: "Titlu și schiță", desc: "Formulează un titlu captivant și o schiță logică pentru predică." },
];

const testimonials = [
  { text: "Atelierul m-a ajutat să înțeleg cât de important este să las textul biblic să vorbească, nu să impun propriile mele idei asupra lui. Am plecat cu o metodologie clară pe care o aplic în fiecare predică.", author: "Participant" },
  { text: "Lucrul în grupuri mici a fost transformator. Feedback-ul primit de la colegii și liderul de grup m-a ajutat să văd punctele în care trebuie să cresc.", author: "Participant, Cluj 2025" },
  { text: "Am participat la mai multe ateliere și de fiecare dată plec cu ceva nou. Comunitatea de predicatori care se formează în jurul acestor ateliere este o binecuvântare reală.", author: "Participant" },
  { text: "Ca lider de studiu biblic, credeam că nu am nevoie de formare suplimentară. Acest atelier mi-a arătat câte lucruri puteam face mai bine. Recomand cu căldură!", author: "Participant" },
];

const DespreePage = () => (
  <Layout>
    <HeroBanner title="Despre Ateliere" subtitle="Ce este un Atelier de Predicare Expozitivă?" />

    <section className="page-section space-y-6">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="space-y-4 text-muted-foreground leading-relaxed">
        <p>
          <a href="https://simeontrust.org/" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline underline-offset-2">
            Charles Simeon Trust
          </a>{" "}
          a fost fondat pentru a promova creșterea Evangheliei lui Isus Cristos în întreaga lume prin formarea
          următoarei generații de predicatori expozitivi. Scopul s-a concretizat prin trei inițiative: Ateliere
          (Workshops), cursuri online și Cursul de Predicare din Chicago.
        </p>
        <p>
          Organizăm aceste ateliere în România în parteneriat cu Charles Simeon Trust, folosind integral metoda și
          materialele lor. Scopul fiecărui atelier este de a crește încrederea și abilitatea participanților de a mânui
          corect Cuvântul lui Dumnezeu.
        </p>
        <p>
          Atelierele sunt centrate pe un proces sistematic, în 7 pași, care ghidează participanții prin analiza unui
          pasaj biblic — de la observarea structurii textuale până la formularea unei aplicații relevante și a unei
          schițe de predică.
        </p>
      </motion.div>

      <Accordion type="multiple" className="w-full" defaultValue={["participanti"]}>
        <AccordionItem value="ce-faci">
          <AccordionTrigger className="font-display text-lg font-semibold">Ce vei face la atelier?</AccordionTrigger>
          <AccordionContent className="space-y-4 text-muted-foreground leading-relaxed pt-2">
            <div>
              <h4 className="font-semibold text-foreground mb-1">📋 Pregătirea anterioară</h4>
              <p>Cu câteva săptămâni înainte de atelier, vei primi pasajele biblice pe care trebuie să le pregătești. Vei lucra prin cei 7 pași ai fișei de lucru pentru fiecare pasaj.</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">👥 Grupuri mici</h4>
              <p>La atelier, vei fi repartizat într-un grup mic de 4-6 participanți, ghidat de un lider experimentat (SGL).</p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                <li><strong>Prezentator (APP):</strong> Își prezintă fișa de lucru pregătită.</li>
                <li><strong>Oponent (OPP):</strong> Oferă feedback constructiv.</li>
                <li><strong>Observator (OBS):</strong> Ascultă și învață din interacțiune.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">📝 Sesiunile de lucru</h4>
              <p>Fiecare sesiune durează aprox. 60-90 minute. Vei avea ocazia de a fi prezentator, oponent și observator.</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">🎤 Sesiunile plenare</h4>
              <p>Pe lângă lucrul în grupuri mici, atelierul include predici model, demonstrații de analiză a textului și sesiuni de Q&A.</p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="cei-7-pasi">
          <AccordionTrigger className="font-display text-lg font-semibold">Cei 7 Pași</AccordionTrigger>
          <AccordionContent className="pt-2">
            <div className="grid gap-4">
              {steps.map((step) => (
                <div key={step.num} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/15 text-accent font-display font-bold flex items-center justify-center text-lg">
                    {step.num}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="cui">
          <AccordionTrigger className="font-display text-lg font-semibold">Cui se adresează?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground leading-relaxed pt-2 space-y-3">
            <p>Atelierele sunt deschise tuturor celor care doresc să crească în abilitatea de a studia și a prezenta Scriptura cu fidelitate:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Păstori și predicatori</li>
              <li>Lideri de studii biblice</li>
              <li>Studenți la teologie</li>
              <li>Oricine este pasionat de predicarea expozitivă</li>
            </ul>
            <p className="text-sm">Nu este necesar să ai experiență anterioară în predicare.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="participanti">
          <AccordionTrigger className="font-display text-lg font-semibold">Ce spun participanții</AccordionTrigger>
          <AccordionContent className="pt-2">
            <div className="grid md:grid-cols-2 gap-4">
              {testimonials.map((t, i) => (
                <blockquote key={i} className="bg-card rounded-lg p-5 border border-border">
                  <p className="text-sm text-muted-foreground italic leading-relaxed">„{t.text}"</p>
                  <footer className="mt-3 text-xs font-semibold text-accent">— {t.author}</footer>
                </blockquote>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* CTA */}
      <div className="bg-card rounded-xl p-8 text-center border border-border mt-8">
        <h3 className="section-subtitle mb-4">Vrei să participi?</h3>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild className="bg-primary hover:bg-teal-dark text-primary-foreground">
            <Link to="/evenimente">Vezi evenimente</Link>
          </Button>
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Link to="/contact">Contactează-ne</Link>
          </Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default DespreePage;
