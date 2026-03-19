import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import HeroBanner from "@/components/HeroBanner";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, MessageSquareQuote } from "lucide-react";

const quotes = [
  {
    text: "„Pune-ți pe inimă aceste lucruri, dedă-te în totul la ele, pentru ca înaintarea ta să fie văzută de toți.”",
    ref: "1 Timotei 4:15",
  },
  {
    text: "„Pe El Îl propovăduim noi, și sfătuim pe orice om, și învățăm pe orice om în toată înțelepciunea, ca să înfățișăm pe orice om desăvârșit în Cristos Isus.”",
    ref: "Coloseni 1:28",
  },
  {
    text: "„Toată Scriptura este insuflată de Dumnezeu și de folos ca să învețe, să mustre, să îndrepte, să dea înțelepciune în neprihănire.”",
    ref: "2 Timotei 3:16",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

const Index = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Layout>
      <HeroBanner
        title="Ateliere de Predicare Expozitivă"
        subtitle="Rămâneți conectat cu atelierele și resursele Charles Simeon Trust în România."
      />

      {/* Main Content */}
      <section className="page-section">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-5"
        >
          <motion.div custom={0} variants={fadeUp}>
            <h2 className="section-title">Predicare mai bună pretutindeni</h2>
            <div className="gold-divider mt-4" />
          </motion.div>

          <motion.div custom={1} variants={fadeUp} className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              <a href="https://simeontrust.org/" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline underline-offset-2">
                Charles Simeon Trust
              </a>{" "}
              a fost fondat pentru a promova creșterea Evangheliei lui Isus Cristos în întreaga lume prin formarea
              următoarei generații de predicatori expozitivi. Scopul atelierelor este de a crește încrederea și abilitatea
              fiecărui participant de a mânui corect Cuvântul lui Dumnezeu.
            </p>
            <p>
              Organizăm aceste ateliere în România în parteneriat cu Charles Simeon Trust, folosind integral metoda și
              materialele lor. Dorim ca fiecare participant să plece convins că Cuvântul lui Dumnezeu este puternic și
              dornic să-l predea oamenilor săi.
            </p>
          </motion.div>

          <motion.div custom={2} variants={fadeUp} className="flex flex-wrap gap-4 pt-2">
            <Button asChild size="lg" className="bg-primary hover:bg-teal-dark text-primary-foreground font-semibold">
              <Link to="/despre">
                Află mai multe <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold">
              <Link to="/evenimente">
                Vezi evenimentele
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Features strip */}
      <section className="bg-card py-10">
        <div className="max-w-3xl mx-auto px-5 grid md:grid-cols-3 gap-6">
          {[
            { icon: BookOpen, title: "7 Pași Sistematici", desc: "Metodologie clară de la observare până la schița de predică." },
            { icon: Users, title: "Grupuri Mici", desc: "Lucru practic cu feedback de la lideri experimentați." },
            { icon: MessageSquareQuote, title: "Sesiuni Plenare", desc: "Predici model, demonstrații și sesiuni de Q&A." },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center space-y-3"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/15 text-accent">
                <item.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Scripture Carousel */}
      <section className="bg-primary py-10">
        <div className="max-w-3xl mx-auto px-5 text-center min-h-[120px] flex flex-col items-center justify-center">
          <motion.div
            key={quoteIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-display italic text-lg md:text-xl text-cream/90 leading-relaxed">
              {quotes[quoteIndex].text}
            </p>
            <div className="w-12 h-px bg-gold mx-auto my-4" />
            <p className="text-sm font-semibold text-gold tracking-widest uppercase">
              {quotes[quoteIndex].ref}
            </p>
          </motion.div>
          <div className="flex gap-2 mt-6">
            {quotes.map((_, i) => (
              <button
                key={i}
                onClick={() => setQuoteIndex(i)}
                className={`w-2 h-2 rounded-full transition-all ${i === quoteIndex ? "bg-gold w-6" : "bg-cream/30"}`}
                aria-label={`Citat ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
