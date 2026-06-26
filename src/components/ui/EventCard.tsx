import Image from 'next/image'

type Event = {
  image: string
  title: string
  date: string
  place: string
  time: string
  distances: string[]
}

export default function EventCard({ event }: { event: Event }) {
  return (
    <article className="rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300">
      <div className="relative h-52 w-full">
        <Image src={event.image} alt={event.title} fill className="object-cover" />
      </div>
      <div className="p-5">
        <h4 className="text-lg font-black text-[#111111]">{event.title}</h4>
        <p className="text-sm text-[#5C5C5C] mt-1">{event.date} · {event.place} · {event.time}</p>
        <div className="mt-3 flex gap-2 flex-wrap">
          {event.distances.map((d) => (
            <span key={d} className="text-xs px-3 py-1 border border-[#324734] text-[#324734] rounded-full font-medium">{d}</span>
          ))}
        </div>
        <div className="mt-4">
          <a href="#contacto" className="inline-block px-5 py-2 rounded-full border border-[#111111] text-sm font-medium hover:bg-[#111111] hover:text-white transition-colors">
            Más Información
          </a>
        </div>
      </div>
    </article>
  )
}
