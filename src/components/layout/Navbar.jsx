import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { slideDown } from "../../lib/animations";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Services", id: "services" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    setIsOpen(false);

    setTimeout(() => {
      const element = document.getElementById(id);
      if (!element) return;

      const offset = 80;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }, 150);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["home", ...navItems.map((item) => item.id)];

      for (const id of sections) {
        const element = document.getElementById(id);
        if (!element) continue;

        const rect = element.getBoundingClientRect();

        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveSection(id);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <motion.nav
      variants={slideDown}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#030007]/80 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl px-6 mx-auto md:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection("home")}
            className="text-2xl font-bold text-white transition-colors hover:text-purple-300"
          >
            Tiara
          </button>

          <div className="items-center hidden gap-8 md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative transition-colors duration-300 ${
                  activeSection === item.id
                    ? "text-purple-300"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.name}

                {activeSection === item.id && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-2 left-0 w-full h-0.5 bg-purple-400 rounded-full"
                  />
                )}
              </button>
            ))}

            <button
              onClick={() => scrollToSection("contact")}
              className="px-5 py-2.5 rounded-2xl bg-purple-500 hover:bg-purple-400 transition-colors duration-300 text-white font-medium"
            >
              Hire Me
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center w-10 h-10 text-white md:hidden"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
                className="w-6 h-0.5 bg-white rounded-full"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="w-6 h-0.5 bg-white rounded-full"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
                className="w-6 h-0.5 bg-white rounded-full"
              />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#05010a]/95 backdrop-blur-xl border-t border-white/10 overflow-hidden"
          >
            <div className="px-6 py-10 space-y-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left text-xl transition-colors ${
                    activeSection === item.id
                      ? "text-purple-300"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.name}
                </button>
              ))}

              <button
                onClick={() => scrollToSection("contact")}
                className="w-full px-5 py-4 mt-8 font-medium text-white bg-purple-500 rounded-2xl"
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
