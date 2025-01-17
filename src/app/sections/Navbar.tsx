'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navItems = [
  { name: 'Servicios', href: '#services' },
  { name: 'Características', href: '#features' },
  { name: 'Proceso', href: '#process' },
  { name: 'Clientes', href: '#clients' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-dark backdrop-blur-md border-b border-light/5' : ''
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="font-display text-2xl font-bold">
            ISH<span className="text-accent">.</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-light/60 hover:text-light transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="#contact"
              className="px-4 py-2 rounded-full bg-accent text-dark font-medium text-sm hover:bg-accent/90 transition-colors"
            >
              Contactar
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-light/60 hover:text-light"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-dark-secondary backdrop-blur-lg border-b border-light/5">
          <div className="px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-sm font-medium text-light/60 hover:text-light"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="#contact"
              className="block px-4 py-2 rounded-full bg-accent text-dark font-medium text-sm hover:bg-accent/90 transition-colors text-center"
              onClick={() => setIsOpen(false)}
            >
              Contactar
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

