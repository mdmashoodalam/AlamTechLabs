import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  ArrowUpRight, 
  CheckCircle2, 
  Globe,
  Sparkles,
  Smartphone,
  ShieldCheck
} from 'lucide-react';
import { caseStudies } from '../data/agencyData';

export default function Portfolio({ onOpenCaseStudy }) {
  const [filter, setFilter] = useState('all');

  const filteredProjects = caseStudies.filter(project => {
    if (filter === 'all') return true;
    if (filter === 'live') return project.liveUrl && project.liveUrl.startsWith('https://') && !project.liveUrl.includes('github');
    if (filter === 'healthcare') return project.category.includes('Healthcare') || project.category.includes('Physiotherapy');
    if (filter === 'commercial') return project.category.includes('Catalog') || project.category.includes('Full Stack');
    return true;
  });

  return (
    <section id="work" className="py-24 bg-slate-950/40 relative w-full">
      {/* 100% Width Responsive Container */}
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-widest">
              <Globe className="w-3.5 h-3.5" />
              <span>Verified Client Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Real Websites Developed for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-300 to-indigo-400">
                Clinics, Showrooms & Businesses
              </span>
            </h2>
            <p className="text-slate-400 text-base max-w-2xl">
              Don't just take our word for it. Click the links below to test the actual live websites we engineered and launched for our clients.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-slate-900/80 p-1.5 rounded-xl border border-slate-800 self-start md:self-end">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'live', label: '🟢 Live Client Sites' },
              { id: 'healthcare', label: 'Clinics & Doctors' },
              { id: 'commercial', label: 'Products & Software' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`text-xs font-medium px-3.5 py-2 rounded-lg transition-all ${
                  filter === tab.id
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid - 100% Width */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {filteredProjects.map((project) => {
            const isLiveSite = project.liveUrl && !project.liveUrl.includes('github');
            return (
              <div
                key={project.id}
                className="group rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-900/50 border border-slate-800 hover:border-cyan-500/40 p-7 transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-cyan-950/30"
              >
                <div>
                  {/* Meta Top Header */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="text-xs font-mono text-cyan-400 font-semibold truncate">
                      {project.client}
                    </span>
                    <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                      isLiveSite 
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' 
                        : 'bg-slate-800 text-slate-300 border border-slate-700'
                    }`}>
                      {isLiveSite ? "🟢 Live Website" : project.category}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-3">
                    {project.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                    {project.summary}
                  </p>

                  {/* Key Metrics Highlight Box */}
                  <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-[#090D16] border border-slate-800/80 mb-6 text-center">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="space-y-0.5">
                        <div className="text-xs sm:text-sm font-bold text-cyan-400 font-mono">
                          {metric.value}
                        </div>
                        <div className="text-[10px] text-slate-400 truncate">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Tech Pills & Live External Link */}
                <div className="pt-2">
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/70 text-slate-300 border border-slate-700/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-800/80 gap-3">
                    {isLiveSite ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition"
                      >
                        <ExternalLink className="w-3.5 h-3.5 fill-slate-950" />
                        <span>Visit Live Site</span>
                      </a>
                    ) : (
                      <button
                        onClick={() => onOpenCaseStudy(project)}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold text-cyan-400 bg-slate-800 hover:bg-slate-700 transition"
                      >
                        <span>View Architecture</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    )}

                    <button
                      onClick={() => onOpenCaseStudy(project)}
                      className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition"
                      title="Read Full Case Study"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
