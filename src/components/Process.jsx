import React from 'react';
import { Compass, Code, ShieldCheck, Rocket, ArrowRight, MessageSquare } from 'lucide-react';
import { processSteps, agencyInfo } from '../data/agencyData';

const stepIcons = [Compass, Code, ShieldCheck, Rocket];

export default function Process({ onOpenContact }) {
  const openWhatsApp = () => {
    const text = encodeURIComponent("Hello Mashood! I want to understand how we can start my website step-by-step.");
    window.open(`https://wa.me/${agencyInfo.founder.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section id="process" className="py-24 relative w-full">
      {/* 100% Width Responsive Container */}
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            <Compass className="w-3.5 h-3.5" />
            <span>Simple 4-Step Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            How We Get Your Business Online in <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-300 to-indigo-400">
              Just 24 to 48 Hours
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            No technical headaches for you. Send us your business photos and details on WhatsApp, and we take care of the entire design, hosting, and launch.
          </p>
        </div>

        {/* Process Cards Grid - 100% Width */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {processSteps.map((step, idx) => {
            const Icon = stepIcons[idx] || Compass;
            return (
              <div
                key={step.step}
                className="relative rounded-2xl bg-slate-900/60 border border-slate-800 p-7 flex flex-col justify-between hover:border-slate-700 hover:bg-slate-850 transition-all duration-300 group"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black font-mono text-slate-600 group-hover:text-cyan-400 transition-colors">
                      {step.step}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-slate-800 text-cyan-400 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block mb-1">
                    What You Get:
                  </span>
                  <p className="text-xs font-semibold text-emerald-400">
                    {step.deliverables}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Micro CTA */}
        <div className="text-center mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={openWhatsApp}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-400 text-slate-950 font-bold text-xs hover:bg-emerald-300 transition"
          >
            <MessageSquare className="w-4 h-4 fill-slate-950" />
            <span>Chat With Md Mashood Alam on WhatsApp</span>
          </button>
          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition"
          >
            <span>Or request a phone call &rarr;</span>
          </button>
        </div>

      </div>
    </section>
  );
}
