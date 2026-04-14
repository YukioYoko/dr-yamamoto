import { NextRequest, NextResponse } from "next/server";

const N8N_WEBHOOK = process.env.N8N_WEBHOOK_URL!;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const res = await fetch(N8N_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("n8n proxy error:", error);
    return NextResponse.json(
      { error: "Failed to reach chatbot service" },
      { status: 500 }
    );
  }
}
