"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/src/components/ui/Container";
import Button from "@/src/components/ui/Button";
import { BadgeCheck, GraduationCap, ShieldCheck, Sparkles, PlayCircle } from "lucide-react";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function HeroV2Plus() {
  return (
    <section className="relative overflow-hidden border-b border-[rgb(var(--border))] bg-[rgb(var(--bg))]">
      {/* glow + gradient */}
      <div
        className="absolute inset-0 -z-20"
        style={{
          background:
            "radial-gradient(950px 520px at 18% 18%, rgba(var(--brand),0.22), transparent 60%)," +
            "radial-gradient(850px 520px at 88% 22%, rgba(var(--brand-2),0.18), transparent 60%)," +
            "linear-gradient(to bottom, rgba(248,250,252,1), rgba(255,255,255,1))",
        }}
      />
      {/* grid sutil */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(2,6,23,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(2,6,23,0.08) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(circle at 35% 25%, black 30%, transparent 72%)",
        }}
      />

      <Container className="py-14 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease }}
          >
            {/* chip tipo V1 pero en claro */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--border))] bg-white/75 px-3 py-1 text-xs text-slate-700 backdrop-blur">
              <span className="inline-flex items-center gap-1 rounded-full bg-[rgba(var(--brand),0.14)] px-2 py-0.5 text-slate-900">
                <Sparkles size={14} className="text-[rgb(var(--brand))]" />
                Premium
              </span>
              Minería • Certificación • Soporte
            </div>

            <h1 className="mt-4 text-4xl sm:text-6xl font-semibold tracking-tight text-slate-900">
              Capacitación que{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(var(--brand))] to-[rgb(var(--brand-2))]">
                impacta
              </span>{" "}
              en campo.
            </h1>

            <p className="mt-4 max-w-xl text-slate-700 sm:text-lg">
              Econexa entrena perfiles para mina con cursos aplicados: SSOMA, operación,
              topografía/GIS, mantenimiento y gestión. Menos teoría, más ejecución.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="/cursos" className="shadow-[var(--shadow)]">
                Explorar cursos
              </Button>

              {/* botón secundario más “V1” */}
              <a
                href="#destacados"
                className="inline-flex items-center justify-center rounded-xl border border-[rgb(var(--border))] bg-white/70 px-4 py-2 text-sm font-medium text-slate-800 backdrop-blur transition hover:bg-white"
              >
                Ver destacados →
              </a>

              <Button href="/contacto" variant="ghost">
                WhatsApp
              </Button>
            </div>

            <div className="mt-9 grid gap-3 sm:grid-cols-3">
              {[
                { i: <BadgeCheck size={18} />, t: "Certificación", d: "Constancia válida" },
                { i: <GraduationCap size={18} />, t: "Docentes", d: "Experiencia real" },
                { i: <ShieldCheck size={18} />, t: "SSOMA", d: "Seguridad primero" },
              ].map((x) => (
                <div
                  key={x.t}
                  className="rounded-2xl border border-[rgb(var(--border))] bg-white/80 p-4 shadow-[var(--shadow)]"
                >
                  <div className="flex items-center gap-2 text-slate-900">
                    {x.i}
                    <p className="text-sm font-semibold">{x.t}</p>
                  </div>
                  <p className="mt-1 text-xs text-slate-700">{x.d}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: círculo grande + glass overlay */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.75, ease }}
              className="relative mx-auto aspect-square w-full max-w-[560px]"
            >
              {/* aro con gradiente (más pro) */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[rgba(var(--brand),0.24)] via-transparent to-[rgba(var(--brand-2),0.16)]" />

              {/* foto circular */}
              <div className="absolute inset-5 overflow-hidden rounded-full border border-[rgb(var(--border))] bg-white shadow-[var(--shadow)]">
                <Image
                  src="/hero-mineria.jpg"
                  alt="Econexa minería"
                  width={1400}
                  height={1400}
                  priority
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-black/0 to-transparent" />
              </div>

              {/* botón play sobre la imagen */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/60 bg-white/75 backdrop-blur p-4 shadow-[var(--shadow)]"
                aria-label="Ver introducción"
                type="button"
              >
                
              </motion.button>

              {/* flotantes tipo stats */}
              <FloatCard className="-left-2 top-12" title="+500" sub="Participantes" />
              <FloatCard className="-right-2 top-20" title="+50" sub="Cursos" />
              <FloatCard className="left-12 -bottom-4" title="A tu ritmo" sub="100% online" />
            </motion.div>

            {/* glow extra */}
            <div
              className="pointer-events-none absolute -inset-12 -z-10 opacity-70 blur-3xl"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, rgba(var(--brand),0.25), transparent 60%)," +
                  "radial-gradient(circle at 70% 40%, rgba(var(--brand-2),0.18), transparent 62%)",
              }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function FloatCard({
  className,
  title,
  sub,
}: {
  className: string;
  title: string;
  sub: string;
}) {
  return (
    <motion.div
      className={`absolute ${className} rounded-2xl border border-[rgb(var(--border))] bg-white/85 backdrop-blur px-4 py-3 shadow-[var(--shadow)]`}
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 4.4, repeat: Infinity, ease: [0.42, 0, 0.58, 1] }}
    >
      <p className="text-lg font-semibold text-slate-900">{title}</p>
      <p className="text-xs text-slate-600">{sub}</p>
    </motion.div>
  );
}