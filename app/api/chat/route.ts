import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { message, sessionId } = await request.json();

    if (!message || !message.trim()) {
      return NextResponse.json(
        { output: 'Por favor escribe tu pregunta' },
        { status: 400 }
      );
    }

    const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL || 'http://localhost:5678/webhook/colegio-lapaz-chat';

    const n8nResponse = await fetch(n8nWebhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message,
        sessionId: sessionId || 'default',
        timestamp: new Date().toISOString(),
      }),
    });

    if (!n8nResponse.ok) {
      console.error('Error en n8n:', n8nResponse.statusText);
      return NextResponse.json(
        {
          output: 'Lo sentimos, hubo un problema procesando tu pregunta. Por favor contacta a admisiones directamente al +52 (333) 831-7000',
        },
        { status: 200 }
      );
    }

    const data = await n8nResponse.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error en API de chat:', error);
    return NextResponse.json(
      {
        output: 'Error interno del servidor. Por favor intenta más tarde.',
      },
      { status: 500 }
    );
  }
}
