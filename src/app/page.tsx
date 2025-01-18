import dynamic from 'next/dynamic'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'

// Lazy load components that are not critical for initial render
const Services = dynamic(() => import('./sections/Services'))
const Features = dynamic(() => import('./sections/Features'))
const Clients = dynamic(() => import('./sections/Clients'))
const Process = dynamic(() => import('./sections/Process'))
const CTA = dynamic(() => import('./sections/CTA'))
const Footer = dynamic(() => import('./sections/Footer'))

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Features />
      <Process />
      <Clients />
      <CTA />
      <Footer />
    </main>
  )
}
