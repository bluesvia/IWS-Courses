import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  CheckCircle2,
  ChevronDown,
  MonitorPlay,
  FileText,
  ArrowRight,
  Clock,
  BookOpen,
  User,
  PhoneCall,
  HelpCircle,
  GraduationCap,
  Users,
  ShieldCheck,
  Monitor,
  MessageSquare,
  UserCheck,
  CalendarDays,
  Lock,
} from "lucide-react";
import { cn } from "../lib/utils";
import { Link, useNavigate, useParams } from "react-router-dom";
import { trackEvent } from "../lib/tracking";
import { useAuth } from "../contexts/AuthContext";
import { useCourses } from "../contexts/CourseContext";
import WhyChooseIWS from "../components/layout/WhyChooseIWS";
import FAQSection from "../components/layout/FAQSection";
import CourseTabs from "../components/layout/CourseTabs";

export default function Course() {
  const { id } = useParams();
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  const { getCourse } = useCourses();
  
  const course = getCourse(id || "math");

  useEffect(() => {
    if (course) {
      trackEvent("view_course", { course_name: course.title });
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [course]);

  if (!course) {
    return <div className="min-h-screen flex items-center justify-center">Course not found</div>;
  }

  const handleEnrolClick = (position: string) => {
    trackEvent("click_enrol_now", { position });
    navigate("/cart");
  };

  const handleAskQuestion = () => {
    trackEvent("click_ask_question");
    alert("Contact modal / Mailto link opens here");
  };

  return (
    <div className="relative min-h-screen pb-32">
      {/* Top Hero Background Image */}
      <div className="absolute top-0 left-0 right-0 h-[850px] lg:h-[750px] z-0 overflow-hidden bg-white">
        <img
          src={course.bgImageUrl || "/IWS-math-bg.webp"}
          alt="Course Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Sticky Bottom Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-md border-t border-slate-200 z-50 xl:hidden flex gap-4 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <div className="flex flex-col justify-center px-2">
          <div className="text-lg font-bold text-slate-900 leading-none">£{course.price}</div>
          <div className="text-xs text-slate-500 mt-1 font-medium">or £{course.price}/mo</div>
        </div>
        <button
          onClick={() => handleEnrolClick("mobile_sticky")}
          className="flex-1 py-3.5 bg-[#0a1776] text-white font-bold rounded-lg flex items-center justify-center gap-2 shadow-sm"
        >
          Enrol Now
        </button>
      </div>

      {/* Content wrapper */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-24 pb-16 grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_420px] gap-y-12 gap-x-12 xl:gap-x-16 items-start">
          
          {/* Hero Header */}
          <div className="w-full order-1">
            {/* Hero Header */}
            <section className="relative pb-16 border-b border-slate-200/60">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#0a1776]/10 text-[#0a1776] text-sm font-medium border border-[#0a1776]/20 bg-white/50 backdrop-blur-md">
                  <BookOpen size={16} /> IWS Online School
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-slate-900 leading-[1.1] tracking-tight whitespace-pre-line">
                  {course.title}
                </h1>

                <p className="text-lg text-slate-800 max-w-xl leading-relaxed font-medium whitespace-pre-line">
                  {course.subtitle}
                </p>

                <ul className="space-y-3 text-slate-900 font-bold pb-4">
                  {course.bullets.filter(b => b.trim() !== "").map((bullet, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="text-[#0a1776]" size={20} />{" "}
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                  <button
                    onClick={() => handleEnrolClick("hero_primary")}
                    className="w-full sm:w-auto px-8 py-4 bg-[#0a1776] text-white rounded-lg font-bold text-lg hover:bg-[#0a1776]/90 transition shadow-sm flex justify-center items-center gap-2"
                  >
                    Enrol Now <ArrowRight size={20} />
                  </button>
                  <Link
                    to="/book-a-call"
                    className="w-full sm:w-auto px-8 py-4 bg-white/80 backdrop-blur-md text-slate-800 border border-slate-300 rounded-lg font-bold text-lg hover:bg-white transition flex justify-center items-center gap-2 shadow-sm"
                  >
                    <PhoneCall size={20} /> Book a Free Course Call
                  </Link>
                </div>
              </div>
            </section>
          </div>

          {/* Left Column (Main Content) */}
          <div className="w-full order-3">
            {/* Course Highlights */}
            <section className="border-b border-slate-200/60 bg-white/40 backdrop-blur-md mt-8 py-8 px-4 sm:px-8 sm:rounded-2xl -mx-4 sm:mx-0">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-x-0 md:divide-x divide-slate-200/60">
                <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left">
                  <Clock className="text-[#0a1776] mb-2" size={24} />
                  <h4 className="font-bold text-slate-900">Duration</h4>
                  <p className="text-sm text-slate-700 font-medium">
                    {course.duration}
                  </p>
                </div>
                <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left md:pl-4">
                  <GraduationCap className="text-[#0a1776] mb-2" size={24} />
                  <h4 className="font-bold text-slate-900">Level</h4>
                  <p className="text-sm text-slate-700 font-medium">
                    Cambridge IGCSE Mathematics
                  </p>
                </div>
                <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left md:pl-4">
                  <User className="text-[#0a1776] mb-2" size={24} />
                  <h4 className="font-bold text-slate-900">Support</h4>
                  <p className="text-sm text-slate-700 font-medium">
                    IWS Academic Team
                  </p>
                </div>
                <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left md:pl-4">
                  <FileText className="text-[#0a1776] mb-2" size={24} />
                  <h4 className="font-bold text-slate-900">Assessment</h4>
                  <p className="text-sm text-slate-700 font-medium">
                    Exam Preparation & Practice Papers
                  </p>
                </div>
              </div>
            </section>

            {/* Main Content */}
            <div className="mt-16">
              <CourseTabs course={course} />
            </div>
          </div>

          {/* Right Column (Sticky Snapshot Card) */}
          <div className="w-full max-w-xl mx-auto xl:mx-0 shrink-0 xl:sticky xl:top-24 xl:z-20 order-2 xl:row-span-2">
            <div className="bg-gradient-to-b from-[#0a1776] to-blue-600 rounded-[24px] p-8 shadow-2xl text-white relative">
              {/* Pricing Options */}
              <div className="flex divide-x divide-white/10 border-b border-white/10 pb-6 mb-6">
                <div className="flex-1 pr-6">
                  <h4 className="font-bold text-white mb-1">Single Payment</h4>
                  <div className="flex items-baseline gap-2 mb-2">
                    <div className="text-4xl font-label font-bold text-white tracking-tight">
                      £{course.price}
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm">By card or mobile</p>
                </div>
                <div className="flex-1 pl-6">
                  <h4 className="font-bold text-white mb-1">Pay Monthly</h4>
                  <div className="text-2xl font-label font-bold text-white mb-2 tracking-tight">
                    £{course.price}<span className="text-xl text-slate-300">/mo</span>
                  </div>
                  <p className="text-slate-400 text-sm leading-snug">
                    with 0% APR representative; 12 month plan.{" "}
                    <a href="#" className="underline hover:text-white">
                      Find out more.
                    </a>
                  </p>
                </div>
              </div>

              {/* What's included */}
              <h3 className="font-display font-medium text-3xl text-[#e8f1ff] mb-6">
                What's included
              </h3>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-4">
                  <Monitor
                    className="text-slate-400 shrink-0 mt-0.5"
                    size={20}
                  />
                  <span className="text-slate-200">
                    24/7 access to IWS learning platform
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <FileText
                    className="text-slate-400 shrink-0 mt-0.5"
                    size={20}
                  />
                  <span className="text-slate-200">
                    Expert course materials
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <MessageSquare
                    className="text-slate-400 shrink-0 mt-0.5"
                    size={20}
                  />
                  <span className="text-slate-200">
                    Support from our Student Services team
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <UserCheck
                    className="text-slate-400 shrink-0 mt-0.5"
                    size={20}
                  />
                  <span className="text-slate-200">
                    12 months continuous guidance
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2
                    className="text-slate-400 shrink-0 mt-0.5"
                    size={20}
                  />
                  <span className="text-slate-200">
                    Exam preparation pathway
                  </span>
                </li>
              </ul>

              <div className="bg-white/5 rounded-xl p-4 mb-8 border border-white/10">
                <p className="text-sm text-slate-300 italic">
                  * Any fees in relation to exam entries or assessments are not
                  covered by your course fee.
                </p>
              </div>

              {/* Actions */}
              <div className="space-y-4">
                <button
                  onClick={() => handleEnrolClick("sticky_sidebar")}
                  className="w-full py-4 bg-white text-[#0a1776] rounded-lg font-bold text-lg hover:bg-slate-100 transition shadow-lg flex justify-center items-center gap-2 uppercase tracking-wide"
                >
                  ENROL NOW <Lock size={18} />
                </button>

                <Link
                  to="/book-a-call"
                  className="w-full py-4 bg-white/10 text-white rounded-lg font-bold text-[15px] hover:bg-white/20 transition flex justify-center items-center gap-3 uppercase tracking-wide border border-white/20"
                >
                  <img
                    src="/Captan Alby_Talk.webp"
                    alt="Advisor"
                    className="w-10 h-10 object-contain"
                  />
                  Talk to a course advisor
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <FAQSection className="!bg-transparent" />
        </div>
        
        {/* Final CTA Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <section className="bg-[#0a1776] rounded-[24px] p-8 md:p-16 text-center shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Ready to start learning with IWS?
              </h2>
              <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                Enrol online or speak with our team if you need help choosing the right course for your child.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <button
                  onClick={() => handleEnrolClick("bottom_cta")}
                  className="w-full sm:w-auto px-8 py-4 bg-white text-[#0a1776] rounded-xl font-label font-bold text-[13px] uppercase tracking-[0.15em] hover:bg-slate-100 transition shadow-lg"
                >
                  Enrol Now
                </button>
                <Link
                  to="/book-a-call"
                  className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/30 text-white rounded-xl font-label font-bold text-[13px] uppercase tracking-[0.15em] hover:bg-white/10 transition"
                >
                  Book a Call
                </Link>
              </div>
            </div>
            {/* Subtle background decoration */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
          </section>
        </div>

      </div>
    </div>
  );
}
