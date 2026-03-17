import { Shield, Award, Leaf, Building2, CheckCircle } from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: Shield,
    title: "Seguridad Industrial",
    description: "Formacion integral en prevencion de riesgos y protocolos de seguridad para operaciones mineras.",
    color: "bg-primary/10 text-primary",
    highlights: ["Prevencion de riesgos", "Protocolos IPER", "Gestion de emergencias"]
  },
  {
    icon: Award,
    title: "Certificaciones SSOMA",
    description: "Programas certificados en Seguridad, Salud Ocupacional y Medio Ambiente con validez nacional.",
    color: "bg-blue-500/10 text-blue-600",
    highlights: ["ISO 45001", "ISO 14001", "Auditoria SSOMA"]
  },
  {
    icon: Leaf,
    title: "Sostenibilidad ESG",
    description: "Capacitacion en criterios ambientales, sociales y de gobernanza para mineria responsable.",
    color: "bg-green-500/10 text-green-600",
    highlights: ["Gestion ambiental", "Reportes ESG", "Economia circular"]
  },
  {
    icon: Building2,
    title: "Capacitacion In-House",
    description: "Programas personalizados para empresas mineras con instructores en campo.",
    color: "bg-orange-500/10 text-orange-600",
    highlights: ["A medida", "En sitio", "Equipos completos"]
  },
]

export function FeaturesSection() {
  return (
    <section id="nosotros" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30 relative overflow-hidden">
      {/* Background image overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/testimonial-bg.jpg"
          alt=""
          fill
          className="object-cover opacity-5"
        />
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Nuestras Areas</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-4 text-balance">
            Formacion especializada para el sector minero
          </h2>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Desarrollamos competencias tecnicas y profesionales con metodologia practica y enfoque en sostenibilidad.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-card rounded-2xl p-6 border border-border hover:shadow-xl hover:border-primary/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${feature.color} group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {feature.description}
              </p>
              <ul className="space-y-2">
                {feature.highlights.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
