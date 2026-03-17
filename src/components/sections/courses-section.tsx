
import { Clock, Users, Star, ArrowRight } from "lucide-react"
import Image from "next/image"
import { Button } from "../ui/button"

const courses = [
  {
    title: "Gestion SSOMA en Mineria",
    category: "SSOMA",
    image: "/images/course-ssoma.jpg",
    duration: "40 horas",
    students: 245,
    rating: 4.9,
    price: "S/ 1,200",
    badge: "Mas Popular",
    badgeColor: "bg-primary",
  },
  {
    title: "Operacion de Maquinaria Pesada",
    category: "Operaciones",
    image: "/images/course-equipment.jpg",
    duration: "60 horas",
    students: 189,
    rating: 4.8,
    price: "S/ 2,500",
    badge: "Certificado",
    badgeColor: "bg-blue-600",
  },
  {
    title: "Primeros Auxilios Mineros",
    category: "Seguridad",
    image: "/images/course-emergency.jpg",
    duration: "24 horas",
    students: 312,
    rating: 4.9,
    price: "S/ 450",
    badge: "Nuevo",
    badgeColor: "bg-green-600",
  },
  {
    title: "Gestion Ambiental y ESG",
    category: "Sostenibilidad",
    image: "/images/mining-modern.jpg",
    duration: "32 horas",
    students: 156,
    rating: 4.7,
    price: "S/ 980",
    badge: "En Vivo",
    badgeColor: "bg-orange-500",
  },
]

export function CoursesSection() {
  return (
    <section id="cursos" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-muted/30 to-transparent -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Catalogo</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2">
              Cursos Destacados
            </h2>
            <p className="text-muted-foreground mt-2 max-w-lg">
              Programas disenados por expertos con mas de 15 anos de experiencia en el sector minero.
            </p>
          </div>
          <Button variant="ghost" className="text-primary hover:text-primary/80 gap-2 self-start sm:self-auto">
            Ver todos los cursos
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div
              key={course.title}
              className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-2xl hover:border-primary/20 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className={`px-3 py-1 text-xs font-medium text-white rounded-full ${course.badgeColor}`}>
                    {course.badge}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-xs font-medium text-white/80 uppercase tracking-wider">
                    {course.category}
                  </span>
                </div>
              </div>

              <div className="p-5 space-y-4">
                <h3 className="text-lg font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                  {course.title}
                </h3>

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {course.students}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium text-foreground">{course.rating}</span>
                  </div>
                  <span className="text-lg font-bold text-primary">{course.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info banner */}
        <div className="mt-16 bg-muted/50 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="relative w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0">
              <Image
                src="/images/safety-training.jpg"
                alt="Capacitacion corporativa"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground">Capacitacion para empresas</h3>
              <p className="text-muted-foreground">Programas personalizados con descuentos especiales para grupos corporativos.</p>
            </div>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 gap-2 flex-shrink-0">
            Solicitar cotizacion
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
