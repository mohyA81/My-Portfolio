import { useState } from 'react'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import { services } from '../../data/services'
import PricingModal from '../pricing/PricingModal'

function Services() {
  const [activeService, setActiveService] = useState(null)

  return (
    <section id="services" className="py-28">
      <Container>
        <SectionTitle
          title="My Services"
          subtitle="What I can build for you"
        />

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.id}
              className="rounded-3xl border border-purple-900/20 bg-white/[0.03] backdrop-blur-sm p-8 hover:border-purple-500/40 transition-all duration-300"
            >
              <h3 className="mb-4 text-2xl font-bold">
                {service.title}
              </h3>

              <p className="mb-6 leading-7 text-gray-300">
                {service.description}
              </p>

              <ul className="mb-8 space-y-3">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <span className="w-2 h-2 bg-purple-400 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setActiveService(service.id)}
                className="px-6 py-3 transition-colors duration-300 bg-purple-500 rounded-2xl hover:bg-purple-400"
              >
                View Pricing
              </button>
            </div>
          ))}
        </div>

        <PricingModal
          service={activeService}
          onClose={() => setActiveService(null)}
        />
      </Container>
    </section>
  )
}

export default Services