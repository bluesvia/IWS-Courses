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

export default function HowItWorks() {
  const [showTopCalendly, setShowTopCalendly] = useState(false);
  const [showBottomCalendly, setShowBottomCalendly] = useState(false);
  const steps = [
    {
      title: "Choose the right course",
      description: "Families select the course or programme that matches the student’s age, level and academic goal.",
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      title: "Enrol online",
      description: "Parents complete the enrolment or enquiry process online. For selected courses, payment and access can be completed directly.",
      icon: <Laptop className="w-6 h-6" />
    },
    {
      title: "Get access to the learning platform",
      description: "Students receive access to the IWS learning platform, where course materials, lesson links, resources and important information are organised.",
      icon: <FolderOpen className="w-6 h-6" />
    },
    {
      title: "Learn with support",
      description: "Depending on the course type, students join live lessons, complete guided activities, access learning materials and receive teacher support.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Track progress and prepare for next steps",
      description: "Students and parents can follow progress, understand upcoming tasks and receive guidance for assessments, exams or future study.",
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  const studentFeatures = [
    "Online course materials",
    "Live or guided lessons depending on the course",
    "Learning resources",
    "Teacher support",
    "Lesson links and updates",
    "Progress guidance",
    "Clear next steps after enrolment"
  ];

  const parentFeatures = [
    "How enrolment works",
    "What happens after payment",
    "How the child accesses lessons",
    "How the learning platform works",
    "How support is provided",
    "Who to contact if help is needed",
    "How the student’s progress can be followed"
  ];

  const learningFormats = [
    {
      title: "Live Learning",
      description: "Scheduled online lessons with teachers.",
      icon: <CalendarCheck className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Hybrid Learning",
      description: "A mix of live sessions, guided study and independent learning.",
      icon: <Users className="w-6 h-6 text-purple-600" />
    },
    {
      title: "Self-Paced Learning",
      description: "Flexible access to course materials with support where available.",
      icon: <MonitorPlay className="w-6 h-6 text-emerald-600" />
    }
  ];

  const faqs = [
    "What happens after I enrol?",
    "How does my child access the course?",
    "Are lessons live or recorded?",
    "Can parents track progress?",
    "What support is available?",
    "What if we need help logging in?",
    "How do payments work?",
    "Is the learning platform easy to use?",
    "Can students study from outside the UK?",
    "Who should I contact if I am unsure which course is right?"
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24">
      {/* 1. Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 mb-6 tracking-tight"
        >
          How online learning works at IWS
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          A clear, supported learning journey from enrolment to online lessons, course materials, progress tracking and next steps.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button 
            onClick={() => setShowTopCalendly(!showTopCalendly)}
            className="px-8 py-4 bg-[#0a1776] text-white rounded-full font-medium hover:bg-[#0a1776]/90 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            <Phone size={20} />
            {showTopCalendly ? 'Close Calendar' : 'Book a call'}
          </button>
          <Link to="/courses" className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-medium hover:border-slate-300 hover:bg-slate-50 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center">
            Explore courses
            <ArrowRight size={20} />
          </Link>
        </motion.div>

        <AnimatePresence>
          {showTopCalendly && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="w-full max-w-5xl mx-auto overflow-hidden"
            >
              <CalendlyEmbed />
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* 2. Simple 5-Step Process Section */}
      <section className="bg-white py-24 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">A simple journey from enrolment to learning</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6 mb-12 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-50 text-[#0a1776] flex items-center justify-center font-bold text-lg shrink-0 border border-blue-100 shadow-sm relative z-10">
                    {index + 1}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-px h-full bg-slate-200 my-2"></div>
                  )}
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 & 4. What Students Get & What Parents Need to Know */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Students */}
          <div className="bg-white p-8 lg:p-10 rounded-[2.5rem] shadow-sm border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Everything students need to start learning</h2>
            <p className="text-slate-500 mb-8">Students can access:</p>
            <ul className="space-y-4">
              {studentFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-4 text-slate-700">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                  <span className="leading-snug pt-0.5">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Parents */}
          <div className="bg-slate-900 text-white p-8 lg:p-10 rounded-[2.5rem] shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-2">Clear information for parents</h2>
            <p className="text-slate-400 mb-8">Parents should understand:</p>
            <ul className="space-y-4">
              {parentFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-4 text-slate-300">
                  <CheckCircle2 className="w-6 h-6 text-blue-400 shrink-0" />
                  <span className="leading-snug pt-0.5">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Learning Formats */}
      <section className="py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Flexible learning options</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Important Note: The exact learning format may depend on the selected course or programme.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {learningFormats.map((format, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-6">
                  {format.icon}
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
