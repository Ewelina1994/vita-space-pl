import { createFileRoute, Link } from "@tanstack/react-router";
import { AlertTriangle, CheckCircle2 } from "lucide-react";
import { PageHero, Section, SiteLayout } from "@/components/SiteLayout";
import presoImg from "@/assets/presoterapia.png";
import rf from "@/assets/rf.png";
import masazTkanekGlebokich from "@/assets/Masaz-Tkanek-Glebokich.jpg";
import masazKobido from "@/assets/masaz-kobido.png";
import { absoluteAssetUrl, buildCanonicalUrl, canonicalLink } from "@/lib/seo";

export const Route = createFileRoute("/inne-uslugi")({
  head: () => ({
    meta: [
      { title: "Presoterapia — Vita Space" },
      {
        name: "description",
        content:
          "Presoterapia (drenaż limfatyczny) w Vita Space. Redukcja obrzęków, cellulitu i regeneracja organizmu.",
      },
      { property: "og:title", content: "Presoterapia — Vita Space" },
      {
        property: "og:description",
        content:
          "Presoterapia (drenaż limfatyczny) w Vita Space. Redukcja obrzęków, cellulitu i regeneracja organizmu.",
      },
      { property: "og:url", content: buildCanonicalUrl("/inne-uslugi") },
      { property: "og:image", content: absoluteAssetUrl(rf) },
    ],
    links: [canonicalLink("/inne-uslugi")],
  }),
  component: InneUslugi,
});

function InneUslugi() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Presoterapia"
        title="Zabiegi, które pracują za Ciebie"
        subtitle="Uzupełnij trening o nowoczesne technologie regeneracji ciała i redukcji obrzęków."
        image={rf}
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

      {/* FALA UDERZENIOWA */}
      <Section
        eyebrow="Fala Uderzeniowa"
        title="Fala uderzeniowa – regeneracja, zdrowie i poprawa kondycji skóry"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="rounded-2xl overflow-hidden border border-border bg-card max-w-[520px] mx-auto w-full order-2 lg:order-1">
            <img
              src={rf}
              alt="Fala uderzeniowa"
              loading="lazy"
              className="w-full h-[420px] object-cover object-center"
            />
          </div>
          <div className="space-y-5 text-muted-foreground leading-relaxed order-1 lg:order-2">
            <p>
              <strong className="text-foreground">Fala uderzeniowa</strong> to nowoczesna,
              nieinwazyjna terapia wykorzystująca impulsy akustyczne do pobudzenia naturalnych
              procesów regeneracyjnych organizmu. Technologia ta od lat stosowana jest w
              fizjoterapii i rehabilitacji, a jej działanie wspiera również poprawę kondycji skóry i
              redukcję objawów zmęczenia tkanek.
            </p>
            <div>
              <p className="font-medium text-foreground mb-3">Korzyści zdrowotne:</p>
              <ul className="space-y-2">
                {[
                  "Łagodzi napięcia mięśniowe i dolegliwości bólowe",
                  "Poprawia ukrwienie oraz dotlenienie tkanek",
                  "Wspomaga regenerację mięśni i ścięgien",
                  "Przyspiesza procesy naprawcze organizmu",
                  "Wspiera metabolizm komórkowy",
                  "Pomaga zmniejszyć obrzęki i zastoje limfatyczne",
                  "Poprawia ruchomość oraz komfort funkcjonowania tkanek",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-sm">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-medium text-foreground mb-3">Korzyści estetyczne:</p>
              <ul className="space-y-2">
                {[
                  "Redukuje widoczność cellulitu",
                  "Wygładza i ujędrnia skórę",
                  "Pobudza produkcję kolagenu i elastyny",
                  "Poprawia napięcie oraz elastyczność skóry",
                  "Zwiększa ogólną jakość skóry i jej wygląd",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-sm">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>
      {/*link*/}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
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

      {/* MASAŻE - ukryte zgodnie z wymaganiami klienta */}
    </SiteLayout>
  );
}
