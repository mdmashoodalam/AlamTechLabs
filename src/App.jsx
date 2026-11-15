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

  return (
    <div className="w-full min-h-screen bg-[#080B11] text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-white overflow-x-hidden">
      {/* Sticky Navigation - 100% Width */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Main Page Content - 100% Width */}
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

      {/* Footer - 100% Width */}
      <Footer onOpenContact={handleOpenContact} />

      {/* Case Study Architectural Modal */}
      <ProjectModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onOpenContact={handleOpenContact}
      />
    </div>
  );
}
