import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { NumberTicker } from '@/app/components/ui/NumberTicker'

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-20 flex items-center bg-dark">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-secondary/5 rounded-full blur-[128px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h1 className="font-display text-6xl md:text-8xl font-bold mb-8">
            Innovación en
            <span className="bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent"> Gases Medicinales</span>
          </h1>
          <p className="text-xl md:text-2xl text-light/70 mb-12 max-w-2xl">
            Transformamos la infraestructura médica con soluciones de vanguardia en sistemas de gases medicinales.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#services"
              className="group px-6 py-3 bg-accent text-dark font-medium rounded-full flex items-center gap-2 hover:bg-accent/90 transition-colors"
            >
              Explorar servicios
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#contact"
              className="px-6 py-3 border border-light/10 text-light font-medium rounded-full hover:bg-light/5 transition-colors"
            >
              Contactar
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 border-t border-light/5 pt-12">
          <div>
            <div className="font-display text-4xl font-bold text-accent">
              <NumberTicker value={10} />+
            </div>
            <div className="text-light/70">
              <p>Años de experiencia</p>
              <p>en el rubro</p>
            </div>
          </div>
          <div>
            <div className="font-display text-4xl font-bold text-accent">
              <NumberTicker value={100} />+
            </div>
            <div className="text-light/70">Proyectos completados</div>
          </div>
          <div>
            <div className="font-display text-4xl font-bold text-accent">
              <NumberTicker value={50} />+
            </div>
            <div className="text-light/70">Clientes satisfechos</div>
          </div>
        </div>
      </div>
    </section>
  )
}
