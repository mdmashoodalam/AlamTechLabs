import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, MessageSquare, Phone } from 'lucide-react';
import { agencyInfo } from '../data/agencyData';

export default function Navbar({ onOpenContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Handle scroll appearance & active section spy
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section spy
      const sections = ['work', 'estimator', 'services', 'process', 'why-us', 'faq'];
      const scrollPosition = window.scrollY + 140;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Md Mashood Alam! I want to discuss a website project for my business with AlamTechLabs (starting ₹3,000).`
    );
    window.open(`https://wa.me/${agencyInfo.founder.whatsapp}?text=${text}`, '_blank');
  };

  const navLinks = [
    { label: "Live Projects", href: "#work", id: "work", badge: "3 Live", badgeType: "emerald" },
    { label: "Pricing", href: "#estimator", id: "estimator", badge: "₹3k", badgeType: "cyan" },
    { label: "Services", href: "#services", id: "services" },
    { label: "Process", href: "#process", id: "process" },
    { label: "Why Us", href: "#why-us", id: "why-us" },
    { label: "FAQ", href: "#faq", id: "faq" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
        scrolled
          ? 'bg-[#080B10]/90 backdrop-blur-xl border-b border-[rgba(148,163,184,0.12)] shadow-[0_8px_30px_rgba(0,0,0,0.6)] py-2.5'
          : 'bg-gradient-to-b from-[#080B10]/95 via-[#080B10]/80 to-transparent py-4'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
        <div className="flex items-center justify-between gap-4">
          
          {/* ========================================================================= */}
          {/* LEFT SECTION — BRAND IDENTITY                                            */}
          {/* ========================================================================= */}
          <a
            href="#"
            className="flex items-center gap-3 group shrink-0 select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE]/50 rounded-xl"
            aria-label="AlamTechLabs Home"
          >
            {/* Logo Container with Refined Rounded Geometry & Subtle Ambient Cyan Glow */}
            <div className="relative w-10 h-10 rounded-xl overflow-hidden p-[1px] bg-gradient-to-tr from-[#22D3EE]/60 via-[#10B981]/40 to-[#818CF8]/50 shadow-[0_0_18px_rgba(34,211,238,0.22)] group-hover:shadow-[0_0_24px_rgba(34,211,238,0.4)] group-hover:scale-[1.03] transition-all duration-300 shrink-0">
              <div className="w-full h-full bg-[#080B10] rounded-[11px] overflow-hidden">
                <img
                  src={agencyInfo.logo}
                  alt="AlamTechLabs"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Typography Hierarchy */}
            <div className="flex flex-col">
              {/* Primary Name + Arabic Identifier Badge */}
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-[17px] sm:text-[18px] tracking-tight leading-none text-[#F8FAFC]">
                  Alam<span className="text-[#22D3EE] font-black">TechLabs</span>
                </span>

                {/* Refined Arabic Identifier Badge */}
                <span className="inline-flex items-center justify-center text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-[#101725] border border-[rgba(148,163,184,0.18)] text-[#22D3EE] font-mono leading-none shadow-sm">
                  {agencyInfo.brandUrdu}
                </span>
              </div>

              {/* Tagline Subtitle + Emerald Availability Indicator */}
              <div className="flex items-center gap-1.5 mt-1">
                <span className="text-[9.5px] font-mono uppercase tracking-[0.08em] font-medium text-[#A1AAB8] leading-none">
                  {agencyInfo.tagline || "WEB & SOFTWARE AGENCY"}
                </span>
                <span className="inline-block text-[#A1AAB8]/40 text-[9px]">&bull;</span>
                <div className="flex items-center gap-1">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#10B981]"></span>
                  </span>
                  <span className="text-[9.5px] font-mono font-semibold text-[#10B981] leading-none">
                    From ₹3,000
                  </span>
                </div>
              </div>
            </div>
          </a>

          {/* ========================================================================= */}
          {/* CENTER SECTION — FLOATING NAVIGATION PILL                                */}
          {/* ========================================================================= */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-1 bg-[#101725]/85 border border-[rgba(148,163,184,0.16)] rounded-full p-1 backdrop-blur-xl shadow-[0_10px_25px_-5px_rgba(0,0,0,0.5)]"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`relative text-[12px] font-medium tracking-tight px-3.5 py-1.5 rounded-full transition-all duration-200 flex items-center gap-1.5 select-none ${
                    isActive
                      ? 'bg-[#151D2A] text-[#22D3EE] shadow-sm font-semibold'
                      : 'text-[#A1AAB8] hover:text-[#F8FAFC] hover:bg-[#151D2A]/60'
                  }`}
                >
                  <span>{link.label}</span>

                  {/* Live Badge (Emerald) */}
                  {link.badge && link.badgeType === 'emerald' && (
                    <span className="inline-flex items-center gap-1 text-[9px] font-mono font-bold px-1.5 py-0.5 rounded-full bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30 leading-none">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse"></span>
                      <span>{link.badge}</span>
                    </span>
                  )}

                  {/* Pricing Badge (Cyan) */}
                  {link.badge && link.badgeType === 'cyan' && (
                    <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded-full bg-[#22D3EE]/15 text-[#22D3EE] border border-[#22D3EE]/30 leading-none">
                      {link.badge}
                    </span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* ========================================================================= */}
          {/* RIGHT SECTION — ACTION BUTTONS                                           */}
          {/* ========================================================================= */}
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            
            {/* 1. Primary Contact Action (Call Us) */}
            <a
              href={`tel:${agencyInfo.founder.phone}`}
              className="inline-flex items-center justify-center gap-1.5 h-9 px-3 rounded-lg text-[12px] font-semibold text-[#F8FAFC] bg-[#101725]/80 hover:bg-[#151D2A] border border-[rgba(148,163,184,0.18)] hover:border-[#22D3EE]/40 transition-all duration-200 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE]/50"
              title="Call Us Directly"
            >
              <Phone className="w-3.5 h-3.5 text-[#22D3EE]" />
              <span>Call Us</span>
            </a>

            {/* 2. Secondary Contact Action (WhatsApp - Most Prominent CTA) */}
            <button
              onClick={openWhatsApp}
              className="group/wa inline-flex items-center justify-center gap-1.5 h-9 px-3.5 rounded-lg text-[12px] font-bold text-[#080B10] bg-gradient-to-r from-[#10B981] to-[#22D3EE] hover:from-[#059669] hover:to-[#06B6D4] shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:shadow-[0_0_25px_rgba(16,185,129,0.45)] transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981]/50"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-[#080B10] text-[#080B10]" />
              <span>WhatsApp</span>
            </button>

            {/* 3. Estimate Action */}
            <button
              onClick={onOpenContact}
              className="group/est inline-flex items-center justify-center gap-1.5 h-9 px-3.5 rounded-lg text-[12px] font-medium text-[#F8FAFC] bg-[#151D2A] hover:bg-[#1E293B] border border-[rgba(148,163,184,0.18)] hover:border-[#22D3EE]/40 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE]/50"
              title="Calculate Cost Estimate"
            >
              <span>Estimate</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#A1AAB8] group-hover/est:text-[#22D3EE] group-hover/est:translate-x-0.5 transition-all duration-200" />
            </button>
          </div>

          {/* ========================================================================= */}
          {/* MOBILE MENU TOGGLE BUTTON                                                */}
          {/* ========================================================================= */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-[#101725] text-[#A1AAB8] hover:text-[#F8FAFC] border border-[rgba(148,163,184,0.16)] hover:border-[#22D3EE]/40 shadow-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE]/50"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#22D3EE]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* MOBILE NAVIGATION DRAWER                                                 */}
      {/* ========================================================================= */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#080B10]/98 backdrop-blur-2xl border-b border-[rgba(148,163,184,0.16)] px-5 pt-4 pb-6 space-y-4 mt-2 shadow-[0_20px_40px_rgba(0,0,0,0.8)] animate-in fade-in slide-in-from-top-3 duration-200">
          
          {/* Availability Status Bar */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-[#101725] border border-[rgba(148,163,184,0.16)]">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span>
              </span>
              <span className="text-[12px] font-mono font-bold text-[#F8FAFC]">
                Websites from ₹3,000 &bull; Ready in 48 Hrs
              </span>
            </div>
            <span className="text-[10px] font-mono font-medium text-[#22D3EE] px-2 py-0.5 rounded bg-[#22D3EE]/10 border border-[#22D3EE]/20">
              Open Q1/Q2
            </span>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-[#A1AAB8] hover:text-[#22D3EE] hover:bg-[#101725] px-3.5 py-2.5 rounded-xl text-[13px] font-medium transition-colors"
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span
                    className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${
                      link.badgeType === 'emerald'
                        ? 'bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30'
                        : 'bg-[#22D3EE]/15 text-[#22D3EE] border border-[#22D3EE]/30'
                    }`}
                  >
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
          </div>

          {/* Mobile Action Buttons */}
          <div className="pt-3 border-t border-[rgba(148,163,184,0.14)] flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openWhatsApp();
              }}
              className="w-full flex items-center justify-center gap-2 h-11 px-4 text-[13px] font-bold text-[#080B10] bg-gradient-to-r from-[#10B981] to-[#22D3EE] rounded-xl shadow-lg shadow-[#10B981]/20 active:scale-[0.99] transition-transform"
            >
              <MessageSquare className="w-4 h-4 fill-[#080B10]" />
              <span>Chat on WhatsApp</span>
            </button>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={`tel:${agencyInfo.founder.phone}`}
                className="flex items-center justify-center gap-1.5 h-10 px-3 text-[12px] font-semibold text-[#F8FAFC] bg-[#101725] rounded-xl border border-[rgba(148,163,184,0.18)] hover:bg-[#151D2A] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#22D3EE]" />
                <span>Call Us</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="flex items-center justify-center gap-1.5 h-10 px-3 text-[12px] font-medium text-[#F8FAFC] bg-[#151D2A] rounded-xl border border-[rgba(148,163,184,0.18)] hover:bg-[#1E293B] transition-colors"
              >
                <span>Estimate</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#22D3EE]" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
