"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Trayectoria", href: "#trayectoria" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-obsidian/95 backdrop-blur-md border-b border-gold/10 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="group flex flex-col leading-none">
          <span className="font-display text-gold text-xl font-light tracking-widest uppercase">
            Dr. Yamamoto
          </span>
          <span className="font-body text-mist text-xs tracking-[0.3em] uppercase mt-0.5">
            Ishikawa · Cirujano
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-body text-sm text-mist hover:text-ivory tracking-widest uppercase transition-colors duration-300 relative group"
              >
                {l.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contacto"
          className="hidden md:inline-flex items-center gap-2 border border-gold/60 text-gold hover:bg-gold hover:text-obsidian px-5 py-2 text-xs tracking-widest uppercase font-body transition-all duration-300"
        >
          Agendar cita
        </a>

        {/* Mobile burger */}
        <button
          className="md:hidden text-ivory"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-obsidian/98 border-t border-gold/10 px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-body text-sm text-mist hover:text-ivory tracking-widest uppercase transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="border border-gold/60 text-gold text-center py-3 text-xs tracking-widest uppercase font-body"
          >
            Agendar cita
          </a>
        </div>
      )}
    </header>
  );
}
