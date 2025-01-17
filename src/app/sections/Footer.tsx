import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dark pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <Link href="/" className="font-display text-2xl font-bold">
              ISH<span className="text-accent">.</span>
            </Link>
            <p className="text-light/70">
              Soluciones avanzadas en sistemas de gases medicinales.
            </p>
          </div>
          <div>
            <h4 className="font-display text-lg font-bold mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-light/70 hover:text-light transition-colors">
                  Mantenimiento
                </Link>
              </li>
              <li>
                <Link href="#" className="text-light/70 hover:text-light transition-colors">
                  Instalación
                </Link>
              </li>
              <li>
                <Link href="#" className="text-light/70 hover:text-light transition-colors">
                  Reparación
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-lg font-bold mb-4">Empresa</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-light/70 hover:text-light transition-colors">
                  Sobre nosotros
                </Link>
              </li>
              <li>
                <Link href="#" className="text-light/70 hover:text-light transition-colors">
                  Clientes
                </Link>
              </li>
              <li>
                <Link href="#" className="text-light/70 hover:text-light transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-lg font-bold mb-4">Contacto</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-light/70">
                <Mail className="w-4 h-4" />
                info@ish.com
              </li>
              <li className="flex items-center gap-2 text-light/70">
                <Phone className="w-4 h-4" />
                +123 456 789
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-light/70 hover:text-light transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-light/70 hover:text-light transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-light/70 hover:text-light transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-light/10 pt-8 text-center text-light/40">
          <p>&copy; 2023 ISH. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

