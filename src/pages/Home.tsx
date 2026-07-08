import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Layout, Target, ShoppingCart, Clock, FileText, Star, Users, CheckCircle2, Lock, BookOpen } from 'lucide-react';
import { cn } from '../lib/utils';
import WhyChooseIWS from '../components/layout/WhyChooseIWS';
import GlobalUniversityPathways from '../components/layout/GlobalUniversityPathways';
import FAQSection from '../components/layout/FAQSection';
import { useAuth } from '../contexts/AuthContext';
import { useContent } from '../contexts/ContentContext';
import { useCourses } from '../contexts/CourseContext';

export default function Home() {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  const { content } = useContent();
  const { courses } = useCourses();
  const [courseType, setCourseType] = useState('igcses');
  const [courseContext, setCourseContext] = useState('');
  const [notifiedCourses, setNotifiedCourses] = useState<string[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroSlides = [
    content.home.heroSlide1,
    content.home.heroSlide2,
    content.home.heroSlide3,
    content.home.heroSlide4,
    content.home.heroSlide5
  ].filter(Boolean);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(timer);
  }, []);
  
  const handleNotifyClick = (e: React.MouseEvent, courseId: string) => {
    e.preventDefault(); // Prevent navigating if this was inside a link
    if (!isLoggedIn) {
      navigate('/login');
      return;
    }
    setNotifiedCourses(prev => [...prev, courseId]);
  };

  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleScroll = () => {
    if (carouselRef.current) {
      const currentScrollLeft = carouselRef.current.scrollLeft;
      const cardWidth = window.innerWidth < 768 ? 320 + 16 : 400 + 24;
      const index = Math.round(currentScrollLeft / cardWidth);
      setActiveIndex(index);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (carouselRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2; // scroll-fast
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const scrollTo = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = window.innerWidth < 768 ? 320 + 16 : 400 + 24;
      carouselRef.current.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
    }
  };

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
      <section className="relative overflow-hidden bg-[#0a1776] pt-32 lg:pt-40 pb-32 md:pb-48 min-h-[90vh] flex flex-col justify-center">
        
        {/* Background Slider (Behind Content) */}
        <div className="absolute top-24 -right-[15%] lg:-right-[10%] bottom-0 w-full lg:w-[90%] z-0 hidden lg:block">
           <AnimatePresence initial={false}>
             <motion.div 
               key={currentSlide}
               className="absolute inset-y-0 left-0 right-[40px] xl:right-[80px] rounded-r-3xl lg:rounded-r-[40px] rounded-l-none overflow-hidden bg-[#0a1776]"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               transition={{ duration: 0.8, ease: "easeInOut" }}
             >
                <img src={heroSlides[currentSlide % heroSlides.length]} alt={`Hero Slide ${(currentSlide % heroSlides.length) + 1}`} className="w-full h-full object-cover object-[20%_center] md:object-[30%_center]" />
             </motion.div>
           </AnimatePresence>
           
           {/* Gradient overlay on the left edge to blend with background */}
           <div className="absolute inset-y-0 left-0 w-[60%] xl:w-[70%] bg-gradient-to-r from-[#0a1776] via-[#0a1776] to-transparent z-[40] pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center relative">
            
            {/* Left Content */}
            <div className="lg:col-span-8 xl:col-span-7 space-y-8 max-w-3xl text-left relative z-20">
              {/* Heading */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl lg:text-[4rem] font-display font-bold tracking-tight text-white leading-[1.1] whitespace-pre-line"
              >
                {content.home.heroTitle}
              </motion.h1>
              
              {/* Subtitle */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg text-blue-100 leading-relaxed max-w-xl font-medium whitespace-pre-line"
              >
                {content.home.heroSubtitle}
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
                  {content.home.heroCTA}
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
                <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-[#ff9600]" /> Cambridge International curriculum</span>
                <span className="text-blue-400/50 hidden sm:inline">•</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-[#ff9600]" /> Ages 7–19</span>
                <span className="text-blue-400/50 hidden md:inline">•</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-[#ff9600]" /> IGCSE to A Level</span>
              </motion.div>
            </div>


          </div>
          
          {/* Course Finder Widget inside Hero */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-200 p-2 md:p-3 max-w-4xl"
          >
            <form onSubmit={handleSearch} className="flex flex-col md:flex-row items-stretch gap-2">
              <div className="flex-1 relative">
                <select 
                  value={courseType}
                  onChange={(e) => setCourseType(e.target.value)}
                  className="w-full h-12 md:h-14 pl-4 pr-10 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-[#0a1776] appearance-none"
                >
                  <option value="igcses">IGCSEs</option>
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
                  {courseType === 'igcses' && <option value="math">IGCSE Mathematics — Year 10</option>}
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
                Find Course <ArrowRight size={18} />
              </button>
            </form>
          </motion.div>

          {/* Logo Ticker / Accredited & Recognised by */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16 pt-8 border-t border-white/10 overflow-hidden"
          >
            <p className="text-center text-blue-200/60 text-[13px] font-bold mb-6 uppercase tracking-[0.2em]">Accredited & recognised by</p>
            <div 
              className="relative flex overflow-hidden w-full max-w-7xl mx-auto"
              style={{
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
              }}
            >
              <div className="animate-marquee items-center flex-nowrap hover:[animation-play-state:paused] transition-all">
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="flex gap-16 md:gap-24 items-center mx-8 md:mx-12 shrink-0">
                     <img src="/Accredited_1.png" alt="Accredited 1" className="h-12 md:h-16 object-contain opacity-60 hover:opacity-100 transition-opacity shrink-0" />
                     <img src="/Accredited_2.webp" alt="Accredited 2" className="h-12 md:h-16 object-contain opacity-60 hover:opacity-100 transition-opacity shrink-0" />
                     <img src="/Accredited_3.webp" alt="Accredited 3" className="h-12 md:h-16 object-contain opacity-60 hover:opacity-100 transition-opacity shrink-0" />
                     <img src="/Accredited_4.webp" alt="Accredited 4" className="h-12 md:h-16 object-contain opacity-60 hover:opacity-100 transition-opacity shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Courses Section (Zoom Style) */}
      <section id="courses" className="py-24 relative overflow-hidden bg-slate-50">
        
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#0a1776] mb-6 tracking-tight">{content.home.exploreCoursesTitle}</h2>
            <p className="text-lg text-[#0a1776]/80 max-w-2xl mx-auto font-medium">{content.home.exploreCoursesSubtitle}</p>
          </div>

          <div className="relative group">
            {/* Carousel Container */}
            <div 
              ref={carouselRef}
              onScroll={handleScroll}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              className={`flex gap-4 md:gap-6 overflow-x-auto pb-12 pt-12 px-4 sm:px-8 snap-x snap-mandatory hide-scrollbar ${isDragging ? 'cursor-grabbing snap-none' : 'cursor-grab'}`}
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
            >
              {courses.map((course) => (
                <motion.div 
                  key={course.id}
                  whileHover={{ y: -24 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="relative flex flex-col w-[320px] md:w-[400px] h-[520px] shrink-0 snap-center rounded-[32px] overflow-hidden group shadow-[0_10px_30px_rgb(0,0,0,0.1)] hover:shadow-[0_30px_60px_rgb(0,0,0,0.3)] border border-slate-200"
                >
                  <img src={course.bgImageUrl || "/Slide_1.webp"} alt={course.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90 pointer-events-none" />
                  <div className="absolute top-0 left-0 p-8 w-full z-10">
                    <div className="flex items-center gap-3 text-white mb-2">
                      <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/10 shadow-sm">
                        <BookOpen size={24} />
                      </div>
                      <span className="font-bold text-xl drop-shadow-md">{course.title}</span>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 p-8 w-full z-10 flex flex-col gap-5">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-white text-[13px] font-bold tracking-wide border border-white/10 shadow-sm">{course.level}</span>
                      <span className="px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-white text-[13px] font-medium border border-white/10 shadow-sm flex items-center gap-1"><Clock size={12}/> {course.duration}</span>
                    </div>
                    <div className="w-full h-px bg-white/20 my-1" />
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-white/60 text-[13px] font-medium mb-0.5">Full Course</span>
                        <div className="flex items-baseline gap-2">
                          <span className="text-3xl font-label font-bold text-white drop-shadow-sm">£{course.price}</span>
                          {course.originalPrice && <span className="text-[14px] text-white/50 line-through font-label">£{course.originalPrice}</span>}
                        </div>
                      </div>
                      <Link 
                        to={`/course/${course.id}`}
                        className="h-12 px-6 bg-white hover:bg-slate-100 text-[#0a1776] rounded-xl font-bold text-sm transition-colors flex items-center justify-center shadow-lg"
                      >
                        View Course
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="hidden md:block">
              <button 
                onClick={() => scrollTo(Math.max(0, activeIndex - 1))}
                className={`absolute left-0 top-1/2 -translate-y-1/2 -ml-6 w-14 h-14 rounded-full bg-white text-[#0a1776] shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center justify-center transition-all hover:scale-105 z-20 ${activeIndex === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
              >
                <ArrowRight size={24} className="rotate-180" />
              </button>
              
              <button 
                onClick={() => scrollTo(Math.min(courses.length - 1, activeIndex + 1))}
                className={`absolute right-0 top-1/2 -translate-y-1/2 -mr-6 w-14 h-14 rounded-full bg-white text-[#0a1776] shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center justify-center transition-all hover:scale-105 z-20 ${activeIndex >= courses.length - 3 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
              >
                <ArrowRight size={24} />
              </button>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {courses.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollTo(idx)}
                className={`transition-all duration-300 rounded-full ${
                  activeIndex === idx 
                    ? 'w-8 h-2 bg-[#0a1776]' 
                    : 'w-2 h-2 bg-[#0a1776]/30 hover:bg-[#0a1776]/50'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose IWS Section */}
      <WhyChooseIWS variant="homepage" />

      {/* Global University Pathways */}
      <GlobalUniversityPathways />

      {/* Newsletter Section */}
      <section className="bg-[#0a1776] py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-400/10 blur-[100px] rounded-full transform -translate-y-1/2" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">{content.home.newsletterTitle}</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">{content.home.newsletterSubtitle}</p>
          
          <form className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder={content.home.newsletterPlaceholder}
              required
              className="flex-1 h-14 px-6 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button 
              type="submit"
              className="h-14 px-8 bg-white text-[#0a1776] font-bold rounded-xl hover:bg-slate-100 transition-colors shrink-0"
            >
              {content.home.newsletterCTA}
            </button>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <div className="bg-white py-16 md:py-24 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQSection />
        </div>
      </div>
    </div>
  );
}
