import React from 'react';
import { Terminal, Github, Linkedin, Mail, MessageSquare, ArrowUp, Heart } from 'lucide-react';
import { agencyInfo } from '../data/agencyData';

export default function Footer({ onOpenContact }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070C] border-t border-slate-800/80 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-500 p-[1px]">
                <div className="w-full h-full bg-[#080B11] rounded-[11px] flex items-center justify-center">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
              <span className="font-extrabold text-lg text-white tracking-tight">
                {agencyInfo.name}
              </span>
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Engineering enterprise-grade Spring Boot microservices, modern React web applications, and fault-tolerant AWS cloud architectures.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={agencyInfo.founder.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-500 transition"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={agencyInfo.founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-500 transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${agencyInfo.founder.email}`}
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-500 transition"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${agencyInfo.founder.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500 transition"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Engineering Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-cyan-400 transition">Enterprise Spring Boot Backends</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition">Modern React & Next.js Apps</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition">AWS Cloud Architecture & DevOps</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition">Zero-Trust AES-256 Security</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition">SQL Optimization & Tuning</a></li>
            </ul>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Company & Work
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#work" className="hover:text-cyan-400 transition">Featured Case Studies</a></li>
              <li><a href="#tech-stack" className="hover:text-cyan-400 transition">Tech Stack Explorer</a></li>
              <li><a href="#process" className="hover:text-cyan-400 transition">Our 4-Step Process</a></li>
              <li><a href="#estimator" className="hover:text-cyan-400 transition">Cost Estimator</a></li>
              <li><a href="#why-us" className="hover:text-cyan-400 transition">Why Choose Us</a></li>
              <li><a href="#faq" className="hover:text-cyan-400 transition">FAQ</a></li>
            </ul>
          </div>

          {/* Founder Direct Card */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Founder & Lead
            </h4>
            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-2">
              <span className="font-bold text-white block">{agencyInfo.founder.name}</span>
              <span className="text-[11px] text-cyan-400 font-mono block">Java & Cloud Architect</span>
              <p className="text-[11px] text-slate-400">
                Bengaluru, India &bull; Global Remote Delivery
              </p>
              <button
                onClick={onOpenContact}
                className="w-full mt-2 py-1.5 px-3 rounded-lg bg-cyan-500/10 hover:bg-cyan-500 hover:text-slate-950 text-cyan-300 font-semibold text-[11px] border border-cyan-500/30 transition text-center block"
              >
                Inquire Directly
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-1 text-slate-500">
            <span>&copy; {new Date().getFullYear()} {agencyInfo.name}. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6 text-slate-400 font-mono text-[11px]">
            <span>100% IP Handover</span>
            <span>Zero-Trust Security</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-white hover:border-slate-700 transition flex items-center gap-1"
              title="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
