import { motion, AnimatePresence } from 'framer-motion'
import { pricing } from '../../data/pricing'

function PricingModal({ service, onClose }) {
  if (!service) return null

  const plans = pricing[service]

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/70 backdrop-blur-md"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-5xl p-8 border shadow-2xl rounded-32px border-white/10 bg-white/10 backdrop-blur-2xl shadow-purple-900/30 md:p-10"
        >
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="text-purple-300 uppercase tracking-[0.2em] text-sm mb-2">
                Pricing
              </p>
              <h2 className="text-3xl font-bold md:text-4xl">
                {service === 'portfolio'
                  ? 'Portfolio Website Packages'
                  : 'Instagram Landing Page Packages'}
              </h2>
            </div>

            <button
              onClick={onClose}
              className="transition-colors rounded-full w-11 h-11 bg-white/10 hover:bg-white/20"
            >
              ✕
            </button>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className={`rounded-3xl border p-6 ${
                  plan.featured
                    ? 'border-purple-400 bg-purple-500/10'
                    : 'border-white/10 bg-white/5'
                }`}
              >
                {plan.featured && (
                  <span className="inline-block px-3 py-1 mb-4 text-xs font-medium text-white bg-purple-500 rounded-full">
                    Most Popular
                  </span>
                )}

                <h3 className="mb-3 text-2xl font-semibold">
                  {plan.name}
                </h3>

                <p className="mb-6 text-4xl font-bold text-purple-300">
                  {plan.price}
                </p>

                <ul className="mb-8 space-y-3 text-gray-200">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="mt-1 text-purple-300">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full py-3 transition-colors bg-purple-500 rounded-2xl hover:bg-purple-400">
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>

          <p className="mt-8 text-sm text-center text-gray-400">
            Need something custom? Contact me for a tailored quote.
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default PricingModal