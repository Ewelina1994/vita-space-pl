import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, AlertTriangle, Zap, Clock, Target, ShieldCheck } from "lucide-react";
import { SiteLayout, Section, PageHero } from "@/components/SiteLayout";
import heroEms from "@/assets/hero-ems.jpg";

export const Route = createFileRoute("/trening-ems")({
  head: () => ({
    meta: [
      { title: "Trening EMS — Vita Space" },
      { name: "description", content: "Trening EMS w Vita Space: elektrostymulacja mięśni, wskazania, przeciwwskazania i efekty. 25 minut = kilka godzin klasycznego treningu." },
      { property: "og:title", content: "Trening EMS — Vita Space" },
      { property: "og:description", content: "Elektrostymulacja mięśni w premium studio Vita Space." },
      { property: "og:image", content: heroEms },
    ],
  }),
  component: EmsPage,
});

function EmsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Trening EMS"
        title="Nowoczesny trening dla zabieganych"
        subtitle="EMS to technologia wspierająca pracę mięśni podczas ćwiczeń. Pozwala przeprowadzić skuteczny trening w zaledwie 25 minut pod okiem wykwalifikowanego trenera."
        image={heroEms}
        contentClassName="py-16 md:py-10"
      />

      <Section eyebrow="Co to jest EMS" title="Trening EMS — czyli co dokładnie?">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-foreground">EMS (Electrical Muscle Stimulation)</strong> to
              nowoczesna metoda treningowa, w której specjalny kombinezon z elektrodami przesyła
              bezpieczne impulsy elektryczne do Twoich mięśni. Impulsy te wywołują dodatkowe skurcze
              mięśniowe — dokładnie takie, jakie normalnie generuje mózg podczas ćwiczeń.
            </p>
            <p>
              Podczas 20-minutowej sesji aktywowanych jest{" "}
              <strong className="text-foreground">nawet 90% włókien mięśniowych</strong>{" "}
              jednocześnie — w tym mięśnie głębokie, których nie da się skutecznie pobudzić
              klasycznym treningiem. Efekt jednej sesji EMS odpowiada kilkugodzinnemu treningowi
              siłowemu.
            </p>
            <p>
              Trening prowadzony jest zawsze{" "}
              <strong className="text-foreground">
                pod okiem certyfikowanego trenera personalnego
              </strong>
              , który dobiera intensywność impulsów oraz zestaw ćwiczeń do Twojego celu — redukcji,
              wzmocnienia, ujędrnienia sylwetki czy rehabilitacji.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 content-start">
            {[
              { i: Clock, t: "25 minut", d: "Czas jednej sesji EMS" },
              { i: Zap, t: "90%", d: "Aktywowanych włókien mięśniowych" },
              { i: Target, t: "1–2×", d: "Optymalna częstotliwość w tygodniu" },
              { i: ShieldCheck, t: "1:1", d: "Zawsze z trenerem" },
            ].map((s) => (
              <div key={s.t} className="rounded-xl border border-border bg-card p-6">
                <s.i className="h-6 w-6 text-gold" />
                <div className="mt-4 font-display text-3xl gold-text">{s.t}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
                  {s.d}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <section className="bg-navy-deep/50 border-y border-border/60">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="text-xs uppercase tracking-[0.35em] text-gold mb-4">Wskazania</div>
              <h2 className="text-3xl md:text-4xl mb-6">Trening EMS jest dla Ciebie, jeśli…</h2>
              <ul className="space-y-3">
                {[
                  "Chcesz zredukować tkankę tłuszczową i wymodelować sylwetkę",
                  "Zależy Ci na wzmocnieniu mięśni głębokich i poprawie postawy",
                  "Cierpisz na bóle kręgosłupa (odcinek szyjny, piersiowy, lędźwiowy)",
                  "Chcesz zredukować cellulit i ujędrnić skórę",
                  "Masz mało czasu — 25 minut to wszystko, czego potrzebujesz",
                  "Wracasz do formy po ciąży lub długiej przerwie",
                  "Jesteś sportowcem i chcesz wesprzeć swój trening główny",
                  "Chcesz poprawić kondycję i poziom energii",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.35em] text-destructive mb-4">
                Przeciwwskazania
              </div>
              <h2 className="text-3xl md:text-4xl mb-6">Kiedy nie trenujemy EMS?</h2>
              <ul className="space-y-3">
                {[
                  "Ciąża",
                  "Rozrusznik serca lub inne wszczepione urządzenia elektroniczne",
                  "Padaczka",
                  "Poważne choroby serca i układu krążenia",
                  "Nowotwory (aktywne leczenie)",
                  "Choroby zakaźne i stany gorączkowe",
                  "Świeże urazy, otwarte rany, stany zapalne skóry",
                  "Zakrzepica i miażdżyca",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{t}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs text-muted-foreground">
                Przed pierwszym treningiem zawsze przeprowadzamy szczegółowy wywiad zdrowotny. W
                razie wątpliwości skonsultuj się z lekarzem.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Section eyebrow="Jak wygląda trening" title="Twoja sesja krok po kroku">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { n: "01", t: "Konsultacja", d: "Wywiad, cele, dobór programu i intensywności." },
            {
              n: "02",
              t: "Przygotowanie",
              d: "Zakładasz kombinezon EMS oraz specjalną, nawilżoną odzież.",
            },
            {
              n: "03",
              t: "Trening 25 min",
              d: "Proste ćwiczenia z trenerem — squaty, wykroki, plank.",
            },
            {
              n: "04",
              t: "Regeneracja",
              d: "Prysznic, opcjonalna presoterapia i plan na kolejny trening.",
            },
          ].map((s) => (
            <div key={s.n} className="rounded-xl border border-border bg-card p-8">
              <div className="font-display text-4xl gold-text">{s.n}</div>
              <h3 className="mt-4 text-xl">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-14 text-center">
          <Link
            to="/cennik"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            Zobacz pakiety EMS
          </Link>
        </div>
      </Section>
    </SiteLayout>
  );
}
