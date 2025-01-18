"use client"

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import hospitalAleman from "../../../public/logos/Hospital-Aleman.png";
import iadt from "../../../public/logos/IADT 01.png";
import medicus from "../../../public/logos/MEDICUS.png";
import mig from "../../../public/logos/MIG S.A.png";
import veolia from "../../../public/logos/VEOLIA.png";

const clientLogos = [
  { name: "Hospital Alemán", logo: hospitalAleman },
  { name: "IADT", logo: iadt },
  { name: "Medicus SA", logo: medicus },
  { name: "MIG SA", logo: mig },
  { name: "VEOLIA", logo: veolia }
];

export default function Clients() {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (containerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - (containerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const handleMouseUp = () => stopDragging();
    const handleTouchEnd = () => stopDragging();

    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (containerRef.current) {
        containerRef.current.scrollLeft = 0;
      }
    }, 20000); // Reinicia el scroll cada 20 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="clients" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl text-center mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Confían en
            <span className="bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent"> nosotros</span>
          </h2>
          <p className="text-light/70 text-lg">
            Trabajamos con las instituciones médicas más prestigiosas del país.
          </p>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-dark to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-dark to-transparent z-10" />
        
        <motion.div 
          ref={containerRef}
          className="flex overflow-x-auto scrollbar-hide"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={stopDragging}
          onMouseLeave={stopDragging}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={stopDragging}
        >
          <div className="flex gap-8 animate-infinite-scroll">
            {[...clientLogos, ...clientLogos].map((client, index) => (
              <motion.div
                key={`logo-${index}`}
                className="flex-shrink-0 py-4 px-8 rounded-lg min-w-[200px] h-[100px] flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src={client.logo}
                  alt={`Logo de ${client.name}`}
                  className="w-auto h-full object-contain"
                  loading="lazy"
                  sizes="200px"
                  priority={false}
                />
              </motion.div>
            ))}
          </div>
          <div className="flex gap-8 animate-infinite-scroll-delayed" aria-hidden="true">
            {[...clientLogos, ...clientLogos].map((client, index) => (
              <motion.div
                key={`logo-clone-${index}`}
                className="flex-shrink-0 py-4 px-8 rounded-lg min-w-[200px] h-[100px] flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src={client.logo}
                  alt={`Logo de ${client.name}`}
                  className="w-auto h-full object-contain"
                  loading="lazy"
                  sizes="200px"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
