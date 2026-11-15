import React from 'react';
import { Star, MessageSquareQuote, CheckCircle2, ExternalLink } from 'lucide-react';
import { testimonials } from '../data/agencyData';

export default function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden w-full">
      {/* 100% Width Responsive Container */}
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>Client Reviews & Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Trusted by Doctors, Suppliers & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-300 to-indigo-400">
              Local Business Owners
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            See what real clients say about our speed, mobile responsiveness, and quality of work.
          </p>
        </div>

        {/* Testimonials Grid - 100% Width */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-slate-900/50 border border-slate-800 p-8 flex flex-col justify-between hover:border-slate-700 transition-all duration-300 relative group"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-6 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                  "{item.content}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-emerald-500/40"
                />
                <div>
                  <h4 className="font-bold text-white text-sm flex items-center gap-1.5">
                    {item.name}
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  </h4>
                  <p className="text-xs text-slate-400 font-mono">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
