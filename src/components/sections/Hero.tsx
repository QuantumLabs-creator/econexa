"use client"


import { ArrowRight, Play, Users, BookOpen, Award, Star, Globe } from "lucide-react"
import Image from "next/image"
import { Button } from "@/src/components/ui/button"



export function HeroSection() {
  return (
    <section id="inicio" className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <svg viewBox="0 0 24 24" className="w-4 h-4 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
              </svg>
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-primary">
                2026 Plataforma Lider en Capacitacion Minera Sostenible
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground text-balance">
                Expertos en{" "}
                <span className="text-primary">formacion minera</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                Capacitacion tecnica especializada para el sector minero. Cursos certificados, instructores en campo y metodologia 100% aplicada con enfoque en sostenibilidad.
              </p>
            </div>

            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-muted-foreground" />
                <div>
                  <span className="text-2xl font-bold text-foreground">800+</span>
                  <p className="text-sm text-muted-foreground">Alumnos</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <BookOpen className="w-5 h-5 text-muted-foreground" />
                <div>
                  <span className="text-2xl font-bold text-foreground">65+</span>
                  <p className="text-sm text-muted-foreground">Cursos</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-muted-foreground" />
                <div>
                  <span className="text-2xl font-bold text-foreground">30+</span>
                  <p className="text-sm text-muted-foreground">Expertos</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 gap-2">
                Explorar Cursos
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8 gap-2 border-border">
                <Play className="w-4 h-4 text-primary" />
                Ver Demo Interactiva
              </Button>
            </div>

            <div className="flex items-center gap-3 pt-4">
              <div className="flex items-center gap-1 text-primary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                +800 profesionales certificados en sostenibilidad minera
              </span>
            </div>
          </div>

          <div className="relative lg:pl-8">
            <div className="relative">
              {/* Main platform card */}
              <div className="bg-card rounded-2xl shadow-2xl border border-border overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/30">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <span className="text-xs text-muted-foreground ml-auto">econexa.platform</span>
                </div>

                <div className="p-6 space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-foreground">Clases Grupales</span>
                  </div>

                  {/* Video thumbnail with real image */}
                  <div className="relative aspect-video rounded-xl overflow-hidden">
                    <Image
                      src="/images/mining-modern.jpg"
                      alt="Operacion minera moderna"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform shadow-lg">
                        <Play className="w-6 h-6 text-primary-foreground fill-current ml-1" />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-foreground">Gestion SSOMA y Sostenibilidad</h3>
                      <p className="text-sm text-muted-foreground">Curso Certificado - 40 horas - Enfoque ESG</p>
                    </div>
                    <div className="flex items-center gap-2 text-primary text-sm font-medium">
                      <Globe className="w-4 h-4" />
                      En Vivo
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating rating card */}
              <div className="absolute -top-4 -right-4 bg-card rounded-xl shadow-lg border border-border px-4 py-3 flex items-center gap-2">
                <Star className="w-4 h-4 text-primary fill-current" />
                <span className="text-sm font-medium text-foreground">4.9/5 Calificacion</span>
              </div>

              {/* Floating students card */}
              <div className="absolute -bottom-4 -left-4 bg-card rounded-xl shadow-lg border border-border px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-card flex items-center justify-center text-xs font-medium text-primary">JM</div>
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 border-2 border-card flex items-center justify-center text-xs font-medium text-blue-600">AL</div>
                    <div className="w-8 h-8 rounded-full bg-green-500/20 border-2 border-card flex items-center justify-center text-xs font-medium text-green-600">RC</div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">+245 inscritos</p>
                    <p className="text-xs text-muted-foreground">este mes</p>
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
