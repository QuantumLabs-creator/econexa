"use client";

import { Mail, Phone, Facebook, Linkedin, Instagram } from "lucide-react";
import Container from "@/src/components/ui/Container";

export default function Topbar() {
  return (
    <div className="hidden md:block border-b border-white/10 bg-slate-950 text-white">
      <Container className="flex h-10 items-center justify-between text-xs">
        <div className="flex items-center gap-4 text-white/80">
          <span className="inline-flex items-center gap-2">
            <Mail size={14} /> capacitaciones@econexa.pe
          </span>
          <span className="inline-flex items-center gap-2">
            <Phone size={14} /> +51 9XX XXX XXX
          </span>
        </div>
        <div className="flex items-center gap-3 text-white/70">
          <Facebook size={16} className="hover:text-white transition" />
          <Linkedin size={16} className="hover:text-white transition" />
          <Instagram size={16} className="hover:text-white transition" />
        </div>
      </Container>
    </div>
  );
}