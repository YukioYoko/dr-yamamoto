'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, ChevronLeft } from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'bot' | 'options';
  text: string;
  options?: { id: string; label: string }[];
}

type ConversationStep = 'initial' | 'category' | 'admission' | 'academic' | 'contact' | 'custom';

export default function ChatbotUI() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      text: '¡Hola! Soy el asistente del Colegio La Paz. ¿En qué puedo ayudarte?',
      options: [
        { id: 'admission', label: '📝 Admisión' },
        { id: 'academic', label: '📚 Información Académica' },
        { id: 'contact', label: '📍 Contacto' },
        { id: 'custom', label: '💬 Otra Pregunta' },
      ],
    },
  ]);
  const [input, setInput] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [step, setStep] = useState<ConversationStep>('initial');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleOptionClick = (optionId: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      text: optionId,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setShowInput(false);

    setTimeout(() => {
      if (optionId === 'admission') {
        handleAdmission();
      } else if (optionId === 'academic') {
        handleAcademic();
      } else if (optionId === 'contact') {
        handleContact();
      } else if (optionId === 'custom') {
        handleCustom();
      }
    }, 300);
  };

  const handleAdmission = () => {
    const botMessage: Message = {
      id: (Date.now() + 1).toString(),
      type: 'bot',
      text: '¿Cuál es el nivel que te interesa?',
      options: [
        { id: 'maternal', label: '🍼 Maternal' },
        { id: 'preescolar', label: '🎨 Preescolar' },
        { id: 'primaria', label: '📚 Primaria' },
        { id: 'secundaria', label: '🎓 Secundaria' },
        { id: 'back', label: '← Atrás' },
      ],
    };
    setMessages((prev) => [...prev, botMessage]);
    setStep('admission');
  };

  const handleAcademic = () => {
    const botMessage: Message = {
      id: (Date.now() + 1).toString(),
      type: 'bot',
      text: '¿Sobre qué te gustaría saber?',
      options: [
        { id: 'bilingual', label: '🌍 Educación Bilingüe' },
        { id: 'programs', label: '⭐ Programas Especiales' },
        { id: 'axes', label: '🎯 Ejes Pedagógicos' },
        { id: 'technology', label: '💻 Tecnología' },
        { id: 'back', label: '← Atrás' },
      ],
    };
    setMessages((prev) => [...prev, botMessage]);
    setStep('academic');
  };

  const handleContact = () => {
    const botMessage: Message = {
      id: (Date.now() + 1).toString(),
      type: 'bot',
      text: 'Información de Contacto:\n\n📞 +52 (333) 831-7000\n📧 info@lapaz.edu.mx\n📍 Guadalajara, Jalisco\n⏰ Lunes a Viernes: 8:00 AM - 4:00 PM\n\n¿Necesitas algo más?',
      options: [
        { id: 'admission_schedule', label: '📅 Agendar Cita' },
        { id: 'back', label: '← Atrás' },
      ],
    };
    setMessages((prev) => [...prev, botMessage]);
    setStep('contact');
  };

  const handleCustom = () => {
    setShowInput(true);
    const botMessage: Message = {
      id: (Date.now() + 1).toString(),
      type: 'bot',
      text: 'Por favor, cuéntame tu pregunta y me encantaría ayudarte.',
    };
    setMessages((prev) => [...prev, botMessage]);
    setStep('custom');
  };

  const handleOptionSubClick = (subOptionId: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      text: subOptionId,
    };

    setMessages((prev) => [...prev, userMessage]);
    setShowInput(false);

    setTimeout(() => {
      if (subOptionId === 'back') {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          type: 'bot',
          text: '¿En qué puedo ayudarte?',
          options: [
            { id: 'admission', label: '📝 Admisión' },
            { id: 'academic', label: '📚 Información Académica' },
            { id: 'contact', label: '📍 Contacto' },
            { id: 'custom', label: '💬 Otra Pregunta' },
          ],
        };
        setMessages((prev) => [...prev, botMessage]);
        setStep('initial');
      } else if (step === 'admission') {
        handleAdmissionLevel(subOptionId);
      } else if (step === 'academic') {
        handleAcademicResponse(subOptionId);
      } else if (step === 'contact') {
        handleContactResponse(subOptionId);
      }
    }, 300);
  };

  const handleAdmissionLevel = (level: string) => {
    const levelName =
      {
        maternal: 'Maternal',
        preescolar: 'Preescolar',
        primaria: 'Primaria',
        secundaria: 'Secundaria',
      }[level] || level;

    const message: Message = {
      id: (Date.now() + 1).toString(),
      type: 'bot',
      text: `Excelente, te interesa ${levelName}. ¿Te gustaría agendar una visita para conocer más?`,
      options: [
        { id: 'schedule_yes', label: '✓ Sí, agendar' },
        { id: 'schedule_no', label: '✗ No, otra pregunta' },
      ],
    };
    setMessages((prev) => [...prev, message]);
  };

  const handleAcademicResponse = (topic: string) => {
    const responses: { [key: string]: string } = {
      bilingual:
        'Ofrecemos educación bilingüe con acreditación Cambridge en todos los niveles. Nuestros estudiantes obtienen certificados oficiales y desarrollan competencias lingüísticas avanzadas.',
      programs:
        'Contamos con programas especiales como Cambridge English, intercambios internacionales, liderazgo estudiantil y talleres de tecnología y coding.',
      axes: 'Nuestros ejes pedagógicos son: Académico, Multicultural, Socioemocional y Ciudadanía Digital. Esto asegura un desarrollo integral del estudiante.',
      technology:
        'Utilizamos plataformas de aprendizaje digital, laboratorios especializados y enseñamos pensamiento computacional desde edades tempranas.',
    };

    const botMessage: Message = {
      id: (Date.now() + 1).toString(),
      type: 'bot',
      text: responses[topic] || 'Gracias por tu pregunta.',
      options: [
        { id: 'admission', label: '📝 Admisión' },
        { id: 'contact', label: '📍 Contacto' },
        { id: 'back', label: '← Atrás' },
      ],
    };
    setMessages((prev) => [...prev, botMessage]);
  };

  const handleContactResponse = (option: string) => {
    if (option === 'admission_schedule') {
      setShowInput(true);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        text: '¿Cuál es tu nombre para agendar la cita?',
      };
      setMessages((prev) => [...prev, botMessage]);
    }
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      text: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    setTimeout(() => {
      let response = '';

      if (step === 'custom') {
        response =
          'Gracias por tu pregunta. Si requieres una respuesta más detallada, te recomendamos contactar a nuestro equipo de admisiones. ¿Te gustaría que te proporcione los datos de contacto?';
      } else if (step === 'contact') {
        response = '¿Necesitas algo más?';
      }

      if (response) {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          type: 'bot',
          text: response,
          options: [
            { id: 'admission', label: '📝 Admisión' },
            { id: 'academic', label: '📚 Información Académica' },
            { id: 'contact', label: '📍 Contacto' },
            { id: 'custom', label: '💬 Otra Pregunta' },
          ],
        };
        setMessages((prev) => [...prev, botMessage]);
        setShowInput(false);
        setStep('initial');
      }
    }, 500);
  };

  const handleScheduleYes = () => {
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      text: 'Sí, agendar',
    };
    setMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        text: 'Perfecto. Puedes agendar tu visita en nuestra página de admisiones o contáctanos directamente al +52 (333) 831-7000.',
        options: [
          { id: 'admission', label: '📝 Admisión' },
          { id: 'academic', label: '📚 Información Académica' },
          { id: 'back', label: '← Atrás' },
        ],
      };
      setMessages((prev) => [...prev, botMessage]);
      setStep('initial');
    }, 300);
  };

  const handleScheduleNo = () => {
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      text: 'No, otra pregunta',
    };
    setMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        text: '¿En qué más puedo ayudarte?',
        options: [
          { id: 'academic', label: '📚 Información Académica' },
          { id: 'contact', label: '📍 Contacto' },
          { id: 'custom', label: '💬 Otra Pregunta' },
          { id: 'back', label: '← Atrás' },
        ],
      };
      setMessages((prev) => [...prev, botMessage]);
      setStep('initial');
    }, 300);
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
          <div key={msg.id}>
            {msg.type === 'user' && (
              <div className="flex justify-end">
                <div className="bg-blue-600 text-white px-4 py-2 rounded-lg max-w-xs">
                  {msg.text}
                </div>
              </div>
            )}

            {msg.type === 'bot' && (
              <div className="flex justify-start">
                <div className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg max-w-xs whitespace-pre-line">
                  {msg.text}
                </div>
              </div>
            )}

            {msg.options && msg.options.length > 0 && (
              <div className="flex flex-col gap-2 mt-2">
                {msg.options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => {
                      if (option.id === 'schedule_yes') {
                        handleScheduleYes();
                      } else if (option.id === 'schedule_no') {
                        handleScheduleNo();
                      } else {
                        handleOptionSubClick(option.id);
                      }
                    }}
                    className="bg-blue-100 hover:bg-blue-200 text-blue-900 px-4 py-2 rounded-lg text-sm font-medium transition text-left"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {showInput && (
        <div className="border-t p-4 flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Escribe aquí..."
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-600 text-sm"
            autoFocus
          />
          <button
            onClick={handleSend}
            className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition"
          >
            <Send size={20} />
          </button>
        </div>
      )}
    </div>
  );
}
