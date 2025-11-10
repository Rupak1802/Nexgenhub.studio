import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Rocket, Target, Lightbulb, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    icon: Rocket,
    title: 'Innovation',
    description: 'Cutting-edge solutions that push boundaries and set new standards',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'Every strategy is designed to deliver measurable, impactful results',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Lightbulb,
    title: 'Creativity',
    description: 'Unique, compelling designs that make your brand unforgettable',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Users,
    title: 'Client-Centered',
    description: 'Your success is our priority, with personalized service every step',
    color: 'from-green-500 to-emerald-500'
  }
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.about-title',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: '.about-title',
            start: 'top 80%',
          }
        }
      );

      gsap.fromTo('.about-content',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: '.about-content',
            start: 'top 80%',
          }
        }
      );

      gsap.fromTo('.value-card',
        { opacity: 0, y: 60, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: '.values-grid',
            start: 'top 70%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="about-title text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Who We Are
        </h2>

        <div className="about-content max-w-4xl mx-auto text-center mb-16">
          <p className="text-xl text-gray-700 leading-relaxed">
            Nexgenhub.studio is a creative digital marketing agency that helps businesses transform their online presence.
            We specialize in crafting tailored strategies, designing captivating visuals, and delivering measurable results.
            With a passionate team of designers, marketers, and developers, we bring your vision to life.
          </p>
        </div>

        <div className="values-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="value-card group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100 hover:border-transparent overflow-hidden relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
