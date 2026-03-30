'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Natalia Jędrzejewska',
    role: 'Doradca i opiekun klienta, Sommelier',
    content:
      'Ze spotkania na spotkanie zauważyłam stopniową zmianę swojego podejścia odnośnie szukania pracy i oceny moich kwalifikacji. Po kilkuletnim wykluczeniu z rynku pracy Ewelina w naturalny, ale bardzo celowany sposób wpłynęła na zmianę mojej postawy i zmotywowała mnie do działania. Z całego serca polecam.',
  },
  {
    id: 2,
    name: 'Eliza Rokosz',
    role: 'Kierownik Sprzedaży, Polska Korporacja Recyklingu',
    content:
      'Ewelina to wyjątkowa konsultantka kariery — profesjonalistka z bardzo indywidualnym podejściem. Dokładnie analizuje sytuację klienta, jest empatyczna i zawsze świetnie przygotowana. Dzięki jej wsparciu odnalazłam swoją zawodową drogę i poczułam, że mam realny wpływ na dalszy rozwój kariery.',
  },
  {
    id: 3,
    name: 'Marta Banaszewska',
    role: 'Employer Branding Specialist, Xebia Polska',
    content:
      'Po raz pierwszy, bez wątpliwości, byłam w stanie powiedzieć głośno, że super wykonuję swoją pracę i jestem dobrym pracownikiem — +100% do pewności siebie. Ewelina pomogła mi określić moje mocne strony, o których jestem teraz w stanie mówić otwarcie. Zmiany w mojej głowie były ogromne.',
  },
  {
    id: 4,
    name: 'Sylwia Szewczuk',
    role: 'Grafik komputerowy, INQ Trade',
    content:
      'Ewelina profesjonalnie pomogła mi przygotować się do rozmowy kwalifikacyjnej, zmniejszając poziom stresu i dodając wiary w siebie. Jej pytania i uwagi sprawiły, że byłam dużo spokojniejsza i pewniejsza siebie. Ostatecznie udało mi się odnieść sukces w znalezieniu nowej pracy.',
  },
  {
    id: 5,
    name: 'Łukasz Klat',
    role: 'Operator filmowy',
    content:
      'W ciągu 4 spotkań wyznaczyliśmy plan na kompletne przebranżowienie oraz maksymalizację zasobów „tu i teraz". Ewelina ostudziła mój zapał do skoku na główkę i dała mi narzędzia do sprawdzenia głębokości wody. Narzędzia, ciepło i zainteresowanie klientem — całym sercem polecam.',
  },
  {
    id: 6,
    name: 'Anna Moryson',
    role: '',
    content:
      'Konsultacja z Eweliną pozwoliła mi zupełnie inaczej spojrzeć na siebie i swoją sytuację na rynku pracy. Czuję się pewniej i spokojniej — wiem na czym mogę budować i wiem, że moje poszukiwania idealnego miejsca to nie jest naiwna mrzonka. Praca nad CV ruszyła do przodu i w fajnym kierunku!',
  },
  {
    id: 7,
    name: 'Weronika Bartczak',
    role: '',
    content:
      'Ewelina zdiagnozowała główny problem w moim CV i przeszła ze mną krok po kroku co mogę zmienić. Na dalszych spotkaniach pomogła mi odnaleźć siebie i zdecydować się na jedną ścieżkę, a przećwiczenie rozmowy rekrutacyjnej dodało mi pewności siebie. Naprawdę szczerze polecam!',
  },
]

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [isAutoPlaying, next])

  const handleManualNav = (action: () => void) => {
    setIsAutoPlaying(false)
    action()
    // Resume autoplay after 10s of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <div className="relative max-w-3xl mx-auto">
      {/* Card */}
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="bg-white rounded-2xl shadow-md p-8 md:p-12"
          >
            <Quote
              size={40}
              className="text-brand-brown/40 mb-6 fill-brand-brown/20"
              aria-hidden="true"
            />
            <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
              &ldquo;{testimonials[current].content}&rdquo;
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                <span className="text-brand-blue font-bold text-lg">
                  {testimonials[current].name.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-semibold text-[#1A1A1A]">
                  {testimonials[current].name}
                </p>
                <p className="text-sm text-gray-500">{testimonials[current].role}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mt-8">
        {/* Dot navigation */}
        <div className="flex items-center gap-2" role="tablist" aria-label="Nawigacja opinii">
          {testimonials.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === current}
              aria-label={`Opinia ${i + 1}`}
              onClick={() => handleManualNav(() => setCurrent(i))}
              className={`transition-all duration-300 rounded-full ${
                i === current
                  ? 'w-8 h-2.5 bg-gold'
                  : 'w-2.5 h-2.5 bg-warm hover:bg-gold/40'
              }`}
            />
          ))}
        </div>

        {/* Arrow buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleManualNav(prev)}
            className="w-10 h-10 rounded-full border border-warm flex items-center justify-center hover:border-gold hover:text-gold transition-colors duration-200"
            aria-label="Poprzednia opinia"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => handleManualNav(next)}
            className="w-10 h-10 rounded-full bg-gold text-white flex items-center justify-center hover:bg-gold-dark transition-colors duration-200"
            aria-label="Następna opinia"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}
