import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AdoptionSection from './components/AdoptionSection';
import DonateSection from './components/DonateSection';
import VolunteerSection from './components/VolunteerSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <AdoptionSection />
        <DonateSection />
        <VolunteerSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;