import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Zap, Users, Sparkles, Heart, CheckCircle2, Phone } from "lucide-react";
import { SiteLayout, Section } from "@/components/SiteLayout";
import heroEms from "@/assets/hero-ems.jpg";
import studio from "@/assets/studio.jpg";
import presoImg from "@/assets/presoterapia.jpg";
import bodyImg from "@/assets/body-shaping.jpg";
import personalImg from "@/assets/personal.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vita Space — Premium Studio EMS & Trening Personalny" },
      { name: "description", content: "Vita Space to premium studio EMS, treningów personalnych, presoterapii i modelowania sylwetki. Efekty w krótszym czasie." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroEms} alt="Trening EMS w Vita Space" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-24 w-full">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-gold" />
              <span className="text-xs uppercase tracking-[0.35em] text-gold">Premium EMS Studio</span>
            </div>
            <h1 className="text-5xl md:text-7xl leading-[1.02]">
              Twoja sylwetka.<br />
              <span className="gold-text">Nasza precyzja.</span>
            </h1>
            <p className="mt-8 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Vita Space to kameralne studio treningów EMS, treningów personalnych oraz zabiegów modelujących.
              20 minut treningu EMS = kilka godzin klasycznego siłowego. Efekty, których szukasz — w oprawie, na jaką zasługujesz.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/kontakt" className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition">
                Umów pierwszy trening
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
              </Link>
              <Link to="/cennik" className="inline-flex items-center gap-2 rounded-full border border-gold/60 px-7 py-3.5 text-sm text-gold hover:bg-gold/10 transition">
                Zobacz cennik
              </Link>
            </div>
            <div className="mt-14 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { n: "20", l: "minut treningu" },
                { n: "90%", l: "mięśni w pracy" },
                { n: "1:1", l: "z trenerem" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-4xl gold-text">{s.n}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* USŁUGI */}
      <Section eyebrow="Nasze usługi" title="Kompletna oferta studia Vita Space" subtitle="Łączymy nowoczesne technologie z indywidualnym podejściem. Każda usługa dostosowana do Twoich celów i możliwości.">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { img: heroEms, title: "Trening EMS", desc: "Elektrostymulacja mięśni — 20 minut treningu z efektem kilkugodzinnego siłowego.", to: "/trening-ems" },
            { img: personalImg, title: "Trening personalny", desc: "Indywidualne treningi 1:1 lub w parach z certyfikowanym trenerem.", to: "/trening-personalny" },
            { img: presoImg, title: "Presoterapia", desc: "Drenaż limfatyczny — redukcja obrzęków, cellulitu i regeneracja po wysiłku.", to: "/inne-uslugi" },
            { img: bodyImg, title: "Body Shaping", desc: "Zabiegi modelujące sylwetkę — redukcja tkanki tłuszczowej i ujędrnianie skóry.", to: "/inne-uslugi" },
          ].map((s) => (
            <Link key={s.title} to={s.to} className="group relative overflow-hidden rounded-2xl border border-border bg-card">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={s.img} alt={s.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl md:text-3xl">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground max-w-md">{s.desc}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-gold text-sm">
                  Dowiedz się więcej <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* DLACZEGO MY */}
      <section className="bg-navy-deep/50 border-y border-border/60">
        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
            <img src={studio} alt="Wnętrze studia Vita Space" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-gold mb-4">Dlaczego Vita Space</div>
            <h2 className="text-4xl md:text-5xl leading-tight">Studio, które <span className="gold-text">rozumie Twoje ciało</span></h2>
            <div className="mt-8 space-y-5">
              {[
                { i: Zap, t: "Nowoczesne technologie", d: "Sprzęt EMS najwyższej klasy oraz certyfikowane urządzenia do presoterapii i body shapingu." },
                { i: Users, t: "Kameralna atmosfera", d: "Trenujesz sam lub w parze — bez tłumów, bez pośpiechu, w pełnej dyskrecji." },
                { i: Sparkles, t: "Efekt widoczny w kilka tygodni", d: "Program dostosowany do celu — redukcja, wzmocnienie, modelowanie, rehabilitacja." },
                { i: Heart, t: "Opieka trenera na każdym kroku", d: "Konsultacja, plan, prowadzenie treningu i mierzalne postępy." },
              ].map((f) => (
                <div key={f.t} className="flex gap-4">
                  <div className="h-11 w-11 rounded-full border border-gold/50 flex items-center justify-center shrink-0">
                    <f.i className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <div className="font-medium">{f.t}</div>
                    <div className="text-sm text-muted-foreground mt-1">{f.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EFEKTY */}
      <Section eyebrow="Efekty" title="Co zyskujesz trenując z nami">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Wyraźna redukcja tkanki tłuszczowej",
            "Wzmocnienie mięśni głębokich",
            "Ujędrnienie skóry i sylwetki",
            "Poprawa postawy i redukcja bólu pleców",
            "Redukcja cellulitu i obrzęków",
            "Wzrost energii i lepsze samopoczucie",
          ].map((b) => (
            <div key={b} className="rounded-xl border border-border bg-card/60 p-6 flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
              <span className="text-sm">{b}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-gold/40 bg-gradient-to-br from-navy to-navy-deep p-12 md:p-20 text-center">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,var(--color-gold),transparent_60%)]" />
          <div className="relative">
            <div className="text-xs uppercase tracking-[0.35em] text-gold mb-4">Zapraszamy</div>
            <h2 className="text-4xl md:text-6xl leading-tight max-w-3xl mx-auto">Umów pierwszy trening w <span className="gold-text">Vita Space</span></h2>
            <p className="mt-6 text-muted-foreground max-w-xl mx-auto">Zadzwoń lub napisz do nas — pomożemy dobrać idealny pakiet.</p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a href="tel:+48695867080" className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-medium text-primary-foreground hover:opacity-90">
                <Phone className="h-4 w-4" /> 695 867 080
              </a>
              <Link to="/kontakt" className="inline-flex items-center gap-2 rounded-full border border-gold/60 px-8 py-4 text-sm text-gold hover:bg-gold/10">
                Formularz kontaktowy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
