import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X, ArrowRight, Sparkles, PhoneCall } from 'lucide-react';
import { agencyInfo } from '../data/agencyData';

export default function Navbar({ onOpenContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Case Studies", href: "#work" },
    { label: "Tech Stack", href: "#tech-stack" },
    { label: "Process", href: "#process" },
    { label: "Estimator", href: "#estimator" },
    { label: "Why Us", href: "#why-us" },
    { label: "FAQ", href: "#faq" }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#080B11]/90 backdrop-blur-md border-b border-slate-800/80 shadow-2xl py-3.5' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-violet-500 p-[1.5px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all duration-300">
              <div className="w-full h-full bg-[#080B11] rounded-[10px] flex items-center justify-center">
                <Terminal className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg tracking-tight text-white flex items-center gap-1.5">
                {agencyInfo.name}
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block animate-pulse"></span>
              </span>
              <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 -mt-1">
                Software & Cloud Labs
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 border border-slate-800/60 rounded-full px-5 py-1.5 backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-cyan-400 px-3 py-1.5 rounded-full hover:bg-white/5 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>Open for Q1/Q2</span>
            </div>

            <a
              href="#estimator"
              className="text-xs font-semibold text-slate-300 hover:text-white px-3 py-2 transition"
            >
              Cost Estimator
            </a>

            <button
              onClick={onOpenContact}
              className="relative inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-lg hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Book Call</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-slate-800/80 text-slate-300 hover:text-white border border-slate-700/60"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B0F19]/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-4 pb-6 space-y-3 mt-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono w-fit">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Available for new projects</span>
          </div>

          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 px-3 py-2.5 rounded-lg text-sm font-medium transition"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2">
            <a
              href="#estimator"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center text-sm font-medium text-slate-300 py-2.5 rounded-lg bg-slate-800/60 border border-slate-700/60"
            >
              Estimate Project Cost
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-lg shadow-lg shadow-cyan-500/20"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Schedule Discovery Call</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
