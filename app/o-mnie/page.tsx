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
  GraduationCap,
  Users,
  Globe,
  BookOpen,
} from 'lucide-react'
import Image from 'next/image'
import FadeInSection from '@/components/FadeInSection'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'O mnie — Ewelina Dyjak | Konsultantka Kariery',
  description:
    'Poznaj Ewelinę Dyjak — konsultantkę kariery i doradcę zawodowego z ponad 1000 godzinami konsultacji. Absolwentka UMCS, Szkoły Coachów i studiów podyplomowych z doradztwa zawodowego.',
  openGraph: {
    title: 'O mnie — Ewelina Dyjak | Konsultantka Kariery',
    description:
      'Poznaj Ewelinę Dyjak — konsultantkę kariery z wieloletnim doświadczeniem w pracy z osobami na różnych etapach życia zawodowego.',
    url: 'https://konsultantkakariery.pl/o-mnie',
  },
  alternates: { canonical: 'https://konsultantkakariery.pl/o-mnie' },
}

const distinguishers = [
  {
    icon: Wrench,
    title: 'Wielokierunkowa pomoc',
    description:
      'Łączę wiedzę z zakresu rynku pracy, psychologii i praktyczne doświadczenie w pracy z klientami. Dzięki temu wspieram w podejmowaniu decyzji zawodowych i osiąganiu satysfakcji z pracy.',
  },
  {
    icon: Heart,
    title: 'Indywidualne podejście',
    description:
      'Każdy z moich klientów może liczyć na indywidualnie dostosowany plan działania. To nie jest „uniwersalny pakiet" — to współpraca, w której rozumiem Twoją sytuację i wspieram w każdym kroku.',
  },
  {
    icon: Target,
    title: 'Bogate doświadczenie',
    description:
      'Współpracuję z klientami w obszarach takich jak: poszukiwanie pierwszej pracy, wypalenie zawodowe, przebranżowienie się, powrót po dłuższej przerwie w pracy.',
  },
  {
    icon: TrendingUp,
    title: 'Narzędzia i edukacja',
    description:
      'Po współpracy zyskujesz nie tylko efekt końcowy (CV, plan działania), ale też umiejętności, które możesz wykorzystać samodzielnie. To realna inwestycja w Twój rozwój.',
  },
]

const education = [
  {
    icon: GraduationCap,
    title: 'Socjologia zarządzania — UMCS Lublin',
    desc: 'Wiedza o funkcjonowaniu organizacji, procesach społecznych i mechanizmach wpływających na decyzje i rozwój zawodowy ludzi.',
  },
  {
    icon: GraduationCap,
    title: 'Studia podyplomowe — doradztwo zawodowe',
    desc: 'Profesjonalne wspieranie osób w planowaniu kariery, zmianie ścieżki zawodowej oraz odnajdywaniu sensu i satysfakcji w pracy.',
  },
  {
    icon: Target,
    title: 'Szkoła Coachów',
    desc: 'Ustrukturyzowany, etyczny i skoncentrowany na potencjale klienta sposób pracy.',
  },
  {
    icon: Heart,
    title: 'Fundamenty Psychologii — Grupa SET',
    desc: 'Pogłębione rozumienie emocji, motywacji oraz procesów zmiany.',
  },
]

const experience = [
  {
    icon: Users,
    title: 'Biuro Karier — ponad 12 lat',
    desc: 'Kompleksowe wsparcie dla studentów: spotkania indywidualne, szkolenia, warsztaty, współpraca z pracodawcami i działami HR.',
  },
  {
    icon: Target,
    title: 'Konsultacje indywidualne',
    desc: 'Pomagam osobom, które chcą świadomie zarządzać swoją karierą i znaleźć satysfakcję zawodową. Uczę, jak efektywnie określać cele i budować pewność siebie.',
  },
  {
    icon: Globe,
    title: 'Projekty europejskie',
    desc: 'Pomagam osobom zagrożonym wykluczeniem zawodowym w powrocie na rynek pracy.',
  },
  {
    icon: BookOpen,
    title: 'Wykładowca akademicki',
    desc: 'Wykłady z zakresu rozwoju zawodowego, przekazywanie wiedzy i trendów dotyczących aktualnej sytuacji na rynku pracy.',
  },
]

const specializations = [
  'Praca z osobami w kryzysie zawodowym i wypaleniu',
  'Zmiana branży lub stanowiska (przebranżowienie)',
  'Powrót na rynek pracy po urlopie macierzyńskim',
  'Budowanie pewności siebie w karierze',
  'Przygotowanie do rozmów kwalifikacyjnych',
  'Odkrywanie mocnych stron i wartości zawodowych',
  'Tworzenie planów kariery i strategii szukania pracy',
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
                <p className="text-gray-500 text-lg leading-relaxed mb-4">
                  Uczę, jak świadomie zarządzać swoją karierą – bez presji i przypadkowych
                  decyzji. Wspieram osoby, które są w zawodowym rozkroku: zmęczone obecną
                  pracą, niepewne powrotu po przerwie, zagubione wśród możliwości i oczekiwań.
                </p>
                <p className="text-gray-500 text-base leading-relaxed mb-6">
                  Jestem doświadczoną konsultantką kariery i doradcą zawodowym.
                  Przeprowadziłam ponad tysiąc godzin rozmów z osobami z różnych grup
                  zawodowych, w różnym wieku, z różnymi kompetencjami.
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

      {/* ===== W CZYM SIĘ SPECJALIZUJĘ ===== */}
      <section className="bg-white section-padding">
        <div className="container-width">
          <div className="max-w-3xl mx-auto">
            <FadeInSection>
              <p className="section-label text-center">Specjalizacja</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] text-center mb-6">
                W czym się specjalizuję
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed text-center mb-12">
                Jestem specjalistką w rozwiązywaniu problemów związanych z obszarem
                zawodowym. Tworzę bezpieczną przestrzeń do rozmowy i refleksji, zawsze
                dopasowując się do indywidualnych potrzeb klienta. Słucham uważnie,
                dzielę się wiedzą i — kiedy trzeba — mówię wprost, wskazując niewygodne
                prawdy, by zmotywować do głębszej autorefleksji.
              </p>
            </FadeInSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {specializations.map((item, index) => (
                <FadeInSection key={index} delay={index * 0.07}>
                  <div className="flex items-start gap-3 bg-beige rounded-xl p-4 shadow-sm">
                    <CheckCircle size={20} className="text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== MOJE WYKSZTAŁCENIE ===== */}
      <section className="bg-beige section-padding">
        <div className="container-width">
          <FadeInSection className="text-center mb-12">
            <p className="section-label">Wykształcenie</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A]">
              Moje doświadczenie i wykształcenie
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-6">
            {education.map((item, index) => {
              const Icon = item.icon
              return (
                <FadeInSection key={index} delay={index * 0.08}>
                  <div className="card h-full">
                    <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                      <Icon size={22} className="text-gold" />
                    </div>
                    <h3 className="text-base font-semibold text-[#1A1A1A] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </FadeInSection>
              )
            })}
          </div>

          <FadeInSection delay={0.2}>
            <p className="text-center text-gray-500 text-sm max-w-xl mx-auto">
              Stale aktualizuję swoją wiedzę, uczestniczę w szkoleniach i kursach z obszaru
              doradztwa, psychologii oraz przeciwdziałania wypaleniu zawodowemu.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* ===== MOJE DOŚWIADCZENIE ===== */}
      <section className="bg-white section-padding">
        <div className="container-width">
          <FadeInSection className="text-center mb-12">
            <p className="section-label">Doświadczenie</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A]">
              Gdzie pracuję i pracowałam
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {experience.map((item, index) => {
              const Icon = item.icon
              return (
                <FadeInSection key={index} delay={index * 0.08}>
                  <div className="flex items-start gap-4 bg-beige rounded-2xl p-6">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Icon size={22} className="text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1A1A1A] mb-2">{item.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </FadeInSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* ===== CO MNIE WYRÓŻNIA ===== */}
      <section className="bg-beige section-padding">
        <div className="container-width">
          <FadeInSection className="text-center mb-16">
            <p className="section-label">Co mnie wyróżnia</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A]">
              Na czym opiera się moja praca
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {distinguishers.map((item, index) => {
              const Icon = item.icon
              return (
                <FadeInSection key={index} delay={index * 0.1}>
                  <div className="card h-full">
                    <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-5">
                      <Icon size={24} className="text-gold" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed">{item.description}</p>
                  </div>
                </FadeInSection>
              )
            })}
          </div>

          <FadeInSection delay={0.3}>
            <div className="mt-10 bg-white rounded-2xl p-8 max-w-3xl mx-auto text-center shadow-sm">
              <p className="text-gray-600 text-lg leading-relaxed italic">
                „Nie zostawiam Cię samej z problemem ani szablonem CV. Pracujemy krok
                po kroku — od diagnozy Twoich mocnych stron i wartości, przez
                przygotowanie profesjonalnych dokumentów, aż po plan działania
                i wsparcie w rozmowach rekrutacyjnych."
              </p>
            </div>
          </FadeInSection>
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
              Podczas bezpłatnej ~20-minutowej rozmowy przyjrzymy się Twojej sytuacji
              i ustalimy, jaka forma współpracy będzie dla Ciebie najlepsza.
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
