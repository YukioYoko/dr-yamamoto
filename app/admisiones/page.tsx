'use client';

import { Calendar, Clock, User, Mail, Phone, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function Admisiones() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    level: 'primaria',
    date: '',
    time: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Datos de admisión:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        level: 'primaria',
        date: '',
        time: '',
        message: '',
      });
    }, 3000);
  };

  const levels = [
    { name: 'Maternal', phone: '+52 (333) 831-7000 Ext. 101', email: 'maternal@lapaz.edu.mx' },
    { name: 'Preescolar', phone: '+52 (333) 831-7000 Ext. 102', email: 'preescolar@lapaz.edu.mx' },
    { name: 'Primaria', phone: '+52 (333) 831-7000 Ext. 103', email: 'primaria@lapaz.edu.mx' },
    { name: 'Secundaria', phone: '+52 (333) 831-7000 Ext. 104', email: 'secundaria@lapaz.edu.mx' },
  ];

  const steps = [
    {
      number: 1,
      title: 'Solicitud de Admisión',
      desc: 'Completa el formulario con la información requerida',
    },
    {
      number: 2,
      title: 'Visita Guiada',
      desc: 'Conoce nuestras instalaciones y metodología educativa',
    },
    {
      number: 3,
      title: 'Entrevista',
      desc: 'Conversación con el equipo de admisiones y el estudiante',
    },
    {
      number: 4,
      title: 'Evaluación',
      desc: 'Evaluación académica según el nivel solicitado',
    },
    {
      number: 5,
      title: 'Resultado',
      desc: 'Comunicación de resultados y propuesta de ingreso',
    },
    {
      number: 6,
      title: 'Inscripción',
      desc: 'Formalización de la inscripción y documentación final',
    },
  ];

  return (
    <main className="overflow-hidden">
      <section className="bg-gradient-to-b from-blue-100 to-white pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-blue-900 mb-4">Admisiones</h1>
          <p className="text-xl text-gray-700">
            Bienvenido a la familia del Colegio La Paz
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
            Proceso de Admisión
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200 hover:shadow-lg transition"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-bold text-blue-900">{step.title}</h3>
                </div>
                <p className="text-gray-700 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
            Contacto por Nivel
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {levels.map((level, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-blue-200 rounded-lg p-6 text-center hover:border-blue-600 transition shadow-md"
              >
                <h3 className="text-xl font-bold text-blue-900 mb-4">{level.name}</h3>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Phone size={18} className="text-blue-600 flex-shrink-0" />
                    <a
                      href={`tel:${level.phone.replace(/[^\d+]/g, '')}`}
                      className="text-blue-600 font-semibold hover:text-blue-800 break-all"
                    >
                      {level.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={18} className="text-blue-600 flex-shrink-0" />
                    <a
                      href={`mailto:${level.email}`}
                      className="text-blue-600 font-semibold hover:text-blue-800 break-all"
                    >
                      {level.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
            Agendar Visita
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Calendar className="text-blue-600 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-blue-900">Flexible</h3>
                  <p className="text-sm text-gray-600">
                    Elige la fecha y hora que mejor se adapte a tu agenda
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <User className="text-blue-600 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-blue-900">Personalizado</h3>
                  <p className="text-sm text-gray-600">
                    Recibe atención dedicada de nuestro equipo
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="text-blue-600 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-blue-900">Rápido</h3>
                  <p className="text-sm text-gray-600">
                    Confirmaremos tu cita en 24 horas
                  </p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-blue-900 mb-1">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  placeholder="Tu nombre"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-blue-900 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                    placeholder="correo@ejemplo.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-blue-900 mb-1">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                    placeholder="+52 (333) 000-0000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-blue-900 mb-1">
                  Nivel Educativo
                </label>
                <select
                  name="level"
                  value={formData.level}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                >
                  <option value="maternal">Maternal</option>
                  <option value="preescolar">Preescolar</option>
                  <option value="primaria">Primaria</option>
                  <option value="secundaria">Secundaria</option>
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-blue-900 mb-1">
                    Fecha Preferida
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-blue-900 mb-1">
                    Hora Preferida
                  </label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-blue-900 mb-1">
                  Mensaje (Opcional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  placeholder="Cuéntanos tus intereses o dudas..."
                />
              </div>

              {submitted ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg text-center flex items-center justify-center gap-2">
                  <CheckCircle size={20} />
                  ¡Gracias! Nos pondremos en contacto pronto.
                </div>
              ) : (
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition"
                >
                  Agendar Visita
                </button>
              )}
            </form>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">¿Preguntas adicionales?</h2>
          <p className="text-lg text-gray-700 mb-6">
            También puedes comunicarte directamente vía WhatsApp
          </p>
          <a
            href="https://wa.me/5233318317000?text=Hola%2C%20tengo%20preguntas%20sobre%20el%20proceso%20de%20admisión"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition shadow-lg"
          >
            📱 Contactar por WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
