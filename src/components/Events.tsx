import { EVENTS } from '@/lib/constants'
import EventCard from '@/components/ui/EventCard'

export default function Events() {
  return (
    <section id="eventos" className="py-20 bg-white">
      <div className="container">
        <div className="mb-12 text-center">
          <p className="text-[#D77B30] text-sm font-medium uppercase tracking-widest mb-2">Desafíos que te esperan</p>
          <h2 className="text-4xl md:text-5xl font-black text-[#111111]">Próximos Eventos</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EVENTS.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  )
}
