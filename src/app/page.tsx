"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import Services from './sections/Services'
import Features from './sections/Features'
import Clients from './sections/Clients'
import Process from './sections/Process'
import CTA from './sections/CTA'
import Footer from './sections/Footer'

interface SectionWrapperProps {
  children: ReactNode;
  delay?: number;
}

const SectionWrapper = ({ children, delay = 0 }: SectionWrapperProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <SectionWrapper>
        <Hero />
      </SectionWrapper>
      
      <SectionWrapper delay={0.2}>
        <Services />
      </SectionWrapper>

      <SectionWrapper delay={0.5}>
        <Features />
      </SectionWrapper>

      <SectionWrapper delay={0.4}>
        <Process />
      </SectionWrapper>
      
      <SectionWrapper delay={0.5}>
        <Clients />
      </SectionWrapper>
      
      <SectionWrapper delay={0.6}>
        <CTA />
      </SectionWrapper>
      
      <Footer />
    </main>
  )
}
