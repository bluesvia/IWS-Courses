import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Globe2, 
  BookOpen, 
  Users, 
  Award, 
  Target, 
  Heart, 
  Laptop, 
  GraduationCap,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0a1776] pt-32 lg:pt-48 pb-24 md:pb-32 text-white">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-screen pointer-events-none"></div>
        <div className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 w-[800px] h-[800px] bg-white/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 tracking-tight"
          >
            About IWS Online School
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed"
          >
            A Cambridge-accredited British online school empowering students globally through innovative, flexible, and expert-led education.
          </motion.p>
        </div>
      </section>

      {/* Trust Statistics / Accreditations */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-100">
            <div className="text-center px-4">
              <div className="text-3xl md:text-4xl font-bold text-[#0a1776] mb-2">Cambridge</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">Accredited</div>
            </div>
            <div className="text-center px-4">
              <div className="text-3xl md:text-4xl font-bold text-[#0a1776] mb-2">7-19</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">Years Old</div>
            </div>
            <div className="text-center px-4">
              <div className="text-3xl md:text-4xl font-bold text-[#0a1776] mb-2">Global</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">Community</div>
            </div>
            <div className="text-center px-4">
              <div className="text-3xl md:text-4xl font-bold text-[#0a1776] mb-2">Expert</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">Teachers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story & About */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">Our Story</h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                IWS Online School was founded with a clear vision: to break down geographical barriers and provide high-quality British education to students anywhere in the world. 
              </p>
              <p>
                We recognised that traditional schooling models don't fit every family. Whether due to travel, specific learning needs, or a desire for a more flexible schedule, modern students require an educational platform that adapts to them, not the other way around.
              </p>
              <p>
                Today, we are proud to be a fully Cambridge-accredited institution, offering a structured, supportive, and engaging learning environment that combines the best of traditional British education with cutting-edge online delivery.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square md:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80" 
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
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To be the world's leading online British school, where every student is empowered to achieve their full academic and personal potential, regardless of their location.
              </p>
            </div>
            <div className="bg-slate-50 p-10 rounded-[2rem] border border-slate-100 hover:border-[#0a1776]/20 transition-colors">
              <Award className="w-12 h-12 text-[#0a1776] mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To deliver a rigorous, engaging, and internationally recognised curriculum through innovative technology and exceptional teaching, fostering a global community of lifelong learners.
              </p>
            </div>
            <div className="bg-slate-50 p-10 rounded-[2rem] border border-slate-100 hover:border-[#0a1776]/20 transition-colors">
              <Heart className="w-12 h-12 text-[#0a1776] mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">What Drives Us</h3>
              <p className="text-slate-600 leading-relaxed">
                A passion for student success. We believe that with the right support, resources, and flexibility, every child can thrive academically and develop the confidence to lead.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Teach & Flexible Learning */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">How We Teach</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Our flexible learning models are designed to suit different family needs and student learning styles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          <div className="bg-white p-8 lg:p-10 rounded-[2.5rem] shadow-xl border border-slate-100">
            <div className="w-14 h-14 bg-blue-50 text-[#0a1776] rounded-2xl flex items-center justify-center mb-6">
              <Laptop size={28} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Live Expert Teaching</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Students join scheduled, interactive online classes led by experienced subject specialists. These sessions encourage participation, peer collaboration, and real-time feedback.
            </p>
            <ul className="space-y-3">
              {['Small class sizes', 'Interactive whiteboards', 'Real-time Q&A', 'Structured timetable'].map((item, i) => (
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
            <h3 className="text-2xl font-bold text-white mb-4">Flexible Learning Models</h3>
            <p className="text-blue-100 mb-6 leading-relaxed">
              We offer hybrid and self-paced options for families who need maximum flexibility. Students can access recorded lessons, comprehensive course materials, and teacher support when it suits them.
            </p>
            <ul className="space-y-3">
              {['24/7 platform access', 'Recorded live sessions', 'Guided independent study', 'Regular progress checks'].map((item, i) => (
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
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">A Global Community</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-12">
            When you join IWS, you're not just enrolling in a school; you're joining a diverse, international community of students from across the globe. We foster cross-cultural understanding, collaboration, and global citizenship.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {['Global Friendships', 'Cultural Exchange', 'Extracurricular Clubs', 'International Perspective'].map((item, i) => (
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
          Ready to join our community?
        </h2>
        <p className="text-lg text-slate-600 mb-10 leading-relaxed">
          Discover how IWS Online School can support your child's academic journey.
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
