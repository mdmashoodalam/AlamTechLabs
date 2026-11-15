import React, { useState } from 'react';
import { Cpu, Terminal, ShieldCheck, Database, Cloud, Layers, CheckCircle } from 'lucide-react';
import { techStack } from '../data/agencyData';

const categoryIcons = {
  "Backend & Core": Terminal,
  "Frontend & UI/UX": Layers,
  "Cloud, DevOps & Infrastructure": Cloud,
  "Databases & Security": ShieldCheck
};

export default function TechStack() {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const currentCategory = techStack[selectedCategoryIndex];

  return (
    <section id="tech-stack" className="py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            <Cpu className="w-3.5 h-3.5" />
            <span>Modern Enterprise Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Battle-Tested Technologies <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
              Engineered for Extreme Reliability
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            We don't chase fleeting hype. We architect on robust, industry-standard languages and frameworks that guarantee long-term stability and effortless scaling.
          </p>
        </div>

        {/* Category Tab Selector */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10 max-w-4xl mx-auto">
          {techStack.map((cat, idx) => {
            const Icon = categoryIcons[cat.category] || Cpu;
            const isSelected = selectedCategoryIndex === idx;
            return (
              <button
                key={cat.category}
                onClick={() => setSelectedCategoryIndex(idx)}
                className={`p-4 rounded-xl text-left transition-all duration-200 border flex flex-col gap-2 ${
                  isSelected
                    ? 'bg-slate-800/90 border-cyan-500/60 shadow-lg shadow-cyan-500/15'
                    : 'bg-slate-900/50 border-slate-800/80 hover:bg-slate-850 hover:border-slate-700'
                }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  isSelected ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                }`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="text-xs font-bold text-white tracking-tight">
                  {cat.category}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Category Content Box */}
        <div className="rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-900/60 border border-slate-800 p-6 sm:p-10 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-800">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <span>{currentCategory.category}</span>
              </h3>
              <p className="text-slate-400 text-sm mt-1">
                {currentCategory.description}
              </p>
            </div>
            <span className="text-xs font-mono px-3 py-1.5 rounded-full bg-cyan-950/60 text-cyan-300 border border-cyan-500/30 self-start sm:self-auto">
              Production Verified
            </span>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentCategory.skills.map((skill, index) => (
              <div
                key={index}
                className="p-5 rounded-xl bg-[#090D16] border border-slate-800/90 hover:border-slate-700 transition group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-white text-base group-hover:text-cyan-400 transition">
                    {skill.name}
                  </span>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-semibold ${
                    skill.level === 'Expert' 
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                      : 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                  }`}>
                    {skill.level}
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {skill.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Architectural Guarantee Pill */}
          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400 font-mono">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Full compliance with standard Java & React coding conventions</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-cyan-400" />
              <span>Complete test coverage, Postman collections & Swagger documentation</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
