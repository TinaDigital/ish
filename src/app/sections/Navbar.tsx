'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import logo from "../../../public/ISH.png"

const navItems = [
  { name: 'Servicios', href: '#services' },
  { name: 'Características', href: '#features' },
  { name: 'Proceso', href: '#process' },
  { name: 'Clientes', href: '#clients' },
]

const mobileNavVariants = {
  hidden: {
    opacity: 0,
    y: -20,
    scale: 0.95,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
}

const underlineVariants = {
  hidden: { width: 0, left: "50%" },
  show: { 
    width: "100%",
    left: "0%",
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
}

const menuItemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4
    }
  })
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      setScrolled(currentScrollY > 20)
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true)
      } else {
        setHidden(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <>
      <div className="h-20" />
      <motion.nav 
        initial={false}
        animate={{
          y: hidden ? -100 : 0,
          backgroundColor: scrolled ? 'rgba(17, 17, 17, 0.8)' : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/" className="font-display text-2xl font-bold">
                <Image src={logo} alt="ISH Logo" width={50} height={50} />
              </Link>
            </motion.div>

            <div className="hidden lg:flex items-center space-x-10">
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  className="relative"
                  whileHover="show"
                  initial="hidden"
                >
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-light/60 hover:text-light transition-colors"
                  >
                    {item.name}
                  </Link>
                  <motion.div
                    variants={underlineVariants}
                    className="absolute bottom-0 h-[2px] bg-gradient-to-r from-accent to-accent-secondary"
                  />
                </motion.div>
              ))}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="#contact"
                  className="px-6 py-2.5 rounded-full bg-gradient-to-r from-accent to-accent-secondary text-dark font-medium text-sm hover:opacity-90 transition-opacity shadow-lg shadow-accent/20"
                >
                  Contactar
                </Link>
              </motion.div>
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-light/60 hover:text-light"
            >
              {isOpen ? <X /> : <Menu />}
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div 
              variants={mobileNavVariants}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="lg:hidden fixed inset-x-0 top-20 h-[calc(100vh-5rem)] bg-dark bg-opacity-95 backdrop-blur-md z-40"
            >
              <div className="flex flex-col items-start justify-start h-full space-y-8 px-4 pt-8">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.name}
                    custom={i}
                    variants={menuItemVariants}
                    initial="hidden"
                    animate="show"
                    className="w-full text-left"
                  >
                    <Link
                      href={item.href}
                      className="text-xl font-medium text-light hover:text-accent transition-colors block py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  custom={navItems.length}
                  variants={menuItemVariants}
                  initial="hidden"
                  animate="show"
                  className="mt-8"
                >
                  <Link
                    href="#contact"
                    className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-accent to-accent-secondary text-dark font-medium text-lg hover:opacity-90 transition-opacity shadow-lg shadow-accent/20"
                    onClick={() => setIsOpen(false)}
                  >
                    Contactar
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}
