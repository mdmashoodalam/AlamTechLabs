import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, Sparkles, Clock, DollarSign, ShieldCheck } from 'lucide-react';
import { estimatorData } from '../data/agencyData';

export default function ProjectEstimator({ onOpenContactWithDetails }) {
  const [selectedType, setSelectedType] = useState(estimatorData.projectTypes[0]);
  const [selectedAddons, setSelectedAddons] = useState([
    estimatorData.featureAddons[0], // Auth
    estimatorData.featureAddons[3], // AWS
  ]);
  const [selectedTimeline, setSelectedTimeline] = useState(estimatorData.timelines[0]);

  const toggleAddon = (addon) => {
    if (selectedAddons.some(a => a.id === addon.id)) {
      setSelectedAddons(selectedAddons.filter(a => a.id !== addon.id));
    } else {
      setSelectedAddons([...selectedAddons, addon]);
    }
  };

  // Calculations
  const addonsPrice = selectedAddons.reduce((sum, a) => sum + a.price, 0);
  const addonsWeeks = selectedAddons.reduce((sum, a) => sum + a.weeks, 0);

  const rawPrice = (selectedType.basePrice + addonsPrice) * selectedTimeline.multiplier;
  const rawWeeks = Math.ceil((selectedType.baseWeeks + addonsWeeks) / (selectedTimeline.multiplier > 1 ? 1.3 : 1));

  const minPrice = Math.round(rawPrice * 0.9);
  const maxPrice = Math.round(rawPrice * 1.15);

  const handleBookWithQuote = () => {
    const details = {
      projectType: selectedType.name,
      addons: selectedAddons.map(a => a.name),
      timeline: selectedTimeline.name,
      estimatedRange: `$${minPrice.toLocaleString()} - $${maxPrice.toLocaleString()}`,
      estimatedWeeks: `${rawWeeks} Weeks`
    };
    onOpenContactWithDetails(details);
  };

  return (
    <section id="estimator" className="py-24 bg-[#0A0E17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Cost Calculator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Transparent Estimates, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
              Zero Hidden Costs
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Configure your project scope below for an instant ballpark budget and timeline estimation. No waiting for sales reps.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Configuration Steps */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Step 1: Project Type */}
            <div className="space-y-4">
              <label className="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-cyan-500 text-slate-950 text-xs flex items-center justify-center font-bold">1</span>
                Select Core Archetype
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {estimatorData.projectTypes.map((type) => {
                  const isSelected = selectedType.id === type.id;
                  return (
                    <div
                      key={type.id}
                      onClick={() => setSelectedType(type)}
                      className={`p-4 rounded-xl cursor-pointer border transition-all ${
                        isSelected
                          ? 'bg-slate-800/90 border-cyan-400 shadow-md shadow-cyan-500/10'
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
                      <p className="text-xs text-slate-400 mb-2">{type.desc}</p>
                      <span className="text-[11px] font-mono text-cyan-300">
                        Base: ~{type.baseWeeks} weeks
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Feature Add-ons */}
            <div className="space-y-4">
              <label className="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-cyan-500 text-slate-950 text-xs flex items-center justify-center font-bold">2</span>
                Choose Feature Modules & Integrations
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
                      <span className="text-xs font-medium text-slate-200">{addon.name}</span>
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
                <span className="w-5 h-5 rounded-full bg-cyan-500 text-slate-950 text-xs flex items-center justify-center font-bold">3</span>
                Development Delivery Velocity
              </label>

              <div className="grid grid-cols-2 gap-3">
                {estimatorData.timelines.map((tl) => {
                  const isSelected = selectedTimeline.id === tl.id;
                  return (
                    <div
                      key={tl.id}
                      onClick={() => setSelectedTimeline(tl)}
                      className={`p-3 rounded-xl cursor-pointer border text-center transition-all ${
                        isSelected
                          ? 'bg-slate-800/90 border-cyan-400 text-cyan-300'
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
          <div className="lg:col-span-5 sticky top-28">
            <div className="rounded-2xl bg-gradient-to-b from-slate-800/90 to-slate-900 p-8 border border-slate-700/80 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-700/80">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Estimated Investment Range
                  </span>
                  <span className="text-xs font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                    Fixed-Price Guaranteed
                  </span>
                </div>

                {/* Price Display */}
                <div>
                  <div className="text-3xl sm:text-4xl font-black text-white font-mono tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-300">
                    ${minPrice.toLocaleString()} - ${maxPrice.toLocaleString()}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    *Approx ₹{(minPrice * 85).toLocaleString()} - ₹{(maxPrice * 85).toLocaleString()} INR (Milestone-based billing)
                  </div>
                </div>

                {/* Timeline & Summary */}
                <div className="grid grid-cols-2 gap-3 p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-xs">
                  <div>
                    <span className="text-slate-400 block mb-1 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-cyan-400" />
                      Estimated Time
                    </span>
                    <span className="font-bold text-white font-mono text-sm">{rawWeeks} - {rawWeeks + 2} Weeks</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block mb-1 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      Warranty
                    </span>
                    <span className="font-bold text-white font-mono text-sm">30-Day Free SLA</span>
                  </div>
                </div>

                {/* Selected Spec List */}
                <div className="space-y-2 text-xs text-slate-300">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Core Architecture:</span>
                    <span className="font-semibold text-white">{selectedType.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Included Modules:</span>
                    <span className="font-semibold text-white">{selectedAddons.length} features chosen</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Code Transfer:</span>
                    <span className="font-semibold text-emerald-400">100% Full IP Handover</span>
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={handleBookWithQuote}
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-xl shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5"
                >
                  <span>Lock in Estimate & Book Call</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-[11px] text-center text-slate-400">
                  No payment required today. We will review your specifications on a 20-min strategy call.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
