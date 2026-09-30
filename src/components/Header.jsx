import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header({ activeSection, setActiveSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#080D11]/90 backdrop-blur-sm border-b border-[#1A232E]/60 py-4 px-6 md:px-12 transition-all">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <a 
          href="#home" 
          onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
          className="text-2xl font-bold tracking-tight text-white flex items-center hover:opacity-90 transition-opacity"
        >
          Jasmine<span className="text-[#FF756B]">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                className={`relative py-1 text-sm font-medium transition-colors ${
                  isActive 
                    ? 'text-[#FF756B]' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FF756B] rounded-full transition-all duration-300" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Mobile / Tablet Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-gray-300 hover:text-white rounded-lg focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden pt-4 pb-6 px-4 bg-[#0F151C] border-b border-[#1A232E] mt-3 rounded-b-xl shadow-xl">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  className={`text-base font-medium py-2 px-3 rounded-md transition-colors ${
                    isActive 
                      ? 'text-[#FF756B] bg-[#FF756B]/10 font-semibold border-l-2 border-[#FF756B]' 
                      : 'text-gray-300 hover:text-white hover:bg-[#151E28]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
