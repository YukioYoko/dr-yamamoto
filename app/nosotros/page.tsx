'use client';

import { Award, Users, Target, Heart } from 'lucide-react';

export default function Nosotros() {
  const values = [
    {
      icon: Award,
      title: 'Excelencia',
      desc: 'Nos comprometemos con la calidad educativa en todos nuestros procesos',
    },
    {
      icon: Users,
      title: 'Inclusión',
      desc: 'Valoramos la diversidad y creamos espacios seguros para todos',
    },
    {
      icon: Target,
      title: 'Liderazgo',
      desc: 'Formamos estudiantes capaces de guiar y transformar su entorno',
    },
    {
      icon: Heart,
      title: 'Responsabilidad',
      desc: 'Actuamos con ética y respeto hacia la comunidad y el ambiente',
    },
  ];

  const timeline = [
    {
      year: '1985',
      title: 'Fundación',
      desc: 'Se funda el Colegio La Paz con la visión de educación bicultural',
    },
    {
      year: '1998',
      title: 'Expansión',
      desc: 'Inauguramos el nivel de Secundaria con programas internacionales',
    },
    {
      year: '2008',
      title: 'Certificación Cambridge',
      desc: 'Nos certificamos como centro oficial de exámenes Cambridge',
    },
    {
      year: '2020',
      title: 'Transformación Digital',
      desc: 'Implementamos educación virtual y plataformas tecnológicas',
    },
    {
      year: '2024',
      title: 'Innovación Continua',
      desc: 'Expandimos nuestros programas de liderazgo y sostenibilidad',
    },
  ];

  const team = [
    {
      role: 'Directora General',
      name: 'Dra. María González',
      specialty: 'Educación Integral',
    },
    {
      role: 'Coordinador Académico',
      name: 'Mtro. Carlos Rodríguez',
      specialty: 'Pedagogía Bilingüe',
    },
    {
      role: 'Coordinadora de Primaria',
      name: 'Mtra. Laura Martínez',
      specialty: 'Desarrollo Infantil',
    },
    {
      role: 'Coordinador de Secundaria',
      name: 'Ing. Roberto López',
      specialty: 'Tecnología Educativa',
    },
  ];

  return (
    <main className="overflow-hidden">
      <section className="bg-gradient-to-b from-blue-100 to-white pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-blue-900 mb-4">Nosotros</h1>
          <p className="text-xl text-gray-700">
            Conoce la historia y valores del Colegio La Paz
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Nuestra Misión</h2>
              <p className="text-gray-700 text-lg mb-4">
                Formar estudiantes competentes, responsables y líderes capaces de transformar
                positivamente su comunidad a través de una educación bicultural de excelencia.
              </p>
              <p className="text-gray-700 text-lg">
                Creemos en el desarrollo integral del ser, integrando el rigor académico, la
                apertura cultural y el bienestar emocional como pilares fundamentales de
                nuestro proyecto educativo.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-8 rounded-lg border-4 border-blue-200">
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Nuestra Visión</h2>
              <p className="text-gray-700 text-lg">
                Ser reconocidos como una institución educativa líder en Latinoamérica, referente
                en educación bicultural innovadora que prepara a sus estudiantes para enfrentar
                los retos del siglo XXI con excelencia, creatividad y responsabilidad social.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
            Nuestros Valores
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-lg border-2 border-blue-200 hover:border-blue-600 transition shadow-md text-center"
                >
                  <Icon size={40} className="text-blue-600 mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-blue-900 mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-700">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
            Nuestra Historia
          </h2>

          <div className="relative">
            {timeline.map((item, idx) => (
              <div key={idx} className="mb-12 flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-sm">
                    {idx + 1}
                  </div>
                  {idx < timeline.length - 1 && (
                    <div className="w-1 h-20 bg-blue-200 mt-2"></div>
                  )}
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg flex-1 border border-blue-200">
                  <h3 className="text-2xl font-bold text-blue-900">{item.year}</h3>
                  <h4 className="text-lg font-bold text-blue-700 mt-2">{item.title}</h4>
                  <p className="text-gray-700 mt-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
            Nuestro Equipo Directivo
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-blue-200 rounded-lg p-6 text-center hover:shadow-lg transition"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-lg font-bold text-blue-900">{member.name}</h3>
                <p className="text-sm font-semibold text-blue-600 mt-2">{member.role}</p>
                <p className="text-sm text-gray-700 mt-1">{member.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-5xl font-bold text-blue-600 mb-2">40+</div>
              <p className="text-lg text-gray-700">Años de Trayectoria</p>
            </div>

            <div className="p-6">
              <div className="text-5xl font-bold text-blue-600 mb-2">1,500+</div>
              <p className="text-lg text-gray-700">Estudiantes Activos</p>
            </div>

            <div className="p-6">
              <div className="text-5xl font-bold text-blue-600 mb-2">150+</div>
              <p className="text-lg text-gray-700">Docentes Especializados</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">¿Quieres ser parte de nuestra comunidad?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Únete a cientos de familias que confían en nuestra propuesta educativa
          </p>
          <a
            href="/admisiones"
            className="inline-block bg-white text-blue-900 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition shadow-lg"
          >
            Conoce nuestro proceso de admisión
          </a>
        </div>
      </section>
    </main>
  );
}
