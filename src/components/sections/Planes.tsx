"use client";

import Container from "@/src/components/ui/Container";
import { motion } from "framer-motion";
import { 
  Check, 
  CheckCircle, 
  ArrowRight,
  Star,
  Zap,
  Briefcase
} from "lucide-react";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const plans = [
  {
    name: "Básico",
    price: "S/ 299",
    period: "por curso",
    desc: "Ideal para profesionales independientes",
    features: [
      "Acceso al curso seleccionado",
      "Material descargable",
      "Certificado digital",
      "Acceso por 6 meses",
      "Soporte por email"
    ],
    cta: "Elegir Plan Básico",
    popular: false
  },
  {
    name: "Premium",
    price: "S/ 799",
    period: "por curso",
    desc: "La experiencia completa de aprendizaje",
    features: [
      "Todo lo del plan Básico",
      "Sesiones en vivo semanales",
      "Mentoría 1 a 1 (2 sesiones)",
      "Proyecto práctico revisado",
      "Acceso de por vida",
      "Soporte prioritario 24/7",
      "Bolsa de trabajo exclusiva"
    ],
    cta: "Elegir Plan Premium",
    popular: true
  },
  {
    name: "Empresarial",
    price: "Personalizado",
    period: "para equipos",
    desc: "Capacitación para tu organización",
    features: [
      "Cursos ilimitados para tu equipo",
      "Instructores dedicados",
      "Reportes de progreso",
      "Certificación grupal",
      "Contenido personalizado",
      "Facturación empresarial",
      "Descuentos por volumen"
    ],
    cta: "Contactar Ventas",
    popular: false
  },
];

export default function PricingSection() {
  return (
    <section className="relative overflow-hidden bg-white pt-16 ">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-cyan-50 to-transparent rounded-full blur-[120px] opacity-50" />
      </div>

      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          
          
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            Invierte en tu 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
              {" futuro profesional"}
            </span>
          </h2>

          <p className="text-lg text-slate-600">
            Planes flexibles diseñados para diferentes necesidades. 
            Elige el que mejor se adapte a tus objetivos.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid gap-8 lg:grid-cols-3 mb-20">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease }}
              viewport={{ once: true }}
              className={`relative rounded-2xl border p-8 ${
                plan.popular
                  ? "border-cyan-600 bg-gradient-to-b from-cyan-50 to-white shadow-xl scale-105"
                  : "border-slate-200 bg-white shadow-sm"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 px-4 py-1.5 text-xs font-semibold text-white shadow-lg">
                    <Zap className="h-3 w-3" />
                    Más Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-sm text-slate-600 mb-4">{plan.desc}</p>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                  <span className="text-slate-500"> {plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-slate-700">
                    <Check className="h-5 w-5 text-cyan-600 shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="/contacto"
                className={`block w-full rounded-xl px-6 py-3.5 text-center text-sm font-semibold transition-all ${
                  plan.popular
                    ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/30 hover:from-cyan-700 hover:to-blue-700 hover:shadow-xl"
                    : "border border-slate-200 text-slate-700 hover:border-cyan-600/40 hover:bg-cyan-50"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <Briefcase className="h-5 w-5 text-cyan-600" />
            <span className="font-semibold text-slate-900">Garantía de Satisfacción</span>
          </div>
          <p className="text-sm text-slate-600">
            Si no estás satisfecho en los primeros 7 días, te devolvemos el 100% de tu inversión. Sin preguntas.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}