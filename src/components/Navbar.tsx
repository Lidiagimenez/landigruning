"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#inicio',    label: 'Inicio' },
    { href: '#nosotros',  label: 'Nosotros' },
    { href: '#eventos',   label: 'Eventos' },
    { href: '#aventuras', label: 'Aventuras' },
    { href: '#comunidad', label: 'Comunidad' },
    { href: '#contacto',  label: 'Contacto' },
  ]

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${
      scrolled ? 'shadow-md bg-white/80 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <nav className="container flex items-center justify-between h-16">

        {/* Logo texto */}
        <Link href="/" aria-label="Ruta Libre" className="text-xl font-black text-[#223024] tracking-tight">
          RUTA LIBRE
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 items-center text-sm font-medium">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-[#D77B30] transition-colors">{l.label}</a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex">
          <a href="#eventos" className="px-4 py-2 rounded-full bg-[#D77B30] text-white text-sm font-medium hover:bg-[#c06a20] transition-colors">
            Próximo Evento
          </a>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden p-2" aria-label="Abrir menú" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <ul className="flex flex-col p-6 gap-4">
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)}
                  className="block text-base font-medium hover:text-[#D77B30] transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#eventos" onClick={() => setOpen(false)}
                className="inline-flex items-center px-4 py-2 rounded-full bg-[#D77B30] text-white font-medium">
                Próximo Evento
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
