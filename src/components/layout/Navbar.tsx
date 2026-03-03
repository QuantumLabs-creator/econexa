"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Container from "@/src/components/ui/Container";
import Button from "@/src/components/ui/Button";
import { cn } from "@/src/lib/utils";

const nav = [
  { label: "Inicio", href: "/" },
  { label: "Cursos", href: "/cursos" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Blog", href: "/blog" },
  { label: "Contacto", href: "/contacto" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 border-b border-[rgb(var(--border))] bg-white/70 backdrop-blur-md"
    >
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[rgb(var(--muted))] border border-[rgb(var(--border))]">
            ⛏️
          </span>
          <span className="text-base font-semibold tracking-tight">
            Eco<span className="text-[rgb(var(--brand))]">nexa</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {nav.map((i) => {
            const active = pathname === i.href;
            return (
              <Link
                key={i.href}
                href={i.href}
                className={cn(
                  "rounded-xl px-3 py-2 text-sm transition",
                  active
                    ? "bg-[rgb(var(--muted))] text-slate-900"
                    : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                )}
              >
                {i.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            href="/cursos"
            variant="ghost"
            className="hidden sm:inline-flex"
          >
            Ver catálogo
          </Button>
          <Button href="/contacto">Inscribirme</Button>
        </div>
      </Container>
    </motion.header>
  );
}