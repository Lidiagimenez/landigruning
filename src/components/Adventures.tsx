import { ADVENTURES } from '@/lib/constants'
import AdventureCard from '@/components/ui/AdventureCard'

export default function Adventures() {
  return (
    <section id="aventuras" className="py-20 bg-[#FAF8F4]">
      <div className="container">
        <div className="mb-12 text-center">
          <p className="text-[#D77B30] text-sm font-medium uppercase tracking-widest mb-2">Aventuras realizadas</p>
          <h2 className="text-4xl md:text-5xl font-black text-[#111111]">Momentos que quedan para siempre</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {ADVENTURES.map((a) => (
            <AdventureCard key={a.id} adventure={a} />
          ))}
        </div>
      </div>
    </section>
  )
}
