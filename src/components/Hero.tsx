"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeUp, floating } from '@/utils/animations'

export default function Hero() {
  return (
    <section id="inicio" className="min-h-screen flex items-center">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-6 items-center py-20">
        <div>
          <motion.h1 variants={fadeUp} initial="hidden" whileInView="show"
            className="text-4xl sm:text-5xl lg:text-6xl leading-tight font-black">
            CADA KILÓMETRO CUENTA UNA HISTORIA
          </motion.h1>
          <motion.p variants={fadeUp} initial="hidden" whileInView="show"
            className="mt-6 text-lg text-[#5C5C5C] max-w-xl">
            Somos una comunidad de corredores apasionados por la aventura, la naturaleza y los desafíos que transforman vidas.
          </motion.p>
          <motion.div className="mt-8 flex gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.4 } }}>
            <a href="#eventos" className="rounded-full bg-[#D77B30] text-white px-5 py-3 font-medium">Próximo Evento</a>
            <a href="#aventuras" className="rounded-full border border-[#223024] px-5 py-3 font-medium">Ver Aventuras</a>
          </motion.div>
        </div>

        <div className="relative">
          <motion.div variants={floating} animate="animate" className="relative w-full h-[420px] md:h-[520px]">
            <Image
              src="/images/héroe-corredor.webp.png"
              alt="Corredor en la montaña"
              fill
              style={{ objectFit: 'cover' }}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
          <div className="pointer-events-none absolute inset-0 watercolor-top" />
        </div>
      </div>
    </section>
  )
}
