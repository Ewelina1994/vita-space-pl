import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, AlertTriangle } from "lucide-react";
import { SiteLayout, Section, PageHero } from "@/components/SiteLayout";
import presoImg from "@/assets/presoterapia.jpg";
import bodyImg from "@/assets/body-shaping.jpg";

export const Route = createFileRoute("/inne-uslugi")({
  head: () => ({
    meta: [
      { title: "Presoterapia i Body Shaping — Vita Space" },
      { name: "description", content: "Presoterapia (drenaż limfatyczny) i zabiegi body shaping w Vita Space. Redukcja obrzęków, cellulitu i modelowanie sylwetki." },
      { property: "og:image", content: bodyImg },
    ],
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
        image={bodyImg}
      />

      {/* PRESOTERAPIA */}
      <Section eyebrow="Presoterapia" title="Drenaż limfatyczny — odciążenie ciała">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="rounded-2xl overflow-hidden">
            <img src={presoImg} alt="Presoterapia" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-foreground">Presoterapia</strong> to nowoczesny zabieg drenażu limfatycznego wykonywany przy pomocy
              specjalnego kombinezonu uciskowego. Sekwencyjny, dopasowany ucisk działa jak profesjonalny masaż limfatyczny —
              pobudza krążenie, przyspiesza usuwanie toksyn i redukuje zastoje limfy.
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
              <div className="text-xs uppercase tracking-[0.3em] text-destructive mb-2">Przeciwwskazania</div>
              <ul className="space-y-2">
                {["Zakrzepica i choroby żył", "Nowotwory w trakcie leczenia", "Ciąża", "Niewydolność serca i nerek", "Stany zapalne skóry i infekcje"].map((t) => (
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
      <section className="bg-navy-deep/50 border-y border-border/60">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="text-xs uppercase tracking-[0.35em] text-gold mb-4">Body Shaping</div>
          <h2 className="text-4xl md:text-5xl leading-tight mb-12 max-w-3xl">Modelowanie sylwetki — precyzja w każdym zabiegu</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-5 text-muted-foreground leading-relaxed order-2 lg:order-1">
              <p>
                <strong className="text-foreground">Body Shaping</strong> to zestaw nowoczesnych zabiegów modelujących sylwetkę,
                łączących technologie takie jak fale radiowe (RF), kawitacja ultradźwiękowa i lipoliza.
                Zabiegi działają na tkankę tłuszczową, ujędrniają skórę i wygładzają cellulit — nieinwazyjnie, bez bólu i bez rekonwalescencji.
              </p>
              <p>
                Idealne uzupełnienie treningu EMS lub personalnego — dają widoczny efekt modelujący nawet w miejscach
                trudnych do „wytrenowania" (uda, brzuch, biodra, ramiona).
              </p>
              <p className="font-medium text-foreground">Rezultaty:</p>
              <ul className="space-y-2">
                {[
                  "Redukcja lokalnej tkanki tłuszczowej",
                  "Widoczne modelowanie ud, brzucha, bioder i ramion",
                  "Ujędrnienie i napięcie skóry",
                  "Wygładzenie cellulitu",
                  "Zmniejszenie obwodów już po serii zabiegów",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-sm">{t}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <div className="text-xs uppercase tracking-[0.3em] text-destructive mb-2">Przeciwwskazania</div>
                <ul className="space-y-2">
                  {["Ciąża i karmienie piersią", "Rozrusznik serca / implanty metalowe", "Choroby nowotworowe", "Padaczka", "Poważne choroby serca, wątroby lub nerek", "Świeże zabiegi chirurgiczne w okolicy zabiegu"].map((t) => (
                    <li key={t} className="flex items-start gap-3">
                      <AlertTriangle className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
                      <span className="text-sm">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden order-1 lg:order-2">
              <img src={bodyImg} alt="Body shaping" loading="lazy" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="mt-14">
            <Link to="/cennik" className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-medium text-primary-foreground hover:opacity-90">
              Zobacz cennik zabiegów
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
