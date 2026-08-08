function ProjectCard({ project }) {
  return (
    <div className="group rounded-3xl overflow-hidden border border-purple-900/20 bg-white/[0.03] backdrop-blur-sm hover:border-purple-500/40 hover:-translate-y-2 transition-all duration-500">
      <div className="flex items-center justify-center h-60 bg-gradient-to-br from-purple-500/20 via-purple-700/10 to-transparent">
        <span className="text-purple-300">Project Image</span>
      </div>

      <div className="p-8">
        <h3 className="mb-3 text-2xl font-semibold">
          {project.title}
        </h3>

        <p className="mb-5 leading-7 text-gray-300">
          {project.description}
        </p>

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
    </div>
  )
}

export default ProjectCard