import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import HeroBanner from "@/components/HeroBanner";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const form = e.currentTarget;
      const res = await fetch("https://formspree.io/f/xkoqybww", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error("Eroare la trimitere");
      setSubmitted(true);
      toast({ title: "Mesaj trimis!", description: "Vă vom contacta în curând." });
    } catch {
      toast({ title: "Eroare", description: "Nu s-a putut trimite mesajul. Încearcă din nou.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <SEOHead
        title="Contact"
        description="Contactează echipa CST România pentru întrebări despre atelierele de predicare expozitivă, înscrieri sau parteneriate."
        path="/contact"
      />
      <HeroBanner title="Contact" subtitle="Contactează-ne pentru mai multe informații despre ateliere." />

      <section className="page-section">
        <div className="max-w-lg mx-auto">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12 space-y-4"
            >
              <CheckCircle className="mx-auto text-accent" size={48} />
              <h3 className="section-subtitle">Mulțumim!</h3>
              <p className="text-muted-foreground">Mesajul tău a fost trimis. Te vom contacta în curând.</p>
              <Button onClick={() => setSubmitted(false)} variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground mt-4">
                Trimite alt mesaj
              </Button>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <div className="space-y-2">
                <Label htmlFor="name">Nume *</Label>
                <Input id="name" placeholder="Numele tău" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input id="email" type="email" placeholder="adresa@email.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Număr de telefon</Label>
                <Input id="phone" type="tel" placeholder="+40 ..." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Mesajul tău *</Label>
                <Textarea id="message" placeholder="Scrie mesajul tău aici..." rows={5} required />
              </div>
              <Button type="submit" disabled={loading} className="w-full bg-primary hover:bg-navy-dark text-primary-foreground font-semibold">
                {loading ? "Se trimite..." : (
                  <>Trimite mesajul <Send className="ml-2 h-4 w-4" /></>
                )}
              </Button>
            </motion.form>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
