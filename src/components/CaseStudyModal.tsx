import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowUpRight, CheckCircle2, TrendingUp, Users, ShieldAlert, Cpu, Sparkles, Building2, Calendar } from 'lucide-react';
import { ProjectCaseStudy } from '../types';
import { AbstractArtwork } from './AbstractArtwork';

interface CaseStudyModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  // Prevent background scroll when modal is active
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 260 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-[#161616] text-[#1A1A1A] dark:text-[#F5F5F5] rounded-3xl shadow-2xl overflow-y-auto z-10 border border-gray-200 dark:border-neutral-800"
          id={`case-study-modal-${project.id}`}
        >
          {/* Header Bar */}
          <div className="sticky top-0 bg-white/95 dark:bg-[#161616]/95 backdrop-blur-md px-6 sm:px-10 py-5 border-b border-gray-200 dark:border-neutral-800 flex items-center justify-between z-20">
            <div className="flex items-center space-x-3">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: project.accentColor }}
              />
              <span className="font-mono text-xs uppercase tracking-wider text-gray-500 dark:text-neutral-400 font-bold">
                Case Study • {project.company}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-[#F9F8F6] dark:bg-[#242424] hover:bg-black/[0.06] dark:hover:bg-neutral-700 text-[#1A1A1A] dark:text-white transition-colors"
              aria-label="Close modal"
              id="close-case-study-btn"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="px-6 sm:px-10 py-8 space-y-10">
            
            {/* Title & Core Meta */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#F9F8F6] dark:bg-[#222222] border border-gray-200 dark:border-neutral-700 text-xs font-mono text-[#1A1A1A] dark:text-neutral-200 font-bold">
                  <Building2 className="w-3.5 h-3.5 text-gray-400 dark:text-neutral-400" />
                  <span>{project.company}</span>
                </span>
                <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#F9F8F6] dark:bg-[#222222] border border-gray-200 dark:border-neutral-700 text-xs font-mono text-[#1A1A1A] dark:text-neutral-200 font-bold">
                  <Calendar className="w-3.5 h-3.5 text-gray-400 dark:text-neutral-400" />
                  <span>{project.timeline}</span>
                </span>
                <span
                  className="px-3 py-1 rounded-full text-xs font-bold text-white shadow-2xs"
                  style={{ backgroundColor: project.accentColor }}
                >
                  {project.role}
                </span>
              </div>

              <h2 className="font-serif-display text-4xl sm:text-5xl text-[#1A1A1A] dark:text-white tracking-tight leading-tight font-normal">
                {project.title}
              </h2>

              <p className="mt-4 text-lg text-gray-600 dark:text-neutral-300 leading-relaxed font-sans-body">
                {project.summary}
              </p>
            </div>

            {/* Impact Metric Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.impactMetrics.map((metric, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-[#F9F8F6] dark:bg-[#202020] border border-gray-200/80 dark:border-neutral-700 flex flex-col justify-between"
                >
                  <span className="text-xs font-mono text-gray-500 dark:text-neutral-400 uppercase tracking-wider font-bold">
                    {metric.label}
                  </span>
                  <div className="my-2">
                    <span
                      className="font-serif-display text-4xl font-normal"
                      style={{ color: project.accentColor }}
                    >
                      {metric.value}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-[#1A1A1A] dark:text-white">
                    {metric.change}
                  </span>
                </div>
              ))}
            </div>

            {/* The Problem Statement */}
            <div className="bg-[#FAF0EB] dark:bg-[#261814] border border-[#D46338]/20 dark:border-[#E87A54]/30 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center space-x-2 text-xs font-mono text-[#D46338] dark:text-[#E87A54] uppercase tracking-wider mb-2 font-bold">
                <ShieldAlert className="w-4 h-4" />
                <span>The Core Problem & Friction</span>
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] dark:text-white mb-3">
                Why the status quo was unsustainable
              </h3>
              <p className="text-base text-gray-700 dark:text-neutral-200 leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* Research & User Insights */}
            <div>
              <div className="flex items-center space-x-2 text-xs font-mono text-emerald-700 dark:text-emerald-400 uppercase tracking-wider mb-3 font-bold">
                <Users className="w-4 h-4" />
                <span>User Research & Field Discoveries</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {project.researchInsights.map((insight, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white dark:bg-[#202020] border border-gray-200 dark:border-neutral-700 shadow-2xs hover:border-gray-300 dark:hover:border-neutral-600 transition-colors flex flex-col"
                  >
                    <span className="font-mono text-xs font-bold text-gray-400 dark:text-neutral-500 mb-2">
                      0{idx + 1} // GROUND REALITY
                    </span>
                    <p className="text-sm text-gray-600 dark:text-neutral-300 leading-relaxed">
                      {insight}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Solution Details */}
            <div>
              <div className="flex items-center space-x-2 text-xs font-mono text-[#1A1A1A] dark:text-neutral-300 uppercase tracking-wider mb-3 font-bold">
                <Sparkles className="w-4 h-4 text-[#D46338] dark:text-[#E87A54]" />
                <span>Product Solution & Key Features</span>
              </div>
              <div className="space-y-3">
                {project.solutionDetails.map((detail, idx) => (
                  <div
                    key={idx}
                    className="flex items-start space-x-3 p-4 rounded-xl bg-[#F9F8F6] dark:bg-[#202020] border border-gray-200/80 dark:border-neutral-700"
                  >
                    <CheckCircle2
                      className="w-5 h-5 flex-shrink-0 mt-0.5"
                      style={{ color: project.accentColor }}
                    />
                    <p className="text-sm sm:text-base text-[#1A1A1A] dark:text-neutral-100 font-medium leading-snug">
                      {detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key PM Takeaway */}
            <div className="p-6 rounded-2xl bg-[#1A1A1A] dark:bg-[#0A0A0A] border dark:border-neutral-800 text-white">
              <div className="flex items-center space-x-2 text-xs font-mono text-[#D46338] dark:text-[#E87A54] uppercase tracking-wider mb-2 font-bold">
                <TrendingUp className="w-4 h-4" />
                <span>Key Product Learnings</span>
              </div>
              <p className="text-base sm:text-lg font-serif-display leading-relaxed italic text-white/95">
                "{project.keyTakeaways}"
              </p>
            </div>

          </div>

          {/* Modal Footer */}
          <div className="px-6 sm:px-10 py-5 bg-[#F9F8F6] dark:bg-[#1A1A1A] border-t border-gray-200 dark:border-neutral-800 flex items-center justify-between">
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((t, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-full bg-white dark:bg-[#242424] border border-gray-200 dark:border-neutral-700 text-[11px] font-mono text-gray-600 dark:text-neutral-300 font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-[#1A1A1A] dark:bg-white text-white dark:text-[#0E0E0E] text-xs font-bold hover:bg-[#D46338] dark:hover:bg-[#E87A54] dark:hover:text-white transition-colors shadow-2xs"
            >
              Done Reading
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
