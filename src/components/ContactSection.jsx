import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Calendar,
  ExternalLink,
  Sparkles,
  MapPin
} from 'lucide-react';
import { agencyInfo, services } from '../data/agencyData';

export default function ContactSection({ prefilledData, clearPrefill }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: services[0].title,
    budget: '$2,500 - $5,000',
    timeline: 'Within 1 Month',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (prefilledData) {
      setFormData(prev => ({
        ...prev,
        service: prefilledData.projectType || prev.service,
        timeline: prefilledData.timeline || prev.timeline,
        message: `Estimated Scope: ${prefilledData.projectType || ''}\nSelected Addons: ${(prefilledData.addons || []).join(', ')}\nEstimated Cost: ${prefilledData.estimatedRange || ''}\nEstimated Delivery: ${prefilledData.estimatedWeeks || ''}\n\nProject Requirements: `
      }));
    }
  }, [prefilledData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate sending email / storing lead
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      if (clearPrefill) clearPrefill();
    }, 1000);
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Md Mashood Alam! I visited ${agencyInfo.name} and would like to discuss a software/web development project.`
    );
    window.open(`https://wa.me/${agencyInfo.founder.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            <Calendar className="w-3.5 h-3.5" />
            <span>Start Your Build</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Ready to Build Software That Scales? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
              Let's Architect It Together.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Schedule a 20-minute technical roadmap call or send us your scope. We will reply within 24 hours with an architectural blueprint.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Founder Contacts & Social Proof */}
          <div className="lg:col-span-5 space-y-8">
            <div className="rounded-2xl bg-slate-900/70 border border-slate-800 p-8 space-y-6 shadow-xl">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span>Direct Access to Founder</span>
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Skip the sales bureaucracy. You'll speak directly with our Lead Architect regarding technical feasibility, database schema, and delivery milestones.
              </p>

              {/* Contact Items */}
              <div className="space-y-4 pt-2">
                <a
                  href={`mailto:${agencyInfo.founder.email}`}
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-cyan-500/40 transition group"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-slate-400 block">Direct Email</span>
                    <span className="text-sm font-semibold text-white group-hover:text-cyan-300 transition">
                      {agencyInfo.founder.email}
                    </span>
                  </div>
                </a>

                <div
                  onClick={openWhatsApp}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-emerald-500/5 border border-emerald-500/20 hover:border-emerald-500/50 cursor-pointer transition group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase text-emerald-400 block">WhatsApp Direct Chat</span>
                      <span className="text-sm font-semibold text-white">
                        {agencyInfo.founder.phone}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 px-2 py-1 rounded bg-emerald-500/10">
                    Instant &rarr;
                  </span>
                </div>

                <div className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-slate-400 block">Engineering Hub</span>
                    <span className="text-sm font-semibold text-white">
                      {agencyInfo.founder.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Guarantees */}
              <div className="pt-4 border-t border-slate-800 space-y-2 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span>Guaranteed response within 24 business hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Non-Disclosure Agreement (NDA) signed upon request</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Proposal Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-8 sm:p-10 shadow-2xl relative">
              
              {submitted ? (
                <div className="text-center py-12 space-y-5 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Proposal Request Received!
                  </h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. Md Mashood Alam has received your details and will prepare a tailored technical blueprint and roadmap for your review.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={openWhatsApp}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Speed Up: Ping on WhatsApp</span>
                    </button>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white font-medium text-xs"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {prefilledData && (
                    <div className="p-3.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-between text-xs text-cyan-300">
                      <span>Loaded estimate for: <strong>{prefilledData.projectType}</strong> ({prefilledData.estimatedRange})</span>
                      <button 
                        type="button" 
                        onClick={clearPrefill}
                        className="text-slate-400 hover:text-white underline text-[11px]"
                      >
                        Reset
                      </button>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase text-slate-300 font-bold">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. David Miller"
                        className="w-full px-4 py-3 rounded-xl bg-[#090D16] border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white text-sm outline-none transition"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase text-slate-300 font-bold">Work Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="david@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#090D16] border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white text-sm outline-none transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase text-slate-300 font-bold">Primary Service</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#090D16] border border-slate-800 focus:border-cyan-400 text-white text-sm outline-none transition cursor-pointer"
                      >
                        {services.map(s => (
                          <option key={s.id} value={s.title}>{s.title}</option>
                        ))}
                        <option value="Custom Enterprise Full-Stack">Custom Enterprise Full-Stack</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase text-slate-300 font-bold">Estimated Budget (USD)</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#090D16] border border-slate-800 focus:border-cyan-400 text-white text-sm outline-none transition cursor-pointer"
                      >
                        <option value="< $2,000">Starter MVP (&lt; $2,000)</option>
                        <option value="$2,000 - $5,000">$2,000 - $5,000 (Standard)</option>
                        <option value="$5,000 - $10,000">$5,000 - $10,000 (Enterprise Tier)</option>
                        <option value="$10,000+">$10,000+ (High Concurrency System)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase text-slate-300 font-bold">Project Goals & Scope</label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe what you are looking to build, desired features, deadlines, or existing codebase..."
                      className="w-full px-4 py-3 rounded-xl bg-[#090D16] border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white text-sm outline-none transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-xl shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <span className="inline-block animate-spin mr-2">&#9696;</span>
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                    <span>Send Technical Inquiry & Request Proposal</span>
                  </button>

                  <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono pt-2">
                    <span>100% Confidential</span>
                    <span>No Spam Guarantee</span>
                    <span>Direct WhatsApp Option Available</span>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
