import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'Branding Campaign for Luxury Hotel',
    description:
      'Complete brand overhaul including logo design, marketing materials, and digital strategy implementation.',
    link: 'https://nexgenhubstudio-glitch.github.io/Luxury-Hotel/',
    image: '/web.jpg',
  },
  {
     title: 'Dental Website',
    description:
      'Fastest way of approaching the dentist and dental products.',
    link: 'https://dentico-clinic.onrender.com',
    image: '/dentico.png',

  },
  {
    title: 'Attendance Management for college',
    description:
      'Helps in managing the students attendance ,Have your attendance percentage in count.',
    link: 'https://nexgenhubstudio-glitch.github.io/Attendance-Management/',
    image: '/image.png',
  },
  // {
  //   title: 'Attendance Management for college',
  //   description:
  //     'Helps in managing the students attendance ,Have your attendance percentage in count.',
  //   link: 'https://nexgenhubstudio-glitch.github.io/Attendance-Management/',
  //   image: '/ad.jpg',
  // },

  {
    title: 'Carrier Assistant',
    description:
      'Improve your skills and monitor the jobs and your skill set in minutes and track your record.',
    link: 'https://rupak1802.github.io/Synapse-Ai',
    image: '/synapse.png',
  },
  {
    title: 'Explore our extra works',
    description:
      'Modern, minimal, and memorable logo designs for various industries and brand personalities.',
    link: 'https://legend-spike-385.notion.site/AD-s-Made-by-us-271f5ecce2188082ba17cbde705a16cf?source=copy_link',
    image: '/lo.jpg',
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.projects-title',
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          scrollTrigger: {
            trigger: '.projects-title',
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        '.project-card',
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.projects-grid',
            start: 'top 70%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="projects-title text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Our Work Speaks for Itself
        </h2>

        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => window.open(project.link, '_blank')}
              className="project-card group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2"
            >
              <div className="h-48 relative overflow-hidden bg-gray-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-20 h-20 border-4 border-white rounded-full flex items-center justify-center">
                    <ExternalLink className="w-10 h-10 text-white" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <span className="inline-flex items-center gap-2 text-blue-600 font-semibold transition-all duration-300">
                  View Project
                  <ExternalLink className="w-4 h-4" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
