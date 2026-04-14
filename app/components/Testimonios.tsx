"use client";

import { Star } from "lucide-react";

const testimonios = [
  {
    name: "María Elena Soto",
    role: "Paciente de cirugía bariátrica",
    text: "El Dr. Ishikawa cambió mi vida por completo. Su profesionalismo y calidez durante todo el proceso me dieron la tranquilidad que necesitaba. Hoy soy una persona nueva.",
    stars: 5,
    year: "2024",
  },
  {
    name: "Roberto Jiménez",
    role: "Paciente de colecistectomía laparoscópica",
    text: "Desde la primera consulta me transmitió confianza absoluta. La cirugía fue perfecta y en 48 horas ya estaba en casa. Altamente recomendado.",
    stars: 5,
    year: "2023",
  },
  {
    name: "Dr. Andrea Flores",
    role: "Médico internista · Hospital Ángeles",
    text: "Como colega, envío con total confianza mis pacientes con el Dr. Yamamoto. Su criterio clínico y destreza quirúrgica son de los mejores que he conocido en México.",
    stars: 5,
    year: "2024",
  },
  {
    name: "Carlos Herrera",
    role: "Paciente de apendicectomía de urgencia",
    text: "Llegué de urgencia en plena madrugada y el Dr. Ishikawa estuvo presente en todo momento. Gracias a su rapidez y habilidad estoy contando esta historia.",
    stars: 5,
    year: "2023",
  },
];

export default function Testimonios() {
  return (
    <section id="testimonios" className="py-32 px-6 relative overflow-hidden bg-slate/20">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #C9A84C 0, #C9A84C 1px, transparent 0, transparent 50%)`,
          backgroundSize: "20px 20px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-10 h-px bg-gold/60" />
            <span className="font-mono text-xs text-gold/70 tracking-[0.4em] uppercase">
              04 · Testimonios
            </span>
          </div>
          <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-light text-ivory leading-tight">
            Voces que
            <br />
            <em className="text-gold not-italic">Importan</em>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonios.map((t, i) => (
            <div
              key={i}
              className="relative border border-gold/10 hover:border-gold/30 bg-obsidian/60 p-8 transition-all duration-500 group"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.stars }).map((_, si) => (
                  <Star key={si} size={12} className="fill-gold text-gold" />
                ))}
              </div>

              {/* Quote mark */}
              <div className="font-display text-6xl text-gold/10 absolute top-4 right-6 leading-none select-none">
                "
              </div>

              {/* Text */}
              <p className="font-body text-ivory/70 leading-relaxed mb-6 text-sm">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-body text-ivory font-medium text-sm">{t.name}</div>
                  <div className="font-mono text-[10px] text-mist/60 tracking-wider uppercase mt-0.5">
                    {t.role}
                  </div>
                </div>
                <div className="font-mono text-xs text-gold/30">{t.year}</div>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
