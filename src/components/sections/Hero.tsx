"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/src/components/ui/Container";
import Button from "@/src/components/ui/Button";
import { ShieldCheck, TrendingUp, MapPinned } from "lucide-react";

export default function HeroV2() {
  return (
    <section className="relative overflow-hidden border-b border-[rgb(var(--border))] bg-[rgb(var(--bg))]">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(900px 420px at 20% 15%, rgba(var(--brand),0.20), transparent 60%)," +
            "radial-gradient(780px 420px at 90% 25%, rgba(var(--brand-2),0.16), transparent 60%)",
        }}
      />

      <Container className="py-14 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-xs uppercase tracking-wider text-slate-500">Econexa</p>
            <h1 className="mt-3 text-4xl sm:text-6xl font-semibold tracking-tight text-slate-900">
              Capacitación para{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(var(--brand))] to-[rgb(var(--brand-2))]">
                minería
              </span>{" "}
              con enfoque práctico.
            </h1>

            <p className="mt-4 max-w-xl text-slate-700 sm:text-lg">
              Aprende con rutas por rol. Menos teoría, más aplicación: SSOMA, operación,
              topografía/GIS, mantenimiento y gestión.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="/cursos" className="shadow-[var(--shadow)]">
                Explorar cursos
              </Button>
              <Button href="/contacto" variant="ghost">
                Hablar por WhatsApp
              </Button>
            </div>

            <div className="mt-9 grid gap-3 sm:grid-cols-3">
              {[
                { i: <ShieldCheck size={18} />, t: "SSOMA", d: "Seguridad primero" },
                { i: <MapPinned size={18} />, t: "Campo", d: "Casos reales" },
                { i: <TrendingUp size={18} />, t: "KPIs", d: "Mejora medible" },
              ].map((x) => (
                <div key={x.t} className="rounded-2xl border border-[rgb(var(--border))] bg-white p-4 shadow-[var(--shadow)]">
                  <div className="flex items-center gap-2 text-slate-900">
                    {x.i}
                    <p className="text-sm font-semibold">{x.t}</p>
                  </div>
                  <p className="mt-1 text-xs text-slate-700">{x.d}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* visual circular */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative mx-auto aspect-square w-full max-w-[520px]"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[rgba(var(--brand),0.20)] to-[rgba(var(--brand-2),0.14)]" />
              <div className="absolute inset-4 overflow-hidden rounded-full border border-[rgb(var(--border))] bg-white shadow-[var(--shadow)]">
                <Image
                  src="/hero-mineria.jpg"
                  alt="Econexa minería"
                  width={1200}
                  height={1200}
                  priority
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/25 via-transparent to-transparent" />
              </div>

              {/* stats flotantes */}
              <FloatCard className="-left-2 top-10" title="+500" sub="Participantes" />
              <FloatCard className="-right-2 top-16" title="+50" sub="Cursos" />
              <FloatCard className="left-10 -bottom-3" title="Online" sub="A tu ritmo" />
            </motion.div>
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
      transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
    >
      <p className="text-lg font-semibold text-slate-900">{title}</p>
      <p className="text-xs text-slate-600">{sub}</p>
    </motion.div>
  );
}