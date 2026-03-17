import { Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Carlos Mendoza",
    role: "Supervisor de Seguridad",
    company: "Minera Antamina",
    content: "La certificacion SSOMA me permitio ascender en mi carrera. Los instructores tienen experiencia real en campo y eso marca la diferencia.",
    rating: 5,
    avatar: "CM",
  },
  {
    name: "Maria Elena Torres",
    role: "Ingeniera Ambiental",
    company: "Southern Copper",
    content: "El enfoque en sostenibilidad y ESG es exactamente lo que necesitaba. Muy actualizado con las tendencias del sector.",
    rating: 5,
    avatar: "MT",
  },
  {
    name: "Roberto Huaman",
    role: "Jefe de Operaciones",
    company: "Cerro Verde",
    content: "Capacitamos a todo nuestro equipo con Econexa. La metodologia practica y los resultados fueron excelentes.",
    rating: 5,
    avatar: "RH",
  },
]

const companies = [
  "Antamina",
  "Southern Copper",
  "Cerro Verde",
  "Buenaventura",
  "Hochschild Mining",
  "Minsur"
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/testimonial-bg.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-background/95" />
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Testimonios</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-4">
            Lo que dicen nuestros egresados
          </h2>
          <p className="text-muted-foreground mt-4">
            Mas de 800 profesionales han transformado su carrera con nuestras certificaciones.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-card rounded-2xl p-8 border border-border relative hover:shadow-xl transition-shadow"
            >
              <Quote className="w-10 h-10 text-primary/10 absolute top-6 right-6" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                ))}
              </div>

              <p className="text-foreground leading-relaxed mb-6">
                {`"${testimonial.content}"`}
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary-foreground">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs text-primary font-medium">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trusted by companies */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-6">Empresas que confian en nosotros</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {companies.map((company) => (
              <span key={company} className="text-lg font-semibold text-muted-foreground/60 hover:text-primary transition-colors">
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
