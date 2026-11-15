import React from 'react';
import { Github, Linkedin, Mail, MessageSquare, ArrowUp, Phone, Globe } from 'lucide-react';
import { agencyInfo } from '../data/agencyData';

export default function Footer({ onOpenContact }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070C] border-t border-slate-800/80 pt-16 pb-12 text-slate-400 w-full">
      {/* 100% Width Responsive Container */}
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Top Footer Grid - 100% Width */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-slate-800/80 w-full">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden p-[1px] bg-gradient-to-tr from-cyan-500 via-indigo-500 to-emerald-400 shrink-0">
                <img
                  src={agencyInfo.logo}
                  alt="Alam TechLabs Logo"
                  className="w-full h-full object-cover rounded-[10px]"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-lg text-white tracking-tight flex items-center gap-1.5">
                  {agencyInfo.name}
                  <span className="text-xs font-bold text-cyan-400 font-mono">({agencyInfo.brandUrdu})</span>
                </span>
                <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 -mt-1">
                  Software & Web Development Agency
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
              Professional website design and software development for local shops, clinics, showrooms, and enterprises. Complete mobile-friendly websites starting at just ₹3,000.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={`https://wa.me/${agencyInfo.founder.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 hover:bg-emerald-400 hover:text-slate-950 transition shadow-sm"
                aria-label="WhatsApp"
                title="WhatsApp Direct"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href={`tel:${agencyInfo.founder.phone}`}
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-cyan-500 transition"
                aria-label="Phone"
                title="Call Now"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${agencyInfo.founder.email}`}
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-cyan-500 transition"
                aria-label="Email"
                title="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={agencyInfo.founder.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-cyan-500 transition"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={agencyInfo.founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-cyan-500 transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Packages */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Website Packages
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#estimator" className="hover:text-cyan-400 transition">Static Shop & Business Website (₹3,000)</a></li>
              <li><a href="#estimator" className="hover:text-cyan-400 transition">Clinic & Doctor Portals (₹5,000)</a></li>
              <li><a href="#estimator" className="hover:text-cyan-400 transition">Dynamic Website + Admin CMS (₹7,500)</a></li>
              <li><a href="#estimator" className="hover:text-cyan-400 transition">Online Store & Catalogs (₹9,999+)</a></li>
              <li><a href="#estimator" className="hover:text-cyan-400 transition">Custom Software & Web Apps</a></li>
            </ul>
          </div>

          {/* Live Client Sites */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Live Client Sites
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="https://sabicmttools.com/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition flex items-center gap-1">
                  <Globe className="w-3 h-3 text-emerald-400" />
                  <span>sabicmttools.com ↗</span>
                </a>
              </li>
              <li>
                <a href="https://www.hhcc.online/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition flex items-center gap-1">
                  <Globe className="w-3 h-3 text-emerald-400" />
                  <span>hhcc.online ↗</span>
                </a>
              </li>
              <li>
                <a href="https://www.fitandphysioafzal.online/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition flex items-center gap-1">
                  <Globe className="w-3 h-3 text-emerald-400" />
                  <span>fitandphysioafzal.online ↗</span>
                </a>
              </li>
              <li><a href="#work" className="hover:text-cyan-400 transition">View All Case Studies</a></li>
            </ul>
          </div>

          {/* Founder Direct Card */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Founder & Lead
            </h4>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-2">
              <span className="font-bold text-white block">{agencyInfo.founder.name}</span>
              <span className="text-[11px] text-cyan-400 font-mono block">Software & Web Engineer</span>
              <p className="text-[11px] text-slate-400">
                Pupri, Bihar / Bengaluru (Serving Clients Worldwide)
              </p>
              <a
                href={`https://wa.me/${agencyInfo.founder.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-2 py-2 px-3 rounded-lg bg-emerald-500/20 hover:bg-emerald-400 hover:text-slate-950 text-emerald-300 font-bold text-[11px] border border-emerald-500/30 transition text-center block shadow-sm"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-slate-500">
            &copy; {new Date().getFullYear()} {agencyInfo.name}. Developed & Maintained by Md Mashood Alam.
          </div>

          <div className="flex items-center gap-6 text-slate-400 font-mono text-[11px]">
            <span>Fast 24-48 Hr Turnaround</span>
            <span>100% Mobile Ready</span>
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
