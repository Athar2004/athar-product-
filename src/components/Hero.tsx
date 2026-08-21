import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowDown, MapPin, Clock, Briefcase, Sparkles, Send, Copy, Check } from 'lucide-react';
import { HERO_INFO } from '../data/portfolioData';
import { AbstractArtwork } from './AbstractArtwork';

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [istTime, setIstTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setIstTime(new Intl.DateTimeFormat('en-US', options).format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(HERO_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const roleWord1 = 'Product';
  const roleWord2 = 'Manager';

  // Letter cascading animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.045,
        delayChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 35, rotate: 2 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        type: 'spring',
        damping: 14,
        stiffness: 120,
      },
    },
  };

  return (
    <section id="hero" className="relative pt-28 sm:pt-36 md:pt-40 pb-20 md:pb-28 overflow-hidden bg-[#F9F8F6] dark:bg-[#0E0E0E] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        
        {/* Main Hero Flex Layout with Vertical Letter Column */}
        <div className="flex gap-8 lg:gap-14 items-stretch">
          
          {/* Left Subtle Vertical Ribbon (Editorial Marker) */}
          <div className="hidden md:flex w-16 flex-col items-center justify-start py-2 font-serif-display text-4xl lg:text-5xl font-black leading-[0.8] uppercase opacity-15 dark:opacity-20 select-none text-[#1A1A1A] dark:text-white tracking-tighter">
            <span>P</span>
            <span>r</span>
            <span>o</span>
            <span>d</span>
            <span>u</span>
            <span>c</span>
            <span>t</span>
            <span className="mt-4">M</span>
            <span>a</span>
            <span>n</span>
            <span>a</span>
            <span>g</span>
            <span>e</span>
            <span>r</span>
          </div>

          {/* Center Main Content & Right Abstract Diagram */}
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            <div className="lg:col-span-8 flex flex-col">
              
              {/* Status Pill Header */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-wrap items-center gap-3 mb-6"
              >
                <div className="px-3.5 py-1 bg-white dark:bg-[#181818] border border-gray-200/80 dark:border-neutral-700 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 text-[#1A1A1A] dark:text-neutral-200 shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>PM Intern @ ASBL</span>
                </div>

                <div className="text-[10px] font-mono font-medium text-gray-500 dark:text-neutral-400 uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/60 dark:bg-[#181818]/60 border border-black/[0.04] dark:border-white/[0.06]">
                  {istTime || 'IST GMT +5:30'}
                </div>
              </motion.div>

              {/* Massive Cascading Editorial Headline */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="font-serif-display text-5xl sm:text-7xl lg:text-[5.75rem] leading-[0.92] tracking-tight text-[#1A1A1A] dark:text-white font-normal select-none"
              >
                <div className="flex flex-wrap items-center overflow-hidden">
                  {roleWord1.split('').map((char, index) => (
                    <motion.span
                      key={`w1-${index}`}
                      variants={letterVariants}
                      className="inline-block hover:text-[#D46338] dark:hover:text-[#E87A54] hover:-translate-y-1.5 transition-transform duration-200 cursor-default"
                    >
                      {char}
                    </motion.span>
                  ))}
                </div>
                <div className="flex flex-wrap items-center overflow-hidden mt-1 sm:mt-2">
                  {roleWord2.split('').map((char, index) => (
                    <motion.span
                      key={`w2-${index}`}
                      variants={letterVariants}
                      className="inline-block hover:text-[#D46338] dark:hover:text-[#E87A54] hover:-translate-y-1.5 transition-transform duration-200 cursor-default"
                    >
                      {char}
                    </motion.span>
                  ))}
                  <motion.span
                    variants={letterVariants}
                    className="text-[#D46338] dark:text-[#E87A54] ml-1 inline-block"
                  >
                    .
                  </motion.span>
                </div>
              </motion.div>

              {/* Kinetic Statement Line with Highlighted Accent */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="mt-6 sm:mt-8"
              >
                <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-bold leading-[1.1] tracking-tight text-[#1A1A1A] dark:text-white max-w-2xl font-sans">
                  Good products remove friction{' '}
                  <span className="text-[#D46338] dark:text-[#E87A54] font-serif-display italic font-normal">
                    before you notice
                  </span>{' '}
                  it was there.
                </h1>
              </motion.div>

              {/* Supporting Bio */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-5 max-w-xl text-base sm:text-lg text-gray-600 dark:text-neutral-300 leading-relaxed font-sans-body"
              >
                <p>
                  B.Tech CSE student at LNCT (2026). Specializing in IoT, Cyber Security, and engineering high-leverage internal tools where clarity, automation, and real user needs meet.
                </p>
              </motion.div>

              {/* CTA Row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.65 }}
                className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4"
              >
                <a
                  href="#work"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-8 py-4 bg-[#1A1A1A] dark:bg-white text-white dark:text-[#0E0E0E] rounded-full text-sm font-bold hover:scale-105 hover:bg-[#D46338] dark:hover:bg-[#E87A54] dark:hover:text-white transition-all duration-300 flex items-center gap-3 shadow-sm"
                  id="hero-cta-work"
                >
                  <span>See my work</span>
                  <ArrowDown className="w-4 h-4" />
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="px-6 py-4 rounded-full bg-white dark:bg-[#181818] border border-gray-200 dark:border-neutral-700 text-sm font-bold text-[#1A1A1A] dark:text-white hover:bg-[#F9F8F6] dark:hover:bg-neutral-800 hover:border-gray-300 dark:hover:border-neutral-600 transition-all duration-200 shadow-2xs flex items-center gap-2"
                  id="hero-cta-email-copy"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-500" />
                      <span className="text-emerald-500">Email Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-gray-400 dark:text-neutral-400" />
                      <span>Copy email</span>
                    </>
                  )}
                </button>
              </motion.div>
            </div>

            {/* Right Column: Editorial Visual Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="lg:col-span-4 flex justify-center lg:justify-end"
            >
              <div className="w-full max-w-sm">
                <AbstractArtwork type="hero" accentColor="#D46338" />
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};
