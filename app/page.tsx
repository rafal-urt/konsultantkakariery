import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  CheckCircle,
  ArrowRight,
  Briefcase,
  FileText,
  Heart,
  MapPin,
  Phone,
  Mail,
  Star,
  Quote,
} from 'lucide-react'
import FadeInSection from '@/components/FadeInSection'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import StatsCounter from '@/components/StatsCounter'
import { blogPosts } from '@/lib/blog-data'

export const metadata: Metadata = {
  title: 'Konsultantka Kariery — Ewelina Dyjak | Lublin & online',
  description:
    'Uczę, jak świadomie zarządzać karierą – bez presji i przypadkowych decyzji. Konsultacje kariery, program Wróć Pewniejsza i skuteczne CV. Online w całej Polsce.',
  openGraph: {
    title: 'Konsultantka Kariery — Ewelina Dyjak',
    description:
      'Świadoma zmiana zawodowa, przebranżowienie, pewność siebie w karierze. Konsultacje online w całej Polsce.',
    url: 'https://konsultantkakariery.pl',
  },
  alternates: { canonical: 'https://konsultantkakariery.pl' },
}

const painPoints = [
  { emoji: '🔥', text: 'Czujesz wypalenie zawodowe i nie widzisz wyjścia z obecnej sytuacji' },
  { emoji: '🔀', text: 'Myślisz o zmianie pracy lub branży, ale boisz się zrobić zły krok' },
  { emoji: '👶', text: 'Wracasz po urlopie macierzyńskim i nie wiesz, czego chcesz teraz' },
  { emoji: '📨', text: 'Wysyłasz CV i nic — brak odpowiedzi, spada pewność siebie' },
  { emoji: '🧭', text: 'Masz doświadczenie, ale brakuje Ci kierunku i motywacji do działania' },
  { emoji: '✅', text: 'Chcesz wreszcie mieć konkretny plan — nie tylko marzenia o zmianie' },
]

const services = [
  {
    icon: Briefcase,
    label: 'Konsultacje kariery',
    tagline: 'Zmień pracę albo branżę ze świadomym planem',
    price: 'od 630 zł',
    priceNote: '3 lub 6 spotkań',
    href: '/uslugi/konsultacje-kariery',
    color: 'blue',
    featured: false,
    bullets: [
      'Diagnoza mocnych stron i celów zawodowych',
      'Plan zmiany krok po kroku',
      'Pakiet rozszerzony: CV, LinkedIn, rozmowy',
    ],
  },
  {
    icon: Heart,
    label: 'Wróć Pewniejsza',
    tagline: 'Wróć do pracy na swoich warunkach — z planem',
    price: '890 zł',
    priceNote: '5 spotkań × 60 min',
    href: '/uslugi/wroc-pewniejsza',
    color: 'gold',
    featured: true,
    bullets: [
      'Dla mam wracających po urlopie macierzyńskim',
      'Świadoma decyzja: stara praca czy nowa ścieżka?',
      'Odświeżone CV + plan działania na 30 dni',
    ],
  },
  {
    icon: FileText,
    label: 'Twoje skuteczne CV',
    tagline: 'CV, które otwiera drzwi — nie ląduje w koszu',
    price: '250 zł',
    priceNote: '1 spotkanie + konsultacja mailowa',
    href: '/uslugi/skuteczne-cv',
    color: 'blue',
    featured: false,
    bullets: [
      'CV pod systemy ATS i rekrutera',
      'Praca na Twoim dokumencie lub od podstaw',
      'Wiedza, którą stosujesz samodzielnie',
    ],
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Bezpłatna rozmowa wstępna',
    description:
      '~20 minut, online lub telefonicznie. Poznaję Twoją sytuację, Ty poznajesz mój sposób pracy. Zero zobowiązań.',
  },
  {
    number: '02',
    title: 'Diagnoza i plan',
    description:
      'Analizujemy Twoje mocne strony, wartości i cele. Razem budujemy konkretny plan dopasowany do Twojej sytuacji.',
  },
  {
    number: '03',
    title: 'Działanie i zmiana',
    description:
      'Pracujemy systematycznie. Każde spotkanie kończy się konkretnym krokiem. Wychodzisz z narzędziami, nie tylko z planem.',
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

            {/* Left */}
            <FadeInSection direction="left">
              <div className="max-w-xl">
                <p className="section-label">Konsultantka Kariery — Lublin & online</p>
                <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-[#1A1A1A] leading-tight mb-6">
                  Uczę, jak świadomie zarządzać swoją karierą —{' '}
                  <span className="text-gold">bez presji i przypadkowych decyzji</span>
                </h1>
                <p className="text-gray-500 text-lg leading-relaxed mb-8">
                  Wspieram osoby w zawodowym rozkroku: zmęczone obecną pracą,
                  niepewne powrotu po przerwie, zagubione wśród możliwości.
                  Pomagam im podjąć świadome decyzje i ułożyć konkretny plan zmiany.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <Link href="/kontakt" className="btn-primary text-center">
                    Umów bezpłatną rozmowę
                  </Link>
                  <Link href="/uslugi" className="btn-outline text-center">
                    Zobacz ofertę
                  </Link>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm text-gray-400">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle size={14} className="text-gold flex-shrink-0" />
                    Pierwsza rozmowa bezpłatna
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle size={14} className="text-gold flex-shrink-0" />
                    Online w całej Polsce
                  </span>
                </div>
              </div>
            </FadeInSection>

            {/* Right — photo + floating elements */}
            <FadeInSection direction="right" delay={0.15}>
              <div className="relative w-full max-w-sm mx-auto lg:max-w-none">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/gfx/ewelina_1.jpg"
                    alt="Ewelina Dyjak — Konsultantka Kariery"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 384px, 50vw"
                    priority
                  />
                  {/* Gradient overlay bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>

                {/* Floating badge — experience */}
                <div className="absolute -bottom-4 -left-4 lg:-left-8 bg-white rounded-2xl shadow-lg p-4 flex items-center gap-3 border border-warm">
                  <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={20} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 leading-none mb-0.5">Doświadczenie</p>
                    <p className="text-sm font-bold text-[#1A1A1A] leading-none">
                      12 lat · 1000+ godzin sesji
                    </p>
                  </div>
                </div>

                {/* Floating badge — testimonial */}
                <div className="absolute -top-4 -right-4 lg:-right-6 bg-white rounded-2xl shadow-lg p-4 max-w-[200px] border border-warm">
                  <div className="flex items-center gap-0.5 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={12} className="text-gold fill-gold" />
                    ))}
                  </div>
                  <p className="text-xs text-gray-600 leading-snug italic">
                    „+100% do pewności siebie"
                  </p>
                  <p className="text-xs text-gray-400 mt-1.5 font-medium">— Marta B.</p>
                </div>
              </div>
            </FadeInSection>

          </div>
        </div>
      </section>

      {/* ===== TRUST BAR ===== */}
      <section className="bg-white border-y border-warm">
        <div className="container-width py-6">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {[
              { num: '1000+', label: 'godzin konsultacji' },
              { num: '12 lat', label: 'doświadczenia w Biurze Karier' },
              { num: '7★', label: 'opinii — wszystkie 5/5' },
              { num: '100%', label: 'indywidualne podejście' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-sm">
                <span className="font-bold text-gold text-base">{item.num}</span>
                <span className="text-gray-500">{item.label}</span>
                {i < 3 && <span className="hidden sm:block w-px h-4 bg-warm" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PAIN POINTS ===== */}
      <section className="bg-beige section-padding">
        <div className="container-width">
          <FadeInSection className="text-center mb-12">
            <p className="section-label">Rozpoznajesz to?</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] max-w-2xl mx-auto leading-tight">
              Jeśli masz dość tkwienia w miejscu —{' '}
              <span className="text-gold">to dobrze trafiłaś/eś</span>
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {painPoints.map((point, index) => (
              <FadeInSection key={index} delay={index * 0.07}>
                <div className="flex items-start gap-3 bg-white rounded-xl p-5 h-full shadow-sm border border-warm/50">
                  <span className="text-2xl flex-shrink-0">{point.emoji}</span>
                  <p className="text-gray-600 text-sm leading-relaxed">{point.text}</p>
                </div>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection>
            <div className="text-center">
              <p className="text-gray-600 text-lg max-w-xl mx-auto mb-6">
                Nie musisz przez to przechodzić sama/sam. Pracuję z osobami dokładnie
                w takiej sytuacji — i razem dochodzimy do konkretnych odpowiedzi.
              </p>
              <Link href="/kontakt" className="btn-primary inline-flex items-center gap-2">
                Umów bezpłatną rozmowę wstępną
                <ArrowRight size={16} />
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ===== O MNIE ===== */}
      <section className="bg-white section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeInSection direction="left">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
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
                  <span className="text-gold">konsultantka kariery i doradca zawodowy</span>
                </h2>
                <div className="space-y-4 text-gray-500 text-base leading-relaxed mb-8">
                  <p>
                    Przeprowadziłam ponad <strong className="text-[#1A1A1A]">1000 godzin</strong> indywidualnych
                    konsultacji z osobami w różnym wieku, z różnych branż i na różnych etapach
                    kariery — od pierwszej zmiany pracy, przez wypalenie zawodowe, aż po powrót
                    na rynek po 5-letniej przerwie macierzyńskiej.
                  </p>
                  <p>
                    Łączę wiedzę z zakresu rynku pracy i psychologii z narzędziami coachingowymi.
                    Nie pracuję na teorii — pracuję na konkretach. Widzę często to, czego klient
                    sam nie dostrzega. Pomagam odzyskać energię i klarowność.
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

      {/* ===== USŁUGI ===== */}
      <section className="bg-beige section-padding">
        <div className="container-width">
          <FadeInSection className="text-center mb-14">
            <p className="section-label">Oferta</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-4">
              Wybierz formę wsparcia
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Trzy różne formy pomocy — każda na inną potrzebę.
              Kliknij kartę, żeby zobaczyć szczegóły.
            </p>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <FadeInSection key={index} delay={index * 0.1}>
                  <Link
                    href={service.href}
                    className={`group flex flex-col bg-white rounded-2xl overflow-hidden h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                      service.featured
                        ? 'border-2 border-gold shadow-lg'
                        : 'border border-warm shadow-sm hover:border-gold/40'
                    }`}
                  >
                    {/* Card top bar */}
                    <div
                      className={`h-1.5 w-full ${
                        service.featured ? 'bg-gold' : 'bg-brand-blue/20'
                      }`}
                    />

                    <div className="p-7 flex flex-col flex-1">
                      {service.featured && (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-gold uppercase tracking-wider mb-3">
                          <Star size={11} className="fill-gold" />
                          Polecane
                        </span>
                      )}

                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                          service.featured ? 'bg-gold/10' : 'bg-brand-blue/8'
                        }`}
                      >
                        <Icon
                          size={22}
                          className={service.featured ? 'text-gold' : 'text-brand-blue'}
                        />
                      </div>

                      <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">
                        {service.label}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-5">
                        {service.tagline}
                      </p>

                      <ul className="space-y-2 mb-6 flex-1">
                        {service.bullets.map((bullet, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle
                              size={14}
                              className="text-gold flex-shrink-0 mt-0.5"
                            />
                            <span className="text-gray-600 text-xs leading-relaxed">{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex items-center justify-between pt-5 border-t border-warm mt-auto">
                        <div>
                          <p className="text-xs text-gray-400 mb-0.5">{service.priceNote}</p>
                          <p className="font-bold text-[#1A1A1A]">{service.price}</p>
                        </div>
                        <span
                          className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 group-hover:gap-3 ${
                            service.featured ? 'text-gold' : 'text-brand-blue'
                          }`}
                        >
                          Dowiedz się więcej
                          <ArrowRight size={15} />
                        </span>
                      </div>
                    </div>
                  </Link>
                </FadeInSection>
              )
            })}
          </div>

          <FadeInSection delay={0.3}>
            <p className="text-center text-gray-400 text-sm mt-8">
              Nie wiesz, co wybrać?{' '}
              <Link href="/kontakt" className="text-gold hover:underline font-medium">
                Napisz do mnie
              </Link>{' '}
              albo umów bezpłatną rozmowę wstępną — razem ustalimy, co będzie najlepsze.
            </p>
          </FadeInSection>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {processSteps.map((step, index) => (
              <FadeInSection key={index} delay={index * 0.1}>
                <div className="relative bg-beige rounded-2xl p-8 h-full">
                  <span className="text-6xl font-bold text-warm leading-none block mb-5 select-none">
                    {step.number}
                  </span>
                  <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-sm">
                    {step.description}
                  </p>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                      <ArrowRight size={18} className="text-warm" />
                    </div>
                  )}
                </div>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection delay={0.3}>
            <div className="text-center">
              <Link href="/kontakt" className="btn-primary inline-flex items-center gap-2">
                Zacznijmy od bezpłatnej rozmowy
                <ArrowRight size={16} />
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ===== OPINIE ===== */}
      <section className="bg-beige section-padding">
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
                className="text-brand-blue text-sm font-medium hover:underline inline-flex items-center gap-1.5"
              >
                Przeczytaj wszystkie opinie
                <ArrowRight size={14} />
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-brand-blue section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeInSection direction="left">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight">
                  Gotowa/y na zmianę?
                  <br />
                  Zacznij od jednej rozmowy.
                </h2>
                <p className="text-white/80 text-lg leading-relaxed mb-8">
                  Bezpłatna rozmowa wstępna (~20 min) — opowiadasz o swojej sytuacji,
                  ja pokazuję możliwe formy wsparcia. Bez presji, bez zobowiązań.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/kontakt"
                    className="bg-white text-gold px-8 py-4 rounded-full font-semibold hover:bg-cream transition-colors duration-200 text-center text-sm shadow-md"
                  >
                    Umów bezpłatną rozmowę
                  </Link>
                  <Link
                    href="/uslugi"
                    className="border border-white/40 text-white px-8 py-4 rounded-full font-medium hover:border-white/80 transition-colors duration-200 text-center text-sm"
                  >
                    Zobacz całą ofertę
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
                <a
                  href="tel:+48603614521"
                  className="bg-white/10 hover:bg-white/15 transition-colors duration-200 rounded-2xl p-5 flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs mb-1">Telefon</p>
                    <p className="text-white font-medium text-sm group-hover:text-white/90 transition-colors">
                      +48 603 614 521
                    </p>
                  </div>
                </a>
                <a
                  href="mailto:doradztwo.coaching@gmail.com"
                  className="bg-white/10 hover:bg-white/15 transition-colors duration-200 rounded-2xl p-5 flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs mb-1">E-mail</p>
                    <p className="text-white font-medium text-sm group-hover:text-white/90 transition-colors">
                      doradztwo.coaching@gmail.com
                    </p>
                  </div>
                </a>
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

                {/* Mini testimonial */}
                <div className="bg-white/10 rounded-2xl p-5">
                  <Quote size={20} className="text-gold/40 fill-gold/20 mb-3" />
                  <p className="text-white/80 text-sm italic leading-relaxed mb-3">
                    „Ewelina trafnie zidentyfikowała obszary do naszej wspólnej pracy już
                    na 20-minutowej rozmowie przedwstępnej."
                  </p>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={11} className="text-gold fill-gold" />
                    ))}
                    <span className="text-white/50 text-xs ml-2">— Natalia J.</span>
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
                  className="group block bg-beige rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300 h-full border border-warm/50 hover:border-gold/30"
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
