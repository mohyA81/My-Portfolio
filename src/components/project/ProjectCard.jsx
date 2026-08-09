import { motion } from "framer-motion";
import { scaleIn } from "../../lib/animations";

function ProjectCard({ project }) {
  return (
    <motion.div
      variants={scaleIn}
      whileHover={{
        y: -8,
        transition: { duration: 0.25 },
      }}
      className="overflow-hidden transition-all duration-500 border group rounded-3xl border-purple-900/20 bg-white/3 backdrop-blur-sm hover:border-purple-500/40 hover:-translate-y-2"
    >
      <div className="flex items-center justify-center h-60 bg-linear-to-br from-purple-500/20 via-purple-700/10 to-transparent">
        <span className="text-purple-300">Project Image</span>
      </div>

      <div className="p-8">
        <h3 className="mb-3 text-2xl font-semibold">{project.title}</h3>

        <p className="mb-5 leading-7 text-gray-300">{project.description}</p>

        <div className="px-3 py-1.5 rounded-full bg-purple-500/10 text-purple-200 text-sm border border-purple-800/20">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm text-purple-200 border rounded-full bg-purple-500/10 border-purple-800/30"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="text-purple-300 transition-colors hover:text-purple-200"
          >
            GitHub
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="text-purple-300 transition-colors hover:text-purple-200"
          >
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
