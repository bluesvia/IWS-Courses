import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { trackEvent } from '../lib/tracking';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function Onboarding() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      trackEvent('onboarding_completed');
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <>
      <div className="bg-[#fafafa] min-h-screen pt-32 pb-20 px-4 sm:px-6 flex items-center justify-center">
          <div className="max-w-2xl w-full bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={40} className="text-green-600" />
            </div>
            <h1 className="text-3xl font-display font-bold text-slate-900 mb-4">Thank you</h1>
            <p className="text-lg text-slate-600 mb-8">
              Your onboarding form has been submitted. You can now go to My Courses.
            </p>
            <button 
              onClick={() => navigate('/dashboard')}
              className="px-8 py-4 bg-[#0a1776] text-white rounded-xl font-bold flex justify-center items-center gap-2 hover:bg-slate-800 transition mx-auto"
            >
              Go to My Courses <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="bg-[#fafafa] min-h-screen pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Student Onboarding</h1>
            <p className="text-lg text-slate-600">Please provide the essential student and parent information needed before starting the course.</p>
          </div>
          
          <form onSubmit={handleSubmit} className="bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-slate-200">
            
            <div className="space-y-8">
              
              {/* Student Information */}
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">Student Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Student Full Name *</label>
                    <input required type="text" className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#0a1776] focus:border-[#0a1776] outline-none transition" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Student Date of Birth *</label>
                    <input required type="date" className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#0a1776] focus:border-[#0a1776] outline-none transition" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Current School Year / Grade *</label>
                    <select required className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#0a1776] focus:border-[#0a1776] outline-none transition bg-white">
                      <option value="">Select year</option>
                      <option value="year_7">Year 7 / Grade 6</option>
                      <option value="year_8">Year 8 / Grade 7</option>
                      <option value="year_9">Year 9 / Grade 8</option>
                      <option value="year_10">Year 10 / Grade 9</option>
                      <option value="year_11">Year 11 / Grade 10</option>
                      <option value="year_12">Year 12 / Grade 11</option>
                      <option value="year_13">Year 13 / Grade 12</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Parent/Guardian Information */}
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">Parent / Guardian Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Parent / Guardian Full Name *</label>
                    <input required type="text" className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#0a1776] focus:border-[#0a1776] outline-none transition" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Parent / Guardian Email *</label>
                    <input required type="email" className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#0a1776] focus:border-[#0a1776] outline-none transition" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Parent / Guardian Phone Number *</label>
                    <input required type="tel" className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#0a1776] focus:border-[#0a1776] outline-none transition" />
                  </div>
                </div>
              </div>

              {/* Location & Course */}
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">Location & Course Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Country of Residence *</label>
                    <select required className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#0a1776] focus:border-[#0a1776] outline-none transition bg-white">
                      <option value="">Select country</option>
                      <option value="UK">United Kingdom</option>
                      <option value="US">United States</option>
                      <option value="TR">Turkey</option>
                      <option value="AE">United Arab Emirates</option>
                      <option value="SA">Saudi Arabia</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Time Zone *</label>
                    <select required className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#0a1776] focus:border-[#0a1776] outline-none transition bg-white">
                      <option value="">Select time zone</option>
                      <option value="GMT">GMT / BST (London)</option>
                      <option value="CET">CET / CEST (Europe)</option>
                      <option value="AST">AST (Arabia Standard Time)</option>
                      <option value="EST">EST / EDT (New York)</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-slate-700 mb-2">Selected Course *</label>
                    <input required type="text" readOnly value="Cambridge IGCSE Mathematics" className="w-full px-4 py-3 border border-slate-200 bg-slate-50 text-slate-500 rounded-xl outline-none cursor-not-allowed" />
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">Additional Information</h2>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Learning Goal</label>
                    <select className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#0a1776] focus:border-[#0a1776] outline-none transition bg-white">
                      <option value="">Select goal (optional)</option>
                      <option value="exam">Prepare for upcoming exam</option>
                      <option value="improve">Improve general understanding</option>
                      <option value="ahead">Get ahead of the curriculum</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Additional Support Needs</label>
                    <textarea rows={3} className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#0a1776] focus:border-[#0a1776] outline-none transition" placeholder="Any SEN (Special Educational Needs) or specific learning requirements?" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Anything else we should know?</label>
                    <textarea rows={3} className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#0a1776] focus:border-[#0a1776] outline-none transition" placeholder="Any other details that would help us support the student..." />
                  </div>
                </div>
              </div>

            </div>

            <div className="mt-10 pt-6 border-t border-slate-200">
              <button 
                disabled={isSubmitting} 
                type="submit" 
                className="w-full md:w-auto md:px-12 py-4 bg-[#ff9600] text-white rounded-xl font-bold text-lg hover:bg-[#e68700] transition-all shadow-sm flex justify-center items-center gap-2 disabled:opacity-70"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Onboarding Form'}
              </button>
            </div>
            
          </form>
        </div>
      </div>
    </>
  );
}
