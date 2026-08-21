import React from 'react';

interface AbstractArtworkProps {
  type: 'hero' | 'belief-1' | 'belief-2' | 'belief-3' | 'dots' | 'grid' | 'waves' | 'circuits' | 'rings';
  accentColor?: string;
  className?: string;
}

export const AbstractArtwork: React.FC<AbstractArtworkProps> = ({
  type,
  accentColor = '#D46338',
  className = ''
}) => {
  switch (type) {
    case 'hero':
      return (
        <div className={`relative w-full h-full min-h-[320px] flex items-center justify-center ${className}`}>
          {/* Ambient soft glow */}
          <div 
            className="absolute inset-0 rounded-3xl opacity-25 dark:opacity-40 blur-2xl transform scale-90 transition-all duration-700"
            style={{ background: `radial-gradient(circle at 50% 50%, ${accentColor} 0%, transparent 70%)` }}
          />
          {/* Geometric layered composition */}
          <div className="relative z-10 w-full max-w-[340px] aspect-square rounded-3xl bg-white/90 dark:bg-[#1A1A1A]/95 backdrop-blur-md p-6 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] border border-gray-200/80 dark:border-neutral-700 flex flex-col justify-between overflow-hidden transition-colors duration-300">
            {/* Top decorative header */}
            <div className="flex items-center justify-between">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-[#D46338]" />
                <div className="w-3 h-3 rounded-full bg-[#0D9488]" />
                <div className="w-3 h-3 rounded-full bg-[#D97706]" />
              </div>
              <span className="text-[10px] font-mono tracking-widest text-[#9CA3AF] dark:text-neutral-400 uppercase font-bold">
                PM FRAMEWORK // 2026
              </span>
            </div>

            {/* Central kinetic diagram */}
            <div className="my-auto py-4 flex flex-col items-center justify-center relative">
              <svg viewBox="0 0 200 120" className="w-full h-auto">
                <defs>
                  <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#D46338" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#0D9488" stopOpacity="0.9" />
                  </linearGradient>
                </defs>
                {/* Connecting nodes */}
                <path d="M 30 60 Q 100 10 170 60" fill="none" stroke="#E5E2D9" className="dark:stroke-neutral-700" strokeWidth="2" strokeDasharray="4 4" />
                <path d="M 30 60 Q 100 110 170 60" fill="none" stroke="#E5E2D9" className="dark:stroke-neutral-700" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="30" y1="60" x2="170" y2="60" stroke="#1A1A1A" className="dark:stroke-neutral-200" strokeWidth="2.5" />
                
                {/* Interactive node points */}
                <circle cx="30" cy="60" r="14" fill="#FFFFFF" className="dark:fill-[#121212]" stroke="#1A1A1A" strokeWidth="2.5" />
                <circle cx="30" cy="60" r="6" fill="#D46338" />
                
                <circle cx="100" cy="60" r="18" fill="#F9F8F6" className="dark:fill-[#222222]" stroke="#1A1A1A" strokeWidth="2.5" />
                <circle cx="100" cy="60" r="8" fill="#0D9488" />
                
                <circle cx="170" cy="60" r="14" fill="#FFFFFF" className="dark:fill-[#121212]" stroke="#1A1A1A" strokeWidth="2.5" />
                <circle cx="170" cy="60" r="6" fill="#D97706" />

                {/* Sub labels */}
                <text x="30" y="90" textAnchor="middle" fontSize="9" fontFamily="Plus Jakarta Sans" fontWeight="600" fill="#4B5563" className="dark:fill-neutral-300">USER</text>
                <text x="100" y="92" textAnchor="middle" fontSize="9" fontFamily="Plus Jakarta Sans" fontWeight="700" fill="#1A1A1A" className="dark:fill-white">PRODUCT</text>
                <text x="170" y="90" textAnchor="middle" fontSize="9" fontFamily="Plus Jakarta Sans" fontWeight="600" fill="#4B5563" className="dark:fill-neutral-300">IMPACT</text>
              </svg>
            </div>

            {/* Bottom mini metric pill */}
            <div className="bg-[#F9F8F6] dark:bg-[#222222] rounded-xl p-3 border border-gray-200/60 dark:border-neutral-700 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold text-[#1A1A1A] dark:text-neutral-100">Active Deployment</span>
              </div>
              <span className="text-xs font-mono font-bold text-[#D46338] dark:text-[#E87A54]">67% faster</span>
            </div>
          </div>
        </div>
      );

    case 'belief-1': // Talk to people doing work
      return (
        <div className={`w-full aspect-[4/3] rounded-2xl bg-[#FAF0EB] dark:bg-[#251814] border border-[#D46338]/20 dark:border-[#E87A54]/30 p-6 flex flex-col justify-between relative overflow-hidden transition-colors duration-300 ${className}`}>
          <div className="flex items-center justify-between text-xs font-mono text-[#D46338] dark:text-[#E87A54] font-bold">
            <span>// 130+ FIELD INTERVIEWS</span>
            <span className="px-2 py-0.5 rounded-full bg-[#D46338]/10 dark:bg-[#E87A54]/20">EMPATHY</span>
          </div>
          <div className="my-auto py-2">
            <svg viewBox="0 0 240 100" className="w-full h-auto">
              {/* Soundwave/interview conversation curves */}
              <path d="M 10 50 Q 40 20 70 50 T 130 50 T 190 50 T 230 50" fill="none" stroke="#D46338" strokeWidth="2.5" />
              <path d="M 10 50 Q 50 80 90 50 T 170 50 T 230 50" fill="none" stroke="#D46338" strokeOpacity="0.4" strokeWidth="1.5" strokeDasharray="3 3" />
              {/* Survey sample pins */}
              <circle cx="70" cy="50" r="5" fill="#D46338" />
              <circle cx="130" cy="50" r="7" fill="#1A1A1A" className="dark:fill-white" />
              <circle cx="190" cy="50" r="5" fill="#D46338" />
            </svg>
          </div>
          <div className="flex items-center justify-between text-xs text-[#4B5563] dark:text-neutral-300 border-t border-[#D46338]/10 dark:border-neutral-700 pt-3">
            <span>On-site vendor feedback</span>
            <span className="font-bold text-[#1A1A1A] dark:text-white">Direct Ground Truth</span>
          </div>
        </div>
      );

    case 'belief-2': // Ship the boring fix
      return (
        <div className={`w-full aspect-[4/3] rounded-2xl bg-[#F0FDF4] dark:bg-[#122319] border border-emerald-600/20 dark:border-emerald-500/30 p-6 flex flex-col justify-between relative overflow-hidden transition-colors duration-300 ${className}`}>
          <div className="flex items-center justify-between text-xs font-mono text-emerald-700 dark:text-emerald-400 font-bold">
            <span>// 6 DAYS → 2 DAYS</span>
            <span className="px-2 py-0.5 rounded-full bg-emerald-600/10 dark:bg-emerald-400/20">EFFICIENCY</span>
          </div>
          <div className="my-auto py-2 flex flex-col space-y-2.5">
            {/* Before bar */}
            <div>
              <div className="flex justify-between text-[11px] font-semibold text-gray-500 dark:text-neutral-400 mb-1">
                <span>Before: Fragmented Email & Phone</span>
                <span>6 Days</span>
              </div>
              <div className="w-full h-2.5 rounded-full bg-black/10 dark:bg-white/10 overflow-hidden">
                <div className="w-full h-full bg-gray-400 dark:bg-neutral-600 rounded-full" />
              </div>
            </div>
            {/* After bar */}
            <div>
              <div className="flex justify-between text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 mb-1">
                <span>After: Automated RFQ Portal</span>
                <span>2 Days (-67%)</span>
              </div>
              <div className="w-full h-2.5 rounded-full bg-black/10 dark:bg-white/10 overflow-hidden">
                <div className="w-1/3 h-full bg-emerald-600 dark:bg-emerald-500 rounded-full" />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between text-xs text-[#4B5563] dark:text-neutral-300 border-t border-emerald-600/10 dark:border-neutral-700 pt-3">
            <span>Workflow automation</span>
            <span className="font-bold text-[#1A1A1A] dark:text-white">Hours Saved Weekly</span>
          </div>
        </div>
      );

    case 'belief-3': // Good systems make good behavior default
      return (
        <div className={`w-full aspect-[4/3] rounded-2xl bg-[#FBF6EE] dark:bg-[#251E14] border border-[#D97706]/15 dark:border-[#D97706]/30 p-6 flex flex-col justify-between relative overflow-hidden transition-colors duration-300 ${className}`}>
          <div className="flex items-center justify-between text-xs font-mono text-[#D97706] dark:text-amber-400 font-bold">
            <span>// RBAC & DATA GUARDRAILS</span>
            <span className="px-2 py-0.5 rounded-full bg-[#D97706]/10 dark:bg-amber-400/20">GOVERNANCE</span>
          </div>
          <div className="my-auto py-2 flex items-center justify-center">
            <div className="grid grid-cols-3 gap-2 w-full max-w-[220px]">
              <div className="bg-white dark:bg-[#1E1E1E] p-2.5 rounded-xl border border-amber-200/60 dark:border-amber-500/20 shadow-sm flex flex-col items-center">
                <span className="text-[10px] font-mono text-amber-700 dark:text-amber-400">INPUT</span>
                <span className="text-xs font-bold text-[#181716] dark:text-neutral-100 mt-0.5">Auto-Val</span>
              </div>
              <div className="bg-[#D97706] text-white p-2.5 rounded-xl shadow-sm flex flex-col items-center">
                <span className="text-[10px] font-mono opacity-80">RBAC</span>
                <span className="text-xs font-bold mt-0.5">Secure</span>
              </div>
              <div className="bg-white dark:bg-[#1E1E1E] p-2.5 rounded-xl border border-amber-200/60 dark:border-amber-500/20 shadow-sm flex flex-col items-center">
                <span className="text-[10px] font-mono text-emerald-700 dark:text-emerald-400">AUDIT</span>
                <span className="text-xs font-bold text-[#181716] dark:text-neutral-100 mt-0.5">100% Pass</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between text-xs text-[#5E5B56] dark:text-neutral-300 border-t border-[#D97706]/10 dark:border-neutral-700 pt-3">
            <span>Single source of truth</span>
            <span className="font-semibold text-[#181716] dark:text-white">Zero User Error</span>
          </div>
        </div>
      );

    case 'grid':
      return (
        <div className={`w-full h-full min-h-[140px] flex items-center justify-center p-4 ${className}`}>
          <div className="grid grid-cols-4 gap-2 w-full max-w-[200px] opacity-85">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: i % 3 === 0 ? accentColor : `${accentColor}18`,
                  color: i % 3 === 0 ? '#FFFFFF' : accentColor,
                }}
              >
                <div className={`w-1.5 h-1.5 rounded-full ${i % 3 === 0 ? 'bg-white' : 'bg-current'}`} />
              </div>
            ))}
          </div>
        </div>
      );

    case 'circuits':
      return (
        <div className={`w-full h-full min-h-[140px] flex items-center justify-center p-4 ${className}`}>
          <svg viewBox="0 0 160 100" className="w-full max-w-[200px] h-auto">
            <path d="M 20 50 L 60 50 L 80 20 L 120 20" fill="none" stroke={accentColor} strokeWidth="2" strokeDasharray="3 3" />
            <path d="M 60 50 L 80 80 L 140 80" fill="none" stroke={accentColor} strokeWidth="2.5" />
            <circle cx="20" cy="50" r="5" fill={accentColor} />
            <circle cx="120" cy="20" r="4" fill={accentColor} />
            <circle cx="140" cy="80" r="6" fill="#181716" />
          </svg>
        </div>
      );

    case 'rings':
      return (
        <div className={`w-full h-full min-h-[140px] flex items-center justify-center p-4 ${className}`}>
          <div className="relative w-24 h-24 flex items-center justify-center">
            <div 
              className="absolute inset-0 rounded-full border-2 border-dashed animate-[spin_20s_linear_infinite]"
              style={{ borderColor: `${accentColor}40` }}
            />
            <div 
              className="w-16 h-16 rounded-full border-2 flex items-center justify-center"
              style={{ borderColor: accentColor }}
            >
              <div 
                className="w-8 h-8 rounded-full shadow-inner flex items-center justify-center"
                style={{ backgroundColor: accentColor }}
              >
                <span className="text-[10px] font-bold text-white font-mono">AI</span>
              </div>
            </div>
          </div>
        </div>
      );

    case 'dots':
      return (
        <div className={`w-full h-full min-h-[140px] flex items-center justify-center p-4 ${className}`}>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-sky-100 flex items-center justify-center text-sky-600 font-mono font-bold text-xs">
              GPS
            </div>
            <div className="w-8 h-0.5 bg-sky-300 border-t border-dashed border-sky-400" />
            <div className="w-12 h-12 rounded-full border-2 border-sky-500 bg-sky-50 flex items-center justify-center text-sky-700 font-mono font-bold text-xs shadow-sm">
              200m
            </div>
          </div>
        </div>
      );

    case 'waves':
      return (
        <div className={`w-full h-full min-h-[140px] flex items-center justify-center p-4 ${className}`}>
          <svg viewBox="0 0 160 80" className="w-full max-w-[180px] h-auto">
            <path d="M 10 40 C 40 10, 50 70, 80 40 C 110 10, 120 70, 150 40" fill="none" stroke={accentColor} strokeWidth="3" />
            <circle cx="80" cy="40" r="5" fill="#181716" />
          </svg>
        </div>
      );

    default:
      return null;
  }
};
