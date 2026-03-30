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
  FileText,
} from 'lucide-react'
import FadeInSection from '@/components/FadeInSection'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Twoje Skuteczne CV — Konsultacja kariery | Ewelina Dyjak',
  description:
    'Naucz się tworzyć CV, które przejdzie przez ATS i przekona rekrutera. 2 sesje (250 zł) — pracujemy na Twoim dokumencie lub tworzymy od podstaw. Ewelina Dyjak, Lublin & online.',
  openGraph: {
    title: 'Twoje Skuteczne CV — Konsultacja kariery | Ewelina Dyjak',
    description:
      'CV, które otwiera drzwi, nie ląduje w koszu. 2 sesje z konsultantką kariery — wiedza i umiejętności, które wykorzystasz w każdej rekrutacji.',
    url: 'https://konsultantkakariery.pl/uslugi/skuteczne-cv',
  },
  alternates: { canonical: 'https://konsultantkakariery.pl/uslugi/skuteczne-cv' },
}

const testimonials = [
  {
    name: 'Sylwia Szewczuk',
    role: 'Grafik komputerowy, INQ Trade',
    content:
      'Ewelina profesjonalnie przygotowała mnie do rozmowy kwalifikacyjnej i dodała wiary w siebie. Jej pytania i uwagi sprawiły, że byłam spokojniejsza i pewniejsza. Ostatecznie udało mi się znaleźć nową pracę.',
  },
  {
    name: 'Weronika Bartczak',
    role: '',
    content:
      'Ewelina zdiagnozowała główny problem w moim CV i przeszła ze mną krok po kroku co mogę zmienić. Na dalszych spotkaniach pomogła mi zdecydować się na jedną ścieżkę. Przećwiczenie rozmowy dodało mi pewności siebie.',
  },
  {
    name: 'Anna Moryson',
    role: '',
    content:
      'Konsultacja pozwoliła mi zupełnie inaczej spojrzeć na siebie na rynku pracy. Czuję się pewniej i spokojniej. Praca nad CV ruszyła do przodu i w fajnym kierunku. Szczerze polecam!',
  },
]

const faqs = [
  {
    q: 'Czy muszę mieć gotowe CV przed konsultacją?',
    a: 'Nie. Możemy pracować na Twoim obecnym CV (poprawiamy je razem) albo stworzyć dokument od podstaw — zależy od Twojej sytuacji. Na początku spotkania ustalimy, co będzie dla Ciebie najlepsze.',
  },
  {
    q: 'Co to jest ATS i dlaczego to ważne?',
    a: 'ATS (Applicant Tracking System) to oprogramowanie, które automatycznie skanuje CV zanim trafi do rekrutera. Wiele kandydatów odpada na tym etapie nie dlatego, że są słabymi pracownikami, ale dlatego, że ich CV nie jest zoptymalizowane pod algorytm. Nauczę Cię, jak to zrobić.',
  },
  {
    q: 'Czy po jednej konsultacji będę umieć samodzielnie pisać CV?',
    a: 'Tak — to jest właśnie cel. Nie daję Ci szablonu, który raz wypełniasz i odkładasz. Przekazuję Ci wiedzę i umiejętności, dzięki którym każde następne CV przygotowane przez Ciebie będzie skuteczne. To długoterminowa inwestycja.',
  },
  {
    q: 'Co obejmuje konsultacja mailowa?',
    a: 'Po spotkaniu online masz dostęp do jednej konsultacji mailowej, w której możesz podesłać zaktualizowane CV do sprawdzenia lub zadać pytania, które pojawiły się przy samodzielnej pracy nad dokumentem.',
  },
  {
    q: 'Czy to działa też przy zmianie branży?',
    a: 'Tak, i to jeden z najtrudniejszych przypadków — nauczę Cię, jak pisać CV przy zmianie branży, jak opisać swoje doświadczenie tak, żeby było atrakcyjne dla pracodawców w nowym obszarze i jak uniknąć typowych błędów.',
  },
]

export default function SkuteczneCVPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="bg-beige section-padding">
        <div className="container-width">
          <Breadcrumbs
            items={[
              { label: 'Usługi', href: '/uslugi' },
              { label: 'Twoje skuteczne CV', href: '/uslugi/skuteczne-cv' },
            ]}
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeInSection direction="left">
              <div className="max-w-xl">
                <p className="section-label">Twoje skuteczne CV</p>
                <h1 className="text-4xl sm:text-5xl font-bold text-[#1A1A1A] leading-tight mb-6">
                  CV, które otwiera drzwi —{' '}
                  <span className="text-gold">nie ląduje w koszu</span>
                </h1>
                <p className="text-gray-500 text-lg leading-relaxed mb-4">
                  Naucz się tworzyć życiorys, który przejdzie przez system ATS
                  i przekona rekrutera do zaproszenia Cię na rozmowę — oraz rób to
                  samodzielnie przy każdej kolejnej aplikacji.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-8 flex-wrap">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle size={14} className="text-gold" />
                    2 sesje
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle size={14} className="text-gold" />
                    250 zł
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle size={14} className="text-gold" />
                    Wiedza na zawsze
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/kontakt" className="btn-primary text-center">
                    Umów konsultację
                  </Link>
                  <a href="#pakiet" className="btn-outline text-center inline-flex items-center justify-center gap-2">
                    Co dostajesz?
                    <ArrowDown size={16} />
                  </a>
                </div>
                <p className="text-xs text-gray-400 mt-4 flex items-center gap-1.5">
                  <Shield size={13} className="text-gold flex-shrink-0" />
                  Pracujemy na Twoim CV lub tworzymy nowe — od podstaw
                </p>
              </div>
            </FadeInSection>

            <FadeInSection direction="right" delay={0.15}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden w-full">
                <Image
                  src="/gfx/ewelina_4.jpg"
                  alt="Ewelina Dyjak — konsultacja CV online"
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

      {/* ===== PAIN POINTS ===== */}
      <section className="bg-white section-padding">
        <div className="container-width">
          <FadeInSection className="text-center mb-12">
            <p className="section-label">Czy to Twoja sytuacja?</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] max-w-2xl mx-auto">
              Większość osób robi te same błędy w CV
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: FileText,
                title: 'Wysyłasz, ale cisza',
                desc: 'Aplikujesz na wiele ofert, ale nie dostajesz zaproszeń na rozmowy. Nie wiesz czy problem tkwi w CV, w podejściu, czy może w czymś innym.',
              },
              {
                icon: FileText,
                title: '„Nie mam nic do wpisania"',
                desc: 'Myślisz, że nie masz osiągnięć ani zalet godnych CV. Tymczasem problem to nie brak sukcesów — to brak umiejętności ich opisania.',
              },
              {
                icon: FileText,
                title: 'Zmiana branży lub powrót',
                desc: 'Zaczynasz w nowym obszarze lub wracasz po przerwie i nie wiesz, jak napisać CV, które wypadnie dobrze — mimo nielinearnej historii.',
              },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <FadeInSection key={i} delay={i * 0.1}>
                  <div className="bg-beige rounded-xl p-6 flex flex-col gap-4 h-full">
                    <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon size={20} className="text-gold" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#1A1A1A] mb-2">{item.title}</p>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </FadeInSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* ===== CO ZYSKASZ ===== */}
      <section className="bg-beige section-padding">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <FadeInSection className="text-center mb-12">
              <p className="section-label">Efekty</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A]">
                Co wyniesiesz z konsultacji?
              </h2>
              <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto">
                To coś więcej niż gotowy szablon — to wiedza i umiejętności, które
                będziesz stosować samodzielnie przy każdej kolejnej aplikacji.
              </p>
            </FadeInSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: 'Umiesz zaprojektować skuteczne CV',
                  desc: 'Pracujemy na Twoim dokumencie lub tworzymy razem od zera — wychodzisz z gotowym CV i wiedzą, jak to robić samodzielnie.',
                },
                {
                  title: 'Wiesz, jak dostosować CV do każdej oferty',
                  desc: 'Nauczysz się szybko modyfikować dokument pod konkretne stanowisko — bez pisania od nowa za każdym razem.',
                },
                {
                  title: 'Rozumiesz rekrutera',
                  desc: 'Wiesz, czego szuka rekruter i jak przykuć jego uwagę w pierwszych 6 sekundach — tyle czasu ma CV, by zrobić wrażenie.',
                },
                {
                  title: 'Umiesz pokazywać atuty i osiągnięcia',
                  desc: 'Nauczysz się opisywać swoje doświadczenia językiem rezultatów i kompetencji, nie listą obowiązków.',
                },
                {
                  title: 'Znasz specyfikę ATS',
                  desc: 'Wiesz, jak pisać CV, które przejdzie przez automatyczne filtry i trafi do człowieka, a nie do folderu „odrzucone".',
                },
                {
                  title: 'Masz silne podsumowanie zawodowe',
                  desc: 'Nauczysz się pisać cel zawodowy i podsumowanie, które decyduje o tym, czy rekruter przeczyta resztę CV.',
                },
              ].map((item, i) => (
                <FadeInSection key={i} delay={i * 0.07}>
                  <div className="bg-white rounded-xl p-5 flex items-start gap-3 shadow-sm h-full">
                    <CheckCircle size={18} className="text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[#1A1A1A] text-sm mb-1">{item.title}</p>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== JAK WYGLĄDA KONSULTACJA ===== */}
      <section className="bg-white section-padding">
        <div className="container-width">
          <FadeInSection className="text-center mb-16">
            <p className="section-label">Jak to wygląda</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A]">
              Przebieg konsultacji krok po kroku
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                num: '01',
                title: 'Analiza i diagnoza',
                time: 'Spotkanie 1 | 60 min',
                desc: 'Analizujemy Twoje obecne CV — identyfikujemy co działa, co przeszkadza, i co koniecznie trzeba zmienić. Poznajemy Twój cel i dopasowujemy strategię.',
              },
              {
                num: '02',
                title: 'Praca i nauka',
                time: 'Spotkanie 1 (cd)',
                desc: 'Pracujemy razem nad dokumentem: układ, treść, słowa kluczowe, opis osiągnięć. Uczysz się zasad, nie tylko dostajesz gotowy wynik.',
              },
              {
                num: '03',
                title: 'Konsultacja mailowa',
                time: 'Po spotkaniu',
                desc: 'Masz czas na samodzielną pracę z nową wiedzą. Gdy masz pytania lub chcesz sprawdzić zaktualizowane CV — piszesz, ja odpowiadam.',
              },
            ].map((step, i) => (
              <FadeInSection key={i} delay={i * 0.1}>
                <div className="relative bg-beige rounded-2xl p-7 h-full">
                  <span className="text-5xl font-bold text-warm leading-none block mb-2 select-none">
                    {step.num}
                  </span>
                  <p className="text-xs text-gold font-semibold uppercase tracking-wider mb-3">
                    {step.time}
                  </p>
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
        </div>
      </section>

      {/* ===== PAKIET ===== */}
      <section id="pakiet" className="bg-beige section-padding scroll-mt-20">
        <div className="container-width">
          <FadeInSection className="text-center mb-12">
            <p className="section-label">Pakiet</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A]">
              Co zawiera oferta?
            </h2>
          </FadeInSection>

          <FadeInSection className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl overflow-hidden border-2 border-warm shadow-sm">
              <div className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FileText size={22} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#1A1A1A]">Twoje skuteczne CV</h3>
                    <p className="text-gray-400 text-sm mt-1">Konsultacje kariery — moduł CV</p>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {[
                    '1 spotkanie online (60 minut) — analiza + praca nad CV',
                    '1 konsultacja mailowa — sprawdzenie zaktualizowanego dokumentu',
                    'Wiedza o pisaniu CV pod systemy ATS',
                    'Techniki opisywania osiągnięć i kompetencji',
                    'Zasady tworzenia silnego podsumowania zawodowego',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-beige rounded-xl p-5">
                  <p className="text-sm text-gray-500 leading-relaxed">
                    <strong className="text-[#1A1A1A]">To coś więcej niż gotowy szablon.</strong>{' '}
                    Wiedza i umiejętności, które sprawią, że każde CV przygotowane przez Ciebie
                    będzie skuteczne — to realna inwestycja, nie jednorazowa usługa.
                  </p>
                </div>
              </div>

              <div className="border-t border-warm p-6 flex items-center justify-between bg-beige/30">
                <div>
                  <p className="text-xs text-gray-400 mb-0.5">Twoja inwestycja</p>
                  <p className="text-3xl font-bold text-[#1A1A1A]">250 zł</p>
                </div>
                <Link href="/kontakt" className="btn-primary inline-flex items-center gap-2">
                  Umów konsultację
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <p className="text-center text-sm text-gray-400 mt-6 max-w-lg mx-auto">
              Potrzebujesz też wsparcia w szukaniu pracy, rozmowach kwalifikacyjnych
              i LinkedIn?{' '}
              <Link
                href="/uslugi/konsultacje-kariery"
                className="text-gold hover:underline font-medium"
              >
                Sprawdź pakiety konsultacji kariery →
              </Link>
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
              Co mówią osoby po konsultacji
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <FadeInSection key={i} delay={i * 0.1}>
                <article className="bg-beige rounded-2xl p-7 h-full flex flex-col">
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
                    {t.role && <p className="text-gray-400 text-xs">{t.role}</p>}
                  </div>
                </article>
              </FadeInSection>
            ))}
          </div>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Zacznij dostawać zaproszenia na rozmowy
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-lg mx-auto">
              Jedna konsultacja i wiedza, którą stosujesz samodzielnie w każdej
              przyszłej rekrutacji. To 250 zł, które zwraca się przy pierwszej
              ofercie pracy.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/kontakt"
                className="bg-white text-gold px-10 py-4 rounded-full font-semibold hover:bg-cream transition-colors duration-200 shadow-md"
              >
                Umów konsultację CV — 250 zł
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
