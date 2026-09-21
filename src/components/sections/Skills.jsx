import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Brain,
  Wrench,
} from "lucide-react";

import SectionTitle from "../ui/SectionTitle";
import Container from "../ui/Container";
import ScrollReveal from "../common/ScrollReveal";

const skillGroups = [
  {
    title: "Frontend",
    description: "Building modern, responsive web interfaces.",
    icon: Code2,
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Bootstrap",
      "Vite",
    ],
  },
  {
    title: "Backend",
    description: "Creating practical and scalable web backends.",
    icon: Database,
    skills: ["Python", "C#", "ASP.NET", "REST APIs"],
  },
  {
    title: "AI & Data",
    description: "Exploring machine learning and intelligent systems.",
    icon: Brain,
    skills: [
      "Python",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Scikit-learn",
      "PyTorch",
    ],
  },
  {
    title: "Tools",
    description: "Tools I use to build and manage projects.",
    icon: Wrench,
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Jupyter",
      "Anaconda",
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <Container>
        <ScrollReveal>
          <SectionTitle
            title="Skills & Technologies"
            subtitle="Tools and technologies I use to turn ideas into working products."
          />

          <div className="grid gap-6 mt-14 md:grid-cols-2">
            {skillGroups.map((group, index) => {
              const Icon = group.icon;

              return (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  whileHover={{ y: -5 }}
                  className="transition-colors duration-300 border group rounded-3xl border-white/10 bg-white/3 p-7 backdrop-blur-sm hover:border-violet-400/30"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="flex items-center justify-center mb-4 border h-11 w-11 rounded-2xl border-violet-400/20 bg-violet-500/10">
                        <Icon
                          size={21}
                          className="text-violet-300"
                        />
                      </div>

                      <h3 className="text-xl font-semibold text-white">
                        {group.title}
                      </h3>

                      <p className="mt-2 max-w-md text-sm leading-6 text-(--text-muted)">
                        {group.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/70 transition-all duration-300 group-hover:border-violet-400/20 group-hover:text-white"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

export default Skills;
