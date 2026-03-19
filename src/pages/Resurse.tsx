import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import HeroBanner from "@/components/HeroBanner";
import { ExternalLink, BookOpen, Headphones, Globe } from "lucide-react";

const sections = [
  {
    title: "Utile",
    icon: BookOpen,
    items: [
      {
        title: "Ghid de pregătire",
        desc: "Pregătirea unei fișe de lucru pentru grupul tău mic poate fi provocatoare, mai ales dacă este primul tău atelier. Vrem să depui efort, însă nu dorim să te simți copleșit.",
        url: "/ghid",
        external: false,
      },
      {
        title: "Fișa interactivă",
        desc: "Completează online cei 7 pași ai fișei de lucru pentru predicarea expozitivă și generează PDF.",
        url: "/fisa",
        external: false,
      },
    ],
  },
  {
    title: "Cărți Recomandate",
    icon: BookOpen,
    items: [
      {
        title: "Predicarea Expozitivă - David Helm",
        desc: "Principii și practică în predicarea expozitivă. O resursă esențială.",
        url: "https://www.magnagratia.org/carti/096-expository-preaching-helm/",
        external: true,
      },
      {
        title: "Seria „9Marks: Zidind Biserici Sănătoase"",
        desc: "Resurse biblice și practice pentru consolidarea bisericilor prin învățături esențiale despre sănătatea spirituală.",
        url: "https://www.magnagratia.org/serii/seria-9marks-zidind-biserici-sanatoase/",
        external: true,
      },
    ],
  },
  {
    title: "Podcasturi și site-uri",
    icon: Headphones,
    items: [
      {
        title: "Preacher's Talk",
        desc: "Discuții și interviuri despre meșteșugul predicării biblice.",
        url: "https://simeontrust.org/playlist/preachers-talk/",
        external: true,
      },
      {
        title: "The Simeon Trust",
        desc: "Echipare pentru predicarea expozitivă a Cuvântului lui Dumnezeu.",
        url: "https://simeontrust.org/",
        external: true,
      },
      {
        title: "A Storm in the Desert",
        desc: "Un podcast care spune povestea angajamentului lui Dumnezeu de a folosi slujirea credincioasă pentru schimbări rodnice.",
        url: "https://www.9marks.org/podcast/a-storm-in-the-desert/",
        external: true,
      },
    ],
  },
];

const ResursePage = () => (
  <Layout>
    <HeroBanner title="Resurse" subtitle="Materiale utile pentru predicarea expozitivă." />

    <section className="page-section space-y-12">
      {sections.map((section, sIdx) => (
        <motion.div
          key={section.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: sIdx * 0.1, duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <section.icon className="text-accent" size={22} />
            <h2 className="section-subtitle">{section.title}</h2>
          </div>
          <div className="gold-divider mb-6" />
          <div className="grid gap-4">
            {section.items.map((item) => (
              <a
                key={item.title}
                href={item.url}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="group block bg-card rounded-lg border border-border p-5 hover:border-accent/50 hover:shadow-sm transition-all"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                  {item.external && (
                    <ExternalLink className="flex-shrink-0 text-muted-foreground group-hover:text-accent transition-colors mt-1" size={16} />
                  )}
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      ))}
    </section>
  </Layout>
);

export default ResursePage;
