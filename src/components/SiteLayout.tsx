import { Link } from "@tanstack/react-router";
import { Phone, Menu, X, MapPin, Mail } from "lucide-react";
import { useState, type ReactNode } from "react";

const nav = [
  { to: "/", label: "Strona główna" },
  { to: "/trening-ems", label: "Trening EMS" },
  { to: "/trening-personalny", label: "Trening personalny" },
  { to: "/inne-uslugi", label: "Inne usługi" },
  { to: "/cennik", label: "Cennik" },
  { to: "/kontakt", label: "Kontakt" },
];

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/60">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="h-10 w-10 rounded-full border border-gold/60 flex items-center justify-center">
              <span className="font-display text-gold text-xl">V</span>
            </div>
            <div className="leading-tight">
              <div className="font-display text-xl tracking-wide">Vita <span className="gold-text">Space</span></div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">EMS · Personal Studio</div>
            </div>
          </Link>
          <nav className="hidden lg:flex items-center gap-8">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-sm text-muted-foreground hover:text-gold transition-colors"
                activeProps={{ className: "text-gold" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <a
            href="tel:+48695867080"
            className="hidden md:inline-flex items-center gap-2 rounded-full border border-gold/70 px-5 py-2.5 text-sm text-gold hover:bg-gold hover:text-primary-foreground transition-colors"
          >
            <Phone className="h-4 w-4" /> 695 867 080
          </a>
          <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="lg:hidden border-t border-border/60 bg-background">
            <div className="px-6 py-4 flex flex-col gap-3">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="text-sm py-2 text-muted-foreground hover:text-gold"
                  activeProps={{ className: "text-gold" }}
                  activeOptions={{ exact: n.to === "/" }}
                >
                  {n.label}
                </Link>
              ))}
              <a href="tel:+48695867080" className="inline-flex items-center gap-2 text-gold pt-2">
                <Phone className="h-4 w-4" /> 695 867 080
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border/60 bg-navy-deep/60 mt-24">
        <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-4">
          <div>
            <div className="font-display text-2xl">Vita <span className="gold-text">Space</span></div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Premium studio treningów EMS, personalnych oraz zabiegów modelujących sylwetkę.
            </p>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-widest text-gold mb-4">Nawigacja</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {nav.map((n) => (
                <li key={n.to}><Link to={n.to} className="hover:text-gold">{n.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-widest text-gold mb-4">Kontakt</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-gold" /> 695 867 080</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-gold" /> kontakt@vitaspace.pl</li>
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 text-gold mt-0.5" /> Studio Vita Space</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-widest text-gold mb-4">Godziny</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Pon–Pt: 08:00 – 21:00</li>
              <li>Sobota: 09:00 – 15:00</li>
              <li>Niedziela: nieczynne</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border/40">
          <div className="max-w-7xl mx-auto px-6 py-6 text-xs text-muted-foreground flex flex-col md:flex-row justify-between gap-2">
            <span>© {new Date().getFullYear()} Vita Space. Wszystkie prawa zastrzeżone.</span>
            <span>Studio EMS · Trening Personalny · Modelowanie sylwetki</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function Section({
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
}: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section className={`max-w-7xl mx-auto px-6 py-20 md:py-28 ${className}`}>
      {(eyebrow || title || subtitle) && (
        <div className="max-w-3xl mb-14">
          {eyebrow && <div className="text-xs uppercase tracking-[0.35em] text-gold mb-4">{eyebrow}</div>}
          {title && <h2 className="text-4xl md:text-5xl leading-tight">{title}</h2>}
          {subtitle && <p className="mt-5 text-muted-foreground leading-relaxed text-lg">{subtitle}</p>}
        </div>
      )}
      {children}
    </section>
  );
}

export function PageHero({ eyebrow, title, subtitle, image }: { eyebrow: string; title: string; subtitle?: string; image: string }) {
  return (
    <section className="relative min-h-[55vh] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img src={image} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/50" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32 w-full">
        <div className="text-xs uppercase tracking-[0.35em] text-gold mb-4">{eyebrow}</div>
        <h1 className="text-5xl md:text-7xl leading-[1.05] max-w-4xl">{title}</h1>
        {subtitle && <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{subtitle}</p>}
      </div>
    </section>
  );
}
