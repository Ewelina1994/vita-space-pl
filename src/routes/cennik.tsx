import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Star } from "lucide-react";
import { SiteLayout, PageHero, Section } from "@/components/SiteLayout";
import studio from "@/assets/studio.jpg";

export const Route = createFileRoute("/cennik")({
  head: () => ({
    meta: [
      { title: "Cennik — Vita Space" },
      {
        name: "description",
        content:
          "Cennik Vita Space: pakiety treningów EMS (1/8/16/24), EMS w parach, trening personalny, presoterapia i body shaping.",
      },
    ],
  }),
  component: Cennik,
});

type Pkg = {
  name: string;
  sessions: string;
  price: string;
  perSession?: string;
  featured?: boolean;
  note?: string;
};

function PackageGrid({ items }: { items: Pkg[] }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
      {items.map((p) => (
        <div
          key={p.name}
          className={`relative rounded-2xl border p-8 flex flex-col ${
            p.featured
              ? "border-gold bg-gradient-to-br from-navy to-navy-deep"
              : "border-border bg-card"
          }`}
        >
          {p.featured && (
            <div className="absolute -top-3 left-8 inline-flex items-center gap-1.5 rounded-full bg-gold px-3 py-1 text-[10px] uppercase tracking-widest text-primary-foreground">
              <Star className="h-3 w-3" /> Najpopularniejszy
            </div>
          )}
          <div className="text-xs uppercase tracking-[0.3em] text-gold">{p.sessions}</div>
          <h3 className="mt-3 text-2xl">{p.name}</h3>
          <div className="mt-6 flex items-baseline gap-2">
            <span className="font-display text-5xl gold-text">{p.price}</span>
            <span className="text-sm text-muted-foreground">zł</span>
          </div>
          {p.perSession && <div className="mt-1 text-xs text-muted-foreground">{p.perSession}</div>}
          {p.note && <div className="mt-4 text-sm text-muted-foreground">{p.note}</div>}
        </div>
      ))}
    </div>
  );
}

function PriceRow({ name, price, note }: { name: string; price: string; note?: string }) {
  return (
    <div className="flex items-baseline justify-between gap-6 py-5 border-b border-border/60 last:border-0">
      <div>
        <div className="text-base">{name}</div>
        {note && <div className="text-xs text-muted-foreground mt-1">{note}</div>}
      </div>
      <div className="font-display text-2xl gold-text whitespace-nowrap">{price} zł</div>
    </div>
  );
}

function Cennik() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Cennik"
        title="Przejrzyste pakiety, premium jakość"
        subtitle="Wybierz format i częstotliwość, która odpowiada Twoim celom. Im większy pakiet — tym niższa cena za sesję."
        image={studio}
      />

      {/* EMS INDYWIDUALNY */}
      <Section eyebrow="Trening EMS 1:1" title="EMS indywidualny">
        <PackageGrid
          items={[
            {
              name: "Sesja pojedyncza/trenign próbny",
              sessions: "1 trening",
              price: "100",
              perSession: "100 zł / sesja",
            },
            {
              name: "Pakiet Start",
              sessions: "8 treningów",
              price: "760",
              perSession: "95 zł / sesja",
            },
            {
              name: "Pakiet Progress",
              sessions: "16 treningów",
              price: "1 360",
              perSession: "85 zł / sesja",
              featured: true,
            },
            {
              name: "Pakiet Premium",
              sessions: "24 treningi",
              price: "1 800",
              perSession: "75 zł / sesja",
            },
          ]}
        />
      </Section>

      {/* EMS PARY */}
      <section className="bg-navy-deep/50 border-y border-border/60">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-3xl mb-10">
            <div className="text-xs uppercase tracking-[0.35em] text-gold mb-3">
              Trening EMS w parach
            </div>
            <h2 className="text-4xl md:text-5xl">EMS w parach</h2>
            <p className="mt-4 text-muted-foreground">
              Cena podana za osobę. Trenuj z partnerem, przyjaciółką lub członkiem rodziny.
            </p>
          </div>
          <PackageGrid
            items={[
              {
                name: "Sesja pojedyncza",
                sessions: "1 trening",
                price: "80",
                perSession: "80 zł / osoba",
              },
              {
                name: "Pakiet Start",
                sessions: "8 treningów",
                price: "600",
                perSession: "75 zł / osoba",
              },
              {
                name: "Pakiet Progress",
                sessions: "16 treningów",
                price: "1 040",
                perSession: "65 zł / osoba",
                featured: true,
              },
              {
                name: "Pakiet Premium",
                sessions: "24 treningi",
                price: "1 440",
                perSession: "60 zł / osoba",
              },
            ]}
          />
        </div>
      </section>

      {/* TRENING PERSONALNY */}
      <Section eyebrow="Trening personalny" title="Trening personalny — indywidualny i w parach">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-border bg-card p-8">
            <h3 className="text-2xl mb-2">Indywidualny 1:1 czas 1 godzina</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Pełna uwaga trenera, maksymalna intensywność.
            </p>
            <div className="mt-4">
              <PriceRow name="Sesja pojedyncza" price="120" />
              <PriceRow name="Pakiet 8 treningów" price="880" note="110 zł / sesja" />
              <PriceRow name="Pakiet 16 treningów" price="1 600" note="100 zł / sesja" />
              <PriceRow name="Pakiet 24 treningi" price="2 160" note="90 zł / sesja" />
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8">
            <h3 className="text-2xl mb-2">W parach</h3>
            <p className="text-sm text-muted-foreground mb-2">Cena za osobę.</p>
            <div className="mt-4">
              <PriceRow name="Sesja pojedyncza" price="80" note="za osobę" />
              <PriceRow name="Pakiet 8 treningów" price="600" note="75 zł / sesja / osoba" />
              <PriceRow name="Pakiet 16 treningów" price="1 040" note="65 zł / sesja / osoba" />
              <PriceRow name="Pakiet 24 treningi" price="1 440" note="60 zł / sesja / osoba" />
            </div>
          </div>
        </div>
      </Section>

      {/* PRESOTERAPIA */}
      <section className="bg-navy-deep/50 border-y border-border/60">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-3xl mb-10">
            <div className="text-xs uppercase tracking-[0.35em] text-gold mb-3">Presoterapia</div>
            <h2 className="text-4xl md:text-5xl">Presoterapia — drenaż limfatyczny</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-border bg-card p-8">
              <h3 className="text-xl mb-4">Pojedyncze zabiegi</h3>
              <PriceRow name="Zabieg 30 min" price="50" />
              <PriceRow name="Zabieg 45 min" price="65" />
              <PriceRow name="Zabieg 60 min" price="80" />
            </div>
            <div className="rounded-2xl border border-border bg-card p-8">
              <h3 className="text-xl mb-4">Pakiety</h3>

              <PriceRow name="Pakiet 5 × 30 min" price="225" note="45 zł / zabieg" />
              <PriceRow name="Pakiet 10 × 30 min" price="400" note="40 zł / zabieg" />

              <div className="my-4 border-t border-border" />

              <PriceRow name="Pakiet 5 × 45 min" price="300" note="60 zł / zabieg" />
              <PriceRow name="Pakiet 10 × 45 min" price="550" note="55 zł / zabieg" />

              <div className="my-4 border-t border-border" />

              <PriceRow name="Pakiet 5 × 60 min" price="375" note="75 zł / zabieg" />
              <PriceRow name="Pakiet 10 × 60 min" price="700" note="70 zł / zabieg" />
            </div>

            <div className="rounded-2xl border border-gold bg-gradient-to-br from-navy to-navy-deep p-8">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-gold/20 px-3 py-1 text-[10px] uppercase tracking-widest text-gold mb-3">
                <Check className="h-3 w-3" /> Pakiet łączony
              </div>

              <h3 className="text-xl mb-4">Presoterapia + EMS</h3>

              <PriceRow name="EMS + presoterapia 30 min" price="129" note="zamiast 150 zł" />
              <PriceRow name="Pakiet 8× EMS + preso" price="960" note="120 zł / sesja" />
            </div>
          </div>
        </div>
      </section>

      {/* BODY SHAPING */}
      <Section eyebrow="Body Shaping" title="Zabiegi modelujące sylwetkę">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-border bg-card p-8">
            <h3 className="text-xl mb-4">Zabiegi pojedyncze</h3>
            <PriceRow name="Body Shaping — 1 partia (30 min)" price="150" />
            <PriceRow name="Body Shaping — 2 partie (60 min)" price="250" />
            <PriceRow name="Konsultacja i analiza sylwetki" price="0" note="bezpłatnie" />
          </div>

          <div className="rounded-2xl border border-border bg-card p-8">
            <h3 className="text-xl mb-4">Pakiety</h3>
            <PriceRow name="Pakiet 6 zabiegów (1 partia)" price="840" note="140 zł / zabieg" />
            <PriceRow name="Pakiet 6 zabiegów (2 partie)" price="1 380" note="230 zł / zabieg" />
            <PriceRow name="Pakiet 10 zabiegów (2 partie)" price="2 100" note="210 zł / zabieg" />
          </div>
        </div>
      </Section>

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="rounded-3xl border border-gold/40 bg-gradient-to-br from-navy to-navy-deep p-12 text-center">
          <h2 className="text-3xl md:text-4xl">Nie wiesz, który pakiet wybrać?</h2>
          <p className="mt-4 text-muted-foreground">
            Zadzwoń — pomożemy dobrać rozwiązanie idealne pod Twój cel.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="tel:+48695867080"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-medium text-primary-foreground"
            >
              Zadzwoń 695 867 080
            </a>
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 rounded-full border border-gold/60 px-8 py-3.5 text-sm text-gold"
            >
              Napisz do nas
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
