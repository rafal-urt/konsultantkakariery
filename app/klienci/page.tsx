import type { Metadata } from 'next'
import Link from 'next/link'
import { Quote, Star } from 'lucide-react'
import FadeInSection from '@/components/FadeInSection'

export const metadata: Metadata = {
  title: 'Opinie klientów — Konsultantka Kariery Ewelina Dyjak',
  description:
    'Przeczytaj opinie klientów Eweliny Dyjak — konsultantki kariery. Dowiedz się, jak pomogła w zmianie pracy, budowaniu pewności siebie i rozwoju zawodowym.',
  openGraph: {
    title: 'Opinie klientów — Konsultantka Kariery Ewelina Dyjak',
    description:
      'Co mówią klienci Eweliny Dyjak o konsultacjach kariery? Przeczytaj prawdziwe opinie i dowiedz się, jak wygląda współpraca.',
    url: 'https://konsultantkakariery.pl/klienci',
  },
  alternates: { canonical: 'https://konsultantkakariery.pl/klienci' },
}

const testimonials = [
  {
    name: 'Eliza',
    role: 'Kierownik Sprzedaży',
    initial: 'E',
    rating: 5,
    short: 'Odnalazłam swoją zawodową drogę',
    content: `Ewelina to profesjonalistka z bardzo indywidualnym podejściem do klienta. Dokładnie analizuje sytuację, jest empatyczna i zawsze świetnie przygotowana do spotkań.

Dzięki jej wsparciu odnalazłam swoją zawodową drogę i poczułam, że mam realny wpływ na dalszy rozwój kariery. Byłam osobą zagubioną — nie wiedziałam, czy zmienić pracę, czy może całą branżę, czy to tylko chwilowe wypalenie.

Ewelina pomogła mi zadać właściwe pytania, spojrzeć na swoją sytuację z innej perspektywy i podjąć decyzję, z którą czułam się naprawdę dobrze. Polecam serdecznie osobom zagubionym w karierze, chcącym zmienić pracę, mającym problem z CV, lub potrzebującym wsparcia przed ważną rozmową kwalifikacyjną.`,
  },
  {
    name: 'Marta',
    role: 'Employer Branding Specialist',
    initial: 'M',
    rating: 5,
    short: 'Ogromny wzrost pewności siebie',
    content: `Dzięki pracy z Eweliną po raz pierwszy bez wahania nazwałam swoje mocne strony i poczułam ogromny wzrost pewności siebie. Zrozumiałam, nad czym chcę pracować i w jakim kierunku iść zawodowo.

Zmiany, które zaszły, były dla mnie szczególnie ważne na poziomie myślenia o sobie. Wcześniej ciągle umniejszałam swoje osiągnięcia i kompetencje. Po pracy z Eweliną patrzę na siebie i swoją karierę zupełnie inaczej.

To, co cenię najbardziej, to umiejętność Eweliny do słuchania i zadawania pytań, które naprawdę skłaniają do refleksji. Nie daje gotowych odpowiedzi — pomaga odkryć te własne.`,
  },
  {
    name: 'Sylwia',
    role: 'Graficzka Komputerowa',
    initial: 'S',
    rating: 5,
    short: 'Znalazłam nową pracę dzięki tej współpracy',
    content: `Ewelina świetnie przygotowała mnie do rozmowy kwalifikacyjnej, znacząco obniżając poziom stresu i dodając wiary w siebie. Jej pytania i wskazówki pomogły mi lepiej zaprezentować swoje kompetencje.

Przed spotkaniem z Eweliną byłam przekonana, że sobie nie poradzę na rozmowie. Pracowałyśmy nad tym, jak mówić o swoich projektach, jak odpowiadać na trudne pytania i jak radzić sobie z tremą.

Dzięki temu udało mi się z sukcesem znaleźć nową pracę. Jestem naprawdę wdzięczna za tę pomoc — to był jeden z tych momentów, kiedy poczułam, że profesjonalne wsparcie naprawdę robi różnicę.`,
  },
  {
    name: 'Łukasz',
    role: 'Operator Filmowy',
    initial: 'Ł',
    rating: 5,
    short: 'Spokój, jasność i plan działania',
    content: `W trakcie kilku spotkań stworzyliśmy konkretny i realny plan przebranżowienia oraz dalszego rozwoju kariery. Ewelina dała mi narzędzia, które mogę wykorzystywać także samodzielnie w przyszłości.

Zaczęliśmy od tego, gdzie jestem teraz i dlaczego czuję, że czas na zmianę. Przez kolejne spotkania odkrywaliśmy moje zasoby, możliwe kierunki i to, co naprawdę jest dla mnie ważne w pracy.

Ta współpraca przyniosła mi spokój, jasność i poczucie kontroli nad moją ścieżką zawodową. Wychodziłem z każdego spotkania z konkretnym action-stepem — coś, co mogłem zrobić już następnego dnia. Nie było to ogólnikowe doradztwo, tylko realne, dopasowane do mnie wsparcie.`,
  },
  {
    name: 'Natalia',
    role: 'Doradczyni i opiekunka klienta, sommelierka',
    initial: 'N',
    rating: 5,
    short: 'Odzyskałam energię i sprawczość',
    content: `Rozmowy z Eweliną miały ogromny wpływ na moją pewność siebie i sposób myślenia o pracy. Pomogła mi odzyskać energię, sprawczość i wiarę w siebie w trudnym momencie zawodowym.

Byłam w miejscu, w którym praca przestała mi dawać satysfakcję, ale nie wiedziałam, czego tak naprawdę chcę. Ewelina bardzo mądrze prowadziła nasze rozmowy — bez narzucania swojego zdania, ale z pomocą w odkrywaniu mojego.

Do dziś jestem zaskoczona, jak duży efekt przyniosła ta współpraca. Polecam Ewelinę każdemu, kto czuje się zagubiony zawodowo — niezależnie od etapu kariery.`,
  },
]

export default function KlienciPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="bg-beige section-padding">
        <div className="container-width text-center">
          <FadeInSection>
            <p className="section-label">Opinie</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#1A1A1A] leading-tight mb-6">
              Dowiedz się, co sądzą moi Klienci
            </h1>
            <p className="text-gray-500 text-xl max-w-2xl mx-auto">
              Zobacz jak wspieram rozwój — w słowach osób, które przeszły przez
              proces zmiany i udało im się go zakończyć sukcesem.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* ===== OPINIE ===== */}
      <section className="bg-white section-padding">
        <div className="container-width">
          <div className="space-y-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <FadeInSection key={index} delay={index * 0.08}>
                <article className="bg-white border border-warm rounded-2xl p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow duration-300">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start gap-6 mb-6">
                    <div className="w-16 h-16 rounded-full bg-beige flex items-center justify-center flex-shrink-0">
                      <span className="text-gold font-bold text-2xl">
                        {testimonial.initial}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-1">
                        <h2 className="text-lg font-semibold text-[#1A1A1A]">
                          {testimonial.name}
                        </h2>
                        <div className="flex items-center gap-0.5" aria-label={`Ocena: ${testimonial.rating}/5`}>
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <Star key={i} size={14} className="text-gold fill-gold" />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                      <p className="text-gold font-semibold text-sm mt-2 italic">
                        &ldquo;{testimonial.short}&rdquo;
                      </p>
                    </div>
                    <Quote
                      size={32}
                      className="text-gold/15 fill-gold/10 flex-shrink-0 hidden sm:block"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Content */}
                  <div className="pl-0 sm:pl-22">
                    {testimonial.content.split('\n\n').map((paragraph, i) => (
                      <p key={i} className="text-gray-600 leading-relaxed mb-4 last:mb-0">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </article>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-beige section-padding">
        <div className="container-width text-center">
          <FadeInSection>
            <p className="section-label">Twoja kolej</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-6">
              Odblokuj swój potencjał
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto mb-10">
              Dołącz do osób, które zdecydowały się wziąć sprawy kariery w swoje
              ręce. Pierwsze kroki są najtrudniejsze — ja jestem po to, żeby je
              z Tobą przejść.
            </p>
            <Link href="/kontakt" className="btn-primary inline-block">
              Umów konsultację
            </Link>
          </FadeInSection>
        </div>
      </section>
    </>
  )
}
