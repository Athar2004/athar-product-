import React from 'react';
import { motion } from 'motion/react';
import { BELIEFS } from '../data/portfolioData';
import { AbstractArtwork } from './AbstractArtwork';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const BeliefsSection: React.FC = () => {
  const getArtworkType = (index: number): 'belief-1' | 'belief-2' | 'belief-3' => {
    if (index === 0) return 'belief-1';
    if (index === 1) return 'belief-2';
    return 'belief-3';
  };

  return (
    <section id="beliefs" className="py-20 md:py-32 border-t border-black/[0.06] dark:border-white/10 bg-[#F9F8F6] dark:bg-[#0E0E0E] relative transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 md:mb-20 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 text-[10px] font-mono uppercase tracking-widest text-[#D46338] dark:text-[#E87A54] mb-3 font-bold">
              <span className="w-2 h-2 rounded-full bg-[#D46338] dark:bg-[#E87A54]" />
              <span>Core Product Philosophy</span>
            </div>
            <h2 className="font-serif-display text-4xl sm:text-5xl md:text-6xl text-[#1A1A1A] dark:text-white tracking-tight font-normal">
              3 things I believe in.
            </h2>
          </div>
          <p className="text-base text-gray-600 dark:text-neutral-300 max-w-md font-sans-body leading-relaxed">
            Principles honed through field research, procurement bottlenecks, and real user friction in high-stakes environments.
          </p>
        </div>

        {/* Stacked Belief Cards */}
        <div className="space-y-12 md:space-y-16">
          {BELIEFS.map((belief, idx) => {
            const isReversed = idx % 2 === 1;

            return (
              <motion.div
                key={belief.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white dark:bg-[#181818] rounded-3xl p-8 sm:p-12 border border-gray-200/70 dark:border-neutral-800 shadow-xs hover:shadow-md transition-all duration-300"
                id={`belief-card-${idx + 1}`}
              >
                {/* Content Column */}
                <div className={`lg:col-span-7 flex flex-col justify-center ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                  {/* Number & Category Pill */}
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-[#F9F8F6] dark:bg-[#242424] border border-gray-200 dark:border-neutral-700 text-[#1A1A1A] dark:text-neutral-200">
                      {belief.number}
                    </span>
                    <span
                      className="text-xs font-mono uppercase tracking-wider font-bold"
                      style={{ color: belief.accent }}
                    >
                      {belief.theme}
                    </span>
                  </div>

                  {/* Big Editorial Statement */}
                  <h3 className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-[#1A1A1A] dark:text-white leading-tight tracking-tight mb-6 font-normal">
                    "{belief.statement}"
                  </h3>

                  {/* Body explanation */}
                  <p className="text-base sm:text-lg text-gray-600 dark:text-neutral-300 leading-relaxed mb-6 font-sans-body">
                    {belief.description}
                  </p>

                  {/* Proof Point Highlight Pill */}
                  <div className="mt-2 p-4 rounded-2xl bg-[#F9F8F6] dark:bg-[#202020] border border-gray-200/80 dark:border-neutral-700 flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: belief.accent }} />
                    <p className="text-sm font-medium text-[#1A1A1A] dark:text-neutral-100 leading-snug">
                      <span className="font-bold text-gray-500 dark:text-neutral-400 block text-xs uppercase font-mono mb-0.5">Ground Proof:</span>
                      {belief.proofPoint}
                    </p>
                  </div>
                </div>

                {/* Visual Graphic Column */}
                <div className={`lg:col-span-5 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                  <AbstractArtwork
                    type={getArtworkType(idx)}
                    accentColor={belief.accent}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
