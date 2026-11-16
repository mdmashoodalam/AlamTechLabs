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
  MapPin,
  FileSpreadsheet,
  Check
} from 'lucide-react';
import { agencyInfo, services } from '../data/agencyData';
import { submitLead } from '../services/leadService';

export default function ContactSection({ prefilledData, clearPrefill }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    businessType: 'Local Shop / Clinic / Service',
    service: services[0].title,
    budget: '₹3,000 (Basic Static Package)',
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

  // Form Submission: ONLY submits form and adds data into Google Sheet / Email
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await submitLead(formData);
      setLoading(false);
      setSubmitted(true);

      if (clearPrefill) clearPrefill();
    } catch (err) {
      console.error('Submission failed:', err);
      setLoading(false);
      setSubmitted(true);
    }
  };

  // Separate WhatsApp Trigger (Independent button, NOT tied to submit)
  const openWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `*DIRECT INQUIRY - ALAM TECHLABS*\n\n` +
      `👤 Name: ${formData.name || 'Visitor'}\n` +
      `📞 Phone: ${formData.phone || 'Not provided'}\n` +
      `📧 Email: ${formData.email || 'Not provided'}\n` +
      `📦 Package: ${formData.service}\n` +
      `💰 Budget: ${formData.budget}\n` +
      `📝 Requirements: ${formData.message || 'I would like to discuss getting a website made.'}`
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-widest font-bold">
            <Calendar className="w-3.5 h-3.5" />
            <span>Get Started &bull; 24 to 48-Hour Delivery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Ready to Take Your Business Online? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-300 to-indigo-400">
              Submit Your Project Scope
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Submit your details below. We review your requirements and get back to you with a free consultation and project roadmap.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start w-full">
          
          {/* Left Column: Direct Founder Contacts */}
          <div className="lg:col-span-5 space-y-6 w-full">
            <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-8 space-y-6 shadow-xl">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-emerald-400" />
                <span>Direct Contact Information</span>
              </h3>
              
              {/* Contact Cards */}
              <div className="space-y-3.5 pt-1">
                {/* Official Email */}
                <a
                  href={`mailto:${agencyInfo.founder.email}`}
                  className="flex items-center gap-3.5 p-4 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-cyan-400/50 transition group"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 group-hover:bg-cyan-500 group-hover:text-slate-950 transition">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-slate-400 font-semibold block">Official Agency Email</span>
                    <span className="text-sm font-bold text-white group-hover:text-cyan-300 transition">
                      {agencyInfo.founder.email}
                    </span>
                  </div>
                </a>

                {/* Separate WhatsApp Button */}
                <div
                  onClick={openWhatsAppDirect}
                  className="flex items-center justify-between p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 hover:border-emerald-500 cursor-pointer transition group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 group-hover:text-slate-950 transition">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase text-emerald-400 font-bold block">WhatsApp Support</span>
                      <span className="text-sm font-bold text-white">{agencyInfo.founder.phone}</span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 px-2.5 py-1 rounded-md bg-emerald-500/20 font-bold">
                    Chat Now &rarr;
                  </span>
                </div>

                {/* Phone Call */}
                <a
                  href={`tel:${agencyInfo.founder.phone}`}
                  className="flex items-center gap-3.5 p-4 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-slate-700 transition group"
                >
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0 group-hover:bg-indigo-500 group-hover:text-white transition">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-slate-400 font-semibold block">Direct Phone</span>
                    <span className="text-sm font-semibold text-white">{agencyInfo.founder.phone}</span>
                  </div>
                </a>

                {/* Office Location */}
                <div className="flex items-center gap-3.5 p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 text-slate-300 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-slate-400 font-semibold block">Location</span>
                    <span className="text-sm text-slate-300">{agencyInfo.founder.location}</span>
                  </div>
                </div>
              </div>

              {/* Guarantees */}
              <div className="pt-3 border-t border-slate-800 space-y-1.5 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  <span>Website preview ready in 24 to 48 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <span>Pay after you review and approve the live mobile preview</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Project Inquiry Form */}
          <div className="lg:col-span-7 w-full">
            <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-8 sm:p-10 shadow-2xl relative w-full">
              
              {submitted ? (
                <div className="text-center py-10 space-y-5 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border-2 border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  
                  <div className="space-y-1">
                    <h3 className="text-2xl font-black text-white">
                      Form Submitted Successfully!
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                      Your form data has been logged into our client database & Google Sheets. A copy has been routed to <strong>{agencyInfo.founder.email}</strong>.
                    </p>
                  </div>

                  {/* Status Indicator */}
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 max-w-md mx-auto space-y-2 text-left text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 flex items-center gap-1.5">
                        <FileSpreadsheet className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Google Sheet & Database:</span>
                      </span>
                      <span className="text-emerald-400 font-bold">Recorded</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Routed to Email:</span>
                      </span>
                      <span className="text-slate-300 font-mono text-[11px]">{agencyInfo.founder.email}</span>
                    </div>
                  </div>

                  <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3 rounded-xl bg-slate-800 text-slate-300 hover:text-white font-medium text-xs border border-slate-700 transition"
                    >
                      Submit Another Form
                    </button>

                    <button
                      onClick={openWhatsAppDirect}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 font-bold text-xs shadow-md transition"
                    >
                      <MessageSquare className="w-4 h-4 fill-slate-950" />
                      <span>Chat on WhatsApp (Optional)</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
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
                      <label className="text-xs font-mono uppercase text-slate-300 font-bold">Phone Number *</label>
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
                      <label className="text-xs font-mono uppercase text-slate-300 font-bold">Email Address</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="yourname@gmail.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#090D16] border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white text-sm outline-none transition"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase text-slate-300 font-bold">Website Package</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#090D16] border border-slate-800 focus:border-cyan-400 text-white text-sm outline-none transition cursor-pointer"
                      >
                        <option value="Basic Static Business Website (₹3,000)">Basic Static Business Website (₹3,000)</option>
                        <option value="Clinic & Healthcare Web Portal (₹5,000)">Clinic & Doctor Portal (₹5,000)</option>
                        <option value="Dynamic Website with Admin CMS (₹7,500)">Dynamic Website + Admin CMS (₹7,500)</option>
                        <option value="Online Store & Product Catalog (₹12,000)">Online Store / Catalog (₹12,000)</option>
                        <option value="Custom Full-Stack Software / App (₹20,000)">Custom Full-Stack App (₹20,000)</option>
                        <option value="Website Redesign & Speed Fix (₹2,500)">Website Redesign & Speed Fix (₹2,500)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase text-slate-300 font-bold">Project Details & Requirements</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your business, clinic, or shop, where you are located, and any specific requirements..."
                      className="w-full px-4 py-3 rounded-xl bg-[#090D16] border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white text-sm outline-none transition resize-none"
                    />
                  </div>

                  {/* Submit Button (Only submits form, text: "Submit Form") + Separate WhatsApp Button */}
                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:flex-1 py-4 px-6 rounded-xl font-black text-sm text-white bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-xl shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
                    >
                      {loading ? (
                        <span className="inline-block animate-spin mr-2">&#9696;</span>
                      ) : (
                        <Send className="w-4 h-4" />
                      )}
                      <span>Submit Form</span>
                    </button>

                    <button
                      type="button"
                      onClick={openWhatsAppDirect}
                      className="w-full sm:w-auto py-4 px-6 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 transition flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
                    >
                      <MessageSquare className="w-4 h-4 fill-slate-950" />
                      <span>Chat on WhatsApp</span>
                    </button>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono pt-1">
                    <span>⚡ Quick 24-48 Hr Turnaround</span>
                    <span>No Advance Full Payment Risk</span>
                    <span>Data Logged to Google Sheet</span>
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
