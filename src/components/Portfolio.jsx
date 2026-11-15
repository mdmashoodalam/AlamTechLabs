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
  ShieldCheck,
  Eye
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-widest font-bold">
              <Globe className="w-3.5 h-3.5" />
              <span>Real Client Deployments</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Featured Client Websites & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-300 to-indigo-400">
                Production Case Studies
              </span>
            </h2>
            <p className="text-slate-400 text-base max-w-2xl">
              Inspect real websites engineered for clients across healthcare, industrial supply, and e-commerce. Click to view live on the web.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-slate-900/80 p-1.5 rounded-xl border border-slate-800 self-start md:self-end shadow-md">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'live', label: '🟢 Live Client Sites' },
              { id: 'healthcare', label: 'Clinics & Doctors' },
              { id: 'commercial', label: 'Products & Software' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`text-xs font-semibold px-4 py-2 rounded-lg transition-all ${
                  filter === tab.id
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/25'
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
                className="group rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-900/50 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-cyan-950/40 overflow-hidden"
              >
                <div>
                  {/* Real Screenshot Preview (if available) */}
                  {project.image ? (
                    <div className="relative overflow-hidden bg-slate-950 border-b border-slate-800">
                      {/* Browser Frame Bar */}
                      <div className="flex items-center justify-between px-3.5 py-2 bg-[#0B0F19] border-b border-slate-800 text-[11px] font-mono text-slate-400">
                        <div className="flex items-center gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                          <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                        </div>
                        <span className="truncate max-w-[180px] text-slate-300">
                          {project.liveUrl.replace('https://', '')}
                        </span>
                        <span className="text-emerald-400 font-bold">ONLINE</span>
                      </div>

                      {/* Image Thumbnail with Zoom */}
                      <div className="relative overflow-hidden h-48 sm:h-52">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                        
                        {/* Overlay Visit Button on Hover */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-xs">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-xl shadow-emerald-500/30 transform -translate-y-1 group-hover:translate-y-0 transition-transform"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>Visit Live Website</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="h-28 bg-gradient-to-br from-indigo-950/40 to-slate-900 border-b border-slate-800 p-5 flex items-center justify-between">
                      <div className="space-y-1">
                        <span className="text-xs font-mono text-cyan-400 font-bold">Full Stack System</span>
                        <h4 className="text-base font-bold text-white">{project.title}</h4>
                      </div>
                      <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                        {project.badge}
                      </span>
                    </div>
                  )}

                  {/* Card Body */}
                  <div className="p-6">
                    {/* Meta Top Header */}
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <span className="text-xs font-mono text-cyan-400 font-bold truncate">
                        {project.client}
                      </span>
                      <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                        isLiveSite 
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' 
                          : 'bg-slate-800 text-slate-300 border border-slate-700'
                      }`}>
                        {isLiveSite ? "🟢 Live Site" : project.category}
                      </span>
                    </div>

                    {/* Project Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2.5">
                      {project.title}
                    </h3>

                    {/* Summary */}
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5">
                      {project.summary}
                    </p>

                    {/* Key Metrics Highlight Box */}
                    <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-[#090D16] border border-slate-800/80 mb-5 text-center">
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
                </div>

                {/* Bottom Tech Pills & Actions */}
                <div className="px-6 pb-6 pt-0">
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60"
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
                        className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition shadow-sm"
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
                      <Eye className="w-4 h-4" />
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
