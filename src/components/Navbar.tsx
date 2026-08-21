import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Menu, X, ArrowUpRight } from 'lucide-react';
import { HERO_INFO } from '../data/portfolioData';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#work', id: 'work' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Connect', href: '#connect', id: 'connect' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-4 bg-[#F9F8F6]/90 dark:bg-[#0E0E0E]/90 backdrop-blur-md border-b border-black/[0.06] dark:border-white/10 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.4)]'
          : 'py-7 bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 flex items-center justify-between">
        {/* Left Name Mark */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group flex items-center space-x-3 text-left focus:outline-none"
          id="nav-logo"
        >
          <div className="w-8 h-8 rounded-full bg-[#1A1A1A] text-[#F9F8F6] dark:bg-white dark:text-[#0E0E0E] flex items-center justify-center font-mono font-bold text-xs group-hover:bg-[#D46338] dark:group-hover:bg-[#E87A54] dark:group-hover:text-white transition-colors duration-300">
            {HERO_INFO.initials}
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base tracking-tight text-[#1A1A1A] dark:text-white group-hover:text-[#D46338] dark:group-hover:text-[#E87A54] transition-colors">
              {HERO_INFO.name}
            </span>
            <span className="text-[11px] font-mono text-[#9CA3AF] dark:text-neutral-400 -mt-0.5">
              Product Manager
            </span>
          </div>
        </a>

        {/* Center: Live Availability status tag (desktop) */}
        <div className="hidden lg:flex items-center space-x-2 px-3.5 py-1 bg-white dark:bg-[#181818] border border-gray-200/80 dark:border-neutral-700 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#4B5563] dark:text-neutral-300 shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>Open for PM Opportunities</span>
        </div>

        {/* Right Nav Links & Theme Toggle */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-3">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full ${
                  isActive
                    ? 'text-[#1A1A1A] dark:text-white font-bold'
                    : 'text-[#4B5563] dark:text-neutral-300 hover:text-[#D46338] dark:hover:text-[#E87A54] hover:bg-black/[0.03] dark:hover:bg-white/[0.05]'
                }`}
                id={`nav-link-${link.id}`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-1 left-4 right-4 h-0.5 bg-[#D46338] dark:bg-[#E87A54] rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}

          {/* Theme Toggle Button */}
          <div className="pl-1 pr-1">
            <ThemeToggle />
          </div>

          <a
            href={`mailto:${HERO_INFO.email}`}
            className="ml-1 inline-flex items-center space-x-1.5 px-5 py-2.5 rounded-full bg-[#1A1A1A] dark:bg-white text-white dark:text-[#0E0E0E] text-xs font-bold hover:bg-[#D46338] dark:hover:bg-[#E87A54] dark:hover:text-white hover:scale-105 transition-all duration-300 shadow-sm"
            id="nav-quick-email"
          >
            <span>Say Hello</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
          </a>
        </nav>

        {/* Mobile controls: Theme Toggle + Menu Hamburger */}
        <div className="flex items-center space-x-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-white dark:bg-[#181818] border border-black/[0.06] dark:border-neutral-700 text-[#1A1A1A] dark:text-white hover:bg-[#F9F8F6] dark:hover:bg-neutral-800 transition-colors"
            aria-label="Toggle Navigation Menu"
            id="mobile-nav-toggle"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden px-6 pt-2 pb-6 bg-[#F9F8F6] dark:bg-[#121212] border-b border-black/[0.08] dark:border-white/10 shadow-lg"
          >
            <div className="flex flex-col space-y-2 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between ${
                    activeSection === link.id
                      ? 'bg-white dark:bg-[#1C1C1C] text-[#D46338] dark:text-[#E87A54] font-bold border border-black/[0.05] dark:border-neutral-700'
                      : 'text-[#1A1A1A] dark:text-white hover:bg-black/[0.03] dark:hover:bg-white/[0.05]'
                  }`}
                >
                  <span>{link.label}</span>
                  {activeSection === link.id && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D46338] dark:bg-[#E87A54]" />
                  )}
                </a>
              ))}
              <a
                href={`mailto:${HERO_INFO.email}`}
                className="mt-2 text-center py-3 rounded-xl bg-[#D46338] dark:bg-[#E87A54] text-white font-bold text-sm shadow-sm"
              >
                Say Hello ({HERO_INFO.email})
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

