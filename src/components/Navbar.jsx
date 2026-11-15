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
    { label: "Live Client Sites", href: "#work", badge: "3 Live" },
    { label: "Packages & Pricing", href: "#estimator", badge: "From ₹3k" },
    { label: "Services", href: "#services" },
    { label: "Our Process", href: "#process" },
    { label: "Why Us", href: "#why-us" },
    { label: "FAQ", href: "#faq" }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
      scrolled 
        ? 'bg-[#080B11]/95 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl shadow-cyan-950/20 py-2.5' 
        : 'bg-gradient-to-b from-[#080B11]/90 to-transparent py-4'
    }`}>
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-xl overflow-hidden p-[1.5px] bg-gradient-to-tr from-cyan-500 via-indigo-500 to-emerald-400 shadow-lg shadow-cyan-500/25 group-hover:shadow-cyan-500/50 group-hover:scale-105 transition-all duration-300 shrink-0">
              <img
                src={agencyInfo.logo}
                alt="Alam TechLabs Logo"
                className="w-full h-full object-cover rounded-[10px]"
              />
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-black text-xl tracking-tight text-white group-hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                  Alam TechLabs
                </span>
                <span className="hidden sm:inline-block text-xs font-bold px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono">
                  {agencyInfo.brandUrdu}
                </span>
              </div>
              <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 font-semibold -mt-0.5">
                Software & Web Development
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/80 border border-slate-800/90 rounded-full px-4 py-1.5 backdrop-blur-md shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative text-xs font-semibold text-slate-300 hover:text-white px-3.5 py-1.5 rounded-full hover:bg-slate-800/80 transition-all duration-200 flex items-center gap-1.5"
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className={`text-[9px] font-mono px-1.5 py-0.2 rounded-full font-bold ${
                    link.badge === "3 Live" 
                      ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" 
                      : "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                  }`}>
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Quick Phone Call */}
            <a
              href={`tel:${agencyInfo.founder.phone}`}
              className="hidden xl:flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono text-slate-300 hover:text-white hover:bg-slate-800/60 transition"
              title="Call Founder Directly"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>{agencyInfo.founder.phone}</span>
            </a>

            {/* Direct WhatsApp CTA */}
            <button
              onClick={openWhatsApp}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 rounded-xl shadow-lg shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-slate-950 text-slate-950" />
              <span>WhatsApp Chat</span>
            </button>

            {/* Book/Contact CTA */}
            <button
              onClick={onOpenContact}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 rounded-xl transition"
            >
              <span>Get Estimate</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white border border-slate-700"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
                {link.badge && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 font-bold">
                    {link.badge}
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
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-xl shadow-lg shadow-emerald-500/20"
            >
              <MessageSquare className="w-4 h-4 fill-slate-950" />
              <span>Chat on WhatsApp (Instant Quote)</span>
            </button>

            <a
              href={`tel:${agencyInfo.founder.phone}`}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-300 bg-slate-900 rounded-xl border border-slate-800"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>Call Md Mashood Alam: {agencyInfo.founder.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
