export default function Footer() {
  return (
    <footer className="bg-[#223024] text-white py-10">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-xl font-black tracking-tight">RUTA LIBRE</p>
          <p className="text-sm text-white/60 mt-1">Running Club · Argentina</p>
          <p className="text-sm text-white/60 mt-1">© {new Date().getFullYear()} Ruta Libre. Todos los derechos reservados.</p>
        </div>
        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex gap-6 text-sm">
            <a href="#eventos" className="hover:text-[#D77B30] transition-colors">Eventos</a>
            <a href="#aventuras" className="hover:text-[#D77B30] transition-colors">Aventuras</a>
            <a href="#contacto" className="hover:text-[#D77B30] transition-colors">Contacto</a>
          </div>
          <div className="flex gap-4 text-sm text-white/70">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
            <a href="#" className="hover:text-white transition-colors">YouTube</a>
            <p className="text-sm text-[#c9bda9]">© 2025 -Desarrolladora Gimenez Lidia Elisa 💻- </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
