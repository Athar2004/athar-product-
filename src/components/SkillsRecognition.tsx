import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SKILL_CATEGORIES, RECOGNITION_ITEMS } from '../data/portfolioData';
import { Award, Trophy, BookOpen, Users, Check, Sparkles, ArrowUpRight, ExternalLink, Copy } from 'lucide-react';

export const SkillsRecognition: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [copiedDoi, setCopiedDoi] = useState<string | null>(null);

  const categories = ['All', ...SKILL_CATEGORIES.map(c => c.category)];

  const filteredCategories = selectedCategory === 'All' 
    ? SKILL_CATEGORIES 
    : SKILL_CATEGORIES.filter(c => c.category === selectedCategory);

  const handleCopyDoi = (doi: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(doi);
    setCopiedDoi(doi);
    setTimeout(() => setCopiedDoi(null), 2000);
  };

  const getRecognitionIcon = (type: string) => {
    switch (type) {
      case 'Award': return <Trophy className="w-4 h-4 text-[#D97706]" />;
      case 'Leadership': return <Users className="w-4 h-4 text-[#D46338]" />;
      case 'Publication': return <BookOpen className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
      default: return <Award className="w-4 h-4 text-[#7C3AED]" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 border-t border-black/[0.06] dark:border-white/10 bg-[#F4F3EE] dark:bg-[#121212] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        
        {/* Skills Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 text-[10px] font-mono uppercase tracking-widest text-[#D46338] dark:text-[#E87A54] mb-3 font-bold">
              <span className="w-2 h-2 rounded-full bg-[#D46338] dark:bg-[#E87A54]" />
              <span>Capabilities & Tooling</span>
            </div>
            <h2 className="font-serif-display text-4xl sm:text-5xl text-[#1A1A1A] dark:text-white tracking-tight font-normal">
              Skills & technical toolbox.
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 font-medium ${
                  selectedCategory === cat
                    ? 'bg-[#1A1A1A] dark:bg-white text-white dark:text-[#0E0E0E] shadow-2xs font-bold'
                    : 'bg-white/80 dark:bg-[#1E1E1E] hover:bg-white dark:hover:bg-[#282828] text-gray-600 dark:text-neutral-300 border border-gray-200 dark:border-neutral-700'
                }`}
                id={`filter-pill-${cat.replace(/\s+/g, '-').toLowerCase()}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Skill Tag Cloud Grouping */}
        <div className="space-y-8 mb-20">
          {filteredCategories.map((group, gIdx) => (
            <div key={gIdx} className="bg-white dark:bg-[#181818] rounded-3xl p-6 sm:p-8 border border-gray-200/80 dark:border-neutral-800 shadow-2xs transition-colors duration-300">
              <div className="flex items-center space-x-2 mb-4 pb-3 border-b border-gray-100 dark:border-neutral-800">
                <span className="text-xs font-mono uppercase tracking-wider text-gray-400 dark:text-neutral-400 font-bold">
                  0{gIdx + 1} // {group.category}
                </span>
              </div>
              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                {group.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="group relative px-4 py-2 rounded-full bg-[#F9F8F6] dark:bg-[#222222] border border-gray-200 dark:border-neutral-700 text-xs sm:text-sm font-medium text-[#1A1A1A] dark:text-neutral-200 hover:bg-[#D46338] dark:hover:bg-[#E87A54] hover:text-white dark:hover:text-white hover:border-[#D46338] dark:hover:border-[#E87A54] transition-all duration-200 cursor-default select-none shadow-2xs hover:shadow-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Recognition & Honors Section */}
        <div className="pt-8 border-t border-gray-200 dark:border-neutral-800">
          <div className="flex items-center space-x-2 text-[10px] font-mono uppercase tracking-widest text-[#D46338] dark:text-[#E87A54] mb-3 font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Honors & Milestones</span>
          </div>
          <h3 className="font-serif-display text-3xl sm:text-4xl text-[#1A1A1A] dark:text-white tracking-tight mb-8 font-normal">
            Leadership, awards & published research.
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {RECOGNITION_ITEMS.map((item, idx) => {
              const isPublication = item.type === 'Publication';
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className={`p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#181818] border ${
                    isPublication
                      ? 'border-emerald-500/30 dark:border-emerald-500/20 shadow-2xs hover:border-emerald-500/60 transition-all'
                      : 'border-gray-200 dark:border-neutral-800 shadow-2xs hover:shadow-sm'
                  } transition-all duration-200 flex flex-col justify-between`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-2.5 rounded-xl bg-[#F9F8F6] dark:bg-[#242424] border border-gray-200/60 dark:border-neutral-700 flex-shrink-0">
                      {getRecognitionIcon(item.type)}
                    </div>
                    <div className="flex flex-col flex-grow min-w-0">
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-gray-400 dark:text-neutral-400 font-bold">
                          {item.type} • {item.year}
                        </span>
                        {item.publisher && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60">
                            {item.publisher}
                          </span>
                        )}
                      </div>
                      <h4 className="font-semibold text-base text-[#1A1A1A] dark:text-white mt-1.5 leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-600 dark:text-neutral-300 mt-1 font-sans-body">
                        {item.organization}
                      </p>
                      {item.description && (
                        <p className="text-xs text-gray-500 dark:text-neutral-400 mt-2 font-sans-body leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Publication Action Footer */}
                  {isPublication && (
                    <div className="mt-4 pt-3.5 border-t border-gray-100 dark:border-neutral-800/80 flex flex-wrap items-center justify-between gap-2">
                      {item.doi && (
                        <button
                          type="button"
                          onClick={(e) => handleCopyDoi(item.doi!, e)}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#F9F8F6] dark:bg-[#202020] border border-gray-200/80 dark:border-neutral-700/80 text-[10px] font-mono text-gray-500 dark:text-neutral-400 hover:text-[#1A1A1A] dark:hover:text-white transition-colors cursor-pointer"
                          title="Copy DOI identifier"
                        >
                          {copiedDoi === item.doi ? (
                            <>
                              <Check className="w-3 h-3 text-emerald-500" />
                              <span className="text-emerald-600 dark:text-emerald-400 font-bold">DOI Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              <span>DOI: {item.doi}</span>
                            </>
                          )}
                        </button>
                      )}

                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1A1A1A] dark:bg-white text-white dark:text-[#0E0E0E] text-xs font-mono font-bold hover:bg-[#D46338] dark:hover:bg-[#E87A54] dark:hover:text-white transition-colors ml-auto shadow-2xs group"
                        >
                          <span>Read Paper</span>
                          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                      )}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
