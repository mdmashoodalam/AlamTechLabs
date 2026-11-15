import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  ExternalLink, 
  Sparkles, 
  MessageSquare, 
  Smartphone, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Globe,
  Zap,
  PhoneCall
} from 'lucide-react';
import { agencyInfo, caseStudies } from '../data/agencyData';

export default function Hero({ onOpenContact }) {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  // Focus on the 3 live client websites
  const clientShowcase = caseStudies.slice(0, 3);
  const currentProject = clientShowcase[activeProjectIndex];

  const openWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Md Mashood Alam! I want to make a website for my business/shop/clinic. I saw your package starting from ₹3,000. Please share details!`
    );
    window.open(`https://wa.me/${agencyInfo.founder.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden w-full">
      {/* Background Glows and Full-Width Ambient Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[550px] bg-gradient-to-b from-cyan-500/15 via-indigo-500/10 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />

      {/* 100% Width Responsive Container */}
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Local Business Hook, Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Local Market Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 shadow-inner">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider">
                Local Business Special: Complete Website From ₹3,000 &bull; Ready in 48 Hrs
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl xl:text-6xl font-black tracking-tight text-white leading-[1.15]">
              Get Your Business Online & <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
                Attract More Local Customers
              </span>
              <br />
              With a Fast, Modern Website.
            </h1>

            {/* Subtitle with Local Value Proposition */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Whether you run a <strong>clinic, local shop, showroom, school, or startup</strong>, we build high-speed, mobile-friendly websites with 1-click WhatsApp buttons, Google Maps, and fast hosting.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={openWhatsAppDirect}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-bold text-slate-950 bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-400 rounded-xl hover:from-emerald-300 hover:to-teal-300 shadow-xl shadow-emerald-500/25 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <MessageSquare className="w-5 h-5 fill-slate-950 text-slate-950" />
                <span>Order on WhatsApp (From ₹3,000)</span>
              </button>

              <a
                href="#estimator"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 rounded-xl hover:border-cyan-500/50 transition-all duration-200"
              >
                <span>Calculate Cost (₹3k - ₹20k)</span>
                <Sparkles className="w-4 h-4 text-cyan-400" />
              </a>

              <a
                href="#work"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 text-xs sm:text-sm font-semibold text-slate-400 hover:text-white transition"
              >
                <span>See Live Client Sites &darr;</span>
              </a>
            </div>

            {/* Local Market Feature Checkpoints */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3.5 border-t border-slate-800/80 max-w-2xl mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-300 font-medium">Delivered in 24–48 Hours</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-300 font-medium">100% Mobile Responsive</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-300 font-medium">Free WhatsApp Chat Button</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-300 font-medium">Google Maps Location Embed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-300 font-medium">Domain & Free SSL Support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-300 font-medium">No Advance Hidden Fees</span>
              </div>
            </div>

          </div>

          {/* Right Column: Live Client Showcase (Replacing Code Window) */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-800/90 to-slate-900/90 p-[1px] shadow-2xl shadow-cyan-950/40 border border-slate-700/80 backdrop-blur-xl">
              
              {/* Browser Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0B0F19] rounded-t-2xl border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>

                {/* Simulated URL Bar */}
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900 border border-slate-700 text-xs text-slate-300 font-mono max-w-[240px] truncate">
                  <Globe className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span className="truncate">{currentProject.liveUrl}</span>
                </div>

                <a
                  href={currentProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1 bg-cyan-950/60 px-2.5 py-1 rounded border border-cyan-500/30"
                  title="Open client website"
                >
                  <span>Visit</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Interactive Tabs for the 3 Live Client Websites */}
              <div className="grid grid-cols-3 gap-1 p-2 bg-[#0E1524] border-b border-slate-800 text-xs font-medium">
                {clientShowcase.map((p, idx) => (
                  <button
                    key={p.id}
                    onClick={() => setActiveProjectIndex(idx)}
                    className={`py-2 px-2 rounded-lg text-center transition-all truncate text-[11px] sm:text-xs ${
                      activeProjectIndex === idx
                        ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                    }`}
                  >
                    {idx === 0 ? "CMT Tools" : idx === 1 ? "Hayat Clinic" : "Fit & Physio"}
                  </button>
                ))}
              </div>

              {/* Showcase Card Content */}
              <div className="p-6 bg-[#080B11] space-y-5">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      {currentProject.badge}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      {currentProject.client}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {currentProject.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {currentProject.summary}
                  </p>
                </div>

                {/* Key Deliverables Delivered to Client */}
                <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-slate-900 border border-slate-800 text-center">
                  {currentProject.metrics.map((m, i) => (
                    <div key={i} className="space-y-0.5">
                      <div className="text-xs font-bold text-cyan-400 font-mono">{m.value}</div>
                      <div className="text-[10px] text-slate-400 truncate">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Live Link Button */}
                <div className="pt-2 flex items-center justify-between gap-3">
                  <a
                    href={currentProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-cyan-400 transition"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                    <span>View Live Website &rarr;</span>
                  </a>

                  <button
                    onClick={openWhatsAppDirect}
                    className="inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-slate-950" />
                    <span>Build Like This</span>
                  </button>
                </div>
              </div>

              {/* Bottom Verification Footer */}
              <div className="p-3 bg-[#0B0F19] border-t border-slate-800/80 rounded-b-2xl flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-slate-400 font-mono text-[11px]">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Developed & Deployed by Md Mashood Alam</span>
                </div>
                <span className="text-emerald-400 font-mono text-[11px] font-semibold">100% LIVE</span>
              </div>

            </div>
          </div>

        </div>

        {/* Global Statistics Counter Bar - 100% Width */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center w-full">
          {agencyInfo.stats.map((stat, i) => (
            <div key={i} className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-300 font-mono">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-white">{stat.label}</div>
              <div className="text-xs text-slate-400">{stat.desc}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
