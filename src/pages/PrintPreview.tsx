import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Palette, X, Printer } from "lucide-react";

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

type Theme = "white" | "cream" | "dark";

const themeStyles: Record<Theme, { bg: string; text: string; heading: string; label: string; answer: string; border: string; empty: string; toolbar: string; toolbarText: string }> = {
  white: {
    bg: "#ffffff",
    text: "#1a1a2e",
    heading: "#16425b",
    label: "#333",
    answer: "#f8f9fa",
    border: "#16425b",
    empty: "#999",
    toolbar: "#16425b",
    toolbarText: "#ffffff",
  },
  cream: {
    bg: "#fdf6ec",
    text: "#2d2a24",
    heading: "#6b4c2a",
    label: "#4a3f2f",
    answer: "#f5eddf",
    border: "#c9a96e",
    empty: "#a09080",
    toolbar: "#6b4c2a",
    toolbarText: "#fdf6ec",
  },
  dark: {
    bg: "#1a1a2e",
    text: "#e0e0e0",
    heading: "#4ecdc4",
    label: "#b0b0b0",
    answer: "#252545",
    border: "#4ecdc4",
    empty: "#666",
    toolbar: "#0f0f1e",
    toolbarText: "#4ecdc4",
  },
};

const themeNames: Record<Theme, string> = {
  white: "Alb",
  cream: "Crem",
  dark: "Întunecat",
};

const themeOrder: Theme[] = ["white", "cream", "dark"];

function parseMarkdown(text: string): string {
  if (!text) return "";
  return text
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/^## (.+)$/gm, '<h4 style="margin:8px 0 4px;font-size:14px;">$1</h4>')
    .replace(/^# (.+)$/gm, '<h3 style="margin:10px 0 4px;font-size:16px;">$1</h3>')
    .replace(/^- (.+)$/gm, '<li style="margin-left:16px;">$1</li>')
    .replace(/\n/g, "<br>");
}

const PrintPreview = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<FormData | null>(null);
  const [theme, setTheme] = useState<Theme>("white");

  useEffect(() => {
    const stored = localStorage.getItem("fisa-print-data");
    if (stored) {
      try {
        setForm(JSON.parse(stored));
      } catch {
        navigate("/fisa");
      }
    } else {
      navigate("/fisa");
    }
  }, [navigate]);

  const cycleTheme = useCallback(() => {
    setTheme((prev) => {
      const idx = themeOrder.indexOf(prev);
      return themeOrder[(idx + 1) % themeOrder.length];
    });
  }, []);

  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  const handleClose = useCallback(() => {
    navigate("/fisa");
  }, [navigate]);

  if (!form) return null;

  const t = themeStyles[theme];
  const empty = (val: string) =>
    val?.trim() ? parseMarkdown(val) : `<span style="color:${t.empty};font-style:italic;">Nu a fost completat</span>`;

  const steps = [
    {
      title: "1. Structura textului",
      questions: [
        { label: "a) Arată structura sub formă de secțiuni, alături de versetele aferente", value: form.s1a },
        { label: "b) Explică strategiile folosite pentru a identifica structura", value: form.s1b },
        { label: "c) Pe ce pune accent această structură?", value: form.s1c },
      ],
    },
    {
      title: "2. Contextul pasajului",
      questions: [
        { label: "a) Contextul literar", value: form.s2a },
        { label: "b) Contextul istoric", value: form.s2b },
        { label: "c) Contextul cultural", value: form.s2c },
        { label: "d) Contextul biblic", value: form.s2d },
      ],
    },
    {
      title: "3. Ideea autorului",
      questions: [
        { label: "Care este ideea centrală pe care o argumentează autorul în fața ascultătorilor săi?", value: form.s3 },
      ],
    },
    {
      title: "4. Legătura cu Evanghelia",
      questions: [
        { label: "Care este legătura dintre acest pasaj și Evanghelia Domnului Isus Cristos? Ce parte a Evangheliei este avută în vedere?", value: form.s4 },
      ],
    },
    {
      title: "5. Ideea ta centrală",
      questions: [
        { label: "Care este ideea centrală pe care tu o vei argumenta în fața ascultătorilor tăi?", value: form.s5 },
      ],
    },
    {
      title: "6. Aplicații",
      questions: [
        { label: "Aplicații pentru cei mântuiți", value: form.s6a },
        { label: "Aplicații pentru cei nemântuiți", value: form.s6b },
      ],
    },
    {
      title: "7. Titlu și schiță",
      questions: [
        { label: "Care este titlul predicii tale?", value: form.s7titlu },
        { label: "Cum arată schița mesajului?", value: form.s7schita },
      ],
    },
  ];

  return (
    <>
      <style>{`
        @media print {
          .print-toolbar { display: none !important; }
          body { background: white !important; }
          .print-content { 
            background: white !important; 
            color: #1a1a2e !important;
            padding: 20px !important;
          }
          .print-content h3 { color: #16425b !important; border-color: #16425b !important; }
          .print-content .answer-box { background: #f8f9fa !important; border-color: #ddd !important; }
        }
      `}</style>

      {/* Toolbar */}
      <div
        className="print-toolbar"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: "8px",
          padding: "8px 24px",
          background: t.toolbar,
          color: t.toolbarText,
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        }}
      >
        <div style={{ flex: 1 }} />
        <button
          onClick={cycleTheme}
          title={`Temă: ${themeNames[theme]}`}
          style={{
            background: "transparent",
            border: `1px solid ${t.toolbarText}40`,
            borderRadius: 6,
            color: t.toolbarText,
            padding: "6px 12px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 6,
            fontSize: 13,
          }}
        >
          <Palette size={16} />
          {themeNames[theme]}
        </button>
        <button
          onClick={handleClose}
          style={{
            background: "transparent",
            border: `1px solid ${t.toolbarText}40`,
            borderRadius: 6,
            color: t.toolbarText,
            padding: "6px 12px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 6,
            fontSize: 13,
          }}
        >
          <X size={16} />
          Închide
        </button>
        <button
          onClick={handlePrint}
          style={{
            background: t.toolbarText,
            color: t.toolbar,
            border: "none",
            borderRadius: 6,
            padding: "6px 16px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 6,
            fontSize: 13,
            fontWeight: 600,
          }}
        >
          <Printer size={16} />
          Printează / PDF
        </button>
      </div>

      {/* Content */}
      <div
        className="print-content"
        style={{
          background: t.bg,
          color: t.text,
          minHeight: "100vh",
          paddingTop: 72,
          paddingBottom: 40,
          transition: "background 0.3s, color 0.3s",
        }}
      >
        <div style={{ maxWidth: 780, margin: "0 auto", padding: "0 24px" }}>
          {/* Title */}
          <h1
            style={{
              textAlign: "center",
              fontFamily: "'Playfair Display', serif",
              fontSize: 22,
              fontVariant: "small-caps",
              color: t.heading,
              marginBottom: 4,
            }}
          >
            Fișă de lucru pentru pregătirea predicii
          </h1>
          <p
            style={{
              textAlign: "center",
              fontSize: 13,
              color: t.label,
              marginBottom: 24,
            }}
          >
            Parcurge cei 7 pași de bază pentru o predicare expozitivă fidelă
          </p>

          {/* Meta row */}
          <div
            style={{
              display: "flex",
              gap: 32,
              marginBottom: 8,
              fontSize: 14,
              flexWrap: "wrap",
            }}
          >
            <div>
              <strong>Nume:</strong>{" "}
              <span
                dangerouslySetInnerHTML={{
                  __html: form.nume?.trim()
                    ? form.nume
                    : `<span style="color:${t.empty};font-style:italic;">Nu a fost completat</span>`,
                }}
              />
            </div>
            <div>
              <strong>Text:</strong>{" "}
              <span
                dangerouslySetInnerHTML={{
                  __html: form.text?.trim()
                    ? form.text
                    : `<span style="color:${t.empty};font-style:italic;">Nu a fost completat</span>`,
                }}
              />
            </div>
          </div>

          <div style={{ textAlign: "right", fontSize: 11, color: t.empty, marginBottom: 24 }}>
            Completat cu{" "}
            <a href="/fisa" style={{ color: t.heading }}>
              cst-romania.ro/fisa
            </a>
          </div>

          {/* Steps */}
          {steps.map((step, i) => (
            <div key={i} style={{ marginBottom: 24 }}>
              <h3
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  color: t.heading,
                  borderBottom: `2px solid ${t.border}`,
                  paddingBottom: 4,
                  marginBottom: 12,
                }}
              >
                {step.title}
              </h3>
              {step.questions.map((q, j) => (
                <div key={j} style={{ marginBottom: 12 }}>
                  <div style={{ fontSize: 13, color: t.label, marginBottom: 4 }}>{q.label}</div>
                  <div
                    className="answer-box"
                    style={{
                      background: t.answer,
                      border: `1px solid ${t.border}20`,
                      borderLeft: `3px solid ${t.border}60`,
                      borderRadius: 4,
                      padding: "8px 12px",
                      fontSize: 14,
                      lineHeight: 1.6,
                      whiteSpace: "pre-wrap",
                    }}
                    dangerouslySetInnerHTML={{ __html: empty(q.value) }}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PrintPreview;
