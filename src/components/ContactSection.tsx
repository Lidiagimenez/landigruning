"use client"

import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { WHATSAPP_NUMBER } from '@/lib/constants'
import { MessageCircle, Mail } from 'lucide-react'

export default function ContactSection() {
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSending(true)
    setError(false)

    const formEl = e.currentTarget

    try {
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formEl,
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! }
      )
      if (result.status === 200) {
        setSent(true)
        formEl.reset()
      } else {
        setError(true)
      }
    } catch (err) {
      console.error('EmailJS error:', err)
      setError(true)
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#D77B30] text-sm font-medium uppercase tracking-widest mb-4">Sumate</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#111111] leading-tight">
              TU PRÓXIMA AVENTURA COMIENZA HOY
            </h2>
            <p className="text-[#5C5C5C] mt-4 text-lg leading-relaxed">
              Reservá tu lugar y formá parte de una experiencia que recordarás para siempre.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#223024] text-white font-medium hover:bg-[#324734] transition-colors"
              >
                <MessageCircle size={18} /> WhatsApp
              </a>
              <a
                href="mailto:info@rutalibre.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-[#223024] text-[#223024] font-medium hover:bg-[#223024] hover:text-white transition-colors"
              >
                <Mail size={18} /> Email
              </a>
            </div>
          </div>

          <div className="bg-[#FAF8F4] rounded-2xl p-8 shadow-sm">
            {sent ? (
              <div className="text-center py-8">
                <p className="text-3xl font-black text-[#324734] mb-2">¡Mensaje enviado!</p>
                <p className="text-[#5C5C5C]">Te contactamos a la brevedad.</p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 px-6 py-2 rounded-full border border-[#223024] text-[#223024] text-sm font-medium hover:bg-[#223024] hover:text-white transition-colors"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-sm text-red-700">
                    No se pudo enviar. Escribinos por WhatsApp.
                  </div>
                )}
                <div>
                  <label className="block text-sm font-medium text-[#111111] mb-1">Nombre</label>
                  <input name="name" required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#324734] bg-white"
                    placeholder="Tu nombre completo" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#111111] mb-1">Email</label>
                  <input name="email" type="email" required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#324734] bg-white"
                    placeholder="tu@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#111111] mb-1">Mensaje</label>
                  <textarea name="message" required rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#324734] bg-white resize-none"
                    placeholder="¿En qué evento te interesa participar?" />
                </div>
                <button type="submit" disabled={sending}
                  className="w-full py-3 rounded-full bg-[#D77B30] text-white font-black text-base hover:bg-[#c06a20] transition-colors disabled:opacity-60">
                  {sending ? 'Enviando...' : 'Enviar mensaje'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
