import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, X } from "lucide-react";

function PricingModal({ service, onClose }) {
  useEffect(() => {
    if (!service) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [service, onClose]);

  return (
    <AnimatePresence>
      {service && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center px-4 py-5 z-100 sm:px-6 sm:py-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/75 backdrop-blur-md"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="pricing-title"
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 20,
              scale: 0.96,
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            className="relative z-10 flex max-h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[#0d0b18]/95 shadow-2xl shadow-purple-950/30 backdrop-blur-2xl sm:rounded-4xl"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-5 px-5 py-5 border-b shrink-0 border-white/10 sm:px-8 sm:py-7">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-purple-300">
                  Pricing
                </p>

                <h3
                  id="pricing-title"
                  className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
                >
                  {service.title}
                </h3>

                <p className="mt-2 max-w-xl text-sm leading-6 text-(--text-muted)">
                  Choose the package that best fits your needs.
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close pricing"
                className="flex items-center justify-center w-10 h-10 transition-all duration-300 border rounded-full shrink-0 border-white/10 bg-white/5 text-white/60 hover:border-white/20 hover:bg-white/10 hover:text-white"
              >
                <X size={19} />
              </button>
            </div>

            {/* Content */}
            <div className="px-5 py-6 overflow-y-auto sm:px-8 sm:py-8">
              <div className="grid gap-5 lg:grid-cols-3">
                {service.packages.map((pkg, index) => (
                  <motion.div
                    key={pkg.name}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.3,
                    }}
                    className={`relative flex flex-col rounded-3xl border p-6 transition-all duration-300 ${
                      pkg.featured
                        ? "border-purple-400/40 bg-purple-500/8 shadow-lg shadow-purple-950/20"
                        : "border-white/10 bg-white/2.5 hover:border-white/20 hover:bg-white/4"
                    }`}
                  >
                    {pkg.featured && (
                      <span className="absolute -top-3 left-6 rounded-full border border-purple-400/30 bg-[#8b5cf6] px-3 py-1 text-[11px] font-semibold text-white shadow-lg shadow-purple-900/30">
                        Most Popular
                      </span>
                    )}

                    {/* Package */}
                    <div>
                      <p className="text-sm font-medium text-purple-300">
                        {pkg.name}
                      </p>

                      <div className="flex items-baseline gap-1 mt-4">
                        <span className="text-4xl font-bold tracking-tight text-white">
                          ${pkg.price}
                        </span>

                        <span className="text-sm text-white/35">
                          starting
                        </span>
                      </div>

                      <p className="mt-3 min-h-12 text-sm leading-6 text-(--text-muted)">
                        {pkg.description}
                      </p>
                    </div>

                    {/* Divider */}
                    <div className="h-px my-6 bg-white/10" />

                    {/* Features */}
                    <ul className="flex-1 space-y-3.5">
                      {pkg.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-sm leading-5 text-white/70"
                        >
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple-500/10">
                            <Check
                              size={13}
                              className="text-purple-300"
                              strokeWidth={2.5}
                            />
                          </span>

                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <a
                      href="#contact"
                      onClick={onClose}
                      className={`mt-7 flex w-full items-center justify-center rounded-2xl px-5 py-3.5 text-sm font-semibold transition-all duration-300 ${
                        pkg.featured
                          ? "bg-purple-500 text-white shadow-lg shadow-purple-900/20 hover:bg-purple-400"
                          : "border border-white/10 bg-white/5 text-white hover:border-purple-400/30 hover:bg-purple-500/10"
                      }`}
                    >
                      Get Started
                    </a>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Note */}
              <p className="mt-6 text-xs leading-5 text-center text-white/30">
                Need something different? Get in touch and we can discuss a
                custom solution.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default PricingModal;