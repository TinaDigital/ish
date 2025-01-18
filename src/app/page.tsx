
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import Services from './sections/Services'
import Features from './sections/Features'
import Clients from './sections/Clients'
import Process from './sections/Process'
import CTA from './sections/CTA'
import Footer from './sections/Footer'

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
