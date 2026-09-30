import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TechStrip from './components/TechStrip';
import AboutSkills from './components/AboutSkills';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'skills', 'achievements', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#080D11] text-[#F3F4F6] flex flex-col selection:bg-[#FF756B] selection:text-[#080D11]">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="flex-grow">
        <Hero onResumeClick={() => setIsResumeOpen(true)} />
        <TechStrip />
        <AboutSkills />
        <Education />
        <Achievements />
        <Projects />
        <Contact />
      </main>

      <Footer />

      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
}
