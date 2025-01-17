'use client'

import { useState } from 'react'
import { Wrench, Cog, PenToolIcon as Tool, ArrowUpRight } from 'lucide-react'

const services = [
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Mantenimiento Especializado",
    description: "Optimización y reparación de sistemas de gases medicinales con tecnología de punta.",
    features: [
      "Diagnóstico avanzado",
      "Reparación de acoples", 
      "Mantenimiento preventivo",
      "Control de calidad"
    ]
  },
  {
    icon: <Cog className="w-6 h-6" />,
    title: "Instalación Profesional",
    description: "Implementación completa de sistemas de gases medicinales adaptados a sus necesidades.",
    features: [
      "Diseño personalizado",
      "Instalación certificada",
      "Pruebas de seguridad", 
      "Documentación técnica"
    ]
  },
  {
    icon: <Tool className="w-6 h-6" />,
    title: "Reparación Especializada", 
    description: "Servicio técnico experto para equipos de marcas líderes en el mercado.",
    features: [
      "Diagnóstico preciso",
      "Reparación garantizada",
      "Piezas originales",
      "Servicio de emergencia"
    ]
  }
]

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="services" className="py-24 relative bg-dark-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Servicios de
            <span className="bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent"> Excelencia</span>
          </h2>
          <p className="text-light/70 text-lg mb-12">
            Ofrecemos soluciones integrales para sistemas de gases medicinales, garantizando la máxima calidad y seguridad.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group p-8 rounded-2xl transition-all duration-300 cursor-pointer ${
                activeIndex === index
                  ? 'bg-accent text-dark'
                  : 'bg-dark-secondary hover:border-light/10'
              }`}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <div className="p-3 rounded-full inline-block mb-6 bg-accent/10 text-accent">
                {service.icon}
              </div>
              <h3 className="font-display text-2xl font-bold mb-4 flex items-center gap-2">
                {service.title}
                <ArrowUpRight className={`w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 ${
                  activeIndex === index ? 'text-dark' : 'text-accent'
                }`} />
              </h3>
              <p className={`mb-6 ${
                activeIndex === index
                  ? 'text-dark/80'
                  : 'text-light/70'
              }`}>
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className={`w-1 h-1 rounded-full ${
                      activeIndex === index
                        ? 'bg-dark'
                        : 'bg-accent'
                    }`} />
                    {feature}
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
