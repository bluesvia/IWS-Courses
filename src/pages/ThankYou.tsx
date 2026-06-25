import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, User, HelpCircle } from 'lucide-react';
import { trackEvent } from '../lib/tracking';

export default function ThankYou() {
  useEffect(() => {
    trackEvent('page_view', { page: 'Thank You' });
  }, []);

  return (
    <div className="bg-slate-50 min-h-[calc(100vh-80px)] flex flex-col items-center justify-center py-12 px-4 sm:px-6">
      <div className="max-w-2xl w-full bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200 text-center">
        
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={40} className="text-green-600" />
        </div>
        
        <h1 className="text-3xl font-display font-bold text-slate-900 mb-4">You're enrolled in Foundation IGCSE Mathematics</h1>
        <p className="text-lg text-slate-600 mb-10">
          Thank you for enrolling. Your course access details have been sent to your email. You can also access your course immediately from your IWS student account.
        </p>

        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-left mb-10">
          <h3 className="font-bold text-slate-900 mb-4">What happens next?</h3>
          <ul className="space-y-4">
            <li className="flex gap-3 text-slate-700">
              <span className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-sm font-bold shrink-0">1</span>
              <span>Check your email for login details.</span>
            </li>
            <li className="flex gap-3 text-slate-700">
              <span className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-sm font-bold shrink-0">2</span>
              <span>Open your student dashboard via "My Courses".</span>
            </li>
            <li className="flex gap-3 text-slate-700">
              <span className="w-6 h-6 rounded-full bg-[#0a1776]/10 text-[#0a1776] flex items-center justify-center text-sm font-bold shrink-0">3</span>
              <span>Complete the short onboarding form so IWS can support your learning journey.</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
           <Link 
             to="/onboarding"
             onClick={() => trackEvent('start_onboarding')}
             className="px-8 py-4 bg-[#ff9600] text-white rounded-lg font-bold flex justify-center items-center gap-2 shadow-sm hover:bg-[#e68700] transition"
           >
             Complete Onboarding <ArrowRight size={20} />
           </Link>
           <Link 
             to="/dashboard"
             onClick={() => trackEvent('view_my_courses')}
             className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 rounded-lg font-bold flex justify-center items-center gap-2 hover:border-slate-300 hover:bg-slate-50 transition shadow-sm"
           >
             <User size={20} /> Go to My Courses
           </Link>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-100">
          <a href="mailto:info@iwschool.co.uk" className="text-slate-500 hover:text-[#0a1776] font-medium inline-flex items-center gap-2 text-sm">
            <HelpCircle size={16} /> Contact IWS Support
          </a>
        </div>
      </div>
    </div>
  );
}
