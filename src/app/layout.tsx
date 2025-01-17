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
  title: 'ISH - Soluciones Avanzadas en Gases Medicinales',
  description: 'Innovación y excelencia en sistemas de gases medicinales.',
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

