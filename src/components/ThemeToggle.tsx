import React from 'react';
import { motion } from 'motion/react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '', showLabel = false }) => {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`group relative inline-flex items-center gap-2 p-1.5 rounded-full border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#D46338]/40 ${
        isDark
          ? 'bg-[#181818] border-neutral-700 text-neutral-200 hover:border-neutral-500 shadow-2xs'
          : 'bg-white border-gray-200 text-[#1A1A1A] hover:border-gray-300 shadow-2xs'
      } ${className}`}
      aria-label={isDark ? 'Switch to Editorial Beige theme' : 'Switch to High Contrast Dark theme'}
      title={isDark ? 'Switch to Editorial Beige' : 'Switch to High Contrast Dark'}
      id="theme-toggle-btn"
    >
      <div
        className={`w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-300 ${
          isDark ? 'bg-neutral-800 text-[#E87A54]' : 'bg-[#FAF0EB] text-[#D46338]'
        }`}
      >
        <motion.div
          key={theme}
          initial={{ rotate: -45, scale: 0.6, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          exit={{ rotate: 45, scale: 0.6, opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {isDark ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5" />}
        </motion.div>
      </div>

      {showLabel && (
        <span className="text-xs font-mono font-bold pr-2 select-none">
          {isDark ? 'Dark' : 'Beige'}
        </span>
      )}
    </button>
  );
};
