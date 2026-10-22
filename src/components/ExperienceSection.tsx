import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Building2, MapPin, Calendar, Clock, ArrowUpRight, ExternalLink, 
  CheckCircle2, Sparkles, Briefcase, ChevronRight, Layers, Eye
} from 'lucide-react';
import { EXPERIENCES, PROJECTS } from '../data/portfolioData';
import { ProjectCaseStudy } from '../types';
import { CaseStudyModal } from './CaseStudyModal';

export const ExperienceSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);

  const handleOpenCaseStudy = (caseStudyId: string) => {
    const found = PROJECTS.find(p => p.id === caseStudyId);
    if (found) {
      setSelectedProject(found);
    } else {
      const el = document.getElementById(caseStudyId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section 
      id="experience" 
      className="py-20 md:py-32 border-t border-black/[0.06] dark:border-white/10 bg-[#F9F8F6] dark:bg-[#0E0E0E] relative transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center space-x-2 text-[10px] font-mono uppercase tracking-widest text-[#D46338] dark:text-[#E87A54] mb-3 font-bold">
              <span className="w-2 h-2 rounded-full bg-[#D46338] dark:bg-[#E87A54] animate-pulse" />
              <span>Career & Industry Experience</span>
            </div>
            <h2 className="font-serif-display text-4xl sm:text-5xl md:text-6xl text-[#1A1A1A] dark:text-white tracking-tight font-normal">
              Work Experience.
            </h2>
          </div>
          <p className="text-base text-gray-600 dark:text-neutral-300 max-w-md font-sans-body leading-relaxed">
            Hands-on product & project execution — transforming complex field operations into frictionless software across real estate technology and enterprise software.
          </p>
        </div>

        {/* Experience Overview Highlights Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
          <div className="p-5 rounded-2xl bg-white dark:bg-[#161616] border border-gray-200/80 dark:border-neutral-800 shadow-2xs">
            <span className="text-[11px] font-mono uppercase tracking-wider text-gray-500 dark:text-neutral-400 block mb-1">
              Total Industry Tenure
            </span>
            <div className="font-serif-display text-2xl sm:text-3xl font-normal text-[#1A1A1A] dark:text-white">
              1 Year 9 Months
            </div>
            <span className="text-xs text-gray-500 dark:text-neutral-400 mt-1 block">
              Continuous hands-on product internships
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-[#161616] border border-gray-200/80 dark:border-neutral-800 shadow-2xs">
            <span className="text-[11px] font-mono uppercase tracking-wider text-gray-500 dark:text-neutral-400 block mb-1">
              Active Focus
            </span>
            <div className="font-serif-display text-2xl sm:text-3xl font-normal text-[#D46338] dark:text-[#E87A54]">
              Product Management
            </div>
            <span className="text-xs text-gray-500 dark:text-neutral-400 mt-1 block">
              ASBL · Hyderabad In-Office
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-[#161616] border border-gray-200/80 dark:border-neutral-800 shadow-2xs">
            <span className="text-[11px] font-mono uppercase tracking-wider text-gray-500 dark:text-neutral-400 block mb-1">
              Domains Delivered
            </span>
            <div className="font-serif-display text-2xl sm:text-3xl font-normal text-[#1A1A1A] dark:text-white">
              Proptech & ERP
            </div>
            <span className="text-xs text-gray-500 dark:text-neutral-400 mt-1 block">
              B2B SaaS, Procurement, Workflow Automation
            </span>
          </div>
        </div>

        {/* Timeline Experiences Stack */}
        <div className="relative space-y-12 md:space-y-16">
          
          {/* Subtle Vertical Timeline Connector on Desktop */}
          <div 
            className="hidden lg:block absolute left-8 top-12 bottom-12 w-px bg-gradient-to-b from-[#D46338] via-[#0D9488] to-gray-200 dark:to-neutral-800 -z-0"
            aria-hidden="true"
          />

          {EXPERIENCES.map((exp, idx) => {
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative lg:pl-20"
                id={`experience-${exp.id}`}
              >
                {/* Timeline Marker Dot on Desktop */}
                <div 
                  className="hidden lg:flex absolute left-6 top-8 -translate-x-1/2 w-5 h-5 rounded-full items-center justify-center bg-white dark:bg-[#0E0E0E] border-2 shadow-xs z-10"
                  style={{ borderColor: exp.accentColor }}
                  aria-hidden="true"
                >
                  <div 
                    className={`w-2 h-2 rounded-full ${exp.isCurrent ? 'animate-ping' : ''}`}
                    style={{ backgroundColor: exp.accentColor }}
                  />
                  <div 
                    className="w-2 h-2 rounded-full absolute"
                    style={{ backgroundColor: exp.accentColor }}
                  />
                </div>

                {/* Main Experience Card */}
                <div className="group rounded-3xl bg-white dark:bg-[#161616] border border-gray-200/90 dark:border-neutral-800/90 shadow-2xs hover:shadow-xl dark:hover:shadow-black/60 hover:border-gray-300 dark:hover:border-neutral-700 transition-all duration-300 overflow-hidden">
                  
                  {/* Top Header Banner: Company Logo, Verification, Duration, and Badges */}
                  <div className="p-6 sm:p-8 border-b border-gray-100 dark:border-neutral-800/80 bg-gradient-to-r from-gray-50/70 via-white to-gray-50/40 dark:from-neutral-900/60 dark:via-[#161616] dark:to-neutral-900/40">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                      
                      {/* Left: Brand Logo Box + Company Identity */}
                      <div className="flex items-start sm:items-center space-x-5">
                        
                        {/* Authentic Logo Container */}
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white dark:bg-[#202020] border border-gray-200 dark:border-neutral-700 p-2.5 flex items-center justify-center flex-shrink-0 shadow-2xs group-hover:scale-105 transition-transform duration-300">
                          {exp.id === 'asbl-pm-intern' ? (
                            <>
                              <img 
                                src="/asbl-logo.svg" 
                                alt={exp.logo.alt} 
                                className="max-h-9 w-auto object-contain dark:hidden"
                              />
                              <img 
                                src="/asbl-white-logo.webp" 
                                alt={exp.logo.alt} 
                                className="max-h-9 w-auto object-contain hidden dark:block"
                              />
                            </>
                          ) : (
                            <img 
                              src="/tryidol-logo.png" 
                              alt={exp.logo.alt} 
                              className="max-h-10 w-auto object-contain dark:brightness-0 dark:invert transition-all"
                            />
                          )}
                        </div>

                        {/* Company Names & Direct Link */}
                        <div className="flex flex-col">
                          <div className="flex items-center flex-wrap gap-2.5">
                            <h3 className="font-serif-display text-2xl sm:text-3xl text-[#1A1A1A] dark:text-white font-normal tracking-tight">
                              {exp.company}
                            </h3>
                            <a
                              href={exp.websiteUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center space-x-1 text-xs font-mono font-medium text-gray-500 dark:text-neutral-400 hover:text-[#D46338] dark:hover:text-[#E87A54] transition-colors"
                              title={`Visit ${exp.company} official website`}
                            >
                              <span>{exp.websiteUrl.replace('https://', '')}</span>
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          </div>
                          <span className="text-xs text-gray-500 dark:text-neutral-400 mt-0.5">
                            {exp.companyFull}
                          </span>
                        </div>
                      </div>

                      {/* Right: Live Current Badge or Completed Tenure */}
                      <div className="flex flex-wrap items-center gap-2">
                        {exp.isCurrent ? (
                          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800/60 text-xs font-mono font-bold text-emerald-800 dark:text-emerald-300 shadow-2xs">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span>CURRENT ROLE</span>
                          </div>
                        ) : (
                          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 text-xs font-mono font-medium text-gray-600 dark:text-neutral-300">
                            <span>COMPLETED INTERNSHIP</span>
                          </div>
                        )}
                        <span 
                          className="px-3 py-1.5 rounded-full text-xs font-mono font-bold text-white shadow-2xs"
                          style={{ backgroundColor: exp.accentColor }}
                        >
                          {exp.duration}
                        </span>
                      </div>
                    </div>

                    {/* Metadata Line: Role, Type, Period, Location */}
                    <div className="mt-6 pt-5 border-t border-gray-100 dark:border-neutral-800 flex flex-wrap items-center gap-y-2.5 gap-x-6 text-sm text-gray-700 dark:text-neutral-300 font-sans-body">
                      <div className="flex items-center space-x-2 font-bold text-[#1A1A1A] dark:text-white">
                        <Briefcase className="w-4 h-4 text-[#D46338] dark:text-[#E87A54]" />
                        <span>{exp.role}</span>
                      </div>

                      <span className="hidden sm:inline text-gray-300 dark:text-neutral-700">·</span>

                      <div className="text-gray-600 dark:text-neutral-400 font-medium">
                        {exp.employmentType}
                      </div>

                      <span className="hidden sm:inline text-gray-300 dark:text-neutral-700">·</span>

                      <div className="flex items-center space-x-2 text-gray-600 dark:text-neutral-400 font-mono text-xs">
                        <Calendar className="w-3.5 h-3.5 text-gray-400" />
                        <span>{exp.period}</span>
                      </div>

                      <span className="hidden sm:inline text-gray-300 dark:text-neutral-700">·</span>

                      <div className="flex items-center space-x-2 text-gray-600 dark:text-neutral-400 font-mono text-xs">
                        <MapPin className="w-3.5 h-3.5 text-gray-400" />
                        <span>{exp.workplaceType} · {exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8 space-y-8">
                    
                    {/* Company Context & Role Narrative */}
                    <div className="space-y-3">
                      <p className="text-xs font-mono uppercase tracking-wider text-[#D46338] dark:text-[#E87A54] font-bold">
                        About {exp.company} & Mission
                      </p>
                      <p className="text-sm sm:text-base text-gray-600 dark:text-neutral-300 leading-relaxed font-sans-body">
                        {exp.companyDescription}
                      </p>
                      <p className="text-sm sm:text-base text-[#1A1A1A] dark:text-white font-medium leading-relaxed font-sans-body pt-1">
                        {exp.summary}
                      </p>
                    </div>

                    {/* Key Contributions & Metrics Grid */}
                    <div>
                      <p className="text-xs font-mono uppercase tracking-wider text-gray-500 dark:text-neutral-400 font-bold mb-4">
                        Key Product Initiatives & Measurable Impact
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {exp.keyContributions.map((contrib, cIdx) => (
                          <div 
                            key={cIdx}
                            className="p-4 sm:p-5 rounded-2xl bg-[#F9F8F6] dark:bg-[#1E1E1E] border border-gray-200/70 dark:border-neutral-800 flex flex-col justify-between hover:border-gray-300 dark:hover:border-neutral-700 transition-colors"
                          >
                            <div>
                              <div className="flex items-center space-x-2 mb-2">
                                <span 
                                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                  style={{ backgroundColor: exp.accentColor }} 
                                />
                                <h4 className="font-bold text-sm text-[#1A1A1A] dark:text-white tracking-tight">
                                  {contrib.title}
                                </h4>
                              </div>
                              <p className="text-xs sm:text-sm text-gray-600 dark:text-neutral-300 leading-relaxed font-sans-body">
                                {contrib.description}
                              </p>
                            </div>

                            {contrib.metric && (
                              <div className="mt-4 pt-3 border-t border-black/[0.05] dark:border-white/5">
                                <span className="text-[11px] font-mono font-bold text-emerald-700 dark:text-emerald-400 block leading-tight">
                                  {contrib.metric}
                                </span>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Related Case Studies Quick Launch Bar */}
                    {exp.relatedCaseStudyIds && exp.relatedCaseStudyIds.length > 0 && (
                      <div className="p-4 sm:p-5 rounded-2xl bg-gray-50 dark:bg-[#1C1C1C] border border-gray-200/80 dark:border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex items-center space-x-2.5">
                          <Layers className="w-4 h-4 text-[#D46338] dark:text-[#E87A54] flex-shrink-0" />
                          <span className="text-xs font-mono font-bold text-[#1A1A1A] dark:text-white uppercase tracking-wider">
                            Deep-Dive Case Studies Shipped During Tenure:
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {exp.relatedCaseStudyIds.map((study) => (
                            <button
                              key={study.id}
                              onClick={() => handleOpenCaseStudy(study.id)}
                              className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#282828] border border-gray-200 dark:border-neutral-700 text-xs font-medium text-[#1A1A1A] dark:text-white hover:text-[#D46338] dark:hover:text-[#E87A54] hover:border-[#D46338]/40 dark:hover:border-[#E87A54]/40 shadow-2xs transition-all cursor-pointer"
                            >
                              <span>{study.title}</span>
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Bottom: Skills & Methodologies Strip */}
                    <div className="pt-4 border-t border-gray-100 dark:border-neutral-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-mono text-gray-500 dark:text-neutral-400">
                          Focus Areas:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.skillsAndTools.map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className="px-2.5 py-1 rounded-md bg-[#F4F2EE] dark:bg-[#222222] text-[11px] font-mono text-gray-600 dark:text-neutral-300 font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <a
                        href={exp.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1 text-xs font-bold transition-transform duration-200 hover:translate-x-1 self-start sm:self-auto"
                        style={{ color: exp.accentColor }}
                      >
                        <span>Learn more about {exp.company}</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>

                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Case Study Modal for direct opening from Experience section */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
