import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  CheckCircle,
  ArrowRight,
  MessageSquare,
  Layers,
  Briefcase,
  MapPin,
  Phone,
  Mail,
} from 'lucide-react'
import FadeInSection from '@/components/FadeInSection'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import StatsCounter from '@/components/StatsCounter'
import { blogPosts } from '@/lib/blog-data'

export const metadata: Metadata = {
  title: 'Konsultantka Kariery — Ewelina Dyjak | Lublin & online',
  description:
    'Pomagam w świadomej zmianie zawodowej, przebranżowieniu i budowaniu pewności siebie w karierze. Konsultacje online w całej Polsce i stacjonarnie w Lublinie.',
  openGraph: {
    title: 'Konsultantka Kariery — Ewelina Dyjak',
    description:
      'Świadoma zmiana zawodowa, przebranżowienie, pewność siebie w karierze. Konsultacje online w całej Polsce.',
    url: 'https://konsultantkakariery.pl',
  },
  alternates: { canonical: 'https://konsultantkakariery.pl' },
}

const painPoints = [
  'Czujesz, że Twoja praca Cię nie satysfakcjonuje, ale nie wiesz, co chcesz robić',
  'Myślisz o zmianie pracy lub branży, ale boisz się, że to za duże ryzyko',
  'Wracasz na rynek pracy po przerwie i nie wiesz, jak się odnaleźć',
  'Masz dość poniedziałkowego lęku i poczucia, że marnujesz swój potencjał',
  'Brakuje Ci pewności siebie podczas rozmów kwalifikacyjnych i negocjacji',
  'Chcesz wreszcie mieć plan — nie tylko marzenia',
]

const processSteps = [
  {
    number: '01',
    title: 'Bezpłatna rozmowa wstępna',
    description:
      'Zaczynamy od 30-minutowej rozmowy, podczas której poznaję Twoją sytuację i sprawdzamy, czy możemy razem pracować. Bez zobowiązań, bez presji.',
  },
  {
    number: '02',
    title: 'Diagnoza i plan działania',
    description:
      'Na pierwszych sesjach głębiej analizujemy Twoje mocne strony, wartości i cele. Razem budujemy konkretny plan — krok po kroku.',
  },
  {
    number: '03',
    title: 'Działanie i zmiana',
    description:
      'Pracujemy systematycznie, aż osiągniesz cel. Każda sesja to konkretne narzędzia i ćwiczenia, które możesz stosować natychmiast.',
  },
]

const services = [
  {
    icon: Briefcase,
    title: 'Konsultacje kariery',
    description:
      'Plan ścieżki kariery (630 zł) lub kompletna zmiana zawodowa (980 zł) — 2 pakiety do wyboru. Od diagnozy mocnych stron po plan działania i wsparcie w rekrutacji.',
    href: '/uslugi#konsultacje-kariery',
    featured: false,
  },
  {
    icon: MessageSquare,
    title: 'Wróć Pewniejsza',
    description:
      'Program dla mam powracających po urlopie macierzyńskim. 5 spotkań, w których pomagam świadomie zdecydować — wrócić do starej pracy czy obrać nową ścieżkę.',
    href: '/uslugi#wroc-pewniejsza',
    featured: true,
  },
  {
    icon: Layers,
    title: 'Twoje skuteczne CV',
    description:
      'Naucz się tworzyć CV, które zwróci uwagę rekrutera. Pracujemy na Twoim dokumencie lub tworzymy od podstaw — wiedza, którą wykorzystasz w każdej rekrutacji.',
    href: '/uslugi#skuteczne-cv',
    featured: false,
  },
]

export default function HomePage() {
  const previewPosts = blogPosts.slice(0, 3)

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="bg-beige section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeInSection direction="left">
              <div className="max-w-xl">
                <p className="section-label">Konsultantka Kariery — Lublin & online</p>
                <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-[#1A1A1A] leading-tight mb-6">
                  Twoja kariera powinna dawać Ci energię —{' '}
                  <span className="text-gold">nie wyczerpywać</span>
                </h1>
                <p className="text-gray-500 text-lg leading-relaxed mb-8">
                  Pomagam osobom w świadomej zmianie zawodowej, odkryciu mocnych stron
                  i odbudowaniu pewności siebie. Konsultacje indywidualne online
                  w całej Polsce i stacjonarnie w Lublinie.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/kontakt" className="btn-primary text-center">
                    Umów bezpłatną rozmowę
                  </Link>
                  <Link href="/uslugi" className="btn-outline text-center">
                    Zobacz ofertę
                  </Link>
                </div>
                <p className="text-sm text-gray-400 mt-4 flex items-center gap-2">
                  <CheckCircle size={15} className="text-gold flex-shrink-0" />
                  Pierwsza rozmowa jest bezpłatna i niezobowiązująca
                </p>
              </div>
            </FadeInSection>

            <FadeInSection direction="right" delay={0.15}>
              <div className="relative w-full max-w-sm mx-auto lg:max-w-none">
                <div className="relative aspect-[4/3] lg:aspect-[3/4] rounded-2xl overflow-hidden">
                  <Image
                    src="/gfx/ewelina_1.jpg"
                    alt="Ewelina Dyjak — Konsultantka Kariery"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 384px, 50vw"
                    priority
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 lg:-left-8 bg-white rounded-2xl shadow-lg p-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={20} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 leading-none mb-0.5">Doświadczenie</p>
                    <p className="text-sm font-semibold text-[#1A1A1A] leading-none">
                      7+ lat i 1000+ godzin sesji
                    </p>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ===== PAIN POINTS ===== */}
      <section className="bg-white section-padding">
        <div className="container-width">
          <FadeInSection className="text-center mb-12">
            <p className="section-label">Rozpoznajesz to?</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] max-w-2xl mx-auto">
              Jeśli masz dość tkwienia w miejscu — to dobrze trafiłeś/aś
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {painPoints.map((point, index) => (
              <FadeInSection key={index} delay={index * 0.07}>
                <div className="flex items-start gap-3 bg-beige rounded-xl p-5 h-full">
                  <ArrowRight size={18} className="text-gold flex-shrink-0 mt-0.5" />
                  <p className="text-gray-600 text-sm leading-relaxed">{point}</p>
                </div>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection>
            <p className="text-center text-gray-500 text-lg max-w-2xl mx-auto">
              Nie musisz sam/sama przez to przechodzić. Pracuję z osobami dokładnie
              w takiej sytuacji — i razem dochodzimy do konkretnych odpowiedzi i działań.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* ===== O MNIE / WIARYGODNOŚĆ ===== */}
      <section className="bg-beige section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeInSection direction="left">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/gfx/ewelina_2.jpg"
                  alt="Ewelina Dyjak — konsultantka kariery podczas sesji"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeInSection>

            <FadeInSection direction="right" delay={0.1}>
              <div>
                <p className="section-label">Kim jestem</p>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-6">
                  Ewelina Dyjak —{' '}
                  <span className="text-gold">konsultantka kariery i coach</span>
                </h2>
                <div className="space-y-4 text-gray-500 text-base leading-relaxed mb-8">
                  <p>
                    Od ponad 7 lat pomagam ludziom odnaleźć się w zawodowym życiu.
                    Przeprowadziłam ponad 1000 godzin indywidualnych konsultacji
                    z osobami na różnych etapach kariery — od pierwszej zmiany pracy,
                    przez wypalenie zawodowe, aż po powrót na rynek po dłuższej przerwie.
                  </p>
                  <p>
                    Łączę narzędzia coachingowe z realną wiedzą o rynku pracy.
                    Nie pracuję na teorii — pracuję na konkretach. Po naszych sesjach
                    wychodzisz z planem, nie tylko z lepszym samopoczuciem.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
                  <MapPin size={15} className="text-gold flex-shrink-0" />
                  Lublin | Konsultacje online w całej Polsce
                </div>
                <Link href="/o-mnie" className="btn-outline inline-flex items-center gap-2">
                  Poznaj mnie bliżej
                  <ArrowRight size={16} />
                </Link>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ===== STATYSTYKI ===== */}
      <section className="bg-brand-blue section-padding">
        <div className="container-width">
          <StatsCounter />
        </div>
      </section>

      {/* ===== PROCES ===== */}
      <section className="bg-white section-padding">
        <div className="container-width">
          <FadeInSection className="text-center mb-16">
            <p className="section-label">Jak pracuję</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] max-w-xl mx-auto">
              Prosta droga od „nie wiem" do konkretnego planu
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <FadeInSection key={index} delay={index * 0.1}>
                <div className="relative bg-beige rounded-2xl p-8 h-full">
                  <span className="text-6xl font-bold text-warm leading-none block mb-6 select-none">
                    {step.number}
                  </span>
                  <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-sm">
                    {step.description}
                  </p>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                      <ArrowRight size={20} className="text-warm" />
                    </div>
                  )}
                </div>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection delay={0.3}>
            <div className="text-center mt-12">
              <Link href="/kontakt" className="btn-primary inline-flex items-center gap-2">
                Zacznijmy od bezpłatnej rozmowy
                <ArrowRight size={16} />
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ===== USŁUGI ===== */}
      <section className="bg-beige section-padding">
        <div className="container-width">
          <FadeInSection className="text-center mb-16">
            <p className="section-label">Oferta</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A]">
              Wybierz formę współpracy
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <FadeInSection key={index} delay={index * 0.1}>
                  <div
                    className={`card h-full flex flex-col relative ${
                      service.featured
                        ? 'border-2 border-gold shadow-lg'
                        : 'border border-warm'
                    }`}
                  >
                    {service.featured && (
                      <span className="absolute -top-3 left-6 bg-gold text-white text-xs font-semibold px-4 py-1 rounded-full">
                        Najpopularniejsze
                      </span>
                    )}
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                        service.featured ? 'bg-gold/10' : 'bg-brand-blue/10'
                      }`}
                    >
                      <Icon
                        size={22}
                        className={service.featured ? 'text-gold' : 'text-brand-blue'}
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-6">
                      {service.description}
                    </p>
                    <Link
                      href={service.href}
                      className={`text-sm font-medium flex items-center gap-1.5 group transition-colors duration-200 ${
                        service.featured ? 'text-gold' : 'text-brand-blue'
                      }`}
                    >
                      Dowiedz się więcej
                      <ArrowRight
                        size={14}
                        className="group-hover:translate-x-0.5 transition-transform duration-200"
                      />
                    </Link>
                  </div>
                </FadeInSection>
              )
            })}
          </div>

          <FadeInSection delay={0.3}>
            <p className="text-center text-gray-400 text-sm mt-8">
              Nie jesteś pewien/pewna, który pakiet jest dla Ciebie?{' '}
              <Link href="/kontakt" className="text-gold hover:underline font-medium">
                Napisz do mnie
              </Link>{' '}
              — pomogę wybrać.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* ===== OPINIE ===== */}
      <section className="bg-white section-padding">
        <div className="container-width">
          <FadeInSection className="text-center mb-12">
            <p className="section-label">Opinie klientów</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A]">
              Co mówią osoby, z którymi pracowałam
            </h2>
          </FadeInSection>

          <FadeInSection>
            <TestimonialsCarousel />
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <div className="text-center mt-10">
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

      {/* ===== FINALNE CTA ===== */}
      <section className="bg-brand-blue section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeInSection direction="left">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-5">
                  Gotowy/a na zmianę?
                  <br />
                  Zacznij od jednej rozmowy.
                </h2>
                <p className="text-white/80 text-lg leading-relaxed mb-8">
                  Podczas bezpłatnej 30-minutowej rozmowy wstępnej przyjrzymy się
                  Twojej sytuacji i ustalimy, czy i jak mogę Ci pomóc. Bez presji,
                  bez zobowiązań.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/kontakt"
                    className="bg-white text-gold px-8 py-4 rounded-full font-semibold hover:bg-cream transition-colors duration-200 text-center text-sm"
                  >
                    Umów bezpłatną rozmowę
                  </Link>
                  <Link
                    href="/uslugi"
                    className="border border-white/40 text-white px-8 py-4 rounded-full font-medium hover:border-white/80 transition-colors duration-200 text-center text-sm"
                  >
                    Zobacz ofertę
                  </Link>
                </div>
                <p className="text-white/60 text-sm mt-5 flex items-center gap-2">
                  <CheckCircle size={14} className="flex-shrink-0" />
                  Pierwsza rozmowa jest całkowicie bezpłatna i niezobowiązująca
                </p>
              </div>
            </FadeInSection>

            <FadeInSection direction="right" delay={0.15}>
              <div className="space-y-4">
                <div className="bg-white/10 rounded-2xl p-5 flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs mb-1">Telefon</p>
                    <a
                      href="tel:+48000000000"
                      className="text-white font-medium text-sm hover:text-white/80 transition-colors"
                    >
                      +48 000 000 000
                    </a>
                  </div>
                </div>
                <div className="bg-white/10 rounded-2xl p-5 flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs mb-1">E-mail</p>
                    <a
                      href="mailto:kontakt@konsultantkakariery.pl"
                      className="text-white font-medium text-sm hover:text-white/80 transition-colors"
                    >
                      kontakt@konsultantkakariery.pl
                    </a>
                  </div>
                </div>
                <div className="bg-white/10 rounded-2xl p-5 flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs mb-1">Lokalizacja</p>
                    <p className="text-white font-medium text-sm">
                      Lublin | Online w całej Polsce
                    </p>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ===== BLOG PREVIEW ===== */}
      <section className="bg-white section-padding">
        <div className="container-width">
          <FadeInSection className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
            <div>
              <p className="section-label">Blog</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A]">
                Artykuły o karierze
              </h2>
            </div>
            <Link
              href="/blog"
              className="btn-outline whitespace-nowrap inline-flex items-center gap-2 text-sm py-3"
            >
              Wszystkie artykuły
              <ArrowRight size={14} />
            </Link>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {previewPosts.map((post, index) => (
              <FadeInSection key={post.slug} delay={index * 0.1}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block bg-beige rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300 h-full"
                >
                  {post.image ? (
                    <div className="aspect-[16/9] relative overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  ) : (
                    <div className="bg-warm aspect-[16/9] flex items-center justify-center relative">
                      <span className="text-xs font-semibold uppercase tracking-widest text-gold/60 relative z-10">
                        {post.category}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-br from-warm/30 to-beige" />
                    </div>
                  )}
                  <div className="p-6">
                    <span className="text-xs font-medium text-brand-blue bg-brand-blue/10 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <h3 className="text-base font-semibold text-[#1A1A1A] mt-3 mb-2 group-hover:text-gold transition-colors duration-200 leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1 text-gold text-sm font-medium mt-4 group-hover:gap-2 transition-all duration-200">
                      Czytaj więcej
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
