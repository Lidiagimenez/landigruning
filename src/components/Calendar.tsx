const months = [
  { month: 'Octubre',   event: 'Trail Altas Cumbres',  color: 'bg-[#D77B30]' },
  { month: 'Noviembre', event: 'Sunset Run',            color: 'bg-[#324734]' },
  { month: 'Diciembre', event: 'Mountain Challenge',    color: 'bg-[#223024]' },
  { month: 'Enero',     event: 'Night Trail',           color: 'bg-[#111111]' },
]

export default function Calendar() {
  return (
    <section className="py-20 bg-[#FAF8F4]">
      <div className="container">
        <div className="mb-12 text-center">
          <p className="text-[#D77B30] text-sm font-medium uppercase tracking-widest mb-2">Agenda 2026</p>
          <h2 className="text-4xl md:text-5xl font-black text-[#111111]">Calendario de Eventos</h2>
        </div>

        {/* Desktop timeline */}
        <div className="hidden md:flex items-start gap-0">
          {months.map((m, i) => (
            <div key={m.month} className="flex-1 flex flex-col items-center">
              <div className={`w-5 h-5 rounded-full ${m.color} z-10`} />
              {i < months.length - 1 && (
                <div className="absolute mt-2.5 h-0.5 bg-gray-300" style={{ width: 'calc(100% / 4)', left: `calc(${i} * 25% + 12.5%)` }} />
              )}
              <div className="mt-4 text-center px-2">
                <p className={`text-xs font-black uppercase tracking-widest text-white px-3 py-1 rounded-full ${m.color} inline-block mb-2`}>{m.month}</p>
                <p className="text-sm font-medium text-[#111111]">{m.event}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile timeline */}
        <div className="md:hidden flex flex-col gap-6">
          {months.map((m) => (
            <div key={m.month} className="flex items-center gap-4">
              <div className={`w-4 h-4 rounded-full flex-shrink-0 ${m.color}`} />
              <div>
                <p className={`text-xs font-black uppercase tracking-widest text-white px-3 py-1 rounded-full ${m.color} inline-block mb-1`}>{m.month}</p>
                <p className="text-sm font-medium text-[#111111]">{m.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
