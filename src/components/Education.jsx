import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

export default function Education() {
  const educationList = [
    {
      institution: 'Lovely Professional University',
      location: 'Phagwara, Punjab',
      period: 'Aug 2024 – Present',
      degree: 'Bachelor of Technology, Computer Science and Engineering',
      highlight: 'CGPA 9.01'
    },
    {
      institution: "Colonel's Central Academy",
      location: 'Gurugram, Haryana',
      period: 'Apr 2021 – Mar 2024',
      degree: 'Higher Secondary & Secondary Education',
      highlight: 'Intermediate: 94.6% (2024) · Matriculation: 94.8% (2022)'
    }
  ];

  return (
    <section id="education" className="py-20 px-6 md:px-12 bg-[#0A0F14] border-t border-[#1A232E]">
      <div className="max-w-6xl mx-auto space-y-10">
        <div>
          <h2 className="text-3xl font-bold text-white tracking-tight">Education</h2>
          <div className="w-12 h-1 bg-[#FF756B] rounded-full mt-2"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationList.map((edu, idx) => (
            <div
              key={idx}
              className="bg-[#0F151C] border border-[#1A232E] hover:border-[#FF756B]/40 rounded-lg p-6 space-y-4 transition-all duration-200"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <GraduationCap size={20} className="text-[#FF756B]" />
                    {edu.institution}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-gray-400 font-medium">
                    <span className="flex items-center gap-1">
                      <MapPin size={12} className="text-[#FF756B]" />
                      {edu.location}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {edu.period}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-[#1A232E]/60">
                <p className="text-gray-300 text-sm font-medium">{edu.degree}</p>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FF756B]/10 border border-[#FF756B]/30 rounded text-xs font-semibold text-[#FF756B]">
                  <Award size={13} />
                  <span>{edu.highlight}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
