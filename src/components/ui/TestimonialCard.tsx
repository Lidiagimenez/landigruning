type Testimonial = {
  name: string
  quote: string
}

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="p-6 bg-white rounded-lg shadow">
      <div className="w-12 h-12 rounded-full bg-[#324734] flex items-center justify-center text-white font-bold">{testimonial.name.charAt(0)}</div>
      <div className="mt-3 font-bold">{testimonial.name}</div>
      <p className="mt-2 text-sm text-[#5C5C5C]">&quot;{testimonial.quote}&quot;</p>
    </article>
  )
}
