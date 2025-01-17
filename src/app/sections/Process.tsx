const steps = [
    {
      number: "01",
      title: "Diagnóstico",
      description: "Evaluación completa de sus necesidades y sistemas actuales."
    },
    {
      number: "02",
      title: "Planificación",
      description: "Desarrollo de soluciones personalizadas y plan de implementación."
    },
    {
      number: "03",
      title: "Ejecución",
      description: "Implementación profesional con los más altos estándares."
    },
    {
      number: "04",
      title: "Seguimiento",
      description: "Monitoreo continuo y soporte técnico post-implementación."
    }
  ]
  
  export default function Process() {
    return (
      <section id="process" className="py-24 bg-dark-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Nuestro Proceso de
              <span className="bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent"> Trabajo</span>
            </h2>
            <p className="text-light/70 text-lg">
              Un enfoque sistemático y profesional para garantizar resultados excepcionales en cada proyecto.
            </p>
          </div>
  
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-4 rounded-xl bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                <div className="relative">
                  <div className="font-display text-6xl font-bold text-accent/20 mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-light/70">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  