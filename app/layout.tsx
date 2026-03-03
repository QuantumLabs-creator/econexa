import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/src/components/layout/Navbar";
import Topbar from "@/src/components/layout/Topbar";
import Footer from "@/src/components/layout/Footer";

export const metadata: Metadata = {
  title: "Econexa | Capacitación para Minería",
  description: "Cursos y capacitaciones para el sector minero.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Topbar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}