import { motion } from 'motion/react';
import { Calendar } from 'lucide-react';
import CalendlyEmbed from '../components/CalendlyEmbed';

export default function BookACall() {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="w-16 h-16 bg-blue-100 text-[#0a1776] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
            <Calendar size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4 tracking-tight">
            Book a Discovery Call
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Speak with our admissions team to learn more about IWS Online School and how we can support your child's education.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="w-full mx-auto"
        >
          <CalendlyEmbed />
        </motion.div>
      </div>
    </div>
  );
}
