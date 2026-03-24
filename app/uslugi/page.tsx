import type { Metadata } from 'next'
import Link from 'next/link'
import { MessageSquare, Layers, Briefcase, CheckCircle, ArrowRight } from 'lucide-react'
import FadeInSection from '@/components/FadeInSection'

export const metadata: Metadata = {
  title: 'Usługi — Konsultacje kariery i coaching | Ewelina Dyjak',
  description:
    'Konsultacja kariery, pakiet rozwoju zawodowego, przygotowanie do zmiany pracy. Sprawdź ofertę Eweliny Dyjak — konsultantki kariery z Lublina.',
  openGraph: {
    title: 'Usługi — Konsultacje kariery i coaching | Ewelina Dyjak',
    description:
      'Indywidualne konsultacje kariery, coaching zawodowy i przygotowanie do zmiany pracy. Wsparcie online i w Lublinie.',
    url: 'https://konsultantkakariery.pl/uslugi',
  },
  alternates: { canonical: 'https://konsultantkakariery.pl/uslugi' },
}

const services = [
  {
    icon: MessageSquare,
    title: 'Konsultacja kariery',
    subtitle: 'Jednorazowe spotkanie',
    forWho: 'Dla osób potrzebujących porady w konkretnej sprawie',
    duration: '60–90 min | Online',
    description:
      'Jeśli masz konkretne pytanie lub problem zawodowy i chcesz uzyskać szybką, profesjonalną poradę — ta usługa jest dla Ciebie. Analizuję Twoją aktualną sytuację, wskazuję możliwe ścieżki działania i pomagam stworzyć pierwszy plan kroków.',
    includes: [
      'Analiza Twojej aktualnej sytuacji zawodowej',
      'Odpowiedzi na konkretne pytania i wątpliwości',
      'Wskazówki dotyczące kolejnych kroków',
      'Wstępny plan działania na najbliższe tygodnie',
      'Podsumowanie po spotkaniu',
    ],
    ideal: [
      'Planujesz zmianę pracy i nie wiesz od czego zacząć',
      'Masz problem z CV lub profilem LinkedIn',
      'Chcesz przygotować się do konkretnej rozmowy kwalifikacyjnej',
      'Potrzebujesz opinii eksperta na temat swojej ścieżki kariery',
    ],
  },
  {
    icon: Layers,
    title: 'Pakiet rozwoju kariery',
    subtitle: 'Cykl spotkań',
    forWho: 'Dla osób chcących głębiej popracować nad swoją karierą',
    duration: '3–5 spotkań | Online',
    description:
      'To moja flagowa oferta dla osób, które chcą przeprowadzić prawdziwą, głęboką zmianę. W trakcie cyklu spotkań odkrywamy razem Twoje mocne strony, wartości i kompetencje, budujemy pewność siebie i tworzymy konkretny, realny plan zawodowy.',
    includes: [
      'Dogłębna analiza Twojej sytuacji, celów i zasobów',
      'Odkrywanie mocnych stron i wartości zawodowych',
      'Budowanie pewności siebie i wiary we własne kompetencje',
      'Określenie kierunków rozwoju i ścieżek kariery',
      'Plan przebranżowienia lub awansu',
      'Narzędzia do samodzielnej pracy między sesjami',
      'Wsparcie e-mailowe między spotkaniami',
    ],
    ideal: [
      'Czujesz, że Twoja praca przestała Ci pasować',
      'Chcesz zmienić branżę lub zawód',
      'Wracasz na rynek pracy po przerwie',
      'Czujesz się zagubiony/a w swojej karierze',
      'Chcesz zbudować pewność siebie w pracy',
    ],
    highlighted: true,
  },
  {
    icon: Briefcase,
    title: 'Przygotowanie do zmiany pracy',
    subtitle: 'Wsparcie praktyczne',
    forWho: 'Dla osób aktywnie szukających nowej pracy',
    duration: '2–4 spotkania | Online',
    description:
      'Skupiamy się na konkretnych, praktycznych działaniach, które pomogą Ci skutecznie szukać pracy i wypaść jak najlepiej na rozmowach kwalifikacyjnych. Pracuję z Tobą nad CV, profilem LinkedIn i strategią poszukiwania ofert.',
    includes: [
      'Audyt i optymalizacja CV pod konkretne stanowisko',
      'Optymalizacja profilu LinkedIn',
      'Strategia szukania pracy (gdzie szukać, jak podejść)',
      'Przygotowanie do rozmów kwalifikacyjnych',
      'Praca nad odpowiedziami na trudne pytania rekruterów',
      'Budowanie pewności siebie przed rozmową',
    ],
    ideal: [
      'Szukasz nowej pracy i chcesz to zrobić skutecznie',
      'Masz problemy z przejściem etapów rekrutacji',
      'Wracasz na rynek pracy po dłuższej przerwie',
      'Zmieniasz branżę i chcesz dobrze się zaprezentować',
    ],
  },
]

export default function UslugiPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="bg-beige section-padding">
        <div className="container-width">
          <FadeInSection className="max-w-2xl">
            <p className="section-label">Oferta</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#1A1A1A] leading-tight mb-6">
              Jak mogę Ci pomóc?
            </h1>
            <p className="text-gray-500 text-xl leading-relaxed">
              Moje klientki i klienci to osoby gotowe podjąć pracę nad sobą,
              zmienić swoje życie zawodowe lub rozwijać się w nowym kierunku.
              Wybierz formę wsparcia dopasowaną do Twojej sytuacji.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* ===== USŁUGI ===== */}
      <section className="bg-white section-padding">
        <div className="container-width">
          <div className="space-y-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <FadeInSection key={index} delay={index * 0.1}>
                  <article
                    className={`rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
                      service.highlighted
                        ? 'border-gold shadow-lg'
                        : 'border-warm shadow-sm hover:shadow-md hover:border-gold/30'
                    }`}
                  >
                    {service.highlighted && (
                      <div className="bg-gold text-white text-xs font-semibold uppercase tracking-widest text-center py-2">
                        Najpopularniejsze
                      </div>
                    )}
                    <div className="p-8 lg:p-12">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        {/* Left: Overview */}
                        <div className="lg:col-span-1">
                          <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center mb-6">
                            <Icon size={28} className="text-gold" />
                          </div>
                          <p className="text-gold text-xs font-semibold uppercase tracking-wider mb-2">
                            {service.subtitle}
                          </p>
                          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-3">
                            {service.title}
                          </h2>
                          <p className="text-sm text-gray-400 mb-4 flex items-center gap-2">
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold" />
                            {service.duration}
                          </p>
                          <p className="text-gray-500 leading-relaxed text-sm">
                            {service.description}
                          </p>
                          <div className="mt-8">
                            <Link href="/kontakt" className="btn-primary inline-flex items-center gap-2">
                              Umów się
                              <ArrowRight size={16} />
                            </Link>
                          </div>
                        </div>

                        {/* Right: Details */}
                        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div>
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
                              Co obejmuje
                            </h3>
                            <ul className="space-y-3">
                              {service.includes.map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                  <CheckCircle
                                    size={16}
                                    className="text-gold flex-shrink-0 mt-0.5"
                                  />
                                  <span className="text-gray-600 text-sm leading-relaxed">
                                    {item}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
                              Dla kogo
                            </h3>
                            <ul className="space-y-3">
                              {service.ideal.map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                  <span className="text-gold mt-1.5 flex-shrink-0">→</span>
                                  <span className="text-gray-600 text-sm leading-relaxed">
                                    {item}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </FadeInSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* ===== NIE WIESZ CO WYBRAĆ ===== */}
      <section className="bg-beige section-padding">
        <div className="container-width">
          <FadeInSection className="max-w-2xl mx-auto text-center">
            <p className="section-label">Masz wątpliwości?</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-6">
              Nie wiesz, co wybrać?
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-10">
              Umów bezpłatną rozmowę wstępną — wspólnie ustalimy, jaka forma
              współpracy będzie dla Ciebie najlepsza. Nie musisz wiedzieć wszystkiego
              z góry, żeby zrobić pierwszy krok.
            </p>
            <Link href="/kontakt" className="btn-primary inline-block">
              Umów bezpłatną rozmowę
            </Link>
          </FadeInSection>
        </div>
      </section>
    </>
  )
}
