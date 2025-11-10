import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TrendingUp, Palette, Film, Globe } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    description: 'Targeted campaigns that boost engagement and drive conversions through strategic social media management, SEO optimization, and data-driven advertising.',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Palette,
    title: 'Ad & Logo Designs',
    description: 'Creative designs that make your brand unforgettable with professional logos, compelling advertisements, and cohesive visual identity systems.',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Film,
    title: 'Video Editing',
    description: 'Compelling videos that tell your brand story through professional editing, motion graphics, and engaging content that captures your audience\'s attention.',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    icon: Globe,
    title: 'Website Development & Management',
    description: 'Professional, responsive, and easy-to-manage websites that showcase your brand and drive conversions with modern design and optimal performance.',
    gradient: 'from-green-500 to-emerald-500'
  }
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.services-title',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: '.services-title',
            start: 'top 80%',
          }
        }
      );

      gsap.fromTo('.service-card',
        { opacity: 0, x: -50, rotateY: -15 },
        {
          opacity: 1,
          x: 0,
          rotateY: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.services-grid',
            start: 'top 70%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="services" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="services-title text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          What We Do
        </h2>

        <div className="services-grid grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="service-card group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-l-4 border-transparent hover:border-blue-500 cursor-pointer relative overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700`}></div>

                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <button
            onClick={scrollToContact}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
          >
            Explore Services
          </button>
        </div>
      </div>
    </section>
  );
}
