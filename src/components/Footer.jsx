import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#1A232E] bg-[#06090D] py-8 px-6 md:px-12 text-sm text-gray-400">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Logo & Copyright */}
        <div className="flex items-center space-x-2">
          <span className="font-bold text-white text-base">Jasmine<span className="text-[#FF756B]">.</span></span>
          <span className="text-gray-600">|</span>
          <span>© {new Date().getFullYear()} Jasmine Singh. All rights reserved.</span>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="flex items-center space-x-2 text-xs font-medium text-gray-400 hover:text-[#FF756B] transition-colors p-2 rounded-md hover:bg-[#0F151C]"
        >
          <span>Back to top</span>
          <ArrowUp size={14} />
        </button>

      </div>
    </footer>
  );
}
