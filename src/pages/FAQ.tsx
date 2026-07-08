import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import FAQSection from '../components/layout/FAQSection';

export default function FAQ() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/dashboard" className="inline-flex items-center gap-2 text-slate-500 hover:text-[#0a1776] transition-colors mb-8 font-medium">
          <ArrowLeft size={16} /> Back to Dashboard
        </Link>
        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm">
          <FAQSection className="!bg-transparent" />
        </div>
      </div>
    </div>
  );
}
