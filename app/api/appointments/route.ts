import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, level, date, time, message } = await request.json();

    // Validar datos requeridos
    if (!name || !email || !phone || !date || !time) {
      return NextResponse.json(
        { error: 'Faltan datos requeridos' },
        { status: 400 }
      );
    }

    // Llamar al webhook de n8n para agendar cita
    const n8nResponse = await fetch(
      `${process.env.N8N_WEBHOOK_URL}/colegio-lapaz-appointments`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone,
          level: level || 'no especificado',
          date,
          time,
          message: message || '',
          timestamp: new Date().toISOString(),
        }),
      }
    );

    if (!n8nResponse.ok) {
      console.error('Error en n8n appointments:', n8nResponse.statusText);
      return NextResponse.json(
        { error: 'Error al procesar la cita. Por favor intenta de nuevo.' },
        { status: 200 }
      );
    }

    const data = await n8nResponse.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error en API de citas:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'POST your appointment data here',
  });
}
