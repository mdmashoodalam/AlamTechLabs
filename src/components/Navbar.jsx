import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X, ArrowRight, MessageSquare, PhoneCall } from 'lucide-react';
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
      `Hello Md Mashood Alam! I would like to get a website for my business (starting ₹3,000). Please share details!`
    );
    window.open(`https://wa.me/${agencyInfo.founder.whatsapp}?text=${text}`, '_blank');
  };

  const navLinks = [
    { label: "Packages & Pricing", href: "#estimator" },
    { label: "Live Client Sites", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Our Process", href: "#process" },
    { label: "Why Us", href: "#why-us" },
    { label: "FAQ", href: "#faq" }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
      scrolled 
        ? 'bg-[#080B11]/95 backdrop-blur-md border-b border-slate-800/80 shadow-2xl py-3' 
        : 'bg-transparent py-4'
    }`}>
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-emerald-500 p-[1.5px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all duration-300">
              <div className="w-full h-full bg-[#080B11] rounded-[10px] flex items-center justify-center">
                <Terminal className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg tracking-tight text-white flex items-center gap-1.5">
                {agencyInfo.name}
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
              </span>
              <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 -mt-1">
                Web & Software Agency
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 border border-slate-800/60 rounded-full px-5 py-1.5 backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-medium text-slate-300 hover:text-cyan-400 px-3.5 py-1.5 rounded-full hover:bg-white/5 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>Website Starts ₹3,000</span>
            </div>

            <button
              onClick={openWhatsApp}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg shadow-lg shadow-emerald-500/20 transition-all transform hover:-translate-y-0.5"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-slate-950" />
              <span>WhatsApp Chat</span>
            </button>

            <button
              onClick={onOpenContact}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition"
            >
              <span>Get Call Back</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white border border-slate-700"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B0F19] border-b border-slate-800 px-5 pt-4 pb-6 space-y-3 mt-2 shadow-2xl">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono w-fit">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Static Websites from ₹3,000 &bull; Ready in 48 Hrs</span>
          </div>

          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-300 hover:text-cyan-400 hover:bg-slate-800/60 px-3 py-2.5 rounded-lg text-sm font-medium transition"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openWhatsApp();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-slate-950 bg-emerald-400 rounded-xl"
            >
              <MessageSquare className="w-4 h-4 fill-slate-950" />
              <span>Message on WhatsApp (₹3,000)</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-300 bg-slate-800 rounded-xl border border-slate-700"
            >
              <PhoneCall className="w-3.5 h-3.5 text-cyan-400" />
              <span>Request Phone Call</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
