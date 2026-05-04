'use client';

import { Heart, MessageCircle, Share2, Calendar, MapPin } from 'lucide-react';
import { useState } from 'react';

interface Post {
  id: number;
  title: string;
  date: string;
  platform: 'facebook' | 'instagram';
  image: string;
  excerpt: string;
  likes: number;
  comments: number;
  type: 'event' | 'news' | 'achievement';
}

export default function Noticias() {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'event' | 'news' | 'achievement'>(
    'all'
  );

  const posts: Post[] = [
    {
      id: 1,
      title: 'Inauguración del Nuevo Laboratorio de Tecnología',
      date: '2024-05-15',
      platform: 'instagram',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=400&fit=crop',
      excerpt:
        'Nos complace anunciar la inauguración del nuevo laboratorio de tecnología con equipos de última generación para nuestros estudiantes.',
      likes: 245,
      comments: 18,
      type: 'news',
    },
    {
      id: 2,
      title: 'Campeonato Interescolar de Ajedrez 2024',
      date: '2024-05-10',
      platform: 'facebook',
      image: 'https://images.unsplash.com/photo-1570303008530-a20cf0e106f4?w=500&h=400&fit=crop',
      excerpt:
        '¡Nuestros estudiantes ganaron el campeonato regional de ajedrez! Felicidades a todos los participantes por su dedicación y estrategia.',
      likes: 312,
      comments: 27,
      type: 'achievement',
    },
    {
      id: 3,
      title: 'Excursión Educativa a Reserva Ecológica',
      date: '2024-05-05',
      platform: 'instagram',
      image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=500&h=400&fit=crop',
      excerpt:
        'Los estudiantes de primaria disfrutaron de una jornada de aprendizaje en la naturaleza, conociendo la biodiversidad local.',
      likes: 189,
      comments: 12,
      type: 'event',
    },
    {
      id: 4,
      title: 'Ceremonia de Graduación Secundaria 2024',
      date: '2024-04-28',
      platform: 'facebook',
      image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=500&h=400&fit=crop',
      excerpt:
        'Con orgullo realizamos la ceremonia de graduación de nuestra promoción 2024. ¡Muchos éxitos en sus nuevos caminos!',
      likes: 456,
      comments: 45,
      type: 'event',
    },
    {
      id: 5,
      title: 'Certificación Cambridge - 100% de Aprobación',
      date: '2024-04-20',
      platform: 'instagram',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop',
      excerpt:
        'Celebramos que el 100% de nuestros estudiantes aprobaron los exámenes de certificación Cambridge en esta sesión.',
      likes: 523,
      comments: 38,
      type: 'achievement',
    },
    {
      id: 6,
      title: 'Feria de Ciencias y Tecnología',
      date: '2024-04-15',
      platform: 'facebook',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop',
      excerpt:
        'La comunidad La Paz presentó innovadores proyectos en nuestra feria anual. Proyectos de robótica, energías renovables y más.',
      likes: 267,
      comments: 19,
      type: 'event',
    },
    {
      id: 7,
      title: 'Intercambio Académico a Canada',
      date: '2024-04-10',
      platform: 'instagram',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7fe863a6e0?w=500&h=400&fit=crop',
      excerpt:
        'Nuestros estudiantes de secundaria completaron exitosamente su intercambio académico en institutos de Canadá.',
      likes: 198,
      comments: 14,
      type: 'news',
    },
    {
      id: 8,
      title: 'Taller de Sostenibilidad Ambiental',
      date: '2024-04-05',
      platform: 'facebook',
      image: 'https://images.unsplash.com/photo-1560264357-8d9766d72255?w=500&h=400&fit=crop',
      excerpt:
        'Realizamos taller integral sobre sostenibilidad con nuestros estudiantes, promoviendo ciudadanía responsable.',
      likes: 145,
      comments: 11,
      type: 'event',
    },
  ];

  const filteredPosts =
    selectedFilter === 'all' ? posts : posts.filter((post) => post.type === selectedFilter);

  return (
    <main className="overflow-hidden">
      <section className="bg-gradient-to-b from-blue-100 to-white pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-blue-900 mb-4">Noticias y Eventos</h1>
          <p className="text-xl text-gray-700">
            Mantente actualizado con las últimas actividades del Colegio La Paz
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-3 overflow-x-auto pb-4">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-6 py-2 rounded-full font-semibold whitespace-nowrap transition ${
                selectedFilter === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Todas
            </button>
            <button
              onClick={() => setSelectedFilter('event')}
              className={`px-6 py-2 rounded-full font-semibold whitespace-nowrap transition ${
                selectedFilter === 'event'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              📅 Eventos
            </button>
            <button
              onClick={() => setSelectedFilter('news')}
              className={`px-6 py-2 rounded-full font-semibold whitespace-nowrap transition ${
                selectedFilter === 'news'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              📰 Noticias
            </button>
            <button
              onClick={() => setSelectedFilter('achievement')}
              className={`px-6 py-2 rounded-full font-semibold whitespace-nowrap transition ${
                selectedFilter === 'achievement'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              🏆 Logros
            </button>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => {
              const typeLabel = {
                event: '📅 Evento',
                news: '📰 Noticia',
                achievement: '🏆 Logro',
              }[post.type];

              const platformBadge = post.platform === 'facebook' ? '👍 Facebook' : '📸 Instagram';

              return (
                <div
                  key={post.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition border border-gray-100"
                >
                  <div className="relative overflow-hidden bg-gray-200 h-48">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition"
                    />
                    <div className="absolute top-3 right-3 flex gap-2">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {typeLabel}
                      </span>
                      <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {platformBadge}
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                      <Calendar size={14} />
                      <span>{new Date(post.date).toLocaleDateString('es-MX')}</span>
                    </div>

                    <h3 className="text-lg font-bold text-blue-900 mb-3 line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-gray-700 text-sm mb-4 line-clamp-3">{post.excerpt}</p>

                    <div className="flex gap-4 text-gray-600 border-t pt-3">
                      <button className="flex items-center gap-1 hover:text-red-500 transition text-sm">
                        <Heart size={16} />
                        <span>{post.likes}</span>
                      </button>

                      <button className="flex items-center gap-1 hover:text-blue-600 transition text-sm">
                        <MessageCircle size={16} />
                        <span>{post.comments}</span>
                      </button>

                      <button className="flex items-center gap-1 hover:text-blue-600 transition text-sm ml-auto">
                        <Share2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-8">
            Síguenos en Redes Sociales
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 rounded-lg text-center hover:shadow-lg transition"
            >
              <h3 className="text-3xl font-bold mb-2">👍 Facebook</h3>
              <p className="text-blue-100 mb-4">@ColegioLaPaz</p>
              <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-bold hover:bg-blue-50 transition">
                Seguir
              </button>
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-pink-500 to-rose-600 text-white p-8 rounded-lg text-center hover:shadow-lg transition"
            >
              <h3 className="text-3xl font-bold mb-2">📸 Instagram</h3>
              <p className="text-pink-100 mb-4">@colegio.lapaz</p>
              <button className="bg-white text-pink-600 px-6 py-2 rounded-lg font-bold hover:bg-pink-50 transition">
                Seguir
              </button>
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">¿Tienes alguna noticia?</h2>
          <p className="text-lg text-gray-700 mb-6">
            Si eres estudiante o padre y tienes algo que compartir, contáctanos
          </p>
          <a
            href="/contacto"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition shadow-lg"
          >
            Envía tu Noticia
          </a>
        </div>
      </section>
    </main>
  );
}
