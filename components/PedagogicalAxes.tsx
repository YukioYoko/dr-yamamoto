'use client';

export default function PedagogicalAxes() {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
          ¿Por qué elegir La Paz?
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-blue-800">Educación Bicultural</h3>
            <p className="text-gray-700">
              Programas bilingües con acreditación Cambridge. Desarrollamos competencias lingüísticas
              y interculturales desde edades tempranas.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">✓</span>
                <span>Exámenes Cambridge integrados en currícula</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">✓</span>
                <span>Profesores certificados nativos</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">✓</span>
                <span>Inmersión en dos culturas</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-blue-800">Tecnología e Innovación</h3>
            <p className="text-gray-700">
              Integramos herramientas tecnológicas modernas para potenciar el aprendizaje y
              preparar a nuestros estudiantes para el futuro.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">✓</span>
                <span>Laboratorios especializados</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">✓</span>
                <span>Plataformas de aprendizaje digital</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">✓</span>
                <span>Coding y pensamiento computacional</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-blue-800">Desarrollo Socioemocional</h3>
            <p className="text-gray-700">
              Fomentamos el bienestar integral, la empatía y las habilidades para la vida en
              comunidad.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">✓</span>
                <span>Seguimiento personalizado</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">✓</span>
                <span>Programas de liderazgo</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">✓</span>
                <span>Talleres de mindfulness</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-blue-800">Experiencias Globales</h3>
            <p className="text-gray-700">
              Abrimos puertas a oportunidades internacionales y convenios universitarios para
              ampliar horizontes.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">✓</span>
                <span>Intercambios académicos</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">✓</span>
                <span>Convenios con universidades</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">✓</span>
                <span>Viajes educativos internacionales</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
