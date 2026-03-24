import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Heart,
  Target,
  Wrench,
  TrendingUp,
  CheckCircle,
  MapPin,
  Clock,
} from 'lucide-react'
import Image from 'next/image'
import FadeInSection from '@/components/FadeInSection'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'O mnie — Ewelina Dyjak | Konsultantka Kariery',
  description:
    'Poznaj Ewelinę Dyjak — konsultantkę kariery i coacha z 7+ letnim doświadczeniem. Pomagam w świadomej zmianie zawodowej, odkrywaniu mocnych stron i budowaniu pewności siebie.',
  openGraph: {
    title: 'O mnie — Ewelina Dyjak | Konsultantka Kariery',
    description:
      'Poznaj Ewelinę Dyjak — konsultantkę kariery z wieloletnim doświadczeniem w pracy z osobami na różnych etapach życia zawodowego.',
    url: 'https://konsultantkakariery.pl/o-mnie',
  },
  alternates: { canonical: 'https://konsultantkakariery.pl/o-mnie' },
}

const values = [
  {
    icon: Heart,
    title: 'Indywidualne podejście',
    description:
      'Każda osoba jest inna — dlatego dostosowuję swój sposób pracy do Twojej sytuacji, potrzeb i tempa. Nie ma tu miejsca na szablonowe rozwiązania.',
  },
  {
    icon: Target,
    title: 'Empatia i uważność',
    description:
      'Towarzyszę moim klientom z pełną uwagą i bez oceniania. Ważne jest dla mnie, abyś czuł/a się bezpiecznie i mógł/mogła mówić otwarcie o tym, co naprawdę Ci towarzyszy.',
  },
  {
    icon: Wrench,
    title: 'Narzędzia coachingowe',
    description:
      'Korzystam ze sprawdzonych metod i narzędzi coachingowych, które pomagają odkrywać zasoby, porządkować myśli i przekładać cele na konkretne działania.',
  },
  {
    icon: TrendingUp,
    title: 'Znajomość rynku pracy',
    description:
      'Łączę pracę z narzędziami coachingowymi z realną wiedzą o rynku pracy — rekrutacji, trendach zawodowych i tym, czego szukają pracodawcy.',
  },
]

const strengths = [
  'Praca z osobami w kryzysie zawodowym i wypaleniu',
  'Zmiana branży lub stanowiska',
  'Powrót na rynek pracy (np. po urlopie macierzyńskim)',
  'Budowanie pewności siebie w karierze',
  'Przygotowanie do rozmów kwalifikacyjnych',
  'Odkrywanie mocnych stron i wartości zawodowych',
  'Tworzenie planów przebranżowienia',
  'Zarządzanie własną ścieżką kariery',
]

export default function OmniePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="bg-beige section-padding">
        <div className="container-width">
          <Breadcrumbs items={[{ label: 'O mnie', href: '/o-mnie' }]} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeInSection direction="left">
              <div>
                <p className="section-label">O mnie</p>
                <h1 className="text-4xl sm:text-5xl font-bold text-[#1A1A1A] leading-tight mb-6">
                  Ewelina Dyjak —{' '}
                  <span className="text-gold">Konsultantka Kariery</span>
                </h1>
                <p className="text-gray-500 text-lg leading-relaxed mb-6">
                  Jestem konsultantką kariery i coachem z ponad 7-letnim
                  doświadczeniem. Przez ten czas przeprowadziłam ponad 1000 godzin
                  konsultacji z osobami na różnych etapach życia zawodowego.
                </p>
                <div className="flex items-center gap-3 text-gray-400 text-sm mb-2">
                  <MapPin size={16} className="text-gold flex-shrink-0" />
                  <span>Lublin | Konsultacje online w całej Polsce</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400 text-sm">
                  <Clock size={16} className="text-gold flex-shrink-0" />
                  <span>Pon – Pt, 9:00–17:00</span>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection direction="right" delay={0.15}>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden w-full max-w-sm mx-auto lg:max-w-none">
                <Image
                  src="/gfx/ewelina_8.jpg"
                  alt="Ewelina Dyjak — Konsultantka Kariery, Lublin"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 384px, 50vw"
                  priority
                />
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ===== MOJA HISTORIA ===== */}
      <section className="bg-white section-padding">
        <div className="container-width">
          <div className="max-w-3xl mx-auto">
            <FadeInSection>
              <p className="section-label text-center">Moja historia</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] text-center mb-12">
                Skąd wziął się mój wybór?
              </h2>
            </FadeInSection>

            <FadeInSection delay={0.1}>
              <div className="prose prose-lg max-w-none text-gray-500 space-y-6">
                <p className="leading-relaxed text-lg">
                  Praca z ludźmi zawsze była dla mnie czymś więcej niż zawodem.
                  Przez lata obserwowałam, jak wiele osób tkwi w pracy, która ich
                  nie satysfakcjonuje — nie dlatego, że brakuje im możliwości, ale
                  dlatego, że brakuje im narzędzi, by świadomie pokierować swoją
                  ścieżką zawodową.
                </p>
                <p className="leading-relaxed text-lg">
                  Specjalizuję się w pracy z osobami, które stoją przed ważną
                  decyzją zawodową — czy to zmianą pracy, zmianą branży, powrotem
                  na rynek pracy po przerwie, czy po prostu pragnieniem, by ich
                  kariera miała więcej sensu i dawała więcej satysfakcji.
                </p>
                <p className="leading-relaxed text-lg">
                  Moje podejście łączy narzędzia coachingowe z realną wiedzą o rynku
                  pracy. Pracuję indywidualnie, empatycznie i zawsze koncentruję się
                  na realnych rezultatach — nie na teorii. Zależy mi na tym, żebyś
                  wychodził/wychodziła od naszych spotkań z konkretnym planem i
                  poczuciem sprawczości.
                </p>
                <p className="leading-relaxed text-lg">
                  Działam zarówno stacjonarnie w Lublinie, jak i online — dzięki
                  czemu mogę wspierać osoby z całej Polski, niezależnie od miejsca
                  zamieszkania.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ===== W CZYM POMAGAM ===== */}
      <section className="bg-beige section-padding">
        <div className="container-width">
          <FadeInSection className="text-center mb-16">
            <p className="section-label">Specjalizacja</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A]">
              W czym pomagam
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {strengths.map((item, index) => (
              <FadeInSection key={index} delay={index * 0.07}>
                <div className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm">
                  <CheckCircle size={20} className="text-gold mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MOJE PODEJŚCIE ===== */}
      <section className="bg-white section-padding">
        <div className="container-width">
          <FadeInSection className="text-center mb-16">
            <p className="section-label">Moje podejście</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A]">
              Na czym opiera się moja praca
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <FadeInSection key={index} delay={index * 0.1}>
                  <div className="card h-full">
                    <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-5">
                      <Icon size={24} className="text-gold" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed">{value.description}</p>
                  </div>
                </FadeInSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-brand-blue section-padding">
        <div className="container-width text-center">
          <FadeInSection>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Umów bezpłatną rozmowę wstępną
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
              Podczas bezpłatnej rozmowy przyjrzymy się Twojej sytuacji i ustalimy,
              jaka forma współpracy będzie dla Ciebie najlepsza.
            </p>
            <Link
              href="/kontakt"
              className="bg-white text-gold px-10 py-4 rounded-full font-semibold hover:bg-cream transition-colors duration-200 shadow-md inline-block"
            >
              Umów rozmowę
            </Link>
          </FadeInSection>
        </div>
      </section>
    </>
  )
}
