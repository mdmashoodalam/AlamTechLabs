import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, MessageSquare, Phone, Sparkles, Globe } from 'lucide-react';
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

  const openWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Md Mashood Alam! I want to get a modern website for my business (starting ₹3,000). Please share details!`
    );
    window.open(`https://wa.me/${agencyInfo.founder.whatsapp}?text=${text}`, '_blank');
  };

  const navLinks = [
    { label: "Live Projects", href: "#work", live: true },
    { label: "Pricing", href: "#estimator", price: "₹3k" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Why Us", href: "#why-us" },
    { label: "FAQ", href: "#faq" }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
      scrolled 
        ? 'bg-[#080B11]/95 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl shadow-cyan-950/20 py-2.5' 
        : 'bg-gradient-to-b from-[#080B11]/95 via-[#080B11]/85 to-transparent py-3 sm:py-3.5'
    }`}>
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between gap-4">
          
          {/* ========================================================================= */}
          {/* LEFT PART: Enhanced 3D Brand Logo & Futuristic Typography Lockup */}
          {/* ========================================================================= */}
          <a href="#" className="flex items-center gap-3 group shrink-0">
            {/* 3D Glowing Brand Logo */}
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden p-[1px] bg-gradient-to-tr from-cyan-400 via-indigo-500 to-emerald-400 shadow-[0_0_15px_rgba(6,182,212,0.3)] group-hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] group-hover:scale-105 transition-all duration-300 shrink-0">
              <img
                src={agencyInfo.logo}
                alt="Alam TechLabs Logo"
                className="w-full h-full object-cover rounded-[11px]"
              />
            </div>
            
            {/* Text Hierarchy */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-black text-lg sm:text-xl tracking-tight text-white group-hover:text-cyan-300 transition-colors flex items-center">
                  Alam&nbsp;
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
                    TechLabs
                  </span>
                </span>
                
                {/* Arabic Calligraphy Pill */}
                <span className="hidden sm:inline-flex text-[11px] font-bold px-2 py-0.5 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono shadow-sm">
                  {agencyInfo.brandUrdu}
                </span>
              </div>
              
              {/* Micro Status Subtitle */}
              <div className="flex items-center gap-1.5 -mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-[10px] font-mono tracking-wider text-slate-400 font-medium uppercase">
                  Web & Software Agency
                </span>
                <span className="hidden md:inline-block text-[10px] text-slate-500">&bull;</span>
                <span className="hidden md:inline-block text-[10px] font-mono text-emerald-400 font-semibold">
                  From ₹3,000
                </span>
              </div>
            </div>
          </a>

          {/* ========================================================================= */}
          {/* CENTER PART: Enhanced Floating Frosted Capsule Dock */}
          {/* ========================================================================= */}
          <nav className="hidden lg:flex items-center gap-0.5 bg-slate-900/80 border border-slate-700/60 rounded-full px-3 py-1 backdrop-blur-xl shadow-xl shadow-black/40">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative text-[12px] font-semibold text-slate-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-slate-800/90 transition-all duration-200 flex items-center gap-1.5 group/nav"
              >
                <span>{link.label}</span>
                
                {/* Live Site Indicator */}
                {link.live && (
                  <span className="flex items-center gap-1 text-[9px] font-mono font-bold px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                    <span>3 Live</span>
                  </span>
                )}

                {/* Price Pill */}
                {link.price && (
                  <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    {link.price}
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* ========================================================================= */}
          {/* RIGHT PART: Minimized, Sleek, Proportioned Action Buttons (No Phone Digits) */}
          {/* ========================================================================= */}
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            
            {/* Minimized Call Us Button */}
            <a
              href={`tel:${agencyInfo.founder.phone}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-semibold text-slate-300 bg-slate-900/80 hover:bg-slate-800 hover:text-white border border-slate-700/80 hover:border-cyan-400/50 transition-all duration-200 shadow-sm"
              title="Call Us Directly"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>Call Us</span>
            </a>

            {/* Minimized WhatsApp CTA Button */}
            <button
              onClick={openWhatsApp}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-bold text-slate-950 bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-400 hover:from-emerald-300 hover:to-teal-300 rounded-lg shadow-md shadow-emerald-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-slate-950 text-slate-950" />
              <span>WhatsApp</span>
            </button>

            {/* Minimized Get Estimate Button */}
            <button
              onClick={onOpenContact}
              className="inline-flex items-center justify-center gap-1 px-3 py-1.5 text-[11px] font-semibold text-slate-200 hover:text-white bg-slate-800/90 hover:bg-slate-700 border border-slate-700/80 rounded-lg transition"
            >
              <span>Estimate</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-900 text-slate-300 hover:text-white border border-slate-800 shadow-md"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B0F19]/98 backdrop-blur-2xl border-b border-slate-800 px-5 pt-4 pb-6 space-y-4 mt-2 shadow-2xl animate-in fade-in slide-in-from-top-3 duration-200">
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900 border border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="text-xs font-mono font-bold text-emerald-300">Websites from ₹3,000 &bull; 48 Hrs</span>
            </div>
            <span className="text-[10px] font-mono text-slate-400">Pupri & Global</span>
          </div>

          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-slate-300 hover:text-cyan-400 hover:bg-slate-800/60 px-3 py-2.5 rounded-xl text-sm font-medium transition"
              >
                <span>{link.label}</span>
                {link.live && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-bold">
                    3 Live Sites
                  </span>
                )}
                {link.price && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 font-bold">
                    {link.price}
                  </span>
                )}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openWhatsApp();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-xl shadow-lg shadow-emerald-500/20"
            >
              <MessageSquare className="w-4 h-4 fill-slate-950" />
              <span>Chat on WhatsApp</span>
            </button>

            <a
              href={`tel:${agencyInfo.founder.phone}`}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-slate-300 bg-slate-900 rounded-xl border border-slate-800"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>Call Us</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
