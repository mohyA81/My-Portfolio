import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import SectionTitle from "../ui/SectionTitle";
import Container from "../ui/Container";
import ScrollReveal from "../common/ScrollReveal";

const projects = [
  {
    title: "Personal Portfolio",
    category: "Web Development",
    description:
      "A modern responsive portfolio website designed to showcase projects, skills, and services with a clean and engaging user experience.",
    image: "/images/projects/portfolio.PNG",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Heart Disease Prediction",
    category: "Machine Learning",
    description:
      "A machine learning project that analyzes medical data and predicts the likelihood of heart disease using classification models.",
    image: "/images/projects/portfolio2.PNG",
    technologies: ["Python", "Pandas", "Scikit-learn"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Instagram Landing Page",
    category: "Web Design",
    description:
      "A modern landing page concept designed for businesses and personal brands looking to promote their services online.",
    image: "/images/projects/portfolio3.PNG",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <Container>
        <ScrollReveal>
          <SectionTitle
            title="Selected Projects"
            subtitle="A selection of projects I've built across web development, machine learning, and digital experiences."
          />

          <div className="grid gap-8 mt-14 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
                className="overflow-hidden transition-colors duration-300 border group rounded-4xl border-white/10 bg-white/3 backdrop-blur-sm hover:border-purple-400/30"
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

                  {/* Category */}
                  <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-xs font-medium text-white/80 backdrop-blur-md">
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-bold tracking-tight text-white">
                      {project.title}
                    </h3>

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${project.title}`}
                      className="flex items-center justify-center w-10 h-10 transition-all duration-300 border rounded-full shrink-0 border-white/10 bg-white/5 text-white/70 hover:border-purple-400/40 hover:bg-purple-500/10 hover:text-white"
                    >
                      <ArrowUpRight size={18} />
                    </a>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-(--text-muted)">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/60"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* GitHub */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-purple-300 transition-colors duration-300 hover:text-purple-200"
                  >
                    View source
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

export default Projects;