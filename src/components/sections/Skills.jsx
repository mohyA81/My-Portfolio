import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import ScrollReveal from "../common/ScrollReveal";
import { skills } from "../../data/skills";

function Skills() {
  return (
    <section id="skills" className="py-28 bg-[#07010d]">
      <Container>
        <ScrollReveal>
          <SectionTitle title="Tech Stack" subtitle="Technologies I use" />
        </ScrollReveal>

        <ScrollReveal>
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
        </ScrollReveal>
      </Container>
    </section>
  );
}

export default Skills;
