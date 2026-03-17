"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/src/components/ui/Container";
import { 
  BadgeCheck, 
  BookOpen, 
  Users, 
  MessageCircle,
  ArrowRight,
  Sparkles
} from "lucide-react";
import Image from "next/image";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const methodologyItems = [
  {
    id: "certificacion",
    icon: BadgeCheck,
    title: "Certificación con Validez",
    desc: "Certificados verificables con código QR y reconocimiento internacional",
    visual: "/certificate-preview.jpg",
    stats: [
      { value: "100%", label: "Validez oficial" },
      { value: "QR", label: "Verificación online" },
      { value: "∞", label: "Acceso permanente" }
    ]
  },
  {
    id: "practico",
    icon: BookOpen,
    title: "Aprendizaje 100% Práctico",
    desc: "Casos reales de operaciones mineras peruanas para aplicación inmediata",
    visual: "/practical-learning.jpg",
    stats: [
      { value: "+50", label: "Casos reales" },
      { value: "24/7", label: "Acceso plataforma" },
      { value: "+100", label: "Plantillas" }
    ]
  },
  {
    id: "mentorias",
    icon: MessageCircle,
    title: "Mentorías con Expertos",
    desc: "Sesiones 1 a 1 con instructores activos en la industria minera",
    visual: "/mentorship.jpg",
    stats: [
      { value: "+18", label: "Instructores" },
      { value: "10+", label: "Años experiencia" },
      { value: "1a1", label: "Sesiones privadas" }
    ]
  },
  {
    id: "comunidad",
    icon: Users,
    title: "Comunidad Minera",
    desc: "Red profesional de +500 miembros con bolsa de trabajo exclusiva",
    visual: "/community.jpg",
    stats: [
      { value: "+500", label: "Miembros activos" },
      { value: "85%", label: "Empleabilidad" },
      { value: "24h", label: "Respuesta promedio" }
    ]
  },
];

export default function MethodologyAutoPlay() {
  const [activeItem, setActiveItem] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play logic
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveItem((current) => (current + 1) % methodologyItems.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Manual change with reset
  const handleManualChange = useCallback((index: number) => {
    setActiveItem(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 2000);
  }, []);

  return (
    <section 
      className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Subtle Background - Colores actualizados: cyan → green */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-green-50/40 to-transparent rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-to-tr from-blue-50/40 to-transparent rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Formación que 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
               {" transforma carreras"}
            </span>
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
            
            {/* LEFT: Navigation */}
            <div className="lg:col-span-4 space-y-3">
              {methodologyItems.map((item, i) => {
                const Icon = item.icon;
                const isActive = activeItem === i;
                
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => handleManualChange(i)}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-300 group ${
                      isActive
                        ? "border-green-600 bg-white shadow-lg shadow-green-500/10"
                        : "border-transparent bg-white/60 hover:bg-white hover:border-slate-200"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 ${
                        isActive
                          ? "bg-gradient-to-br from-green-600 to-blue-600 text-white shadow-md"
                          : "bg-slate-100 text-slate-600 group-hover:bg-green-50 group-hover:text-green-600"
                      }`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className={`font-bold text-lg transition-colors ${
                          isActive ? "text-green-900" : "text-slate-900"
                        }`}>
                          {item.title}
                        </h3>
                        <p className={`text-sm mt-0.5 transition-colors ${
                          isActive ? "text-green-700" : "text-slate-500"
                        }`}>
                          {item.desc.split('.')[0]}
                        </p>
                      </div>

                      <ArrowRight className={`h-5 w-5 transition-all duration-300 ${
                        isActive 
                          ? "text-green-600 rotate-0 opacity-100" 
                          : "text-slate-300 -rotate-90 opacity-0 group-hover:rotate-0 group-hover:opacity-100"
                      }`} />
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* RIGHT: Content Display */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease }}
              viewport={{ once: true }}
              className="lg:col-span-8 lg:sticky lg:top-24"
            >
              <div className="relative">
                {/* Glow - Colores actualizados */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-green-500/10 to-blue-500/10 rounded-3xl blur-2xl" />
                
                {/* Main Card */}
                <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeItem}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4 }}
                      className="p-8 sm:p-10"
                    >
                      {/* Image */}
                      <div className="relative aspect-video rounded-2xl overflow-hidden mb-8 bg-slate-100">
                        <Image
                          src={methodologyItems[activeItem].visual}
                          alt={methodologyItems[activeItem].title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                      </div>

                      {/* Content */}
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
                            {methodologyItems[activeItem].title}
                          </h3>
                          <p className="text-slate-600 leading-relaxed text-lg">
                            {methodologyItems[activeItem].desc}
                          </p>
                        </div>

                        {/* Stats Grid - Colores actualizados */}
                        <div className="grid grid-cols-3 gap-4 pt-4">
                          {methodologyItems[activeItem].stats.map((stat) => (
                            <motion.div
                              key={stat.label}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.2 }}
                              className="text-center p-4 rounded-xl bg-gradient-to-br from-green-50 to-blue-50 border border-green-100"
                            >
                              <p className="text-2xl sm:text-3xl font-bold text-green-600 mb-1">
                                {stat.value}
                              </p>
                              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                                {stat.label}
                              </p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Progress Indicator - Colores actualizados */}
                  <div className="flex items-center justify-center gap-3 border-t border-slate-100 bg-slate-50/50 px-8 py-5">
                    {methodologyItems.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => handleManualChange(i)}
                        className={`group flex items-center gap-2 transition-all ${
                          i === activeItem ? "opacity-100" : "opacity-40 hover:opacity-70"
                        }`}
                      >
                        <div className="relative">
                          <div className={`h-2 rounded-full transition-all duration-500 ${
                            i === activeItem 
                              ? "w-12 bg-gradient-to-r from-green-600 to-blue-600" 
                              : "w-2 bg-slate-400"
                          }`} />
                          {/* Auto-play progress bar */}
                          {i === activeItem && !isPaused && (
                            <motion.div
                              initial={{ width: "0%" }}
                              animate={{ width: "100%" }}
                              transition={{ duration: 4, ease: "linear" }}
                              className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-green-400 to-blue-400 opacity-50"
                            />
                          )}
                        </div>
                        <span className={`text-xs font-medium transition-colors ${
                          i === activeItem ? "text-green-700" : "text-slate-500"
                        }`}>
                          {i + 1}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Decorative Elements - Colores actualizados */}
                <div className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-gradient-to-br from-green-500/5 to-blue-500/5 blur-2xl" />
                <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-gradient-to-br from-blue-500/5 to-green-500/5 blur-2xl" />
              </div>
            </motion.div>
          </div>
        </div>

      </Container>
    </section>
  );
}