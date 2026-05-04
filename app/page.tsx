import Hero from '@/components/Hero';
import AcademicOffer from '@/components/AcademicOffer';
import PedagogicalAxes from '@/components/PedagogicalAxes';
import Admissions from '@/components/Admissions';
import ChatbotUI from '@/components/ChatbotUI';
import AppointmentScheduler from '@/components/AppointmentScheduler';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <AcademicOffer />
      <PedagogicalAxes />
      <Admissions />
      <AppointmentScheduler />
      <ChatbotUI />
    </main>
    
  );
}
