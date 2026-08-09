import { motion } from 'framer-motion'
import Button from '../ui/Button'
import Container from '../ui/Container'
import { fadeUp, staggerContainer } from '../../lib/animations'

function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen pt-20 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-150 h-150 bg-purple-500/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-400/10 rounded-full blur-[80px]" />
      </div>

      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto text-center"
        >
          <motion.p
            variants={fadeUp}
            className="text-purple-300 uppercase tracking-[0.35em] text-sm font-medium mb-6"
          >
            Software Engineer • React Developer
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-6xl md:text-8xl font-bold leading-[0.95] mb-8"
          >
            Mohadese
            <br />
            <span className="text-purple-300">(Tiara)</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="max-w-3xl mx-auto mb-12 text-xl leading-9 text-gray-300 md:text-2xl"
          >
            I build elegant web experiences with React and modern frontend
            technologies, while exploring AI, machine learning, and digital
            products that solve real-world problems.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row mb-14"
          >
            <Button href="#projects">View Projects</Button>
            <Button href="#contact" variant="secondary">
              Let's Work Together
            </Button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex items-center justify-center gap-8 text-sm text-gray-400"
          >
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="transition-colors duration-300 hover:text-purple-300"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noreferrer"
              className="transition-colors duration-300 hover:text-purple-300"
            >
              LinkedIn
            </a>

            <a
              href="mailto:your-email@example.com"
              className="transition-colors duration-300 hover:text-purple-300"
            >
              Email
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}

export default Hero