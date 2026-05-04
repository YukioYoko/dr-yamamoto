'use client';

import { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone } from 'lucide-react';

export default function AppointmentScheduler() {
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
    console.log('Datos de cita:', formData);
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

  const levels = ['Maternal', 'Preescolar', 'Primaria', 'Secundaria'];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-4">
          Agendar una Visita
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Conoce nuestras instalaciones y habla con nuestro equipo de admisiones
        </p>

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
                {levels.map((level) => (
                  <option key={level} value={level.toLowerCase()}>
                    {level}
                  </option>
                ))}
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
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg text-center">
                ✓ ¡Gracias! Nos pondremos en contacto pronto.
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
  );
}
