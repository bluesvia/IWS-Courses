import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Target, Layout, ShoppingCart } from 'lucide-react';

export default function Courses() {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">All Courses</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Discover our comprehensive range of online courses designed to support students through clear, structured learning pathways.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">IGCSE Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Course Card 1 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="group bg-white rounded-[2rem] p-3 shadow-sm border border-slate-200 flex flex-col"
            >
              <div className="relative h-[220px] rounded-[1.5rem] overflow-hidden mb-4">
                <img src="/math_board.webp" alt="Mathematics Concepts" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 bg-white text-slate-900 text-xs font-bold uppercase tracking-wider rounded-full shadow-sm flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>
                    IGCSE
                  </span>
                </div>
              </div>
              
              <div className="px-2 pb-2 flex-1 flex flex-col">
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-2xl font-bold text-slate-900">£149</span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight">Foundation Mathematics</h3>
                
                <div className="flex justify-between items-center py-4 border-t border-b border-slate-100 mb-4">
                  <div className="flex flex-col gap-1 items-center flex-1">
                    <Target size={18} className="text-slate-400" />
                    <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Level</span>
                    <span className="text-sm font-semibold text-slate-700">Foundation</span>
                  </div>
                  <div className="w-px h-10 bg-slate-200"></div>
                  <div className="flex flex-col gap-1 items-center flex-1">
                    <Layout size={18} className="text-slate-400" />
                    <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Mode</span>
                    <span className="text-sm font-semibold text-slate-700">Online</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 mb-6 text-sm text-slate-500 justify-center">
                  <span className="font-medium text-slate-700">IWS</span> • Onboarding support
                </div>

                <div className="flex gap-2 w-full mt-auto">
                  <Link 
                    to="/course/math"
                    className="flex-1 py-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl font-medium text-center transition-colors flex items-center justify-center"
                  >
                    View Details
                  </Link>
                  <button className="w-14 h-[52px] bg-[#0a1776] hover:bg-[#0a1776]/90 text-white rounded-2xl flex items-center justify-center shrink-0 transition-colors" title="Add to Cart">
                    <ShoppingCart size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
            
            {/* Course Card 2 (Placeholder) */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="group bg-white rounded-[2rem] p-3 shadow-sm border border-slate-200 flex flex-col opacity-60"
            >
              <div className="relative h-[220px] rounded-[1.5rem] overflow-hidden mb-4 bg-slate-100 flex items-center justify-center">
                <span className="text-slate-400 font-medium">Image Coming Soon</span>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 bg-white text-slate-900 text-xs font-bold uppercase tracking-wider rounded-full shadow-sm flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                    COMING SOON
                  </span>
                </div>
              </div>
              
              <div className="px-2 pb-2 flex-1 flex flex-col">
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-2xl font-bold text-transparent select-none">-</span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-400 mb-4 leading-tight">New Course Coming</h3>
                
                <div className="flex justify-between items-center py-4 border-t border-b border-slate-100 mb-4">
                  <div className="flex flex-col gap-1 items-center flex-1">
                    <Target size={18} className="text-slate-200" />
                    <span className="text-xs font-medium text-slate-300 uppercase tracking-wider">Level</span>
                    <span className="text-sm font-semibold text-slate-300">TBA</span>
                  </div>
                  <div className="w-px h-10 bg-slate-200"></div>
                  <div className="flex flex-col gap-1 items-center flex-1">
                    <Layout size={18} className="text-slate-200" />
                    <span className="text-xs font-medium text-slate-300 uppercase tracking-wider">Mode</span>
                    <span className="text-sm font-semibold text-slate-300">TBA</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 mb-6 text-sm text-slate-300 justify-center">
                  <span className="font-medium">Details TBA</span>
                </div>

                <div 
                  className="w-full py-3.5 bg-slate-100 text-slate-400 rounded-2xl font-medium text-center mt-auto cursor-not-allowed"
                >
                  Coming Soon
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
