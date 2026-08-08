import SectionTitle from '../ui/SectionTitle'
import Button from '../ui/Button'
import Container from '../ui/Container'
import { profile } from '../../data/profile'

function About() {
  return (
    <section id="about" className="px-6 py-24">
      <Container>
        <SectionTitle title="About Me" subtitle="Get to know me" />

        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-purple-500/20 via-purple-800/10 to-transparent border border-purple-800/20 shadow-2xl shadow-purple-900/20">
              <span className="text-lg text-purple-300">Your Photo</span>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-3xl font-bold">
              {profile.title}
            </h3>

            <p className="mb-8 leading-8 text-gray-300">
              {profile.bio}
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              <div>
                <p className="mb-1 text-sm text-gray-400">Location</p>
                <p className="font-medium text-white">
                  {profile.location}
                </p>
              </div>

              <div>
                <p className="mb-1 text-sm text-gray-400">Focus</p>
                <p className="font-medium text-white">
                  Web & AI
                </p>
              </div>
            </div>

            <Button href={profile.resume}>Download Resume</Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default About