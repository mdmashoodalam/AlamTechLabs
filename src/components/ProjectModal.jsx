import React from 'react';
import { X, ExternalLink, Github, ArrowRight, ShieldAlert, Cpu } from 'lucide-react';
import { agencyInfo } from '../data/agencyData';

export default function ProjectModal({ project, onClose, onOpenContact }) {
  if (!project) return null;

  const isLiveSite = project.liveUrl && !project.liveUrl.includes('github');

  const openWhatsAppForSimilar = () => {
    const text = encodeURIComponent(
      `Hello Md Mashood Alam! I saw your client project "${project.title}" on your website and want to build a similar website for my business.`
    );
    window.open(`https://wa.me/${agencyInfo.founder.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl bg-[#0B0F19] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-[#0E1524]">
          <div className="space-y-1">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-semibold">
              {project.badge || project.category} &bull; Case Study Overview
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg bg-slate-800 hover:bg-slate-700 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto text-sm text-slate-300 leading-relaxed">
          
          {/* Executive Overview */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 font-bold">
              Project Summary
            </h4>
            <p className="text-base text-slate-200 leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Metrics Bar */}
          <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-slate-900 border border-slate-800 text-center">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-base sm:text-lg font-black text-cyan-400 font-mono">
                  {metric.value}
                </div>
                <div className="text-xs text-slate-400">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* The Technical Challenge */}
          <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 space-y-2">
            <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs uppercase tracking-wider font-mono">
              <ShieldAlert className="w-4 h-4" />
              <span>Client Requirements & Goals</span>
            </div>
            <p className="text-slate-300">
              {project.challenge}
            </p>
          </div>

          {/* The Architectural Solution */}
          <div className="p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/20 space-y-2">
            <div className="flex items-center gap-2 text-cyan-400 font-semibold text-xs uppercase tracking-wider font-mono">
              <Cpu className="w-4 h-4" />
              <span>Features Delivered</span>
            </div>
            <p className="text-slate-300">
              {project.solution}
            </p>
          </div>

          {/* Full Tech Stack Breakdown */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 font-bold">
              Technologies & Tools Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-lg bg-slate-800/80 text-cyan-300 font-mono text-xs border border-slate-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-slate-800 bg-[#0E1524] flex flex-col sm:flex-row items-center justify-between gap-4">
          {isLiveSite ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition"
            >
              <ExternalLink className="w-4 h-4 fill-slate-950" />
              <span>Visit Live Website ({project.liveUrl})</span>
            </a>
          ) : (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 hover:text-white transition"
            >
              <Github className="w-4 h-4" />
              <span>View Source Code</span>
            </a>
          )}

          <button
            onClick={() => {
              onClose();
              openWhatsAppForSimilar();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-cyan-500/25 transition"
          >
            <span>Build a Similar Website</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
