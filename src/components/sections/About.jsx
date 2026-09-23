import { motion } from "framer-motion";
import { Code2, Globe, Brain, Sparkles } from "lucide-react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import ScrollReveal from "../common/ScrollReveal";

function About() {
  return (
    <section id="about" className="section-padding">
      <Container>
        <ScrollReveal>
          <SectionTitle
            title="About Me"
            subtitle="A software engineer with a passion for design, technology, and meaningful digital experiences."
          />

          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Left: Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="overflow-hidden aspect-4/5 rounded-4xl glass">
                <img
                  src="/images/profile.png"
                  alt="Tiara portrait"
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="absolute w-40 h-40 rounded-full -bottom-6 -right-6 bg-purple-500/20 blur-3xl -z-10" />
            </motion.div>

            {/* Right: Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="space-y-6 text-(--text-muted) leading-8 text-lg">
                <p>
                  I'm <span className="font-semibold text-white">Tiara</span>, a Software Engineering graduate and Frontend Developer 
                  focused on building modern, responsive, and user-friendly web experiences.
                </p>
                
                <p>
                  I started with software development and gradually became more interested in the frontend side of building 
                  products. especially the part where code turns into something people can actually see and interact with.
                </p>

                <p>
                  Alongside software development, I've been exploring Machine Learning and intelligent systems, 
                  which is an area I plan to keep developing in the future.
                </p>

                <p>
                Right now, I'm focused on building my experience through real projects and working with people who are building interesting things.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-5">
                {/* Projects */}
                <div className="p-6 glass rounded-3xl">
                  <div className="flex items-center gap-3 mb-4">
                    <Code2 className="text-purple-300" size={22} />

                    <span className="text-sm text-(--text-muted)">
                      Projects
                    </span>
                  </div>

                  <p className="text-3xl font-bold">3+</p>
                </div>

                {/* AI & ML */}
                <div className="p-6 glass rounded-3xl">
                  <div className="flex items-center gap-3 mb-4">
                    <Brain className="text-purple-300" size={22} />

                    <span className="text-sm text-(--text-muted)">
                      AI & ML
                    </span>
                  </div>

                  <p className="text-3xl font-bold">Growing</p>
                </div>

                {/* Clients */}
                <div className="p-6 glass rounded-3xl">
                  <div className="flex items-center gap-3 mb-4">
                    <Globe className="text-purple-300" size={22} />

                    <span className="text-sm text-(--text-muted)">
                      Clients
                    </span>
                  </div>

                  <p className="text-xl sm:text-3xl font-bold">Worldwide</p>

                </div>

                {/* Learning */}
                <div className="p-6 glass rounded-3xl">
                  <div className="flex items-center gap-3 mb-4">
                    <Sparkles className="text-purple-300" size={22} />

                    <span className="text-sm text-(--text-muted)">
                      Learning
                    </span>
                  </div>

                  <p className="text-xl sm:text-3xl font-bold">Every Day</p>
                </div>
              </div>
            </motion.div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

export default About;
