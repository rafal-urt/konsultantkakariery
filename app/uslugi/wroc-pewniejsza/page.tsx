import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  CheckCircle,
  ArrowRight,
  ArrowDown,
  Star,
  Quote,
  Shield,
  Heart,
} from 'lucide-react'
import FadeInSection from '@/components/FadeInSection'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Wróć Pewniejsza — Program dla mam po urlopie macierzyńskim | Ewelina Dyjak',
  description:
    'Program dla mam wracających po urlopie macierzyńskim. 5 spotkań (890 zł) — świadoma decyzja, pewność siebie, plan działania. Prowadzi mama z ponad 5-letnią przerwą w pracy.',
  openGraph: {
    title: 'Wróć Pewniejsza — Program dla mam po urlopie macierzyńskim | Ewelina Dyjak',
    description:
      'Wróć do pracy na swoich warunkach — pewna siebie i z planem. 5 spotkań z konsultantką kariery, która sama przeżyła powrót po 5-letniej przerwie.',
    url: 'https://konsultantkakariery.pl/uslugi/wroc-pewniejsza',
  },
  alternates: { canonical: 'https://konsultantkakariery.pl/uslugi/wroc-pewniejsza' },
}

const faqs = [
  {
    q: 'Czy program jest tylko dla mam wracających z macierzyńskiego?',
    a: 'Program „Wróć Pewniejsza" jest dedykowany kobietom wracającym po przerwie związanej z wychowaniem dziecka. Jeśli wracasz po dłuższej przerwie z innego powodu — zapraszam na bezpłatną rozmowę, żeby ustalić, czy program będzie dla Ciebie odpowiedni.',
  },
  {
    q: 'Czy muszę już wiedzieć, czy chcę wrócić do starej pracy czy szukać nowej?',
    a: 'Absolutnie nie. Właśnie po to jest ten program — żebyś mogła podjąć tę decyzję świadomie, a nie pod presją. Wspólnie analizujemy oba scenariusze i dochodzisz do własnej odpowiedzi.',
  },
  {
    q: 'Ile czasu trwa cały program?',
    a: '5 tygodni — jedno spotkanie tygodniowo, każde po 60 minut. Tempo jest dostosowane do Twojej sytuacji — wiem, że z małym dzieckiem czas jest na wagę złota.',
  },
  {
    q: 'Czy konsultacje odbywają się online?',
    a: 'Tak, wszystkie spotkania odbywają się online (Zoom lub Google Meet). Możesz uczestniczyć z domu, bez konieczności wychodzenia i organizowania opieki.',
  },
  {
    q: 'Co, jeśli w trakcie programu zrozumiem, że chcę całkowicie zmienić branżę?',
    a: 'To się zdarza — i jest jak najbardziej możliwe. Program obejmuje analizę możliwości zawodowych, więc jeśli pojawi się myśl o przebranżowieniu, razem ją przepracujemy i ocenimy realność takiej zmiany.',
  },
  {
    q: 'Prowadzisz program sama czy masz zespół?',
    a: 'Program prowadzę wyłącznie ja — Ewelina Dyjak. Każda sesja jest indywidualna, z moją pełną uwagą. Nie ma tu żadnych zastępstw, asystentów ani nagranych materiałów zamiast spotkania.',
  },
]

export default function WrocPewniejszaPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="bg-beige section-padding">
        <div className="container-width">
          <Breadcrumbs
            items={[
              { label: 'Usługi', href: '/uslugi' },
              { label: 'Wróć Pewniejsza', href: '/uslugi/wroc-pewniejsza' },
            ]}
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeInSection direction="left">
              <div className="max-w-xl">
                <p className="section-label">Program dla mam</p>
                <h1 className="text-4xl sm:text-5xl font-bold text-[#1A1A1A] leading-tight mb-6">
                  Wróć do pracy{' '}
                  <span className="text-gold">na swoich warunkach</span>
                </h1>
                <p className="text-gray-500 text-lg leading-relaxed mb-4">
                  Program dla mam wracających po urlopie macierzyńskim, które chcą
                  podjąć świadomą decyzję — a nie wrócić „bo tak wypada" lub
                  zostać w domu z poczuciem winy.
                </p>
                <p className="text-gray-400 text-sm mb-8 flex items-start gap-2">
                  <Heart size={15} className="text-gold flex-shrink-0 mt-0.5" />
                  Prowadzi mama dwóch chłopców, która sama wróciła po 5-letniej przerwie
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/kontakt" className="btn-primary text-center">
                    Umów bezpłatną rozmowę
                  </Link>
                  <a href="#program" className="btn-outline text-center inline-flex items-center justify-center gap-2">
                    Jak wygląda program?
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
                  src="/gfx/ewelina_5.jpg"
                  alt="Ewelina Dyjak — Wróć Pewniejsza, program dla mam"
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

      {/* ===== HISTORIA EWELINY ===== */}
      <section className="bg-white section-padding">
        <div className="container-width">
          <div className="max-w-3xl mx-auto">
            <FadeInSection>
              <p className="section-label text-center">Dlaczego ten program istnieje</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] text-center mb-10">
                Rozumiem Twoją niepewność — bo sama przez to przeszłam
              </h2>
            </FadeInSection>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <FadeInSection direction="left">
                <div className="relative aspect-square rounded-2xl overflow-hidden max-w-xs mx-auto lg:max-w-none">
                  <Image
                    src="/gfx/ewelina_6.jpg"
                    alt="Ewelina Dyjak — mama i konsultantka kariery"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 320px, 40vw"
                  />
                </div>
              </FadeInSection>

              <FadeInSection direction="right" delay={0.1}>
                <div className="space-y-4 text-gray-500 leading-relaxed">
                  <p>
                    Wielokrotnie spotykałam mamy po przerwie macierzyńskiej — zalęknione,
                    niepewne swoich umiejętności, rozdarte między rolą mamy a potrzebą
                    przestrzeni dla siebie. Chciały zmiany, ale strach paraliżował.
                  </p>
                  <p className="font-medium text-[#1A1A1A]">
                    Sama jestem mamą dwóch chłopców urodzonych rok po roku. Wracałam
                    po ponad 5-letniej przerwie na rynek pracy. Rynek zmienił się nie
                    do poznania — nowe technologie, oczekiwania, umiejętności.
                  </p>
                  <p>
                    W głowie kłębiły się pytania: co ja naprawdę umiem? Gdzie się
                    odnajdę? Jak poskładać zawodową tożsamość na nowo?
                  </p>
                  <p>
                    Stąd narodził się program „Wróć Pewniejsza" — żebyś nie musiała
                    przez to przechodzić sama.
                  </p>
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DLA KOGO ===== */}
      <section className="bg-beige section-padding">
        <div className="container-width">
          <FadeInSection className="text-center mb-12">
            <p className="section-label">Czy to dla Ciebie?</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] max-w-2xl mx-auto">
              Ten program jest dla Ciebie, jeśli:
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-12">
            {[
              'Kończysz urlop i czujesz presję „wróć, bo tak wypada" — bez chwili na oddech',
              'Chcesz dopasować pracę do nowej rzeczywistości z dzieckiem i nowymi obowiązkami',
              'Szukasz wsparcia w podjęciu świadomej decyzji, a nie tylko „właściwej"',
              'Czujesz, że czas przerwy sprawił, że „wypadłaś" z rynku i boisz się powrotu',
              'Chcesz poczuć, że zmiana jest możliwa i masz na nią realny wpływ',
            ].map((item, i) => (
              <FadeInSection key={i} delay={i * 0.07}>
                <div className="bg-white rounded-xl p-5 flex items-start gap-3 shadow-sm h-full">
                  <CheckCircle size={18} className="text-gold flex-shrink-0 mt-0.5" />
                  <p className="text-gray-600 text-sm leading-relaxed">{item}</p>
                </div>
              </FadeInSection>
            ))}
          </div>

          {/* Stats */}
          <FadeInSection className="max-w-3xl mx-auto">
            <div className="bg-brand-blue/5 border border-brand-blue/15 rounded-2xl p-8">
              <p className="text-xs font-semibold text-brand-blue uppercase tracking-wider mb-4 text-center">
                Badania potwierdzają — to realne wyzwanie
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center mb-4">
                {[
                  { num: '95%', label: 'kobiet obawia się powrotu do pracy po macierzyńskim' },
                  { num: '74%', label: 'boi się trudności w łączeniu kariery z rodziną' },
                  { num: '53%', label: 'martwi się utratą umiejętności zawodowych' },
                  { num: '76%', label: 'oczekuje elastycznych godzin pracy po powrocie' },
                ].map((stat, i) => (
                  <div key={i}>
                    <p className="text-2xl font-bold text-[#1A1A1A] mb-1">{stat.num}</p>
                    <p className="text-gray-500 text-xs leading-snug">{stat.label}</p>
                  </div>
                ))}
              </div>
              <p className="text-gray-400 text-xs text-center">
                Źródło: raport Bosch i Fundacji Mamo Pracuj
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ===== CO POCZUJESZ ===== */}
      <section className="bg-white section-padding">
        <div className="container-width">
          <FadeInSection className="text-center mb-12">
            <p className="section-label">Co zyskasz</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A]">
              Czego możesz się spodziewać po programie?
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              {
                label: 'Spokój',
                desc: 'Wewnętrzne uspokojenie w czasie chaosu — mniejszy stres przed rozmową z pracodawcą lub decyzją o zmianie.',
              },
              {
                label: 'Ulgę',
                desc: '„Nie jestem z tym sama" — poczucie wsparcia, porządku i rozumienia przez kogoś, kto naprawdę to rozumie.',
              },
              {
                label: 'Sprawczość',
                desc: '„Wiem co dalej, mam plan, wiem jak sprawdzać głębokość wody zamiast skakać na główkę".',
              },
              {
                label: 'Pewność siebie',
                desc: 'Realniejsze spojrzenie na swoją wartość — odkryjesz zasoby, które zdobyłaś w czasie przerwy.',
              },
              {
                label: 'Bezpieczeństwo',
                desc: 'Poczucie „zaopiekowania" w procesie zmiany — nie błądzisz sama, ktoś idzie z Tobą krok po kroku.',
              },
              {
                label: 'Jasność',
                desc: 'Konkretna decyzja — wrócić do starej pracy czy obrać nową ścieżkę — podjęta świadomie, nie pod presją.',
              },
            ].map((item, i) => (
              <FadeInSection key={i} delay={i * 0.07}>
                <div className="bg-beige rounded-xl p-5 h-full">
                  <p className="font-bold text-gold text-base mb-2">{item.label}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 5 SPOTKAŃ ===== */}
      <section id="program" className="bg-beige section-padding scroll-mt-20">
        <div className="container-width">
          <FadeInSection className="text-center mb-12">
            <p className="section-label">Program</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A]">
              5 spotkań. 5 tygodni. Jeden świadomy plan.
            </h2>
          </FadeInSection>

          <div className="max-w-3xl mx-auto space-y-4 mb-12">
            {[
              {
                num: '1',
                week: 'Tydzień 1',
                title: 'Mapa Twojej sytuacji',
                desc: 'Nazywasz swój punkt startowy i emocje związane z powrotem — bez pośpiechu. Tworzymy mapę, która pokazuje skąd startujesz i dokąd chcesz iść. Wychodzisz z poczuciem, że sytuacja jest poukładana, nie chaotyczna.',
                outcomes: ['Pełny obraz sytuacji zawodowej i życiowej', 'Jasność granic i priorytetów', 'Pierwszy krok do podjęcia decyzji „co dalej"'],
              },
              {
                num: '2',
                week: 'Tydzień 2',
                title: 'Analiza opcji i ryzyka',
                desc: 'Obiektywnie porównujemy dwa scenariusze — powrót do starej pracy i obranie nowej drogi. Rozmawiamy o tym, co dla Ciebie znaczy „bezpieczny wybór" jako mamy.',
                outcomes: ['Konkretne narzędzia do porównania opcji', 'Lista warunków do negocjacji z pracodawcą', 'Spokojne spojrzenie na ryzyko bez paniki'],
              },
              {
                num: '3',
                week: 'Tydzień 3',
                title: 'Analiza doświadczeń: Twoje zasoby',
                desc: 'Analizujesz swoje doświadczenia zawodowe i życiowe. Odkrywasz ukryte zasoby i mocne strony — bez osądu, z pełną akceptacją. To fundament pewności siebie.',
                outcomes: ['Jasny obraz swoich mocnych stron', 'Rozumienie wartości czasu przerwy', 'Gotowość do kolejnych kroków'],
              },
              {
                num: '4',
                week: 'Tydzień 4',
                title: 'Odśwież CV i zabłyśnij po przerwie',
                desc: 'Odświeżamy CV tak, by podkreślało Twoje atuty po przerwie. Dostosowujemy treść pod systemy ATS i dodajemy unikalne historie sukcesu. CV staje się Twoim punktem wyjścia.',
                outcomes: ['Zaktualizowane, autentyczne CV', 'Przerwa macierzyńska jako atut, nie dziura', 'Dokument gotowy pod ATS i pod rekrutera'],
              },
              {
                num: '5',
                week: 'Tydzień 5',
                title: 'Decyzja i pierwszy krok',
                desc: 'Zamykamy 4 tygodnie pracy z klarowną decyzją i konkretnym planem na 30 dni. Wychodzisz z pierwszym krokiem i poczuciem kontroli.',
                outcomes: ['Świadoma decyzja — wrócić czy zmienić', 'Plan działania na najbliższe 30 dni', 'Materiały do pracy własnej na każdy etap'],
              },
            ].map((step) => (
              <FadeInSection key={step.num}>
                <div className="bg-white rounded-2xl p-7 shadow-sm">
                  <div className="flex items-start gap-5">
                    <span className="w-10 h-10 bg-gold text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                      {step.num}
                    </span>
                    <div className="flex-1">
                      <p className="text-xs text-gold font-semibold uppercase tracking-wider mb-1">
                        {step.week}
                      </p>
                      <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">{step.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-4">{step.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {step.outcomes.map((outcome, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1.5 text-xs bg-beige text-gray-600 px-3 py-1.5 rounded-full"
                          >
                            <CheckCircle size={11} className="text-gold flex-shrink-0" />
                            {outcome}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>

          {/* Package box */}
          <FadeInSection className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl overflow-hidden border-2 border-gold shadow-lg">
              <div className="bg-gold text-white text-xs font-semibold uppercase tracking-widest text-center py-2">
                Program Wróć Pewniejsza
              </div>
              <div className="p-8">
                <div className="space-y-3 mb-8">
                  {[
                    '5 indywidualnych spotkań × 60 minut',
                    'Jedno spotkanie tygodniowo — elastycznie dopasowane',
                    'Narzędzia do pracy własnej po każdym spotkaniu',
                    'Wsparcie przez cały 5-tygodniowy proces',
                    'Wszystkie spotkania online — możesz uczestniczyć z domu',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle size={16} className="text-gold flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-beige rounded-xl p-5 mb-6">
                  <p className="text-sm text-gray-500 leading-relaxed italic">
                    „Nie narzucam odpowiedzi. Pytam, słucham, wspieram — żebyś sama
                    znalazła rozwiązanie. Ty decydujesz, jaki kierunek obierasz."
                  </p>
                  <p className="text-xs text-gray-400 mt-2">— Ewelina Dyjak</p>
                </div>
              </div>
              <div className="border-t border-warm p-6 flex items-center justify-between bg-beige/30">
                <div>
                  <p className="text-xs text-gray-400 mb-0.5">Twoja inwestycja</p>
                  <p className="text-3xl font-bold text-[#1A1A1A]">890 zł</p>
                </div>
                <Link href="/kontakt" className="btn-primary inline-flex items-center gap-2">
                  Umów się
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ===== OPINIA ===== */}
      <section className="bg-white section-padding">
        <div className="container-width">
          <FadeInSection className="max-w-3xl mx-auto">
            <article className="bg-beige rounded-2xl p-8 lg:p-10">
              <Quote size={36} className="text-gold/20 fill-gold/10 mb-6" />
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                „Na konsultację kariery u Eweliny trafiłam szukając pomocy w powrocie
                na rynek pracy po podwójnym urlopie macierzyńskim. Ze spotkania na
                spotkanie zauważyłam stopniową zmianę swojego podejścia odnośnie
                szukania pracy i oceny moich kwalifikacji i kompetencji. Po kilkuletnim
                wykluczeniu z rynku pracy Ewelina w naturalny, ale bardzo celowany
                i umiejętny sposób wpłynęła na zmianę mojej postawy i zmotywowała mnie
                do działania. Jest to profesjonalistka — ciepła, empatyczna, wsłuchuje
                się w potrzeby i dopasowuje do oczekiwań. Z całego serca polecam."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <span className="text-gold font-bold text-lg">N</span>
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={13} className="text-gold fill-gold" />
                    ))}
                  </div>
                  <p className="font-semibold text-[#1A1A1A] text-sm">Natalia Jędrzejewska</p>
                  <p className="text-gray-400 text-xs">Doradca i opiekun klienta, Sommelier</p>
                </div>
              </div>
            </article>
          </FadeInSection>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="bg-beige section-padding">
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
                <details className="group bg-white rounded-xl overflow-hidden border border-warm/60">
                  <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer font-semibold text-[#1A1A1A] text-sm leading-snug list-none select-none hover:text-gold transition-colors duration-200">
                    {faq.q}
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-beige flex items-center justify-center text-gray-500 group-open:rotate-45 transition-transform duration-200 text-lg leading-none">
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
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-5">
              Zrób ten jeden krok dla siebie
            </h2>
            <p className="text-white/80 text-lg mb-3 max-w-xl mx-auto">
              Bezpłatna rozmowa (~20 min) — opowiadasz o swojej sytuacji, ja pokazuję
              co możemy razem zrobić. Bez presji, bez zobowiązań.
            </p>
            <p className="text-white/60 text-sm mb-10">
              Ty decydujesz, jaki kierunek obierasz. Ja jestem tu, żeby wspierać.
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
