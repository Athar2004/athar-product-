/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BeliefsSection } from './components/BeliefsSection';
import { WorkSection } from './components/WorkSection';
import { ExperienceSection } from './components/ExperienceSection';
import { GallerySection } from './components/GallerySection';
import { AboutPersonality } from './components/AboutPersonality';
import { SkillsRecognition } from './components/SkillsRecognition';
import { ConnectFooter } from './components/ConnectFooter';

function AppContent() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const { isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'beliefs', 'work', 'experience', 'gallery', 'about', 'skills', 'connect'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            // Map sub-sections to the main nav anchors if needed
            if (sectionId === 'beliefs') {
              setActiveSection('hero');
            } else if (sectionId === 'skills') {
              setActiveSection('about');
            } else {
              setActiveSection(sectionId);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`${isDark ? 'dark ' : ''}min-h-screen bg-[#F9F8F6] dark:bg-[#0E0E0E] text-[#1A1A1A] dark:text-[#F5F5F5] flex flex-col font-sans-body selection:bg-[#D46338]/20 dark:selection:bg-[#E87A54]/30 selection:text-[#D46338] dark:selection:text-[#E87A54] transition-colors duration-300`}>
      {/* Minimal Sticky Nav */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Flow */}
      <main className="flex-grow">
        <Hero />
        <BeliefsSection />
        <WorkSection />
        <ExperienceSection />
        <GallerySection />
        <AboutPersonality />
        <SkillsRecognition />
      </main>

      {/* Warm Connect / Closing Section */}
      <ConnectFooter />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

