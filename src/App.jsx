import React from 'react';
import FloatingCanvas from './components/FloatingCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import CurrentlyLearningSection from './components/CurrentlyLearningSection';
import EducationSection from './components/EducationSection';
import AchievementsSection from './components/AchievementsSection';
import CertificationsSection from './components/CertificationsSection';
import CareerGoalsSection from './components/CareerGoalsSection';
import KeyExplorerPlayground from './components/KeyExplorerPlayground';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-[#070a0f] text-slate-100 font-sans selection:bg-indigo-500 selection:text-white overflow-x-hidden">

      {/* Dynamic HTML5 Canvas Background: Floating Keys & Translucent Paper */}
      <FloatingCanvas />

      {/* Floating Glass Navigation Bar */}
      <Navbar />

      {/* Main Portfolio Content */}
      <main className="relative z-10">
        {/* 1. Hero */}
        <Hero />
        {/* 2. About Me */}
        <AboutSection />
        {/* 3. Skills */}
        <SkillsSection />
        {/* 4. Projects */}
        <ProjectsSection />
        {/* 5. Currently Learning */}
        <CurrentlyLearningSection />
        {/* 6. Education */}
        <EducationSection />
        {/* 7. Achievements */}
        <AchievementsSection />
        {/* 8. Certifications */}
        <CertificationsSection />
        {/* 9. Career Goals */}
        <CareerGoalsSection />
        {/* 10. Interactive Key Explorer Playground */}
        <KeyExplorerPlayground />
        {/* 11. Contact */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;
