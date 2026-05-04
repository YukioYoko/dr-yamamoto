'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'bot';
  text: string;
}

const botResponses: { [key: string]: string } = {
  hola: '¡Hola! Bienvenido al Colegio La Paz. ¿En qué puedo ayudarte?',
  admisión:
    'Para admisiones, puedes contactarnos al +52 (333) 831-7000 o completar nuestro formulario.',
  horario: 'Nuestro horario de atención es de 8:00 AM a 4:00 PM de lunes a viernes.',
  dirección: 'Estamos ubicados en Guadalajara, Jalisco. ¿Necesitas más detalles?',
  bilingüe: 'Sí, ofrecemos educación bilingüe con acreditación Cambridge en todos los niveles.',
  default:
    'Gracias por tu pregunta. Por favor, contacta a nuestro equipo para más información.',
};

export default function ChatbotUI() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      text: '¡Hola! Soy el asistente del Colegio La Paz. ¿Cómo puedo ayudarte?',
    },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      text: input,
    };

    setMessages((prev) => [...prev, userMessage]);

    const key = input.toLowerCase();
    const response =
      Object.keys(botResponses).find((k) => key.includes(k)) || 'default';

    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        text: botResponses[response],
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 500);

    setInput('');
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition z-40"
      >
        <MessageCircle size={28} />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-96 max-w-[calc(100vw-24px)] bg-white rounded-lg shadow-2xl flex flex-col h-screen max-h-96 z-50">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-t-lg flex justify-between items-center">
        <h3 className="font-bold">Colegio La Paz</h3>
        <button
          onClick={() => setIsOpen(false)}
          className="hover:bg-blue-800 p-1 rounded transition"
        >
          <X size={20} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-lg ${
                msg.type === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-800'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="border-t p-4 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Escribe tu pregunta..."
          className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-600"
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
}
