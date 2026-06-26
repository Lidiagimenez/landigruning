import { Shield, Droplet, Users, MapPin, Activity } from 'lucide-react'

const icons: Record<string, React.ElementType> = { Shield, Droplet, Users, MapPin, Activity }

const benefits = [
  { icon: 'Shield',   title: 'Seguridad',   desc: 'Rutas evaluadas y equipos de emergencia en cada evento.' },
  { icon: 'Droplet',  title: 'Hidratación', desc: 'Puestos de agua y nutrición en toda la trayectoria.' },
  { icon: 'Users',    title: 'Comunidad',   desc: 'Más de 1200 corredores que comparten tu pasión.' },
  { icon: 'MapPin',   title: 'Naturaleza',  desc: 'Paisajes únicos de las sierras y montañas argentinas.' },
  { icon: 'Activity', title: 'Desafío',     desc: 'Distancias para todos los niveles, del 7K al Ultra.' },
]

export default function Benefits() {
  return (
    <section className="py-20 bg-[#223024]">
      <div className="container">
        <div className="mb-12 text-center">
          <p className="text-[#D77B30] text-sm font-medium uppercase tracking-widest mb-2">Por qué elegirnos</p>
          <h2 className="text-4xl md:text-5xl font-black text-white">Experiencias diseñadas para vos</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {benefits.map((b) => {
            const Icon = icons[b.icon]
            return (
              <div key={b.title} className="bg-white/10 rounded-2xl p-6 text-white hover:bg-white/20 transition-colors">
                <div className="w-12 h-12 rounded-full bg-[#D77B30] flex items-center justify-center mb-4">
                  <Icon size={22} color="white" />
                </div>
                <h4 className="font-black text-lg mb-2">{b.title}</h4>
                <p className="text-white/70 text-sm leading-relaxed">{b.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
