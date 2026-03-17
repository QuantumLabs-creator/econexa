"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/src/components/ui/Container";
import { Video, Users, BadgeCheck, TrendingUp, ShieldCheck, CheckCircle } from "lucide-react";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const features = [
  { icon: Video, title: "Plataforma 24/7", desc: "Acceso ilimitado" },
  { icon: Users, title: "Mentores en Vivo", desc: "Expertos activos" },
  { icon: BadgeCheck, title: "Certificación Válida", desc: "Reconocida empresas" },
  { icon: TrendingUp, title: "Casos Reales", desc: "Operación minera" },
  { icon: ShieldCheck, title: "SSOMA Certificado", desc: "Normativa vigente" },
];

export default function WhySplitLight() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
      {/* Background - Colores actualizados: orange → green */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-green-50 to-transparent rounded-full blur-[140px] opacity-50" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-50 to-transparent rounded-full blur-[140px] opacity-40" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          
          {/* LEFT: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Glow - Colores actualizados */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-green-500/15 to-blue-500/15 rounded-3xl blur-2xl opacity-40" />
            
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
              <Image
                src="/why-learning-light.jpg"
                alt="Capacitación Econexa"
                width={800}
                height={600}
                className="w-full h-auto"
              />
              
              {/* Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/95 p-5 backdrop-blur-md border border-slate-200 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500">Estudiantes Activos</p>
                    <p className="text-3xl font-bold text-slate-900">+500</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge - Color actualizado: brand → green */}
            <div className="absolute -top-4 -right-4 rounded-xl bg-green-600 px-4 py-2.5 shadow-lg shadow-green-600/30">
              <p className="text-sm font-bold text-white">100% Online</p>
            </div>
          </motion.div>

          {/* RIGHT: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease }}
            viewport={{ once: true }}
          >
            {/* Badge - Color actualizado */}
            <div className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-600 shadow-sm mb-6">
              <div className="h-2 w-2 rounded-full bg-green-600 animate-pulse" />
              Ventajas Exclusivas
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6">
              Todo lo que necesitas <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                para crecer
              </span>
            </h2>

            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Nuestra plataforma está diseñada para profesionales que buscan 
              resultados reales, no solo certificados.
            </p>

            {/* Features Grid - Colores actualizados */}
            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -2 }}
                    className="group flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:border-green-600/40 hover:shadow-md hover:shadow-green-600/5"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-600/10 group-hover:bg-green-600/20 transition-colors">
                      <Icon className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900 group-hover:text-green-600 transition-colors">{f.title}</h3>
                      <p className="text-xs text-slate-500 mt-0.5">{f.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Check List - Colores actualizados: brand-2 → blue */}
            <div className="mt-8 space-y-3">
              {["Actualización constante", "Soporte 24/7", "Comunidad activa"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600/10">
                    <CheckCircle className="h-3.5 w-3.5 text-blue-600" />
                  </div>
                  <span className="text-sm text-slate-600 font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Button - Color actualizado */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10"
            >
              <a
                href="/cursos"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-green-600 to-blue-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-green-600/30 transition-all hover:from-green-700 hover:to-blue-700 hover:shadow-xl"
              >
                Ver todos los cursos
                <CheckCircle className="h-4 w-4" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}