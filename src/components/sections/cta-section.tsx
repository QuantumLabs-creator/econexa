
import { ArrowRight, Phone, Mail, MapPin, CheckCircle } from "lucide-react"
import Image from "next/image"
import { Button } from "../ui/button"

const benefits = [
  "Certificacion con validez nacional",
  "Instructores con +15 anos de experiencia",
  "Metodologia 100% practica",
  "Acceso a plataforma digital"
]

export function CTASection() {
  return (
    <section id="contacto" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src="/images/mining-modern.jpg"
              alt="Operacion minera"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-primary/90" />
          </div>
          
          <div className="relative p-8 sm:p-12 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground text-balance">
                  Comienza tu certificacion hoy
                </h2>
                <p className="text-primary-foreground/80 text-lg leading-relaxed max-w-md">
                  Unete a mas de 800 profesionales que han impulsado su carrera en el sector minero con nuestras certificaciones.
                </p>
                
                <ul className="space-y-3">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3 text-primary-foreground">
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button size="lg" variant="secondary" className="rounded-full px-8 gap-2">
                    Solicitar Informacion
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full px-8 bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                    Ver Catalogo
                  </Button>
                </div>
              </div>

              <div className="bg-card/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20">
                <h3 className="text-xl font-semibold text-primary-foreground mb-6">Contactanos</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-primary-foreground">
                    <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-primary-foreground/60">Llamanos</p>
                      <p className="font-semibold">+51 999 888 777</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-primary-foreground">
                    <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-primary-foreground/60">Escribenos</p>
                      <p className="font-semibold">info@econexa.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-primary-foreground">
                    <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-primary-foreground/60">Visitanos</p>
                      <p className="font-semibold">Av. Javier Prado Este 4600, Lima</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
