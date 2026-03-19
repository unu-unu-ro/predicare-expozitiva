import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import HeroBanner from "@/components/HeroBanner";
import { BookOpen, ArrowUp } from "lucide-react";

const tocItems = [
  { id: "introducere", label: "Introducere" },
  { id: "structura", label: "1. Structura pasajului", sub: [{ id: "genuri", label: "1.1 Cum s\u0103 \u00EEn\u021Belegem genurile literare" }] },
  { id: "context", label: "2. Contextul pasajului" },
  { id: "ideea-autorului", label: "3. Ideea central\u0103 a autorului" },
  { id: "legatura", label: "4. Leg\u0103tura cu Evanghelia" },
  { id: "ideea-predicii", label: "5. Ideea central\u0103 a predicii" },
  { id: "aplicatii", label: "6. Aplica\u021Bii" },
  { id: "titlu-schita", label: "7. Titlu \u0219i schi\u021Ba predicii" },
  { id: "intrebari", label: "Alte \u00EEntreb\u0103ri frecvente" },
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
      <HeroBanner title="Ghid de Preg\u0103tire" subtitle="Ghid de Preg\u0103tire a Fi\u0219ei de Lucru" />

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
                  Preg\u0103tirea unei fi\u0219e de lucru pentru grupul t\u0103u mic poate fi o sarcin\u0103 dificil\u0103, mai ales dac\u0103 participi pentru prima dat\u0103 la un astfel de Seminar de predicare expozitiv\u0103. A\u0219teptarea noastr\u0103 de la tine este s\u0103 muncești cu s\u00E2rguin\u021B\u0103 \u0219i s\u0103 dai tot ce ai mai bun. Totodat\u0103, nu am vrea s\u0103 fii peste m\u0103sur\u0103 de stresat ori speriat cu privire la ceea ce se va \u00EEnt\u00E2mpla atunci c\u00E2nd va trebui s\u0103-\u021Bi prezin\u021Bi munca \u00EEn grupul t\u0103u mic.
                </p>
                <p>
                  Bine\u00EEn\u021Beles c\u0103 cea mai bun\u0103 modalitate de a \u00EEn\u021Belege conceptele din Fi\u0219a de lucru pentru preg\u0103tirea predicii este s\u0103 participi la un seminar. Dac\u0103 e\u0219ti la prima participare, nu ne vom a\u0219tepta s\u0103 le fi \u00EEn\u021Beles pe toate. Acest document clarific\u0103 o parte din terminologie \u0219i inten\u021Bia \u00EEntreb\u0103rilor de pe fi\u0219a de lucru. De asemenea, po\u021Bi vizita site-ul organiza\u021Biei \u0219i po\u021Bi audia o parte din \u00EEnregistr\u0103rile audio de la seminarele anterioare pentru a te ajuta \u00EEn preg\u0103tire.
                </p>
              </div>
            </section>

            {/* 1. Structura */}
            <section id="structura">
              <h2 className="section-title">1. \u00CEn ce fel a structurat autorul acest pasaj?</h2>
              <div className="gold-divider mt-3 mb-6" />
              <div className="space-y-4 text-muted-foreground leading-relaxed text-[15px]">
                <p className="italic text-foreground/80 bg-card p-4 rounded-lg border border-border text-sm">
                  Te rug\u0103m a) s\u0103 ar\u0103\u021Bi structura sub form\u0103 de sec\u021Biuni, al\u0103turi de versetele aferente \u0219i b) s\u0103 explici strategiile pe care le-ai folosit pentru a identifica aceast\u0103 structur\u0103. Pe ce pune accent aceast\u0103 structur\u0103?
                </p>
                <p>
                  Structura (sau modalitatea de organizare) folosit\u0103 de autor este un fel de a vorbi despre forma sau conforma\u021Bia unui pasaj biblic. Dincolo de suprafa\u021Ba oric\u0103rui pasaj se afl\u0103 o a\u0219ezare interioar\u0103 a materialului \u0219i o aranjare logic\u0103 pe care autorul a folosit-o pentru a organiza pasajul. Te po\u021Bi g\u00E2ndi la aceasta ca fiind schi\u021Ba autorului. Iar fiecare parte a pasajului joac\u0103 un rol \u00EEn aceast\u0103 schi\u021B\u0103. Atunci c\u00E2nd \u00EE\u021Bi cerem s\u0103 identifici structura unui pasaj, de fapt ne a\u0219tept\u0103m s\u0103 identifici acea alc\u0103tuire interioar\u0103. Ar putea fi o structur\u0103 gramatical\u0103 sau logic\u0103 (obi\u0219nuit\u0103 \u00EEntr-un discurs), sau ar putea fi o intrig\u0103, o compara\u021Bie \u00EEntre personaje sau un procedeu literar (obi\u0219nuit \u00EEntr-o nara\u021Biune), sau ar putea fi \u00EEmp\u0103r\u021Birea pasajului pe strofe (cum e cazul \u00EEntr-o poezie).
                </p>
                <p>
                  De re\u021Binut c\u0103 structura va dezv\u0103lui un accent pe care autorul \u00EEl pune \u0219i pe care l-a comunicat prin intermediul structurii. Acesta este motivul pentru care \u00EEn\u021Belegerea derul\u0103rii pasajului, nu doar a p\u0103r\u021Bilor, este at\u00E2t de important. G\u00E2nde\u0219te-te la structur\u0103 \u0219i la modul \u00EEn care p\u0103r\u021Bile se rela\u021Bioneaz\u0103 \u00EEntre ele. Pune \u00EEntreb\u0103rile <em>de ce</em> \u0219i <em>cum</em> pentru a vedea dac\u0103 po\u021Bi identifica accentul pus de autor.
                </p>
                <p>
                  \u00CEn cele din urm\u0103, explic\u0103 \u00EEn ce fel ai ajuns la acea structur\u0103 sau ce strategii ai folosit pentru a o g\u0103si. Vrem s\u0103 vedem ra\u021Bionamentul din spatele muncii tale \u0219i felul \u00EEn care \u00EEncerci s\u0103 identifici accentul dintr-un pasaj.
                </p>
              </div>
            </section>

            {/* 1.1 Genuri literare */}
            <section id="genuri">
              <h3 className="section-subtitle">1.1 Cum s\u0103 \u00EEn\u021Belegem genurile literare sau tipurile de texte?</h3>
              <div className="gold-divider mt-3 mb-6 w-14" />
              <div className="space-y-4 text-muted-foreground leading-relaxed text-[15px]">
                <p>
                  Genurile literare sunt forme de literatur\u0103 care au caracteristici distincte \u0219i, ca urmare, necesit\u0103 anumite strategii specifice de lecturare. Cei mai mul\u021Bi oameni nu ar citi un ziar la fel cum ar citi un roman, o re\u021Bet\u0103, o scrisoare, sau versurile unui c\u00E2ntec. Biblia con\u021Bine mai multe genuri literare diferite, printre care istorie a Vechiului Testament, literatur\u0103 profetic\u0103, literatur\u0103 de \u00EEn\u021Belepciune, literatur\u0103 apocaliptic\u0103, evanghelii, fapte ale apostolilor \u0219i epistole.
                </p>
                <p>
                  Tipurile de texte sunt u\u0219or diferite de genurile literare. Ambele sunt categorii de literatur\u0103 \u0219i \u00EEn\u021Belegerea lor presupune \u00EEn\u021Belegerea unor aspecte precum con\u021Binutul, locul \u00EEn istorie, forma de literatur\u0103 \u0219i scopul retoric. Tipurile de texte se refer\u0103 doar la forma textului din pasaj \u2013 de aceea ele au o importan\u021B\u0103 vital\u0103 pentru deslu\u0219irea structurii. \u00CEn Biblie se g\u0103sesc trei tipuri majore de texte: <strong>nara\u021Biunea</strong>, <strong>discursul</strong> \u0219i <strong>poezia</strong>.
                </p>

                <div className="space-y-4 bg-card rounded-lg border border-border p-5">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Pentru discurs (sau cuv\u00E2ntare):</h4>
                    <p className="text-sm">Acest tip de text este cel mai des \u00EEnt\u00E2lnit \u00EEn discursurile din c\u0103r\u021Bile istorice ale Vechiului Testament sau din epistole. De obicei, este vorba de o singur\u0103 persoan\u0103 care vorbe\u0219te \u0219i tinde s\u0103 urmeze o desf\u0103\u0219urare logic\u0103. Trebuie s\u0103 urm\u0103re\u0219ti logica sau ra\u021Bionamentul pasajului. Ai putea \u00EEncerca s\u0103 faci o analiz\u0103 gramatical\u0103, trasarea fluxului ideilor sau analiza discursului. Cuvintele cheie \u0219i cuvintele de tranzi\u021Bie sunt foarte importante.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Pentru nara\u021Biune (sau relatare):</h4>
                    <p className="text-sm">Se g\u0103se\u0219te mai ales \u00EEn c\u0103r\u021Bile istorice ale Vechiului Testament, \u00EEn evanghelii \u0219i \u00EEn Faptele Apostolilor. Structurile tind s\u0103 se \u00EEnv\u00E2rt\u0103 \u00EEn jurul intrigii (arcul narativ), personajelor sau altor procedee literare.</p>
                    <ol className="text-sm mt-2 space-y-1 list-decimal list-inside ml-2">
                      <li>Cadrul (prezentarea personajelor, timpul, locul)</li>
                      <li>Conflictul (amplificarea ac\u021Biunii)</li>
                      <li>Punctul culminant (punctul de cotitur\u0103)</li>
                      <li>Rezolvarea (implementarea solu\u021Biei)</li>
                      <li>Cadrul cel nou (schimbarea intervenind\u0103)</li>
                    </ol>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Pentru poezie:</h4>
                    <p className="text-sm">Se g\u0103se\u0219te mai ales \u00EEn literatura de \u00EEn\u021Belepciune, cea profetic\u0103 \u0219i cea apocaliptic\u0103. Secretul este \u00EEn\u021Belegerea modului \u00EEn care func\u021Bioneaz\u0103 strofele. Observ\u0103 repeti\u021Biile, schimb\u0103rile de imagini, schimb\u0103rile la nivelul vocii/punctului de vedere \u0219i tipul de paralelism.</p>
                  </div>
                </div>

                <p>
                  Un aspect important: dialogurile sunt, \u00EEn sens tehnic, nara\u021Biuni, dar uneori func\u021Bioneaz\u0103 ca un discurs. Nu \u00EE\u021Bi fie team\u0103 s\u0103 tratezi un dialog ca pe un discurs, dac\u0103 socote\u0219ti c\u0103 ai motive.
                </p>
              </div>
            </section>

            {/* 2. Context */}
            <section id="context">
              <h2 className="section-title">2. Cum contribuie contextul la \u00EEn\u021Belegerea acestui pasaj?</h2>
              <div className="gold-divider mt-3 mb-6" />
              <div className="space-y-4 text-muted-foreground leading-relaxed text-[15px]">
                <p className="italic text-foreground/80 bg-card p-4 rounded-lg border border-border text-sm">
                  Te rug\u0103m s\u0103 iei \u00EEn considerare: a) contextul literar, b) contextul istoric, c) contextul cultural \u0219i d) contextul biblic. Te rug\u0103m s\u0103 le incluzi doar pe cele relevante pentru \u00EEn\u021Belegerea pasajului.
                </p>
                <p>
                  Cel mai bun mod de identificare a contextului literar este s\u0103 cite\u0219ti \u00EEntreaga carte de c\u00E2teva ori. F\u0103-\u021Bi o idee despre temele \u0219i argumentele majore. Uit\u0103-te la pasajul anterior \u0219i cel ulterior. Ce leg\u0103tur\u0103 au acestea cu pasajul t\u0103u?
                </p>

                <div className="space-y-3">
                  {[
                    { title: "Istoria Vechiului Testament", text: "Identific\u0103 autorul original \u0219i destinatarii c\u0103r\u021Bii. G\u0103sirea unor referire din alte c\u0103r\u021Bi care acoper\u0103 aceea\u0219i perioad\u0103 istoric\u0103 ar putea fi util\u0103." },
                    { title: "Literatura de \u00EEn\u021Belepciune", text: "C\u0103r\u021Bile de \u00EEn\u021Belepciune sunt oarecum separate de contextul lor istoric. \u00CEntreab\u0103-te ce po\u021Bi \u00EEnv\u0103\u021Ba din Scriptur\u0103 despre contextul istoric, dar fii prudent." },
                    { title: "Literatura profetic\u0103 \u0219i apocaliptic\u0103", text: "Integrate \u00EEn istoria lui Israel din c\u0103r\u021Bile istorice. S-ar putea s\u0103 g\u0103se\u0219ti referiri utile \u00EEn 1 \u0219i 2 \u00CEmp\u0103ra\u021Bi." },
                    { title: "Epistolele", text: "Cea mai bun\u0103 surs\u0103 pentru contextul istoric este epistola \u00EEns\u0103\u0219i. Cerceteaz\u0103 \u00EEnceputul \u0219i sf\u00E2r\u0219itul scrisorii. Faptele Apostolilor este o resurs\u0103 foarte folositoare." },
                    { title: "Evangheliile/Faptele Apostolilor", text: "\u0218tim foarte pu\u021Bin despre autori. Este foarte probabil ca evangheliile s\u0103 fi fost g\u00E2ndite spre a fi distribuite la scar\u0103 larg\u0103." },
                  ].map((item) => (
                    <div key={item.title} className="bg-card rounded-lg border border-border p-4">
                      <h4 className="font-semibold text-foreground text-sm mb-1">{item.title}</h4>
                      <p className="text-sm">{item.text}</p>
                    </div>
                  ))}
                </div>

                <p>
                  Pentru <strong>contextul cultural</strong>, trebuie s\u0103 lu\u0103m \u00EEn considerare cadrul din via\u021Ba de zi cu zi a oamenilor/personajelor din carte. Orice lucru care poate fi extras din textul propriu-zis al Bibliei este, desigur, de \u00EEncredere. Orice informa\u021Bie care necesit\u0103 cuno\u0219tin\u021Be extra-biblice ar trebui tratat\u0103 cu o anumit\u0103 doz\u0103 de scepticism.
                </p>
                <p>
                  Pentru <strong>contextul biblic</strong>, uit\u0103-te foarte atent \u00EEn pasaj. Citeaz\u0103 sau face aluzie autorul la un pasaj scris anterior? \u00CEntoarce-te la ele \u0219i cite\u0219te-le. \u0218i nu uita: <em>De ce?</em> De ce a ales autorul s\u0103 fac\u0103 aceast\u0103 leg\u0103tur\u0103 biblic\u0103?
                </p>
              </div>
            </section>

            {/* 3. Ideea centrala a autorului */}
            <section id="ideea-autorului">
              <h2 className="section-title">3. Ideea central\u0103 a autorului</h2>
              <div className="gold-divider mt-3 mb-6" />
              <div className="space-y-4 text-muted-foreground leading-relaxed text-[15px]">
                <p className="italic text-foreground/80 bg-card p-4 rounded-lg border border-border text-sm">
                  Care este ideea central\u0103 pe care o argumenteaz\u0103 autorul \u00EEnaintea ascult\u0103torilor s\u0103i? (\u00EEntr-o singur\u0103 propozi\u021Bie scurt\u0103)
                </p>
                <p>
                  Ideea principal\u0103 a autorului este un mod de a vorbi despre scopul unui pasaj \u00EEn ansamblu. Aceasta poate fi descriptiv\u0103 sau prescriptiv\u0103. Nu este o simpl\u0103 declara\u021Bie rezumativ\u0103. Ci, mai degrab\u0103, este ideea de care autorul \u00EEncearc\u0103 s\u0103 \u00EE\u0219i conving\u0103 publicul.
                </p>
                <p>
                  Atunci c\u00E2nd lucrezi la articularea ideii centrale a autorului, \u021Bine cont c\u0103: 1) trebuie s\u0103 fie suficient de specific\u0103 pasajului, 2) se adreseaz\u0103 primului public, 3) trebuie s\u0103 fie o singur\u0103 propozi\u021Bie scurt\u0103 \u0219i clar\u0103, \u0219i s\u0103 surprind\u0103 logica pasajului. Scopul nu este s\u0103 \u00EEnghesui c\u00E2t mai multe informa\u021Bii, ci s\u0103 te concentrezi pe ideea central\u0103 \u0219i pe scopul principal.
                </p>
              </div>
            </section>

            {/* 4. Legatura cu Evanghelia */}
            <section id="legatura">
              <h2 className="section-title">4. Leg\u0103tura cu Evanghelia</h2>
              <div className="gold-divider mt-3 mb-6" />
              <div className="space-y-4 text-muted-foreground leading-relaxed text-[15px]">
                <p className="italic text-foreground/80 bg-card p-4 rounded-lg border border-border text-sm">
                  Care este leg\u0103tura dintre acest pasaj \u0219i Evanghelia Domnului Isus Cristos? Ce parte a Evangheliei este avut\u0103 \u00EEn vedere?
                </p>
                <p>
                  Presupozi\u021Bia de la temelia acestor \u00EEntreb\u0103ri este ideea c\u0103 fiecare parte a Bibliei \u0219i fiecare pasaj din Scriptur\u0103 au leg\u0103tur\u0103 \u00EEntr-un fel sau altul cu Evanghelia lui Isus Cristos (cf. Luca 24:13-49).
                </p>

                <div className="space-y-3">
                  {[
                    { title: "Referirea explicit\u0103", text: "Evanghelia lui Isus Cristos este chiar \u00EEn pasaj, fiind afirmat\u0103 direct." },
                    { title: "\u00CEmplinirea profetic\u0103", text: "Conexiunea cu o profe\u021Bie sau cu \u00EEmplinirea ei g\u0103sit\u0103 \u00EEn alt\u0103 parte \u00EEn Biblie." },
                    { title: "Traiectoria istoric\u0103", text: "Fiecare pasaj descrie ceva pe o linie temporal\u0103 a \u00EEntregii istorii, de la crea\u021Bie la noua crea\u021Bie. \u00CEn centrul acestei cronologii se afl\u0103 moartea \u0219i \u00EEnvierea lui Isus." },
                    { title: "Tipologia", text: "O analogie folosit\u0103 \u00EEn literatura biblic\u0103. Se pot compara oameni, obiecte, institu\u021Bii. Un element tipologic este o umbr\u0103 care indic\u0103 spre o expresie final\u0103." },
                    { title: "Teme biblice teologice", text: "Idei mai ample care se dezvolt\u0103 progresiv de-a lungul Bibliei: \u00EEmp\u0103r\u0103\u021Bia, exodul, preotul \u0219i Templul, leg\u0103m\u00E2ntul." },
                    { title: "\u00CEnv\u0103\u021B\u0103tura bazat\u0103 pe Evanghelie", text: "C\u00E2nd \u00EEnt\u00E2lnim \u00EEnv\u0103\u021B\u0103turi etice, trebuie s\u0103 le \u00EEn\u021Belegem \u00EEn lumina Evangheliei. Etica ridic\u0103 o \u00EEntrebare la care Evanghelia r\u0103spunde." },
                  ].map((item) => (
                    <div key={item.title} className="bg-card rounded-lg border border-border p-4">
                      <h4 className="font-semibold text-foreground text-sm mb-1">{item.title}</h4>
                      <p className="text-sm">{item.text}</p>
                    </div>
                  ))}
                </div>

                <p>
                  Miezul Evangheliei este <strong>moartea \u0219i \u00EEnvierea Domnului Isus</strong> ca isp\u0103\u0219ire substitutiv\u0103 pentru p\u0103catul uman. Dar exist\u0103 \u0219i alte unghiuri: \u00EEntruparea, \u00EEn\u0103l\u021Barea, a doua venire, via\u021Ba, minunile \u0219i \u00EEnv\u0103\u021B\u0103turile lui Cristos, precum \u0219i implica\u021Bii precum poc\u0103in\u021Ba, credin\u021Ba \u0219i ascultarea.
                </p>
              </div>
            </section>

            {/* 5. Ideea centrala a predicii */}
            <section id="ideea-predicii">
              <h2 className="section-title">5. Ideea central\u0103 a predicii</h2>
              <div className="gold-divider mt-3 mb-6" />
              <div className="space-y-4 text-muted-foreground leading-relaxed text-[15px]">
                <p className="italic text-foreground/80 bg-card p-4 rounded-lg border border-border text-sm">
                  Care este ideea central\u0103 pe care tu o vei argumenta \u00EEnaintea ascult\u0103torilor t\u0103i? (\u00EEntr-o singur\u0103 propozi\u021Bie scurt\u0103)
                </p>
                <p>
                  Ideea central\u0103 a predicii este afirma\u021Bia fundamental\u0103 pe care tu, vorbitorul de azi, vrei s\u0103-i convingi pe ascult\u0103torii t\u0103i s\u0103 o primeasc\u0103. Va fi str\u00E2ns legat\u0103 de ideea central\u0103 a autorului \u0219i va lua \u00EEn considerare leg\u0103tura cu Evanghelia. Te po\u021Bi g\u00E2ndi la ea ca fiind cea mai elementar\u0103 idee pe care vrei s\u0103-i convingi pe ascult\u0103tori s\u0103 o primeasc\u0103.
                </p>
              </div>
            </section>

            {/* 6. Aplicatii */}
            <section id="aplicatii">
              <h2 className="section-title">6. Aplica\u021Bii</h2>
              <div className="gold-divider mt-3 mb-6" />
              <div className="space-y-4 text-muted-foreground leading-relaxed text-[15px]">
                <p className="italic text-foreground/80 bg-card p-4 rounded-lg border border-border text-sm">
                  Ce aplica\u021Bii vei face? G\u00E2nde\u0219te-te la cei m\u00E2ntui\u021Bi \u0219i la cei nem\u00E2ntui\u021Bi.
                </p>
                <p>
                  Aplica\u021Biile vor fi legate de ideea central\u0103 a predicii tale. Ai putea avea mai multe aplica\u021Bii sau doar una. Folose\u0219te-\u021Bi munca de p\u00E2n\u0103 la acest punct pentru a extrage din text aplica\u021Biile primare \u0219i secundare. Aceste aplica\u021Bii ar trebui adaptate la categorii specifice de ascult\u0103tori: cei m\u00E2ntui\u021Bi \u0219i cei nem\u00E2ntui\u021Bi.
                </p>
              </div>
            </section>

            {/* 7. Titlu si schita */}
            <section id="titlu-schita">
              <h2 className="section-title">7. Titlu \u0219i schi\u021Ba predicii</h2>
              <div className="gold-divider mt-3 mb-6" />
              <div className="space-y-4 text-muted-foreground leading-relaxed text-[15px]">
                <p className="italic text-foreground/80 bg-card p-4 rounded-lg border border-border text-sm">
                  Care este titlul predicii tale \u0219i schi\u021Ba predicii tale?
                </p>
                <p>
                  Titlul unei predici este o fraz\u0103 scurt\u0103 \u0219i simpl\u0103 prin care se \u00EEncearc\u0103 surprinderea ideii centrale. Ar trebui s\u0103 fie succint, p\u0103trunz\u0103tor sau antrenant. Trebuie s\u0103 capteze aten\u021Bia ascult\u0103torilor.
                </p>
                <p>
                  Schi\u021Ba unei predici (schi\u021B\u0103 homiletic\u0103) este un mod de organizare a predicii. Ea ar trebui s\u0103 derive din munca pe care ai f\u0103cut-o asupra pasajului \u0219i cel mai probabil va avea leg\u0103tur\u0103 cu structura acestuia. Chiar dac\u0103 unii ar putea include informa\u021Bii detaliate, schi\u021Ba ta trebuie s\u0103 cuprind\u0103 strict titlurile diviziunilor predicii tale.
                </p>
              </div>
            </section>

            {/* Alte intrebari frecvente */}
            <section id="intrebari">
              <h2 className="section-title">Alte \u00EEntreb\u0103ri frecvente</h2>
              <div className="gold-divider mt-3 mb-6" />
              <div className="space-y-6">
                {[
                  {
                    q: "Care este diferen\u021Ba dintre ideea central\u0103 a autorului \u0219i ideea mea central\u0103?",
                    a: "Ideea central\u0103 a autorului (\u00EEntrebarea 3) se adreseaz\u0103 publicului ini\u021Bial. Ideea ta central\u0103 (\u00EEntrebarea 5) este aplicarea pasajului la noi/acum.",
                  },
                  {
                    q: "Cum ar trebui s\u0103 arate fi\u0219a mea de lucru?",
                    a: "Trebuie s\u0103 includ\u0103 r\u0103spunsurile tale. Adu o fi\u0219\u0103 de o singur\u0103 pagin\u0103 (fa\u021B\u0103-verso, de preferat scris la computer) \u0219i copii pentru grupul t\u0103u mic.",
                  },
                  {
                    q: "Cum ar trebui s\u0103 fie prezentarea mea?",
                    a: "Prezentarea de cinci minute va consta \u00EEn expunerea con\u021Binutului de pe fi\u0219a ta de lucru, inclusiv schi\u021Ba predicii.",
                  },
                  {
                    q: "Sunt la prima participare. Cum s\u0103 m\u0103 preg\u0103tesc?",
                    a: "Acest document \u0219i resursele de pe site sunt menite s\u0103 te ajute. Am constatat c\u0103 nu putem cre\u0219te cu adev\u0103rat dec\u00E2t dac\u0103 ne aducem propria munc\u0103 \u0219i o l\u0103s\u0103m ca al\u021Bii s\u0103 o evalueze.",
                  },
                  {
                    q: "De ce nu pune\u021Bi la dispozi\u021Bie modelul unei fi\u0219e completate?",
                    a: "Am constatat c\u0103 se limiteaz\u0103 domeniul de aplicare a r\u0103spunsurilor \u0219i participan\u021Bii privesc r\u0103spunsurile ca fiind \u201Er\u0103spunsurile corecte.\u201D Prefer\u0103m s\u0103 cultiv\u0103m discern\u0103m\u00E2ntul.",
                  },
                  {
                    q: "Ce se \u00EEnt\u00E2mpl\u0103 dac\u0103 gre\u0219esc?",
                    a: "Este \u00EEn regul\u0103 s\u0103 fii emo\u021Bionat. Procesul de \u00EEnv\u0103\u021Bare este continuu. Conduc\u0103torii grupurilor mici cultiv\u0103 un mediu colegial \u00EEn care fiecare va fi \u00EEncurajat \u0219i ajutat s\u0103 creasc\u0103.",
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
                <ArrowUp size={16} /> \u00CEnapoi la \u00EEnoceput
              </button>
              <div className="mt-4">
                <Link to="/fisa" className="text-primary hover:text-accent transition-colors font-semibold underline underline-offset-2">
                  Mergi la Fi\u0219a interactiv\u0103 \u2192
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
