import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, AlertTriangle } from "lucide-react";
import { SiteLayout, Section, PageHero } from "@/components/SiteLayout";
import presoImg from "@/assets/presoterapia.png";
import body_shapin from "@/assets/body_shaping.png";
import rf from "@/assets/rf.png";
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
        eyebrow="Presoterapia & Body Shaping"
        title="Zabiegi, które pracują za Ciebie"
        subtitle="Uzupełnij trening o nowoczesne technologie modelowania sylwetki i regeneracji ciała."
        image={rf}
      />

      {/* MASAŻE */}
      <Section eyebrow="Masaże" title="Masaż klasyczny">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-foreground">Masaż klasyczny</strong> pomaga rozluźnić napięte
              mięśnie, poprawić krążenie i wprowadzić uczucie głębokiego relaksu. To doskonały wybór
              na regenerację po stresie i codziennym wysiłku.
            </p>
            <div className="rounded-2xl border border-border bg-card p-5">
              <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Cennik</div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center justify-between gap-4 border-b border-border/60 pb-2">
                  <span>Pół godziny</span>
                  <span className="font-medium text-foreground">60 zł</span>
                </li>
                <li className="flex items-center justify-between gap-4">
                  <span>Godzina</span>
                  <span className="font-medium text-foreground">90 zł</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <img
              src={presoImg}
              alt="Masaż klasyczny"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Section>

      <Section eyebrow="Masaże" title="Masaż tkanek głębokich">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-foreground">Masaż tkanek głębokich</strong> skupia się na
              głębszych warstwach mięśni i napięciach, wspierając regenerację, redukcję bólu oraz
              poprawę mobilności. Działa szczególnie dobrze przy przeciążeniach, sztywności i
              przewlekłym napięciu.
            </p>
            <div className="rounded-2xl border border-border bg-card p-5">
              <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Cennik</div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center justify-between gap-4 border-b border-border/60 pb-2">
                  <span>Pół godziny</span>
                  <span className="font-medium text-foreground">60 zł</span>
                </li>
                <li className="flex items-center justify-between gap-4">
                  <span>Godzina</span>
                  <span className="font-medium text-foreground">90 zł</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <img
              src={rf}
              alt="Masaż tkanek głębokich"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Section>

      {/* MASAŻE */}
      <Section eyebrow="Masaże" title="Masaż klasyczny i sportowy">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="rounded-2xl overflow-hidden">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-gold/20 via-navy to-navy-deep flex items-center justify-center text-gold text-2xl font-display tracking-[0.25em]">
              Masaż
            </div>
          </div>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-foreground">Masaż klasyczny</strong> pomaga rozluźnić mięśnie,
              zmniejszyć napięcie i poprawić samopoczucie. To doskonały wybór na regenerację po
              codziennym wysiłku oraz jako forma relaksu i odprężenia.
            </p>
            <p>
              <strong className="text-foreground">Masaż sportowy</strong> jest przeznaczony dla osób
              aktywnych fizycznie. Skupia się na głębszym rozluźnieniu mięśni, wspomaga regenerację,
              redukuje zmęczenie i szybsze powroty do treningu po obciążeniu.
            </p>
            <p className="font-medium text-foreground">Dostępne ceny:</p>
            <ul className="space-y-2">
              {[
                "Masaż klasyczny — 60 zł / 30 min",
                "Masaż klasyczny — 90 zł / 60 min",
                "Masaż sportowy — 60 zł / 30 min",
                "Masaż sportowy — 90 zł / 60 min",
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
              src={body_shapin}
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

      {/* ENDERMOLOGIA LPG */}
      <Section
        eyebrow="Endermologia LPG"
        title="Endermologia LPG — lifting, modelowanie i poprawa napięcia skóry"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="rounded-2xl overflow-hidden">
            <img
              src={rf}
              alt="Endermologia LPG"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-foreground">Endermologia LPG</strong> to nowoczesna,
              nieinwazyjna technologia stymulująca pracę skóry, tkanki tłuszczowej i mięśni dzięki
              precyzyjnym, automatycznym ruchom głowicy. Zabieg działa na poprawę napięcia skóry,
              redukcję cellulitu i modelowanie sylwetki bez bólu i bez rekonwalescencji.
            </p>
            <p className="font-medium text-foreground">Najczęściej poprawia:</p>
            <ul className="space-y-2">
              {[
                "Napięcie i jędrność skóry",
                "Widoczność cellulitu i nierówności skóry",
                "Kontury sylwetki i miękkość tkanek",
                "Krążenie i metabolizm komórkowy",
                "Regenerację po wysiłku i zmęczeniu mięśni",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-sm">{t}</span>
                </li>
              ))}
            </ul>
            <p>
              Zabiegi LPG są świetnym uzupełnieniem treningów, diety i innych zabiegów modelujących.
              Dają efekt liftingu, wygładzenia i poprawy ogólnej kondycji skóry na całym ciele.
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
              src={rf}
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

      {/* FALA UDERZENIOWA */}
      <Section
        eyebrow="Fala Uderzeniowa"
        title="Fala uderzeniowa – regeneracja, zdrowie i piękna sylwetka"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-foreground">Fala uderzeniowa</strong> to nowoczesna,
              nieinwazyjna terapia wykorzystująca impulsy akustyczne do pobudzenia naturalnych
              procesów regeneracyjnych organizmu. Technologia ta od lat stosowana jest w
              fizjoterapii i rehabilitacji, a obecnie z powodzeniem wykorzystywana jest również w
              zabiegach modelowania sylwetki i poprawy jakości skóry.
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
                  "Wspomaga modelowanie sylwetki",
                  "Poprawia kontury ciała i wygląd problematycznych partii",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-sm">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-4 border-t border-border/60">
              <p className="text-sm italic">
                Regularne zabiegi falą uderzeniową pomagają odzyskać uczucie lekkości, poprawić
                kondycję tkanek, a jednocześnie zadbać o bardziej jędrną, gładką i estetycznie
                wyglądającą skórę. To doskonałe połączenie korzyści zdrowotnych i estetycznych,
                wspierające zarówno dobre samopoczucie, jak i atrakcyjny wygląd sylwetki.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-navy to-navy-deep rounded-2xl border border-gold/30 p-8">
            <h3 className="text-2xl font-semibold mb-4">Co daje zabieg?</h3>
            <div className="space-y-4 text-sm text-muted-foreground">
              <div>
                <p className="font-medium text-foreground mb-2">Regeneracja i zdrowie:</p>
                <p>
                  Naturalnie wspomaga gojenie się tkanek, wspiera leczenie chronicznych dolegliwości
                  i przywraca organizm do równowagi.
                </p>
              </div>
              <div>
                <p className="font-medium text-foreground mb-2">Piękna sylwetka:</p>
                <p>
                  Zmniejsza widoczność niedoskonałości, modeluje kontury i poprawia wygląd skóry na
                  całym ciele.
                </p>
              </div>
              <div>
                <p className="font-medium text-foreground mb-2">Kompleksowe efekty:</p>
                <p>
                  Łączy korzyści fizjoterapeutyczne z zabiegami estetycznymi, dając widoczne
                  rezultaty zarówno dla zdrowia, jak i wyglądu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

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
