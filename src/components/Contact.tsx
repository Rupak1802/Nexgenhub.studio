import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Mail, Phone, Facebook, Instagram, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import SuccessModal from './SuccessModal';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Initialize EmailJS once
  useEffect(() => {
    emailjs.init('7593pgQPrXTX2pK1R');
  }, []);

  // GSAP animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-title', { opacity: 0, y: 50 }, {
        opacity: 1, y: 0, duration: 1,
        scrollTrigger: { trigger: '.contact-title', start: 'top 80%' }
      });

      gsap.fromTo('.contact-info', { opacity: 0, x: -50 }, {
        opacity: 1, x: 0, duration: 0.8,
        scrollTrigger: { trigger: '.contact-content', start: 'top 70%' }
      });

      gsap.fromTo('.contact-form', { opacity: 0, x: 50 }, {
        opacity: 1, x: 0, duration: 0.8,
        scrollTrigger: { trigger: '.contact-content', start: 'top 70%' }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await emailjs.send(
  'service_o3zpxle', // your service ID
  'template_7cq4dp5', // your template ID
  {
    name: formData.name,
    email: formData.email,
    title: formData.message, // maps to {{title}} in your template
  }
);

      if (response.status === 200) {
        setShowSuccess(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Email send error:', error);
      alert('❌ Failed to send message. Please check your EmailJS setup or internet connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="contact-title text-5xl font-bold text-center mb-16 text-white">
          Let's Build Something Great Together
        </h2>

        <div className="contact-content grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <div className="contact-info space-y-8">
            <h3 className="text-3xl font-bold text-white mb-8">Get In Touch</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-300 text-lg">Nexgenhub.studio</p>
                  <p className="text-gray-400">Coimbatore, India</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-300 text-lg">nexgenhub.studio@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-300 text-lg">+91-7305429059</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="text-xl font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/share/17GuPQ3hb6/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-blue-600 hover:scale-110 transition-all duration-300"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com/nexgenhub.studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 hover:scale-110 transition-all duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="contact-form">
            <form
              onSubmit={handleSubmit}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-white font-semibold mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-semibold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-semibold mb-2">Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none transition-all duration-300"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        <SuccessModal isOpen={showSuccess} onClose={() => setShowSuccess(false)} />
      </div>
    </section>
  );
}
