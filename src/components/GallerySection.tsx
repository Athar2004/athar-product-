import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, Maximize2, ExternalLink, X, ChevronRight, 
  Award, Users, Mic, HeartHandshake, Eye
} from 'lucide-react';
import { GALLERY_ITEMS } from '../data/portfolioData';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories = [
    'All',
    'Honors & Awards',
    'Social Impact',
    'Speaking & Conferences',
    'Community & Leadership',
  ];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Honors & Awards':
        return <Award className="w-3.5 h-3.5 text-[#D97706]" />;
      case 'Social Impact':
        return <HeartHandshake className="w-3.5 h-3.5 text-[#D46338]" />;
      case 'Speaking & Conferences':
        return <Mic className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />;
      case 'Community & Leadership':
        return <Users className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />;
      default:
        return <Sparkles className="w-3.5 h-3.5 text-[#D46338]" />;
    }
  };

  return (
    <section 
      id="gallery" 
      className="py-20 md:py-32 border-t border-black/[0.06] dark:border-white/10 bg-[#F9F8F6] dark:bg-[#0E0E0E] relative transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 text-[10px] font-mono uppercase tracking-widest text-[#D46338] dark:text-[#E87A54] mb-3 font-bold">
              <span className="w-2 h-2 rounded-full bg-[#D46338] dark:bg-[#E87A54]" />
              <span>Moments & Field Milestones</span>
            </div>
            <h2 className="font-serif-display text-4xl sm:text-5xl md:text-6xl text-[#1A1A1A] dark:text-white tracking-tight font-normal">
              My Gallery.
            </h2>
          </div>
          <p className="text-base text-gray-600 dark:text-neutral-300 max-w-md font-sans-body leading-relaxed">
            Snapshots of civic audits, keynotes, leadership honors, and community building across institutions and conferences.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-xs font-mono font-medium transition-all duration-200 cursor-pointer ${
                selectedCategory === category
                  ? 'bg-[#1A1A1A] dark:bg-white text-white dark:text-[#0E0E0E] shadow-2xs font-bold scale-[1.02]'
                  : 'bg-white/80 dark:bg-[#1A1A1A] text-gray-600 dark:text-neutral-300 border border-gray-200 dark:border-neutral-800 hover:bg-white dark:hover:bg-[#242424] hover:text-[#1A1A1A] dark:hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="group bg-white dark:bg-[#181818] rounded-3xl border border-gray-200/90 dark:border-neutral-800 overflow-hidden shadow-2xs hover:shadow-xl dark:hover:shadow-black/50 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Container with Hover Zoom */}
              <div 
                className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900 cursor-pointer"
                onClick={() => setActiveItem(item)}
              >
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                  <span className="text-white text-xs font-mono font-medium flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View photo</span>
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/90 text-black flex items-center justify-center shadow-md">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Top Badge */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-white/95 dark:bg-[#121212]/95 backdrop-blur-md text-[#1A1A1A] dark:text-neutral-200 border border-black/5 dark:border-white/10 shadow-2xs flex items-center gap-1.5">
                    {getCategoryIcon(item.category)}
                    <span>{item.tag || item.category}</span>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-serif-display text-xl sm:text-2xl text-[#1A1A1A] dark:text-white leading-snug font-normal group-hover:text-[#D46338] dark:group-hover:text-[#E87A54] transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-gray-600 dark:text-neutral-300 font-sans-body leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>

                {/* Footer Link / Highlight */}
                <div className="mt-5 pt-4 border-t border-gray-100 dark:border-neutral-800/80 flex items-center justify-between">
                  {item.relatedLink ? (
                    <a
                      href={item.relatedLink.href}
                      target={item.relatedLink.href.startsWith('http') ? "_blank" : undefined}
                      rel={item.relatedLink.href.startsWith('http') ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#D46338] dark:text-[#E87A54] hover:underline"
                    >
                      <span>{item.relatedLink.label}</span>
                      {item.relatedLink.href.startsWith('http') ? (
                        <ExternalLink className="w-3.5 h-3.5" />
                      ) : (
                        <ChevronRight className="w-3.5 h-3.5" />
                      )}
                    </a>
                  ) : (
                    <span className="text-[11px] font-mono text-gray-400 dark:text-neutral-500">
                      {item.highlight || 'Archived Milestone'}
                    </span>
                  )}

                  <button
                    onClick={() => setActiveItem(item)}
                    className="p-1.5 rounded-lg text-gray-400 hover:text-[#1A1A1A] dark:hover:text-white hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
                    title="Expand details"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveItem(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-3xl bg-white dark:bg-[#181818] rounded-3xl overflow-hidden shadow-2xl z-10 border border-gray-200 dark:border-neutral-800 flex flex-col max-h-[90vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image Box */}
              <div className="relative w-full max-h-[55vh] bg-black flex items-center justify-center overflow-hidden">
                <img
                  src={activeItem.imageSrc}
                  alt={activeItem.title}
                  className="w-full h-full object-contain max-h-[55vh]"
                />
              </div>

              {/* Modal Details */}
              <div className="p-6 sm:p-8 overflow-y-auto">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-[#F9F8F6] dark:bg-[#222222] text-[#D46338] dark:text-[#E87A54] border border-black/5 dark:border-white/10 flex items-center gap-1.5">
                    {getCategoryIcon(activeItem.category)}
                    <span>{activeItem.category}</span>
                  </span>
                  {activeItem.tag && (
                    <span className="text-[11px] font-mono text-gray-500 dark:text-neutral-400">
                      • {activeItem.tag}
                    </span>
                  )}
                </div>

                <h3 className="font-serif-display text-2xl sm:text-3xl text-[#1A1A1A] dark:text-white font-normal mt-2">
                  {activeItem.title}
                </h3>

                <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-neutral-300 font-sans-body leading-relaxed">
                  {activeItem.description}
                </p>

                {activeItem.relatedLink && (
                  <div className="mt-6 pt-5 border-t border-gray-100 dark:border-neutral-800 flex items-center justify-between">
                    <a
                      href={activeItem.relatedLink.href}
                      target={activeItem.relatedLink.href.startsWith('http') ? "_blank" : undefined}
                      rel={activeItem.relatedLink.href.startsWith('http') ? "noopener noreferrer" : undefined}
                      onClick={() => {
                        if (!activeItem.relatedLink?.href.startsWith('http')) {
                          setActiveItem(null);
                        }
                      }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1A1A1A] dark:bg-white text-white dark:text-[#0E0E0E] text-xs font-bold hover:bg-[#D46338] dark:hover:bg-[#E87A54] dark:hover:text-white transition-colors"
                    >
                      <span>{activeItem.relatedLink.label}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
