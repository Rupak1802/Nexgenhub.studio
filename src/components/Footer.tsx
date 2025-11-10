import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-400 mb-2 flex items-center justify-center gap-2">
          &copy; 2025 Nexgenhub.studio | All Rights Reserved
          <Heart className="w-4 h-4 text-red-500 fill-red-500" />
        </p>
        <p className="text-transparent bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text font-semibold italic">
          "Turning Ideas Into Impact."
        </p>
      </div>
    </footer>
  );
}
