const clients = [
  "Hospital Alemán",
  "IADT",
  "Medicus SA",
  "Sanatorio San José",
  "Hospital Sardá",
  "MIG SA",
  "GH Working Team",
  "VEOLIA"
]

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
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 py-4 px-8 bg-dark-secondary rounded-lg min-w-[200px] flex items-center justify-center"
              >
                <span className="font-medium text-light/90">{client}</span>
              </div>
            ))}
          </div>
          <div className="flex gap-8 animate-infinite-scroll" aria-hidden="true">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 py-4 px-8 bg-dark-secondary rounded-lg min-w-[200px] flex items-center justify-center"
              >
                <span className="font-medium text-light/90">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

