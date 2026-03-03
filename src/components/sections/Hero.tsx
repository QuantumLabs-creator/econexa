"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "@/src/components/ui/Container";
import Button from "@/src/components/ui/Button";
import { ArrowRight, Play, Star, Zap, Globe, Users } from "lucide-react";
import { useRef } from "react";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function HeroBlue() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
      {/* Background Elements - Blue Version */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-gradient-to-bl from-cyan-50 to-transparent rounded-full blur-[140px] opacity-60" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-50 to-transparent rounded-full blur-[140px] opacity-50" />
        
        {/* Animated Grid Lines */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]" />
          <motion.div 
            className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px)] bg-[size:64px_64px]"
            animate={{ x: [0, 64] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </div>

      <Container className="relative z-10 ">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          
          {/* LEFT: Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease }}
            className="max-w-2xl"
          >
            {/* Badge - Blue Version */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-600 shadow-sm mb-8"
            >
              <Zap className="h-4 w-4 text-cyan-600" />
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-600 animate-pulse" />
              <span className="bg-cyan-50 px-2 py-0.5 rounded text-xs font-bold text-cyan-700 uppercase tracking-wide">
                2024
              </span>
              Plataforma Líder en Capacitación Minera
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              Expertos en <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-500">
                formación minera
              </span>
            </h1>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
              Capacitación técnica especializada para el sector minero. 
              Cursos certificados, instructores en campo y metodología 100% aplicada.
            </p>

            {/* Stats Rápidas */}
            <div className="mt-8 flex flex-wrap gap-8">
              {[
                { num: "500+", label: "Alumnos" },
                { num: "50+", label: "Cursos" },
                { num: "18+", label: "Expertos" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  className="text-left"
                >
                  <p className="text-3xl font-bold text-slate-900">{stat.num}</p>
                  <p className="text-sm text-slate-500">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Botones - Blue Version */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button 
                href="/cursos" 
                className="h-14 px-8 text-base font-semibold bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white shadow-lg shadow-cyan-500/30"
              >
                Explorar Programas
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <a
                href="#demo"
                className="group inline-flex h-14 items-center justify-center rounded-xl border border-slate-200 bg-white px-6 text-base font-medium text-slate-700 transition-all hover:bg-slate-50 hover:border-slate-300 hover:shadow-md"
              >
                <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-cyan-50 group-hover:bg-cyan-100 transition-colors">
                  <Play className="h-5 w-5 text-cyan-600" />
                </div>
                Ver cómo funciona
              </a>
            </div>

            {/* Trust Badges - Blue Version */}
            <div className="mt-12 flex items-center gap-6">
              <div className="text-sm">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-cyan-600 text-cyan-600" />
                  ))}
                </div>
                <p className="text-slate-500">+500 profesionales certificados</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Visual Composition - Blue Version */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease, delay: 0.3 }}
            className="relative"
          >
            {/* Main Card */}
            <div className="relative mx-auto w-full max-w-lg">
              {/* Glow Effect - Blue Version */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/20 via-blue-500/15 to-cyan-400/15 rounded-3xl blur-2xl opacity-60" />
              
              {/* Card Principal - Blue Version */}
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
                {/* Header Bar - Blue Version */}
                <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50 px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-400" />
                    <div className="h-3 w-3 rounded-full bg-amber-400" />
                    <div className="h-3 w-3 rounded-full bg-emerald-400" />
                  </div>
                  <div className="text-xs text-slate-500 font-mono">econexa.platform</div>
                </div>

                {/* Content Preview - Blue Version */}
                <div className="p-6">
                  <div className="aspect-video rounded-xl overflow-hidden border border-slate-200 bg-slate-100 relative">
                    <Image
                      src="/platform-preview-light.jpg"
                      alt="Plataforma Econexa"
                      width={800}
                      height={450}
                      className="w-full h-full object-cover"
                    />
                    {/* Play Button Overlay - Blue Version */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-16 w-16 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/40 hover:scale-110 transition-transform">
                        <Play className="h-6 w-6 fill-white text-white ml-1" />
                      </div>
                    </div>
                  </div>

                  {/* Course Info - Blue Version */}
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Gestión de SSOMA en Minería</p>
                      <p className="text-xs text-slate-500">Curso Certificado • 40 horas</p>
                    </div>
                    <div className="flex items-center gap-2 rounded-lg bg-cyan-50 px-3 py-1.5">
                      <Globe className="h-4 w-4 text-cyan-600" />
                      <span className="text-xs font-medium text-cyan-700">En Vivo</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements - Blue Version */}
              <FloatBadge 
                className="absolute -left-4 top-16" 
                icon={Users} 
                text="Clases Grupales" 
                delay={0.5} 
              />
              <FloatBadge 
                className="absolute -right-2 bottom-28" 
                icon={Star} 
                text="4.9/5 Calificación" 
                delay={0.7} 
              />
            </div>
          </motion.div>
        </div>
      </Container>

     
    </section>
  );
}

function FloatBadge({ className, icon: Icon, text, delay }: any) {
  return (
    <motion.div
      className={`flex items-center gap-2 rounded-xl border border-slate-200 bg-white/90 px-4 py-2.5 backdrop-blur-md shadow-lg ${className}`}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-50">
        <Icon className="h-4 w-4 text-cyan-600" />
      </div>
      <span className="text-sm font-medium text-slate-700">{text}</span>
    </motion.div>
  );
}