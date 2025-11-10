import { useEffect } from 'react';
import { MessageCircle, Instagram, Mail } from 'lucide-react';
import { gsap } from 'gsap';

export default function FloatingButtons() {
  useEffect(() => {
    gsap.fromTo('.floating-btn',
      { scale: 0, rotation: 180 },
      { scale: 1, rotation: 0, duration: 0.5, stagger: 0.1, ease: 'back.out(1.7)', delay: 1.5 }
    );
  }, []);

  return (
    <div className="fixed right-6 bottom-6 flex flex-col gap-4 z-40">
      <a
        href="https://wa.me/917305429059"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn group w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300"
        title="WhatsApp"
      >
        <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </a>

      <a
        href="https://instagram.com/nexgenhub.studio"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn group w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 text-white flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300"
        title="Instagram"
      >
        <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </a>

      <a
        href="mailto:nexgenhub.studio@gmail.com"
        className="floating-btn group w-14 h-14 rounded-full bg-red-500 text-white flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300"
        title="Email"
      >
        <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </a>
    </div>
  );
}
