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
  Sparkles,
  MapPin
} from 'lucide-react';
import { agencyInfo, services } from '../data/agencyData';

export default function ContactSection({ prefilledData, clearPrefill }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    businessType: 'Local Shop / Clinic / Service',
    service: services[0].title,
    budget: '₹3,000 (Basic Static Website)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (prefilledData) {
      setFormData(prev => ({
        ...prev,
        service: prefilledData.projectType || prev.service,
        budget: prefilledData.estimatedRange || prev.budget,
        message: `Package Selected: ${prefilledData.projectType || ''}\nEstimated Cost: ${prefilledData.estimatedRange || ''}\nTimeline: ${prefilledData.estimatedWeeks || ''}\nAdd-ons: ${(prefilledData.addons || []).join(', ')}\n\nBusiness Details / Address / Notes: `
      }));
    }
  }, [prefilledData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate sending lead
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      if (clearPrefill) clearPrefill();
    }, 800);
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Md Mashood Alam! I want to discuss a website for my business:\n` +
      `Name: ${formData.name || 'Not provided'}\n` +
      `Phone: ${formData.phone || 'Not provided'}\n` +
      `Service: ${formData.service}\n` +
      `Budget: ${formData.budget}\n` +
      `Details: ${formData.message || 'Looking for pricing and turnaround'}`
    );
    window.open(`https://wa.me/${agencyInfo.founder.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden w-full">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* 100% Width Responsive Container */}
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-widest">
            <Calendar className="w-3.5 h-3.5" />
            <span>Start Today &bull; 48-Hour Delivery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Ready to Take Your Business Online? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-300 to-indigo-400">
              Message Us on WhatsApp or Request a Call
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Share your business details, and we'll prepare a live mobile preview of your website within 24 to 48 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start w-full">
          
          {/* Left Column: Direct Founder Contacts */}
          <div className="lg:col-span-5 space-y-8 w-full">
            <div className="rounded-2xl bg-slate-900/70 border border-slate-800 p-8 space-y-6 shadow-xl">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-emerald-400" />
                <span>Direct Contact with Founder</span>
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Connect directly with <strong>Md Mashood Alam</strong>. You can call, WhatsApp, or request a quick callback to discuss your website requirements.
              </p>

              {/* Contact Items */}
              <div className="space-y-4 pt-2">
                <div
                  onClick={() => {
                    const text = encodeURIComponent("Hello Mashood! I would like to get a website made starting from ₹3,000.");
                    window.open(`https://wa.me/${agencyInfo.founder.whatsapp}?text=${text}`, '_blank');
                  }}
                  className="flex items-center justify-between p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 hover:border-emerald-500 cursor-pointer transition group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase text-emerald-400 block font-bold">Fastest Response</span>
                      <span className="text-sm font-bold text-white">
                        WhatsApp: +91 9572879110
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 px-2 py-1 rounded bg-emerald-500/20 font-bold">
                    Chat Now &rarr;
                  </span>
                </div>

                <a
                  href={`tel:${agencyInfo.founder.phone}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-cyan-500/40 transition group"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-slate-400 block">Direct Phone Call</span>
                    <span className="text-sm font-semibold text-white group-hover:text-cyan-300 transition">
                      {agencyInfo.founder.phone}
                    </span>
                  </div>
                </a>

                <a
                  href={`mailto:${agencyInfo.founder.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-cyan-500/40 transition group"
                >
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-slate-950 transition">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-slate-400 block">Email Address</span>
                    <span className="text-sm font-semibold text-white group-hover:text-indigo-300 transition">
                      {agencyInfo.founder.email}
                    </span>
                  </div>
                </a>
              </div>

              {/* Guarantees */}
              <div className="pt-4 border-t border-slate-800 space-y-2 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  <span>Preview ready in 24 to 48 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <span>Pay after you review and approve the live mobile preview</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7 w-full">
            <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-8 sm:p-10 shadow-2xl relative w-full">
              
              {submitted ? (
                <div className="text-center py-12 space-y-5 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Inquiry Received Successfully!
                  </h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you! Md Mashood Alam will contact you shortly on WhatsApp or phone to review your requirements and share a live mobile demo.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={openWhatsApp}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-400 text-slate-950 font-bold text-xs"
                    >
                      <MessageSquare className="w-4 h-4 fill-slate-950" />
                      <span>Speed Up: Message on WhatsApp</span>
                    </button>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-3 rounded-xl bg-slate-800 text-slate-300 hover:text-white font-medium text-xs"
                    >
                      Submit Another Query
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {prefilledData && (
                    <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between text-xs text-emerald-300">
                      <span>Loaded estimate: <strong>{prefilledData.projectType}</strong> ({prefilledData.estimatedRange})</span>
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
                      <label className="text-xs font-mono uppercase text-slate-300 font-bold">Your Name / Business Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Al-Madina Clinic / Rajesh Traders"
                        className="w-full px-4 py-3 rounded-xl bg-[#090D16] border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white text-sm outline-none transition"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase text-slate-300 font-bold">Phone Number / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 9876543210"
                        className="w-full px-4 py-3 rounded-xl bg-[#090D16] border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white text-sm outline-none transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase text-slate-300 font-bold">Website Type</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#090D16] border border-slate-800 focus:border-cyan-400 text-white text-sm outline-none transition cursor-pointer"
                      >
                        <option value="Static Business & Shop Website (₹3,000)">Static Business Website (₹3,000)</option>
                        <option value="Clinic & Healthcare Web Portal (₹5,000)">Clinic & Doctor Portal (₹5,000)</option>
                        <option value="Product Catalog & Online Store">Product Catalog / Store (₹9,999+)</option>
                        <option value="Dynamic Website with Admin CMS">Dynamic Website + Admin CMS (₹7,500)</option>
                        <option value="Website Redesign & Speed Fix">Website Redesign & Speed Fix (₹2,500)</option>
                        <option value="Custom Software / Web App">Custom Software / Web App</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase text-slate-300 font-bold">Budget Expectation</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#090D16] border border-slate-800 focus:border-cyan-400 text-white text-sm outline-none transition cursor-pointer"
                      >
                        <option value="₹3,000 (Basic Static Package)">₹3,000 (Basic Static Package)</option>
                        <option value="₹5,000 - ₹8,000">₹5,000 - ₹8,000 (Standard Clinic/CMS)</option>
                        <option value="₹10,000 - ₹15,000">₹10,000 - ₹15,000 (E-Commerce Store)</option>
                        <option value="₹20,000+">₹20,000+ (Custom Software / App)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase text-slate-300 font-bold">Business Description / Requirements</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us what your business does, what pages you need (e.g. Home, Services, Doctors, Contact), or any existing website link..."
                      className="w-full px-4 py-3 rounded-xl bg-[#090D16] border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white text-sm outline-none transition resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:flex-1 py-4 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-xl shadow-cyan-500/25 transition-all flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <span className="inline-block animate-spin mr-2">&#9696;</span>
                      ) : (
                        <Send className="w-4 h-4" />
                      )}
                      <span>Submit Website Inquiry</span>
                    </button>

                    <button
                      type="button"
                      onClick={openWhatsApp}
                      className="w-full sm:w-auto py-4 px-6 rounded-xl font-bold text-sm text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4 fill-slate-950" />
                      <span>Send on WhatsApp</span>
                    </button>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono pt-2">
                    <span>⚡ Quick 24-48 Hr Delivery</span>
                    <span>100% Mobile Ready</span>
                    <span>Direct Call with Mashood</span>
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
