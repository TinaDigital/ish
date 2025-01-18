'use client'

import { useState, useEffect } from 'react'
import { Wrench, Cog, PenToolIcon as Tool, ArrowUpRight, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const services = [
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Mantenimientos",
    description: "Soluciones confiables para el mantenimiento de sistemas de gases medicinales bajo normas IRAM/ISO 7396/1.",
    features: [
      "Reparación de acoples",
      "Reparación de paneles", 
      "Diagnóstico de sistemas",
      "Optimización de equipos"
    ],
    detailedContent: {
      title: "Mantenimientos Especializados",
      description: "Enfocados en garantizar la máxima eficiencia y seguridad, ofrecemos servicios de mantenimiento y reparación para equipos clave:",
      sections: [
        {
          title: "Instalaciones de gasoterapia",
          items: [
            "Reparación integral de acoples (DISS, O.N., AGA, etc.)",
            "Poliductos",
            "Columnas (fijas y articuladas)",
            "Llamadores de enfermería",
            "Alarmas de paro cardíaco",
            "Instalaciones eléctricas"
          ]
        },
        {
          title: "Equipos de medición",
          items: [
            "Reparación de caudalímetros",
            "Llaves reguladoras de vacío (con o sin manovacuómetro)",
            "Otros dispositivos esenciales"
          ]
        },
        {
          title: "Diagnóstico avanzado",
          items: [
            "Control de funcionamiento y diagnóstico de equipos",
            "Compresores de pistón seco, lubricado, tipo tornillo, SCROLL",
            "Bombas de vacío",
            "Ciclo secadores (por refrigeración o absorción)",
            "Tanques de abastecimiento",
            "Tableros de control automatizados"
          ]
        }
      ]
    }
  },
  {
    icon: <Cog className="w-6 h-6" />,
    title: "Provisión e Instalación",
    description: "Implementación integral de sistemas de gases medicinales certificados y personalizados.",
    features: [
      "Canalizaciones para gases medicinales",
      "Paneles y dosificadores",
      "Sistemas de aire comprimido medicinal",
      "Salas de máquinas y vacío"
    ],
    detailedContent: {
      title: "Provisión e Instalación de Equipos y Sistemas",
      description: "Con soluciones personalizadas, diseñamos e implementamos sistemas adaptados a las necesidades de tu proyecto:",
      sections: [
        {
          title: "Canalizaciones para gases medicinales",
          items: ["Fabricadas en cobre electrolítico 100% o acero inoxidable"]
        },
        {
          title: "Equipos de gasoterapia",
          items: ["Paneles de cabecera", "Columnas y brazos articulados para una distribución eficiente y segura"]
        },
        {
          title: "Dosificación de gases",
          items: ["Reguladores de presión", "Caudalímetros", "Llaves de aspiración con frascos"]
        },
        {
          title: "Salas de máquinas",
          items: [
            "Proyecto e instalación de compresores",
            "Bombas de vacío",
            "Depósitos de fluidos",
            "Ciclo secadores",
            "Baterías de filtro",
            "Purgas automáticas",
            "Tableros de comando automatizados"
          ]
        }
      ]
    }
  },
  {
    icon: <Tool className="w-6 h-6" />,
    title: "Reparaciones",
    description: "Servicio técnico especializado para equipos de marcas líderes en el mercado.",
    features: [
      "Compresores medicinales",
      "Bombas de vacío",
      "Diagnóstico experto",
      "Servicio garantizado"
    ],
    detailedContent: {
      title: "Reparación de Maquinaria Especializada",
      description: "Nuestro equipo técnico está capacitado para diagnosticar y reparar equipos de las principales marcas del mercado Argentino:",
      sections: [
        {
          title: "Compresores",
          items: [
            "Pistón seco pendular: TAUSEM",
            "Tornillo: Fenk, Atlas Copco, Sullair, Kaeser",
            "Scroll"
          ]
        },
        {
          title: "Bombas de vacío",
          items: [
            "Paleta rotativa: Atlas Copco, Busch, Pascal",
            "Pistón seco: TAUSEM",
            "Anillo de líquido: Dosivac"
          ]
        }
      ]
    }
  }
]

export default function Services() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [selectedService, setSelectedService] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <section id="services" className="py-24 relative bg-dark-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl 2xs:text-4xl md:text-5xl font-bold mb-4">
            ¿Qué
            <span className="bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent"> hacemos?</span>
          </h2>
          <p className="text-light/70 text-base 2xs:text-lg mb-12">
            Brindamos soluciones confiables y personalizadas para el suministro de gases medicinales bajo Normas IRAM/ISO 7396/1, garantizando calidad y eficiencia en cada proyecto.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 2xs:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group p-6 2xs:p-8 rounded-2xl transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-accent/5 ${
                activeIndex === index
                  ? 'bg-accent text-dark'
                  : 'bg-dark-secondary hover:border-light/10'
              }`}
              onMouseEnter={() => window.innerWidth >= 768 && setActiveIndex(index)}
              onMouseLeave={() => window.innerWidth >= 768 && setActiveIndex(null)}
              onClick={() => setSelectedService(index)}
            >
              <div className={`p-2 2xs:p-3 rounded-full inline-block mb-4 2xs:mb-6 transition-colors duration-300 ${
                activeIndex === index 
                  ? 'bg-dark/10 text-dark'
                  : 'bg-accent/10 text-accent'
              }`}>
                {service.icon}
              </div>
              <h3 className="font-display text-xl 2xs:text-2xl font-bold mb-3 2xs:mb-4 flex items-center gap-2">
                {service.title}
                <ArrowUpRight className={`w-4 h-4 2xs:w-5 2xs:h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 ${
                  activeIndex === index ? 'text-dark' : 'text-accent'
                }`} />
              </h3>
              <p className={`mb-4 2xs:mb-6 text-sm 2xs:text-base ${
                activeIndex === index
                  ? 'text-dark/80'
                  : 'text-light/70'
              }`}>
                {service.description}
              </p>
              <ul className={`space-y-2 2xs:space-y-3 transition-all duration-300`}>
                {service.features.slice(0, isMobile ? 2 : 4).map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm 2xs:text-base">
                    <div className={`w-1 h-1 rounded-full ${
                      activeIndex === index
                        ? 'bg-dark'
                        : 'bg-accent'
                    }`} />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`mt-4 text-sm font-medium flex items-center gap-1 ${
                activeIndex === index ? 'text-dark/90' : 'text-accent'
              }`}>
                Ver más detalles
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedService !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-2 2xs:p-4 overflow-hidden"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-dark-secondary rounded-lg 2xs:rounded-2xl p-3 2xs:p-6 sm:p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto relative scrollbar-thin scrollbar-thumb-accent/20 scrollbar-track-dark hover:scrollbar-thumb-accent/40"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-3 2xs:mb-6">
                <div className="flex items-center gap-2 2xs:gap-4">
                  <div className="p-1.5 2xs:p-3 rounded-full bg-accent/10 text-accent">
                    {services[selectedService].icon}
                  </div>
                  <h3 className="font-display text-lg 2xs:text-2xl font-bold text-light">
                    {services[selectedService].detailedContent.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-light/60 hover:text-light p-1 2xs:p-2"
                >
                  <X className="w-4 h-4 2xs:w-6 2xs:h-6" />
                </button>
              </div>
              
              <p className="text-light/70 mb-4 2xs:mb-8 text-xs 2xs:text-base">
                {services[selectedService].detailedContent.description}
              </p>

              <div className="space-y-4 2xs:space-y-8">
                {services[selectedService].detailedContent.sections.map((section, i) => (
                  <div key={i}>
                    <h4 className="font-bold text-base 2xs:text-xl mb-2 2xs:mb-4 text-accent">
                      {section.title}
                    </h4>
                    <ul className="space-y-1 2xs:space-y-2">
                      {section.items.map((item, j) => (
                        <li key={j} className="flex items-start 2xs:items-center gap-1.5 2xs:gap-3 text-light/70 text-xs 2xs:text-base">
                          <div className="w-1 h-1 2xs:w-1.5 2xs:h-1.5 rounded-full bg-accent mt-1.5 2xs:mt-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
