import React, { useState } from 'react';
import { 
  Calculator, 
  Check, 
  ArrowRight, 
  Sparkles, 
  Clock, 
  MessageSquare, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  Star,
  Flame,
  Phone,
  HelpCircle
} from 'lucide-react';
import { estimatorData, agencyInfo } from '../data/agencyData';

export default function ProjectEstimator({ onOpenContactWithDetails }) {
  const [selectedType, setSelectedType] = useState(estimatorData.projectTypes[0]); // Base static website ₹3,000
  const [selectedAddons, setSelectedAddons] = useState([
    estimatorData.featureAddons[0], // WhatsApp Button (Free)
  ]);
  const [selectedTimeline, setSelectedTimeline] = useState(estimatorData.timelines[0]);

  const toggleAddon = (addon) => {
    if (selectedAddons.some(a => a.id === addon.id)) {
      setSelectedAddons(selectedAddons.filter(a => a.id !== addon.id));
    } else {
      setSelectedAddons([...selectedAddons, addon]);
    }
  };

  // Calculations in INR (₹)
  const addonsPrice = selectedAddons.reduce((sum, a) => sum + a.price, 0);
  const rawPrice = Math.round((selectedType.basePrice + addonsPrice) * selectedTimeline.multiplier);

  const handleWhatsAppOrder = () => {
    const addonsList = selectedAddons.map(a => a.name).join(', ') || 'None';
    const text = encodeURIComponent(
      `Hello Md Mashood Alam! I selected a package on Alam TechLabs:\n\n` +
      `📦 Package: ${selectedType.name}\n` +
      `⏱️ Delivery: ${selectedType.baseDays}\n` +
      `✨ Add-ons: ${addonsList}\n` +
      `💰 Total Estimated Price: ₹${rawPrice.toLocaleString()}\n\n` +
      `I want to start my website with this package. Please guide me on what details to send!`
    );
    window.open(`https://wa.me/${agencyInfo.founder.whatsapp}?text=${text}`, '_blank');
  };

  const handleBookWithQuote = () => {
    const details = {
      projectType: selectedType.name,
      addons: selectedAddons.map(a => a.name),
      timeline: selectedTimeline.name,
      estimatedRange: `₹${rawPrice.toLocaleString()}`,
      estimatedWeeks: selectedType.baseDays
    };
    onOpenContactWithDetails(details);
  };

  return (
    <section id="estimator" className="py-24 bg-gradient-to-b from-[#080B11] via-[#0B0F1A] to-[#080B11] relative w-full overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* 100% Width Responsive Container */}
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Section Header - Enhanced Typography & Value Proposition */}
        <div className="text-center max-w-4xl mx-auto space-y-5 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono uppercase tracking-widest font-bold shadow-lg shadow-emerald-950/40">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>Special Local Business Offer &bull; Minimum ₹3,000</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
            Transparent Pricing in Rupees (₹) <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-300 to-indigo-400">
              Pick Your Package & Get Started
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            No hidden charges, no recurring surprises. Every website is custom-designed, 100% mobile-friendly, and comes with a 1-click WhatsApp button and Google Maps location.
          </p>

          {/* Trust Guarantees Micro-Bar */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-slate-300 font-medium">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Starts at just ₹3,000</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>24–48 Hours Delivery</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Pay After Live Mobile Approval</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800">
              <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
              <span>Free SSL Padlock Included</span>
            </div>
          </div>
        </div>

        {/* Calculator Main Box - 100% Width */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full">
          
          {/* Left Column: Interactive Package Options */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Step 1: Package Selection */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 text-xs flex items-center justify-center font-black">1</span>
                  <span>Select Core Website Package</span>
                </label>
                <span className="text-xs text-emerald-400 font-mono font-semibold">Click to choose</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {estimatorData.projectTypes.map((type) => {
                  const isSelected = selectedType.id === type.id;
                  const isBestseller = type.id === "static";

                  return (
                    <div
                      key={type.id}
                      onClick={() => setSelectedType(type)}
                      className={`relative p-5 rounded-2xl cursor-pointer border transition-all duration-300 flex flex-col justify-between ${
                        isSelected
                          ? 'bg-gradient-to-b from-slate-800/95 to-slate-900 border-cyan-400 shadow-xl shadow-cyan-950/50 ring-1 ring-cyan-400 transform -translate-y-0.5'
                          : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-850/80'
                      }`}
                    >
                      {/* Bestseller Badge */}
                      {isBestseller && (
                        <div className="absolute -top-3 left-4 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-emerald-500 text-slate-950 text-[10px] font-black uppercase tracking-wider shadow-md">
                          <Flame className="w-3 h-3 fill-slate-950" />
                          <span>Most Popular for Shops</span>
                        </div>
                      )}

                      <div>
                        {/* Title & Check Icon */}
                        <div className="flex items-center justify-between mb-2 mt-1">
                          <h4 className="font-bold text-white text-base">{type.name}</h4>
                          <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                            isSelected 
                              ? 'border-cyan-400 bg-cyan-400 text-slate-950 shadow-md' 
                              : 'border-slate-600 bg-slate-800'
                          }`}>
                            {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-xs text-slate-400 leading-relaxed mb-4">
                          {type.desc}
                        </p>
                      </div>

                      {/* Price & Delivery Footer */}
                      <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                        <div>
                          <span className="text-[10px] uppercase font-mono text-slate-500 block">Total Package</span>
                          <span className="text-lg font-black text-emerald-400 font-mono">
                            ₹{type.basePrice.toLocaleString()}
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-[10px] uppercase font-mono text-slate-500 block">Delivery Time</span>
                          <span className="text-xs font-semibold text-slate-300 font-mono flex items-center gap-1 justify-end">
                            <Clock className="w-3 h-3 text-cyan-400" />
                            <span>{type.baseDays}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Feature Add-ons */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 text-xs flex items-center justify-center font-black">2</span>
                  <span>Optional Add-ons & Integrations</span>
                </label>
                <span className="text-xs text-slate-400">Select any that apply</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {estimatorData.featureAddons.map((addon) => {
                  const isChecked = selectedAddons.some(a => a.id === addon.id);
                  const isFree = addon.price === 0;

                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon)}
                      className={`p-3.5 rounded-xl cursor-pointer border flex items-center justify-between transition-all duration-200 ${
                        isChecked
                          ? 'bg-slate-800/90 border-cyan-400/80 shadow-md'
                          : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div className="pr-2">
                        <span className="text-xs font-medium text-slate-200 block">{addon.name}</span>
                        <span className={`text-[11px] font-mono font-bold ${
                          isFree ? 'text-emerald-400' : 'text-cyan-300'
                        }`}>
                          {addon.desc}
                        </span>
                      </div>
                      <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 transition-all ${
                        isChecked ? 'border-cyan-400 bg-cyan-400 text-slate-950' : 'border-slate-600 bg-slate-800'
                      }`}>
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Delivery Velocity */}
            <div className="space-y-4">
              <label className="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 text-white text-xs flex items-center justify-center font-black">3</span>
                <span>Delivery Cadence</span>
              </label>

              <div className="grid grid-cols-2 gap-3">
                {estimatorData.timelines.map((tl) => {
                  const isSelected = selectedTimeline.id === tl.id;
                  return (
                    <div
                      key={tl.id}
                      onClick={() => setSelectedTimeline(tl)}
                      className={`p-4 rounded-xl cursor-pointer border text-center transition-all ${
                        isSelected
                          ? 'bg-slate-800/90 border-emerald-400 text-emerald-300 font-bold shadow-lg shadow-emerald-950/30'
                          : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <span className="text-xs sm:text-sm font-semibold">{tl.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Premium Live Quote Summary Card */}
          <div className="lg:col-span-5 sticky top-28 w-full">
            <div className="rounded-2xl bg-gradient-to-b from-slate-900 via-slate-850 to-slate-900 p-7 sm:p-8 border-2 border-emerald-500/40 shadow-2xl shadow-emerald-950/40 relative overflow-hidden">
              
              {/* Top Accent Ribbon */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-emerald-500/20 via-cyan-500/10 to-transparent rounded-full blur-2xl pointer-events-none" />

              <div className="space-y-6 relative z-10">
                
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-700/80">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                      Your Package Quote
                    </span>
                    <span className="text-xs text-white font-bold">100% Fixed Price</span>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 font-bold">
                    Zero Hidden Costs
                  </span>
                </div>

                {/* Big Price Display */}
                <div>
                  <div className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300">
                    ₹{rawPrice.toLocaleString()}
                  </div>
                  <div className="text-xs text-slate-300 mt-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Includes 100% mobile responsiveness & WhatsApp integration</span>
                  </div>
                </div>

                {/* Key Deliverables Details */}
                <div className="grid grid-cols-2 gap-3 p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs">
                  <div>
                    <span className="text-slate-400 block mb-1 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-cyan-400" />
                      Delivery Time
                    </span>
                    <span className="font-bold text-white font-mono text-sm">{selectedType.baseDays}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block mb-1 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      Free Warranty
                    </span>
                    <span className="font-bold text-white font-mono text-sm">30 Days Support</span>
                  </div>
                </div>

                {/* Selected Specifications Breakdown */}
                <div className="space-y-2 text-xs text-slate-300 pt-1">
                  <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                    <span className="text-slate-400">Core Website:</span>
                    <span className="font-semibold text-white">{selectedType.name}</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                    <span className="text-slate-400">Add-ons Included:</span>
                    <span className="font-semibold text-white">{selectedAddons.length} features chosen</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                    <span className="text-slate-400">WhatsApp Button:</span>
                    <span className="font-bold text-emerald-400">Included FREE</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-slate-400">Payment Term:</span>
                    <span className="font-semibold text-emerald-400">Pay after live preview</span>
                  </div>
                </div>

                {/* 1-Click WhatsApp Instant Order Button */}
                <button
                  onClick={handleWhatsAppOrder}
                  className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl font-black text-sm text-slate-950 bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-400 hover:from-emerald-300 hover:to-teal-300 shadow-xl shadow-emerald-500/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <MessageSquare className="w-4 h-4 fill-slate-950 text-slate-950" />
                  <span>Order on WhatsApp (₹{rawPrice.toLocaleString()})</span>
                </button>

                {/* Secondary Inquiry Button */}
                <button
                  onClick={handleBookWithQuote}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 transition"
                >
                  <span>Or Request a Call Back with this Scope</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                {/* Trust Footer */}
                <div className="pt-2 text-center border-t border-slate-800/60">
                  <p className="text-[11px] text-slate-400">
                    🔒 <strong>No advance risk</strong>: You inspect the live mobile preview first. Once satisfied, we connect your domain and launch.
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
