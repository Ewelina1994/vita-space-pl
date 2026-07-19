import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, User, Users } from "lucide-react";
import { SiteLayout, Section, PageHero } from "@/components/SiteLayout";
import personalImg from "@/assets/personal.jpg";

export const Route = createFileRoute("/trening-personalny")({
  head: () => ({
    meta: [
      { title: "Trening personalny — Vita Space" },
      { name: "description", content: "Trening personalny indywidualny lub w parach w studio Vita Space. Indywidualny plan, opieka trenera, mierzalne efekty." },
      { property: "og:image", content: personalImg },
    ],
  }),
  component: PersonalPage,
});

function PersonalPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Trening personalny"
        title="Trening skrojony na miarę Twoich celów"
        subtitle="Indywidualnie 1:1 lub w parze z bliską osobą. Zawsze pod okiem doświadczonego trenera personalnego."
        image={personalImg}
      />

      <Section title="Twój cel — nasza metoda">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              W Vita Space trening personalny to znacznie więcej niż wspólne ćwiczenia. To <strong className="text-foreground">indywidualny
              plan treningowy</strong> ułożony pod Twój cel — redukcja tkanki tłuszczowej, budowa masy mięśniowej, poprawa kondycji,
              rehabilitacja po urazie czy powrót do formy po ciąży.
            </p>
            <p>
              Trener prowadzi Cię przez każde powtórzenie — dba o technikę, dobiera intensywność i motywuje do przekraczania granic.
              Wszystko odbywa się w <strong className="text-foreground">kameralnej, dyskretnej atmosferze</strong> naszego studia.
            </p>
            <p>
              Wybierz format, który pasuje do Ciebie: <strong className="text-foreground">1:1</strong> dla pełnej uwagi trenera,
              lub <strong className="text-foreground">w parach</strong> — z partnerem, przyjaciółką czy członkiem rodziny.
            </p>
          </div>
          <div className="grid gap-5">
            <div className="rounded-xl border border-border bg-card p-8">
              <User className="h-7 w-7 text-gold" />
              <h3 className="mt-4 text-2xl">Trening indywidualny 1:1</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Pełna uwaga trenera, maksymalna intensywność i najszybsze efekty.
                Idealny dla osób, które oczekują pełnej dyskrecji i najwyższej jakości.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-8">
              <Users className="h-7 w-7 text-gold" />
              <h3 className="mt-4 text-2xl">Trening w parach</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Trenuj z bliską osobą — wspólna motywacja, świetna zabawa i niższy koszt na osobę.
                Trener układa plan dostosowany do możliwości obojga.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <section className="bg-navy-deep/50 border-y border-border/60">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl md:text-4xl mb-10 max-w-2xl">Co obejmuje trening personalny w Vita Space</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Konsultacja i wywiad zdrowotny",
              "Ocena składu ciała i analiza postawy",
              "Indywidualny plan treningowy",
              "Wskazówki dotyczące odżywiania",
              "Pełna opieka trenera podczas sesji",
              "Regularna weryfikacja efektów",
            ].map((b) => (
              <div key={b} className="rounded-xl border border-border bg-card/60 p-6 flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <span className="text-sm">{b}</span>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link to="/cennik" className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-medium text-primary-foreground hover:opacity-90">
              Zobacz cennik treningów
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
