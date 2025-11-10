import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    text: 'Nexgenhub.studio helped us reach more customers than ever before. Truly professional team!',
    client: '- Luxary stay',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    text: 'Our new logo and website completely transformed our brand image. Outstanding work!',
    client: '- Dentico',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    text: 'The digital marketing campaign exceeded our expectations. Highly recommended!',
    client: '- SLS',
    gradient: 'from-orange-500 to-red-500'
  }
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.testimonials-title',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: '.testimonials-title',
            start: 'top 80%',
          }
        }
      );

      gsap.fromTo('.testimonial-card',
        { opacity: 0, scale: 0.8, rotateX: -20 },
        {
          opacity: 1,
          scale: 1,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: '.testimonials-grid',
            start: 'top 70%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="testimonials" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="testimonials-title text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          What Our Clients Say
        </h2>

        <div className="testimonials-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer relative overflow-hidden border border-gray-100"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${testimonial.gradient} opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700`}></div>

              <Quote className={`w-12 h-12 mb-4 bg-gradient-to-br ${testimonial.gradient} text-transparent bg-clip-text opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />

              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 italic mb-6 leading-relaxed text-lg">
                "{testimonial.text}"
              </p>

              <div className={`h-1 w-16 bg-gradient-to-r ${testimonial.gradient} rounded-full mb-4 group-hover:w-full transition-all duration-500`}></div>

              <p className={`font-bold text-transparent bg-gradient-to-r ${testimonial.gradient} bg-clip-text`}>
                {testimonial.client}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
