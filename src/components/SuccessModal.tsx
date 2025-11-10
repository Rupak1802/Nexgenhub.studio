import { useEffect } from 'react';
import { CheckCircle, X } from 'lucide-react';
import { gsap } from 'gsap';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
  useEffect(() => {
    if (isOpen) {
      gsap.fromTo('.success-modal-overlay',
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: 'power2.out' }
      );

      gsap.fromTo('.success-modal-content',
        { opacity: 0, scale: 0.5, y: -50 },
        { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: 'back.out(1.7)' }
      );

      gsap.fromTo('.success-icon',
        { rotation: -180, scale: 0 },
        { rotation: 0, scale: 1, duration: 0.6, ease: 'back.out(1.7)', delay: 0.2 }
      );

      const timer = setTimeout(() => {
        onClose();
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="success-modal-overlay fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="success-modal-content bg-white rounded-2xl p-8 shadow-2xl max-w-md w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex flex-col items-center text-center">
          <div className="success-icon mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl"></div>
              <CheckCircle className="w-24 h-24 text-green-500 relative" />
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-3">Success!</h2>
          <p className="text-gray-600 text-lg mb-2">Your message has been sent successfully</p>
          <p className="text-gray-500 text-sm">We'll get back to you shortly</p>

          <div className="mt-6 w-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full h-1 overflow-hidden">
            <div className="h-full bg-white animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
