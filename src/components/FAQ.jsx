import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, MessageSquare } from 'lucide-react';
import { faqs, agencyInfo } from '../data/agencyData';

export default function FAQ({ onOpenContact }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent("Hello Mashood! I have a question about getting my website made.");
    window.open(`https://wa.me/${agencyInfo.founder.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section id="faq" className="py-24 bg-[#090D16] relative w-full">
      {/* 100% Width Responsive Container */}
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Common Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Frequently Asked Questions <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-300 to-indigo-400">
              For Business Websites & Services
            </span>
          </h2>
          <p className="text-slate-400 text-base">
            Clear answers about our ₹3,000 package, turnaround time, mobile support, and WhatsApp setup.
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
                  <span className="font-bold text-white text-sm sm:text-base">
                    {faq.question}
                  </span>
                  <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center shrink-0 text-slate-400">
                    {isOpen ? <ChevronUp className="w-4 h-4 text-cyan-400" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 bg-slate-950/40 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Question Box */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-slate-900/40 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <p className="text-sm font-semibold text-white">
              Still have a specific question about your website or shop?
            </p>
            <p className="text-xs text-slate-400">
              Speak directly with Md Mashood Alam on WhatsApp or phone.
            </p>
          </div>
          <button
            onClick={openWhatsApp}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-400 text-slate-950 font-bold text-xs hover:bg-emerald-300 transition shrink-0"
          >
            <MessageSquare className="w-4 h-4 fill-slate-950" />
            <span>Ask on WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  );
}
