import { Shield, Droplet, Users, MapPin, Activity } from 'lucide-react'
import React from 'react'

const ICONS: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = { Shield, Droplet, Users, MapPin, Activity }

type Benefit = {
  icon: string
  title: string
}

export default function BenefitCard({ benefit }: { benefit: Benefit }) {
  const Icon = ICONS[benefit.icon] || Users
  return (
    <div className="p-4 bg-white rounded-lg text-center shadow hover:shadow-lg transition">
      <div className="flex items-center justify-center mb-3">
        <Icon />
      </div>
      <div className="font-bold">{benefit.title}</div>
    </div>
  )
}
