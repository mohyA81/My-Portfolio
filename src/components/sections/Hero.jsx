import Button from '../ui/Button'
import Container from '../ui/Container'

function Hero() {
  return (
    <section
      id="home"
      className="flex items-center justify-center min-h-screen px-6 pt-20"
    >
      <Container>
      <div className="max-w-5xl text-center">
        <p className="text-purple-300 uppercase tracking-[0.3em] mb-6">
          Welcome
        </p>

        <h1 className="text-6xl md:text-8xl font-bold leading-[0.95] mb-8">
          Mohadese
          <br />
          <span className="text-purple-300">(Tiara)</span>
        </h1>

        <p className="max-w-3xl mx-auto mb-12 text-xl leading-9 text-gray-300 md:text-2xl">
          Software engineer passionate about building modern web applications,
          intelligent systems, and beautiful user experiences.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="#projects">View Projects</Button>
          <Button href="#contact" variant="secondary">
            Contact Me
          </Button>
        </div>
      </div>
      </Container>
    </section>
  )
}

export default Hero