import type { Metadata } from 'next'
import Link from 'next/link'
import { Compass, Sparkles, ArrowUpRight, Mail, Phone, MapPin, Clock, Facebook, Instagram } from 'lucide-react'
import Image from 'next/image'
import FadeInSection from '@/components/FadeInSection'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import StatsCounter from '@/components/StatsCounter'

export const metadata: Metadata = {
  title: 'Konsultantka Kariery — Ewelina Dyjak | Doradztwo zawodowe',
  description:
    'Pomagam w świadomym zarządzaniu karierą, budowaniu pewności siebie i podejmowaniu trafnych decyzji zawodowych. Konsultacje kariery online i w Lublinie.',
  keywords: [
    'konsultantka kariery',
    'doradztwo zawodowe',
    'coaching kariery',
    'zmiana pracy',
    'przebranżowienie',
    'pewność siebie w karierze',
    'Lublin',
  ],
  openGraph: {
    title: 'Konsultantka Kariery — Ewelina Dyjak',
    description: 'Uczę pewności siebie w zarządzaniu swoją karierą',
    url: 'https://konsultantkakariery.pl',
    siteName: 'Konsultantka Kariery',
    locale: 'pl_PL',
    type: 'website',
  },
}

const blogPosts = [
  {
    slug: 'zmiana-pracy-bez-chaosu',
    title: 'Zmiana pracy bez chaosu – od czego naprawdę warto zacząć',
    date: '28 października 2025',
    excerpt:
      'Chcesz zmienić pracę, ale nie wiesz od czego zacząć? Dowiedz się, jak krok po kroku zaplanować zmianę zawodową bez niepotrzebnego stresu.',
  },
  {
    slug: 'gdy-praca-przestaje-pasowac',
    title: 'Gdy praca przestaje pasować: sygnały, których nie warto ignorować',
    date: '28 października 2025',
    excerpt:
      'Czy Twoja praca naprawdę Ci służy? Poznaj sygnały — fizyczne, emocjonalne i zawodowe — które mogą wskazywać, że czas na zmianę.',
  },
  {
    slug: 'pewnosc-siebie-w-karierze',
    title: 'Pewność siebie w karierze – jak ją budować w oparciu o fakty, nie presję',
    date: '28 października 2025',
    excerpt:
      'Pewność siebie w pracy to nie cecha wrodzona, a umiejętność. Dowiedz się, jak ją budować na solidnych fundamentach.',
  },
  {
    slug: 'swiadome-decyzje-zawodowe',
    title: 'Świadome decyzje zawodowe: jak wybrać kierunek zgodny ze sobą',
    date: '28 października 2025',
    excerpt:
      'Jak podejmować decyzje zawodowe, które są naprawdę Twoje? Odkryj metodę opartą na wartościach, umiejętnościach i stylu życia.',
  },
]

const pillars = [
  {
    icon: Compass,
    title: 'Świadome decyzje zawodowe',
    description:
      'Pomagam uporządkować myśli, nazwać potrzeby i podjąć decyzje zawodowe w zgodzie ze sobą.',
  },
  {
    icon: Sparkles,
    title: 'Pewność siebie i kompetencje',
    description:
      'Wzmacniam wiarę w siebie i uczę, jak mówić o swoich umiejętnościach z przekonaniem.',
  },
  {
    icon: ArrowUpRight,
    title: 'Zmiana i rozwój kariery',
    description:
      'Przeprowadzam przez proces zmiany pracy, branży lub powrotu na rynek pracy.',
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Zatrzymujemy się i porządkujemy Twoją sytuację',
    description:
      'Przyglądamy się Twojej aktualnej sytuacji zawodowej bez ocen i presji. Pomagam nazwać to, co naprawdę Cię blokuje, co Cię męczy i czego w pracy już nie chcesz. To moment, w którym chaos zamienia się w pierwszą klarowność.',
    image: '/gfx/ewelina_5.jpg',
  },
  {
    number: '02',
    title: 'Odkrywamy kierunek i Twoje zasoby',
    description:
      'Wspólnie identyfikujemy Twoje mocne strony, kompetencje i wartości, które mają realne znaczenie na rynku pracy. Sprawdzamy możliwe kierunki rozwoju i wybieramy te, które są zgodne z Tobą i Twoim stylem życia. Tu zaczyna się odzyskiwanie pewności siebie.',
    image: '/gfx/ewelina_6.jpg',
  },
  {
    number: '03',
    title: 'Przekładamy decyzje na konkretne działania',
    description:
      'Tworzymy realny plan dalszych kroków — bez skoków na głęboką wodę i bez chaosu. Pokazuję, jak działać mądrze: jak szukać pracy, jak się przygotować do rozmów i jak świadomie zarządzać swoją karierą. Zostajesz z planem, który możesz wdrożyć tu i teraz.',
    image: '/gfx/ewelina_7.jpg',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="bg-cream section-padding overflow-hidden">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text */}
            <FadeInSection direction="left">
              <div className="max-w-xl">
                <p className="section-label">Konsultantka Kariery</p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] leading-tight mb-6">
                  Uczę pewności siebie w zarządzaniu{' '}
                  <span className="text-gold">swoją karierą</span>
                </h1>
                <p className="text-gray-500 text-lg leading-relaxed mb-10">
                  Pomagam w świadomym zarządzaniu karierą, budowaniu pewności siebie
                  i podejmowaniu trafnych decyzji zawodowych. Wspieram w momentach
                  zmiany i rozwoju, pomagając uporządkować kierunek, wzmocnić pozycję
                  zawodową i działać w zgodzie z własnymi wartościami.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/kontakt" className="btn-primary text-center">
                    Umów konsultację
                  </Link>
                  <Link href="/uslugi" className="btn-outline text-center">
                    Zobacz usługi
                  </Link>
                </div>
              </div>
            </FadeInSection>

            {/* Image */}
            <FadeInSection direction="right" delay={0.2}>
              <div className="relative">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden w-full max-w-sm mx-auto lg:max-w-none">
                  <Image
                    src="/gfx/ewelina_1.jpg"
                    alt="Ewelina Dyjak — Konsultantka Kariery"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 384px, 50vw"
                    priority
                  />
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gold/10 rounded-2xl -z-10" />
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-beige rounded-full -z-10" />
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ===== KIM JESTEM ===== */}
      <section className="bg-white section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image left */}
            <FadeInSection direction="left">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden w-full">
                <Image
                  src="/gfx/ewelina_2.jpg"
                  alt="Ewelina Dyjak podczas konsultacji kariery"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeInSection>

            {/* Text right */}
            <FadeInSection direction="right" delay={0.1}>
              <div>
                <p className="section-label">Kim jestem</p>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-6 leading-tight">
                  Pomagam odnaleźć kierunek w zmianie zawodowej
                </h2>
                <p className="text-gray-500 leading-relaxed mb-8 text-lg">
                  Towarzyszę osobom, które chcą świadomie zarządzać swoją karierą
                  i podejmować decyzje zawodowe w zgodzie ze sobą. Wspieram w
                  porządkowaniu myśli, odkrywaniu mocnych stron i budowaniu pewności
                  siebie potrzebnej do realnej zmiany.
                </p>
                <Link href="/uslugi" className="btn-primary inline-block">
                  Zobacz usługi
                </Link>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ===== 3 FILARY ===== */}
      <section className="bg-beige section-padding">
        <div className="container-width">
          <FadeInSection className="text-center mb-16">
            <p className="section-label">Jak pomagam</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A]">
              Trzy obszary wsparcia
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon
              return (
                <FadeInSection key={index} delay={index * 0.15}>
                  <div className="card h-full">
                    <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-6">
                      <Icon size={24} className="text-gold" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4">
                      {pillar.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed">{pillar.description}</p>
                  </div>
                </FadeInSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* ===== MOJA PASJA ===== */}
      <section className="bg-cream section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text */}
            <FadeInSection direction="left">
              <div>
                <p className="section-label">Moja misja</p>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-6 leading-tight">
                  Wspieranie innych w procesie zmian zawodowych jest moją pasją
                </h2>
                <p className="text-gray-500 leading-relaxed mb-6 text-lg">
                  Pomagam osobom, które chcą świadomie zarządzać swoją karierą,
                  odzyskać pewność siebie i podjąć decyzje zawodowe zgodne z ich
                  wartościami, doświadczeniem i stylem życia.
                </p>
                <p className="text-[#1A1A1A] font-semibold leading-relaxed mb-8">
                  Jestem konsultantką kariery i coachem kariery z wieloletnim
                  doświadczeniem w pracy z osobami na różnych etapach życia
                  zawodowego. Pomagam odkrywać mocne strony, porządkować cele
                  i budować pewność siebie potrzebną do zmiany.
                </p>
                <Link href="/o-mnie" className="btn-primary inline-block">
                  O mnie
                </Link>
              </div>
            </FadeInSection>

            {/* Image */}
            <FadeInSection direction="right" delay={0.1}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden w-full">
                <Image
                  src="/gfx/ewelina_3.jpg"
                  alt="Ewelina Dyjak — pasja do pracy z ludźmi w zmianie kariery"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ===== STATYSTYKI ===== */}
      <section className="bg-beige section-padding">
        <div className="container-width">
          <FadeInSection className="text-center mb-16">
            <p className="section-label">W liczbach</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A]">
              Doświadczenie, które działa
            </h2>
          </FadeInSection>
          <FadeInSection delay={0.1}>
            <StatsCounter />
          </FadeInSection>
        </div>
      </section>

      {/* ===== PROCES ===== */}
      <section className="bg-white section-padding">
        <div className="container-width">
          <FadeInSection className="text-center mb-16">
            <p className="section-label">Jak pracuję</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A]">
              Świadoma zmiana kariery to proces
            </h2>
          </FadeInSection>

          <div className="space-y-20 lg:space-y-28">
            {processSteps.map((step, index) => (
              <FadeInSection key={index} delay={0.1}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:[direction:rtl]' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:[direction:ltr]' : ''}>
                    <div className="text-8xl font-bold text-brand-blue/20 leading-none mb-4 select-none">
                      {step.number}
                    </div>
                    <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed text-lg">
                      {step.description}
                    </p>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:[direction:ltr]' : ''}>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden w-full">
                      <Image
                        src={step.image}
                        alt={`Ewelina Dyjak — etap ${step.number} procesu kariery`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="bg-beige section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeInSection>
              <div>
                <p className="section-label">Pierwszy krok</p>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-6 leading-tight">
                  Nie musisz wiedzieć wszystkiego od razu
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-4">
                  Wystarczy, że zrobisz pierwszy krok.
                </p>
                <p className="text-gray-500 leading-relaxed mb-10">
                  Podczas bezpłatnej rozmowy wstępnej przyjrzymy się Twojej sytuacji
                  i sprawdzimy, jakie formy wsparcia będą dla Ciebie najlepsze.
                </p>
                <Link href="/kontakt" className="btn-primary inline-block">
                  Umów konsultację
                </Link>
              </div>
            </FadeInSection>
            <FadeInSection direction="right" delay={0.1}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden w-full">
                <Image
                  src="/gfx/ewelina_4.jpg"
                  alt="Ewelina Dyjak — umów pierwszą konsultację kariery"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ===== OPINIE ===== */}
      <section className="bg-white section-padding">
        <div className="container-width">
          <FadeInSection className="text-center mb-16">
            <p className="section-label">Gwarancja satysfakcji</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A]">
              Opinie moich Klientów
            </h2>
          </FadeInSection>
          <FadeInSection delay={0.1}>
            <TestimonialsCarousel />
          </FadeInSection>
          <FadeInSection className="text-center mt-12" delay={0.2}>
            <Link href="/klienci" className="btn-outline inline-block">
              Zobacz wszystkie opinie
            </Link>
          </FadeInSection>
        </div>
      </section>

      {/* ===== KONTAKT MINI ===== */}
      <section className="bg-beige section-padding">
        <div className="container-width">
          <FadeInSection className="text-center mb-16">
            <p className="section-label">Kontakt</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A]">
              Odezwij się do mnie
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: Mail,
                label: 'Email',
                value: 'doradztwo.coaching@gmail.com',
                href: 'mailto:doradztwo.coaching@gmail.com',
              },
              {
                icon: Phone,
                label: 'Telefon',
                value: '+48 603 614 521',
                href: 'tel:+48603614521',
              },
              {
                icon: MapPin,
                label: 'Lokalizacja',
                value: 'Lublin',
                href: undefined,
              },
              {
                icon: Clock,
                label: 'Godziny',
                value: 'Pon – Pt, 9:00–17:00',
                href: undefined,
              },
            ].map((item, index) => {
              const Icon = item.icon
              const content = (
                <FadeInSection key={index} delay={index * 0.1}>
                  <div className="card flex flex-col items-center text-center gap-4 py-8">
                    <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
                      <Icon size={22} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">{item.label}</p>
                      <p className="font-medium text-[#1A1A1A] text-sm">{item.value}</p>
                    </div>
                  </div>
                </FadeInSection>
              )

              return item.href ? (
                <a
                  key={index}
                  href={item.href}
                  className="group hover:no-underline"
                  aria-label={`${item.label}: ${item.value}`}
                >
                  {content}
                </a>
              ) : (
                <div key={index}>{content}</div>
              )
            })}
          </div>

          {/* Social + CTA */}
          <FadeInSection className="flex flex-col sm:flex-row items-center justify-center gap-6" delay={0.3}>
            <a
              href="https://www.facebook.com/ewelinadyjakkariera"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-gold transition-colors"
              aria-label="Facebook Eweliny Dyjak"
            >
              <Facebook size={20} />
              <span className="text-sm font-medium">Facebook</span>
            </a>
            <a
              href="https://www.instagram.com/konsultantka.kariery/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-gold transition-colors"
              aria-label="Instagram Eweliny Dyjak"
            >
              <Instagram size={20} />
              <span className="text-sm font-medium">Instagram</span>
            </a>
            <span className="hidden sm:block w-px h-6 bg-warm" />
            <Link href="/kontakt" className="btn-primary">
              Napisz do mnie
            </Link>
          </FadeInSection>
        </div>
      </section>

      {/* ===== BLOG PREVIEW ===== */}
      <section className="bg-white section-padding">
        <div className="container-width">
          <FadeInSection className="text-center mb-16">
            <p className="section-label">Rozwijaj ambicje</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A]">
              Moje teksty o zarządzaniu karierą
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <FadeInSection key={post.slug} delay={index * 0.1}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block bg-white border border-warm rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300"
                >
                  {/* TODO: Zamień na prawdziwe zdjęcie */}
                  <div className="bg-beige aspect-[16/9] flex items-center justify-center relative overflow-hidden">
                    <div className="flex flex-col items-center gap-2 text-gray-400">
                      <span className="text-xs font-medium uppercase tracking-widest text-gold/60">
                        Blog
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-warm/40 to-beige/60" />
                  </div>
                  <div className="p-6">
                    <p className="text-xs text-gray-400 mb-3">{post.date}</p>
                    <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3 group-hover:text-gold transition-colors duration-200 leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <span className="text-gold text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      Czytaj więcej
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                </Link>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection className="text-center mt-12" delay={0.2}>
            <Link href="/blog" className="btn-outline inline-block">
              Wszystkie wpisy
            </Link>
          </FadeInSection>
        </div>
      </section>
    </>
  )
}
