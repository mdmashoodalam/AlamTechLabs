import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, Sparkles, Clock, MessageSquare, ShieldCheck, Zap } from 'lucide-react';
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
      `Hello Md Mashood Alam! I calculated my website cost on your website:\n\n` +
      `📌 Package: ${selectedType.name}\n` +
      `⏱️ Delivery: ${selectedType.baseDays}\n` +
      `✨ Add-ons: ${addonsList}\n` +
      `💰 Total Estimated Price: ₹${rawPrice.toLocaleString()}\n\n` +
      `I want to start my website with this package. Please guide me on the next step!`
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
    <section id="estimator" className="py-24 bg-[#0A0E17] relative w-full">
      {/* 100% Width Responsive Container */}
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            <Calculator className="w-3.5 h-3.5" />
            <span>Instant Price Calculator &bull; Starting ₹3,000</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Transparent Pricing in Rupees (₹) <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-300 to-indigo-400">
              Pick Your Package & Get Started
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            No unexpected charges. A complete professional static website starts at just ₹3,000 with 1-click WhatsApp chat and mobile responsiveness included.
          </p>
        </div>

        {/* Calculator Main Box - 100% Width */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full">
          
          {/* Left: Configuration Steps */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Step 1: Project Type */}
            <div className="space-y-4">
              <label className="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-cyan-500 text-slate-950 text-xs flex items-center justify-center font-bold">1</span>
                <span>Select Website / Software Package</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {estimatorData.projectTypes.map((type) => {
                  const isSelected = selectedType.id === type.id;
                  return (
                    <div
                      key={type.id}
                      onClick={() => setSelectedType(type)}
                      className={`p-4 rounded-xl cursor-pointer border transition-all ${
                        isSelected
                          ? 'bg-slate-800/90 border-cyan-400 shadow-lg shadow-cyan-500/10'
                          : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-bold text-white text-sm">{type.name}</span>
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                          isSelected ? 'border-cyan-400 bg-cyan-400 text-slate-950' : 'border-slate-600'
                        }`}>
                          {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                      </div>
                      <p className="text-xs text-slate-400 mb-2 leading-relaxed">{type.desc}</p>
                      <div className="flex items-center justify-between pt-1 border-t border-slate-800/60 text-xs font-mono">
                        <span className="text-emerald-400 font-bold">Starts ₹{type.basePrice.toLocaleString()}</span>
                        <span className="text-slate-400">{type.baseDays}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Feature Add-ons */}
            <div className="space-y-4">
              <label className="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-cyan-500 text-slate-950 text-xs flex items-center justify-center font-bold">2</span>
                <span>Optional Add-ons & Integrations</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {estimatorData.featureAddons.map((addon) => {
                  const isChecked = selectedAddons.some(a => a.id === addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon)}
                      className={`p-3.5 rounded-xl cursor-pointer border flex items-center justify-between transition-all ${
                        isChecked
                          ? 'bg-slate-800/90 border-cyan-400 shadow-sm'
                          : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div>
                        <span className="text-xs font-medium text-slate-200 block">{addon.name}</span>
                        <span className="text-[11px] font-mono text-cyan-300 font-semibold">{addon.desc}</span>
                      </div>
                      <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                        isChecked ? 'border-cyan-400 bg-cyan-400 text-slate-950' : 'border-slate-600'
                      }`}>
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Velocity */}
            <div className="space-y-4">
              <label className="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-cyan-500 text-slate-950 text-xs flex items-center justify-center font-bold">3</span>
                <span>Delivery Speed</span>
              </label>

              <div className="grid grid-cols-2 gap-3">
                {estimatorData.timelines.map((tl) => {
                  const isSelected = selectedTimeline.id === tl.id;
                  return (
                    <div
                      key={tl.id}
                      onClick={() => setSelectedTimeline(tl)}
                      className={`p-3.5 rounded-xl cursor-pointer border text-center transition-all ${
                        isSelected
                          ? 'bg-slate-800/90 border-cyan-400 text-cyan-300 font-bold'
                          : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <span className="text-xs font-semibold">{tl.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right: Live Quote Summary Card */}
          <div className="lg:col-span-5 sticky top-28 w-full">
            <div className="rounded-2xl bg-gradient-to-b from-slate-800/90 to-slate-900 p-8 border border-slate-700/80 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-44 h-44 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-700/80">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Calculated Package Total
                  </span>
                  <span className="text-xs font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 font-bold">
                    Zero Hidden Fees
                  </span>
                </div>

                {/* Price Display */}
                <div>
                  <div className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-300 to-indigo-300">
                    ₹{rawPrice.toLocaleString()}
                  </div>
                  <div className="text-xs text-slate-400 mt-1.5 flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Includes 100% mobile responsive design & testing</span>
                  </div>
                </div>

                {/* Timeline & Summary */}
                <div className="grid grid-cols-2 gap-3 p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-xs">
                  <div>
                    <span className="text-slate-400 block mb-1 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-cyan-400" />
                      Estimated Time
                    </span>
                    <span className="font-bold text-white font-mono text-sm">{selectedType.baseDays}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block mb-1 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      Support
                    </span>
                    <span className="font-bold text-white font-mono text-sm">30 Days Free Help</span>
                  </div>
                </div>

                {/* Selected Spec List */}
                <div className="space-y-2 text-xs text-slate-300">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Selected Package:</span>
                    <span className="font-semibold text-white">{selectedType.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Selected Addons:</span>
                    <span className="font-semibold text-white">{selectedAddons.length} features chosen</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Direct Engineer:</span>
                    <span className="font-semibold text-emerald-400">Md Mashood Alam</span>
                  </div>
                </div>

                {/* 1-Click WhatsApp Instant Order Button */}
                <button
                  onClick={handleWhatsAppOrder}
                  className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-400 hover:from-emerald-300 hover:to-teal-300 shadow-xl shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5"
                >
                  <MessageSquare className="w-4 h-4 fill-slate-950 text-slate-950" />
                  <span>Order on WhatsApp (₹{rawPrice.toLocaleString()})</span>
                </button>

                {/* Secondary Button */}
                <button
                  onClick={handleBookWithQuote}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-700 transition"
                >
                  <span>Or Fill Out Inquiry Form Below</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <p className="text-[11px] text-center text-slate-400">
                  Pay only after preview approval. Direct local support on WhatsApp and phone.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
