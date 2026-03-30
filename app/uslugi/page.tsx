import type { Metadata } from 'next'
import Link from 'next/link'
import {
  CheckCircle,
  XCircle,
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
    'Konsultacje kariery (pakiet podstawowy 630 zł i rozszerzony 980 zł), skuteczne CV (250 zł) oraz program Wróć Pewniejsza dla mam (890 zł). Ewelina Dyjak, konsultantka kariery.',
  openGraph: {
    title: 'Usługi — Konsultacje kariery, CV, Wróć Pewniejsza | Ewelina Dyjak',
    description:
      'Indywidualne konsultacje kariery, przygotowanie CV i program Wróć Pewniejsza dla mam wracających po urlopie macierzyńskim.',
    url: 'https://konsultantkakariery.pl/uslugi',
  },
  alternates: { canonical: 'https://konsultantkakariery.pl/uslugi' },
}

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
              Jak mogę Ci pomóc?
            </h1>
            <p className="text-gray-500 text-xl leading-relaxed">
              Moje klientki i klienci to osoby gotowe podjąć pracę nad sobą, zmienić
              swoje życie zawodowe lub rozwijać się w nowym kierunku. Wybierz formę
              wsparcia dopasowaną do Twojej sytuacji.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* ===== OVERVIEW CARDS ===== */}
      <section className="bg-white section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Briefcase,
                label: 'Konsultacje kariery',
                desc: 'Plan ścieżki kariery lub kompletna zmiana zawodowa — 2 pakiety do wyboru.',
                price: 'od 630 zł',
                anchor: '#konsultacje-kariery',
                featured: false,
              },
              {
                icon: FileText,
                label: 'Twoje skuteczne CV',
                desc: 'Naucz się tworzyć CV, które zwróci uwagę rekrutera i otworzy drzwi do rozmów.',
                price: '250 zł',
                anchor: '#skuteczne-cv',
                featured: false,
              },
              {
                icon: Heart,
                label: 'Wróć Pewniejsza',
                desc: 'Program dla mam wracających po urlopie macierzyńskim — na Twoich warunkach.',
                price: '890 zł',
                anchor: '#wroc-pewniejsza',
                featured: true,
              },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <FadeInSection key={i} delay={i * 0.1}>
                  <a
                    href={item.anchor}
                    className={`card h-full flex flex-col relative group transition-all duration-300 hover:shadow-md ${
                      item.featured ? 'border-2 border-gold' : 'border border-warm'
                    }`}
                  >
                    {item.featured && (
                      <span className="absolute -top-3 left-6 bg-gold text-white text-xs font-semibold px-4 py-1 rounded-full">
                        Polecane
                      </span>
                    )}
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                        item.featured ? 'bg-gold/10' : 'bg-brand-blue/10'
                      }`}
                    >
                      <Icon
                        size={22}
                        className={item.featured ? 'text-gold' : 'text-brand-blue'}
                      />
                    </div>
                    <p className="text-xs font-semibold text-gold uppercase tracking-wider mb-1">
                      {item.price}
                    </p>
                    <h2 className="text-lg font-semibold text-[#1A1A1A] mb-3">
                      {item.label}
                    </h2>
                    <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-6">
                      {item.desc}
                    </p>
                    <span className="text-sm font-medium flex items-center gap-1.5 text-gold group-hover:gap-3 transition-all duration-200">
                      Dowiedz się więcej
                      <ArrowRight size={14} />
                    </span>
                  </a>
                </FadeInSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* KONSULTACJE KARIERY */}
      {/* ===================================================== */}
      <section id="konsultacje-kariery" className="bg-beige section-padding scroll-mt-20">
        <div className="container-width">
          <FadeInSection className="max-w-3xl mx-auto text-center mb-16">
            <p className="section-label">1. Konsultacje kariery</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-6">
              Świadoma zmiana zawodowa krok po kroku
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Pomagam osobom, które chcą świadomie zarządzać swoją karierą, wprowadzić
              zmianę zawodową lub wrócić na rynek pracy po przerwie – szczególnie po
              urlopie macierzyńskim.
            </p>
          </FadeInSection>

          {/* Pain points */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-16">
            {[
              'Czujesz ogromne wypalenie aktualnym miejscem pracy, toksyczne środowisko, wynagrodzenie nieadekwatne do obowiązków i nie widzisz szans na wyjście z kryzysu?',
              'Wysyłasz kilkadziesiąt CV, tygodniami czekasz na wiadomość od rekrutera? Twoja pewność siebie spada, a motywacja jest na bardzo niskim poziomie?',
              'Wracasz po długiej przerwie związanej z urlopem macierzyńskim? Nie jesteś pewna co umiesz i czego chcesz — czujesz się zagubiona?',
              'Jesteś osobą doświadczoną, ale mierzysz się z kryzysem, nie masz motywacji i czujesz, że musisz obrać nowy kierunek?',
            ].map((text, i) => (
              <FadeInSection key={i} delay={i * 0.07}>
                <div className="bg-white rounded-xl p-5 flex items-start gap-3 shadow-sm h-full">
                  <ArrowRight size={18} className="text-gold flex-shrink-0 mt-0.5" />
                  <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
                </div>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection>
            <p className="text-center text-xl font-semibold text-[#1A1A1A] mb-16">
              To jesteś w dobrym miejscu.
            </p>
          </FadeInSection>

          {/* Dlaczego ze mną */}
          <FadeInSection className="max-w-3xl mx-auto mb-16">
            <h3 className="text-2xl font-bold text-[#1A1A1A] mb-8 text-center">
              Dlaczego ze mną Ci się uda?
            </h3>
            <div className="space-y-4">
              {[
                {
                  title: 'Zmiana pracy',
                  desc: 'Pomagam określić, w jakim kierunku chcesz iść: zmienić pracodawcę, stanowisko, czy całą branżę? Wspólnie doprecyzujemy cele, sprawdzimy Twoje zasoby i przygotujemy plan działania krok po kroku.',
                },
                {
                  title: 'Powrót na rynek pracy po przerwie',
                  desc: 'Towarzyszę w urealnieniu planu powrotu – od oswojenia obaw, przez uporządkowanie kompetencji, aż po konkretne kroki. Pokazuję, jak przełożyć doświadczenia z okresu opieki nad dzieckiem na język kompetencji cenionych przez pracodawców.',
                },
                {
                  title: 'Opracowanie dokumentów aplikacyjnych',
                  desc: 'Pracujemy nad CV i profilem na LinkedIn tak, by jasno pokazywały Twoje mocne strony, efekty i potencjał do rozwoju.',
                },
                {
                  title: 'Strategia szukania pracy',
                  desc: 'Pomagam stworzyć skuteczną strategię: gdzie i jak aplikować, jak korzystać z sieci kontaktów, jak wyróżnić się na tle innych kandydatów.',
                },
                {
                  title: 'Przygotowanie do rozmów rekrutacyjnych',
                  desc: 'Ćwiczymy odpowiedzi, pracujemy nad pewnością siebie, spójnością historii zawodowej i pytaniami do pracodawcy.',
                },
                {
                  title: 'Długofalowy plan kariery',
                  desc: 'Przyglądamy się temu, jakie umiejętności warto rozwijać, aby Twoja pozycja na rynku była stabilna także w przyszłości. Tworzymy plan dopasowany do Twojej sytuacji życiowej.',
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-5 flex items-start gap-4 shadow-sm">
                  <CheckCircle size={20} className="text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#1A1A1A] text-sm mb-1">{item.title}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeInSection>

          {/* Rezultaty */}
          <FadeInSection className="max-w-3xl mx-auto mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-6">
                Konsultacje zakończysz z:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  'Jasnym kierunkiem rozwoju zawodowego',
                  'Dopracowanymi dokumentami aplikacyjnymi',
                  'Planem działania na najbliższy czas',
                  'Większą pewnością siebie w podejmowaniu decyzji',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm font-semibold text-[#1A1A1A] mb-3">Ale również poczujesz:</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { label: 'Spokój', desc: 'Wewnętrzne uspokojenie w trudnym czasie' },
                  { label: 'Ulgę', desc: 'Poczucie „nie jestem z tym sama/sam"' },
                  { label: 'Sprawczość', desc: 'Zmiana jest możliwa i mam na nią wpływ' },
                ].map((item, i) => (
                  <div key={i} className="bg-beige rounded-xl p-4">
                    <p className="font-semibold text-gold text-sm mb-1">{item.label}</p>
                    <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>

          {/* Pakiety */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
            {/* Pakiet A */}
            <FadeInSection delay={0.1}>
              <article className="bg-white rounded-2xl overflow-hidden border-2 border-warm shadow-sm h-full flex flex-col">
                <div className="p-8 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                    Pakiet A
                  </p>
                  <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">
                    Plan ścieżki kariery
                  </h3>
                  <p className="text-sm text-gray-400 mb-6">
                    3 spotkania × 60 minut + zadania domowe po każdym
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    Program idealny do określenia Twoich celów, zasobów i możliwości.
                    Dowiesz się jakiej zmiany zawodowej potrzebujesz i jak ją zrealizować.
                  </p>
                  <div className="space-y-4">
                    {[
                      {
                        num: '1',
                        title: 'Poznaj siebie – fundament zmian',
                        desc: 'Odkryjesz swoje zasoby, wartości i mocne strony. Przeanalizujemy Twoją sytuację i określimy dylematy, z którymi się mierzysz.',
                      },
                      {
                        num: '2',
                        title: 'Zdefiniuj swoją przyszłość',
                        desc: 'Określimy oczekiwania względem nowej pracy i nakreślimy możliwości zgodne z Twoimi potrzebami.',
                      },
                      {
                        num: '3',
                        title: 'Działaj świadomie',
                        desc: 'Wypracujesz indywidualny plan działania. Dowiesz się, jaką strategię szukania pracy przyjąć i jakich błędów unikać.',
                      },
                    ].map((step) => (
                      <div key={step.num} className="flex items-start gap-3">
                        <span className="w-7 h-7 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0 text-gold text-xs font-bold">
                          {step.num}
                        </span>
                        <div>
                          <p className="font-semibold text-[#1A1A1A] text-sm mb-0.5">
                            {step.title}
                          </p>
                          <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="border-t border-warm p-6 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">Twoja inwestycja</p>
                    <p className="text-2xl font-bold text-[#1A1A1A]">630 zł</p>
                  </div>
                  <Link href="/kontakt" className="btn-primary">
                    Umów się
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
                    Pakiet B
                  </p>
                  <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">
                    Zdobądź pracę, jaką chcesz
                  </h3>
                  <p className="text-sm text-gray-400 mb-6">
                    6 spotkań × 60 minut + 1 konsultacja mailowa
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    Kompletna ścieżka zmiany kariery — od określenia potrzeb i planu,
                    aż po nabycie praktycznych umiejętności. 6-tygodniowy program wsparcia.
                  </p>
                  <div className="space-y-3">
                    {[
                      'Wszystko z Pakietu A (spotkania 1–3)',
                      'Spotkanie 4: Skuteczne CV — nowocześnie, pod ATS',
                      'Spotkanie 5: Rozmowa kwalifikacyjna — ćwiczenia i feedback',
                      'Spotkanie 6: Profesjonalny wizerunek na LinkedIn',
                      '1 konsultacja mailowa w trakcie procesu',
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-gold flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="border-t border-warm p-6 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">Twoja inwestycja</p>
                    <p className="text-2xl font-bold text-[#1A1A1A]">980 zł</p>
                  </div>
                  <Link href="/kontakt" className="btn-primary">
                    Umów się
                  </Link>
                </div>
              </article>
            </FadeInSection>
          </div>

          {/* Bezpłatna rozmowa */}
          <FadeInSection className="max-w-3xl mx-auto mb-16">
            <div className="bg-brand-blue/5 border border-brand-blue/20 rounded-2xl p-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-blue mb-2">
                Bezpłatna rozmowa wstępna
              </p>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">
                Zanim podejmiesz decyzję o współpracy
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Zapraszam Cię na bezpłatną ~20-minutową rozmowę wstępną online lub
                telefoniczną. Opowiesz o swojej sytuacji i oczekiwaniach, a ja
                przedstawię możliwe formy wsparcia. Po rozmowie zdecydujesz, czy
                mój sposób pracy jest dla Ciebie odpowiedni — bez presji i zobowiązań.
              </p>
              <Link href="/kontakt" className="btn-primary inline-flex items-center gap-2">
                Umów bezpłatną rozmowę
                <ArrowRight size={16} />
              </Link>
            </div>
          </FadeInSection>

          {/* Dla kogo TAK / NIE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
            <FadeInSection delay={0.1}>
              <div className="bg-white rounded-2xl p-7 shadow-sm">
                <h3 className="text-lg font-bold text-[#1A1A1A] mb-5 flex items-center gap-2">
                  <CheckCircle size={20} className="text-gold" />
                  Konsultacje SĄ dla Ciebie, jeżeli:
                </h3>
                <ul className="space-y-3">
                  {[
                    'Nie chcesz tracić czasu na bierne wysyłanie CV bez wyraźnego celu',
                    'Szukasz pracy, ale nie wiesz dokładnie jakiej',
                    'Chcesz poznać swoje mocne strony i uporządkować zawodową wizję',
                    'Chcesz działać z konkretnym i jasnym planem',
                    'Chcesz obiektywnie przeanalizować sytuację z osobą z doświadczeniem',
                    'Chcesz poczuć motywację i uwierzyć, że praca może być dopasowana do Ciebie',
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
              <div className="bg-beige rounded-2xl p-7">
                <h3 className="text-lg font-bold text-[#1A1A1A] mb-5 flex items-center gap-2">
                  <XCircle size={20} className="text-gray-400" />
                  Konsultacje NIE SĄ dla Ciebie, jeśli:
                </h3>
                <ul className="space-y-3">
                  {[
                    'Nie chcesz podjąć wyzwania pracy nad sobą',
                    'Szukasz kogoś, kto tylko napisze za Ciebie CV',
                    'Nie widzisz wartości w analizowaniu predyspozycji i planowaniu przyszłości',
                    'Jesteś w pełni świadomy/a swoich mocnych stron i pełen/pełna motywacji',
                    'Nie jesteś w stanie przyjąć informacji zwrotnej',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <XCircle size={15} className="text-gray-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-500 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInSection>
          </div>

          {/* Marta vs Marek */}
          <FadeInSection className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-[#1A1A1A] mb-8 text-center">
              Porównanie — z pomocą i bez pomocy
            </h3>
            <div className="rounded-2xl overflow-hidden border border-warm shadow-sm">
              <div className="grid grid-cols-2">
                <div className="bg-gold text-white p-5 text-center">
                  <p className="font-bold text-lg">Marta</p>
                  <p className="text-white/80 text-sm">z pomocą konsultantki</p>
                </div>
                <div className="bg-beige p-5 text-center">
                  <p className="font-bold text-lg text-[#1A1A1A]">Marek</p>
                  <p className="text-gray-400 text-sm">bez pomocy konsultantki</p>
                </div>
              </div>
              {[
                [
                  'Określiłam moje mocne strony, o których jestem w stanie otwarcie mówić.',
                  'Mam duże doświadczenie, ale dokładnie nie wiem co mam robić, w czym jestem naprawdę dobry.',
                ],
                [
                  '+100% do pewności siebie — śmiało mówię, że super wykonuję swoją pracę.',
                  'Nie mam jasno sprecyzowanego celu zawodowego. Ogólnie to mogę robić wszystko.',
                ],
                [
                  'Obrałam kierunek na najbliższe 3 lata. Rozpisałam plan i bilans możliwości.',
                  'Nie wiem, gdzie szukać pracy, jak dotrzeć do pracodawców, bo nie jestem pewny czego szukam.',
                ],
                [
                  'Wiem jak rozmawiać z pracodawcą o mojej przyszłości. Mam konkretny plan rozwoju.',
                  'Utknąłem — żaden pracodawca od dłuższego czasu się do mnie nie odzywa.',
                ],
                [
                  'W razie zmiany pracy wiem, jak docierać do ciekawych ofert z mojej branży.',
                  'Prawdopodobnie zostanę tu, gdzie jestem. Ogólnie to nie ma pracy w moim mieście.',
                ],
              ].map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-2 ${
                    i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                  }`}
                >
                  <div className="p-5 border-r border-warm">
                    <p className="text-gray-600 text-sm leading-relaxed">{row[0]}</p>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-400 text-sm leading-relaxed">{row[1]}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ===================================================== */}
      {/* TWOJE SKUTECZNE CV */}
      {/* ===================================================== */}
      <section id="skuteczne-cv" className="bg-white section-padding scroll-mt-20">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <FadeInSection className="text-center mb-12">
              <p className="section-label">2. Twoje skuteczne CV</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-6">
                Pomogę Ci stworzyć dokument, który zwiększy Twoje szanse na sukces
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto">
                Od analizy obecnego CV, przez poznanie najlepszych praktyk, naukę
                eksponowania atutów — po umiejętność samodzielnego dostosowywania
                dokumentu do każdej oferty. Wszystko, czego potrzebujesz, żeby
                zostać zaproszonym/ą na rozmowę.
              </p>
            </FadeInSection>

            {/* Pain points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
              {[
                'Ciągle wysyłasz CV i nie dostajesz zaproszenia na rozmowę?',
                'Myślisz, że nie masz żadnych osiągnięć, które możesz wpisać do CV?',
                'Zaczynasz w nowej branży i nie wiesz, jak dopasować CV?',
              ].map((text, i) => (
                <FadeInSection key={i} delay={i * 0.1}>
                  <div className="bg-beige rounded-xl p-5 flex items-start gap-3 h-full">
                    <ArrowRight size={16} className="text-gold flex-shrink-0 mt-0.5" />
                    <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
                  </div>
                </FadeInSection>
              ))}
            </div>

            {/* What you'll learn */}
            <FadeInSection className="mb-12">
              <div className="bg-beige rounded-2xl p-8">
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-6">
                  Co zyskasz po konsultacji?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    'Nauczysz się prawidłowo projektować skuteczne CV — pracujemy na Twoim lub tworzymy od podstaw',
                    'Będziesz umiał/a dopasować CV do każdej oferty pracy',
                    'Zrozumiesz czego rekruter szuka i jak zwrócić jego uwagę',
                    'Nauczysz się podkreślać atuty, sukcesy i kompetencje — wzrośnie Twoje poczucie wartości',
                    'Poznasz specyfikę projektowania CV pod sztuczną inteligencję (ATS)',
                    'Zbudujesz wizerunek profesjonalisty/tki',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>

            {/* Package box */}
            <FadeInSection>
              <div className="bg-white border-2 border-warm rounded-2xl overflow-hidden shadow-sm">
                <div className="p-8">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                    Co obejmuje pakiet?
                  </p>
                  <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">
                    Twoje skuteczne CV
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    To coś więcej niż gotowy szablon CV. To wiedza i umiejętności,
                    które sprawią, że każdy życiorys przygotowany przez Ciebie
                    będzie skuteczny. To zwielokrotni Twoje szanse w każdej rekrutacji.
                  </p>
                  <div className="space-y-2 mb-2">
                    {[
                      '1 spotkanie online (60 minut)',
                      '1 konsultacja mailowa',
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle size={15} className="text-gold flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="border-t border-warm p-6 flex items-center justify-between bg-beige/50">
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">Twoja inwestycja</p>
                    <p className="text-3xl font-bold text-[#1A1A1A]">250 zł</p>
                  </div>
                  <Link href="/kontakt" className="btn-primary inline-flex items-center gap-2">
                    Umów się
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* WRÓĆ PEWNIEJSZA */}
      {/* ===================================================== */}
      <section id="wroc-pewniejsza" className="bg-beige section-padding scroll-mt-20">
        <div className="container-width">
          <FadeInSection className="text-center mb-4">
            <p className="section-label">3. Program dla mam</p>
          </FadeInSection>

          {/* Big headline with gold accent */}
          <FadeInSection className="text-center mb-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] leading-tight mb-6">
              Wróć{' '}
              <span className="text-gold">Pewniejsza</span>
            </h2>
            <p className="text-gray-500 text-xl leading-relaxed max-w-2xl mx-auto">
              Pomagam mamom powracającym z urlopu macierzyńskiego zamienić powrót
              do starej pracy na nową, lepiej dopasowaną ścieżkę kariery — na którą
              same by się nie odważyły.
            </p>
          </FadeInSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto mb-16">
            {/* Story */}
            <FadeInSection direction="left">
              <div>
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-6">
                  Dlaczego stworzyłam „Wróć Pewniejsza"
                </h3>
                <div className="space-y-4 text-gray-500 text-base leading-relaxed">
                  <p>
                    Wielokrotnie spotykałam mamy, które po przerwie macierzyńskiej
                    czuły się zalęknione nową rzeczywistością — niepewne swoich
                    umiejętności, rozdarte między rolą mamy a potrzebą przestrzeni
                    dla siebie.
                  </p>
                  <p>
                    Chciały zmiany, ale strach przed pytaniem „co teraz?" je
                    paraliżował. Sama, będąc mamą, przeżywałam to samo.
                  </p>
                  <p className="font-medium text-[#1A1A1A]">
                    Jestem mamą dwóch chłopców urodzonych rok po roku i wracałam
                    po ponad 5-letniej przerwie na rynek pracy. Po takim czasie
                    rynek zmienił się nie do poznania — nowe technologie, oczekiwania,
                    umiejętności.
                  </p>
                  <p>
                    Rozumiem Twoją niepewność, bo sama byłam w tym miejscu.
                  </p>
                </div>
              </div>
            </FadeInSection>

            {/* For who */}
            <FadeInSection direction="right" delay={0.1}>
              <div>
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-6">
                  Dla kogo jest ten program?
                </h3>
                <div className="space-y-3 mb-8">
                  {[
                    'Kończysz urlop i czujesz presję „wróć, bo tak wypada"',
                    'Chcesz dopasować pracę do nowej rzeczywistości — z dzieckiem i nowymi obowiązkami',
                    'Szukasz wsparcia w podjęciu świadomej decyzji',
                    'Chcesz poczuć, że zmiana jest możliwa i masz na nią wpływ',
                    'Potrzebujesz konkretnych kroków zamiast zagubienia i chaosu',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm">
                      <CheckCircle size={16} className="text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="bg-brand-blue/5 border border-brand-blue/15 rounded-xl p-5">
                  <p className="text-xs font-semibold text-brand-blue uppercase tracking-wider mb-3">
                    Wyniki badań
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    <strong>95% kobiet</strong> obawia się powrotu do pracy po urlopie
                    macierzyńskim. Najczęstsze lęki to łączenie kariery z rodziną (74%),
                    utrata umiejętności (53%), brak wsparcia zespołu (32%) i nowe
                    technologie (28%).
                  </p>
                  <p className="text-gray-400 text-xs mt-2">
                    Źródło: raport Bosch i Fundacji Mamo Pracuj
                  </p>
                </div>
              </div>
            </FadeInSection>
          </div>

          {/* 5 meetings */}
          <FadeInSection className="max-w-4xl mx-auto mb-12">
            <h3 className="text-2xl font-bold text-[#1A1A1A] mb-8 text-center">
              Co zyskasz w 5 tygodni?
            </h3>
            <div className="space-y-4">
              {[
                {
                  num: '1',
                  title: 'Mapa Twojej sytuacji',
                  desc: 'Nazwiesz swój punkt startowy i emocje związane z powrotem. Zobaczysz pełny obraz swojej sytuacji i będziesz miała jasność granic, priorytetów oraz pierwszy krok do decyzji.',
                },
                {
                  num: '2',
                  title: 'Analiza opcji i ryzyka',
                  desc: 'Obiektywnie porównamy dwa scenariusze — powrót do starej pracy i obranie nowej drogi. Dostaniesz konkretne narzędzia do porównania opcji i przemyślenia, co możesz negocjować.',
                },
                {
                  num: '3',
                  title: 'Analiza doświadczeń: Buduj pewność na fundamencie',
                  desc: 'Przejdziesz przez analizę doświadczeń zawodowych i życiowych. Odkryjesz ukryte zasoby i mocne strony — bez osądu, z pełną akceptacją.',
                },
                {
                  num: '4',
                  title: 'Odśwież CV i zabłyśnij po przerwie',
                  desc: 'Odświeżymy CV, by podkreślało Twoje atuty i przeszło przez filtry ATS. Dodamy unikalne historie sukcesu i dostosujesz CV do rzeczywistości po przerwie.',
                },
                {
                  num: '5',
                  title: 'Decyzja i pierwszy krok',
                  desc: 'Zamykamy 4 tygodnie pracy z klarowną decyzją, pierwszym krokiem w planie i poczuciem kontroli. Dostajesz plan na najbliższe 30 dni i materiały do pracy własnej.',
                },
              ].map((step) => (
                <div key={step.num} className="bg-white rounded-xl p-6 flex items-start gap-5 shadow-sm">
                  <span className="w-9 h-9 bg-gold text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                    {step.num}
                  </span>
                  <div>
                    <p className="font-semibold text-[#1A1A1A] mb-1">{step.title}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeInSection>

          {/* Package box */}
          <FadeInSection className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl overflow-hidden border-2 border-gold shadow-lg">
              <div className="bg-gold text-white text-xs font-semibold uppercase tracking-widest text-center py-2">
                Polecane
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">
                  Program „Wróć Pewniejsza"
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  Bezpieczna przestrzeń, żeby zatrzymać się i zastanowić: Czego chcę?
                  Co mogę? Jak widzę siebie w nowej roli? Nie narzucam odpowiedzi.
                  Pytam, słucham, wspieram — żebyś sama znalazła rozwiązanie.
                </p>
                <div className="space-y-2 mb-6">
                  {[
                    '5 indywidualnych spotkań × 60 minut',
                    'Narzędzia do pracy własnej po każdym spotkaniu',
                    'Wsparcie przez cały proces zmiany',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle size={15} className="text-gold flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{item}</span>
                    </div>
                  ))}
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

      {/* ===== NIE WIESZ CO WYBRAĆ ===== */}
      <section className="bg-brand-blue section-padding">
        <div className="container-width text-center">
          <FadeInSection>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Nie wiesz, co wybrać?
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Umów bezpłatną rozmowę wstępną — wspólnie ustalimy, jaka forma
              współpracy będzie dla Ciebie najlepsza. Nie musisz wiedzieć
              wszystkiego z góry, żeby zrobić pierwszy krok.
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
