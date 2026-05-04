'use client';

import { BookOpen, Globe, Users, Zap, Award, Users2, Code, Globe2 } from 'lucide-react';

export default function OfertaAcademica() {
  const levels = [
    {
      name: 'Maternal',
      icon: '🍼',
      age: '1-2 años',
      description: 'Estimulación temprana y desarrollo integral',
      features: [
        'Ambiente bilingüe desde el inicio',
        'Actividades de juego educativo',
        'Atención personalizada y cálida',
        'Desarrollo motriz y cognitivo',
        'Rutinas estructuradas',
      ],
    },
    {
      name: 'Preescolar',
      icon: '🎨',
      age: '3-5 años',
      description: 'Exploración y desarrollo de habilidades',
      features: [
        'Inglés Cambridge integrado',
        'Talleres creativos y artísticos',
        'Desarrollo de motricidad fina',
        'Iniciación a lectoescritura',
        'Convivencia y valores',
      ],
    },
    {
      name: 'Primaria',
      icon: '📚',
      age: '6-11 años',
      description: 'Educación competencial integral',
      features: [
        'Bilingüismo avanzado con certificaciones',
        'Tecnología educativa integrada',
        'Clubs extracurriculares variados',
        'Proyecto de ajedrez y deportes',
        'Pensamiento crítico y creativo',
      ],
    },
    {
      name: 'Secundaria',
      icon: '🎓',
      age: '12-17 años',
      description: 'Preparación para educación superior',
      features: [
        'Acreditación Cambridge avanzada',
        'Convenios con universidades',
        'Programas de liderazgo',
        'Intercambios académicos internacionales',
        'Orientación vocacional profesional',
      ],
    },
  ];

  const axes = [
    {
      icon: BookOpen,
      title: 'Eje Académico',
      desc: 'Excelencia en todas las disciplinas con docentes especializados',
    },
    {
      icon: Globe,
      title: 'Eje Multicultural',
      desc: 'Comprensión global y respeto por la diversidad cultural',
    },
    {
      icon: Users,
      title: 'Eje Socioemocional',
      desc: 'Desarrollo integral del ser y sus habilidades blandas',
    },
    {
      icon: Zap,
      title: 'Eje Ciudadanía Digital',
      desc: 'Tecnología responsable y alfabetización digital',
    },
  ];

  const programs = [
    {
      icon: Award,
      title: 'Cambridge English',
      desc: 'Exámenes y certificaciones oficiales de Cambridge en todos los niveles',
    },
    {
      icon: Globe2,
      title: 'Intercambios Internacionales',
      desc: 'Programas de intercambio con colegios en el extranjero',
    },
    {
      icon: Users2,
      title: 'Liderazgo Estudiantil',
      desc: 'Formación de líderes competentes y responsables',
    },
    {
      icon: Code,
      title: 'Tecnología y Coding',
      desc: 'Laboratorios y talleres de programación y pensamiento computacional',
    },
  ];

  return (
    <main className="overflow-hidden">
      <section className="bg-gradient-to-b from-blue-100 to-white pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-blue-900 mb-4">Oferta Académica</h1>
          <p className="text-xl text-gray-700">
            Educación de excelencia adaptada a cada etapa del desarrollo
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
            Nuestros Niveles Educativos
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {levels.map((level, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-lg border border-blue-200"
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-5xl">{level.icon}</span>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-900">{level.name}</h3>
                    <p className="text-sm text-blue-600 font-semibold">{level.age}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-6">{level.description}</p>
                <ul className="space-y-3">
                  {level.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold text-lg">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
            Ejes Pedagógicos
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {axes.map((axis, idx) => {
              const Icon = axis.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-lg shadow-md border border-blue-100 hover:border-blue-600 transition"
                >
                  <Icon size={40} className="text-blue-600 mb-4" />
                  <h3 className="text-lg font-bold text-blue-900 mb-2">{axis.title}</h3>
                  <p className="text-sm text-gray-700">{axis.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
            Programas Especiales
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, idx) => {
              const Icon = program.icon;
              return (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg shadow-md border border-blue-200 hover:shadow-lg transition"
                >
                  <Icon size={36} className="text-blue-600 mb-3" />
                  <h3 className="text-lg font-bold text-blue-900 mb-2">{program.title}</h3>
                  <p className="text-sm text-gray-700">{program.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">¿Conoce nuestra propuesta educativa?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Agende una visita y conozca de cerca nuestra metodología
          </p>
          <a
            href="/admisiones"
            className="inline-block bg-white text-blue-900 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition shadow-lg"
          >
            Agendar Visita
          </a>
        </div>
      </section>
    </main>
  );
}
