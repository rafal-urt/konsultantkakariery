import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  CheckCircle,
  XCircle,
  ArrowRight,
  ArrowDown,
  Star,
  Quote,
  Shield,
} from 'lucide-react'
import FadeInSection from '@/components/FadeInSection'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Konsultacje Kariery — Pakiet Podstawowy i Rozszerzony | Ewelina Dyjak',
  description:
    'Indywidualne konsultacje kariery: pakiet podstawowy 3 spotkania (630 zł) lub rozszerzony 6 spotkań (980 zł). Zmiana pracy, przebranżowienie, pewność siebie. Ewelina Dyjak, Lublin & online.',
  openGraph: {
    title: 'Konsultacje Kariery — Pakiet Podstawowy i Rozszerzony | Ewelina Dyjak',
    description:
      'Zmień pracę albo branżę ze świadomym planem. 3 lub 6 indywidualnych spotkań z konsultantką kariery z ponad 1000 godzinami doświadczenia.',
    url: 'https://konsultantkakariery.pl/uslugi/konsultacje-kariery',
  },
  alternates: { canonical: 'https://konsultantkakariery.pl/uslugi/konsultacje-kariery' },
}

const testimonials = [
  {
    name: 'Marta Banaszewska',
    role: 'Employer Branding Specialist, Xebia Polska',
    short: '+100% do pewności siebie',
    content:
      'Po raz pierwszy, bez wątpliwości, byłam w stanie powiedzieć głośno, że super wykonuję swoją pracę i jestem dobrym pracownikiem. Ewelina pomogła mi określić moje mocne strony, o których jestem teraz w stanie mówić otwarcie. Zmiany w mojej głowie były ogromne.',
  },
  {
    name: 'Eliza Rokosz',
    role: 'Kierownik Sprzedaży, Polska Korporacja Recyklingu',
    short: 'Odnalazłam swoją zawodową drogę',
    content:
      'Ewelina nie boi się trudnych wyzwań. Potrafi podejść do każdego problemu konstruktywnie i znaleźć efektywne rozwiązanie. Dzięki jej wsparciu odnalazłam swoją zawodową drogę i poczułam, że mam realny wpływ na dalszy rozwój kariery.',
  },
  {
    name: 'Łukasz Klat',
    role: 'Operator filmowy',
    short: 'Konkretny plan przebranżowienia',
    content:
      'W ciągu 4 spotkań wyznaczyliśmy plan krok po kroku na kompletne przebranżowienie. Ewelina ostudziła mój zapał do skoku na główkę i dała mi pomysły na sprawdzenie głębokości wody — a to było dokładnie to, czego potrzebowałem.',
  },
]

const faqs = [
  {
    q: 'Jak wygląda bezpłatna rozmowa wstępna?',
    a: 'To ok. 20-minutowa rozmowa online lub telefoniczna. Opowiadasz o swojej sytuacji i oczekiwaniach, a ja przedstawiam możliwe formy wsparcia i wstępną propozycję planu. Po rozmowie decydujesz, czy chcesz kontynuować — bez żadnej presji.',
  },
  {
    q: 'Czy konsultacje odbywają się online czy stacjonarnie?',
    a: 'Pracuję głównie online (Zoom, Google Meet), dzięki czemu mogę współpracować z osobami z całej Polski. Dla osób z Lublina możliwe są spotkania stacjonarne.',
  },
  {
    q: 'Jaka jest różnica między Pakietem A a B?',
    a: 'Pakiet A (3 spotkania) skupia się na diagnozie Twojej sytuacji, określeniu celów i wypracowaniu planu działania. Pakiet B (6 spotkań) robi to samo, ale dodatkowo obejmuje pracę nad CV, LinkedIn i przygotowanie do rozmów kwalifikacyjnych — to kompletna ścieżka od planu do złożenia aplikacji.',
  },
  {
    q: 'Jak długo trzeba czekać na efekty?',
    a: 'Pierwsze konkretne zmiany — w postaci jasności co do kierunku i lepszego poczucia siebie — klienci odczuwają już po 1–2 spotkaniach. Pełny plan kariery i gotowość do działania na rynku pracy osiągamy w trakcie całego pakietu.',
  },
  {
    q: 'Czy konsultacje są dla kogoś w każdym wieku i branży?',
    a: 'Tak. Pracuję z osobami na różnych etapach kariery — od absolwentów szukających pierwszej pracy, przez osoby z 10-letnim doświadczeniem rozważające przebranżowienie, aż po seniorów na rynku pracy. Doświadczenie z ponad 1000 godzin konsultacji obejmuje bardzo różnorodne profile zawodowe.',
  },
  {
    q: 'Co, jeśli w trakcie współpracy moje potrzeby się zmienią?',
    a: 'To się zdarza i jest całkowicie naturalne — w trakcie pracy często okazuje się, że prawdziwy problem jest inny niż zakładałaś/zakładałeś na początku. Jestem elastyczna i dostosowuję kierunek naszej pracy do tego, czego naprawdę potrzebujesz.',
  },
]

export default function KonsultacjeKarieryPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="bg-beige section-padding">
        <div className="container-width">
          <Breadcrumbs
            items={[
              { label: 'Usługi', href: '/uslugi' },
              { label: 'Konsultacje kariery', href: '/uslugi/konsultacje-kariery' },
            ]}
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeInSection direction="left">
              <div className="max-w-xl">
                <p className="section-label">Konsultacje kariery</p>
                <h1 className="text-4xl sm:text-5xl font-bold text-[#1A1A1A] leading-tight mb-6">
                  Zmień pracę albo branżę —{' '}
                  <span className="text-gold">ze świadomym planem, nie przypadkiem</span>
                </h1>
                <p className="text-gray-500 text-lg leading-relaxed mb-4">
                  3 lub 6 indywidualnych spotkań, po których wiesz dokładnie czego chcesz,
                  jak to osiągnąć i skąd zacząć — bez chaosu i odkładania na później.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-8">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle size={14} className="text-gold" />
                    Ponad 1000 godzin konsultacji
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle size={14} className="text-gold" />
                    12 lat doświadczenia
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/kontakt" className="btn-primary text-center">
                    Umów bezpłatną rozmowę
                  </Link>
                  <a href="#pakiety" className="btn-outline text-center inline-flex items-center justify-center gap-2">
                    Zobacz pakiety i ceny
                    <ArrowDown size={16} />
                  </a>
                </div>
                <p className="text-xs text-gray-400 mt-4 flex items-center gap-1.5">
                  <Shield size={13} className="text-gold flex-shrink-0" />
                  Pierwsza rozmowa ~20 min jest bezpłatna i niezobowiązująca
                </p>
              </div>
            </FadeInSection>

            <FadeInSection direction="right" delay={0.15}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden w-full">
                <Image
                  src="/gfx/ewelina_3.jpg"
                  alt="Ewelina Dyjak — konsultacje kariery online"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ===== DLA KOGO ===== */}
      <section className="bg-white section-padding">
        <div className="container-width">
          <FadeInSection className="text-center mb-12">
            <p className="section-label">Czy to jest dla Ciebie?</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] max-w-2xl mx-auto">
              Rozpoznajesz się w którymś z tych opisów?
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-10">
            {[
              {
                icon: '🔥',
                title: 'Wypalenie i toksyczne środowisko',
                desc: 'Czujesz ogromne wypalenie aktualnym miejscem pracy, wynagrodzenie jest nieadekwatne, a to negatywnie odbija się na Twoim życiu osobistym. Nie widzisz wyjścia.',
              },
              {
                icon: '📨',
                title: 'CV bez odpowiedzi',
                desc: 'Wysyłasz kilkadziesiąt aplikacji, tygodniami czekasz na wiadomość od rekrutera. Twoja pewność siebie spada, a motywacja jest na bardzo niskim poziomie.',
              },
              {
                icon: '👶',
                title: 'Powrót po przerwie',
                desc: 'Wracasz po urlopie macierzyńskim. Nie jesteś pewna co umiesz, czego chcesz, czujesz się zagubiona i chcesz się poskładać na nowo.',
              },
              {
                icon: '🧭',
                title: 'Kryzys mimo doświadczenia',
                desc: 'Jesteś doświadczoną osobą na rynku, ale brakuje Ci motywacji. Czujesz, że musisz obrać nowy kierunek, aby znowu poczuć zadowolenie z siebie.',
              },
            ].map((item, i) => (
              <FadeInSection key={i} delay={i * 0.08}>
                <div className="bg-beige rounded-xl p-6 flex items-start gap-4 h-full">
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <p className="font-semibold text-[#1A1A1A] mb-2">{item.title}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection>
            <p className="text-center text-xl font-semibold text-[#1A1A1A]">
              Jeśli choć jeden opis brzmi znajomo — <span className="text-gold">jesteś w dobrym miejscu.</span>
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* ===== CO OSIĄGNIESZ ===== */}
      <section className="bg-beige section-padding">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <FadeInSection className="text-center mb-12">
              <p className="section-label">Efekty</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A]">
                Co osiągniesz po konsultacjach?
              </h2>
            </FadeInSection>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <FadeInSection direction="left">
                <div className="bg-white rounded-2xl p-8 h-full shadow-sm">
                  <h3 className="text-lg font-bold text-[#1A1A1A] mb-6">Będziesz miała/miał:</h3>
                  <ul className="space-y-4">
                    {[
                      'Jasny kierunek zawodowy — wiesz co chcesz i dlaczego',
                      'Konkretny plan działania na najbliższe tygodnie',
                      'Dopracowane dokumenty aplikacyjne (w pakiecie rozszerzonym)',
                      'Wiedzę o tym, jak skutecznie szukać pracy i docierać do ofert',
                      'Przygotowanie do rozmów kwalifikacyjnych (pakiet rozszerzony)',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle size={18} className="text-gold flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInSection>

              <FadeInSection direction="right" delay={0.1}>
                <div className="bg-white rounded-2xl p-8 h-full shadow-sm">
                  <h3 className="text-lg font-bold text-[#1A1A1A] mb-6">Poczujesz:</h3>
                  <div className="space-y-4">
                    {[
                      {
                        label: 'Spokój',
                        desc: 'Wewnętrzne uspokojenie w trudnym czasie — mniej stresu, więcej jasności',
                      },
                      {
                        label: 'Ulgę',
                        desc: '„Nie jestem z tym sama/sam" — poczucie wsparcia i porządku w chaosie',
                      },
                      {
                        label: 'Sprawczość',
                        desc: '„Zmiana jest możliwa i mam na nią wpływ" — wiarę w konkretne kroki',
                      },
                      {
                        label: 'Pewność siebie',
                        desc: 'Znajomość własnych mocnych stron i gotowość do mówienia o nich wprost',
                      },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="w-6 h-6 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="w-2 h-2 bg-gold rounded-full" />
                        </span>
                        <div>
                          <span className="font-semibold text-[#1A1A1A]">{item.label} — </span>
                          <span className="text-gray-500 text-sm">{item.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>

      {/* ===== JAK PRACUJĘ ===== */}
      <section className="bg-white section-padding">
        <div className="container-width">
          <FadeInSection className="text-center mb-16">
            <p className="section-label">Jak pracuję</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A]">
              Prosta droga od „nie wiem" do konkretnego planu
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            {[
              {
                num: '01',
                title: 'Bezpłatna rozmowa wstępna',
                desc: '~20 min, online lub telefonicznie. Poznaję Twoją sytuację, ty poznajesz mój sposób pracy. Zero zobowiązań — decydujesz, czy kontynuować.',
              },
              {
                num: '02',
                title: 'Diagnoza i plan',
                desc: 'Pierwsze spotkania to głęboka analiza Twoich mocnych stron, wartości i celów. Razem budujemy konkretny plan kroków dopasowany do Ciebie.',
              },
              {
                num: '03',
                title: 'Działanie i zmiana',
                desc: 'Pracujemy systematycznie. Każde spotkanie kończy się konkretnym zadaniem. Wychodzisz z narzędziami, które działają natychmiast.',
              },
            ].map((step, i) => (
              <FadeInSection key={i} delay={i * 0.1}>
                <div className="relative bg-beige rounded-2xl p-8 h-full">
                  <span className="text-5xl font-bold text-warm leading-none block mb-4 select-none">
                    {step.num}
                  </span>
                  <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                  {i < 2 && (
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                      <ArrowRight size={18} className="text-warm" />
                    </div>
                  )}
                </div>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection>
            <div className="bg-brand-blue/5 border border-brand-blue/20 rounded-2xl p-8 max-w-2xl mx-auto text-center">
              <p className="font-semibold text-[#1A1A1A] mb-2">Zanim zdecydujesz — porozmawiajmy</p>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Bezpłatna rozmowa wstępna (~20 min) to przestrzeń, w której opowiadasz
                o swojej sytuacji, a ja przedstawiam plan. Po rozmowie decydujesz
                bez żadnej presji.
              </p>
              <Link href="/kontakt" className="btn-primary inline-flex items-center gap-2">
                Umów bezpłatną rozmowę
                <ArrowRight size={16} />
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ===== PAKIETY ===== */}
      <section id="pakiety" className="bg-beige section-padding scroll-mt-20">
        <div className="container-width">
          <FadeInSection className="text-center mb-12">
            <p className="section-label">Pakiety</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A]">
              Wybierz zakres wsparcia
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {/* Pakiet A */}
            <FadeInSection delay={0.1}>
              <article className="bg-white rounded-2xl overflow-hidden border-2 border-warm shadow-sm h-full flex flex-col">
                <div className="p-8 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                    Pakiet A — Podstawowy
                  </p>
                  <h3 className="text-2xl font-bold text-[#1A1A1A] mb-1">Plan ścieżki kariery</h3>
                  <p className="text-sm text-gray-400 mb-6">3 spotkania × 60 min + zadania domowe</p>

                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    Idealny, jeśli chcesz określić cel zawodowy i wypracować plan — ale
                    nie potrzebujesz jeszcze wsparcia w pisaniu CV ani przygotowaniu do rozmów.
                  </p>

                  <ul className="space-y-3 mb-6">
                    {[
                      'Odkrycie swoich zasobów, wartości i mocnych stron',
                      'Analiza sytuacji zawodowej i dilemat, z którymi się mierzysz',
                      'Określenie oczekiwań i możliwości w nowej pracy',
                      'Indywidualny plan działania z uwzględnieniem rynku pracy',
                      'Strategia szukania pracy i najczęstsze błędy do uniknięcia',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle size={16} className="text-gold flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t border-warm p-6 flex items-center justify-between bg-beige/30">
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">Twoja inwestycja</p>
                    <p className="text-3xl font-bold text-[#1A1A1A]">630 zł</p>
                  </div>
                  <Link href="/kontakt" className="btn-outline inline-flex items-center gap-2">
                    Umów się
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </article>
            </FadeInSection>

            {/* Pakiet B */}
            <FadeInSection delay={0.2}>
              <article className="bg-white rounded-2xl overflow-hidden border-2 border-gold shadow-lg h-full flex flex-col">
                <div className="bg-gold text-white text-xs font-semibold uppercase tracking-widest text-center py-2">
                  Najpopularniejszy
                </div>
                <div className="p-8 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                    Pakiet B — Rozszerzony
                  </p>
                  <h3 className="text-2xl font-bold text-[#1A1A1A] mb-1">Zdobądź pracę, jaką chcesz</h3>
                  <p className="text-sm text-gray-400 mb-6">6 spotkań × 60 min + konsultacja mailowa</p>

                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    Kompletna ścieżka od określenia celów po złożenie pierwszych aplikacji.
                    6-tygodniowy program dla osób, które chcą przeprowadzić realną zmianę.
                  </p>

                  <ul className="space-y-3 mb-6">
                    {[
                      'Wszystko z Pakietu A (spotkania 1–3)',
                      'Spotkanie 4: Skuteczne CV pod ATS i pod rekrutera',
                      'Spotkanie 5: Rozmowa kwalifikacyjna — praktyczne ćwiczenia i feedback',
                      'Spotkanie 6: Profesjonalny wizerunek na LinkedIn',
                      '1 konsultacja mailowa w trakcie procesu',
                      'Narzędzia i materiały do pracy własnej',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle size={16} className="text-gold flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t border-warm p-6 flex items-center justify-between bg-beige/30">
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">Twoja inwestycja</p>
                    <p className="text-3xl font-bold text-[#1A1A1A]">980 zł</p>
                  </div>
                  <Link href="/kontakt" className="btn-primary inline-flex items-center gap-2">
                    Umów się
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </article>
            </FadeInSection>
          </div>

          {/* Porównanie */}
          <FadeInSection className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl overflow-hidden border border-warm shadow-sm">
              <div className="grid grid-cols-3 bg-beige text-sm font-semibold text-gray-500 uppercase tracking-wider text-xs">
                <div className="p-4 col-span-1">Co dostajesz</div>
                <div className="p-4 text-center border-l border-warm">Pakiet A</div>
                <div className="p-4 text-center border-l border-warm text-gold">Pakiet B</div>
              </div>
              {[
                ['Diagnoza sytuacji i mocnych stron', true, true],
                ['Plan działania dopasowany do Twojej sytuacji', true, true],
                ['Strategia szukania pracy', true, true],
                ['Praca nad CV i LinkedIn', false, true],
                ['Przygotowanie do rozmów kwalifikacyjnych', false, true],
                ['Konsultacja mailowa', false, true],
              ].map(([label, a, b], i) => (
                <div
                  key={i}
                  className={`grid grid-cols-3 border-t border-warm ${i % 2 === 1 ? 'bg-beige/30' : ''}`}
                >
                  <div className="p-4 text-sm text-gray-600">{label as string}</div>
                  <div className="p-4 flex justify-center border-l border-warm">
                    {a ? (
                      <CheckCircle size={18} className="text-gold" />
                    ) : (
                      <XCircle size={18} className="text-gray-200" />
                    )}
                  </div>
                  <div className="p-4 flex justify-center border-l border-warm">
                    {b ? (
                      <CheckCircle size={18} className="text-gold" />
                    ) : (
                      <XCircle size={18} className="text-gray-200" />
                    )}
                  </div>
                </div>
              ))}
              <div className="grid grid-cols-3 border-t border-warm bg-beige/50">
                <div className="p-4 font-semibold text-[#1A1A1A]">Cena</div>
                <div className="p-4 text-center border-l border-warm font-bold text-[#1A1A1A]">630 zł</div>
                <div className="p-4 text-center border-l border-warm font-bold text-gold">980 zł</div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ===== DLA KOGO TAK / NIE ===== */}
      <section className="bg-white section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <FadeInSection delay={0.1}>
              <div className="bg-beige rounded-2xl p-7 h-full">
                <h3 className="text-lg font-bold text-[#1A1A1A] mb-5 flex items-center gap-2">
                  <CheckCircle size={20} className="text-gold" />
                  Konsultacje SĄ dla Ciebie, jeżeli:
                </h3>
                <ul className="space-y-3">
                  {[
                    'Chcesz działać z konkretnym i jasnym planem — nie chaotycznie',
                    'Szukasz pracy, ale nie wiesz dokładnie jakiej',
                    'Chcesz obiektywnie przeanalizować sytuację z ekspertką',
                    'Chcesz poznać swoje mocne strony i umieć o nich mówić',
                    'Chcesz skrócić czas poszukiwania pracy',
                    'Chcesz poczuć motywację i uwierzyć, że zmiana jest możliwa',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle size={15} className="text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <div className="rounded-2xl border border-warm p-7 h-full">
                <h3 className="text-lg font-bold text-[#1A1A1A] mb-5 flex items-center gap-2">
                  <XCircle size={20} className="text-gray-300" />
                  Konsultacje NIE SĄ dla Ciebie, jeśli:
                </h3>
                <ul className="space-y-3">
                  {[
                    'Nie chcesz podjąć wyzwania pracy nad sobą',
                    'Szukasz kogoś, kto tylko napisze za Ciebie CV',
                    'Nie widzisz wartości w analizowaniu swoich predyspozycji',
                    'Jesteś w pełni świadoma/y mocnych stron i masz motywację',
                    'Nie jesteś w stanie przyjąć informacji zwrotnej',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <XCircle size={15} className="text-gray-300 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-400 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ===== OPINIE ===== */}
      <section className="bg-beige section-padding">
        <div className="container-width">
          <FadeInSection className="text-center mb-12">
            <p className="section-label">Opinie klientów</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A]">
              Co mówią osoby, które przeszły przez zmianę
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <FadeInSection key={i} delay={i * 0.1}>
                <article className="bg-white rounded-2xl p-7 shadow-sm h-full flex flex-col">
                  <Quote size={28} className="text-gold/20 fill-gold/10 mb-4" />
                  <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6">
                    „{t.content}"
                  </p>
                  <div>
                    <div className="flex items-center gap-0.5 mb-2">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} size={13} className="text-gold fill-gold" />
                      ))}
                    </div>
                    <p className="font-semibold text-[#1A1A1A] text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.role}</p>
                  </div>
                </article>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection delay={0.3}>
            <div className="text-center mt-8">
              <Link
                href="/klienci"
                className="text-brand-blue text-sm font-medium hover:underline inline-flex items-center gap-1"
              >
                Przeczytaj wszystkie opinie
                <ArrowRight size={14} />
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="bg-white section-padding">
        <div className="container-width">
          <FadeInSection className="text-center mb-12">
            <p className="section-label">FAQ</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A]">
              Najczęstsze pytania
            </h2>
          </FadeInSection>

          <div className="max-w-2xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <FadeInSection key={i} delay={i * 0.06}>
                <details className="group bg-beige rounded-xl overflow-hidden border border-warm/60">
                  <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer font-semibold text-[#1A1A1A] text-sm leading-snug list-none select-none hover:text-gold transition-colors duration-200">
                    {faq.q}
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-warm flex items-center justify-center text-gray-500 group-open:rotate-45 transition-transform duration-200 text-lg leading-none">
                      +
                    </span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </details>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="bg-brand-blue section-padding">
        <div className="container-width text-center">
          <FadeInSection>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Gotowa/y na pierwszą rozmowę?
            </h2>
            <p className="text-white/80 text-lg mb-4 max-w-xl mx-auto">
              Bezpłatna rozmowa wstępna (~20 min) to przestrzeń bez zobowiązań —
              opowiadasz o swojej sytuacji, ja pokazuję co możemy zrobić razem.
            </p>
            <p className="text-white/60 text-sm mb-10">
              Nie musisz wiedzieć wszystkiego z góry. Wystarczy jeden krok.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/kontakt"
                className="bg-white text-gold px-10 py-4 rounded-full font-semibold hover:bg-cream transition-colors duration-200 shadow-md"
              >
                Umów bezpłatną rozmowę
              </Link>
              <Link
                href="/uslugi"
                className="border border-white/40 text-white px-8 py-4 rounded-full font-medium hover:border-white/80 transition-colors duration-200 text-sm"
              >
                Zobacz wszystkie usługi
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>
    </>
  )
}
