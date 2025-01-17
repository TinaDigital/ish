import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-dark-secondary">
      <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-accent-secondary/10 opacity-30" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-8 max-w-3xl mx-auto">
          Lleve su infraestructura médica al
          <span className="bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent"> siguiente nivel</span>
        </h2>
        <p className="text-xl text-light/70 mb-12 max-w-2xl mx-auto">
          Contáctenos hoy para discutir cómo podemos optimizar sus sistemas de gases medicinales.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="#contact"
            className="group px-8 py-4 bg-accent text-dark font-medium rounded-full flex items-center gap-2 hover:bg-accent/90 transition-colors"
          >
            Solicitar consulta
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="tel:+123456789"
            className="px-8 py-4 border border-light/10 text-light font-medium rounded-full hover:bg-light/5 transition-colors"
          >
            Llamar ahora
          </Link>
        </div>
      </div>
    </section>
  )
}

