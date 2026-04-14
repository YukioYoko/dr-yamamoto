"use client";

import { GraduationCap, Award, BookOpen, MapPin } from "lucide-react";

const timeline = [
  {
    year: "2003",
    icon: GraduationCap,
    title: "Licenciatura en Medicina",
    place: "Universidad Nacional Autónoma de México (UNAM)",
  },
  {
    year: "2007",
    icon: GraduationCap,
    title: "Especialidad en Cirugía General",
    place: "Hospital General de México · SSa",
  },
  {
    year: "2010",
    icon: Award,
    title: "Fellowship en Cirugía Mínimamente Invasiva",
    place: "Cleveland Clinic, Ohio, EE.UU.",
  },
  {
    year: "2013",
    icon: BookOpen,
    title: "Certificación por el Consejo Mexicano de Cirugía General",
    place: "CMCG · Recertificado 2019, 2024",
  },
  {
    year: "2015",
    icon: MapPin,
    title: "Fundación de Consultoría Privada",
    place: "Guadalajara, Jalisco · En ejercicio",
  },
  {
    year: "2021",
    icon: Award,
    title: "Premio Nacional de Excelencia Quirúrgica",
    place: "Academia Mexicana de Cirugía",
  },
];

export default function Trayectoria() {
  return (
    <section id="trayectoria" className="py-32 px-6 relative overflow-hidden">
      {/* Gradient left accent */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-96 bg-gold/4 blur-3xl" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        {/* Left: bio */}
        <div>
          <div className="flex items-center gap-4 mb-5">
            <div className="w-10 h-px bg-gold/60" />
            <span className="font-mono text-xs text-gold/70 tracking-[0.4em] uppercase">
              03 · Trayectoria
            </span>
          </div>

          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-light text-ivory leading-tight mb-6">
            Décadas de
            <br />
            <em className="text-gold not-italic">Precisión</em>
          </h2>

          <div className="space-y-5 font-body text-mist leading-relaxed text-base">
            <p>
              El Dr. Yamamoto Ishikawa es reconocido como uno de los cirujanos más respetados de México, con una sólida formación académica en instituciones de nivel internacional y una trayectoria clínica que abarca más de dos décadas de práctica continua.
            </p>
            <p>
              Su enfoque combina la más alta exigencia técnica con un trato humano cálido, convirtiendo cada intervención en una experiencia de confianza absoluta para el paciente y su familia.
            </p>
            <p>
              Miembro activo de la{" "}
              <span className="text-ivory">Academia Mexicana de Cirugía</span>,
              la{" "}
              <span className="text-ivory">Asociación Mexicana de Cirugía Endoscópica</span>{" "}
              y la{" "}
              <span className="text-ivory">Society of American Gastrointestinal Surgeons</span>.
            </p>
          </div>

          {/* Quote */}
          <blockquote className="mt-10 border-l-2 border-gold pl-6">
            <p className="font-display text-xl text-ivory/80 italic font-light leading-relaxed">
              "Cada paciente llega con su historia; mi responsabilidad es escribir con ellos el siguiente capítulo."
            </p>
            <footer className="font-mono text-xs text-gold/60 tracking-widest uppercase mt-3">
              — Dr. Yamamoto Ishikawa
            </footer>
          </blockquote>
        </div>

        {/* Right: timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-gold/0 via-gold/30 to-gold/0" />

          <div className="space-y-8 pl-16">
            {timeline.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="relative group">
                  {/* Dot */}
                  <div className="absolute -left-[2.75rem] top-1 w-2.5 h-2.5 rounded-full border border-gold/60 bg-obsidian group-hover:bg-gold transition-all duration-300" />

                  {/* Year */}
                  <div className="font-mono text-xs text-gold/50 tracking-widest mb-1">{item.year}</div>

                  {/* Content */}
                  <div className="flex items-start gap-3">
                    <Icon size={14} className="text-gold/40 mt-0.5 shrink-0" />
                    <div>
                      <div className="font-body text-ivory text-sm font-medium">{item.title}</div>
                      <div className="font-body text-mist/70 text-xs mt-0.5">{item.place}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
