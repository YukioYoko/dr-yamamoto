"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

const horarios = [
  { dia: "Lunes – Viernes", hora: "10:00 am – 7:00 pm" },
  { dia: "Sábado", hora: "10:00 am – 3:00 pm" },
  { dia: "Domingo", hora: "Cerrado" },
];

export default function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    fecha: "",
    motivo: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // In production this would call the n8n webhook or API route
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("sent");
  };

  return (
    <section id="contacto" className="py-32 px-6 relative overflow-hidden">
      {/* Accent blob */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold/3 rounded-full blur-3xl translate-x-1/4 translate-y-1/4" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-10 h-px bg-gold/60" />
            <span className="font-mono text-xs text-gold/70 tracking-[0.4em] uppercase">
              05 · Contacto
            </span>
          </div>
          <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-light text-ivory leading-tight">
            Agendar
            <br />
            <em className="text-gold not-italic">Consulta</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: info */}
          <div className="space-y-10">
            {/* Contact items */}
            <div className="space-y-6">
              {[
                { icon: Phone, label: "Teléfono", val: "+52 (33) 1234-5678" },
                { icon: Mail, label: "Correo electrónico", val: "contacto@dryamamoto.mx" },
                { icon: MapPin, label: "Dirección", val: "Av. Américas 1254, Piso 3, Guadalajara, Jalisco" },
              ].map((c) => {
                const Icon = c.icon;
                return (
                  <div key={c.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-gold/20 flex items-center justify-center shrink-0">
                      <Icon size={16} className="text-gold/60" />
                    </div>
                    <div>
                      <div className="font-mono text-[10px] text-mist/50 tracking-widest uppercase mb-1">
                        {c.label}
                      </div>
                      <div className="font-body text-ivory text-sm">{c.val}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Horarios */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Clock size={14} className="text-gold/60" />
                <span className="font-mono text-xs text-gold/70 tracking-widest uppercase">
                  Horarios de atención
                </span>
              </div>
              <div className="border border-gold/10 divide-y divide-gold/10">
                {horarios.map((h) => (
                  <div key={h.dia} className="flex justify-between px-4 py-3">
                    <span className="font-body text-sm text-mist">{h.dia}</span>
                    <span
                      className={`font-mono text-xs tracking-wider ${
                        h.hora === "Cerrado" ? "text-crimson/60" : "text-gold/70"
                      }`}
                    >
                      {h.hora}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Chatbot hint */}
            <div className="border border-gold/20 bg-gold/5 p-5">
              <p className="font-body text-sm text-mist leading-relaxed">
                💬 También puedes usar nuestro{" "}
                <strong className="text-ivory">asistente virtual</strong> en la
                esquina inferior derecha para agendar tu cita de forma inmediata.
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div>
            {status === "sent" ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center gap-5">
                <CheckCircle size={48} className="text-gold" />
                <h3 className="font-display text-2xl text-ivory font-light">
                  ¡Solicitud recibida!
                </h3>
                <p className="font-body text-mist text-sm max-w-xs">
                  Nos pondremos en contacto contigo en las próximas horas para confirmar tu cita.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label className="font-mono text-[10px] text-mist/50 tracking-widest uppercase block mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.nombre}
                    onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                    className="w-full bg-slate/30 border border-gold/20 focus:border-gold/60 text-ivory font-body text-sm px-4 py-3 outline-none transition-colors placeholder:text-mist/30"
                    placeholder="Dr. Juan Pérez"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Email */}
                  <div>
                    <label className="font-mono text-[10px] text-mist/50 tracking-widest uppercase block mb-2">
                      Correo *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-slate/30 border border-gold/20 focus:border-gold/60 text-ivory font-body text-sm px-4 py-3 outline-none transition-colors placeholder:text-mist/30"
                      placeholder="correo@ejemplo.com"
                    />
                  </div>

                  {/* Teléfono */}
                  <div>
                    <label className="font-mono text-[10px] text-mist/50 tracking-widest uppercase block mb-2">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.telefono}
                      onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                      className="w-full bg-slate/30 border border-gold/20 focus:border-gold/60 text-ivory font-body text-sm px-4 py-3 outline-none transition-colors placeholder:text-mist/30"
                      placeholder="+52 33 1234 5678"
                    />
                  </div>
                </div>

                {/* Fecha */}
                <div>
                  <label className="font-mono text-[10px] text-mist/50 tracking-widest uppercase block mb-2">
                    Fecha preferida
                  </label>
                  <input
                    type="date"
                    value={form.fecha}
                    onChange={(e) => setForm({ ...form, fecha: e.target.value })}
                    className="w-full bg-slate/30 border border-gold/20 focus:border-gold/60 text-ivory font-body text-sm px-4 py-3 outline-none transition-colors"
                  />
                </div>

                {/* Motivo */}
                <div>
                  <label className="font-mono text-[10px] text-mist/50 tracking-widest uppercase block mb-2">
                    Motivo de consulta
                  </label>
                  <textarea
                    rows={4}
                    value={form.motivo}
                    onChange={(e) => setForm({ ...form, motivo: e.target.value })}
                    className="w-full bg-slate/30 border border-gold/20 focus:border-gold/60 text-ivory font-body text-sm px-4 py-3 outline-none transition-colors placeholder:text-mist/30 resize-none"
                    placeholder="Describe brevemente tu motivo de consulta..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full flex items-center justify-center gap-3 bg-gold hover:bg-gold-light disabled:opacity-50 text-obsidian font-body font-medium text-sm tracking-widest uppercase py-4 transition-all duration-300"
                >
                  {status === "sending" ? (
                    <span>Enviando...</span>
                  ) : (
                    <>
                      <Send size={15} />
                      Solicitar cita
                    </>
                  )}
                </button>

                <p className="font-mono text-[10px] text-mist/40 text-center tracking-wider">
                  * Tu información es confidencial y nunca será compartida.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
