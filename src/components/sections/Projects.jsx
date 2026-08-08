import SectionTitle from '../ui/SectionTitle'
import ProjectCard from '../project/ProjectCard'
import Container from '../ui/Container'
import { projects } from '../../data/projects'

function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <Container>
        <SectionTitle
          title="Featured Projects"
          subtitle="What I've built"
        />

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Projects