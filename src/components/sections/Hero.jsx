import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/mohyA81",
  },
  {
    label: "LinkedIn",
    href: " https://www.linkedin.com/in/mohadese-khanloo/",
  },
  {
    label: "Email",
    href: "mailto:mohy.atlookhanloo@gmail.com",
  },
];

function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");

    if (!aboutSection) return;

    const navbarOffset = 90;
    const sectionPosition =
      aboutSection.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: sectionPosition - navbarOffset,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="relative flex items-center min-h-screen px-6 pt-24 overflow-hidden"
    >
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/4 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-500/20 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/3 -z-10 h-96 w-96 rounded-full bg-purple-500/10 blur-[140px]"
      />

      <div className="w-full mx-auto max-w-7xl">
        <div className="max-w-4xl">
          {/* Small Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
            >
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm border rounded-full border-violet-400/20 bg-violet-500/10 text-violet-200 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-violet-400" />
              Frontend Developer
            <span className="w-1 h-1 rounded-full bg-violet-400/50" />
              Software Engineer
            </span>
            </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-balance text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-8xl"
          >
            Building
            <span className="block text-transparent bg-linear-to-r from-violet-300 via-purple-400 to-fuchsia-400 bg-clip-text">
              modern web
            </span>
            experiences.
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 max-w-2xl text-base leading-7 text-(--text-muted) sm:text-lg"
          >
            I’m Tiara, a Software Engineering graduate focused on building clean, responsive, and user-friendly web experiences with React, JavaScript, and Tailwind CSS. 
            I also have experience with C#, .NET, SQL, Python, and Machine Learning.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col gap-4 mt-10 sm:flex-row"
          >
            <button
              onClick={() => {
                const contactSection = document.getElementById("contact");

                if (!contactSection) return;

                const navbarOffset = 90;
                const sectionPosition =
                  contactSection.getBoundingClientRect().top + window.scrollY;

                window.scrollTo({
                  top: sectionPosition - navbarOffset,
                  behavior: "smooth",
                });
              }}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-violet-500 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-violet-400 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]"
            >
              Let’s Work Together
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>

            <button
              onClick={scrollToAbout}
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-medium text-white/80 backdrop-blur-sm transition-all duration-300 hover:border-violet-400/30 hover:bg-white/10 hover:text-white"
            >
              More About Me
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center gap-3 mt-12"
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.label === "Email" ? undefined : "_blank"}
                rel={social.label === "Email" ? undefined : "noreferrer"}
                className="px-4 py-2 text-xs font-medium transition-all duration-300 border rounded-full border-white/10 bg-white/5 text-white/60 backdrop-blur-sm hover:border-violet-400/30 hover:bg-violet-500/10 hover:text-white"
              >
                {social.label}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={scrollToAbout}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute flex-col items-center hidden gap-3 transition-colors -translate-x-1/2 bottom-8 left-1/2 text-white/40 hover:text-white/70 sm:flex"
          aria-label="Scroll to About section"
        >
          <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>

          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowDown size={18} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}

export default Hero;
