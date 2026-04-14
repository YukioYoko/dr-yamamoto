import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Especialidades from "./components/Especialidades";
import Trayectoria from "./components/Trayectoria";
import Testimonios from "./components/Testimonios";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Especialidades />
      <Trayectoria />
      <Testimonios />
      <Contacto />
      <Footer />
      <Chatbot />
    </main>
  );
}
