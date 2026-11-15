import React from 'react';
import { GitBranch, Compass, Code, Rocket, ShieldCheck, ArrowRight } from 'lucide-react';
import { processSteps } from '../data/agencyData';

const stepIcons = [Compass, Code, ShieldCheck, Rocket];

export default function Process({ onOpenContact }) {
  return (
    <section id="process" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            <GitBranch className="w-3.5 h-3.5" />
            <span>Agile Engineering Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            How We Turn Ideas into <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
              High-Velocity Production Software
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A battle-hardened 4-step delivery pipeline designed to eliminate surprises, keep you in control, and ship on time.
          </p>
        </div>

        {/* Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, idx) => {
            const Icon = stepIcons[idx] || Compass;
            return (
              <div
                key={step.step}
                className="relative rounded-2xl bg-slate-900/60 border border-slate-800 p-6 flex flex-col justify-between hover:border-slate-700 hover:bg-slate-850 transition-all duration-300 group"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-black font-mono text-slate-600 group-hover:text-cyan-400 transition-colors">
                      {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-800 text-cyan-400 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all">
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
                    Deliverables:
                  </span>
                  <p className="text-xs font-semibold text-slate-300">
                    {step.deliverables}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Micro CTA */}
        <div className="text-center mt-12">
          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 group"
          >
            <span>Have questions about our sprint workflow? Let's talk</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}
