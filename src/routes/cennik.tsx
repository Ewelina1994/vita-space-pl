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
        title="Skuteczny trening w rozsądnej cenie"
        subtitle="Wybierz format i częstotliwość, która odpowiada Twoim celom. Im większy pakiet — tym niższa cena za sesję."
        image={studio}
        contentClassName="py-16 md:py-10"
      />

      {/* EMS INDYWIDUALNY */}
      <Section eyebrow="Trening EMS 1:1" title="EMS indywidualny">
        <PackageGrid
          items={[
            {
              name: "Trening próbny",
              sessions: "1 trening",
              price: "89",
              perSession: "89 zł / sesja",
            },
            {
              name: "Pakiet Mini",
              sessions: "6 treningów",
              price: "600",
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
              price: "1 440",
              perSession: "90 zł / sesja",
              featured: true,
            },
            {
              name: "Pakiet Regular",
              sessions: "24 treningi",
              price: "2 040",
              perSession: "85 zł / sesja",
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
                price: "75",
                perSession: "75 zł / osoba",
              },
              {
                name: "Pakiet Mini",
                sessions: "6 treningów",
                price: "540",
                perSession: "90 zł / osoba",
              },
              {
                name: "Pakiet Start",
                sessions: "8 treningów",
                price: "680",
                perSession: "85 zł / osoba",
              },
              {
                name: "Pakiet Progress",
                sessions: "16 treningów",
                price: "1 280",
                perSession: "80 zł / osoba",
                featured: true,
              },
              {
                name: "Pakiet Regular",
                sessions: "24 treningi",
                price: "1 800",
                perSession: "75 zł / osoba",
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
              <PriceRow name="Sesja pojedyncza" price="100" />
              <PriceRow name="Pakiet 8 treningów" price="720" note="90 zł / sesja" />
              <PriceRow name="Pakiet 16 treningów" price="1 280" note="80 zł / sesja" />
              <PriceRow name="Pakiet 24 treningi" price="1 680" note="70 zł / sesja" />
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8">
            <h3 className="text-2xl mb-2">W parach</h3>
            <p className="text-sm text-muted-foreground mb-2">Cena za osobę.</p>
            <div className="mt-4">
              <PriceRow name="Sesja pojedyncza" price="70" note="za osobę" />
              <PriceRow name="Pakiet 8 treningów" price="520" note="65 zł / sesja / osoba" />
              <PriceRow name="Pakiet 16 treningów" price="880" note="55 zł / sesja / osoba" />
              <PriceRow name="Pakiet 24 treningi" price="1 200" note="50 zł / sesja / osoba" />
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
            <h3 className="text-xl mb-4">Body Shaping</h3>
            <PriceRow name="1 zabieg" price="80" note="czas zabiegu: 30 min" />
            <PriceRow name="5 zabiegów" price="350" />
            <PriceRow name="10 zabiegów" price="650" />
          </div>

          <div className="rounded-2xl border border-border bg-card p-8">
            <h3 className="text-xl mb-4">Lipolaser</h3>
            <PriceRow name="1 zabieg" price="60" note="czas zabiegu: 35 min" />
            <PriceRow name="5 zabiegów" price="250" />
            <PriceRow name="10 zabiegów" price="450" />
          </div>

          <div className="rounded-2xl border border-border bg-card p-8">
            <h3 className="text-xl mb-4">RF — Fale radiowe</h3>
            <PriceRow
              name="1 zabieg"
              price="100"
              note="czas trwania: 1 partia 15–30 min, możliwość łączenia partii; zabieg 45 min"
            />
            <PriceRow name="5 zabiegów" price="400" />
            <PriceRow name="10 zabiegów" price="700" />
          </div>

          <div className="rounded-2xl border border-border bg-card p-8">
            <h3 className="text-xl mb-4">Liposukcja kawitacyjna</h3>
            <PriceRow name="1 zabieg" price="120" note="czas zabiegu: 30 min" />
            <PriceRow name="5 zabiegów" price="500" />
            <PriceRow name="10 zabiegów" price="900" />
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
