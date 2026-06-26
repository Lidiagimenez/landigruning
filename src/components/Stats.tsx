"use client"

import Image from 'next/image'
import CountUp from 'react-countup'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  { value: 1200, suffix: '+', label: 'Participantes' },
  { value: 48,   suffix: '',  label: 'Eventos realizados' },
  { value: 12,   suffix: '',  label: 'Provincias' },
  { value: 98,   suffix: '%', label: 'Satisfacción' },
]

export default function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      <Image src="/images/stats-background.webp.jpg" alt="Fondo estadísticas" fill style={{ objectFit: 'cover' }} />
      <div className="absolute inset-0 bg-[#111111]/70" />
      <div className="relative container grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="text-4xl font-black">
              {inView ? <CountUp end={s.value} duration={2} /> : 0}{s.suffix}
            </p>
            <p className="mt-2 text-sm uppercase tracking-wide">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
