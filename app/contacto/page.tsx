'use client';

import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
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
    console.log('Mensaje de contacto:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Teléfono',
      content: '+52 (333) 831-7000',
      link: 'tel:+5233318317000',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@lapaz.edu.mx',
      link: 'mailto:info@lapaz.edu.mx',
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      content: 'Guadalajara, Jalisco, México',
      link: '#',
    },
    {
      icon: Clock,
      title: 'Horarios',
      content: 'Lunes a Viernes: 8:00 AM - 4:00 PM',
      link: '#',
    },
  ];

  const departments = [
    {
      name: 'Dirección General',
      phone: '+52 (333) 831-7000',
      email: 'direccion@lapaz.edu.mx',
    },
    {
      name: 'Maternal',
      phone: '+52 (333) 831-7000 Ext. 101',
      email: 'maternal@lapaz.edu.mx',
    },
    {
      name: 'Preescolar',
      phone: '+52 (333) 831-7000 Ext. 102',
      email: 'preescolar@lapaz.edu.mx',
    },
    {
      name: 'Primaria',
      phone: '+52 (333) 831-7000 Ext. 103',
      email: 'primaria@lapaz.edu.mx',
    },
    {
      name: 'Secundaria',
      phone: '+52 (333) 831-7000 Ext. 104',
      email: 'secundaria@lapaz.edu.mx',
    },
    {
      name: 'Admisiones',
      phone: '+52 (333) 831-7000 Ext. 105',
      email: 'admisiones@lapaz.edu.mx',
    },
  ];

  return (
    <main className="overflow-hidden">
      <section className="bg-gradient-to-b from-blue-100 to-white pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-blue-900 mb-4">Contacto</h1>
          <p className="text-xl text-gray-700">
            Estamos aquí para responder tus preguntas
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
            Información de Contacto
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <a
                  key={idx}
                  href={info.link}
                  className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200 hover:shadow-lg transition"
                >
                  <Icon className="text-blue-600 mb-3" size={32} />
                  <h3 className="font-bold text-blue-900 mb-2">{info.title}</h3>
                  <p className="text-gray-700 font-semibold">{info.content}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
            Directorio de Departamentos
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-blue-200 rounded-lg p-6 hover:border-blue-600 transition shadow-md"
              >
                <h3 className="text-lg font-bold text-blue-900 mb-4">{dept.name}</h3>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Phone size={18} className="text-blue-600 flex-shrink-0" />
                    <a
                      href={`tel:${dept.phone.replace(/[^\d+]/g, '')}`}
                      className="text-blue-600 font-semibold hover:text-blue-800 break-all"
                    >
                      {dept.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={18} className="text-blue-600 flex-shrink-0" />
                    <a
                      href={`mailto:${dept.email}`}
                      className="text-blue-600 font-semibold hover:text-blue-800 break-all"
                    >
                      {dept.email}
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
            Envíanos tu Mensaje
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">¿Cómo podemos ayudarte?</h3>
                <p className="text-gray-700 mb-6">
                  Completa el formulario y uno de nuestros representantes se pondrá en contacto
                  contigo lo antes posible.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Send className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold text-blue-900">Respuesta Rápida</h4>
                    <p className="text-sm text-gray-600">Contactaremos en máximo 24 horas</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MessageCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold text-blue-900">Comunicación Directa</h4>
                    <p className="text-sm text-gray-600">
                      También disponibles en WhatsApp para consultas rápidas
                    </p>
                  </div>
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  placeholder="+52 (333) 000-0000"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-blue-900 mb-1">
                  Asunto
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                >
                  <option value="">Selecciona un asunto</option>
                  <option value="admisión">Consulta sobre Admisión</option>
                  <option value="académico">Asunto Académico</option>
                  <option value="administrativo">Asunto Administrativo</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-blue-900 mb-1">
                  Mensaje
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  placeholder="Escribe tu mensaje..."
                />
              </div>

              {submitted ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg text-center">
                  ✓ ¡Gracias por tu mensaje! Nos pondremos en contacto pronto.
                </div>
              ) : (
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition"
                >
                  Enviar Mensaje
                </button>
              )}
            </form>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Síguenos en Redes Sociales</h2>
              <p className="text-blue-100 mb-6">
                Encuentra contenido educativo, eventos y noticias del colegio
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-blue-900 px-4 py-2 rounded-lg font-bold hover:bg-blue-50 transition"
                >
                  Facebook
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-blue-900 px-4 py-2 rounded-lg font-bold hover:bg-blue-50 transition"
                >
                  Instagram
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Contáctanos por WhatsApp</h2>
              <p className="text-blue-100 mb-6">
                Disponibles 24/7 para responder tus preguntas y consultas
              </p>
              <a
                href="https://wa.me/5233318317000?text=Hola%2C%20me%20gustaría%20obtener%20más%20información"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-bold transition shadow-lg"
              >
                📱 Abrir WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
