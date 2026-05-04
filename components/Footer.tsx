export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-bold mb-3">Colegio La Paz</h4>
          <p className="text-sm text-blue-100">
            Educación bicultural de excelencia para formar líderes competentes.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-3">Navegación</h4>
          <ul className="text-sm space-y-1 text-blue-100">
            <li><a href="/oferta-academica" className="hover:text-white transition">Oferta Académica</a></li>
            <li><a href="/nosotros" className="hover:text-white transition">Nosotros</a></li>
            <li><a href="/noticias" className="hover:text-white transition">Noticias</a></li>
            <li><a href="/admisiones" className="hover:text-white transition">Admisiones</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-3">Contacto</h4>
          <ul className="text-sm space-y-1 text-blue-100">
            <li>Tel: +52 (333) 831-7000</li>
            <li>Guadalajara, Jalisco</li>
            <li>info@lapaz.edu.mx</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-3">Síguenos</h4>
          <div className="flex gap-3 text-sm">
            <a href="#" className="text-blue-100 hover:text-white">
              Facebook
            </a>
            <a href="#" className="text-blue-100 hover:text-white">
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-8 pt-8 border-t border-blue-700 text-center text-sm text-blue-200">
        © 2026 Colegio La Paz. Todos los derechos reservados.
      </div>
    </footer>
  );
}
