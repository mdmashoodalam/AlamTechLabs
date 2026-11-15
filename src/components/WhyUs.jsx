import React from 'react';
import { Check, X, Award, MessageSquare, Phone } from 'lucide-react';
import { agencyInfo } from '../data/agencyData';

export default function WhyUs({ onOpenContact }) {
  const comparisonRows = [
    {
      feature: "Starting Price",
      us: "Transparent ₹3,000 for complete static website",
      traditional: "High agency charges (₹15,000 - ₹30,000+)",
      freelancer: "Cheap quotes but hidden charges for domain/SSL"
    },
    {
      feature: "Turnaround Time",
      us: "Fast 24 to 48 Hours delivery with live preview",
      traditional: "Weeks of corporate meetings & delays",
      freelancer: "Often delayed or unfinished work"
    },
    {
      feature: "Mobile & 4G/5G Speed",
      us: "100% responsive, high-speed mobile optimization",
      traditional: "Heavy, bloated WordPress templates",
      freelancer: "Basic layouts with mobile alignment issues"
    },
    {
      feature: "Local Customer Actions",
      us: "1-Click WhatsApp chat button & Google Maps listing",
      traditional: "Only standard email contact forms",
      freelancer: "Minimal integration support"
    },
    {
      feature: "Direct Support & Revisions",
      us: "Direct WhatsApp & phone call with Md Mashood Alam",
      traditional: "Third-party customer service reps",
      freelancer: "Risk of disappearing after payment"
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-[#080C14] relative w-full">
      {/* 100% Width Responsive Container */}
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            <Award className="w-3.5 h-3.5" />
            <span>The AlamTech Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Why Local Business Owners Choose <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-300 to-indigo-400">
              AlamTech Labs
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            See how our transparent pricing, direct WhatsApp communication, and rapid 48-hour delivery beat outdated agencies.
          </p>
        </div>

        {/* Comparison Table - 100% Width */}
        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/60 shadow-2xl w-full">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-950/80">
                <th className="p-4 sm:p-5 text-xs font-mono uppercase text-slate-400 w-1/4">Feature / Guarantee</th>
                <th className="p-4 sm:p-5 text-xs font-mono uppercase text-emerald-400 bg-emerald-950/30 border-x border-emerald-500/30 w-1/3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>{agencyInfo.name}</span>
                  </div>
                </th>
                <th className="p-4 sm:p-5 text-xs font-mono uppercase text-slate-400 w-1/4">Traditional Agencies</th>
                <th className="p-4 sm:p-5 text-xs font-mono uppercase text-slate-400 w-1/4">Random Freelancers</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-xs sm:text-sm">
              {comparisonRows.map((row, index) => (
                <tr key={index} className="hover:bg-slate-800/20 transition">
                  <td className="p-4 sm:p-5 font-semibold text-white">
                    {row.feature}
                  </td>
                  <td className="p-4 sm:p-5 font-semibold text-emerald-300 bg-emerald-950/20 border-x border-emerald-500/20">
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{row.us}</span>
                    </div>
                  </td>
                  <td className="p-4 sm:p-5 text-slate-400">
                    <div className="flex items-start gap-2">
                      <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <span>{row.traditional}</span>
                    </div>
                  </td>
                  <td className="p-4 sm:p-5 text-slate-400">
                    <div className="flex items-start gap-2">
                      <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <span>{row.freelancer}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Founder Spotlight Card - 100% Width */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border border-slate-800 flex flex-col lg:flex-row items-center gap-8 w-full">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-tr from-cyan-500 to-emerald-500 p-1 shrink-0 shadow-xl shadow-cyan-500/20">
            <div className="w-full h-full rounded-[14px] bg-[#0A0E17] flex items-center justify-center text-3xl font-black text-cyan-400 font-mono">
              MA
            </div>
          </div>
          <div className="space-y-3 text-center lg:text-left flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {agencyInfo.founder.name}
                </h3>
                <p className="text-xs font-mono text-cyan-400">
                  {agencyInfo.founder.role} &bull; Local & Global Web Engineering
                </p>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-3">
                <a
                  href={`https://wa.me/${agencyInfo.founder.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-emerald-400 hover:text-emerald-300 border border-emerald-500/30 rounded-lg px-3 py-1.5 bg-emerald-500/10 transition flex items-center gap-1.5 font-bold"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Me Directly</span>
                </a>
                <a
                  href={`tel:${agencyInfo.founder.phone}`}
                  className="text-xs font-mono text-slate-300 hover:text-white border border-slate-700 rounded-lg px-3 py-1.5 bg-slate-800 transition flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call {agencyInfo.founder.phone}</span>
                </a>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-4xl">
              "Whether you want a simple static business website for ₹3,000 or a full-scale web application for your clinic or business, you talk directly with me. No junior interns, no middlemen. I build it, I test it on mobile, and I ensure you get the best quality website to attract customers."
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
