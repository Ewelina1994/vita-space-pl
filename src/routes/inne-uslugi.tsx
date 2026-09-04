import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, AlertTriangle } from "lucide-react";
import { SiteLayout, Section, PageHero } from "@/components/SiteLayout";
import presoImg from "@/assets/presoterapia.jpg";
import dermomasaz from "@/assets/dermomasaz.png";
import bodyshaping from "@/assets/body-shaping.jpg";
import lipolaser from "@/assets/lipolaser.png";
import liposukcja from "@/assets/liposukcja kawitacyjna.png";
import { absoluteAssetUrl, buildCanonicalUrl, canonicalLink } from "@/lib/seo";

export const Route = createFileRoute("/inne-uslugi")({
  head: () => ({
    meta: [
      { title: "Presoterapia i Body Shaping — Vita Space" },
      {
        name: "description",
        content:
          "Presoterapia (drenaż limfatyczny) i zabiegi body shaping w Vita Space. Redukcja obrzęków, cellulitu i modelowanie sylwetki.",
      },
      { property: "og:title", content: "Presoterapia i Body Shaping — Vita Space" },
      {
        property: "og:description",
        content:
          "Presoterapia (drenaż limfatyczny) i zabiegi body shaping w Vita Space. Redukcja obrzęków, cellulitu i modelowanie sylwetki.",
      },
      { property: "og:url", content: buildCanonicalUrl("/inne-uslugi") },
      { property: "og:image", content: absoluteAssetUrl(bodyshaping) },
    ],
    links: [canonicalLink("/inne-uslugi")],
  }),
  component: InneUslugi,
});

function InneUslugi() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Presoterapia & Body Shaping"
        title="Zabiegi, które pracują za Ciebie"
        subtitle="Uzupełnij trening o nowoczesne technologie modelowania sylwetki i regeneracji ciała."
        image={bodyshaping}
      />

      {/* PRESOTERAPIA */}
      <Section eyebrow="Presoterapia" title="Drenaż limfatyczny — odciążenie ciała">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="rounded-2xl overflow-hidden">
            <img
              src={presoImg}
              alt="Presoterapia"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-foreground">Presoterapia</strong> to nowoczesny zabieg drenażu
              limfatycznego wykonywany przy pomocy specjalnego kombinezonu uciskowego. Sekwencyjny,
              dopasowany ucisk działa jak profesjonalny masaż limfatyczny — pobudza krążenie,
              przyspiesza usuwanie toksyn i redukuje zastoje limfy.
            </p>
            <p className="font-medium text-foreground">Rezultaty:</p>
            <ul className="space-y-2">
              {[
                "Widoczna redukcja obrzęków nóg i uczucia ciężkości",
                "Redukcja cellulitu (już po serii kilku zabiegów)",
                "Poprawa jędrności i wyglądu skóry",
                "Szybsza regeneracja po treningu",
                "Poprawa krążenia i detoksykacja organizmu",
                "Głębokie uczucie relaksu",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-sm">{t}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <div className="text-xs uppercase tracking-[0.3em] text-destructive mb-2">
                Przeciwwskazania
              </div>
              <ul className="space-y-2">
                {[
                  "Zakrzepica i choroby żył",
                  "Nowotwory w trakcie leczenia",
                  "Ciąża",
                  "Niewydolność serca i nerek",
                  "Stany zapalne skóry i infekcje",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <AlertTriangle className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
                    <span className="text-sm">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* BODY SHAPING */}
      <Section eyebrow="Body Shaping" title="Body Shaping (masaż podciśnieniowy)">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="rounded-2xl overflow-hidden">
            <img
              src={dermomasaz}
              alt="Body Shaping"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-foreground">Body Shaping</strong> to nowoczesny zabieg
              wykorzystujący masaż ssąco-próżniowy, który pobudza krążenie, wspiera redukcję
              cellulitu i pomaga wymodelować sylwetkę. Regularne zabiegi mogą poprawić jędrność
              skóry, zmniejszyć obrzęki oraz wspomóc proces wyszczuplania.
            </p>
            <p className="font-medium text-foreground">Najczęściej wykonywany na:</p>
            <ul className="space-y-2">
              {["Brzuchu", "Udach", "Pośladkach", "Biodrach", "Ramionach"].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-sm">{t}</span>
                </li>
              ))}
            </ul>
            <p>
              Idealny dla osób, które chcą wygładzić skórę, zmniejszyć widoczność cellulitu i
              podkreślić kształty sylwetki.
            </p>
          </div>
        </div>
      </Section>

      {/* KAWITACJA */}
      <section className="bg-navy-deep/50 border-y border-border/60">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="text-xs uppercase tracking-[0.35em] text-gold mb-4">Kawitacja</div>
          <h2 className="text-4xl md:text-5xl leading-tight mb-12 max-w-3xl">
            Liposucja kawitacyjna — redukcja tkanki tłuszczowej
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-5 text-muted-foreground leading-relaxed order-2 lg:order-1">
              <p>
                <strong className="text-foreground">Liposucja kawitacyjna</strong> jest używana do
                redukcji tkanki tłuszczowej w trudno dostępnych obszarach. To nieinwazyjny zabieg,
                który rozbija komórki tłuszczowe, pozbawiając się ich naturalnie poprzez organizm.
              </p>
              <p className="font-medium text-foreground">Doskonała do modelowania:</p>
              <ul className="space-y-2">
                {[
                  "Brzucha i boczków",
                  "Wewnętrznych stron ud",
                  "Pośladków",
                  "Obszarów trudno dostępnych",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-sm">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden order-1 lg:order-2">
              <img
                src={liposukcja}
                alt="Liposucja kawitacyjna"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FALE RADIOWE */}
      <Section eyebrow="Radiofrekwencja" title="Radiofrekwencja — podgrzewanie i napięcie skóry">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="rounded-2xl overflow-hidden">
            <img
              src={bodyshaping}
              alt="Radiofrekwencja"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-foreground">Radiofrekwencja</strong> podgrzewa tkankę,
              poprawiając jej napięcie i kondycję. To zabieg, który stymuluje produkcję kolagenu i
              elastyny, wzmacniając strukturę skóry i przywracając jej naturalny blask.
            </p>
            <p className="font-medium text-foreground">Efekty zabiegu:</p>
            <ul className="space-y-2">
              {[
                "Znaczna poprawa napięcia skóry",
                "Wzmocnienie kondycji tkanki",
                "Wygładzenie zmarszczek",
                "Naturalne ujędrnienie",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-sm">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* LIPOLASER */}
      <section className="bg-navy-deep/50 border-y border-border/60">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="text-xs uppercase tracking-[0.35em] text-gold mb-4">Lipolaser</div>
          <h2 className="text-4xl md:text-5xl leading-tight mb-12 max-w-3xl">
            Lipolaser — stymulacja metabolizmu i rozbicie tkanki tłuszczowej
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-5 text-muted-foreground leading-relaxed order-2 lg:order-1">
              <p>
                <strong className="text-foreground">Lipolaser</strong> wykorzystuje światło laserowe
                do stymulacji procesów metabolicznych i rozbicia tkanki tłuszczowej, której
                pozostałości są następnie naturalnie wydalne z organizmu.
              </p>
              <p>
                To nowoczesna, nieinwazyjne rozwiązanie wspierające redukcję lokalizacji opornych na
                trening i dietę.
              </p>
              <p className="font-medium text-foreground">Wskazania:</p>
              <ul className="space-y-2">
                {[
                  "Stymulacja procesów metabolicznych",
                  "Redukcja tkanki tłuszczowej",
                  "Wspieranie naturalnej detoksykacji",
                  "Idealne uzupełnienie kawitacji",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-sm">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden order-1 lg:order-2">
              <img
                src={lipolaser}
                alt="Lipolaser"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PRZECIWWSKAZANIA */}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-3xl mb-10">
            <div className="text-xs uppercase tracking-[0.35em] text-gold mb-4">Ważne</div>
            <h2 className="text-4xl md:text-5xl leading-tight mb-8">
              Przeciwwskazania do zabiegów
            </h2>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8 max-w-2xl">
            <ul className="space-y-2">
              {[
                "Ciąża i karmienie piersią",
                "Rozrusznik serca / implanty metalowe",
                "Choroby nowotworowe",
                "Padaczka",
                "Poważne choroby serca, wątroby lub nerek",
                "Świeże zabiegi chirurgiczne w okolicy zabiegu",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <AlertTriangle className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
                  <span className="text-sm">{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-14">
            <Link
              to="/cennik"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-medium text-primary-foreground hover:opacity-90"
            >
              Zobacz cennik zabiegów
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
