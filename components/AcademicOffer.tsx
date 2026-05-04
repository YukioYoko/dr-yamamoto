'use client';

import { BookOpen, Globe, Users, Zap } from 'lucide-react';

const levels = [
  {
    name: 'Maternal',
    icon: '🍼',
    description: 'Estimulación temprana y desarrollo integral',
    features: ['Ambiente bilingüe', 'Juego educativo', 'Atención personalizada'],
  },
  {
    name: 'Preescolar',
    icon: '🎨',
    description: 'Exploración y desarrollo de habilidades',
    features: ['Inglés Cambridge', 'Talleres creativos', 'Motricidad fina'],
  },
  {
    name: 'Primaria',
    icon: '📚',
    description: 'Educación competencial integral',
    features: ['Bilingüismo avanzado', 'Tecnología educativa', 'Clubs extracurriculares'],
  },
  {
    name: 'Secundaria',
    icon: '🎓',
    description: 'Preparación para educación superior',
    features: ['Acreditación Cambridge', 'Convenios universitarios', 'Liderazgo'],
  },
];

const axes = [
  { icon: BookOpen, title: 'Académico', desc: 'Excelencia en todas las disciplinas' },
  { icon: Globe, title: 'Multicultural', desc: 'Comprensión global y diversidad' },
  { icon: Users, title: 'Socioemocional', desc: 'Desarrollo integral del ser' },
  { icon: Zap, title: 'Ciudadanía Digital', desc: 'Tecnología responsable' },
];

export default function AcademicOffer() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
          Nuestra Oferta Académica
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {levels.map((level, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition border border-blue-200"
            >
              <div className="text-4xl mb-3">{level.icon}</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">{level.name}</h3>
              <p className="text-sm text-blue-700 mb-4">{level.description}</p>
              <ul className="text-xs space-y-1 text-gray-700">
                {level.features.map((feature, i) => (
                  <li key={i}>✓ {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-lg p-12 mb-8">
          <h3 className="text-3xl font-bold mb-8 text-center">Ejes Pedagógicos</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {axes.map((axis, idx) => {
              const Icon = axis.icon;
              return (
                <div key={idx} className="text-center">
                  <Icon size={40} className="mx-auto mb-3" />
                  <h4 className="font-bold mb-2">{axis.title}</h4>
                  <p className="text-sm text-blue-100">{axis.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center">
          <a
            href="https://wa.me/5233318317000?text=Hola%2C%20solicito%20información%20sobre%20las%20opciones%20de%20inscripción"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition shadow-lg"
          >
            📱 Pide Informes por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
