import React, { useState } from 'react';
import { Award, ExternalLink, Code2, Calendar, X } from 'lucide-react';

export default function Achievements() {
  const [activeCert, setActiveCert] = useState(null);

  const keyAchievements = [
    {
      title: 'Finalist, Dev Storm Hackathon',
      description: 'Advanced to the final round by developing and presenting a competitive technical solution.',
      hasCert: true,
      certName: 'Dev Storm Hackathon Finalist Certificate',
      date: '2026',
      image: '/certs/ai-drive-mern-stack.jpeg',
      issuer: 'Dev Storm Hackathon'
    },
    {
      title: '150+ LeetCode Problems Solved',
      description: 'Across core DSA topics including arrays, strings, trees, graphs, and dynamic programming.',
      hasCert: false
    }
  ];

  const certificates = [
    {
      title: 'AI-Driven MERN Stack Bootcamp',
      date: 'Jul 2026',
      issuer: 'Dev-Bootcamp',
      image: '/certs/ai-drive-mern-stack.jpeg'
    },
    {
      title: 'Infosys — DBMS',
      date: 'Jul 2026',
      issuer: 'Infosys Springboard',
      image: '/certs/dbms.jpeg'
    },
    {
      title: 'Infosys — C++',
      date: 'Aug 2025',
      issuer: 'Infosys Springboard',
      image: '/certs/cpp.jpeg'
    },
    {
      title: 'MOOC on React.js — Tech Veda',
      date: 'Mar 2025',
      issuer: 'Tech Veda Academy',
      image: '/certs/react.jpeg'
    },
    {
      title: 'Course on C — CSE Pathshala',
      date: 'Jan 2025',
      issuer: 'CSE Pathshala',
      image: '/certs/c.jpeg'
    },
  ];

  return (
    <section id="achievements" className="py-20 px-6 md:px-12 bg-[#0A0F14] border-t border-[#1A232E]">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header */}
        <div>
          <h2 className="text-3xl font-bold text-white tracking-tight">Achievements</h2>
          <div className="w-12 h-1 bg-[#FF756B] rounded-full mt-2"></div>
        </div>

        {/* Highlight Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {keyAchievements.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#0F151C] border border-[#1A232E] hover:border-[#FF756B]/40 rounded-lg p-6 space-y-3 transition-all"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-[#FF756B]/10 rounded-md text-[#FF756B]">
                    {item.hasCert ? <Award size={20} /> : <Code2 size={20} />}
                  </div>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                </div>

                {item.hasCert && (
                  <button
                    onClick={() => setActiveCert(item)}
                    className="text-xs font-semibold text-[#FF756B] hover:underline flex items-center gap-1"
                  >
                    <span>View certificate</span>
                    <ExternalLink size={13} />
                  </button>
                )}
              </div>

              <p className="text-gray-300 text-sm leading-relaxed pl-11 font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Certificates Section */}
        <div className="space-y-6 pt-4">
          <div className="flex items-center space-x-2">
            <Award size={20} className="text-[#FF756B]" />
            <h3 className="text-xl font-bold text-white">Certifications &amp; Courses</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certificates.map((cert, idx) => (
              <div
                key={idx}
                className="bg-[#0F151C] border border-[#1A232E] hover:border-[#FF756B]/40 rounded-lg p-5 flex flex-col justify-between space-y-4 transition-all duration-200"
              >
                <div className="space-y-2">
                  <span className="text-[11px] font-semibold text-[#FF756B] uppercase tracking-wider bg-[#FF756B]/10 px-2 py-0.5 rounded">
                    {cert.issuer}
                  </span>
                  <h4 className="text-sm font-bold text-white leading-snug">{cert.title}</h4>
                </div>

                <div className="flex items-center justify-between border-t border-[#1A232E]/60 pt-3 text-xs text-gray-400">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {cert.date}
                  </span>
                  <button
                    onClick={() => setActiveCert(cert)}
                    className="text-[#FF756B] hover:underline font-medium flex items-center gap-1"
                  >
                    <span>View certificate</span>
                    <ExternalLink size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Certificate Image Lightbox Modal */}
      {activeCert && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn"
          onClick={() => setActiveCert(null)}
        >
          <div 
            className="bg-[#0F151C] border border-[#1A232E] rounded-xl max-w-3xl w-full p-4 sm:p-6 space-y-4 relative shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <div className="flex items-center justify-between border-b border-[#1A232E] pb-3">
              <div>
                <h3 className="text-lg font-bold text-white">{activeCert.title}</h3>
                <p className="text-xs text-gray-400">{activeCert.issuer} · {activeCert.date}</p>
              </div>
              <button
                onClick={() => setActiveCert(null)}
                className="text-gray-400 hover:text-white p-2 rounded-lg bg-[#151E28] transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Certificate Image Frame */}
            <div className="bg-[#080D11] border border-[#1A232E] rounded-lg overflow-hidden flex items-center justify-center max-h-[70vh]">
              <img
                src={activeCert.image}
                alt={activeCert.title}
                className="max-h-[65vh] w-auto object-contain rounded"
              />
            </div>

            <div className="flex justify-end pt-1">
              <a
                href={activeCert.image}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#FF756B] hover:bg-[#FF5C50] text-[#080D11] font-semibold text-xs rounded-md transition-colors flex items-center gap-1.5"
              >
                <span>Open Full Image</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
