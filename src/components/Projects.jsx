import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight, X, Calendar } from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 'realestate',
      title: 'Real Estate Recommendation Portal',
      period: 'Jun 2026 – Jul 2026',
      description: 'Full-stack MERN platform featuring JWT authentication, property filtering, and a DSA-powered weighted recommendation engine that ranks properties with match percentages. Includes an admin management dashboard with analytics.',
      fullDescription: 'Developed a full-stack real estate platform with JWT-based authentication, property search, filtering, pagination, wishlist management, and user profiles using the MERN stack. Applied Data Structures & Algorithms to implement a weighted recommendation engine ranking properties based on budget, location, amenities, property type, and BHK, generating the Top 5 matches with percentage scores. Built an admin dashboard for property and user management with CRUD operations, analytics, and DBMS schema design.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT'],
      image: '/realestate.png',
      demo: 'https://vex-real-estate-blond.vercel.app',
      github: 'https://github.com/JasmineSingh-07',
      isLive: true
    },
    {
      id: 'jeecom',
      title: 'Jeecom — IT Sales & Services Platform',
      period: 'Mar 2026 – Apr 2026',
      description: 'Full-stack IT products and services platform with product browsing, search, cart, checkout, order tracking, and service requests. Built with REST APIs, MongoDB, and JWT authentication.',
      fullDescription: 'Developed a full-stack IT products and services platform with product browsing, search, cart, checkout, order tracking, and service-request features. Implemented REST APIs, MongoDB database integration, JWT authentication, and an admin dashboard for managing products, orders, inventory, and service requests.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB'],
      image: '/jeecom.png',
      demo: 'https://www.jeecomit.sbs/',
      github: 'https://github.com/JasmineSingh-07',
      isLive: true
    },
    {
      id: 'aireview',
      title: 'AI Product Review Analyzer',
      period: 'Apr 2026 – May 2026',
      description: 'Flask NLP app combining multilingual BERT and Groq Llama 3.1 to classify sentiment, predict 1–5 star ratings, translate customer feedback, and extract actionable business insights.',
      fullDescription: 'Built a Flask-based NLP application using multilingual BERT to classify customer reviews by sentiment and predict 1–5 star ratings with confidence scoring. Engineered a hybrid NLP pipeline combining BERT with Groq Llama 3.1 for low-confidence sentiment cases, alongside RAKE-based keyword extraction and LLM-powered product-aspect sentiment analysis. Integrated automatic multilingual translation and AI-generated business insights for customer feedback.',
      tech: ['Python', 'Flask', 'BERT', 'Hugging Face', 'Groq', 'NLP', 'PyTorch'],
      image: '/aireview.png',
      demo: 'https://github.com/JasmineSingh-07/ai',
      github: 'https://github.com/JasmineSingh-07/ai',
      isLive: false
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 md:px-12 bg-[#0A0F14] border-t border-[#1A232E]">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Featured Projects</h2>
            <div className="w-12 h-1 bg-[#FF756B] rounded-full mt-2"></div>
          </div>

          <a
            href="https://github.com/JasmineSingh-07"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-400 hover:text-[#FF756B] flex items-center gap-1.5 transition-colors group"
          >
            <span>View All Projects</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* 3 Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#0F151C] border border-[#1A232E] hover:border-[#FF756B]/40 rounded-lg overflow-hidden flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 group"
            >
              <div>
                {/* Project Thumbnail */}
                <div 
                  className="relative aspect-[16/10] bg-[#151E28] overflow-hidden cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-[#080D11]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-xs font-semibold text-white bg-[#080D11]/90 px-3 py-1.5 rounded-full border border-gray-700">
                      View Details &amp; Demo
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="space-y-1">
                    <div className="flex items-center text-xs text-[#FF756B] font-semibold gap-1">
                      <Calendar size={12} />
                      <span>{project.period}</span>
                    </div>
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-lg font-bold text-white group-hover:text-[#FF756B] transition-colors leading-snug">
                        {project.title}
                      </h3>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[#FF756B] transition-colors p-1 shrink-0"
                        aria-label={`Open ${project.title}`}
                      >
                        {project.isLive ? <ExternalLink size={18} /> : <Github size={18} />}
                      </a>
                    </div>
                  </div>

                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-normal line-clamp-4">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Technology Tags */}
              <div className="px-6 pb-6 pt-2 flex flex-wrap gap-1.5">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-medium text-gray-300 bg-[#151E28] border border-[#1A232E] px-2.5 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-[#0F151C] border border-[#1A232E] rounded-xl max-w-2xl w-full p-6 space-y-6 relative shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white p-2 rounded-lg bg-[#151E28]"
            >
              <X size={20} />
            </button>

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-64 object-cover rounded-lg border border-[#1A232E]"
            />

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#FF756B]">
                <Calendar size={14} />
                <span>{selectedProject.period}</span>
              </div>
              <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                {selectedProject.fullDescription}
              </p>
              
              <div className="flex flex-wrap gap-2 pt-2">
                {selectedProject.tech.map((t, i) => (
                  <span key={i} className="text-xs bg-[#FF756B]/10 text-[#FF756B] border border-[#FF756B]/30 px-3 py-1 rounded-md font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-[#1A232E]">
              {selectedProject.isLive && (
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-[#FF756B] text-[#080D11] text-sm font-semibold rounded-md flex items-center gap-2 hover:bg-[#FF5C50]"
                >
                  <ExternalLink size={16} /> Live Demo ↗
                </a>
              )}
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-[#151E28] text-white border border-[#1A232E] text-sm font-medium rounded-md flex items-center gap-2 hover:bg-[#1C2836]"
              >
                <Github size={16} /> GitHub Source ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
