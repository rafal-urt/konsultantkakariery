import type { Metadata } from 'next'
import Link from 'next/link'
import {
  CheckCircle,
  ArrowRight,
  Briefcase,
  FileText,
  Heart,
} from 'lucide-react'
import FadeInSection from '@/components/FadeInSection'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Usługi — Konsultacje kariery, CV, Wróć Pewniejsza | Ewelina Dyjak',
  description:
    'Wybierz formę wsparcia: konsultacje kariery (od 630 zł), skuteczne CV (250 zł) lub program Wróć Pewniejsza dla mam (890 zł). Ewelina Dyjak — konsultantka kariery, Lublin & online.',
  openGraph: {
    title: 'Usługi — Konsultacje kariery, CV, Wróć Pewniejsza | Ewelina Dyjak',
    description:
      'Trzy różne formy wsparcia dopasowane do Twojej sytuacji zawodowej.',
    url: 'https://konsultantkakariery.pl/uslugi',
  },
  alternates: { canonical: 'https://konsultantkakariery.pl/uslugi' },
}

const services = [
  {
    icon: Briefcase,
    label: 'Konsultacje kariery',
    tagline: 'Zmień pracę albo branżę — ze świadomym planem',
    price: 'od 630 zł',
    duration: '3 lub 6 spotkań × 60 min',
    href: '/uslugi/konsultacje-kariery',
    featured: false,
    forWho: [
      'Czujesz wypalenie lub pracujesz w toksycznym miejscu',
      'Myślisz o zmianie pracy, branży lub przebranżowieniu',
      'Szukasz pracy, ale CV nie przynosi odpowiedzi',
      'Wracasz po przerwie i chcesz odbudować pewność siebie',
    ],
    youGet: [
      'Jasny kierunek zawodowy i plan działania',
      'Strategie szukania pracy i budowania sieci kontaktów',
      'Pakiet rozszerzony: CV, LinkedIn, przygotowanie do rozmów',
    ],
    packages: [
      { name: 'Pakiet A — Plan ścieżki kariery', price: '630 zł', sessions: '3 spotkania' },
      { name: 'Pakiet B — Zdobądź pracę, jaką chcesz', price: '980 zł', sessions: '6 spotkań' },
    ],
  },
  {
    icon: Heart,
    label: 'Wróć Pewniejsza',
    tagline: 'Wróć do pracy na swoich warunkach — pewna siebie i z planem',
    price: '890 zł',
    duration: '5 spotkań × 60 min',
    href: '/uslugi/wroc-pewniejsza',
    featured: true,
    forWho: [
      'Kończysz urlop macierzyński i czujesz presję "wróć, bo trzeba"',
      'Nie wiesz czy wrócić do starej pracy czy szukać nowej',
      'Obawiasz się, że wypadłaś z rynku przez przerwie',
      'Chcesz podjąć świadomą decyzję, nie tylko "jakoś to będzie"',
    ],
    youGet: [
      'Świadoma decyzja — wrócić czy zmienić ścieżkę',
      'Odświeżone CV po przerwie macierzyńskiej',
      'Plan działania na najbliższe 30 dni',
    ],
    packages: [
      { name: 'Program Wróć Pewniejsza', price: '890 zł', sessions: '5 spotkań' },
    ],
  },
  {
    icon: FileText,
    label: 'Twoje skuteczne CV',
    tagline: 'CV, które otwiera drzwi — nie ląduje w koszu',
    price: '250 zł',
    duration: '1 spotkanie + konsultacja mailowa',
    href: '/uslugi/skuteczne-cv',
    featured: false,
    forWho: [
      'Wysyłasz CV, ale nie dostajesz zaproszenia na rozmowy',
      'Zmieniasz branżę lub wracasz po przerwie',
      'Chcesz wiedzieć, jak pisać CV samodzielnie w przyszłości',
    ],
    youGet: [
      'Wiedza o CV pod systemy ATS',
      'Umiejętność opisywania osiągnięć i kompetencji',
      'Dokument gotowy do aplikowania',
    ],
    packages: [
      { name: 'Pakiet CV', price: '250 zł', sessions: '1 spotkanie + mail' },
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
            <Breadcrumbs items={[{ label: 'Usługi', href: '/uslugi' }]} />
            <p className="section-label">Oferta</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#1A1A1A] leading-tight mb-6">
              Które wsparcie jest dla Ciebie?
            </h1>
            <p className="text-gray-500 text-xl leading-relaxed">
              Mam trzy różne formy wsparcia — każda dopasowana do innej sytuacji.
              Sprawdź opisy, wybierz to, co odpowiada Twojej potrzebie. A jeśli
              nie jesteś pewna/y — bezpłatna rozmowa wstępna jest właśnie po to.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* ===== USŁUGI — KARTY ===== */}
      <section className="bg-white section-padding">
        <div className="container-width">
          <div className="space-y-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <FadeInSection key={index} delay={index * 0.08}>
                  <article
                    className={`rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
                      service.featured
                        ? 'border-gold shadow-lg'
                        : 'border-warm shadow-sm hover:shadow-md hover:border-gold/30'
                    }`}
                  >
                    {service.featured && (
                      <div className="bg-gold text-white text-xs font-semibold uppercase tracking-widest text-center py-2">
                        Polecane
                      </div>
                    )}

                    <div className="p-8 lg:p-10">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

                        {/* Left: Overview */}
                        <div className="lg:col-span-1">
                          <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-5">
                            <Icon size={24} className="text-gold" />
                          </div>
                          <p className="text-xs text-gold font-semibold uppercase tracking-wider mb-1">
                            {service.price}
                          </p>
                          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-2">
                            {service.label}
                          </h2>
                          <p className="text-sm text-gray-400 mb-3">{service.duration}</p>
                          <p className="text-gray-500 text-sm leading-relaxed mb-6">
                            {service.tagline}
                          </p>

                          {/* Packages */}
                          <div className="space-y-2 mb-6">
                            {service.packages.map((pkg, i) => (
                              <div
                                key={i}
                                className="flex items-center justify-between bg-beige rounded-lg px-4 py-2.5 text-sm"
                              >
                                <span className="text-gray-600 font-medium">{pkg.name}</span>
                                <span className="text-gold font-bold ml-4 flex-shrink-0">
                                  {pkg.price}
                                </span>
                              </div>
                            ))}
                          </div>

                          <Link
                            href={service.href}
                            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 ${
                              service.featured
                                ? 'bg-gold text-white hover:bg-gold/90 shadow-sm'
                                : 'bg-[#1A1A1A] text-white hover:bg-[#1A1A1A]/90'
                            }`}
                          >
                            Dowiedz się więcej
                            <ArrowRight size={15} />
                          </Link>
                        </div>

                        {/* Right: For who + What you get */}
                        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div>
                            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
                              Dla kogo?
                            </h3>
                            <ul className="space-y-3">
                              {service.forWho.map((item, i) => (
                                <li key={i} className="flex items-start gap-2.5">
                                  <ArrowRight size={14} className="text-gold flex-shrink-0 mt-0.5" />
                                  <span className="text-gray-600 text-sm leading-relaxed">
                                    {item}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
                              Co dostajesz?
                            </h3>
                            <ul className="space-y-3">
                              {service.youGet.map((item, i) => (
                                <li key={i} className="flex items-start gap-2.5">
                                  <CheckCircle size={14} className="text-gold flex-shrink-0 mt-0.5" />
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
      <section className="bg-brand-blue section-padding">
        <div className="container-width">
          <FadeInSection className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Nie wiesz, co wybrać?
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-4">
              Umów bezpłatną rozmowę (~20 min) — opowiadasz o swojej sytuacji,
              a ja zaproponuję, jaka forma wsparcia będzie dla Ciebie najlepsza.
            </p>
            <p className="text-white/60 text-sm mb-10">
              Nie musisz wiedzieć wszystkiego z góry. Wystarczy jeden krok.
            </p>
            <Link
              href="/kontakt"
              className="bg-white text-gold px-10 py-4 rounded-full font-semibold hover:bg-cream transition-colors duration-200 shadow-md inline-block"
            >
              Umów bezpłatną rozmowę
            </Link>
          </FadeInSection>
        </div>
      </section>
    </>
  )
}
