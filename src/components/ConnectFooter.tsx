import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, ArrowUpRight, Copy, Check, Linkedin, Globe, Phone, 
  Clock, Heart, Send, Sparkles, CheckCircle2 
} from 'lucide-react';
import { HERO_INFO } from '../data/portfolioData';

export const ConnectFooter: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [istTime, setIstTime] = useState('');
  const [quickNote, setQuickNote] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [submittedNote, setSubmittedNote] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setIstTime(new Intl.DateTimeFormat('en-US', options).format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(HERO_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendQuickNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickNote.trim()) return;
    
    // Construct mailto link with pre-filled subject and body
    const subject = encodeURIComponent("Let's connect — Product inquiry for Athar Khan");
    const body = encodeURIComponent(
      `Hi Athar,\n\n${quickNote}\n\nFrom: ${senderEmail || 'Portfolio Visitor'}`
    );
    window.location.href = `mailto:${HERO_INFO.email}?subject=${subject}&body=${body}`;
    setSubmittedNote(true);
  };

  const whatILookFor = [
    { title: "Meaningful problems", desc: "Operational bottlenecks, high-volume workflows, and real user friction." },
    { title: "Fast-moving teams", desc: "High autonomy, strong craft, and a bias for rapid customer feedback loops." },
    { title: "Room to talk to users", desc: "Direct access to customers, field staff, and the ground reality." },
  ];

  return (
    <footer id="connect" className="pt-20 md:pt-32 pb-16 bg-[#1A1A1A] dark:bg-[#080808] text-white relative overflow-hidden transition-colors duration-300 border-t border-black/10 dark:border-white/10">
      
      {/* Subtle background ambient warmth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-96 bg-[#D46338]/10 dark:bg-[#E87A54]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-10 relative z-10">
        
        {/* Main Editorial CTA Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-20 border-b border-white/10">
          
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center space-x-2 text-[10px] font-mono uppercase tracking-widest text-[#D46338] dark:text-[#E87A54] mb-4 font-bold">
                <span className="w-2 h-2 rounded-full bg-[#D46338] dark:bg-[#E87A54]" />
                <span>Let's Collaborate</span>
              </div>

              {/* Big friendly closing line */}
              <h2 className="font-serif-display text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.05] mb-8 font-normal">
                Let's build something people <span className="italic text-[#D46338] dark:text-[#E87A54] font-normal">actually want</span> to use.
              </h2>

              {/* What I Look For */}
              <div className="space-y-4 pt-4 mb-10">
                <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block font-bold">
                  What I look for in teams & roles:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {whatILookFor.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-white/[0.04] dark:bg-white/[0.02] border border-white/[0.08] hover:border-white/20 transition-colors"
                    >
                      <div className="flex items-center space-x-2 mb-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D46338] dark:text-[#E87A54]" />
                        <span className="font-bold text-xs text-white">
                          {item.title}
                        </span>
                      </div>
                      <p className="text-[11px] text-gray-300 dark:text-neutral-300 leading-relaxed font-sans-body">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Email CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={`mailto:${HERO_INFO.email}`}
                className="inline-flex items-center space-x-2.5 px-7 py-4 rounded-full bg-[#D46338] hover:bg-[#B85028] dark:bg-[#E87A54] dark:hover:bg-[#D46338] text-white font-bold text-sm transition-all duration-200 shadow-lg shadow-[#D46338]/20 hover:scale-[1.02]"
                id="footer-email-btn"
              >
                <Mail className="w-4 h-4" />
                <span>Email me ({HERO_INFO.email})</span>
                <ArrowUpRight className="w-4 h-4 opacity-80" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center space-x-2 px-5 py-4 rounded-full bg-white/[0.08] hover:bg-white/[0.14] border border-white/10 text-xs font-mono text-white transition-all duration-200 font-bold"
                id="footer-copy-btn"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-bold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-gray-400" />
                    <span>Copy email</span>
                  </>
                )}
              </button>

              <a
                href={HERO_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-4 rounded-full bg-[#0A66C2]/20 hover:bg-[#0A66C2] text-[#70B5F9] hover:text-white border border-[#0A66C2]/40 text-xs font-mono font-bold transition-all duration-200 shadow-md group"
                id="footer-linkedin-btn"
              >
                <Linkedin className="w-4 h-4 transition-transform group-hover:scale-110" />
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" />
              </a>
            </div>
          </div>

          {/* Right Column: Quick Note Dispatcher Card */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.04] dark:bg-white/[0.02] border border-white/10 backdrop-blur-md">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#D46338] dark:text-[#E87A54] font-bold">
                  // QUICK NOTE
                </span>
                <Sparkles className="w-4 h-4 text-gray-400" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2 font-serif-display">
                Drop a quick thought or role ping
              </h3>
              <p className="text-xs text-gray-300 dark:text-neutral-300 mb-6 leading-relaxed font-sans-body">
                Reaches Athar directly. Perfect for fast coffee chats, internship roles, or brainstorming product friction.
              </p>

              {submittedNote ? (
                <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                  <p className="text-sm font-bold text-white">Opening your email client...</p>
                  <p className="text-xs text-emerald-300">
                    Thanks for reaching out! Looking forward to connecting.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSendQuickNote} className="space-y-3">
                  <div>
                    <input
                      type="email"
                      placeholder="Your email (optional)"
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.06] border border-white/10 text-xs text-white placeholder:text-white/40 focus:outline-none focus:border-[#D46338] dark:focus:border-[#E87A54] transition-colors font-mono"
                    />
                  </div>
                  <div>
                    <textarea
                      rows={3}
                      placeholder="Hey Athar, would love to chat about..."
                      value={quickNote}
                      onChange={(e) => setQuickNote(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.06] border border-white/10 text-xs sm:text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#D46338] dark:focus:border-[#E87A54] transition-colors resize-none font-sans-body"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-white text-[#1A1A1A] font-bold text-xs hover:bg-[#F9F8F6] hover:text-[#D46338] dark:hover:text-[#E87A54] transition-all flex items-center justify-center space-x-2"
                  >
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Footer Meta Details Row */}
        <div className="pt-12 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-gray-400">
          
          {/* Social & Contact Links */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 font-mono">
            <a
              href={HERO_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center space-x-1.5 group"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#0A66C2] group-hover:text-white transition-colors" />
              <span>linkedin.com/in/athar-khan-2a7b51253</span>
            </a>
            <a
              href={HERO_INFO.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center space-x-1.5"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>atharkhan.vercel.app</span>
            </a>
            <a
              href={`tel:${HERO_INFO.phone}`}
              className="hover:text-white transition-colors flex items-center space-x-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{HERO_INFO.phone}</span>
            </a>
          </div>

          {/* Timezone Status Pill */}
          <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/10 font-mono text-[11px]">
            <Clock className="w-3 h-3 text-[#D46338]" />
            <span>Time:</span>
            <span className="text-white font-medium">{istTime || 'IST (GMT+5:30)'}</span>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right font-mono text-[11px] text-gray-500">
            © 2026 Athar Khan. Built with craft & conviction.
          </div>

        </div>

      </div>
    </footer>
  );
};
