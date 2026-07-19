import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import studio from "@/assets/studio.jpg";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — Vita Space" },
      { name: "description", content: "Skontaktuj się z Vita Space. Telefon: 695 867 080. Formularz kontaktowy, mapa i dane studia EMS." },
    ],
  }),
  component: Kontakt,
});

function Kontakt() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Kontakt"
        title="Porozmawiajmy o Twoich celach"
        subtitle="Napisz do nas, zadzwoń lub odwiedź nasze studio. Jesteśmy do Twojej dyspozycji."
        image={studio}
      />

      {/* Call to phone */}
      <section className="max-w-7xl mx-auto px-6 -mt-4 md:-mt-8">
        <a
          href="tel:+48695867080"
          className="group flex items-center justify-between gap-6 rounded-2xl border border-gold/50 bg-gradient-to-r from-navy to-navy-deep p-6 md:p-8 hover:border-gold transition"
        >
          <div className="flex items-center gap-5">
            <div className="h-14 w-14 rounded-full bg-gold/20 flex items-center justify-center border border-gold/50">
              <Phone className="h-6 w-6 text-gold" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-gold">Zadzwoń teraz</div>
              <div className="font-display text-3xl md:text-4xl mt-1">695 867 080</div>
            </div>
          </div>
          <div className="hidden md:block text-sm text-muted-foreground group-hover:text-gold transition">Umów wizytę →</div>
        </a>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20 grid lg:grid-cols-2 gap-10">
        {/* Formularz */}
        <div className="rounded-2xl border border-border bg-card p-8 md:p-10">
          <h2 className="text-3xl mb-2">Formularz kontaktowy</h2>
          <p className="text-sm text-muted-foreground mb-8">Odpowiadamy zwykle w ciągu kilku godzin.</p>

          <form onSubmit={onSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <Field label="Imię i nazwisko" name="name" required />
              <Field label="Telefon" name="phone" type="tel" required />
            </div>
            <Field label="E-mail" name="email" type="email" required />
            <div>
              <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Interesuje mnie</label>
              <select
                name="topic"
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:border-gold"
              >
                <option>Trening EMS</option>
                <option>Trening personalny</option>
                <option>Trening w parach</option>
                <option>Presoterapia</option>
                <option>Body Shaping</option>
                <option>Inne / konsultacja</option>
              </select>
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Wiadomość</label>
              <textarea
                name="message"
                rows={5}
                required
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:border-gold resize-none"
                placeholder="Opowiedz nam o swoich celach…"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
            >
              <Send className="h-4 w-4" /> Wyślij wiadomość
            </button>
            {sent && (
              <div className="rounded-lg border border-gold/40 bg-gold/10 px-4 py-3 text-sm text-gold">
                Dziękujemy! Skontaktujemy się z Tobą jak najszybciej.
              </div>
            )}
          </form>
        </div>

        {/* Dane kontaktowe */}
        <div className="space-y-6">
          <ContactCard icon={Phone} title="Telefon" value="695 867 080" href="tel:+48695867080" />
          <ContactCard icon={Mail} title="E-mail" value="kontakt@vitaspace.pl" href="mailto:kontakt@vitaspace.pl" />
          <ContactCard icon={MapPin} title="Adres" value="Studio Vita Space" note="Umów wizytę, aby otrzymać dokładny adres." />
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="h-5 w-5 text-gold" />
              <h3 className="text-lg">Godziny otwarcia</h3>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between border-b border-border/50 pb-2"><span className="text-muted-foreground">Poniedziałek – Piątek</span><span>08:00 – 21:00</span></div>
              <div className="flex justify-between border-b border-border/50 pb-2"><span className="text-muted-foreground">Sobota</span><span>09:00 – 15:00</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Niedziela</span><span className="text-muted-foreground">nieczynne</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="text-xs uppercase tracking-[0.35em] text-gold mb-4">Lokalizacja</div>
        <h2 className="text-3xl md:text-4xl mb-8">Znajdź nas na mapie</h2>
        <div className="rounded-2xl overflow-hidden border border-border h-[450px]">
          <iframe
            title="Mapa Vita Space"
            src="https://www.google.com/maps?q=Warszawa&output=embed"
            className="w-full h-full grayscale contrast-125 opacity-90"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:border-gold"
      />
    </div>
  );
}

function ContactCard({ icon: Icon, title, value, href, note }: { icon: typeof Phone; title: string; value: string; href?: string; note?: string }) {
  const content = (
    <div className="rounded-2xl border border-border bg-card p-6 flex items-start gap-4 hover:border-gold/60 transition">
      <div className="h-12 w-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0">
        <Icon className="h-5 w-5 text-gold" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-widest text-muted-foreground">{title}</div>
        <div className="mt-1 font-display text-2xl">{value}</div>
        {note && <div className="mt-1 text-xs text-muted-foreground">{note}</div>}
      </div>
    </div>
  );
  return href ? <a href={href}>{content}</a> : content;
}
