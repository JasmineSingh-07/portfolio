import React from 'react';
import { Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react';

export default function Hero({ onResumeClick }) {
  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-12 pb-16 md:pt-20 md:pb-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        
        {/* LEFT SIDE - Main Text & CTAs */}
        <div className="md:col-span-7 flex flex-col justify-center space-y-6 text-left">
          
          {/* Small uppercase tag */}
          <div>
            <span className="text-xs font-bold tracking-[0.2em] text-[#FF756B] uppercase bg-[#FF756B]/10 px-3 py-1.5 rounded-sm border border-[#FF756B]/20 inline-block">
              FULL STACK DEVELOPER
            </span>
          </div>

          {/* Hero Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Hi, I’m <span className="text-[#FF756B]">Jasmine</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-300 max-w-xl font-normal leading-relaxed">
            I build modern web applications that are simple, scalable and impactful.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {/* Primary Button */}
            <a
              href="#projects"
              onClick={handleScrollToProjects}
              className="px-6 py-3.5 bg-[#FF756B] hover:bg-[#FF5C50] text-[#080D11] font-semibold text-sm rounded-md transition-colors duration-200 flex items-center gap-2 shadow-sm"
            >
              View My Work
              <ArrowRight size={16} />
            </a>

            {/* Download CV Direct Button */}
            <a
              href="/jassu_cv.pdf"
              download="Jasmine_Singh_CV.pdf"
              className="px-6 py-3.5 bg-transparent hover:bg-[#0F151C] text-white text-sm font-medium rounded-md border border-gray-700 hover:border-[#FF756B]/60 transition-colors duration-200 flex items-center gap-2"
            >
              <Download size={16} className="text-[#FF756B]" />
              Download CV
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-3 pt-4">
            <a
              href="https://github.com/JasmineSingh-07"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-md border border-[#1A232E] hover:border-[#FF756B]/50 bg-[#0F151C] hover:bg-[#151E28] text-gray-400 hover:text-[#FF756B] flex items-center justify-center transition-all duration-200"
              aria-label="GitHub Profile"
            >
              <Github size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/jasminesingh07/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-md border border-[#1A232E] hover:border-[#FF756B]/50 bg-[#0F151C] hover:bg-[#151E28] text-gray-400 hover:text-[#FF756B] flex items-center justify-center transition-all duration-200"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>

            <a
              href="mailto:jasmine7new@gmail.com"
              className="w-10 h-10 rounded-md border border-[#1A232E] hover:border-[#FF756B]/50 bg-[#0F151C] hover:bg-[#151E28] text-gray-400 hover:text-[#FF756B] flex items-center justify-center transition-all duration-200"
              aria-label="Send Email"
            >
              <Mail size={18} />
            </a>
          </div>

        </div>

        {/* RIGHT SIDE - Circular Portrait */}
        <div className="md:col-span-5 flex justify-center md:justify-end items-center">
          <div className="relative group">
            {/* Coral Border Ring */}
            <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full p-1.5 border-2 border-[#FF756B] flex items-center justify-center shadow-lg transition-transform duration-300">
              <img
                src="/elena_portrait.jpg"
                alt="Jasmine Singh - Full Stack Developer"
                className="w-full h-full object-cover rounded-full"
                onError={(e) => {
                  e.target.src = '/jasmine_portrait.jpg';
                }}
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
