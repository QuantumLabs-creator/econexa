"use client";

import { motion } from "framer-motion";
import Container from "@/src/components/ui/Container";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Linkedin, 
  Instagram, 
  Youtube,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const footerLinks = {
  empresa: [
    { name: "Nosotros", href: "/nosotros" },
    { name: "Equipo", href: "/equipo" },
    { name: "Trabaja con nosotros", href: "/carreras" },
    { name: "Blog", href: "/blog" },
  ],
  cursos: [
    { name: "Todos los cursos", href: "/cursos" },
    { name: "SSOMA", href: "/cursos/ssoma" },
    { name: "Operaciones", href: "/cursos/operaciones" },
    { name: "Gestión", href: "/cursos/gestion" },
  ],
  soporte: [
    { name: "Centro de ayuda", href: "/ayuda" },
    { name: "Contacto", href: "/contacto" },
    { name: "Términos y condiciones", href: "/terminos" },
    { name: "Política de privacidad", href: "/privacidad" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-900 pt-20 pb-10">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-cyan-500/10 to-transparent rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <Container>
        {/* Top Section - Newsletter + Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="mb-16 pb-16 border-b border-white/10"
        >
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                ¿Listo para empezar?
              </h3>
              <p className="text-slate-400">
                Suscríbete para recibir actualizaciones de nuevos cursos y recursos exclusivos.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Tu correo empresarial"
                className="flex-1 rounded-xl border border-white/20 bg-white/5 px-5 py-3.5 text-sm text-white placeholder:text-slate-500 focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
              />
              <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/30 transition-all hover:from-cyan-700 hover:to-blue-700 hover:shadow-xl">
                Suscribirse
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5 mb-16">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease }}
            className="lg:col-span-2"
          >
            {/* Logo */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Econexa</span>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
              Capacitación técnica especializada para el sector minero. 
              Cursos certificados con metodología 100% aplicada.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a href="mailto:info@econexa.com" className="flex items-center gap-3 text-sm text-slate-400 hover:text-cyan-400 transition-colors">
                <Mail className="h-4 w-4" />
                info@econexa.com
              </a>
              <a href="tel:+51987654321" className="flex items-center gap-3 text-sm text-slate-400 hover:text-cyan-400 transition-colors">
                <Phone className="h-4 w-4" />
                +51 987 654 321
              </a>
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <MapPin className="h-4 w-4" />
                Lima, Perú
              </div>
            </div>
          </motion.div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + (i + 1) * 0.1, ease }}
            >
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4, ease }}
          className="pt-8 border-t border-white/10"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <p className="text-sm text-slate-500 text-center sm:text-left">
              © {new Date().getFullYear()} Econexa. Todos los derechos reservados.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-all hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:text-cyan-400"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5, ease }}
          className="mt-8 flex flex-wrap justify-center gap-6 sm:gap-8"
        >
          {["ISO 9001", "Estándares MINEM", "Pago Seguro SSL", "Garantía 30 días"].map((badge) => (
            <div
              key={badge}
              className="flex items-center gap-2 text-xs text-slate-500"
            >
              <CheckCircle className="h-3.5 w-3.5 text-cyan-500" />
              {badge}
            </div>
          ))}
        </motion.div>
      </Container>
    </footer>
  );
}