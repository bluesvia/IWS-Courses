import { motion } from "motion/react";

export default function PartnerBadge() {
  return (
    <motion.div 
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.5 }}
      className="fixed left-0 top-1/2 -translate-y-1/2 z-[60] hidden lg:flex pointer-events-none"
    >
      <div className="bg-[#0a1776] py-4 sm:py-6 px-1.5 sm:px-2 rounded-r-xl shadow-xl border border-white/20 border-l-0 pointer-events-auto relative overflow-hidden group hover:px-2 sm:hover:px-2.5 transition-all duration-300">
        {/* Subtle glow effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        <span 
          className="text-[9px] sm:text-[11px] font-bold text-white uppercase tracking-[0.15em] whitespace-nowrap block"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          Cambridge Approved Curriculum Partner
        </span>
      </div>
    </motion.div>
  );
}
