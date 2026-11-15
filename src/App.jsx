import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import TechStack from './components/TechStack';
import ProjectEstimator from './components/ProjectEstimator';
import Process from './components/Process';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import { MessageSquare } from 'lucide-react';
import { agencyInfo } from './data/agencyData';

export default function App() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [prefilledContact, setPrefilledContact] = useState(null);

  const handleOpenContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceTitle) => {
    setPrefilledContact({
      projectType: serviceTitle,
      addons: [],
      estimatedRange: '₹3,000 - ₹8,000',
      estimatedWeeks: '1 - 3 Days'
    });
    handleOpenContact();
  };

  const handleOpenContactWithDetails = (quoteDetails) => {
    setPrefilledContact(quoteDetails);
    handleOpenContact();
  };

  const openWhatsAppFloating = () => {
    const text = encodeURIComponent(
      `Hello Md Mashood Alam! I visited ${agencyInfo.name} and want to get a website made for my business.`
    );
    window.open(`https://wa.me/${agencyInfo.founder.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className="w-full min-h-screen bg-[#080B11] text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-white overflow-x-hidden">
      {/* Sticky Modern Navbar */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Main Full-Width Content */}
      <main className="flex-1 w-full">
        <Hero onOpenContact={handleOpenContact} />
        
        <Portfolio onOpenCaseStudy={(project) => setSelectedCaseStudy(project)} />

        <ProjectEstimator onOpenContactWithDetails={handleOpenContactWithDetails} />

        <Services onSelectService={handleSelectService} />

        <Process onOpenContact={handleOpenContact} />

        <WhyUs onOpenContact={handleOpenContact} />

        <TechStack />

        <Testimonials />

        <FAQ onOpenContact={handleOpenContact} />

        <ContactSection 
          prefilledData={prefilledContact} 
          clearPrefill={() => setPrefilledContact(null)} 
        />
      </main>

      {/* Footer */}
      <Footer onOpenContact={handleOpenContact} />

      {/* Floating WhatsApp Action Pill */}
      <div className="fixed bottom-6 right-6 z-40 group">
        <button
          onClick={openWhatsAppFloating}
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold text-xs shadow-2xl shadow-emerald-500/40 hover:scale-105 hover:from-emerald-400 hover:to-teal-400 transition-all duration-300 border border-emerald-300/40"
          aria-label="Chat on WhatsApp"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
          <MessageSquare className="w-4 h-4 fill-slate-950" />
          <span className="hidden sm:inline">WhatsApp Us</span>
        </button>
      </div>

      {/* Case Study Architectural Modal */}
      <ProjectModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onOpenContact={handleOpenContact}
      />
    </div>
  );
}
