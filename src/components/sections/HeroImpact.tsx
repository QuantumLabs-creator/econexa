"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/src/components/ui/Container";
import Button from "@/src/components/ui/Button";
import { PlayCircle, ShieldCheck, GraduationCap, BadgeCheck } from "lucide-react";

export default function HeroImpact() {
  return (
    <section className="relative overflow-hidden">
      {/* fondo oscuro + luces */}
      <div className="absolute inset-0 -z-20 bg-slate-950" />
      <div
        className="absolute inset-0 -z-10 opacity-70"
        style={{
          background:
            "radial-gradient(900px 420px at 18% 20%, rgba(var(--brand),0.35), transparent 60%)," +
            "radial-gradient(780px 420px at 85% 25%, rgba(var(--brand-2),0.28), transparent 60%)",
        }}
      />

      <Container className="py-12 sm:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Texto */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Profesional • Minería • Certificación
            </div>

            <h1 className="mt-5 text-4xl sm:text-6xl font-semibold tracking-tight">
              El aprendizaje{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-indigo-300">
                continúa
              </span>
              .
            </h1>

            <p className="mt-4 max-w-xl text-white/75 sm:text-lg">
              Econexa impulsa tu desempeño en mina con cursos aplicados: SSOMA, operación,
              topografía/GIS, mantenimiento, gestión y analítica.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="/cursos" className="shadow-[var(--shadow)]">
                Ver Cursos
              </Button>
              <Button href="/contacto" variant="ghost" className="text-white hover:bg-white/10">
                Contáctanos
              </Button>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                { icon: <BadgeCheck size={18} />, t: "Certificación", d: "Constancia válida" },
                { icon: <GraduationCap size={18} />, t: "Expertos", d: "Docentes de campo" },
                { icon: <ShieldCheck size={18} />, t: "Enfoque SSOMA", d: "Seguridad primero" },
              ].map((x) => (
                <div
                  key={x.t}
                  className="rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur"
                >
                  <div className="flex items-center gap-2 text-white/90">
                    {x.icon}
                    <p className="text-sm font-semibold">{x.t}</p>
                  </div>
                  <p className="mt-1 text-xs text-white/70">{x.d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual: imagen grande + cards flotantes */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden rounded-3xl border border-white/15 shadow-[var(--shadow)]"
            >
              <Image
                src="/hero-mineria.jpg"
                alt="Capacitación para minería"
                width={1200}
                height={900}
                priority
                className="h-[360px] w-full object-cover sm:h-[440px]"
              />

              {/* overlay oscuro + textura */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/20 to-transparent" />
              <div
                className="absolute inset-0 opacity-[0.22]"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.10) 1px, transparent 1px)",
                  backgroundSize: "60px 60px",
                  maskImage: "radial-gradient(circle at 40% 30%, black 35%, transparent 75%)",
                }}
              />

              {/* Card tipo “video / en vivo” (como Geocaj) */}
              <div className="absolute right-4 top-4">
                <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur px-3 py-2 text-xs text-white/85 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  En vivo ahora
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur p-4">
                  <p className="text-sm font-semibold text-white">Cursos Profesionales</p>
                  <p className="mt-1 text-xs text-white/70">
                    Online / Presencial • Material descargable
                  </p>
                  <button className="mt-3 inline-flex items-center gap-2 text-sm text-white/90 hover:text-white transition">
                    <PlayCircle /> Ver intro
                  </button>
                </div>

                <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur p-4">
                  <p className="text-sm font-semibold text-white">100% a tu ritmo</p>
                  <p className="mt-1 text-xs text-white/70">
                    Acceso por módulos • Soporte y seguimiento
                  </p>
                  <div className="mt-3 flex gap-2">
                    <span className="rounded-full bg-white/10 border border-white/15 px-3 py-1 text-xs text-white/80">
                      Operación
                    </span>
                    <span className="rounded-full bg-white/10 border border-white/15 px-3 py-1 text-xs text-white/80">
                      SSOMA
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* mini cards flotantes tipo stats */}
            <div className="pointer-events-none absolute -bottom-8 left-6 hidden md:flex gap-3">
              <div className="rounded-2xl border border-white/15 bg-white/8 backdrop-blur px-4 py-3 text-white shadow-[var(--shadow)]">
                <p className="text-xl font-semibold">+500</p>
                <p className="text-xs text-white/70">Participantes</p>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/8 backdrop-blur px-4 py-3 text-white shadow-[var(--shadow)]">
                <p className="text-xl font-semibold">+50</p>
                <p className="text-xs text-white/70">Cursos</p>
              </div>
            </div>

            {/* glow */}
            <div
              className="pointer-events-none absolute -inset-10 -z-10 opacity-70 blur-3xl"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, rgba(var(--brand),0.40), transparent 58%)," +
                  "radial-gradient(circle at 70% 40%, rgba(var(--brand-2),0.30), transparent 62%)",
              }}
            />
          </div>
        </div>
      </Container>

      {/* transición a blanco (para que el siguiente bloque no choque) */}
      <div className="h-10 bg-gradient-to-b from-slate-950 to-white" />
    </section>
  );
}