import { useState } from 'react'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import { services } from '../../data/services'
import PricingModal from '../pricing/PricingModal'
import ScrollReveal from '../common/ScrollReveal'

function Services() {
  const [activeService, setActiveService] = useState(null)

  return (
    <section id="services" className="py-28">
      <Container>
        <ScrollReveal>
        <SectionTitle
          title="My Services"
          subtitle="What I can build for you"
        />
        </ScrollReveal>

        <ScrollReveal>
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-8 transition-all duration-300 border rounded-3xl border-purple-900/20 bg-white/3 backdrop-blur-sm hover:border-purple-500/40"
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
        </ScrollReveal>
      </Container>
    </section>
  )
}

export default Services