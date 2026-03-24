'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Natalia',
    role: 'Doradczyni i opiekunka klienta, sommelierka',
    content:
      'Rozmowy z Eweliną miały ogromny wpływ na moją pewność siebie i sposób myślenia o pracy. Pomogła mi odzyskać energię, sprawczość i wiarę w siebie w trudnym momencie zawodowym. Do dziś jestem zaskoczona, jak duży efekt przyniosła ta współpraca.',
  },
  {
    id: 2,
    name: 'Eliza',
    role: 'Kierownik Sprzedaży',
    content:
      'Ewelina to profesjonalistka z bardzo indywidualnym podejściem do klienta. Dokładnie analizuje sytuację, jest empatyczna i zawsze świetnie przygotowana do spotkań. Dzięki jej wsparciu odnalazłam swoją zawodową drogę i poczułam, że mam realny wpływ na dalszy rozwój kariery.',
  },
  {
    id: 3,
    name: 'Marta',
    role: 'Employer Branding Specialist',
    content:
      'Dzięki pracy z Eweliną po raz pierwszy bez wahania nazwałam swoje mocne strony i poczułam ogromny wzrost pewności siebie. Zrozumiałam, nad czym chcę pracować i w jakim kierunku iść zawodowo. Zmiany, które zaszły, były dla mnie szczególnie ważne na poziomie myślenia o sobie.',
  },
  {
    id: 4,
    name: 'Sylwia',
    role: 'Graficzka Komputerowa',
    content:
      'Ewelina świetnie przygotowała mnie do rozmowy kwalifikacyjnej, znacząco obniżając poziom stresu i dodając wiary w siebie. Jej pytania i wskazówki pomogły mi lepiej zaprezentować swoje kompetencje. Dzięki temu udało mi się z sukcesem znaleźć nową pracę.',
  },
  {
    id: 5,
    name: 'Łukasz',
    role: 'Operator Filmowy',
    content:
      'W trakcie kilku spotkań stworzyliśmy konkretny i realny plan przebranżowienia oraz dalszego rozwoju kariery. Ewelina dała mi narzędzia, które mogę wykorzystywać także samodzielnie w przyszłości. Ta współpraca przyniosła mi spokój, jasność i poczucie kontroli nad moją ścieżką zawodową.',
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
              className="text-gold/20 mb-6 fill-gold/10"
              aria-hidden="true"
            />
            <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
              &ldquo;{testimonials[current].content}&rdquo;
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-beige flex items-center justify-center flex-shrink-0">
                <span className="text-gold font-bold text-lg">
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
