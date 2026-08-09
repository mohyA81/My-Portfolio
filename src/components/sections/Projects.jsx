import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "../project/ProjectCard";
import Container from "../ui/Container";
import { projects } from "../../data/projects";
import ScrollReveal from "../common/ScrollReveal";

function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <Container>
        <ScrollReveal>
          <SectionTitle title="Featured Projects" subtitle="What I've built" />
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

export default Projects;
