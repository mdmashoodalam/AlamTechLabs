import React, { useState } from 'react';
import { 
  Server, 
  Layout, 
  Cloud, 
  ShieldCheck, 
  Database, 
  Rocket, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Layers,
  ChevronRight
} from 'lucide-react';
import { services } from '../data/agencyData';

const iconMap = {
  Server,
  Layout,
  Cloud,
  ShieldCheck,
  Database,
  Rocket
};

export default function Services({ onSelectService }) {
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <section id="services" className="py-24 relative">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            <Layers className="w-3.5 h-3.5" />
            <span>Our Engineering Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Full-Cycle Software, Web & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
              Cloud Infrastructure Services
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            We don't cut corners with bloated templates. We architect bespoke, secure, and production-tested software engineered to handle demanding workloads.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Server;
            return (
              <div
                key={service.id}
                className="group relative rounded-2xl bg-slate-900/50 border border-slate-800/80 p-8 hover:bg-slate-800/40 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-cyan-950/30"
              >
                {/* Top Badge & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-slate-800 text-cyan-300 border border-slate-700">
                      {service.highlight}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5 mb-6 pt-4 border-t border-slate-800/80">
                    {service.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Tech Tags & CTA */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800/90 text-slate-300 border border-slate-700/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onSelectService(service.title)}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-cyan-300 bg-cyan-950/30 hover:bg-cyan-500 hover:text-slate-950 border border-cyan-500/30 transition-all duration-200"
                  >
                    <span>Request Proposal for this Service</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-cyan-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold text-white flex items-center gap-2 justify-center md:justify-start">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              Need a custom tailored solution or legacy system migration?
            </h4>
            <p className="text-sm text-slate-400">
              We handle monolithic-to-microservices migrations, database performance overhauls, and full-stack re-architectures.
            </p>
          </div>
          <button
            onClick={() => onSelectService("Custom Enterprise Migration")}
            className="shrink-0 px-6 py-3 rounded-xl bg-white text-slate-900 font-bold text-xs uppercase tracking-wider hover:bg-cyan-400 hover:text-slate-950 transition-all shadow-lg shadow-white/10"
          >
            Schedule Technical Audit
          </button>
        </div>

      </div>
    </section>
  );
}
