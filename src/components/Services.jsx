import React from 'react';
import { 
  Server, 
  Layout, 
  Cloud, 
  ShieldCheck, 
  Database, 
  Rocket, 
  CheckCircle2, 
  ChevronRight,
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { services, agencyInfo } from '../data/agencyData';

const iconMap = {
  Server,
  Layout,
  Cloud,
  ShieldCheck,
  Database,
  Rocket
};

export default function Services({ onSelectService }) {
  const openWhatsAppForService = (service) => {
    const text = encodeURIComponent(
      `Hello Md Mashood Alam! I am interested in your service: ${service.title} (${service.startingPrice}). Please share more details!`
    );
    window.open(`https://wa.me/${agencyInfo.founder.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section id="services" className="py-24 relative w-full">
      {/* 100% Width Responsive Container */}
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complete Digital Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Web & Software Services Tailored for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-300 to-indigo-400">
              Local Businesses & Growing Brands
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            From affordable ₹3,000 shop & clinic websites to custom business automation systems. Every website includes 1-click WhatsApp chat and mobile optimization.
          </p>
        </div>

        {/* Services Grid - 100% Width */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Layout;
            return (
              <div
                key={service.id}
                className="group relative rounded-2xl bg-slate-900/50 border border-slate-800 p-8 hover:bg-slate-800/40 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-cyan-950/30"
              >
                {/* Top Badge & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-emerald-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 block mb-1">
                        Starts {service.startingPrice}
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono">
                        {service.timeline}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-slate-800/80">
                    {service.features.slice(0, 4).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Tech Tags & CTA */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => openWhatsAppForService(service)}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition"
                    >
                      <MessageSquare className="w-3.5 h-3.5 fill-slate-950" />
                      <span>WhatsApp Inquiry</span>
                    </button>

                    <button
                      onClick={() => onSelectService(service.title)}
                      className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition"
                      title="Request Quote"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner - 100% Width */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-emerald-500/30 flex flex-col md:flex-row items-center justify-between gap-6 w-full">
          <div className="space-y-1.5 text-center md:text-left">
            <h4 className="text-lg font-bold text-white flex items-center gap-2 justify-center md:justify-start">
              <Sparkles className="w-5 h-5 text-emerald-400" />
              <span>Have an existing website that is slow, broken, or not working on mobile?</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              We offer instant website redesigns starting at just ₹2,500. We will make it 100% mobile responsive and Google search ready within 24 hours.
            </p>
          </div>
          <button
            onClick={() => {
              const text = encodeURIComponent("Hello Mashood! I want to redesign and fix my existing website. Please share cost and steps.");
              window.open(`https://wa.me/${agencyInfo.founder.whatsapp}?text=${text}`, '_blank');
            }}
            className="shrink-0 px-6 py-3 rounded-xl bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-emerald-300 transition-all shadow-lg shadow-emerald-500/20"
          >
            Redesign Website (₹2,500)
          </button>
        </div>

      </div>
    </section>
  );
}
