import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import HeroBanner from "@/components/HeroBanner";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote, X } from "lucide-react";

import photo01 from "@/assets/gallery/photo-01.jpeg";
import photo02 from "@/assets/gallery/photo-02.jpeg";
import photo03 from "@/assets/gallery/photo-03.jpeg";
import photo04 from "@/assets/gallery/photo-04.jpeg";
import photo05 from "@/assets/gallery/photo-05.jpeg";
import photo06 from "@/assets/gallery/photo-06.jpeg";
import photo07 from "@/assets/gallery/photo-07.jpeg";
import photo08 from "@/assets/gallery/photo-08.jpeg";
import photo09 from "@/assets/gallery/photo-09.jpeg";
import photo10 from "@/assets/gallery/photo-10.jpeg";
import photo11 from "@/assets/gallery/photo-11.jpeg";
import photo12 from "@/assets/gallery/photo-12.jpeg";
import photo13 from "@/assets/gallery/photo-13.jpeg";
import photo14 from "@/assets/gallery/photo-14.jpeg";

const galleryImages = [
  { src: photo01, alt: "Predicare la atelier" },
  { src: photo02, alt: "Lucru în grup mic" },
  { src: photo03, alt: "Studiu biblic în grup" },
  { src: photo04, alt: "Sesiune de lucru" },
  { src: photo05, alt: "Grup de lucru" },
  { src: photo06, alt: "Discuții în grup mic" },
  { src: photo07, alt: "Sesiune plenară" },
  { src: photo08, alt: "Foto de grup participanți" },
  { src: photo09, alt: "Predicare în sesiune plenară" },
  { src: photo10, alt: "Sesiune plenară - privire de ansamblu" },
  { src: photo11, alt: "Moment de rugăciune" },
  { src: photo12, alt: "Predare la amvon" },
  { src: photo13, alt: "Predicator la amvon" },
  { src: photo14, alt: "Foto de grup – toți participanții" },
];

const steps = [
  { num: 1, title: "Structura textuală", desc: "Identifică structura literară și fluxul argumentului în pasaj." },
  { num: 2, title: "Contextul", desc: "Înțelege contextul literar, istoric și teologic al pasajului." },
  {
    num: 3,
    title: "Ideea centrală a autorului (ACI)",
    desc: "Formulează într-o propoziție ceea ce autorul biblic comunică în acest pasaj.",
  },
  {
    num: 4,
    title: "Legătura cu Evanghelia",
    desc: "Identifică cum pasajul se conectează cu persoana și lucrarea lui Cristos.",
  },
  {
    num: 5,
    title: "Ideea centrală a predicatorului (PCI)",
    desc: "Reformulează ideea autorului într-un mod relevant pentru ascultătorii de astăzi.",
  },
  { num: 6, title: "Aplicații", desc: "Dezvoltă aplicații concrete care decurg din textul biblic." },
  { num: 7, title: "Titlu și schiță", desc: "Formulează un titlu captivant și o schiță logică pentru predică." },
];

const testimonials = [
  {
    text: "Puține resurse au capacitatea de a-i forma atât pe cei mai puțin experimentați, cât și pe cei avansați. Workshopurile CST reușesc acest lucru printr-o experiență unică și profund matură. Cu fiecare participare am plecat îmbogățit și, indiferent de nivelul la care mă aflam, am simțit că instrumentele mele hermeneutice au devenit mai ascuțite.",
    author: "Todi Croitoru",
  },
  {
    text: "Participarea la seminariile CST au însemnat pentru mine zile binecuvântate de instruire pentru slujire. Accentul clar pus pe textul Scripturii, predările clare și grupurile mici în care am primit feedback — toate acestea fac din CST un context de instruire de care sper să aibă parte cât mai mulți slujitori ai Cuvântului din România.",
    author: "Pavel Trifu",
  },
  {
    text: "CST nu este un simplu seminar, este o echipare necesară pentru toți care știu că mai au de învățat. Instrumentele învățate sunt asemenea unei perechi de ochelari care înlătură ceața și îți aduce claritate în vedere.",
    author: "Ruben Bratu",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const goTo = useCallback((index: number) => setCurrent(((index % total) + total) % total), [total]);

  useEffect(() => {
    const timer = setInterval(() => goTo(current + 1), 7000);
    return () => clearInterval(timer);
  }, [current, goTo]);

  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((t, i) => (
            <blockquote key={i} className="min-w-full px-2 box-border">
              <div className="text-center space-y-6 py-4">
                <Quote className="mx-auto h-8 w-8 text-accent/40" />
                <p className="text-base sm:text-lg text-muted-foreground italic leading-relaxed font-light">
                  „{t.text}"
                </p>
                <footer className="text-sm font-semibold text-accent tracking-wide uppercase">— {t.author}</footer>
              </div>
            </blockquote>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={() => goTo(current - 1)}
          className="p-2 rounded-full hover:bg-accent/10 text-muted-foreground hover:text-accent transition-colors"
          aria-label="Testimonial anterior"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? "bg-accent w-6" : "bg-muted-foreground/25"
              }`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={() => goTo(current + 1)}
          className="p-2 rounded-full hover:bg-accent/10 text-muted-foreground hover:text-accent transition-colors"
          aria-label="Testimonial următor"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

const DespreePage = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") setLightboxIndex((p) => (p !== null ? (p + 1) % galleryImages.length : null));
      if (e.key === "ArrowLeft") setLightboxIndex((p) => (p !== null ? (p - 1 + galleryImages.length) % galleryImages.length : null));
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [lightboxIndex]);

  return (
  <Layout>
    <SEOHead
      title="Despre Ateliere"
      description="Descoperă ce este un Atelier de Predicare Expozitivă, metodologia în 7 pași și cum te poți implica în formarea predicatorilor din România."
      path="/despre"
    />
    <HeroBanner title="Despre Ateliere" subtitle="Ce este un Atelier de Predicare Expozitivă?" />

    {/* ── Section 1: Misiune ── */}
    <section className="py-16 md:py-24">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-2xl mx-auto px-5 space-y-6 text-center"
      >
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          <a
            href="https://simeontrust.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-semibold hover:underline underline-offset-2"
          >
            Charles Simeon Trust
          </a>{" "}
          formează următoarea generație de predicatori expozitivi prin ateliere practice, cursuri online și programe
          intensive.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Organizăm aceste ateliere în România folosind integral metoda și materialele lor. Scopul: să crească
          încrederea și abilitatea participanților de a mânui corect Cuvântul lui Dumnezeu.
        </p>
        <div className="gold-divider mx-auto" />
      </motion.div>
    </section>

    {/* ── Section 2: Photo band ── */}
    <section className="py-8 overflow-hidden">
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 z-10 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 z-10 bg-gradient-to-l from-background to-transparent" />

        <div className="flex gap-3 animate-marquee hover:[animation-play-state:paused]">
          {[...galleryImages, ...galleryImages].map((img, i) => (
            <div key={i} className="flex-shrink-0 w-48 sm:w-64 aspect-[3/2] rounded-lg overflow-hidden">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── Section 3: Cei 7 Pași ── */}
    <section className="py-16 md:py-24 section-dots section-vignette">
      <div className="max-w-3xl mx-auto px-5">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="section-title text-center mb-12"
        >
          Cei 7 Pași
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-6"
        >
          {steps.map((step) => (
            <motion.div key={step.num} variants={fadeUp} className="flex gap-5 items-start group">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 text-accent font-display font-bold flex items-center justify-center text-xl group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                {step.num}
              </div>
              <div className="pt-1">
                <h3 className="font-display font-semibold text-foreground text-lg">{step.title}</h3>
                <p className="text-muted-foreground mt-1">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* ── Section 4: Ce faci la atelier ── */}
    <section className="py-16 md:py-24 bg-card/50 section-lines section-vignette">
      <div className="max-w-3xl mx-auto px-5">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="section-title text-center mb-12"
        >
          Ce vei face la atelier?
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 gap-8"
        >
          {[
            {
              icon: "📋",
              title: "Pregătire anterioară",
              desc: "Cu câteva săptămâni înainte, vei primi pasajele biblice și vei lucra prin cei 7 pași ai fișei de lucru.",
            },
            {
              icon: "👥",
              title: "Grupuri mici",
              desc: "Vei fi repartizat într-un grup de 10 participanți, ghidat de un lider experimentat, unde vei prezenta și primi feedback.",
            },
            {
              icon: "📝",
              title: "Expuneri - predici",
              desc: "Momente cheie de expunere a participanților la predicarea sănătoasă a Cuvântului",
            },
            {
              icon: "🎤",
              title: "Sesiuni de instruire",
              desc: "Sesiuni plenare de intruire și însușire a principiilor de lucru pe textul Scripturii",
            },
          ].map((item) => (
            <motion.div key={item.title} variants={fadeUp} className="space-y-3">
              <span className="text-3xl">{item.icon}</span>
              <h3 className="font-display font-semibold text-foreground text-lg">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* ── Section 5: Cui se adresează ── */}
    <section className="py-16 md:py-24 section-dots section-vignette">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-xl mx-auto px-5 text-center space-y-6"
      >
        <h2 className="section-title">Cui se adresează?</h2>
        <p className="text-muted-foreground">
          Atelierele sunt deschise tuturor celor care doresc să crească în abilitatea de a studia și prezenta Scriptura
          cu fidelitate:
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {["Păstori și predicatori", "Lideri de studii biblice", "Studenți la teologie", "Pasionați de predicare"].map(
            (tag) => (
              <span key={tag} className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium">
                {tag}
              </span>
            ),
          )}
        </div>
        <p className="text-sm text-muted-foreground/70">Nu este necesar să ai experiență anterioară în predicare.</p>
      </motion.div>
    </section>

    {/* ── Section 6: Testimoniale ── */}
    <section className="py-16 md:py-24 bg-card/50 section-lines section-vignette">
      <div className="px-5">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="section-title text-center mb-10"
        >
          Ce spun participanții
        </motion.h2>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <TestimonialCarousel />
        </motion.div>
      </div>
    </section>

    {/* ── CTA ── */}
    <section className="py-16 md:py-24">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-lg mx-auto px-5 text-center space-y-6"
      >
        <h2 className="section-title">Vrei să participi?</h2>
        <p className="text-muted-foreground">
          Verifică evenimentele viitoare sau contactează-ne pentru mai multe detalii.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="bg-primary hover:bg-[hsl(var(--navy-dark))] text-primary-foreground">
            <Link to="/evenimente">Vezi evenimente</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <Link to="/contact">Contactează-ne</Link>
          </Button>
        </div>
      </motion.div>
    </section>
  </Layout>
);

export default DespreePage;
