import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Layout, Target, ShoppingCart, Clock, FileText, Star, Users, CheckCircle2 } from 'lucide-react';
import { cn } from '../lib/utils';
import WhyChooseIWS from '../components/layout/WhyChooseIWS';
import FAQSection from '../components/layout/FAQSection';

export default function Home() {
  const navigate = useNavigate();
  const [courseType, setCourseType] = useState('gcses');
  const [courseContext, setCourseContext] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (courseType === 'gcses') {
      navigate('/course/math');
    } else {
      const el = document.getElementById('courses');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-visible bg-[#0a1776] pt-32 lg:pt-40 pb-32 md:pb-48">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center relative">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-8 max-w-3xl text-left relative z-20">
              {/* Heading */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl lg:text-[4rem] font-display font-bold tracking-tight text-white leading-[1.1]"
              >
                Premium British <br className="hidden md:block" />
                Online Education <br className="hidden md:block" />
                <span className="text-3xl md:text-4xl lg:text-[3rem] text-blue-300 mt-2 block">for Students Aged 7–19</span>
              </motion.h1>
              
              {/* Subtitle */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg text-blue-100 leading-relaxed max-w-xl font-medium"
              >
                Learn from anywhere with live teacher-led lessons, Cambridge curriculum pathways and a supportive online school community.
              </motion.p>
              
              {/* Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row items-center justify-start gap-4 pt-2"
              >
                <Link 
                  to="/courses"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#ff9600] text-white font-bold text-base hover:bg-[#e68700] transition-colors shadow-[0_0_20px_rgba(255,150,0,0.3)] hover:shadow-[0_0_30px_rgba(255,150,0,0.5)]"
                >
                  Explore Courses
                </Link>
                <Link 
                  to="/book-a-call"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-transparent border-2 border-white/20 text-white font-bold text-base hover:bg-white/10 hover:border-white/40 transition-all"
                >
                  Book a Call
                </Link>
              </motion.div>

              {/* Trust Line */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-3 text-sm text-blue-200 font-medium"
              >
                <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-[#ff9600]" /> Cambridge curriculum</span>
                <span className="text-blue-400/50 hidden sm:inline">•</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-[#ff9600]" /> Live online lessons</span>
                <span className="text-blue-400/50 hidden md:inline">•</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-[#ff9600]" /> Primary to A Level</span>
              </motion.div>
            </div>

            {/* Right Content - Visual */}
            <div className="lg:col-span-6 relative hidden md:block z-10 lg:pl-10">
               <motion.div 
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ delay: 0.2 }}
                 className="relative w-full max-w-[700px] mx-auto"
               >
                 {/* Glow Background */}
                 <div className="absolute inset-0 bg-blue-400/20 blur-[80px] rounded-full transform -translate-y-4" />
                 
                 {/* Main Image/Video */}
                 <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex items-center justify-center bg-black/20">
                   <video 
                     src="https://raw.githubusercontent.com/bluesvia/IWS-hero-Video/main/compressO-IWS-lesson-live_.mp4?v=2" 
                     autoPlay
                     loop
                     muted
                     playsInline
                     className="w-full h-auto object-contain"
                   />
                   <div className="absolute inset-0 border border-white/20 rounded-2xl pointer-events-none" />
                 </div>

               </motion.div>
            </div>
          </div>
        </div>

        {/* Course Finder Widget */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[95%] max-w-4xl z-30">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-200 p-2 md:p-3"
          >
            <form onSubmit={handleSearch} className="flex flex-col md:flex-row items-stretch gap-2">
              <div className="flex-1 relative">
                <select 
                  value={courseType}
                  onChange={(e) => setCourseType(e.target.value)}
                  className="w-full h-12 md:h-14 pl-4 pr-10 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-[#0a1776] appearance-none"
                >
                  <option value="gcses">GCSEs</option>
                  <option value="alevels">A levels</option>
                  <option value="primary">Primary</option>
                  <option value="functional">Functional Skills</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                </div>
              </div>
              <div className="w-px bg-slate-200 hidden md:block mx-1 my-2"></div>
              <div className="flex-[1.5] relative">
                <select 
                  value={courseContext}
                  onChange={(e) => setCourseContext(e.target.value)}
                  className="w-full h-12 md:h-14 pl-4 pr-10 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-[#0a1776] appearance-none"
                >
                  <option value="">Select a course...</option>
                  {courseType === 'gcses' && <option value="math">Foundation Mathematics</option>}
                  {courseType === 'alevels' && <option value="coming-soon">More courses coming soon</option>}
                  {courseType === 'primary' && <option value="coming-soon">More courses coming soon</option>}
                  {courseType === 'functional' && <option value="coming-soon">More courses coming soon</option>}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                </div>
              </div>
              <button 
                type="submit"
                className="h-12 md:h-14 px-8 bg-[#0a1776] hover:bg-[#0a1776]/90 text-white font-bold rounded-lg transition-colors flex justify-center items-center gap-2 shrink-0 shadow-sm"
              >
                Go <ArrowRight size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Why Choose IWS Section */}
      <WhyChooseIWS variant="homepage" />

      {/* Featured Math Course Section */}
      <section id="courses" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Explore IWS Online Courses</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Focused online courses designed to support students through clear, structured learning pathways.</p>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-8 justify-center">
            {/* New Design Card - Math Course */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="group bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-slate-100 flex flex-col w-[340px] shrink-0 overflow-hidden"
            >
              <div className="relative h-[200px] w-full">
                <img src="/math_board.webp" alt="Foundation Mathematics" className="w-full h-full object-cover" />
                <div className="absolute top-3 right-3">
                  <span className="px-3 py-1.5 bg-white text-slate-800 text-[13px] font-semibold rounded-lg shadow-sm">
                    IGCSE
                  </span>
                </div>
              </div>
              
              <div className="p-5 flex flex-col gap-3 flex-1">
                <div className="flex items-center gap-4 text-[13px] text-slate-500 font-medium">
                  <div className="flex items-center gap-1.5">
                    <Clock size={14} className="text-slate-400" />
                    <span>12 Months access</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <FileText size={14} className="text-slate-400" />
                    <span>10 Modules</span>
                  </div>
                </div>
                
                <h3 className="text-[17px] font-bold text-slate-900 leading-snug">
                  Foundation Mathematics Online Course
                </h3>
                
                <p className="text-[13px] text-slate-500 truncate">
                  IWS Online School
                </p>
                
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex items-center text-slate-500 gap-1.5">
                    <Users size={16} className="text-slate-400" />
                    <span className="text-[14px] text-slate-600"><strong>4,208</strong> Enrolled</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-2">
                  <span className="text-lg font-bold text-slate-900">£149</span>
                  <span className="text-[14px] text-slate-400 line-through">£169</span>
                </div>

                <div className="flex gap-2 w-full mt-4">
                  <Link 
                    to="/course/math"
                    className="flex-1 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-medium text-center transition-colors flex items-center justify-center text-sm"
                  >
                    View Details
                  </Link>
                  <button className="w-12 h-[44px] bg-[#0a1776] hover:bg-[#0a1776]/90 text-white rounded-xl flex items-center justify-center shrink-0 transition-colors" title="Add to Cart">
                    <ShoppingCart size={18} />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Course Card 2 (Placeholder) */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="group bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-slate-100 flex flex-col w-[340px] shrink-0 overflow-hidden opacity-70"
            >
              <div className="relative h-[200px] w-full bg-slate-100 flex items-center justify-center">
                <span className="text-slate-400 font-medium text-sm">Image Coming Soon</span>
                <div className="absolute top-3 right-3">
                  <span className="px-3 py-1.5 bg-slate-200 text-slate-600 text-[13px] font-semibold rounded-lg shadow-sm">
                    TBA
                  </span>
                </div>
              </div>
              
              <div className="p-5 flex flex-col gap-3 flex-1">
                <div className="flex items-center gap-4 text-[13px] text-slate-400 font-medium">
                  <div className="flex items-center gap-1.5">
                    <Clock size={14} />
                    <span>TBA</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <FileText size={14} />
                    <span>TBA</span>
                  </div>
                </div>
                
                <h3 className="text-[17px] font-bold text-slate-400 leading-snug">
                  New Course Coming Soon
                </h3>
                
                <p className="text-[13px] text-slate-400 truncate">
                  IWS Online School
                </p>
                
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex items-center text-slate-400 gap-1.5">
                    <Users size={16} />
                    <span className="text-[14px]">-- Enrolled</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-2">
                  <span className="text-lg font-bold text-slate-300">-</span>
                </div>

                <div className="flex gap-2 w-full mt-4">
                  <div 
                    className="flex-1 py-3 bg-slate-100 text-slate-400 rounded-xl font-medium text-center flex items-center justify-center text-sm cursor-not-allowed"
                  >
                    Coming Soon
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <div className="bg-white py-16 md:py-24 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQSection />
        </div>
      </div>
    </div>
  );
}
