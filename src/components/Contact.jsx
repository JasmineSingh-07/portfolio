import React, { useState } from 'react';
import { Mail, Phone, Send, CheckCircle2, Copy, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const email = 'jasmine7new@gmail.com';
  const phone = '+91 9667490776';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        
        {/* Left Column: Info & Direct Contact */}
        <div className="md:col-span-5 space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Contact</h2>
            <div className="w-12 h-1 bg-[#FF756B] rounded-full mt-2"></div>
          </div>

          <p className="text-gray-300 text-base leading-relaxed">
            I’m always open to discussing new web development projects, technical challenges, or software engineering opportunities.
          </p>

          <div className="pt-2 space-y-4">
            {/* Email Box */}
            <div className="bg-[#0F151C] border border-[#1A232E] rounded-lg p-4 space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <div className="w-10 h-10 rounded-md bg-[#080D11] border border-[#1A232E] flex items-center justify-center text-[#FF756B]">
                  <Mail size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400 font-medium">Email Me At</span>
                  <a href={`mailto:${email}`} className="text-sm font-semibold text-white hover:text-[#FF756B] transition-colors">
                    {email}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="w-full py-1.5 bg-[#080D11] hover:bg-[#151E28] text-gray-300 border border-[#1A232E] hover:border-[#FF756B]/40 text-xs font-medium rounded-md flex items-center justify-center gap-2 transition-colors"
              >
                {copiedEmail ? (
                  <>
                    <CheckCircle2 size={14} className="text-emerald-400" />
                    <span>Copied Email!</span>
                  </>
                ) : (
                  <>
                    <Copy size={13} />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>
            </div>

            {/* Phone Box */}
            <div className="bg-[#0F151C] border border-[#1A232E] rounded-lg p-4 space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <div className="w-10 h-10 rounded-md bg-[#080D11] border border-[#1A232E] flex items-center justify-center text-[#FF756B]">
                  <Phone size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400 font-medium">Call / WhatsApp</span>
                  <a href={`tel:+919667490776`} className="text-sm font-semibold text-white hover:text-[#FF756B] transition-colors">
                    {phone}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyPhone}
                className="w-full py-1.5 bg-[#080D11] hover:bg-[#151E28] text-gray-300 border border-[#1A232E] hover:border-[#FF756B]/40 text-xs font-medium rounded-md flex items-center justify-center gap-2 transition-colors"
              >
                {copiedPhone ? (
                  <>
                    <CheckCircle2 size={14} className="text-emerald-400" />
                    <span>Copied Phone!</span>
                  </>
                ) : (
                  <>
                    <Copy size={13} />
                    <span>Copy Phone Number</span>
                  </>
                )}
              </button>
            </div>

            {/* Direct Social Links */}
            <div className="pt-2 flex items-center space-x-3">
              <a
                href="https://github.com/JasmineSingh-07"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 bg-[#0F151C] border border-[#1A232E] hover:border-[#FF756B]/50 rounded-md text-xs text-gray-300 hover:text-white flex items-center justify-center gap-2 transition-all"
              >
                <Github size={14} className="text-[#FF756B]" />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/jasminesingh07/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 bg-[#0F151C] border border-[#1A232E] hover:border-[#FF756B]/50 rounded-md text-xs text-gray-300 hover:text-white flex items-center justify-center gap-2 transition-all"
              >
                <Linkedin size={14} className="text-[#FF756B]" />
                <span>LinkedIn</span>
              </a>
            </div>

          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="md:col-span-7">
          <form onSubmit={handleSubmit} className="bg-[#0F151C] border border-[#1A232E] p-6 sm:p-8 rounded-lg space-y-5">
            {submitted ? (
              <div className="py-12 text-center space-y-3">
                <CheckCircle2 size={48} className="text-[#FF756B] mx-auto" />
                <h3 className="text-xl font-bold text-white">Message Sent!</h3>
                <p className="text-gray-400 text-sm">Thank you for reaching out, Jasmine will get back to you shortly.</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider">Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#080D11] border border-[#1A232E] focus:border-[#FF756B] rounded-md px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider">Email</label>
                    <input
                      type="email"
                      required
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#080D11] border border-[#1A232E] focus:border-[#FF756B] rounded-md px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider">Message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your project or inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#080D11] border border-[#1A232E] focus:border-[#FF756B] rounded-md px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 bg-[#FF756B] hover:bg-[#FF5C50] text-[#080D11] font-semibold text-sm rounded-md transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </>
            )}
          </form>
        </div>

      </div>
    </section>
  );
}
