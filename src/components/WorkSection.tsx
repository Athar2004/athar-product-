import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Sparkles, Building, Layers, Eye } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectCaseStudy } from '../types';
import { AbstractArtwork } from './AbstractArtwork';
import { CaseStudyModal } from './CaseStudyModal';

export const WorkSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);

  // Marquee items
  const marqueeItems = [
    { title: "RFQ System", company: "ASBL Hyderabad", stat: "67% Faster Turnaround" },
    { title: "Vendor Library", company: "ASBL 9+ Sites", stat: "2h → 15m Evaluation" },
    { title: "AI-Powered ERP", company: "Tryidol Tech", stat: "100% On-Time Delivery" },
    { title: "GeoTrack App", company: "GAIL India", stat: "200m Geo-Fencing" },
    { title: "Accessibility Audit", company: "68 City Chapters", stat: "2,000+ Evaluations" },
  ];

  return (
    <section id="work" className="py-20 md:py-32 border-t border-black/[0.06] dark:border-white/10 bg-[#F9F8F6] dark:bg-[#0E0E0E] relative transition-colors duration-300">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 text-[10px] font-mono uppercase tracking-widest text-[#D46338] dark:text-[#E87A54] mb-3 font-bold">
              <span className="w-2 h-2 rounded-full bg-[#D46338] dark:bg-[#E87A54]" />
              <span>Selected Case Studies</span>
            </div>
            <h2 className="font-serif-display text-4xl sm:text-5xl md:text-6xl text-[#1A1A1A] dark:text-white tracking-tight font-normal">
              Featured Work.
            </h2>
          </div>
          <p className="text-base text-gray-600 dark:text-neutral-300 max-w-md font-sans-body leading-relaxed">
            Case studies spanning procurement automation, enterprise security, multi-tenant ERPs, and civic accessibility scale.
          </p>
        </div>
      </div>

      {/* Horizontal Auto-Scrolling Marquee Strip */}
      <div className="w-full overflow-hidden py-3.5 bg-[#EEECE8] dark:bg-[#181818] border-y border-black/[0.06] dark:border-white/10 mb-14 select-none transition-colors duration-300">
        <div className="animate-marquee flex items-center space-x-8">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 px-5 py-2 rounded-full bg-white dark:bg-[#222222] border border-black/[0.05] dark:border-neutral-700 shadow-2xs flex-shrink-0"
            >
              <span className="w-2 h-2 rounded-full bg-[#D46338] dark:bg-[#E87A54]" />
              <span className="font-bold text-xs text-[#1A1A1A] dark:text-white">{item.title}</span>
              <span className="text-[11px] font-mono text-gray-500 dark:text-neutral-400">({item.company})</span>
              <span className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/60 dark:border-emerald-800/60 px-2 py-0.5 rounded-full">
                {item.stat}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Project Showcase Grid */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => {
            const isFullWidth = idx === 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group relative rounded-3xl bg-white dark:bg-[#181818] border border-gray-200/80 dark:border-neutral-800 shadow-2xs hover:shadow-lg dark:hover:shadow-black/50 hover:border-gray-300 dark:hover:border-neutral-600 transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer ${
                  isFullWidth ? 'md:col-span-2' : ''
                }`}
                onClick={() => setSelectedProject(project)}
                id={`project-card-${project.id}`}
              >
                {/* Top Card Area: Abstract Artwork & Graphic Visual */}
                <div
                  className={`relative w-full overflow-hidden bg-gradient-to-br ${project.bgGradient} dark:from-neutral-900 dark:to-neutral-950 p-6 sm:p-8 flex items-center justify-center border-b border-gray-200/60 dark:border-neutral-800 transition-transform duration-500 group-hover:scale-[1.01]`}
                >
                  {/* Decorative badge tag */}
                  <div className="absolute top-4 left-4 z-10 flex items-center space-x-2">
                    <span className="px-3 py-1 rounded-full bg-white/90 dark:bg-black/70 backdrop-blur-sm border border-gray-200 dark:border-neutral-700 text-[10px] font-mono font-bold text-[#1A1A1A] dark:text-white">
                      {project.company}
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold text-white shadow-2xs" style={{ backgroundColor: project.accentColor }}>
                      {project.timeline}
                    </span>
                  </div>

                  {/* Quick Expand button on top right */}
                  <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <span className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-[#1A1A1A] dark:bg-white text-white dark:text-[#0E0E0E] text-xs font-bold shadow-md">
                      <span>View Case Study</span>
                      <Eye className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  <div className="py-6 sm:py-8 w-full flex justify-center">
                    <AbstractArtwork
                      type={project.abstractPattern}
                      accentColor={project.accentColor}
                      className="max-h-[160px]"
                    />
                  </div>
                </div>

                {/* Bottom Card Area: Content & Metrics */}
                <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between">
                  <div>
                    {/* Impact Metric Badge */}
                    <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#F9F8F6] dark:bg-[#222222] border border-gray-200/80 dark:border-neutral-700 text-xs font-mono font-bold text-[#1A1A1A] dark:text-white mb-4">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: project.accentColor }} />
                      <span>{project.metricBadge}</span>
                    </div>

                    <h3 className="font-serif-display text-2xl sm:text-3xl text-[#1A1A1A] dark:text-white tracking-tight group-hover:text-[#D46338] dark:group-hover:text-[#E87A54] transition-colors mb-3 font-normal">
                      {project.title}
                    </h3>

                    <p className="text-sm sm:text-base text-gray-600 dark:text-neutral-300 leading-relaxed mb-6 font-sans-body">
                      {project.summary}
                    </p>
                  </div>

                  {/* Card Footer: Tags & Link Reveal */}
                  <div className="pt-4 border-t border-gray-100 dark:border-neutral-800 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-0.5 rounded-full bg-[#F9F8F6] dark:bg-[#222222] border border-transparent dark:border-neutral-700/60 text-[11px] font-mono text-gray-500 dark:text-neutral-400 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div
                      className="inline-flex items-center space-x-1 text-xs font-bold transition-transform duration-200 group-hover:translate-x-1"
                      style={{ color: project.accentColor }}
                    >
                      <span>Read Study</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Interactive Case Study Reader Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
