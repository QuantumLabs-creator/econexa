"use client";

import Hero from "@/src/components/sections/Hero";
import HeroEconexa from "@/src/components/sections/HeroEconexa";
import HeroImpact from "@/src/components/sections/HeroImpact";
// (luego importaremos más secciones: Logos, Destacados, Stats, etc.)

export default function HomePage() {
  return (
    <main>
     <HeroEconexa />
      {/* siguiente: Logos / Destacados / Stats / Testimonios / CTA */}
      <section className="py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-[rgb(var(--border))] bg-[rgba(var(--muted),0.55)] p-10">
            <p className="text-sm text-slate-700">
              Siguiente bloque: logos + destacados + stats + testimonios + CTA.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}