import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Yamamoto Ishikawa | Cirujano Especialista",
  description:
    "Dr. Yamamoto Ishikawa — Cirujano especialista con más de 20 años de experiencia. Agenda tu consulta hoy.",
  keywords: "cirujano, cirugía, Yamamoto Ishikawa, médico especialista, consulta",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="noise">{children}</body>
    </html>
  );
}
