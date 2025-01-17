import Image from "next/image";
import hospitalAleman from "../../../public/logos/Hospital-Aleman.png";
import iadt from "../../../public/logos/IADT 01.png";
import medicus from "../../../public/logos/MEDICUS.png";
import sanatorioSanJose from "../../../public/logos/san_jose.png";
import hospitalSarda from "../../../public/logos/RAMON SARDA.png";
import mig from "../../../public/logos/MIG S.A.png";
import veolia from "../../../public/logos/VEOLIA.png";

const clientLogos = [
  { name: "Hospital Alemán", logo: hospitalAleman },
  { name: "IADT", logo: iadt },
  { name: "Medicus SA", logo: medicus },
  { name: "Sanatorio San José", logo: sanatorioSanJose },
  { name: "Hospital Sardá", logo: hospitalSarda },
  { name: "MIG SA", logo: mig },
  { name: "VEOLIA", logo: veolia }
];

export default function Clients() {
  return (
    <section id="clients" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl text-center mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Confían en
            <span className="bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent"> Nosotros</span>
          </h2>
          <p className="text-light/70 text-lg">
            Trabajamos con las instituciones médicas más prestigiosas del país.
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-dark to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-dark to-transparent z-10" />
        
        <div className="flex overflow-hidden gap-8 py-4">
          <div className="flex gap-8 animate-infinite-scroll">
            {[...clientLogos, ...clientLogos].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 py-4 px-8 rounded-lg min-w-[200px] h-[100px] flex items-center justify-center"
              >
                <Image
                  src={client.logo}
                  alt={`Logo de ${client.name}`}
                  className="w-auto h-full object-contain"
                />
              </div>
            ))}
          </div>
          <div className="flex gap-8 animate-infinite-scroll" aria-hidden="true">
            {[...clientLogos, ...clientLogos].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 py-4 px-8 rounded-lg min-w-[200px] h-[100px] flex items-center justify-center"
              >
                <Image
                  src={client.logo}
                  alt={`Logo de ${client.name}`}
                  className="w-auto h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
