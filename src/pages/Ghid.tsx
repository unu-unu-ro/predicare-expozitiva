import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import HeroBanner from "@/components/HeroBanner";
import { BookOpen, ArrowUp } from "lucide-react";

const tocItems = [
  { id: "introducere", label: "Introducere" },
  { id: "structura", label: "1. Structura pasajului", sub: [{ id: "genuri", label: "1.1 Cum să înțelegem genurile literare" }] },
  { id: "context", label: "2. Contextul pasajului" },
  { id: "ideea-autorului", label: "3. Ideea centrală a autorului" },
  { id: "legatura", label: "4. Legătura cu Evanghelia" },
  { id: "ideea-predicii", label: "5. Ideea centrală a predicii" },
  { id: "aplicatii", label: "6. Aplicații" },
  { id: "titlu-schita", label: "7. Titlu și schița predicii" },
  { id: "intrebari", label: "Alte întrebări frecvente" },
];

const GhidPage = () => {
  useEffect(() => {
    if (window.location.hash) {
      const el = document.getElementById(window.location.hash.slice(1));
      el?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <Layout>
      <HeroBanner title="Ghid de Pregătire" subtitle="Ghid de Pregătire a Fișei de Lucru" />

      <section className="page-section">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>

          {/* Table of Contents */}
          <div className="bg-card rounded-xl border border-border p-6 mb-12">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="text-accent" size={20} />
              <h2 className="font-display text-xl font-bold text-foreground">Cuprins</h2>
            </div>
            <div className="gold-divider mb-4" />
            <nav className="space-y-2">
              {tocItems.map((item) => (
                <div key={item.id}>
                  <a href={`#${item.id}`} className="text-primary hover:text-accent transition-colors font-medium text-sm block py-0.5">
                    {item.label}
                  </a>
                  {item.sub?.map((sub) => (
                    <a key={sub.id} href={`#${sub.id}`} className="text-muted-foreground hover:text-primary transition-colors text-sm block py-0.5 ml-6">
                      {sub.label}
                    </a>
                  ))}
                </div>
              ))}
            </nav>
          </div>

          {/* Content */}
          <article className="prose-custom space-y-10">

            {/* Introducere */}
            <section id="introducere">
              <h2 className="section-title">Introducere</h2>
              <div className="gold-divider mt-3 mb-6" />
              <div className="space-y-4 text-muted-foreground leading-relaxed text-[15px]">
                <p className="first-letter:text-3xl first-letter:font-display first-letter:font-bold first-letter:text-foreground first-letter:mr-1">
                  Pregătirea unei fișe de lucru pentru grupul tău mic poate fi o sarcină dificilă, mai ales dacă participi pentru prima dată la un astfel de Seminar de predicare expozitivă. Așteptarea noastră de la tine este să muncești cu sârguință și să dai tot ce ai mai bun. Totodată, nu am vrea să fii peste măsură de stresat ori speriat cu privire la ceea ce se va întâmpla atunci când va trebui să-ți prezinți munca în grupul tău mic.
                </p>
                <p>
                  Bineînțeles că cea mai bună modalitate de a înțelege conceptele din Fișa de lucru pentru pregătirea predicii este să participi la un seminar. Dacă ești la prima participare, nu ne vom aștepta să le fi înțeles pe toate. Acest document clarifică o parte din terminologie și intenția întrebărilor de pe fișa de lucru. De asemenea, poți vizita site-ul organizației și poți audia o parte din înregistrările audio de la seminarele anterioare pentru a te ajuta în pregătire.
                </p>
              </div>
            </section>

            {/* 1. Structura */}
            <section id="structura">
              <h2 className="section-title">1. În ce fel a structurat autorul acest pasaj?</h2>
              <div className="gold-divider mt-3 mb-6" />
              <div className="space-y-4 text-muted-foreground leading-relaxed text-[15px]">
                <p className="italic text-foreground/80 bg-card p-4 rounded-lg border border-border text-sm">
                  Te rugăm a) să arăți structura sub formă de secțiuni, alături de versetele aferente și b) să explici strategiile pe care le-ai folosit pentru a identifica această structură. Pe ce pune accent această structură?
                </p>
                <p>
                  Structura (sau modalitatea de organizare) folosită de autor este un fel de a vorbi despre forma sau conformația unui pasaj biblic. Dincolo de suprafața oricărui pasaj se află o așezare interioară a materialului și o aranjare logică pe care autorul a folosit-o pentru a organiza pasajul. Te poți gândi la aceasta ca fiind schița autorului. Iar fiecare parte a pasajului joacă un rol în această schiță. Atunci când îți cerem să identifici structura unui pasaj, de fapt ne așteptăm să identifici acea alcătuire interioară. Ar putea fi o structură gramaticală sau logică (obișnuită într-un discurs), sau ar putea fi o intrigă, o comparație între personaje sau un procedeu literar (obișnuit într-o narațiune), sau ar putea fi împărțirea pasajului pe strofe (cum e cazul într-o poezie).
                </p>
                <p>
                  De reținut că structura va dezvălui un accent pe care autorul îl pune și pe care l-a comunicat prin intermediul structurii. Acesta este motivul pentru care înțelegerea derulării pasajului, nu doar a părților, este atât de important. Gândește-te la structură și la modul în care părțile se relaționează între ele. Pune întrebările <em>de ce</em> și <em>cum</em> pentru a vedea dacă poți identifica accentul pus de autor.
                </p>
                <p>
                  În cele din urmă, explică în ce fel ai ajuns la acea structură sau ce strategii ai folosit pentru a o găsi. Vrem să vedem raționamentul din spatele muncii tale și felul în care încerci să identifici accentul dintr-un pasaj.
                </p>
              </div>
            </section>

            {/* 1.1 Genuri literare */}
            <section id="genuri">
              <h3 className="section-subtitle">1.1 Cum să înțelegem genurile literare sau tipurile de texte?</h3>
              <div className="gold-divider mt-3 mb-6 w-14" />
              <div className="space-y-4 text-muted-foreground leading-relaxed text-[15px]">
                <p>
                  Genurile literare sunt forme de literatură care au caracteristici distincte și, ca urmare, necesită anumite strategii specifice de lecturare. Cei mai mulți oameni nu ar citi un ziar la fel cum ar citi un roman, o rețetă, o scrisoare, sau versurile unui cântec. Biblia conține mai multe genuri literare diferite, printre care istorie a Vechiului Testament, literatură profetică, literatură de înțelepciune, literatură apocaliptică, evanghelii, fapte ale apostolilor și epistole.
                </p>
                <p>
                  Tipurile de texte sunt ușor diferite de genurile literare. Ambele sunt categorii de literatură și înțelegerea lor presupune înțelegerea unor aspecte precum conținutul, locul în istorie, forma de literatură și scopul retoric. Tipurile de texte se referă doar la forma textului din pasaj – de aceea ele au o importanță vitală pentru deslușirea structurii. În Biblie se găsesc trei tipuri majore de texte: <strong>narațiunea</strong>, <strong>discursul</strong> și <strong>poezia</strong>.
                </p>

                <div className="space-y-4 bg-card rounded-lg border border-border p-5">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Pentru discurs (sau cuvântare):</h4>
                    <p className="text-sm">Acest tip de text este cel mai des întâlnit în discursurile din cărțile istorice ale Vechiului Testament sau din epistole. De obicei, este vorba de o singură persoană care vorbește și tinde să urmeze o desfășurare logică. Trebuie să urmărești logica sau raționamentul pasajului. Ai putea încerca să faci o analiză gramaticală, trasarea fluxului ideilor sau analiza discursului. Cuvintele cheie și cuvintele de tranziție sunt foarte importante.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Pentru narațiune (sau relatare):</h4>
                    <p className="text-sm">Se găsește mai ales în cărțile istorice ale Vechiului Testament, în evanghelii și în Faptele Apostolilor. Structurile tind să se învârtă în jurul intrigii (arcul narativ), personajelor sau altor procedee literare.</p>
                    <ol className="text-sm mt-2 space-y-1 list-decimal list-inside ml-2">
                      <li>Cadrul (prezentarea personajelor, timpul, locul)</li>
                      <li>Conflictul (amplificarea acțiunii)</li>
                      <li>Punctul culminant (punctul de cotitură)</li>
                      <li>Rezolvarea (implementarea soluției)</li>
                      <li>Cadrul cel nou (schimbarea intervenindă)</li>
                    </ol>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Pentru poezie:</h4>
                    <p className="text-sm">Se găsește mai ales în literatura de înțelepciune, cea profetică și cea apocaliptică. Secretul este înțelegerea modului în care funcționează strofele. Observă repetițiile, schimbările de imagini, schimbările la nivelul vocii/punctului de vedere și tipul de paralelism.</p>
                  </div>
                </div>

                <p>
                  Un aspect important: dialogurile sunt, în sens tehnic, narațiuni, dar uneori funcționează ca un discurs. Nu îți fie teamă să tratezi un dialog ca pe un discurs, dacă socotești că ai motive.
                </p>
              </div>
            </section>

            {/* 2. Context */}
            <section id="context">
              <h2 className="section-title">2. Cum contribuie contextul la înțelegerea acestui pasaj?</h2>
              <div className="gold-divider mt-3 mb-6" />
              <div className="space-y-4 text-muted-foreground leading-relaxed text-[15px]">
                <p className="italic text-foreground/80 bg-card p-4 rounded-lg border border-border text-sm">
                  Te rugăm să iei în considerare: a) contextul literar, b) contextul istoric, c) contextul cultural și d) contextul biblic. Te rugăm să le incluzi doar pe cele relevante pentru înțelegerea pasajului.
                </p>
                <p>
                  Cel mai bun mod de identificare a contextului literar este să citești întreaga carte de câteva ori. Fă-ți o idee despre temele și argumentele majore. Uită-te la pasajul anterior și cel ulterior. Ce legătură au acestea cu pasajul tău?
                </p>

                <div className="space-y-3">
                  {[
                    { title: "Istoria Vechiului Testament", text: "Identifică autorul original și destinatarii cărții. Găsirea unor referire din alte cărți care acoperă aceeași perioadă istorică ar putea fi utilă." },
                    { title: "Literatura de înțelepciune", text: "Cărțile de înțelepciune sunt oarecum separate de contextul lor istoric. Întreabă-te ce poți învăța din Scriptură despre contextul istoric, dar fii prudent." },
                    { title: "Literatura profetică și apocaliptică", text: "Integrate în istoria lui Israel din cărțile istorice. S-ar putea să găsești referiri utile în 1 și 2 Împărați." },
                    { title: "Epistolele", text: "Cea mai bună sursă pentru contextul istoric este epistola însăși. Cercetează începutul și sfârșitul scrisorii. Faptele Apostolilor este o resursă foarte folositoare." },
                    { title: "Evangheliile/Faptele Apostolilor", text: "Știm foarte puțin despre autori. Este foarte probabil ca evangheliile să fi fost gândite spre a fi distribuite la scară largă." },
                  ].map((item) => (
                    <div key={item.title} className="bg-card rounded-lg border border-border p-4">
                      <h4 className="font-semibold text-foreground text-sm mb-1">{item.title}</h4>
                      <p className="text-sm">{item.text}</p>
                    </div>
                  ))}
                </div>

                <p>
                  Pentru <strong>contextul cultural</strong>, trebuie să luăm în considerare cadrul din viața de zi cu zi a oamenilor/personajelor din carte. Orice lucru care poate fi extras din textul propriu-zis al Bibliei este, desigur, de încredere. Orice informație care necesită cunoștințe extra-biblice ar trebui tratată cu o anumită doză de scepticism.
                </p>
                <p>
                  Pentru <strong>contextul biblic</strong>, uită-te foarte atent în pasaj. Citează sau face aluzie autorul la un pasaj scris anterior? Întoarce-te la ele și citește-le. Și nu uita: <em>De ce?</em> De ce a ales autorul să facă această legătură biblică?
                </p>
              </div>
            </section>

            {/* 3. Ideea centrala a autorului */}
            <section id="ideea-autorului">
              <h2 className="section-title">3. Ideea centrală a autorului</h2>
              <div className="gold-divider mt-3 mb-6" />
              <div className="space-y-4 text-muted-foreground leading-relaxed text-[15px]">
                <p className="italic text-foreground/80 bg-card p-4 rounded-lg border border-border text-sm">
                  Care este ideea centrală pe care o argumentează autorul înaintea ascultătorilor săi? (într-o singură propoziție scurtă)
                </p>
                <p>
                  Ideea principală a autorului este un mod de a vorbi despre scopul unui pasaj în ansamblu. Aceasta poate fi descriptivă sau prescriptivă. Nu este o simplă declarație rezumativă. Ci, mai degrabă, este ideea de care autorul încearcă să își convingă publicul.
                </p>
                <p>
                  Atunci când lucrezi la articularea ideii centrale a autorului, ține cont că: 1) trebuie să fie suficient de specifică pasajului, 2) se adresează primului public, 3) trebuie să fie o singură propoziție scurtă și clară, și să surprindă logica pasajului. Scopul nu este să înghesui cât mai multe informații, ci să te concentrezi pe ideea centrală și pe scopul principal.
                </p>
              </div>
            </section>

            {/* 4. Legatura cu Evanghelia */}
            <section id="legatura">
              <h2 className="section-title">4. Legătura cu Evanghelia</h2>
              <div className="gold-divider mt-3 mb-6" />
              <div className="space-y-4 text-muted-foreground leading-relaxed text-[15px]">
                <p className="italic text-foreground/80 bg-card p-4 rounded-lg border border-border text-sm">
                  Care este legătura dintre acest pasaj și Evanghelia Domnului Isus Cristos? Ce parte a Evangheliei este avută în vedere?
                </p>
                <p>
                  Presupoziția de la temelia acestor întrebări este ideea că fiecare parte a Bibliei și fiecare pasaj din Scriptură au legătură într-un fel sau altul cu Evanghelia lui Isus Cristos (cf. Luca 24:13-49).
                </p>

                <div className="space-y-3">
                  {[
                    { title: "Referirea explicită", text: "Evanghelia lui Isus Cristos este chiar în pasaj, fiind afirmată direct." },
                    { title: "Împlinirea profetică", text: "Conexiunea cu o profeție sau cu împlinirea ei găsită în altă parte în Biblie." },
                    { title: "Traiectoria istorică", text: "Fiecare pasaj descrie ceva pe o linie temporală a întregii istorii, de la creație la noua creație. În centrul acestei cronologii se află moartea și învierea lui Isus." },
                    { title: "Tipologia", text: "O analogie folosită în literatura biblică. Se pot compara oameni, obiecte, instituții. Un element tipologic este o umbră care indică spre o expresie finală." },
                    { title: "Teme biblice teologice", text: "Idei mai ample care se dezvoltă progresiv de-a lungul Bibliei: împărăția, exodul, preotul și Templul, legământul." },
                    { title: "Învățătura bazată pe Evanghelie", text: "Când întâlnim învățături etice, trebuie să le înțelegem în lumina Evangheliei. Etica ridică o întrebare la care Evanghelia răspunde." },
                  ].map((item) => (
                    <div key={item.title} className="bg-card rounded-lg border border-border p-4">
                      <h4 className="font-semibold text-foreground text-sm mb-1">{item.title}</h4>
                      <p className="text-sm">{item.text}</p>
                    </div>
                  ))}
                </div>

                <p>
                  Miezul Evangheliei este <strong>moartea și învierea Domnului Isus</strong> ca ispășire substitutivă pentru păcatul uman. Dar există și alte unghiuri: întruparea, înălțarea, a doua venire, viața, minunile și învățăturile lui Cristos, precum și implicații precum pocăința, credința și ascultarea.
                </p>
              </div>
            </section>

            {/* 5. Ideea centrala a predicii */}
            <section id="ideea-predicii">
              <h2 className="section-title">5. Ideea centrală a predicii</h2>
              <div className="gold-divider mt-3 mb-6" />
              <div className="space-y-4 text-muted-foreground leading-relaxed text-[15px]">
                <p className="italic text-foreground/80 bg-card p-4 rounded-lg border border-border text-sm">
                  Care este ideea centrală pe care tu o vei argumenta înaintea ascultătorilor tăi? (într-o singură propoziție scurtă)
                </p>
                <p>
                  Ideea centrală a predicii este afirmația fundamentală pe care tu, vorbitorul de azi, vrei să-i convingi pe ascultătorii tăi să o primească. Va fi strâns legată de ideea centrală a autorului și va lua în considerare legătura cu Evanghelia. Te poți gândi la ea ca fiind cea mai elementară idee pe care vrei să-i convingi pe ascultători să o primească.
                </p>
              </div>
            </section>

            {/* 6. Aplicatii */}
            <section id="aplicatii">
              <h2 className="section-title">6. Aplicații</h2>
              <div className="gold-divider mt-3 mb-6" />
              <div className="space-y-4 text-muted-foreground leading-relaxed text-[15px]">
                <p className="italic text-foreground/80 bg-card p-4 rounded-lg border border-border text-sm">
                  Ce aplicații vei face? Gândește-te la cei mântuiți și la cei nemântuiți.
                </p>
                <p>
                  Aplicațiile vor fi legate de ideea centrală a predicii tale. Ai putea avea mai multe aplicații sau doar una. Folosește-ți munca de până la acest punct pentru a extrage din text aplicațiile primare și secundare. Aceste aplicații ar trebui adaptate la categorii specifice de ascultători: cei mântuiți și cei nemântuiți.
                </p>
              </div>
            </section>

            {/* 7. Titlu si schita */}
            <section id="titlu-schita">
              <h2 className="section-title">7. Titlu și schița predicii</h2>
              <div className="gold-divider mt-3 mb-6" />
              <div className="space-y-4 text-muted-foreground leading-relaxed text-[15px]">
                <p className="italic text-foreground/80 bg-card p-4 rounded-lg border border-border text-sm">
                  Care este titlul predicii tale și schița predicii tale?
                </p>
                <p>
                  Titlul unei predici este o frază scurtă și simplă prin care se încearcă surprinderea ideii centrale. Ar trebui să fie succint, pătrunzător sau antrenant. Trebuie să capteze atenția ascultătorilor.
                </p>
                <p>
                  Schița unei predici (schiță homiletică) este un mod de organizare a predicii. Ea ar trebui să derive din munca pe care ai făcut-o asupra pasajului și cel mai probabil va avea legătură cu structura acestuia. Chiar dacă unii ar putea include informații detaliate, schița ta trebuie să cuprindă strict titlurile diviziunilor predicii tale.
                </p>
              </div>
            </section>

            {/* Alte intrebari frecvente */}
            <section id="intrebari">
              <h2 className="section-title">Alte întrebări frecvente</h2>
              <div className="gold-divider mt-3 mb-6" />
              <div className="space-y-6">
                {[
                  {
                    q: "Care este diferența dintre ideea centrală a autorului și ideea mea centrală?",
                    a: "Ideea centrală a autorului (întrebarea 3) se adresează publicului inițial. Ideea ta centrală (întrebarea 5) este aplicarea pasajului la noi/acum.",
                  },
                  {
                    q: "Cum ar trebui să arate fișa mea de lucru?",
                    a: "Trebuie să includă răspunsurile tale. Adu o fișă de o singură pagină (față-verso, de preferat scris la computer) și copii pentru grupul tău mic.",
                  },
                  {
                    q: "Cum ar trebui să fie prezentarea mea?",
                    a: "Prezentarea de cinci minute va consta în expunerea conținutului de pe fișa ta de lucru, inclusiv schița predicii.",
                  },
                  {
                    q: "Sunt la prima participare. Cum să mă pregătesc?",
                    a: "Acest document și resursele de pe site sunt menite să te ajute. Am constatat că nu putem crește cu adevărat decât dacă ne aducem propria muncă și o lăsăm ca alții să o evalueze.",
                  },
                  {
                    q: "De ce nu puneți la dispoziție modelul unei fișe completate?",
                    a: "Am constatat că se limitează domeniul de aplicare a răspunsurilor și participanții privesc răspunsurile ca fiind „răspunsurile corecte.” Preferăm să cultivăm discernământul.",
                  },
                  {
                    q: "Ce se întâmplă dacă greșesc?",
                    a: "Este în regulă să fii emoționat. Procesul de învățare este continuu. Conducătorii grupurilor mici cultivă un mediu colegial în care fiecare va fi încurajat și ajutat să crească.",
                  },
                ].map((faq) => (
                  <div key={faq.q} className="bg-card rounded-lg border border-border p-5">
                    <h4 className="font-display font-semibold text-foreground mb-2">{faq.q}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Back to top */}
            <div className="text-center pt-8">
              <button onClick={scrollToTop} className="inline-flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors font-medium">
                <ArrowUp size={16} /> Înapoi la înoceput
              </button>
              <div className="mt-4">
                <Link to="/fisa" className="text-primary hover:text-accent transition-colors font-semibold underline underline-offset-2">
                  Mergi la Fișa interactivă →
                </Link>
              </div>
            </div>
          </article>

        </motion.div>
      </section>
    </Layout>
  );
};

export default GhidPage;
