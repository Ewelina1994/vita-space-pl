import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Section } from "@/components/SiteLayout";
import { buildCanonicalUrl, canonicalLink } from "@/lib/seo";

export const Route = createFileRoute("/polityka-prywatnosci")({
  head: () => ({
    meta: [
      { title: "Polityka Prywatności — Vita Space" },
      {
        name: "description",
        content:
          "Polityka prywatności studia EMS Vita Space. Informacje o przetwarzaniu danych osobowych.",
      },
      { property: "og:title", content: "Polityka Prywatności — Vita Space" },
      {
        property: "og:description",
        content:
          "Polityka prywatności studia EMS Vita Space. Informacje o przetwarzaniu danych osobowych.",
      },
      { property: "og:url", content: buildCanonicalUrl("/polityka-prywatnosci") },
    ],
    links: [canonicalLink("/polityka-prywatnosci")],
  }),
  component: PolitykaPrywatnosci,
});

function PolitykaPrywatnosci() {
  return (
    <SiteLayout>
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.35em] text-gold mb-4">
            Ochrona Twoich danych
          </div>
          <h1 className="text-5xl md:text-6xl leading-tight mb-6">
            Polityka Prywatności
          </h1>
          <p className="text-muted-foreground text-lg mb-12">
            Ostatnia aktualizacja: {new Date().toLocaleDateString("pl-PL")}
          </p>

          <div className="space-y-12 prose prose-invert max-w-none">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Wstęp</h2>
              <p className="text-muted-foreground leading-relaxed">
                Vita Space (zwane dalej "Studiom" lub "my") z pełną odpowiedzialnością
                podchodzi do ochrony Twoich danych osobowych. Ta Polityka Prywatności
                wyjaśnia, jakie dane zbieramy, w jaki sposób je przetwarzamy i jak je
                chronimy.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Studio działa zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady
                (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób
                fizycznych w związku z przetwarzaniem danych osobowych (RODO).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Administrator Danych</h2>
              <p className="text-muted-foreground leading-relaxed">
                Administratorem Twoich danych osobowych jest:
              </p>
              <div className="bg-navy-deep/50 border border-gold/20 rounded-lg p-6 mt-4 text-sm space-y-2">
                <p className="text-foreground font-medium">Vita Space</p>
                <p className="text-muted-foreground">Wieruszów, ul. Wrocławska 12/1</p>
                <p className="text-muted-foreground">Telefon: 695 867 080</p>
                <p className="text-muted-foreground">E-mail: vitaspace.kontakt@gmail.com</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                3. Jakie Dane Zbieramy?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                W zależności od tego, jak używasz naszych usług, możemy zbierać
                następujące dane:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-gold shrink-0">•</span>
                  <span>
                    <strong>Dane z formularza kontaktowego:</strong> imię, nazwisko,
                    numer telefonu, adres e-mail, temat zapytania i treść wiadomości
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold shrink-0">•</span>
                  <span>
                    <strong>Dane z procesu rezerwacji:</strong> imię, nazwisko, adres
                    e-mail, numer telefonu, data i godzina zarezerwowanego treningu
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold shrink-0">•</span>
                  <span>
                    <strong>Dane zdrowotne:</strong> informacje o stanie zdrowia,
                    celach treningowych, poprzednich urazach (zbierane w trakcie
                    konsultacji)
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold shrink-0">•</span>
                  <span>
                    <strong>Dane techniczne:</strong> adres IP, informacje o
                    przeglądarce, pliki cookies
                  </span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                4. Cel Przetwarzania Danych
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Przetwarzamy Twoje dane dla następujących celów:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-gold shrink-0">•</span>
                  <span>
                    Realizacja umowy na świadczenie usług treningowych i wellness
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold shrink-0">•</span>
                  <span>Odpowiadanie na zapytania i wiadomości z formularza kontaktowego</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold shrink-0">•</span>
                  <span>
                    Obsługa rezerwacji i umówienia się na treningi oraz zabiegi
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold shrink-0">•</span>
                  <span>
                    Wysyłanie informacji o promocjach i aktualności (za zgodą)
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold shrink-0">•</span>
                  <span>Spełnienie obowiązków prawnych i podatkowych</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold shrink-0">•</span>
                  <span>Analiza ruchu na stronie internetowej w celu jej usprawnienia</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Podstawa Prawna</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Przetwarzanie Twoich danych jest uzasadnione:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-gold shrink-0">•</span>
                  <span>
                    Zawarciu i realizacji umowy o świadczenie usług (Art. 6 ust. 1 lit.
                    b RODO)
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold shrink-0">•</span>
                  <span>
                    Wypełnieniu obowiązków prawnych ciążących na nas (Art. 6 ust. 1
                    lit. c RODO)
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold shrink-0">•</span>
                  <span>
                    Twojej wyraźnej zgodzie, jeśli chodzi o marketing i biuletyn
                    (Art. 6 ust. 1 lit. a RODO)
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold shrink-0">•</span>
                  <span>
                    Naszym uzasadnionym interesie, jakim jest prowadzenie biznesu
                    (Art. 6 ust. 1 lit. f RODO)
                  </span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Udostępnianie Danych</h2>
              <p className="text-muted-foreground leading-relaxed">
                Twoje dane osobowe mogą być udostępniane:
              </p>
              <ul className="space-y-3 text-muted-foreground mt-4">
                <li className="flex gap-3">
                  <span className="text-gold shrink-0">•</span>
                  <span>
                    Pracownikom Studia — tylko tym, którzy mają dostęp do danych w
                    ramach swoich obowiązków
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold shrink-0">•</span>
                  <span>
                    Dostawcom usług (hosting, wysyłka e-maili, systemy rezerwacji) —
                    na zasadzie umowy o przetwarzaniu danych
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold shrink-0">•</span>
                  <span>
                    Organom rządowym — jeśli jest to wymagane przez prawo
                  </span>
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Nie sprzedajemy Twoich danych osobowych żadnym trzecim stronom.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Prawa Użytkownika</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Zgodnie z RODO masz prawo do:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-gold shrink-0">•</span>
                  <span>
                    <strong>Dostępu do danych:</strong> możesz zażądać kopii swoich
                    danych osobowych
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold shrink-0">•</span>
                  <span>
                    <strong>Sprostowania:</strong> możesz poprosić o korektę
                    nieprawidłowych danych
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold shrink-0">•</span>
                  <span>
                    <strong>Usunięcia:</strong> możesz zażądać usunięcia swoich
                    danych, chyba że jesteśmy zobowiązani je przechowywać
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold shrink-0">•</span>
                  <span>
                    <strong>Ograniczenia przetwarzania:</strong> możesz poprosić o
                    ograniczenie sposobu korzystania z Twoich danych
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold shrink-0">•</span>
                  <span>
                    <strong>Przenoszenia danych:</strong> możesz zażądać przeniesienia
                    swoich danych w strukturalnym, powszechnie używanym formacie
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold shrink-0">•</span>
                  <span>
                    <strong>Wycofania zgody:</strong> jeśli wyrażiłeś zgodę, możesz
                    ją wycofać w dowolnym momencie
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold shrink-0">•</span>
                  <span>
                    <strong>Wniesienia sprzeciwu:</strong> możesz wnieść sprzeciw
                    wobec przetwarzania Twoich danych
                  </span>
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Aby skorzystać z tych praw, skontaktuj się z nami na adres:
                <a href="mailto:vitaspace.kontakt@gmail.com" className="text-gold hover:text-gold/80">
                  {" "}
                  vitaspace.kontakt@gmail.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Bezpieczeństwo Danych</h2>
              <p className="text-muted-foreground leading-relaxed">
                Stosujemy szereg środków technicznych i organizacyjnych, aby chronić
                Twoje dane przed nieautoryzowanym dostępem, zmianą, ujawnieniem lub
                zniszczeniem, w tym:
              </p>
              <ul className="space-y-3 text-muted-foreground mt-4">
                <li className="flex gap-3">
                  <span className="text-gold shrink-0">•</span>
                  <span>Szyfrowanie danych (SSL/TLS)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold shrink-0">•</span>
                  <span>Ograniczenie dostępu do danych do autoryzowanych osób</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold shrink-0">•</span>
                  <span>Regularne kopie zapasowe</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold shrink-0">•</span>
                  <span>Monitoring systemów bezpieczeństwa</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nasza strona internetowa korzysta z cookies w celu:
              </p>
              <ul className="space-y-3 text-muted-foreground mt-4">
                <li className="flex gap-3">
                  <span className="text-gold shrink-0">•</span>
                  <span>Zapamiętania Twoich preferencji</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold shrink-0">•</span>
                  <span>Analizy ruchu na stronie (Google Analytics)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold shrink-0">•</span>
                  <span>Poprawy funkcjonalności i doświadczenia użytkownika</span>
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Możesz odmówić akceptacji cookies w ustawieniach swojej przeglądarki.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Przechowywanie Danych</h2>
              <p className="text-muted-foreground leading-relaxed">
                Przechowujemy Twoje dane osobowe tylko przez czas niezbędny do
                realizacji celów, dla których zostały zebrane:
              </p>
              <ul className="space-y-3 text-muted-foreground mt-4">
                <li className="flex gap-3">
                  <span className="text-gold shrink-0">•</span>
                  <span>
                    Dane z formularza kontaktowego — do 3 miesięcy od wysłania
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold shrink-0">•</span>
                  <span>
                    Dane klientów — przez czas realizacji umowy i przez 6 lat po jej
                    zakończeniu (z uwagi na przepisy prawa podatkowego)
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold shrink-0">•</span>
                  <span>
                    Dane z biuletynu — do czasu wypisania się z listy mailingowej
                  </span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                11. Zmiany Polityki Prywatności
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Zastrzegamy sobie prawo do modyfikacji tej Polityki Prywatności.
                Zmiany będą publikowane na tej stronie, a w przypadku zmian
                istotnych powiadomimy Cię e-mailem.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">12. Kontakt</h2>
              <p className="text-muted-foreground leading-relaxed">
                Jeśli masz pytania dotyczące tej Polityki Prywatności lub jak
                przetwarzamy Twoje dane, skontaktuj się z nami:
              </p>
              <div className="bg-navy-deep/50 border border-gold/20 rounded-lg p-6 mt-4 text-sm space-y-2">
                <p className="text-foreground font-medium">Vita Space</p>
                <p className="text-muted-foreground">
                  E-mail:{" "}
                  <a href="mailto:vitaspace.kontakt@gmail.com" className="text-gold hover:text-gold/80">
                    vitaspace.kontakt@gmail.com
                  </a>
                </p>
                <p className="text-muted-foreground">
                  Telefon:{" "}
                  <a href="tel:+48695867080" className="text-gold hover:text-gold/80">
                    695 867 080
                  </a>
                </p>
                <p className="text-muted-foreground">Wieruszów, ul. Wrocławska 12/1</p>
              </div>
            </section>

            <section className="border-t border-gold/20 pt-8">
              <p className="text-xs text-muted-foreground">
                © {new Date().getFullYear()} Vita Space. Wszystkie prawa zastrzeżone.
              </p>
            </section>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
