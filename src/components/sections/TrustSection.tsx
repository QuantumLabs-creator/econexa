"use client";

import Container from "@/src/components/ui/Container";
import { motion } from "framer-motion";
import { 
  CheckCircle, 
  ArrowRight, 
  Award, 
  Shield, 
  Clock, 
  TrendingUp,
  Users,
  BookOpen,
  BadgeCheck
} from "lucide-react";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const certifications = [
  {
    icon: Shield,
    title: "ISO 9001:2015",
    desc: "Sistema de gestión de calidad certificado",
    color: "green" // Cambiado de "cyan" a "green"
  },
  {
    icon: BadgeCheck,
    title: "Estándares MINEM",
    desc: "Cumplimiento normativo minero vigente",
    color: "blue"
  },
  {
    icon: Award,
    title: "OSINERGMIN",
    desc: "Certificación en seguridad energética",
    color: "green" // Cambiado de "cyan" a "green"
  },
  {
    icon: Clock,
    title: "Validez Indefinida",
    desc: "Certificados sin fecha de expiración",
    color: "blue"
  },
];

const impact = [
  { icon: TrendingUp, value: "85%", label: "Promoción laboral post-curso" },
  { icon: Users, value: "+500", label: "Profesionales capacitados" },
  { icon: BookOpen, value: "+50", label: "Cursos especializados" },
  { icon: CheckCircle, value: "98%", label: "Tasa de satisfacción" },
];

export default function TrustCertifications() {
  return (
    <section className="relative overflow-hidden bg-white pt-16">
      {/* Background - Color actualizado: cyan → green */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-green-50 to-transparent rounded-full blur-[120px] opacity-50" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            Respaldo que 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
              {" genera confianza"}
            </span>
          </h2>

          <p className="text-lg text-slate-600">
            Cumplimos con los más altos estándares de calidad y normativa del sector minero.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-20">
          {certifications.map((cert, i) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-green-600/40 hover:shadow-lg"
              >
                <div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-${cert.color}-50 mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className={`h-7 w-7 text-${cert.color}-600`} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{cert.title}</h3>
                <p className="text-sm text-slate-600">{cert.desc}</p>
              </motion.div>
            );
          })}
        </div>

      </Container>
    </section>
  );
}