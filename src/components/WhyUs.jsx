import React from 'react';
import { Check, X, ShieldAlert, Award, Zap, Code2, Users2, Lock } from 'lucide-react';
import { agencyInfo } from '../data/agencyData';

export default function WhyUs({ onOpenContact }) {
  const comparisonRows = [
    {
      feature: "Engineering Talent Level",
      us: "Senior Solutions Architect & Java Full-Stack Lead (Md Mashood Alam)",
      traditional: "Junior developers with non-technical account managers",
      freelancer: "Variable, often unpredictable skill levels"
    },
    {
      feature: "Backend Architecture",
      us: "Enterprise Spring Boot, 3-layer MVC, JPA tuning & microservices",
      traditional: "Generic boilerplates or bloated monolithic CMS",
      freelancer: "Basic scripts without scalability tests"
    },
    {
      feature: "Security & Encryption",
      us: "Military-grade AES-256, OAuth2/JWT & OWASP hardening",
      traditional: "Standard basic authentication only",
      freelancer: "Often ignored, leaving major vulnerabilities"
    },
    {
      feature: "Code & IP Ownership",
      us: "100% full IP transfer, clean repos, CI/CD pipelines & docs",
      traditional: "Vendor lock-in or licensing restrictions",
      freelancer: "Ambiguous ownership & messy handover"
    },
    {
      feature: "Communication & Velocity",
      us: "Direct engineer WhatsApp/Slack + weekly staging demos",
      traditional: "Slow email ticketing through project managers",
      freelancer: "Communication blackouts & ghosting risk"
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-[#080C14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            <Award className="w-3.5 h-3.5" />
            <span>The Agency Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Why Visionary Founders Choose <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
              AlamTech Labs
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Compare our engineering standards against legacy bloated agencies and erratic freelance marketplaces.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/60 shadow-2xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-950/80">
                <th className="p-4 sm:p-5 text-xs font-mono uppercase text-slate-400 w-1/4">Key Capability</th>
                <th className="p-4 sm:p-5 text-xs font-mono uppercase text-cyan-400 bg-cyan-950/30 border-x border-cyan-500/30 w-1/3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                    <span>{agencyInfo.name}</span>
                  </div>
                </th>
                <th className="p-4 sm:p-5 text-xs font-mono uppercase text-slate-400 w-1/4">Big Agency</th>
                <th className="p-4 sm:p-5 text-xs font-mono uppercase text-slate-400 w-1/4">Freelancers</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-xs sm:text-sm">
              {comparisonRows.map((row, index) => (
                <tr key={index} className="hover:bg-slate-800/20 transition">
                  <td className="p-4 sm:p-5 font-semibold text-white">
                    {row.feature}
                  </td>
                  <td className="p-4 sm:p-5 font-semibold text-cyan-300 bg-cyan-950/20 border-x border-cyan-500/20">
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

        {/* Founder Spotlight Card */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border border-slate-800 flex flex-col lg:flex-row items-center gap-8">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-1 shrink-0 shadow-xl shadow-cyan-500/20">
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
                  {agencyInfo.founder.role}
                </p>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-3">
                <a
                  href={agencyInfo.founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-slate-300 hover:text-cyan-400 border border-slate-700 rounded-lg px-3 py-1 bg-slate-850 transition"
                >
                  LinkedIn Profile &rarr;
                </a>
                <a
                  href={agencyInfo.founder.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-slate-300 hover:text-cyan-400 border border-slate-700 rounded-lg px-3 py-1 bg-slate-850 transition"
                >
                  GitHub Repo &rarr;
                </a>
              </div>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
              "{agencyInfo.founder.bio} Every client who joins AlamTech Labs gets my direct engineering oversight, from the initial architecture schema to the final zero-downtime production launch."
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
