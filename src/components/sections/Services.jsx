import { useEffect, useState } from "react";
import { ArrowRight, Code2, Globe } from "lucide-react";
import { motion } from "framer-motion";

import SectionTitle from "../ui/SectionTitle";
import Container from "../ui/Container";
import ScrollReveal from "../common/ScrollReveal";
import PricingModal from "../pricing/PricingModal";

const services = [
  {
    id: "portfolio",
    number: "01",
    icon: Code2,
    title: "Portfolio Website",
    description:
      "A modern and responsive portfolio website designed to showcase your work, skills, experience, and personal brand.",
    features: [
      "Responsive design",
      "Projects showcase",
      "Contact form",
      "Modern animations",
    ],
    packages: [
      {
        name: "Starter",
        price: 200,
        description: "A simple and professional online presence.",
        features: [
          "1-page responsive website",
          "Modern custom design",
          "About & contact sections",
          "Mobile responsive",
          "Basic animations",
        ],
      },
      {
        name: "Professional",
        price: 350,
        featured: true,
        description: "A complete portfolio for professionals and freelancers.",
        features: [
          "Everything in Starter",
          "Projects showcase",
          "Services section",
          "Contact form",
          "Advanced animations",
          "Social media integration",
        ],
      },
      {
        name: "Premium",
        price: 500,
        description: "A polished portfolio with a more advanced experience.",
        features: [
          "Everything in Professional",
          "Advanced interactions",
          "Custom sections",
          "Project details / modal",
          "Performance optimization",
          "Post-launch adjustments",
        ],
      },
    ],
  },

  {
    id: "landing",
    number: "02",
    icon: Globe,
    title: "Instagram Landing Page",
    description:
      "A focused landing page designed to turn Instagram visitors into customers, clients, or leads.",
    features: [
      "Conversion-focused design",
      "Mobile-first layout",
      "Strong call-to-actions",
      "Social media integration",
    ],
    packages: [
      {
        name: "Starter",
        price: 100,
        description: "A clean landing page for a simple offer.",
        features: [
          "1-page landing page",
          "Responsive design",
          "Call-to-action section",
          "Contact / social links",
          "Basic animations",
        ],
      },
      {
        name: "Professional",
        price: 150,
        featured: true,
        description: "A conversion-focused landing page for your brand.",
        features: [
          "Everything in Starter",
          "Custom sections",
          "Multiple call-to-actions",
          "Social media integration",
          "Advanced animations",
          "Mobile optimization",
        ],
      },
      {
        name: "Premium",
        price: 220,
        description:
          "A highly polished landing page for a stronger online presence.",
        features: [
          "Everything in Professional",
          "Custom visual design",
          "Advanced interactions",
          "Lead / contact form",
          "Performance optimization",
          "Post-launch adjustments",
        ],
      },
    ],
  },
];

function Services() {
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedService ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedService]);

  return (
    <>
      <section id="services" className="px-6 py-24 sm:py-28 lg:py-32">
        <Container>
          <ScrollReveal>
            <SectionTitle
              title="My Services"
              subtitle="Simple, modern websites designed to help you build a stronger online presence."
            />

            <div className="grid gap-6 mt-14 lg:grid-cols-2">
              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <motion.article
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                    }}
                    className="group relative overflow-hidden rounded-4xl border border-white/10 bg-white/3 p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-purple-400/30 hover:bg-white/4.5 sm:p-8"
                  >
                    {/* Subtle glow */}
                    <div className="absolute w-56 h-56 transition-all duration-700 rounded-full pointer-events-none -right-24 -top-24 bg-purple-500/10 blur-3xl group-hover:bg-purple-500/15" />

                    <div className="relative">
                      {/* Header */}
                      <div className="flex items-start justify-between">
                        <div className="flex items-center justify-center text-purple-300 border h-14 w-14 rounded-2xl border-purple-400/20 bg-purple-500/10">
                          <Icon size={24} strokeWidth={1.8} />
                        </div>

                        <span className="text-sm font-medium tracking-[0.2em] text-white/25">
                          {service.number}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="mt-8 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-4 max-w-xl text-sm leading-7 text-(--text-muted) sm:text-base">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="grid gap-3 mt-8 sm:grid-cols-2">
                        {service.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-3 text-sm text-white/65"
                          >
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-purple-300" />

                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Divider */}
                      <div className="h-px my-8 bg-white/10" />

                      {/* CTA */}
                      <button
                        type="button"
                        onClick={() => setSelectedService(service)}
                        className="flex items-center justify-between w-full px-5 py-4 text-sm font-semibold text-white transition-all duration-300 border rounded-2xl border-white/10 bg-white/5 hover:border-purple-400/30 hover:bg-purple-500/10"
                      >
                        <span>View Pricing</span>

                        <ArrowRight
                          size={18}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </button>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <PricingModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </>
  );
}

export default Services;
