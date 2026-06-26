import Image from 'next/image'

type Adventure = {
  image: string
  title: string
}

export default function AdventureCard({ adventure }: { adventure: Adventure }) {
  return (
    <article className="group rounded-2xl overflow-hidden shadow hover:shadow-xl transition-shadow duration-300 bg-white">
      <div className="relative h-56 w-full">
        <Image
          src={adventure.image}
          alt={adventure.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <p className="absolute bottom-0 left-0 p-4 text-white font-black text-base leading-tight">{adventure.title}</p>
      </div>
    </article>
  )
}
