import { Link } from 'react-router-dom';
import { BookOpen, Globe2, Target, Award, Heart, Laptop, ShieldCheck, ArrowRight } from 'lucide-react';
import { useContent } from '../contexts/ContentContext';

export default function AboutUs() {
  const { content } = useContent();
  const about = content.about;

  return (
    <div className="pt-24 bg-[#fafafa]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0a1776] text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src={about.aboutImageUrl || undefined} 
            alt="Students learning online" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1776] to-[#0a1776]/80"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              {about.title}
            </h1>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl leading-relaxed">
              {about.description}
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">{about.storyTitle}</h2>
            <div className="space-y-6 text-lg text-slate-600">
              <p>
                {about.storyParagraph1}
              </p>
              <p>
                {about.storyParagraph2}
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square md:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl">
              <img 
                src={about.storyImage1Url || undefined} 
                alt="Students collaborating online" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs hidden md:block">
              <div className="flex items-center gap-4 mb-3">
                <ShieldCheck className="w-8 h-8 text-[#0a1776]" />
                <h4 className="font-bold text-slate-900">Excellence in Education</h4>
              </div>
              <p className="text-sm text-slate-600">Committed to maintaining the highest standards of the British academic curriculum.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission & What Drives Us */}
      <section className="py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-10 rounded-[2rem] border border-slate-100 hover:border-[#0a1776]/20 transition-colors">
              <Target className="w-12 h-12 text-[#0a1776] mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{about.visionTitle}</h3>
              <p className="text-slate-600 leading-relaxed">
                {about.visionDescription}
              </p>
            </div>

            <div className="bg-slate-50 p-10 rounded-[2rem] border border-slate-100 hover:border-[#0a1776]/20 transition-colors">
              <Award className="w-12 h-12 text-[#0a1776] mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{about.missionTitle}</h3>
              <p className="text-slate-600 leading-relaxed">
                {about.missionDescription}
              </p>
            </div>

            <div className="bg-slate-50 p-10 rounded-[2rem] border border-slate-100 hover:border-[#0a1776]/20 transition-colors">
              <Heart className="w-12 h-12 text-[#0a1776] mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{about.valuesTitle}</h3>
              <p className="text-slate-600 leading-relaxed">
                {about.valuesDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Teach & Flexible Learning */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">{about.howWeTeachTitle}</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {about.howWeTeachSubtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          <div className="bg-white p-8 lg:p-10 rounded-[2.5rem] shadow-xl border border-slate-100">
            <div className="w-14 h-14 bg-blue-50 text-[#0a1776] rounded-2xl flex items-center justify-center mb-6">
              <Laptop size={28} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">{about.expertTeachingTitle}</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              {about.expertTeachingDesc}
            </p>
            <ul className="space-y-3">
              {(about.expertTeachingList || []).map((item: string, i: number) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <div className="w-2 h-2 rounded-full bg-[#0a1776]"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#0a1776] p-8 lg:p-10 rounded-[2.5rem] shadow-xl text-white">
            <div className="w-14 h-14 bg-white/10 text-white rounded-2xl flex items-center justify-center mb-6">
              <BookOpen size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">{about.flexibleLearningTitle}</h3>
            <p className="text-blue-100 mb-6 leading-relaxed">
              {about.flexibleLearningDesc}
            </p>
            <ul className="space-y-3">
              {(about.flexibleLearningList || []).map((item: string, i: number) => (
                <li key={i} className="flex items-center gap-3 text-blue-50 font-medium">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Global Community */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Globe2 className="w-16 h-16 text-blue-400 mx-auto mb-8 opacity-80" />
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">{about.globalCommunityTitle}</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-12">
            {about.globalCommunityDesc}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {(about.globalCommunityList || []).map((item: string, i: number) => (
              <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <span className="font-medium text-blue-100">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 text-center max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6 tracking-tight">
          {about.ctaTitle}
        </h2>
        <p className="text-lg text-slate-600 mb-10 leading-relaxed">
          {about.ctaDesc}
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link to="/courses" className="w-full sm:w-auto px-8 py-4 bg-[#0a1776] text-white rounded-full font-medium hover:bg-[#0a1776]/90 transition-colors shadow-lg shadow-[#0a1776]/20">
            Explore Courses
          </Link>
          <Link to="/book-a-call" className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 text-slate-900 rounded-full font-medium hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
            Book a Discovery Call
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

    </div>
  );
}
