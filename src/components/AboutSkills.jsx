import React from 'react';
import { MapPin, Code2, Database, BookOpen, UserCheck } from 'lucide-react';

export default function AboutSkills() {
  const stats = [
    { value: '5+', label: 'Projects Completed' },
    { value: '150+', label: 'LeetCode Solved' },
    { value: '9.01', label: 'B.Tech CGPA' },
  ];

  const skillGroups = [
    {
      category: 'Frontend & backend',
      icon: <Code2 size={16} className="text-[#FF756B]" />,
      skills: ['HTML', 'CSS', 'React.js', 'Node.js', 'Express.js', 'REST APIs', 'JWT']
    },
    {
      category: 'Databases',
      icon: <Database size={16} className="text-[#FF756B]" />,
      skills: ['MongoDB', 'PostgreSQL', 'DBMS']
    },
    {
      category: 'CS fundamentals',
      icon: <BookOpen size={16} className="text-[#FF756B]" />,
      skills: ['Data Structures & Algorithms', 'Operating Systems', 'Computer Networks', 'OOP']
    },
    {
      category: 'Working style',
      icon: <UserCheck size={16} className="text-[#FF756B]" />,
      skills: ['Problem-solving', 'Curious', 'Adaptable', 'Leadership']
    }
  ];

  return (
    <section id="about" className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
        
        {/* LEFT COLUMN - About Me */}
        <div className="md:col-span-5 space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-white tracking-tight">About me</h2>
            <div className="w-12 h-1 bg-[#FF756B] rounded-full mt-2"></div>
          </div>

          <p className="text-gray-300 text-base leading-relaxed font-normal">
            I’m a Full Stack Developer and CSE undergraduate who enjoys building web applications that solve real problems. I love working with modern technologies, mastering CS fundamentals, and creating clean, scalable and user-friendly solutions.
          </p>

          <div className="pt-2 flex items-center space-x-2 text-gray-400 text-sm font-medium">
            <MapPin size={18} className="text-[#FF756B]" />
            <span>India</span>
          </div>

          {/* Top Statistics */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#1A232E]">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col text-left">
                <span className="text-2xl sm:text-3xl font-bold text-[#FF756B] tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs text-gray-400 mt-1 font-medium leading-snug">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN - Skills */}
        <div id="skills" className="md:col-span-7 space-y-6">
          <div>
            <h3 className="text-3xl font-bold text-white tracking-tight">Skills</h3>
            <div className="w-12 h-1 bg-[#FF756B] rounded-full mt-2"></div>
          </div>

          <div className="space-y-5">
            {skillGroups.map((group, idx) => (
              <div key={idx} className="bg-[#0F151C] border border-[#1A232E] rounded-lg p-5 space-y-3">
                <div className="flex items-center space-x-2 text-xs font-semibold text-gray-300 uppercase tracking-wider">
                  {group.icon}
                  <span>{group.category}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1.5 bg-[#080D11] border border-[#1A232E] hover:border-[#FF756B]/40 text-gray-200 text-xs font-medium rounded-md transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
