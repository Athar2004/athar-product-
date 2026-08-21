import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PERSONALITY_CARDS } from '../data/portfolioData';
import { PersonalityCard } from '../types';
import { 
  Cpu, Mic, Users, Compass, FileText, Moon, MapPin, Rocket, 
  Sparkles, X, Info 
} from 'lucide-react';

export const AboutPersonality: React.FC = () => {
  const [activeCard, setActiveCard] = useState<PersonalityCard | null>(null);

  const getIcon = (iconName: string, className = "w-6 h-6") => {
    switch (iconName) {
      case 'Cpu': return <Cpu className={className} />;
      case 'Mic': return <Mic className={className} />;
      case 'Users': return <Users className={className} />;
      case 'Compass': return <Compass className={className} />;
      case 'FileText': return <FileText className={className} />;
      case 'Moon': return <Moon className={className} />;
      case 'MapPin': return <MapPin className={className} />;
      case 'Rocket': return <Rocket className={className} />;
      default: return <Sparkles className={className} />;
    }
  };

  return (
    <section id="about" className="py-20 md:py-32 border-t border-black/[0.06] dark:border-white/10 relative bg-[#F9F8F6] dark:bg-[#0E0E0E] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 text-[10px] font-mono uppercase tracking-widest text-[#D46338] dark:text-[#E87A54] mb-3 font-bold">
              <span className="w-2 h-2 rounded-full bg-[#D46338] dark:bg-[#E87A54]" />
              <span>Behind the Spec Sheet</span>
            </div>
            <h2 className="font-serif-display text-4xl sm:text-5xl md:text-6xl text-[#1A1A1A] dark:text-white tracking-tight font-normal">
              Life, leadership & quirks.
            </h2>
          </div>
          <p className="text-base text-gray-600 dark:text-neutral-300 max-w-md font-sans-body leading-relaxed">
            The experiences and habits that shape how I collaborate, build communities, and break down complex problems.
          </p>
        </div>

        {/* Personality Scrapbook Grid with Asymmetrical Tilted Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-4 pb-8">
          {PERSONALITY_CARDS.map((card, index) => {
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                whileHover={{ 
                  scale: 1.04, 
                  rotate: 0, 
                  zIndex: 20,
                  transition: { duration: 0.2 } 
                }}
                style={{ 
                  rotate: `${card.rotation}deg`,
                  backgroundColor: card.colorScheme.bg,
                  borderColor: card.colorScheme.border
                }}
                onClick={() => setActiveCard(card)}
                className="group relative p-6 rounded-3xl border shadow-2xs hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[220px] dark:shadow-neutral-950/40"
                id={`personality-card-${card.id}`}
              >
                {/* Top Tape / Sticker Aesthetic Header */}
                <div className="flex items-center justify-between">
                  <div 
                    className="w-10 h-10 rounded-2xl flex items-center justify-center shadow-2xs"
                    style={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      color: card.colorScheme.accent 
                    }}
                  >
                    {getIcon(card.iconName, "w-5 h-5")}
                  </div>

                  <span className="text-[10px] font-mono text-gray-400 tracking-widest uppercase font-bold group-hover:text-[#1A1A1A] transition-colors">
                    0{index + 1}
                  </span>
                </div>

                {/* Main Caption (Editorial one-liner) */}
                <div className="my-4">
                  <h3 
                    className="font-serif-display text-xl sm:text-2xl leading-tight font-normal"
                    style={{ color: card.colorScheme.textColor }}
                  >
                    "{card.caption}"
                  </h3>
                  <p className="text-xs font-mono text-gray-600 mt-2 font-medium">
                    {card.subtitle}
                  </p>
                </div>

                {/* Bottom hint pill */}
                <div className="pt-2 border-t border-black/[0.04] flex items-center justify-between text-[11px] text-gray-400">
                  <span>Click to expand</span>
                  <Info className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Athar's Narrative Paragraph Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#181818] border border-gray-200/80 dark:border-neutral-800 shadow-2xs max-w-4xl mx-auto transition-colors duration-300"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 flex flex-col items-start">
              <span className="text-[10px] font-mono text-[#D46338] dark:text-[#E87A54] uppercase tracking-wider mb-2 font-bold">
                // THE ATHAR WAY
              </span>
              <h3 className="font-serif-display text-3xl text-[#1A1A1A] dark:text-white font-normal">
                Product craft meets engineering rigor.
              </h3>
            </div>
            <div className="md:col-span-8 space-y-4 text-sm sm:text-base text-gray-600 dark:text-neutral-300 font-sans-body leading-relaxed border-t md:border-t-0 md:border-l border-gray-200 dark:border-neutral-800 pt-6 md:pt-0 md:pl-8">
              <p>
                I come from an engineering foundation in IoT and Cyber Security at LNCT, which means I naturally speak the language of APIs, edge constraints, and system latency.
              </p>
              <p>
                At the same time, leading 3,000+ members in TechVilla and managing 55+ student leaders as YUVA Student Chairman taught me that software success is 80% about communication, clear expectations, and aligning people around a shared outcome.
              </p>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Card Detail Popup Modal */}
      <AnimatePresence>
        {activeCard && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveCard(null)}
              className="fixed inset-0 bg-black/50 backdrop-blur-xs"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 15 }}
              className="relative w-full max-w-md bg-white dark:bg-[#181818] rounded-3xl p-6 sm:p-8 shadow-2xl z-10 border border-gray-200 dark:border-neutral-800 text-[#1A1A1A] dark:text-white"
              id="personality-detail-modal"
            >
              <div className="flex items-center justify-between mb-4">
                <div 
                  className="w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ 
                    backgroundColor: activeCard.colorScheme.bg,
                    color: activeCard.colorScheme.accent 
                  }}
                >
                  {getIcon(activeCard.iconName, "w-6 h-6")}
                </div>
                <button
                  onClick={() => setActiveCard(null)}
                  className="p-2 rounded-full hover:bg-black/[0.05] dark:hover:bg-white/[0.05] text-[#1A1A1A] dark:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <h3 
                className="font-serif-display text-2xl sm:text-3xl text-[#1A1A1A] dark:text-white mb-1 font-normal"
                style={{ color: activeCard.colorScheme.textColor }}
              >
                "{activeCard.caption}"
              </h3>
              <span className="text-xs font-mono text-gray-400 dark:text-neutral-400 block mb-4 font-bold">
                {activeCard.subtitle}
              </span>

              <p className="text-sm sm:text-base text-gray-600 dark:text-neutral-300 leading-relaxed mb-6 font-sans-body">
                {activeCard.details}
              </p>

              <button
                onClick={() => setActiveCard(null)}
                className="w-full py-3 rounded-xl bg-[#1A1A1A] dark:bg-white text-white dark:text-[#0E0E0E] text-xs font-bold hover:bg-[#D46338] dark:hover:bg-[#E87A54] dark:hover:text-white transition-colors shadow-2xs"
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
