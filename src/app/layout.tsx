import './globals.css'

export const metadata = {
  metadataBase: new URL('https://ruta-libre.example.com'),
  title: 'Ruta Libre Running Club | Trail Running y Aventuras',
  description:
    'Eventos de trail running, experiencias al aire libre, comunidad runner y desafíos en los paisajes más increíbles de Argentina.',
  keywords: [
    'running',
    'trail running',
    'carreras de montaña',
    'aventuras',
    'eventos running',
    'club running',
    'trail argentina',
  ],
  openGraph: {
    title: 'Ruta Libre Running Club | Trail Running y Aventuras',
    description:
      'Eventos de trail running, experiencias al aire libre, comunidad runner y desafíos en los paisajes más increíbles de Argentina.',
    url: 'https://ruta-libre.example.com',
    siteName: 'Ruta Libre Running Club',
    images: [
      {
        url: '/images/héroe-runner.webp.png',
        width: 1200,
        height: 630,
        alt: 'Ruta Libre Running Club',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ruta Libre Running Club | Trail Running y Aventuras',
    description:
      'Eventos de trail running, experiencias al aire libre, comunidad runner y desafíos en los paisajes más increíbles de Argentina.',
    images: ['/images/héroe-runner.webp.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-[#FAF8F4] text-[#111111] antialiased">
        {children}
      </body>
    </html>
  )
}
