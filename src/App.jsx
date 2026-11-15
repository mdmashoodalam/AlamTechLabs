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
      estimatedRange: 'Custom Scope Proposal',
      estimatedWeeks: '3 - 8 Weeks'
    });
    handleOpenContact();
  };

  const handleOpenContactWithDetails = (quoteDetails) => {
    setPrefilledContact(quoteDetails);
    handleOpenContact();
  };

  return (
    <div className="min-h-screen bg-[#080B11] text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-white">
      {/* Sticky Navigation */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Main Page Content */}
      <main className="flex-1">
        <Hero onOpenContact={handleOpenContact} />
        
        <Services onSelectService={handleSelectService} />

        <Portfolio onOpenCaseStudy={(project) => setSelectedCaseStudy(project)} />

        <TechStack />

        <ProjectEstimator onOpenContactWithDetails={handleOpenContactWithDetails} />

        <Process onOpenContact={handleOpenContact} />

        <WhyUs onOpenContact={handleOpenContact} />

        <Testimonials />

        <FAQ onOpenContact={handleOpenContact} />

        <ContactSection 
          prefilledData={prefilledContact} 
          clearPrefill={() => setPrefilledContact(null)} 
        />
      </main>

      {/* Footer */}
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
