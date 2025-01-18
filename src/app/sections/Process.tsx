"use client"

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const steps = [
    {
      number: "01", 
      title: "Diagnóstico",
      description: "Evaluación completa de sus necesidades y sistemas actuales."
    },
    {
      number: "02",
      title: "Planificación", 
      description: "Desarrollo de soluciones personalizadas y plan de implementación."
    },
    {
      number: "03",
      title: "Ejecución",
      description: "Implementación profesional con los más altos estándares."
    },
    {
      number: "04",
      title: "Seguimiento",
      description: "Monitoreo continuo y soporte técnico post-implementación."
    }
]

export default function Process() {
  const ref1 = useRef<HTMLDivElement>(null)
  const ref2 = useRef<HTMLDivElement>(null)
  const ref3 = useRef<HTMLDivElement>(null)
  const ref4 = useRef<HTMLDivElement>(null)
  const [activeStep, setActiveStep] = useState<number | null>(null)
  
  const isInView1 = useInView(ref1, { once: true, margin: "-100px" })
  const isInView2 = useInView(ref2, { once: true, margin: "-100px" })
  const isInView3 = useInView(ref3, { once: true, margin: "-100px" })
  const isInView4 = useInView(ref4, { once: true, margin: "-100px" })
  
  const refs = [ref1, ref2, ref3, ref4]
  const inViewStates = [isInView1, isInView2, isInView3, isInView4]

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 768) return

      refs.forEach((ref, index) => {
        if (!ref.current) return
        
        const rect = ref.current.getBoundingClientRect()
        const windowHeight = window.innerHeight

        if (rect.top < windowHeight * 0.7 && rect.bottom > windowHeight * 0.3) {
          setActiveStep(index)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="process" className="py-12 sm:py-24 bg-dark-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Nuestro Proceso de
            <span className="bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent"> Trabajo</span>
          </h2>
          <p className="text-light/70 text-lg">
            Un enfoque sistemático y profesional para garantizar resultados excepcionales en cada proyecto.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const ref = refs[index]
            const isInView = inViewStates[index]
            const isActive = activeStep === index

            return (
              <motion.div 
                key={index}
                ref={ref}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.2
                }}
                className={`relative group ${isActive ? 'bg-accent/10 md:bg-transparent' : ''} md:p-0 p-4 rounded-xl`}
              >
                <div className="absolute -inset-4 rounded-xl bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity blur-xl hidden md:block" />
                <div className="relative">
                  <motion.div 
                    initial={{ scale: 0.5 }}
                    animate={isInView ? { scale: 1 } : { scale: 0.5 }}
                    transition={{ 
                      duration: 0.5,
                      delay: index * 0.2 + 0.3
                    }}
                    className={`font-display text-6xl font-bold mb-4 ${isActive ? 'text-accent md:text-accent/20' : 'text-accent/20'}`}
                  >
                    {step.number}
                  </motion.div>
                  <h3 className="font-display text-2xl font-bold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-light/70">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}