import { CheckCircle, Shield, Users, Lightbulb } from 'lucide-react'

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary">¿Por qué elegirnos?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ReasonCard
            icon={<CheckCircle className="w-8 h-8 text-accent" />}
            title="Experiencia comprobada"
            description="Años de experiencia en el sector de gases medicinales."
          />
          <ReasonCard
            icon={<Shield className="w-8 h-8 text-accent" />}
            title="Cumplimiento de normativas"
            description="Adherimos a los más altos estándares de seguridad."
          />
          <ReasonCard
            icon={<Users className="w-8 h-8 text-accent" />}
            title="Personal capacitado"
            description="Equipo técnico altamente calificado y en constante formación."
          />
          <ReasonCard
            icon={<Lightbulb className="w-8 h-8 text-accent" />}
            title="Soluciones personalizadas"
            description="Adaptamos nuestros servicios a las necesidades de cada cliente."
          />
        </div>
      </div>
    </section>
  )
}

function ReasonCard({ icon, title, description }) {
  return (
    <div className="relative p-6 bg-white">
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-accent"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-accent"></div>
      <div className="mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-primary text-center">{title}</h3>
      <p className="text-primary text-center">{description}</p>
    </div>
  )
}

