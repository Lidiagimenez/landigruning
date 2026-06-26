import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Events from '@/components/Events'
import Stats from '@/components/Stats'
import Calendar from '@/components/Calendar'
import Adventures from '@/components/Adventures'
import Testimonials from '@/components/Testimonials'
import Benefits from '@/components/Benefits'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <section className="max-w-7xl mx-auto px-6 py-16">
          <Events />
        </section>
        <section className="max-w-7xl mx-auto px-6 py-8">
          <Stats />
        </section>
        <section className="max-w-7xl mx-auto px-6 py-8">
          <Calendar />
        </section>
        <section className="max-w-7xl mx-auto px-6 py-8">
          <Adventures />
        </section>
        <section className="max-w-7xl mx-auto px-6 py-8">
          <Testimonials />
        </section>
        <section className="max-w-7xl mx-auto px-6 py-8">
          <Benefits />
        </section>
        <section className="max-w-7xl mx-auto px-6 py-12">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  )
}
