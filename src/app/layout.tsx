import './globals.css'
import { Inter, Outfit } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
})

export const metadata = {
  title: 'ISH - Instalaciones y Servicios Hospitalarios',
  description: 'Innovación y excelencia en instalaciones y servicios hospitalarios. Especialistas en gases medicinales, mantenimiento hospitalario y soluciones técnicas avanzadas.',
  keywords: 'gases medicinales, mantenimiento hospitalario, instalaciones hospitalarias, servicios hospitalarios, soluciones técnicas, innovación hospitalaria'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${outfit.variable}`}>
      <body className={`bg-dark text-light font-sans ${inter.className}`}>{children}</body>
    </html>
  )
}
