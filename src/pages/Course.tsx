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
import { Link, useNavigate, useLocation } from "react-router-dom";
import { trackEvent } from "../lib/tracking";
import { useAuth } from "../contexts/AuthContext";
import WhyChooseIWS from "../components/layout/WhyChooseIWS";
import FAQSection from "../components/layout/FAQSection";

const SYLLABUS = [
  {
    id: 1,
    title: "Number and the number system",
    description:
      "Fractions, decimals, percentages, and basic number operations.",
    episodes: 8,
  },
  {
    id: 2,
    title: "Algebra basics",
    description: "Equations, formulae, expressions, and linear graphs.",
    episodes: 10,
  },
  {
    id: 3,
    title: "Geometry and measures",
    description: "Angles, shapes, area, volume, and trigonometry basics.",
    episodes: 12,
  },
  {
    id: 4,
    title: "Statistics and probability",
    description: "Data representation, averages, and probability theory.",
    episodes: 6,
  },
];

export default function Course() {
  const [activeModule, setActiveModule] = useState<number | null>(1);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    trackEvent("view_course", { course_name: "Foundation IGCSE Mathematics" });

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          src="/IWS-math-bg.webp"
          alt="Mathematics Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Sticky Bottom Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-md border-t border-slate-200 z-50 md:hidden flex gap-3 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <button
          onClick={handleAskQuestion}
          className="flex-1 py-3.5 bg-slate-100/80 text-slate-700 font-medium rounded-lg flex items-center justify-center gap-2 shadow-sm"
        >
          Ask a Question
        </button>
        <button
          onClick={() => handleEnrolClick("mobile_sticky")}
          className="flex-1 py-3.5 bg-[#0a1776] text-white font-bold rounded-lg flex items-center justify-center gap-2 shadow-sm"
        >
          Enrol Now
        </button>
      </div>

      {/* Content wrapper */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-24 pb-16 flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* Left Column (Hero + Main Content) */}
          <div className="flex-1 max-w-3xl w-full">
            {/* Hero Header */}
            <section className="relative pb-16 border-b border-slate-200/60">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#0a1776]/10 text-[#0a1776] text-sm font-medium border border-[#0a1776]/20 bg-white/50 backdrop-blur-md">
                  <BookOpen size={16} /> IWS Online School
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-slate-900 leading-[1.1] tracking-tight">
                  Foundation IGCSE <br className="hidden sm:block" />
                  <span className="text-[#0a1776]">Mathematics</span> Online
                  Course
                </h1>

                <p className="text-lg text-slate-800 max-w-xl leading-relaxed font-medium">
                  Build confidence in maths with a structured Foundation-level
                  IGCSE pathway from IWS Online School. A focused standalone
                  course designed for clear progression.
                </p>

                <ul className="space-y-3 text-slate-900 font-bold pb-4">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#0a1776]" size={20} />{" "}
                    Foundation level support
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#0a1776]" size={20} /> Designed
                    for IGCSE preparation
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#0a1776]" size={20} />{" "}
                    IWS-branded learning environment
                  </li>
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

            {/* Quick Decision Area */}
            <section className="border-b border-slate-200/60 bg-white/40 backdrop-blur-md mt-8 py-8 px-4 sm:px-8 sm:rounded-2xl -mx-4 sm:mx-0">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-x-0 md:divide-x divide-slate-200/60">
                <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left">
                  <Clock className="text-[#0a1776] mb-2" size={24} />
                  <h4 className="font-bold text-slate-900">Duration</h4>
                  <p className="text-sm text-slate-700 font-medium">
                    12 months
                  </p>
                </div>
                <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left md:pl-4">
                  <GraduationCap className="text-[#0a1776] mb-2" size={24} />
                  <h4 className="font-bold text-slate-900">Level</h4>
                  <p className="text-sm text-slate-700 font-medium">
                    Foundation IGCSE
                  </p>
                </div>
                <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left md:pl-4">
                  <User className="text-[#0a1776] mb-2" size={24} />
                  <h4 className="font-bold text-slate-900">Support</h4>
                  <p className="text-sm text-slate-700 font-medium">
                    IWS Team
                  </p>
                </div>
                <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left md:pl-4">
                  <FileText className="text-[#0a1776] mb-2" size={24} />
                  <h4 className="font-bold text-slate-900">Assessment</h4>
                  <p className="text-sm text-slate-700 font-medium">
                    Exam prep
                  </p>
                </div>
              </div>
            </section>

            {/* Main Content */}
            <div className="space-y-24 mt-16">
              {/* Why learn with IWS? */}
              <WhyChooseIWS variant="course" />

              {/* Who is this course for? */}
            <section id="overview">
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-8 border-b border-slate-200 pb-4">
                Who is this course for?
              </h2>
              <div className="space-y-4">
                {[
                  "Students preparing for Foundation IGCSE Mathematics",
                  "Learners who need a structured, clear maths pathway",
                  "Students who prefer a focused online learning route",
                  "Parents looking for a reliable standalone maths option",
                  "Learners not yet ready for a wider full-school enrolment",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm"
                  >
                    <CheckCircle2
                      className="text-[#0a1776] shrink-0 mt-0.5"
                      size={20}
                    />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* What you'll learn */}
            <section id="topics">
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-8 border-b border-slate-200 pb-4">
                What you'll learn
              </h2>
              <div className="space-y-4">
                {SYLLABUS.map((module, index) => {
                  const isActive = activeModule === module.id;
                  return (
                    <div
                      key={module.id}
                      className={cn(
                        "border rounded-2xl overflow-hidden transition-all duration-300",
                        isActive
                          ? "border-blue-200 bg-white shadow-md shadow-[#0a1776]/5 cursor-default"
                          : "border-slate-200 bg-white hover:border-blue-300 cursor-pointer",
                      )}
                      onClick={() => !isActive && setActiveModule(module.id)}
                    >
                      <div className="p-6 flex items-center justify-between select-none">
                        <div className="flex items-center gap-4">
                          <div
                            className={cn(
                              "w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0",
                              isActive
                                ? "bg-blue-100 text-[#0a1776]"
                                : "bg-slate-100 text-slate-500",
                            )}
                          >
                            {index + 1}
                          </div>
                          <div>
                            <h3
                              className={cn(
                                "font-bold text-lg",
                                isActive ? "text-slate-900" : "text-slate-700",
                              )}
                            >
                              {module.title}
                            </h3>
                            <p className="text-slate-500 text-sm mt-0.5">
                              {module.description}
                            </p>
                          </div>
                        </div>
                        <button className="shrink-0 ml-4">
                          <ChevronDown
                            className={cn(
                              "transition-transform duration-300 text-slate-400",
                              isActive && "rotate-180 text-[#0a1776]",
                            )}
                          />
                        </button>
                      </div>
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="px-6 pb-6 pt-0 border-t border-slate-100"
                          >
                            <ul className="space-y-3 mt-4 px-2">
                              {[1, 2].map((lesson) => (
                                <li
                                  key={lesson}
                                  className="flex items-center gap-3 text-slate-600 text-sm"
                                >
                                  <MonitorPlay
                                    size={16}
                                    className="text-slate-400"
                                  />
                                  Detailed topic explanation and walk-through
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* How this course works */}
            <section id="how-it-works">
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-8 border-b border-slate-200 pb-4">
                How this course works
              </h2>
              <div className="space-y-8">
                <div className="grid gap-6">
                  <div className="flex gap-6 items-start">
                    <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-bold text-lg shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">
                        Enrol online
                      </h3>
                      <p className="text-slate-600 text-sm">
                        Complete your enrolment and receive your next steps.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-bold text-lg shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">
                        Access your course
                      </h3>
                      <p className="text-slate-600 text-sm">
                        Log in to the IWS learning platform and find your course
                        materials, lesson information and updates.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-bold text-lg shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">
                        Start learning
                      </h3>
                      <p className="text-slate-600 text-sm">
                        Join lessons, complete activities and follow the course
                        structure.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-bold text-lg shrink-0">
                      4
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">
                        Get support
                      </h3>
                      <p className="text-slate-600 text-sm">
                        Receive guidance from teachers and the IWS support team.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-bold text-lg shrink-0">
                      5
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">
                        Track progress
                      </h3>
                      <p className="text-slate-600 text-sm">
                        Follow learning progress and prepare for the next stage.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex justify-start">
                  <Link
                    to="/how-it-works"
                    className="inline-flex items-center gap-2 text-[#0a1776] hover:text-[#0a1776]/80 font-bold transition-colors"
                  >
                    Learn how IWS online learning works <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </section>

            {/* Support & Onboarding */}
            <section className="bg-blue-50 rounded-2xl p-8 md:p-12 border border-blue-100">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                  <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">
                    Support after enrolment
                  </h2>
                  <p className="text-slate-700 mb-6 leading-relaxed">
                    After enrolment, the IWS team will help students understand
                    the course route, access their learning area, and identify
                    any early requirements.
                  </p>
                  <ul className="space-y-2 text-slate-600 font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={18} className="text-[#0a1776]" />{" "}
                      Access guidance
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={18} className="text-[#0a1776]" />{" "}
                      Initial onboarding check
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={18} className="text-[#0a1776]" />{" "}
                      Sign-up support if needed
                    </li>
                  </ul>
                </div>
                <div className="shrink-0 w-32 h-32 bg-white rounded-2xl flex items-center justify-center shadow-lg border border-slate-100">
                  <HelpCircle size={48} className="text-blue-400" />
                </div>
              </div>
            </section>

            {/* FAQ */}
            <FAQSection />
          </div>
          </div>

          {/* Right Column (Sticky Snapshot Card) */}
          <div className="w-full lg:w-[420px] shrink-0 sticky top-24 z-20">
            <div className="bg-gradient-to-b from-[#0a1776] to-blue-600 rounded-[24px] p-8 shadow-2xl text-white relative">
              {/* Pricing Options */}
              <div className="flex divide-x divide-white/10 border-b border-white/10 pb-6 mb-6">
                <div className="flex-1 pr-6">
                  <h4 className="font-bold text-white mb-1">Single Payment</h4>
                  <div className="flex items-baseline gap-2 mb-2">
                    <div className="text-4xl font-label font-bold text-white tracking-tight">
                      £149
                    </div>
                    <div className="text-xl text-white/50 line-through font-bold">
                      £169
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm">By card or mobile</p>
                </div>
                <div className="flex-1 pl-6">
                  <h4 className="font-bold text-white mb-1">Pay Monthly</h4>
                  <div className="text-4xl font-label font-bold text-white mb-2 tracking-tight">
                    £14<span className="text-2xl text-slate-300">.90</span>
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
        
        {/* Final CTA Section */}
        <section className="mt-20 bg-[#0a1776] rounded-[24px] p-8 md:p-16 text-center shadow-2xl relative overflow-hidden">
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
  );
}
