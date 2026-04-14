"use client";

import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Particle animation on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: { x: number; y: number; r: number; dx: number; dy: number; alpha: number }[] = [];

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.3,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.4 + 0.05,
      });
    }

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201,168,76,${p.alpha})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      raf = requestAnimationFrame(draw);
    };
    draw();

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Canvas particles */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Radial gradient backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#1A1A2E_0%,_#0D0D0F_70%)]" />

      {/* Vertical gold lines decorative */}
      <div className="absolute left-16 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent hidden lg:block" />
      <div className="absolute right-16 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Pre-title badge */}
        <div className="animate-fade-up delay-100 inline-flex items-center gap-3 mb-8">
          <div className="w-8 h-px bg-gold/60" />
          <span className="font-mono text-xs text-gold/70 tracking-[0.4em] uppercase">
            Cirujano Especialista
          </span>
          <div className="w-8 h-px bg-gold/60" />
        </div>

        {/* Main heading */}
        <h1 className="animate-fade-up delay-200 font-display font-light text-ivory leading-none mb-2">
          <span className="block text-[clamp(3rem,9vw,7rem)] tracking-tight">
            Dr. Yamamoto
          </span>
          <span className="block text-[clamp(3rem,9vw,7rem)] tracking-tight text-gold-gradient">
            Ishikawa
          </span>
        </h1>

        {/* Divider line */}
        <div className="animate-fade-up delay-300 gold-line my-8 mx-auto w-48" />

        {/* Subtitle */}
        <p className="animate-fade-up delay-400 font-body font-light text-mist text-lg md:text-xl max-w-2xl mx-auto leading-relaxed tracking-wide mb-12">
          Más de{" "}
          <span className="text-ivory">20 años</span> de excelencia quirúrgica.
          Precisión, cuidado y resultados que transforman vidas.
        </p>

        {/* Stats row */}
        <div className="animate-fade-up delay-500 flex flex-wrap justify-center gap-10 mb-14">
          {[
            { num: "3,400+", label: "Cirugías exitosas" },
            { num: "20+", label: "Años de experiencia" },
            { num: "98%", label: "Satisfacción del paciente" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-3xl text-gold font-light">{s.num}</div>
              <div className="font-mono text-xs text-mist tracking-widest uppercase mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="animate-fade-up delay-600 flex flex-wrap justify-center gap-4">
          <a
            href="#contacto"
            className="group relative overflow-hidden bg-gold text-obsidian px-8 py-4 text-sm tracking-widest uppercase font-body font-medium transition-all duration-300 hover:bg-gold-light"
          >
            Agendar consulta
          </a>
          <a
            href="#especialidades"
            className="border border-ivory/20 text-ivory/70 hover:border-gold/50 hover:text-ivory px-8 py-4 text-sm tracking-widest uppercase font-body transition-all duration-300"
          >
            Ver especialidades
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#especialidades"
        className="animate-fade-in delay-800 absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-mist/50 hover:text-gold transition-colors duration-300"
      >
        <span className="font-mono text-xs tracking-widest uppercase">Explorar</span>
        <ChevronDown size={16} className="animate-bounce" />
      </a>
    </section>
  );
}
