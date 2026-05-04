'use client';

export default function Admissions() {
  const levels = [
    { name: 'Maternal', phone: '+52 (333) 831-7000 Ext. 101' },
    { name: 'Preescolar', phone: '+52 (333) 831-7000 Ext. 102' },
    { name: 'Primaria', phone: '+52 (333) 831-7000 Ext. 103' },
    { name: 'Secundaria', phone: '+52 (333) 831-7000 Ext. 104' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
          Admisiones
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {levels.map((level, idx) => (
            <div
              key={idx}
              className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 text-center hover:border-blue-600 transition"
            >
              <h3 className="text-lg font-bold text-blue-900 mb-3">{level.name}</h3>
              <p className="text-sm text-gray-600 mb-4">Contacto directo</p>
              <a
                href={`tel:${level.phone.replace(/[^\d+]/g, '')}`}
                className="text-blue-600 font-bold hover:text-blue-800 break-all"
              >
                {level.phone}
              </a>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">¿Listo para inscribir a tu hijo?</h3>
          <p className="mb-6 text-blue-100">
            Completa nuestro formulario de admisión y nos pondremos en contacto pronto
          </p>
          <a href="/admisiones" className="inline-block bg-white text-blue-900 font-bold py-2 px-6 rounded-lg hover:bg-blue-50 transition">
            Ir a Admisiones
          </a>
        </div>
      </div>
    </section>
  );
}
