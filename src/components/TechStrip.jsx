import React from 'react';

export default function TechStrip() {
  return (
    <section className="py-4 border-y border-[#1A232E]/80 bg-[#0A0F14] px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 text-xs sm:text-sm text-center">
        
        {/* Label */}
        <div className="flex items-center justify-center space-x-2 shrink-0">
          <span className="w-2 h-2 rounded-full bg-[#FF756B]"></span>
          <span className="font-bold tracking-[0.15em] text-[#FF756B] uppercase">
            CURRENTLY
          </span>
        </div>

        {/* Divider for desktop */}
        <span className="hidden sm:inline text-gray-700">|</span>

        {/* Content Status Items - Centered */}
        <div className="text-gray-300 font-medium tracking-wide flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center">
          <span>Building Full Stack Applications</span>
          <span className="text-[#FF756B]/60">·</span>
          <span>Learning System Design</span>
          <span className="text-[#FF756B]/60">·</span>
          <span>Exploring Cloud &amp; DevOps</span>
        </div>

      </div>
    </section>
  );
}
