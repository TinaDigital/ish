import { Shield, Zap, Clock, Users } from 'lucide-react'
import Image from 'next/image'
import soldador from "../../../public/soldando_oscura.jpg"

const features = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Máxima Seguridad",
    description: "Cumplimos con los más altos estándares de seguridad en la industria médica."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Alta Eficiencia",
    description: "Optimizamos el rendimiento de sus sistemas para un funcionamiento óptimo."
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Respuesta Rápida",
    description: "Servicio de emergencia disponible 24/7 para su tranquilidad."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Equipo Experto",
    description: "Personal altamente capacitado y certificado en gases medicinales."
  }
]

export default function Features() {
  return (
    <section id="features" className="py-24 relative overflow-hidden bg-dark">
      <div className="absolute inset-0 bg-accent/2" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Por qué elegir
              <span className="bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent"> ISH</span>
            </h2>
            <p className="text-light/70 text-lg mb-8">
              Nos destacamos por nuestra experiencia, profesionalismo y compromiso con la excelencia en cada proyecto.
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="relative">
                  <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-accent to-accent-secondary opacity-20 blur" />
                  <div className="relative p-6 bg-dark rounded-lg border border-light/5">
                    <div className="p-2 bg-accent/10 rounded-lg inline-block mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="font-display text-xl font-bold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-light/70">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-square">
            <div className="absolute inset-0 bg-gradient-to-br from-accent to-accent-secondary opacity-20 rounded-full blur-3xl" />
            <div className="relative h-full rounded-3xl overflow-hidden">
              <Image
                src={soldador}
                alt="Soldador trabajando"
                className="object-cover h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
