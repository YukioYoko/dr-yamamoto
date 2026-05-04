import { NextRequest, NextResponse } from 'next/server';

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

const staticPosts: Post[] = [
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
];

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '8');
    const filter = searchParams.get('filter') || 'all';

    let posts = staticPosts;

    try {
      const n8nResponse = await fetch(
        `${process.env.N8N_WEBHOOK_URL || 'http://localhost:5678/webhook'}/colegio-lapaz-noticias`,
        { method: 'GET' }
      );

      if (n8nResponse.ok) {
        const remotePosts = await n8nResponse.json();
        if (Array.isArray(remotePosts) && remotePosts.length > 0) {
          posts = remotePosts;
        }
      }
    } catch (error) {
      console.warn('No se pudo conectar a n8n para noticias. Usando datos estáticos.');
    }

    let filteredPosts = filter !== 'all' ? posts.filter((p) => p.type === filter) : posts;
    filteredPosts = filteredPosts.slice(0, limit);

    return NextResponse.json(filteredPosts);
  } catch (error) {
    return NextResponse.json(staticPosts.slice(0, 8));
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const n8nResponse = await fetch(
      `${process.env.N8N_WEBHOOK_URL || 'http://localhost:5678/webhook'}/colegio-lapaz-noticias-submit`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          timestamp: new Date().toISOString(),
        }),
      }
    );

    if (!n8nResponse.ok) {
      return NextResponse.json({ error: 'Error al enviar' }, { status: 200 });
    }

    const result = await n8nResponse.json();
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
