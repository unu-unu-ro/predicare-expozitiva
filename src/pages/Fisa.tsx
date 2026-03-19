import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import HeroBanner from "@/components/HeroBanner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { Download, Upload, RotateCcw, FileText, Info } from "lucide-react";

interface FormData {
  nume: string;
  text: string;
  s1a: string;
  s1b: string;
  s1c: string;
  s2a: string;
  s2b: string;
  s2c: string;
  s2d: string;
  s3: string;
  s4: string;
  s5: string;
  s6a: string;
  s6b: string;
  s7titlu: string;
  s7schita: string;
}

const emptyForm: FormData = {
  nume: "", text: "",
  s1a: "", s1b: "", s1c: "",
  s2a: "", s2b: "", s2c: "", s2d: "",
  s3: "", s4: "", s5: "",
  s6a: "", s6b: "",
  s7titlu: "", s7schita: "",
};

const stepFields: (keyof FormData)[][] = [
  ["s1a", "s1b", "s1c"],
  ["s2a", "s2b", "s2c", "s2d"],
  ["s3"],
  ["s4"],
  ["s5"],
  ["s6a", "s6b"],
  ["s7titlu", "s7schita"],
];

const FisaPage = () => {
  const { toast } = useToast();
  const [form, setForm] = useState<FormData>(emptyForm);
  const [showGuide, setShowGuide] = useState(false);

  const set = useCallback((key: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  }, []);

  // Count completed required fields
  const requiredFields: (keyof FormData)[] = ["s1a", "s1b", "s1c", "s3", "s4", "s5", "s6a", "s6b", "s7titlu", "s7schita"];
  const filledRequired = requiredFields.filter((k) => form[k].trim().length > 0).length;
  const progressPct = (filledRequired / requiredFields.length) * 100;

  // Determine current step (1-7)
  const currentStep = stepFields.findIndex((fields) =>
    fields.some((f) => requiredFields.includes(f) && form[f].trim().length === 0)
  );
  const stepDisplay = currentStep === -1 ? 7 : currentStep + 1;

  const handleReset = () => {
    if (window.confirm("Sigur vrei să resetezi toate câmpurile?")) {
      setForm(emptyForm);
      toast({ title: "Resetat", description: "Toate câmpurile au fost golite." });
    }
  };

  const handleDownloadJSON = () => {
    const blob = new Blob([JSON.stringify(form, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "fisa-raw.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleUploadJSON = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";
    input.onchange = async (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;
      try {
        const text = await file.text();
        const data = JSON.parse(text);
        setForm({ ...emptyForm, ...data });
        toast({ title: "Importat", description: "Fișa a fost încărcată din fișier." });
      } catch {
        toast({ title: "Eroare", description: "Fișierul nu este valid.", variant: "destructive" });
      }
    };
    input.click();
  };

  const handlePreviewPDF = () => {
    // Create a printable view
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;
    printWindow.document.write(`
      <!DOCTYPE html>
      <html><head><title>Fișa de Lucru - ${form.nume || "Necunoscut"}</title>
      <style>
        body { font-family: Georgia, serif; max-width: 700px; margin: 40px auto; padding: 0 20px; color: #1a1a1a; font-size: 14px; line-height: 1.6; }
        h1 { text-align: center; font-size: 20px; margin-bottom: 4px; }
        h2 { font-size: 16px; margin-top: 24px; border-bottom: 1px solid #ccc; padding-bottom: 4px; }
        .meta { text-align: center; color: #666; margin-bottom: 24px; }
        .field-label { font-weight: bold; margin-top: 12px; }
        .field-value { white-space: pre-wrap; margin: 4px 0 12px; }
        @media print { body { margin: 20px; } }
      </style></head><body>
      <h1>Fișa de Lucru pentru Predicare Expozitivă</h1>
      <div class="meta">${form.nume ? `<strong>${form.nume}</strong> — ` : ""}${form.text || ""}</div>

      <h2>1. Structura textului</h2>
      <div class="field-label">a) Structura sub formă de secțiuni:</div>
      <div class="field-value">${form.s1a || "—"}</div>
      <div class="field-label">b) Strategii folosite:</div>
      <div class="field-value">${form.s1b || "—"}</div>
      <div class="field-label">c) Accentul structurii:</div>
      <div class="field-value">${form.s1c || "—"}</div>

      <h2>2. Contextul pasajului</h2>
      <div class="field-label">a) Contextul literar:</div>
      <div class="field-value">${form.s2a || "—"}</div>
      <div class="field-label">b) Contextul istoric:</div>
      <div class="field-value">${form.s2b || "—"}</div>
      <div class="field-label">c) Contextul cultural:</div>
      <div class="field-value">${form.s2c || "—"}</div>
      <div class="field-label">d) Contextul biblic:</div>
      <div class="field-value">${form.s2d || "—"}</div>

      <h2>3. Ideea centrală a autorului</h2>
      <div class="field-value">${form.s3 || "—"}</div>

      <h2>4. Legătura cu Evanghelia</h2>
      <div class="field-value">${form.s4 || "—"}</div>

      <h2>5. Ideea ta centrală</h2>
      <div class="field-value">${form.s5 || "—"}</div>

      <h2>6. Aplicații</h2>
      <div class="field-label">Aplicații pentru cei mântuiți:</div>
      <div class="field-value">${form.s6a || "—"}</div>
      <div class="field-label">Aplicații pentru cei nemântuiți:</div>
      <div class="field-value">${form.s6b || "—"}</div>

      <h2>7. Titlu și schiță</h2>
      <div class="field-label">Titlul predicii:</div>
      <div class="field-value">${form.s7titlu || "—"}</div>
      <div class="field-label">Schița mesajului:</div>
      <div class="field-value">${form.s7schita || "—"}</div>

      <script>window.print();</script>
      </body></html>
    `);
    printWindow.document.close();
  };

  return (
    <Layout>
      <HeroBanner
        title="Fișa de Lucru"
        subtitle="Completează online cei 7 pași și generează PDF"
      />

      <section className="page-section">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>

          {/* Instructions */}
          <div className="bg-card rounded-xl border border-border p-5 mb-8">
            <p className="text-muted-foreground text-sm leading-relaxed">
              <strong className="text-foreground">Instrucțiuni:</strong> Completează toate câmpurile pentru fiecare dintre cei 7 pași. La sfârșitul formularului vei putea genera un PDF cu răspunsurile tale. Pentru lămuriri despre fiecare pas, vizitează{" "}
              <Link to="/ghid" className="text-primary hover:text-accent underline underline-offset-2">ghidul de pregătire</Link>.
            </p>
          </div>

          {/* Progress */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-foreground">
                Progres fișa curentă — pasul {stepDisplay} din 7
              </span>
              <button onClick={() => setShowGuide(!showGuide)} className="text-muted-foreground hover:text-primary transition-colors">
                <Info size={18} />
              </button>
            </div>
            <Progress value={progressPct} className="h-2" />

            {/* Actions bar */}
            <div className="flex flex-wrap items-center gap-3 mt-3 text-sm">
              <button onClick={handleReset} className="flex items-center gap-1 text-muted-foreground hover:text-destructive transition-colors">
                <RotateCcw size={14} /> Resetează câmpuri
              </button>
              <span className="text-border">|</span>
              <button onClick={handleUploadJSON} className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
                <Upload size={14} /> Încarcă din raw.json
              </button>
              <span className="text-border">|</span>
              <button onClick={handleDownloadJSON} className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
                <Download size={14} /> Descarcă raw.json
              </button>
            </div>
          </div>

          {/* Formatting guide popup */}
          {showGuide && (
            <div className="bg-card rounded-xl border border-border p-5 mb-8">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-display font-semibold text-foreground">Ghid de Formatare Text (PDF)</h3>
                <button onClick={() => setShowGuide(false)} className="text-muted-foreground hover:text-foreground">×</button>
              </div>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li><code className="bg-muted px-1 rounded">**text**</code> — <strong>bold</strong></li>
                <li><code className="bg-muted px-1 rounded">*text*</code> — <em>italic</em></li>
                <li><code className="bg-muted px-1 rounded"># Titlu</code> — Titlu</li>
                <li><code className="bg-muted px-1 rounded">## Subtitlu</code> — Subtitlu</li>
                <li><code className="bg-muted px-1 rounded">- Element</code> — Listă</li>
              </ul>
            </div>
          )}

          {/* Form */}
          <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>

            {/* Name & Text */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="text-sm font-semibold uppercase tracking-wider text-foreground">Nume</Label>
                <Input placeholder="Numele complet" value={form.nume} onChange={(e) => set("nume", e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-semibold uppercase tracking-wider text-foreground">Text</Label>
                <Input placeholder="Text scurt" value={form.text} onChange={(e) => set("text", e.target.value)} />
              </div>
            </div>

            {/* Step 1 */}
            <fieldset className="space-y-4">
              <legend className="section-subtitle">1. Structura textului</legend>
              <div className="gold-divider" />
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>a) Arată structura sub formă de secțiuni, alături de versetele aferente <span className="text-destructive">*</span></Label>
                  <Textarea placeholder={"Ex: I. Introducere (v. 1-3)\nII. Dezvoltarea principală (v. 4-10)\netc."} rows={4} value={form.s1a} onChange={(e) => set("s1a", e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label>b) Explică strategiile folosite pentru a identifica structura <span className="text-destructive">*</span></Label>
                  <Textarea placeholder="Ex: Cuvinte cheie repetate, conjuncții, schimbări de ton, etc." rows={3} value={form.s1b} onChange={(e) => set("s1b", e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label>c) Pe ce pune accent această structură? <span className="text-destructive">*</span></Label>
                  <Textarea placeholder="Explică tema principală evidențiată prin structura identificată" rows={3} value={form.s1c} onChange={(e) => set("s1c", e.target.value)} />
                </div>
              </div>
            </fieldset>

            {/* Step 2 */}
            <fieldset className="space-y-4">
              <legend className="section-subtitle">2. Contextul pasajului</legend>
              <div className="gold-divider" />
              <p className="text-sm text-muted-foreground italic">Indicație: Te rugăm să le incluzi doar pe cele care sunt relevante pentru înțelesul pasajului</p>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>a) Contextul literar <span className="text-muted-foreground text-xs">(pasajele dinainte și după)</span></Label>
                  <Textarea rows={3} value={form.s2a} onChange={(e) => set("s2a", e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label>b) Contextul istoric <span className="text-muted-foreground text-xs">(împrejurările destinatarilor)</span></Label>
                  <Textarea rows={3} value={form.s2b} onChange={(e) => set("s2b", e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label>c) Contextul cultural <span className="text-muted-foreground text-xs">(detalii despre viața oamenilor din acea vreme)</span></Label>
                  <Textarea rows={3} value={form.s2c} onChange={(e) => set("s2c", e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label>d) Contextul biblic <span className="text-muted-foreground text-xs">(citate, aluzii sau legături cu alte cărți)</span></Label>
                  <Textarea rows={3} value={form.s2d} onChange={(e) => set("s2d", e.target.value)} />
                </div>
              </div>
            </fieldset>

            {/* Step 3 */}
            <fieldset className="space-y-4">
              <legend className="section-subtitle">3. Ideea autorului</legend>
              <div className="gold-divider" />
              <div className="space-y-2">
                <Label>Care este ideea centrală pe care o argumentează autorul în fața ascultătorilor săi? <span className="text-destructive">*</span></Label>
                <p className="text-xs text-muted-foreground italic">într-o propoziție scurtă</p>
                <Textarea rows={3} value={form.s3} onChange={(e) => set("s3", e.target.value)} />
              </div>
            </fieldset>

            {/* Step 4 */}
            <fieldset className="space-y-4">
              <legend className="section-subtitle">4. Legătura cu Evanghelia</legend>
              <div className="gold-divider" />
              <div className="space-y-2">
                <Label>Care este legătura dintre acest pasaj și Evanghelia Domnului Isus Cristos? Ce parte a Evangheliei este avută în vedere? <span className="text-destructive">*</span></Label>
                <Textarea rows={4} value={form.s4} onChange={(e) => set("s4", e.target.value)} />
              </div>
            </fieldset>

            {/* Step 5 */}
            <fieldset className="space-y-4">
              <legend className="section-subtitle">5. Ideea ta centrală</legend>
              <div className="gold-divider" />
              <div className="space-y-2">
                <Label>Care este ideea centrală pe care tu o vei argumenta în fața ascultătorilor tăi? <span className="text-destructive">*</span></Label>
                <p className="text-xs text-muted-foreground italic">într-o propoziție scurtă</p>
                <Textarea rows={3} value={form.s5} onChange={(e) => set("s5", e.target.value)} />
              </div>
            </fieldset>

            {/* Step 6 */}
            <fieldset className="space-y-4">
              <legend className="section-subtitle">6. Aplicații</legend>
              <div className="gold-divider" />
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Aplicații pentru cei mântuiți <span className="text-destructive">*</span></Label>
                  <Textarea rows={3} value={form.s6a} onChange={(e) => set("s6a", e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label>Aplicații pentru cei nemântuiți <span className="text-destructive">*</span></Label>
                  <Textarea rows={3} value={form.s6b} onChange={(e) => set("s6b", e.target.value)} />
                </div>
              </div>
            </fieldset>

            {/* Step 7 */}
            <fieldset className="space-y-4">
              <legend className="section-subtitle">7. Titlu și schiță</legend>
              <div className="gold-divider" />
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Care este titlul predicii tale? <span className="text-destructive">*</span></Label>
                  <Input value={form.s7titlu} onChange={(e) => set("s7titlu", e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label>Cum arată schița mesajului? <span className="text-destructive">*</span></Label>
                  <Textarea rows={5} value={form.s7schita} onChange={(e) => set("s7schita", e.target.value)} />
                </div>
              </div>
            </fieldset>

            {/* Actions */}
            <div className="flex flex-wrap gap-4 pt-4 border-t border-border">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors self-center">
                ← Înapoi la pagina principală
              </Link>
              <div className="flex-1" />
              <Button type="button" onClick={handlePreviewPDF} className="bg-primary hover:bg-teal-dark text-primary-foreground font-semibold">
                <FileText className="mr-2 h-4 w-4" /> Previzualizare PDF
              </Button>
            </div>
          </form>

        </motion.div>
      </section>
    </Layout>
  );
};

export default FisaPage;
