import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  ArrowUpRight, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  Zap,
  TrendingUp,
  ShieldCheck
} from 'lucide-react';
import { caseStudies } from '../data/agencyData';

export default function Portfolio({ onOpenCaseStudy }) {
  const [filter, setFilter] = useState('all');

  const filteredProjects = caseStudies.filter(project => {
    if (filter === 'all') return true;
    if (filter === 'fullstack') return project.category.includes('Full Stack');
    if (filter === 'backend') return project.category.includes('Backend') || project.category.includes('Security');
    if (filter === 'frontend') return project.category.includes('Frontend');
    return true;
  });

  return (
    <section id="work" className="py-24 bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-widest">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Production Proven Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Featured Case Studies & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-300 to-emerald-400">
                Architectural Deployments
              </span>
            </h2>
            <p className="text-slate-400 text-base max-w-xl">
              Real systems built for performance, security, and uptime. Explore our technical solutions and measurable outcomes.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-slate-900/80 p-1.5 rounded-xl border border-slate-800 self-start md:self-end">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'fullstack', label: 'Full Stack' },
              { id: 'backend', label: 'Backend & Security' },
              { id: 'frontend', label: 'Frontend & UI' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`text-xs font-medium px-3.5 py-1.5 rounded-lg transition-all ${
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

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-900/50 border border-slate-800 hover:border-slate-700 p-8 transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-indigo-950/30"
            >
              <div>
                {/* Meta Top Header */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="text-xs font-mono text-cyan-400 font-medium">
                    {project.client}
                  </span>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                    {project.category}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-black text-white group-hover:text-cyan-300 transition-colors mb-3 flex items-center justify-between">
                  <span>{project.title}</span>
                  <button 
                    onClick={() => onOpenCaseStudy(project)}
                    className="p-1.5 rounded-lg bg-slate-800 group-hover:bg-cyan-500 group-hover:text-slate-950 text-slate-400 transition-all duration-200"
                    title="View Architectural Breakdown"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </button>
                </h3>

                {/* Summary */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {project.summary}
                </p>

                {/* Key Metrics Highlight Box */}
                <div className="grid grid-cols-3 gap-2 p-3.5 rounded-xl bg-[#090D16] border border-slate-800/80 mb-6 text-center">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="space-y-0.5">
                      <div className="text-sm font-extrabold text-cyan-400 font-mono">
                        {metric.value}
                      </div>
                      <div className="text-[11px] text-slate-400 font-medium truncate">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Tech Pills & Deep-Dive Link */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2.5 py-1 rounded bg-slate-800/70 text-slate-300 border border-slate-700/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
                  <button
                    onClick={() => onOpenCaseStudy(project)}
                    className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1.5"
                  >
                    <span>Read Architecture Breakdown</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-slate-400 hover:text-white inline-flex items-center gap-1.5"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
