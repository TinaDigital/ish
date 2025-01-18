"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { NumberTicker } from '@/app/components/ui/NumberTicker'
import { RetroGrid } from '@/app/components/ui/RetroGrid'
import { motion } from 'framer-motion'
import { InteractiveHoverButton } from '@/app/components/ui/Button'

export default function Hero() {
  const [isClient, setIsClient] = useState(false);
  const whatsappMessage = "Hola, me gustaría conocer más sobre sus servicios.";
  const whatsappNumber = "5491150979192";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-dark">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <RetroGrid className="absolute inset-0" opacity={0.3} />
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-accent/5 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-accent-secondary/5 rounded-full blur-[128px]" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {isClient ? (
          <motion.div 
            className="max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="font-display text-4xl sm:text-6xl md:text-8xl font-bold mb-4 sm:mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Innovación en
              <motion.span 
                className="block sm:inline bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              > Gases Medicinales</motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-light/70 mb-8 sm:mb-12 max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Transformamos la infraestructura médica con soluciones de vanguardia en sistemas de gases medicinales.
            </motion.p>

            <motion.div 
              className="flex flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link
                href="#services"
                className="group flex-1 sm:flex-none sm:w-auto text-center px-4 sm:px-6 py-2.5 sm:py-3 bg-accent text-dark text-sm sm:text-base font-medium rounded-full flex items-center justify-center gap-2 hover:bg-accent/90 transition-colors"
              >
                Explorar
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <InteractiveHoverButton
                onClick={() => window.open(whatsappUrl, '_blank')}
                className="flex-1 sm:flex-none sm:w-auto"
              >
                Contactar
              </InteractiveHoverButton>
            </motion.div>
          </motion.div>
        ) : (
          <div className="max-w-4xl">
            <h1 className="font-display text-4xl sm:text-6xl md:text-8xl font-bold mb-4 sm:mb-8">
              Innovación en
              <span className="block sm:inline bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
                Gases Medicinales
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-light/70 mb-8 sm:mb-12 max-w-2xl">
              Transformamos la infraestructura médica con soluciones de vanguardia en sistemas de gases medicinales.
            </p>

            <div className="flex flex-row gap-4">
              <Link
                href="#services"
                className="group flex-1 sm:flex-none sm:w-auto text-center px-4 sm:px-6 py-2.5 sm:py-3 bg-accent text-dark text-sm sm:text-base font-medium rounded-full flex items-center justify-center gap-2 hover:bg-accent/90 transition-colors"
              >
                Explorar
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <InteractiveHoverButton
                onClick={() => window.open(whatsappUrl, '_blank')}
                className="flex-1 sm:flex-none sm:w-auto"
              >
                Contactar
              </InteractiveHoverButton>
            </div>
          </div>
        )}

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mt-16 sm:mt-24 border-t border-light/5 pt-8 sm:pt-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="text-center sm:text-left">
            <div className="font-display text-3xl sm:text-4xl font-bold text-accent">
              <NumberTicker value={10} />+
            </div>
            <div className="text-light/70">
              <p>Años de experiencia</p>
              <p>en el rubro</p>
            </div>
          </div>
          <div className="text-center sm:text-left">
            <div className="font-display text-3xl sm:text-4xl font-bold text-accent">
              <NumberTicker value={100} />+
            </div>
            <div className="text-light/70">Proyectos completados</div>
          </div>
          <div className="text-center sm:text-left">
            <div className="font-display text-3xl sm:text-4xl font-bold text-accent">
              <NumberTicker value={50} />+
            </div>
            <div className="text-light/70">Clientes satisfechos</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}