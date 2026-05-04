import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Colegio La Paz - Educación Bicultural',
  description: 'Educación bicultural con acreditación Cambridge. Maternal, Preescolar, Primaria y Secundaria.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased bg-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
