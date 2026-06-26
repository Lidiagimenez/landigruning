"use client"

import { TESTIMONIALS } from '@/lib/constants'
import { User } from 'lucide-react'

export default function Testimonials() {
  return (
    <section id="comunidad" className="py-20 bg-white">
      <div className="container">
        <div className="mb-12 text-center">
          <p className="text-[#D77B30] text-sm font-medium uppercase tracking-widest mb-2">Lo que dicen</p>
          <h2 className="text-4xl md:text-5xl font-black text-[#111111]">Nuestra Comunidad</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="bg-[#FAF8F4] rounded-2xl p-8 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#324734] flex items-center justify-center flex-shrink-0">
                  <User size={22} color="white" />
                </div>
                <p className="font-black text-[#111111]">{t.name}</p>
              </div>
              <p className="text-[#5C5C5C] leading-relaxed italic">&ldquo;{t.quote}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
