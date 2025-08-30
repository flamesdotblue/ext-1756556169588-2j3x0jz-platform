import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SkillsMarquee from './components/SkillsMarquee';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0b12] text-white selection:bg-pink-500/40 selection:text-white">
      <Navbar />
      <Hero />
      <SkillsMarquee />
      <Footer />
    </div>
  );
}
