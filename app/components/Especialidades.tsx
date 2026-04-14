"use client";

import { Stethoscope, Scissors, Heart, Activity, Shield, Zap } from "lucide-react";

const especialidades = [
  {
    icon: Scissors,
    title: "Cirugía General",
    desc: "Procedimientos de alta complejidad con técnicas mínimamente invasivas y recuperación rápida.",
    tag: "Alta especialidad",
  },
  {
    icon: Heart,
    title: "Cirugía Laparoscópica",
    desc: "Abordajes laparoscópicos de vanguardia para vesícula, apéndice, colon y más.",
    tag: "Mínima invasión",
  },
  {
    icon: Activity,
    title: "Cirugía de Urgencias",
    desc: "Atención quirúrgica de emergencia disponible con tiempos de respuesta inmediatos.",
    tag: "24 / 7",
  },
  {
    icon: Shield,
    title: "Cirugía Bariátrica",
    desc: "Manga gástrica y bypass para el control definitivo del peso y sus comorbilidades.",
    tag: "Transformación",
  },
  {
    icon: Stethoscope,
    title: "Consulta Preoperatoria",
    desc: "Evaluación integral del paciente, riesgo quirúrgico y protocolo personalizado.",
    tag: "Evaluación",
  },
  {
    icon: Zap,
    title: "Seguimiento Postoperatorio",
    desc: "Acompañamiento continuo durante la recuperación para resultados óptimos.",
    tag: "Seguimiento",
  },
];

export default function Especialidades() {
  return (
    <section id="especialidades" className="py-32 px-6 relative overflow-hidden">
      {/* Background geometric accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/3 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-10 h-px bg-gold/60" />
            <span className="font-mono text-xs text-gold/70 tracking-[0.4em] uppercase">
              02 · Especialidades
            </span>
          </div>
          <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-light text-ivory leading-tight">
            Áreas de
            <br />
            <em className="text-gold not-italic">Especialización</em>
          </h2>
          <p className="font-body text-mist max-w-xl mt-4 leading-relaxed">
            Cada procedimiento es abordado con la más alta precisión técnica y un compromiso irrenunciable con la seguridad del paciente.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/10">
          {especialidades.map((e, i) => {
            const Icon = e.icon;
            return (
              <div
                key={e.title}
                className="group bg-obsidian hover:bg-slate/60 p-8 transition-all duration-500 relative overflow-hidden"
              >
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-r-[40px] border-t-gold/0 border-r-gold/0 group-hover:border-t-gold/10 group-hover:border-r-gold/10 transition-all duration-500" />

                {/* Number */}
                <div className="font-display text-7xl text-gold/5 absolute bottom-4 right-6 select-none leading-none">
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 border border-gold/20 group-hover:border-gold/60 flex items-center justify-center mb-6 transition-all duration-300">
                  <Icon size={20} className="text-gold/60 group-hover:text-gold transition-colors duration-300" />
                </div>

                {/* Tag */}
                <div className="font-mono text-[10px] text-gold/50 tracking-widest uppercase mb-3">
                  {e.tag}
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl text-ivory font-light mb-3">
                  {e.title}
                </h3>

                {/* Desc */}
                <p className="font-body text-sm text-mist leading-relaxed">
                  {e.desc}
                </p>

                {/* Bottom line */}
                <div className="mt-6 h-px bg-gradient-to-r from-gold/0 via-gold/40 to-gold/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
