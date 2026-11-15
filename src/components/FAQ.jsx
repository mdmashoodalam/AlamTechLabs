import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { faqs } from '../data/agencyData';

export default function FAQ({ onOpenContact }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-24 bg-[#090D16] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Everything You Need to Know Before <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
              Starting Your Project
            </span>
          </h2>
          <p className="text-slate-400 text-base">
            Honest answers regarding contracts, IP ownership, sprint cadence, and technical guarantees.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl border border-slate-800 bg-slate-900/60 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-850/50 transition"
                >
                  <span className="font-bold text-white text-base">
                    {faq.question}
                  </span>
                  <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center shrink-0 text-slate-400">
                    {isOpen ? <ChevronUp className="w-4 h-4 text-cyan-400" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 bg-slate-950/40 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Question Box */}
        <div className="mt-12 text-center p-6 rounded-xl bg-slate-900/40 border border-slate-800">
          <p className="text-sm text-slate-400">
            Have a question that isn't answered here?
          </p>
          <button
            onClick={onOpenContact}
            className="mt-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
          >
            Send a direct inquiry to Md Mashood Alam &rarr;
          </button>
        </div>

      </div>
    </section>
  );
}
