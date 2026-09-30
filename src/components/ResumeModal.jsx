import React from 'react';
import { X, Download, FileText, CheckCircle2 } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs">
      <div className="bg-[#0F151C] border border-[#1A232E] rounded-xl max-w-lg w-full p-6 space-y-6 relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white p-2 rounded-lg bg-[#151E28]"
        >
          <X size={20} />
        </button>

        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-lg bg-[#FF756B]/10 border border-[#FF756B]/30 flex items-center justify-center text-[#FF756B]">
            <FileText size={24} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Jasmine Singh's CV</h3>
            <p className="text-xs text-gray-400">Full Stack Developer — Curriculum Vitae</p>
          </div>
        </div>

        <div className="bg-[#080D11] border border-[#1A232E] rounded-lg p-4 space-y-2 text-xs text-gray-300 font-mono">
          <div className="flex justify-between border-b border-[#1A232E] pb-2 text-white font-sans font-semibold">
            <span>Jasmine Singh</span>
            <span className="text-[#FF756B]">Full Stack Developer</span>
          </div>
          <p><span className="text-gray-500">Contact:</span> jasmine7new@gmail.com · +91 9667490776</p>
          <p><span className="text-gray-500">Education:</span> Lovely Professional University (CGPA 9.01)</p>
          <p><span className="text-gray-500">Core Stack:</span> React.js, Node.js, Express.js, MongoDB, PostgreSQL, C++</p>
          <p><span className="text-gray-500">Achievements:</span> Dev Storm Hackathon Finalist, 150+ LeetCode Solved</p>
        </div>

        <div className="flex items-center gap-3 pt-2">
          <a
            href="/jassu_cv.pdf"
            download="Jasmine_Singh_CV.pdf"
            onClick={onClose}
            className="w-full py-3 bg-[#FF756B] hover:bg-[#FF5C50] text-[#080D11] font-semibold text-sm rounded-md transition-colors flex items-center justify-center gap-2"
          >
            <Download size={16} />
            Download Jasmine's CV (PDF)
          </a>
        </div>
      </div>
    </div>
  );
}
