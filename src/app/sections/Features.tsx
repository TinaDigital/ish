"use client"

import { Shield, Zap, Clock, Users } from 'lucide-react'
import Image from 'next/image'
import soldador from "../../../public/soldando_perfil3.jpg"
import { AnimatePresence, motion, useMotionValue, useTransform, useInView } from 'framer-motion'
import { useState, useEffect, ReactNode, useRef } from 'react'

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
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

interface FeatureCardProps {
  feature: Feature;
  index: number;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  frontCard?: boolean;
  isMobile: boolean;
}

function FeatureCard({ feature, index, activeIndex, setActiveIndex, frontCard = false, isMobile }: FeatureCardProps) {
  const [exitX, setExitX] = useState(0)
  const x = useMotionValue(0)
  const scale = useTransform(x, [-150, 0, 150], [0.9, 1, 0.9])
  const rotate = useTransform(x, [-150, 0, 150], [-10, 0, 10], {
    clamp: true
  })

  useEffect(() => {
    if (!frontCard) {
      x.set(0)
    }
  }, [frontCard, x])

  const variantsFrontCard = {
    initial: { 
      x: index % 2 === 0 ? -1000 : 1000,
      opacity: 0,
      rotate: index % 2 === 0 ? -45 : 45
    },
    animate: { 
      x: 0,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
        delay: index * 0.2
      }
    },
    exit: (custom: number) => ({
      x: custom,
      opacity: 0,
      scale: 0.9,
      rotate: custom > 0 ? 45 : -45,
      transition: { duration: 0.5, ease: "easeInOut" }
    })
  }

  const variantsBackCard = {
    initial: { 
      x: index % 2 === 0 ? -1000 : 1000,
      opacity: 0,
      rotate: index % 2 === 0 ? -45 : 45
    },
    animate: (custom: number) => ({
      x: 0,
      scale: 1 - custom * (isMobile ? 0.008 : 0.02),
      y: custom * (isMobile ? 4 : 12),
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
        delay: index * 0.2
      }
    })
  }

  function handleDragEnd(_: MouseEvent | TouchEvent | PointerEvent, info: { offset: { x: number } }) {
    const threshold = isMobile ? 30 : 100
    if (Math.abs(info.offset.x) > threshold) {
      setExitX(Math.sign(info.offset.x) * 150)
      setActiveIndex((activeIndex + 1) % features.length)
    }
  }

  const relativeIndex = (index - activeIndex + features.length) % features.length
  const zIndex = frontCard ? 10 : Math.max(10 - relativeIndex, 0)

  return (
    <motion.div
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        x,
        rotate: frontCard ? rotate : 0,
        cursor: frontCard ? "grab" : "auto",
        zIndex,
        willChange: "transform",
        perspective: 1000
      }}
      whileTap={{ cursor: "grabbing" }}
      drag={frontCard ? "x" : false}
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.08}
      onDragEnd={handleDragEnd}
      variants={frontCard ? variantsFrontCard : variantsBackCard}
      initial="initial"
      animate="animate"
      exit="exit"
      custom={frontCard ? exitX : relativeIndex}
    >
      <motion.div style={{ scale }} className="relative">
        <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-accent to-accent-secondary opacity-25 blur-md" />
        <div className="relative p-6 sm:p-8 bg-dark rounded-lg border border-light/10 backdrop-blur-sm">
          <div className="p-3 bg-accent/15 rounded-lg inline-block mb-4 shadow-lg">
            {feature.icon}
          </div>
          <h3 className="font-display text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
            {feature.title}
          </h3>
          <p className="text-light/70 text-base sm:text-lg">
            {feature.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Features() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % features.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section ref={ref} id="features" className="pt-12 sm:py-24 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-accent/2" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Por qué elegir
              <span className="bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent"> ISH</span>
            </h2>
            <p className="text-light/70 text-lg mb-8">
              Nos destacamos por nuestra experiencia, profesionalismo y compromiso con la excelencia en cada proyecto.
            </p>
            <div className="relative h-[350px] sm:h-[400px] md:h-[450px] perspective-1000">
              <AnimatePresence initial={false} mode="popLayout">
                {features.map((feature, index) => (
                  <FeatureCard
                    key={index}
                    feature={feature}
                    index={index}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                    frontCard={index === activeIndex}
                    isMobile={isMobile}
                  />
                ))}
              </AnimatePresence>
              {isMobile && (
                <div className="absolute top-[17rem] left-1/2 transform -translate-x-1/2 flex gap-2">
                  {features.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                        index === activeIndex ? 'bg-white' : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </motion.div>
          <motion.div 
            className="relative h-full"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent to-accent-secondary opacity-20 rounded-full blur-3xl" />
            <div className="relative h-full rounded-3xl overflow-hidden">
              <Image
                src={soldador}
                alt="Soldador trabajando"
                className="object-cover h-full w-full"
                fill
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
