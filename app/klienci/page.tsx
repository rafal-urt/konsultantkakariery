import type { Metadata } from 'next'
import Link from 'next/link'
import { Quote, Star } from 'lucide-react'
import FadeInSection from '@/components/FadeInSection'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Opinie klientów — Konsultantka Kariery Ewelina Dyjak',
  description:
    'Przeczytaj opinie klientów Eweliny Dyjak — konsultantki kariery. Dowiedz się, jak pomogła w zmianie pracy, budowaniu pewności siebie i rozwoju zawodowym.',
  openGraph: {
    title: 'Opinie klientów — Konsultantka Kariery Ewelina Dyjak',
    description:
      'Co mówią klienci Eweliny Dyjak o konsultacjach kariery? Przeczytaj prawdziwe opinie i dowiedz się, jak wygląda współpraca.',
    url: 'https://konsultantkakariery.pl/klienci',
  },
  alternates: { canonical: 'https://konsultantkakariery.pl/klienci' },
}

const testimonials = [
  {
    name: 'Natalia Jędrzejewska',
    role: 'Doradca i opiekun klienta, Sommelier',
    initial: 'N',
    rating: 5,
    short: 'Stopniowa, realna zmiana podejścia',
    content: `Na konsultację kariery u Eweliny trafiłam szukając pomocy w powrocie na rynek pracy po podwójnym urlopie macierzyńskim. Ewelina to empatyczna osoba, którą cechuje wysoko rozwinięta inteligencja emocjonalna. Już na 20-minutowej rozmowie przedwstępnej trafnie zidentyfikowała obszary do naszej wspólnej pracy.

Jestem sama zaskoczona obrotem sytuacji: na początku nie byłam pewna czy ta konsultacja jest dla mnie. Mam ambiwalentny stosunek do coachingu, ale ze spotkania na spotkanie zauważyłam stopniową zmianę swojego podejścia odnośnie szukania pracy i oceny moich kwalifikacji i kompetencji.

Po kilkuletnim wykluczeniu z rynku pracy związanym z objęciem nowej roli jako mamy, Ewelina w naturalny, ale bardzo celowany i umiejętny sposób wpłynęła na zmianę mojej postawy i zmotywowała mnie do działania. Jest to profesjonalistka, ciepła, empatyczna osoba, wsłuchuje się w potrzeby klienta i dopasowuje się do oczekiwań. Atmosfera spotkań bardzo przyjazna — czułam się komfortowo. Z całego serca polecam Ewelinę.`,
  },
  {
    name: 'Eliza Rokosz',
    role: 'Kierownik Sprzedaży, Polska Korporacja Recyklingu',
    initial: 'E',
    rating: 5,
    short: 'Odnalazłam swoją zawodową drogę',
    content: `Z przyjemnością polecam Ewelinę jako konsultantkę kariery. Miałam okazję skorzystać z jej usług i jestem zachwycona efektami. Ewelina to prawdziwa profesjonalistka z bardzo indywidualnym podejściem do klienta.

Cechuje ją pełen profesjonalizm — jest rzetelna, punktualna i zawsze przygotowana do spotkania. Dokładnie analizuje sytuację klienta i oferuje spersonalizowane rozwiązania. Nie boi się trudnych wyzwań. Potrafi podejść do każdego problemu w sposób konstruktywny i znaleźć efektywne rozwiązanie.

Szczególnie polecam Ewelinę osobom, które: czują się zagubione w swojej karierze i nie wiedzą, w jakim kierunku iść; chcą zmienić pracę, ale nie wiedzą od czego zacząć; mają problemy z napisaniem CV; potrzebują wsparcia w przygotowaniu się do rozmowy kwalifikacyjnej. Ewelina to wyjątkowa konsultantka kariery, która pomogła mi odnaleźć moją zawodową drogę.`,
  },
  {
    name: 'Marta Banaszewska',
    role: 'Employer Branding Specialist, Xebia Polska',
    initial: 'M',
    rating: 5,
    short: '+100% do pewności siebie',
    content: `Jakiś czas temu szukałam coacha lub doradcy zawodowego z prawdziwego zdarzenia. Spotkałam się z wieloma poleceniami, jednak najbardziej urzekł mnie pewien komentarz na Facebooku, w którym Ewelina została określona jako „kobieta o piątym i szóstym zmyśle, dużym doświadczeniu, pokładach empatii i taka co naprawdę potrafi pomóc" — potwierdzam każde słowo.

Z Eweliną umówiłam się początkowo na 3 spotkania, jednak przez moje gadulstwo skończyło się na 5. Co zmieniło się po tych 5 spotkaniach?

1. Po raz pierwszy, bez wątpliwości, byłam w stanie powiedzieć głośno, że super wykonuję swoją pracę i jestem dobrym pracownikiem — +100% do pewności siebie.
2. Ewelina pomogła mi określić moje mocne strony, o których jestem teraz w stanie mówić otwarcie.
3. Wiem, nad jakimi cechami i umiejętnościami chcę popracować i za co nigdy w życiu zawodowo nie chcę się brać.
4. Dzięki uważnemu słuchaniu Ewelina wyłapała w moich słowach rzeczy, którym albo zaciekle zaprzeczałam, albo nie byłam ich świadoma — wszystkie okazały się kluczowe.

Współpracę z Eweliną polecam każdemu, kto potrzebuje zmian — szczególnie tych w głowie.`,
  },
  {
    name: 'Sylwia Szewczuk',
    role: 'Grafik komputerowy, INQ Trade',
    initial: 'S',
    rating: 5,
    short: 'Znalazłam nową pracę dzięki tej współpracy',
    content: `Ewelina profesjonalnie pomogła mi przygotować się do rozmowy kwalifikacyjnej, zmniejszając znacznie poziom odczuwanego stresu i dodając pozytywnej energii oraz wiary w siebie.

Wykazała się dużą uważnością, wiedzą o branżach oraz o samym procesie rekrutacji. Jej pytania i uwagi znacząco pomogły mi w pozytywnym zaprezentowaniu swojej osoby na rozmowie — sprawiły, że byłam dużo spokojniejsza i pewniejsza siebie, miałam poczucie, że poradzę sobie z każdym pytaniem.

Ostatecznie udało mi się odnieść sukces w znalezieniu nowej pracy. Bardzo polecam konsultacje u Eweliny w tym niełatwym okresie zmiany pracy — jest to naprawdę nieocenione wsparcie.`,
  },
  {
    name: 'Łukasz Klat',
    role: 'Operator filmowy',
    initial: 'Ł',
    rating: 5,
    short: 'Spokój, jasność i konkretny plan przebranżowienia',
    content: `W ciągu 4 spotkań wyznaczyliśmy plan krok po kroku na kompletne przebranżowienie (plan 3–5-letni) oraz na maksymalizację zasobów i możliwości sterowania karierą „tu i teraz".

Współpraca z Eweliną dała mi możliwość: podsumowania sukcesów i lekcji z dotychczasowej ścieżki, odnalezienia wewnętrznego spokoju w czasie dynamicznie zmieniającej się sytuacji geopolitycznej, skorzystania z narzędzi, których prostota daje możliwość powtórzenia całego procesu samodzielnie w przyszłości, podbudowania samooceny i realnego spojrzenia na swoje miejsce na rynku pracy, a także ostudzenia zapału do „skoku na główkę" i zamiany go na pomysły na „sprawdzenie głębokości wody".

Narzędzia, tempo pracy, zadania domowe, ciepło i żywe zainteresowanie klientem — to wszystko pozwala mi całym sercem polecić Ewelinę Dyjak jako bardzo kompetentną Konsultantkę Kariery i Coacha Zawodowego.`,
  },
  {
    name: 'Anna Moryson',
    role: '',
    initial: 'A',
    rating: 5,
    short: 'Czuję się pewniej i spokojniej',
    content: `Konsultacja z Eweliną pozwoliła mi zupełnie inaczej spojrzeć na siebie i swoją sytuację na rynku pracy. Czuję się pewniej i spokojniej, bo wiem na czym mogę "budować" i wiem, że moje poszukiwania idealnego dla siebie miejsca — takiego, które mobilizuje i pozwala się rozwijać — to nie jest wcale jakaś naiwna mrzonka!

Ewelina jest bardzo kompetentna i rzeczowa, naprawdę wie, na co położyć nacisk w procesie poszukiwania pracy jak i samej rekrutacji. Praca nad CV ruszyła do przodu i co najważniejsze — w fajnym kierunku! Szczerze polecam konsultacje!`,
  },
  {
    name: 'Weronika Bartczak',
    role: '',
    initial: 'W',
    rating: 5,
    short: 'Pewność siebie i gotowość do działania',
    content: `Bardzo polecam! Ewelina „zdiagnozowała" główny problem w moim CV, przeszła ze mną krok po kroku co mogę w nim zmienić.

Dodatkowo na dalszych spotkaniach pomogła mi trochę odnaleźć siebie i zdecydować się na jedną ścieżkę, a przećwiczenie rozmowy rekrutacyjnej dodało mi pewności siebie i zwróciło moją uwagę na to, co mogę podkreślić, jak odpowiadać na pewne pytania, by wybrzmiało to, na czym mi zależy.

Naprawdę szczerze polecam!`,
  },
]

export default function KlienciPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="bg-beige section-padding">
        <div className="container-width">
          <Breadcrumbs items={[{ label: 'Opinie klientów', href: '/klienci' }]} />
          <div className="text-center">
          <FadeInSection>
            <p className="section-label">Opinie</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#1A1A1A] leading-tight mb-6">
              Dowiedz się, co sądzą moi Klienci
            </h1>
            <p className="text-gray-500 text-xl max-w-2xl mx-auto">
              Zobacz jak wspieram rozwój — w słowach osób, które przeszły przez
              proces zmiany i udało im się go zakończyć sukcesem.
            </p>
          </FadeInSection>
          </div>
        </div>
      </section>

      {/* ===== OPINIE ===== */}
      <section className="bg-white section-padding">
        <div className="container-width">
          <div className="space-y-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <FadeInSection key={index} delay={index * 0.08}>
                <article className="bg-white border border-warm rounded-2xl p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow duration-300">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start gap-6 mb-6">
                    <div className="w-16 h-16 rounded-full bg-beige flex items-center justify-center flex-shrink-0">
                      <span className="text-gold font-bold text-2xl">
                        {testimonial.initial}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-1">
                        <h2 className="text-lg font-semibold text-[#1A1A1A]">
                          {testimonial.name}
                        </h2>
                        <div className="flex items-center gap-0.5" aria-label={`Ocena: ${testimonial.rating}/5`}>
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <Star key={i} size={14} className="text-gold fill-gold" />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                      <p className="text-gold font-semibold text-sm mt-2 italic">
                        &ldquo;{testimonial.short}&rdquo;
                      </p>
                    </div>
                    <Quote
                      size={32}
                      className="text-gold/15 fill-gold/10 flex-shrink-0 hidden sm:block"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Content */}
                  <div className="pl-0 sm:pl-22">
                    {testimonial.content.split('\n\n').map((paragraph, i) => (
                      <p key={i} className="text-gray-600 leading-relaxed mb-4 last:mb-0">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </article>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-beige section-padding">
        <div className="container-width text-center">
          <FadeInSection>
            <p className="section-label">Twoja kolej</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-6">
              Odblokuj swój potencjał
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto mb-10">
              Dołącz do osób, które zdecydowały się wziąć sprawy kariery w swoje
              ręce. Pierwsze kroki są najtrudniejsze — ja jestem po to, żeby je
              z Tobą przejść.
            </p>
            <Link href="/kontakt" className="btn-primary inline-block">
              Umów konsultację
            </Link>
          </FadeInSection>
        </div>
      </section>
    </>
  )
}
