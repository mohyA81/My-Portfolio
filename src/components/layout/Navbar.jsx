import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Services", id: "services" },
  { label: "Contact", id: "contact" },
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Detect page scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Detect active section
  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        rootMargin: "-30% 0px -60% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Close menu with Escape
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const scrollToSection = (id) => {
    setIsMenuOpen(false);

    const section = document.getElementById(id);

    if (!section) return;

    const navbarOffset = 90;
    const sectionPosition =
      section.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: sectionPosition - navbarOffset,
      behavior: "smooth",
    });
  };

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "border-b border-white/10 bg-black/50 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between h-20 px-6 mx-auto max-w-7xl lg:px-8">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-2 bg-transparent group"
          >
            <span className="text-xl font-bold tracking-tight text-white">
              Tiara<span className="text-violet-400">.</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="items-center hidden gap-8 md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative py-2 text-sm font-medium transition-colors duration-300 bg-transparent group text-white/60 hover:text-white"
              >
                <span
                  className={
                    activeSection === item.id ? "text-white" : "text-white/60"
                  }
                >
                  {item.label}
                </span>

                {activeSection === item.id && (
                  <motion.span
                    layoutId="active-nav"
                    className="absolute left-0 w-full h-px -bottom-1 bg-violet-400"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <button
            onClick={() => scrollToSection("contact")}
            className="hidden items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:border-violet-400/60 hover:bg-violet-500/20 md:flex"
          >
            Hire Me
            <ArrowUpRight size={16} />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            className="flex items-center justify-center w-10 h-10 text-white transition-colors border rounded-full border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 md:hidden"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed z-50 p-6 border shadow-2xl left-4 right-4 top-24 rounded-3xl border-white/10 bg-black/80 backdrop-blur-2xl md:hidden"
            >
              <nav className="flex flex-col">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.05,
                      duration: 0.25,
                    }}
                    onClick={() => scrollToSection(item.id)}
                    className="flex items-center justify-between py-4 text-base font-medium text-left transition-colors bg-transparent border-b border-white/5 last:border-b-0"
                  >
                    <span
                      className={
                        activeSection === item.id
                          ? "text-violet-400"
                          : "text-white/70"
                      }
                    >
                      {item.label}
                    </span>

                    {activeSection === item.id && (
                      <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                    )}
                  </motion.button>
                ))}

                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navItems.length * 0.05 }}
                  onClick={() => scrollToSection("contact")}
                  className="flex items-center justify-center gap-2 px-5 py-3 mt-5 text-sm font-semibold text-white transition-colors rounded-full bg-violet-500 hover:bg-violet-400"
                >
                  Hire Me
                  <ArrowUpRight size={16} />
                </motion.button>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;