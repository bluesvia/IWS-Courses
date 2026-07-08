import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  MapPin, 
  MonitorPlay, 
  Users, 
  TrendingUp, 
  CheckCircle2, 
  Phone, 
  ArrowRight,
  Headset,
  Laptop,
  GraduationCap,
  CalendarCheck,
  FolderOpen
} from 'lucide-react';
import CalendlyEmbed from '../components/CalendlyEmbed';
import { useContent } from '../contexts/ContentContext';

export default function HowItWorks() {
  const [showTopCalendly, setShowTopCalendly] = useState(false);
  const [showBottomCalendly, setShowBottomCalendly] = useState(false);
  const { content } = useContent();

  const steps = content.howItWorks.steps || [];
  const studentFeatures = content.howItWorks.studentFeatures || [];
  const parentFeatures = content.howItWorks.parentFeatures || [];
  const learningFormats = content.howItWorks.learningFormats || [];
  const faqs = content.howItWorks.faqs || [];

  return (
    <div className="pt-24 bg-[#fafafa]">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-[#0a1776] text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src={content.howItWorks.heroImageUrl || undefined}
            alt="Students learning online" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1776] to-[#0a1776]/80"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              {content.howItWorks.title}
            </h1>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl leading-relaxed">
              {content.howItWorks.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setShowTopCalendly(!showTopCalendly)}
                className="px-8 py-4 bg-white text-[#0a1776] rounded-full font-bold hover:bg-slate-50 transition-colors"
              >
                {showTopCalendly ? 'Close Calendar' : 'Book a discovery call'}
              </button>
              <Link to="/courses" className="px-8 py-4 bg-transparent border-2 border-white/30 text-white rounded-full font-bold hover:bg-white/10 transition-colors text-center">
                Explore courses
              </Link>
            </div>
            
            <AnimatePresence>
              {showTopCalendly && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-8 overflow-hidden rounded-2xl"
                >
                  <CalendlyEmbed />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 2. Overview of the Journey (5 Steps) */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">The Student Journey</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">From choosing a course to achieving academic goals, here is what to expect.</p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-slate-200 z-0"></div>
          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-white shadow-xl shadow-blue-900/5 flex items-center justify-center text-[#0a1776] mb-6 border border-slate-100">
                <span className="text-2xl font-bold">{index + 1}</span>
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. The Details (Enrolment & Platform Access) */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">Simple enrolment process</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Parents can complete the process online. Upon enrolment, an account is automatically created on the IWS learning platform, giving the student access to their courses.
              </p>
              
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
                <h3 className="font-bold text-xl text-[#0a1776] mb-6">What to expect:</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-[#0a1776]">1</div>
                    <div>
                      <h4 className="font-bold text-slate-900">Select course</h4>
                      <p className="text-slate-600 text-sm mt-1">Choose the required subjects and level.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-[#0a1776]">2</div>
                    <div>
                      <h4 className="font-bold text-slate-900">Provide details</h4>
                      <p className="text-slate-600 text-sm mt-1">Fill in the necessary student information.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-[#0a1776]">3</div>
                    <div>
                      <h4 className="font-bold text-slate-900">Gain access</h4>
                      <p className="text-slate-600 text-sm mt-1">Receive platform login credentials and start learning.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] rounded-[2rem] overflow-hidden">
                <img 
                  src="/Slide_3.webp" 
                  alt="Student using platform" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs hidden md:block">
                <div className="flex items-center gap-4 mb-2">
                  <CheckCircle2 className="text-emerald-500" />
                  <span className="font-bold text-slate-900">Instant Access</span>
                </div>
                <p className="text-sm text-slate-600">Start learning immediately upon successful enrolment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Feature Lists (What do parents vs students see?) */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Clarity for everyone</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">We make sure both students and parents know exactly what to do.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* For Students */}
          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-slate-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-bl-full -z-10 opacity-50"></div>
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-[#0a1776] mb-6">
              <BookOpen size={24} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">For Students</h3>
            <ul className="space-y-4">
              {studentFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#0a1776] shrink-0" />
                  <span className="text-slate-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* For Parents */}
          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-slate-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-bl-full -z-10 opacity-50"></div>
            <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-700 mb-6">
              <Users size={24} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">For Parents</h3>
            <ul className="space-y-4">
              {parentFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-slate-400 shrink-0" />
                  <span className="text-slate-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Differentiating Formats */}
      <section className="py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Flexible learning options</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Important Note: The exact learning format may depend on the selected course or programme.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {learningFormats.map((format: any, idx: number) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-6">
                  {idx === 0 ? <CalendarCheck className="w-6 h-6 text-blue-600" /> : idx === 1 ? <Users className="w-6 h-6 text-purple-600" /> : <MonitorPlay className="w-6 h-6 text-emerald-600" />}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{format.title}</h3>
                <p className="text-slate-600">{format.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Learning Platform / Moodle Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">Everything organised in one place</h2>
            <div className="space-y-6 text-lg text-slate-600">
              <p>
                Students access their course materials, lesson information, resources and updates through the IWS learning platform.
              </p>
              <p>
                The platform helps students understand what to study, where to join lessons and what steps to complete next.
              </p>
            </div>
            
            <ul className="mt-8 space-y-3">
               {['A clean dashboard preview', 'Lesson cards', 'Course progress indicators', 'Student-friendly navigation'].map((item, i) => (
                 <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                   <div className="w-2 h-2 rounded-full bg-[#0a1776]"></div>
                   {item}
                 </li>
               ))}
            </ul>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/3] bg-white rounded-[2rem] shadow-2xl border border-slate-200 overflow-hidden relative">
               <div className="absolute top-0 left-0 right-0 h-12 bg-slate-50 border-b border-slate-200 flex items-center px-4 gap-2">
                 <div className="w-3 h-3 rounded-full bg-red-400"></div>
                 <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                 <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
               </div>
               <div className="absolute inset-x-0 bottom-0 top-12 bg-slate-100/50 p-6 flex flex-col gap-4">
                 <div className="w-1/3 h-8 bg-slate-200 rounded-lg animate-pulse"></div>
                 <div className="grid grid-cols-2 gap-4">
                   <div className="h-32 bg-white rounded-xl shadow-sm border border-slate-200 p-4 flex flex-col justify-between">
                     <div className="w-1/2 h-4 bg-slate-100 rounded"></div>
                     <div className="w-full h-2 bg-slate-100 rounded mt-4 overflow-hidden">
                       <div className="w-3/4 h-full bg-[#0a1776]"></div>
                     </div>
                   </div>
                   <div className="h-32 bg-white rounded-xl shadow-sm border border-slate-200 p-4 flex flex-col justify-between">
                     <div className="w-1/2 h-4 bg-slate-100 rounded"></div>
                     <div className="w-full h-2 bg-slate-100 rounded mt-4 overflow-hidden">
                       <div className="w-1/4 h-full bg-[#0a1776]"></div>
                     </div>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Support Section */}
      <section className="bg-[#0a1776] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Support throughout the learning journey</h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Students and parents should know that they are not left alone after enrolment. IWS explains what kind of support is available.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { icon: <GraduationCap size={24} />, text: "Teacher guidance" },
              { icon: <Laptop size={24} />, text: "Platform support" },
              { icon: <CheckCircle2 size={24} />, text: "Admissions support" },
              { icon: <Headset size={24} />, text: "Help with login" },
              { icon: <TrendingUp size={24} />, text: "Academic guidance" }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-6 bg-white/10 rounded-[2rem] border border-white/10 backdrop-blur-sm">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4 text-blue-200">
                  {item.icon}
                </div>
                <span className="font-medium text-blue-50 leading-snug">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ Section */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="p-6 bg-white rounded-2xl shadow-sm border border-slate-200 flex justify-between items-center cursor-pointer hover:border-slate-300 transition-colors">
              <span className="font-bold text-slate-800">{faq}</span>
              <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 shrink-0">
                +
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Final CTA Section */}
      <section className="py-24 text-center max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6 tracking-tight">
          Not sure which course is right?
        </h2>
        <p className="text-lg text-slate-600 mb-10 leading-relaxed">
          Speak with our admissions team and we'll help you choose the right pathway for your child.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button 
            onClick={() => setShowBottomCalendly(!showBottomCalendly)}
            className="w-full sm:w-auto px-8 py-4 bg-[#0a1776] text-white rounded-full font-medium hover:bg-[#0a1776]/90 transition-colors shadow-lg shadow-[#0a1776]/20"
          >
            {showBottomCalendly ? 'Close Calendar' : 'Book a call'}
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-slate-100 text-slate-900 rounded-full font-medium hover:bg-slate-200 transition-colors">
            Contact admissions
          </button>
          <Link to="/courses" className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 text-slate-900 rounded-full font-medium hover:bg-slate-50 transition-colors">
            Explore courses
          </Link>
        </div>

        <AnimatePresence>
          {showBottomCalendly && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="w-full max-w-5xl mx-auto overflow-hidden text-left"
            >
              <CalendlyEmbed />
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}
