'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-30">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-900">La Paz</div>

        <div className="hidden md:flex gap-6">
          <a href="/" className="text-gray-700 hover:text-blue-600 transition">
            Inicio
          </a>
          <a href="/oferta-academica" className="text-gray-700 hover:text-blue-600 transition">
            Oferta Académica
          </a>
          <a href="/admisiones" className="text-gray-700 hover:text-blue-600 transition">
            Admisiones
          </a>
          <a href="/contacto" className="text-gray-700 hover:text-blue-600 transition">
            Contacto
          </a>
        </div>

        <a
          href="https://wa.me/5233318317000?text=Hola%2C%20solicito%20información"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition"
        >
          WhatsApp
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-blue-900"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-blue-50 p-4 space-y-2">
          <a href="/" className="block text-gray-700 hover:text-blue-600 py-2">
            Inicio
          </a>
          <a href="/oferta-academica" className="block text-gray-700 hover:text-blue-600 py-2">
            Oferta Académica
          </a>
          <a href="/admisiones" className="block text-gray-700 hover:text-blue-600 py-2">
            Admisiones
          </a>
          <a href="/contacto" className="block text-gray-700 hover:text-blue-600 py-2">
            Contacto
          </a>
          <a
            href="https://wa.me/5233318317000?text=Hola%2C%20solicito%20información"
            className="block bg-green-500 text-white px-4 py-2 rounded-lg text-center"
          >
            WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
}
