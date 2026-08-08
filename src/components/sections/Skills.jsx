import SectionTitle from '../ui/SectionTitle'
import { skills } from '../../data/skills'
import Container from '../ui/Container'

function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-[#07010d]">
      <Container>
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Tech Stack" subtitle="Technologies I use" />

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="px-6 py-3 text-purple-200 transition-colors duration-300 border rounded-2xl bg-purple-500/10 border-purple-800/30 hover:bg-purple-500/20"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
      </Container>
    </section>
  )
}

export default Skills