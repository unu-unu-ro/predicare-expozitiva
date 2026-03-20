import { useState } from "react";
import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import SiteFooter from "@/components/SiteFooter";
import FeaturePlugs from "@/components/FeaturePlugs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Mail,
  CheckCircle,
  BookOpen,
  Calendar,
  Users,
  Bell,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const benefits = [
  {
    icon: Calendar,
    title: "Evenimente viitoare",
    desc: "Fii primul care află despre atelierele de predicare expozitivă din zona ta.",
  },
  {
    icon: BookOpen,
    title: "Resurse noi",
    desc: "Primește notificări când publicăm ghiduri, articole sau materiale de studiu.",
  },
  {
    icon: Users,
    title: "Comunitate",
    desc: "Conectează-te cu alți predicatori pasionați de studiul Scripturii.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6 },
  }),
};

const AbonarePage = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      const email = formData.get("email") as string;
      const name = formData.get("name") as string;
      const nameParts = name.trim().split(/\s+/);
      const firstName = nameParts[0] || "";
      const lastName = nameParts.slice(1).join(" ") || "";

      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, firstName, lastName }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Eroare la abonare");
      }

      setSubmitted(true);
      toast({
        title: "Te-ai abonat cu succes!",
        description: "Vei primi noutăți despre atelierele noastre.",
      });
    } catch {
      toast({
        title: "Eroare",
        description: "Nu s-a putut finaliza abonarea. Încearcă din nou.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead
        title="Abonare"
        description="Abonează-te pentru a primi noutăți despre atelierele de predicare expozitivă, resurse și evenimente viitoare."
        path="/abonare"
      />
      <main className="flex-1">
        {/* Form section */}
        <section className="max-w-md mx-auto px-5 py-6">
          <div>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 space-y-3"
              >
                <CheckCircle className="mx-auto text-accent" size={48} />
                <h3 className="section-subtitle">Mulțumim pentru abonare!</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Vei primi pe email noutăți despre atelierele de predicare
                  expozitivă, resurse utile și evenimente viitoare.
                </p>
                <FeaturePlugs
                  heading="Între timp, explorează"
                  subtext="Descoperă resursele noastre sau vezi următoarele ateliere."
                  plugs={[
                    {
                      title: "Vezi resursele",
                      description: "",
                      to: "/resurse",
                      icon: BookOpen,
                    },
                    {
                      title: "Vezi evenimente",
                      description: "",
                      to: "/evenimente",
                      icon: Calendar,
                      variant: "outline",
                    },
                  ]}
                />
              </motion.div>
            ) : (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-5"
              >
                <motion.div
                  custom={0}
                  variants={fadeUp}
                  className="text-center space-y-2"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-1">
                    <Bell size={24} strokeWidth={1.5} />
                  </div>
                  <h2 className="section-title">Abonează-te la noutăți</h2>
                  <div className="gold-divider mx-auto" />
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mx-auto">
                    Introdu numele și adresa de email pentru a primi notificări
                    despre ateliere, resurse noi și oportunități de formare.
                  </p>
                </motion.div>

                <motion.form
                  custom={1}
                  variants={fadeUp}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div className="space-y-1.5">
                    <Label htmlFor="name">Nume</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Numele tău complet"
                      required
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="adresa@email.com"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary hover:bg-navy-dark text-primary-foreground font-semibold"
                    size="lg"
                  >
                    {loading ? (
                      "Se procesează..."
                    ) : (
                      <>
                        Abonează-mă <Mail className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    Nu trimitem spam. Te poți dezabona oricând.
                  </p>
                </motion.form>
              </motion.div>
            )}
          </div>
        </section>

        {/* Benefits section */}
        <section className="bg-card section-dots section-vignette py-6">
          <div className="max-w-2xl mx-auto px-5">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid md:grid-cols-3 gap-4"
            >
              {benefits.map((item, i) => (
                <motion.div
                  key={item.title}
                  custom={i}
                  variants={fadeUp}
                  className="text-center space-y-2"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-accent/15 text-accent">
                    <item.icon size={20} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-base font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};

export default AbonarePage;
