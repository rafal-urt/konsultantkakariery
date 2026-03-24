'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface StatItem {
  value: number
  suffix: string
  label: string
  description: string
}

const stats: StatItem[] = [
  {
    value: 1000,
    suffix: '+',
    label: 'godzin konsultacji',
    description:
      'Osoby w kryzysie zawodowym, w procesie zmiany pracy, przebranżowienia oraz powrotu na rynek pracy.',
  },
  {
    value: 7,
    suffix: '+',
    label: 'lat doświadczenia',
    description:
      'Praktyka w doradztwie zawodowym, pracy z rynkiem pracy i procesami rozwoju kariery.',
  },
]

function Counter({ value, suffix, duration = 2000 }: { value: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    const startTime = performance.now()

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(value * eased))
      if (progress < 1) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [isInView, value, duration])

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  )
}

export default function StatsCounter() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="text-center md:text-left p-8 bg-white rounded-2xl shadow-sm"
        >
          <p className="text-6xl lg:text-7xl font-bold text-gold mb-2 leading-none">
            <Counter value={stat.value} suffix={stat.suffix} />
          </p>
          <p className="text-xl font-semibold text-[#1A1A1A] mb-3">{stat.label}</p>
          <p className="text-gray-500 text-sm leading-relaxed">{stat.description}</p>
        </div>
      ))}
    </div>
  )
}
