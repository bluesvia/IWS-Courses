import { useState } from "react";
import { cn } from "../../lib/utils";
import { ChevronDown, ChevronUp, Lock, PlayCircle, Star } from "lucide-react";
import { CourseData } from "../../contexts/CourseContext";

const TABS = ["Course Info", "Curriculum", "Reviews", "Announcements"];

const REVIEWS_DATA = [
  {
    name: "Sarah M.",
    initials: "SM",
    time: "2 months ago",
    text: "The lessons are clear and easy to follow. I finally understand algebra instead of memorising formulas.",
    rating: 5,
  },
  {
    name: "Ahmed K.",
    initials: "AK",
    time: "3 months ago",
    text: "Excellent explanations with plenty of exam practice.",
    rating: 5,
  },
  {
    name: "Emily R.",
    initials: "ER",
    time: "5 months ago",
    text: "This course helped me improve from a Grade C to an A.",
    rating: 5,
  },
  {
    name: "Daniel T.",
    initials: "DT",
    time: "8 months ago",
    text: "Perfect preparation for the Cambridge IGCSE exams.",
    rating: 5,
  },
];

export default function CourseTabs({ course }: { course?: CourseData }) {
  const [activeTab, setActiveTab] = useState("Course Info");
  const [openModule, setOpenModule] = useState<number | null>(0);

  if (!course) return null;

  return (
    <div className="mt-12 space-y-8">
      {/* Tab Navigation */}
      <div className="flex overflow-x-auto hide-scrollbar border-b border-slate-200">
        <div className="flex space-x-8 min-w-max px-2">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "pb-4 text-lg font-medium transition-colors relative whitespace-nowrap",
                activeTab === tab
                  ? "text-[#0a1776]"
                  : "text-slate-500 hover:text-slate-700"
              )}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-[-1px] left-0 right-0 h-1 bg-[#0a1776] rounded-t-full" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="pt-4">
        {activeTab === "Course Info" && (
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
              <h2 className="text-3xl font-display font-bold text-[#0a1776] mb-6">Master {course.title} with Confidence</h2>
              <p className="text-slate-700 leading-relaxed text-lg mb-4 whitespace-pre-line">
                {course.subtitle}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">What You'll Learn</h3>
              <ul className="grid sm:grid-cols-2 gap-4">
                {course.curriculum.slice(0, 4).map((mod) => mod.title).map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700">
                    <span className="w-2 h-2 rounded-full bg-[#0a1776] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {course.videoUrl && (
              <div className="mb-12 overflow-hidden rounded-xl border border-slate-200 shadow-sm bg-slate-50">
                <video 
                  src={course.videoUrl || undefined} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-auto object-cover max-h-[600px]" 
                />
              </div>
            )}

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Teaching Approach</h3>
              <p className="text-slate-700 mb-4 whitespace-pre-line">{course.courseInfoText}</p>
              <ol className="space-y-4">
                {[
                  "Learn the concept",
                  "Watch guided examples",
                  "Practice independently",
                  "Review & check answers",
                  "Complete module assessment"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="w-6 h-6 rounded-full bg-[#0a1776] text-white flex items-center justify-center font-bold text-sm shrink-0">
                      {i + 1}
                    </div>
                    <span className="font-medium text-slate-800">{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        )}

        {activeTab === "Curriculum" && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-display font-bold text-[#0a1776]">Course Curriculum</h2>
              <div className="text-sm font-medium text-slate-500">{course.curriculum.length} Modules</div>
            </div>

            <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white">
              {course.curriculum.map((module, index) => {
                const isOpen = openModule === index;
                return (
                  <div key={index} className="border-b border-slate-200 last:border-b-0">
                    <button
                      onClick={() => setOpenModule(isOpen ? null : index)}
                      className="w-full px-6 py-5 flex items-center justify-between hover:bg-slate-50 transition-colors text-left"
                    >
                      <div>
                        <h3 className="font-bold text-slate-900 text-lg">{module.title}</h3>
                        <p className="text-sm text-slate-500 mt-1">{module.items.length} lessons</p>
                      </div>
                      {isOpen ? (
                        <ChevronUp className="text-[#0a1776]" size={20} />
                      ) : (
                        <ChevronDown className="text-slate-400" size={20} />
                      )}
                    </button>
                    <div
                      className={cn(
                        "transition-all duration-300 ease-in-out overflow-hidden bg-white",
                        isOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
                      )}
                    >
                      <div className="px-6 pb-6 pt-2 space-y-1">
                        {module.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-center justify-between py-3 border-t border-slate-100 first:border-0 group">
                            <div className="flex items-center gap-3 text-slate-700">
                              <PlayCircle size={18} className="text-slate-400 group-hover:text-[#0a1776] transition-colors" />
                              <span className="font-medium group-hover:text-[#0a1776] transition-colors">{item}</span>
                            </div>
                            <div className="flex items-center gap-4 text-slate-400 text-sm">
                              <span>05:00</span>
                              <Lock size={16} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {activeTab === "Reviews" && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-2xl font-display font-bold text-[#0a1776]">Student Ratings & Reviews</h2>
            
            {/* Rating Summary Card */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 flex flex-col md:flex-row gap-8 items-center md:items-stretch">
              <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 flex flex-col items-center justify-center min-w-[200px]">
                <div className="text-5xl font-bold text-[#0a1776] mb-2">5.0</div>
                <div className="flex gap-1 text-[#ff9600] mb-2">
                  <Star size={20} fill="currentColor" />
                  <Star size={20} fill="currentColor" />
                  <Star size={20} fill="currentColor" />
                  <Star size={20} fill="currentColor" />
                  <Star size={20} fill="currentColor" />
                </div>
                <div className="text-sm text-slate-500 font-medium">Total 4 Ratings</div>
              </div>
              
              <div className="flex-1 w-full flex flex-col justify-center space-y-3">
                {[5, 4, 3, 2, 1].map((star) => (
                  <div key={star} className="flex items-center gap-4">
                    <div className="flex items-center gap-1 w-12 text-slate-600 font-medium text-sm">
                      {star} <Star size={14} className="text-[#ff9600]" fill="currentColor" />
                    </div>
                    <div className="flex-1 h-2.5 bg-slate-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-[#ff9600] rounded-full" 
                        style={{ width: star === 5 ? '100%' : '0%' }}
                      />
                    </div>
                    <div className="w-8 text-right text-slate-500 text-sm">{star === 5 ? 4 : 0}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Review List */}
            <div className="space-y-6">
              {REVIEWS_DATA.map((review, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 flex flex-col sm:flex-row gap-6">
                  <div className="flex sm:flex-col items-center sm:items-start gap-4 sm:w-48 shrink-0">
                    <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">
                      {review.initials}
                    </div>
                    <div>
                      <div className="font-medium text-slate-900">{review.name}</div>
                      <div className="text-sm text-slate-500">{review.time}</div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex gap-1 text-[#ff9600] mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={18} fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-slate-700 leading-relaxed">
                      {review.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "Announcements" && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-2xl font-display font-bold text-[#0a1776] mb-8">Announcements</h2>
            <div className="bg-blue-50/50 p-8 rounded-2xl border border-blue-100 text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-4">
                <Star size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Welcome to the Course!</h3>
              <p className="text-slate-600">Check back here for updates from your instructors.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
