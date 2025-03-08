import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { TiltCard } from '@/components/TiltCard';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Header */}
      <section className="bg-gradient-to-br from-[#2a3557] via-header to-[#3d4d7d] text-white py-20">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="w-24 h-24 bg-white/10 rounded-lg flex items-center justify-center text-white text-4xl font-bold transition-all duration-300 hover:scale-110 hover:rotate-[8deg] cursor-pointer">
              Logo
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-2">PhoenixNet-Labs</h1>
              <p className="text-xl text-gray-200">A compliation of projects, accomplishments, and experiences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12">A Little About Me:</h2>
          
          {/* Two Paragraph Sections */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <h3 className="text-xl font-semibold mb-4">Who, or rather, what is PhoenixNet-Labs?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                PhoenixNet-Labs is a "pseudo-company" that I created to host my projects and accomplishments, 
                as well as to showcase my skills and abilities to future employers.
                <br/><br/>
                I created PhoenixNet-Labs in highschool to put a brand on my projects and practices, akin to how Microsoft uses "Contoso" or "A. Datumum Coporation" for their examples.
                <br/><br/>
                PhoenixNet-Labs is not a real company, and is not affiliated with any real company. I use this brand to "encompass" all of my projects and practices, and to give them a cohesive brand.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Well, then who are you?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                I'm an IT Specialist, and have been in the IT field for about 4 years now. I've encountered many different technologies in that time, and have a large amount of exposure to a lot of major technologies.
                <br/><br/>
                I use my lab to try to learn new technologies, mirror my employer's environments, and to keep my skills sharp.
                <br/><br/>
                Below are some of my projects that I've worked on, and some of my skills, take a look around!
              </p>
            </div>
          </div>

          {/* Featured Projects Grid */}
          <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[1, 2, 3].map((project) => (
              <TiltCard key={project} className="group bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]">
                <div className="h-48 bg-gradient-to-br from-[#2a3557] via-header to-[#3d4d7d] flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-105">
                  Project Image {project}
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300">
                      React
                    </span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300">
                      TypeScript
                    </span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300">
                      Tailwind
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Project Title</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Brief description of the project and its key features.
                  </p>
                  <a href="#" className="text-header dark:text-white hover:text-header/80 dark:hover:text-white/80 font-medium">
                    Learn More →
                  </a>
                </div>
              </TiltCard>
            ))}
          </div>

          {/* Other Projects Grid */}
          <h2 className="text-3xl font-bold mb-12">Other Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[1, 2, 3].map((project) => (
              <TiltCard key={project} className="group bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]">
                <div className="h-48 bg-gradient-to-br from-[#2a3557] via-header to-[#3d4d7d] flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-105">
                  Project Image {project}
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300">
                      Next.js
                    </span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300">
                      Node.js
                    </span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300">
                      MongoDB
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Project Title</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Brief description of the project.
                  </p>
                  <div className="flex gap-4">
                    <a href="#" className="text-header dark:text-white hover:text-header/80 dark:hover:text-white/80 font-medium">
                      GitHub
                    </a>
                    <a href="#" className="text-header dark:text-white hover:text-header/80 dark:hover:text-white/80 font-medium">
                      Live Demo
                    </a>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>

          {/* Skills Grid */}
          <h2 className="text-3xl font-bold mb-12">Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {[
              { icon: '💻', title: 'Frontend Development' },
              { icon: '⚙️', title: 'Backend Development' },
              { icon: '🎨', title: 'UI/UX Design' },
              { icon: '📱', title: 'Mobile Development' },
              { icon: '☁️', title: 'Cloud Services' },
              { icon: '🔒', title: 'Security' },
            ].map((skill) => (
              <TiltCard key={skill.title} className="group flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]">
                <span className="text-2xl transition-transform duration-300 group-hover:scale-125 group-hover:rotate-[8deg]">{skill.icon}</span>
                <div>
                  <h3 className="font-semibold text-header dark:text-white">{skill.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Brief description of your expertise in this area.
                  </p>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-footer-light dark:bg-footer-dark text-white py-8">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white text-sm">
              Logo
            </div>
            <p className="text-sm">© 2024 Your Name. All rights reserved.</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-white hover:text-white/80">
              <FaGithub className="w-6 h-6" />
            </a>
            <a href="#" className="text-white hover:text-white/80">
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-white hover:text-white/80">
              <FaTwitter className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
} 