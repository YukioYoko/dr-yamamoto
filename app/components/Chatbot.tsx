"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User, Minimize2 } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  text: string;
  time: string;
}

const WEBHOOK_URL = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL || "https://TU-INSTANCIA-N8N.com/webhook/dr-yamamoto-chat";

const now = () =>
  new Date().toLocaleTimeString("es-MX", { hour: "2-digit", minute: "2-digit" });

const WELCOME: Message = {
  id: "0",
  role: "assistant",
  text: "¡Hola! Soy el asistente virtual del Dr. Yamamoto Ishikawa. Puedo ayudarte a agendar una cita, responder preguntas sobre las especialidades o darte información de contacto. ¿En qué te puedo ayudar?",
  time: now(),
};

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [sessionId] = useState(() => Math.random().toString(36).slice(2));
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open && !minimized) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
      inputRef.current?.focus();
    }
  }, [messages, open, minimized]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      text,
      time: now(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, sessionId }),
      });

      const data = await res.json();
      const reply = data.output || data.text || data.message || "No pude procesar tu solicitud. Por favor llámanos al +52 (33) 1234-5678.";

      setMessages((prev) => [
        ...prev,
        { id: Date.now().toString() + "r", role: "assistant", text: reply, time: now() },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString() + "err",
          role: "assistant",
          text: "Ocurrió un error de conexión. Por favor contáctanos directamente al +52 (33) 1234-5678 o escríbenos a contacto@dryamamoto.mx.",
          time: now(),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <>
      {/* Bubble button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gold hover:bg-gold-light text-obsidian rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-105 group"
          aria-label="Abrir chat"
        >
          <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
          {/* Ping indicator */}
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-obsidian" />
        </button>
      )}

      {/* Chat window */}
      {open && (
        <div
          className={`fixed bottom-6 right-6 z-50 w-[360px] shadow-2xl border border-gold/20 flex flex-col transition-all duration-300 ${
            minimized ? "h-14" : "h-[500px]"
          }`}
          style={{ background: "#0D0D0F" }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-gold/15 bg-slate/60 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gold/10 border border-gold/30 rounded-full flex items-center justify-center">
                <Bot size={14} className="text-gold" />
              </div>
              <div>
                <div className="font-body text-ivory text-sm font-medium leading-none">
                  Asistente Dr. Yamamoto
                </div>
                <div className="font-mono text-[10px] text-green-400 tracking-wider mt-0.5">
                  ● En línea
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setMinimized(!minimized)}
                className="text-mist/50 hover:text-ivory transition-colors"
                aria-label="Minimizar"
              >
                <Minimize2 size={14} />
              </button>
              <button
                onClick={() => setOpen(false)}
                className="text-mist/50 hover:text-ivory transition-colors"
                aria-label="Cerrar"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {!minimized && (
            <>
              {/* Messages */}
              <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={`flex gap-2 ${m.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                  >
                    {/* Avatar */}
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        m.role === "assistant" ? "bg-gold/10 border border-gold/30" : "bg-slate"
                      }`}
                    >
                      {m.role === "assistant" ? (
                        <Bot size={10} className="text-gold" />
                      ) : (
                        <User size={10} className="text-ivory/60" />
                      )}
                    </div>

                    {/* Bubble */}
                    <div
                      className={`max-w-[80%] px-3 py-2 text-sm font-body leading-relaxed ${
                        m.role === "assistant"
                          ? "bg-slate/60 text-ivory/85 border border-gold/10"
                          : "bg-gold/15 text-ivory border border-gold/20"
                      }`}
                    >
                      {m.text}
                      <div className="font-mono text-[9px] text-mist/40 mt-1 text-right">
                        {m.time}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Typing indicator */}
                {loading && (
                  <div className="flex gap-2 items-center">
                    <div className="w-6 h-6 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
                      <Bot size={10} className="text-gold" />
                    </div>
                    <div className="bg-slate/60 border border-gold/10 px-4 py-3 flex gap-1.5 items-center">
                      <span className="w-1.5 h-1.5 bg-gold/60 rounded-full typing-dot" />
                      <span className="w-1.5 h-1.5 bg-gold/60 rounded-full typing-dot" />
                      <span className="w-1.5 h-1.5 bg-gold/60 rounded-full typing-dot" />
                    </div>
                  </div>
                )}
                <div ref={bottomRef} />
              </div>

              {/* Quick replies */}
              <div className="px-3 py-2 flex gap-2 flex-wrap border-t border-gold/10 shrink-0">
                {["Agendar cita", "Horarios", "Especialidades"].map((q) => (
                  <button
                    key={q}
                    onClick={() => {
                      setInput(q);
                      setTimeout(() => send(), 0);
                    }}
                    className="font-mono text-[10px] text-gold/60 border border-gold/20 hover:border-gold/50 hover:text-gold px-2.5 py-1 tracking-wider transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>

              {/* Input */}
              <div className="flex gap-2 px-3 py-3 border-t border-gold/15 shrink-0">
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKey}
                  placeholder="Escribe un mensaje..."
                  className="flex-1 bg-slate/40 border border-gold/20 text-ivory text-sm font-body px-3 py-2 outline-none placeholder:text-mist/30 focus:border-gold/50 transition-colors"
                />
                <button
                  onClick={send}
                  disabled={!input.trim() || loading}
                  className="w-9 h-9 bg-gold disabled:opacity-40 text-obsidian flex items-center justify-center hover:bg-gold-light transition-colors shrink-0"
                >
                  <Send size={14} />
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
