import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Settings, LogOut, BookOpen, ExternalLink, HelpCircle, User, Mail, Phone, Lock, Bell, ChevronRight, Shield, CheckCircle2, Search } from 'lucide-react';
import { cn } from '../lib/utils';
import { Link, useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('courses');
  const [selectedCourseId, setSelectedCourseId] = useState(1);
  const navigate = useNavigate();

  const COURSES = [
    {
      id: 1,
      category: "IGCSE / Year 10-11",
      title: "Mathematics",
      progress: 4,
      total: 8,
      color: "bg-[#0f172a]", // Slate 900
      accent: "bg-[#ff9600]", // Orange
      patternColor: "text-slate-700",
      imageUrl: "/math_board.webp",
      description: "Access your weekly modules, live lesson recordings, interactive quizzes and teacher feedback on the learning platform.",
      bullets: [
        "Functions and Graphs methodologies",
        "Algebraic manipulations",
        "Exam preparation strategies"
      ],
      theoryHours: 32,
      practiceHours: 58,
      link: "https://my.iwsonlineschool.co.uk/"
    },
    {
      id: 2,
      category: "A Level / Year 12",
      title: "Physics",
      progress: 5,
      total: 10,
      color: "bg-[#171717]", // Neutral 900
      accent: "bg-emerald-400",
      patternColor: "text-neutral-800",
      imageUrl: "/Physics.webp",
      description: "Advanced physics concepts including mechanics and quantum phenomena. Access all materials on the platform.",
      bullets: [
        "Quantum mechanics basics",
        "Kinematics and dynamics",
        "Practical experiment simulations"
      ],
      theoryHours: 45,
      practiceHours: 60,
      link: "https://my.iwsonlineschool.co.uk/"
    }
  ];

  const selectedCourse = COURSES.find(c => c.id === selectedCourseId) || COURSES[0];

  // Profile State
  const [profile, setProfile] = useState({
    firstName: 'Burak',
    lastName: 'dincer',
    nickname: 'brkdncr.burak',
    email: 'brkdncr.burak@gmail.com',
    country: '',
    city: '',
    bio: '',
    avatarUrl: null as string | null
  });

  const [isSaving, setIsSaving] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleProfileSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      showToast('Profile updated successfully.');
    }, 800);
  };

  const handleSupportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      showToast('Support request sent. We will get back to you shortly.');
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setProfile(prev => ({ ...prev, avatarUrl: url }));
      showToast('Profile photo updated.');
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-80px)] bg-slate-50 relative">
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 20, x: '-50%' }}
            className="fixed bottom-8 left-1/2 z-50 bg-slate-900 text-white px-6 py-3 rounded-xl shadow-lg flex items-center gap-3"
          >
            <CheckCircle2 className="text-green-400" size={20} />
            <span className="font-medium">{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sidebar Navigation */}
      <aside className="w-64 bg-white border-r border-slate-200 hidden md:flex flex-col">
        <div className="p-6">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Student Portal</p>
          <nav className="space-y-1">
            <button 
              onClick={() => setActiveTab('courses')}
              className={cn("w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition", activeTab === 'courses' ? "bg-[#0a1776]/10 text-[#0a1776]" : "text-slate-600 hover:bg-slate-50")}
            >
              <BookOpen size={20} /> My Courses
            </button>
            <button 
              onClick={() => setActiveTab('profile')}
              className={cn("w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition", activeTab === 'profile' ? "bg-[#0a1776]/10 text-[#0a1776]" : "text-slate-600 hover:bg-slate-50")}
            >
              <User size={20} /> Profile Details
            </button>
            <button 
              onClick={() => setActiveTab('support')}
              className={cn("w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition", activeTab === 'support' ? "bg-[#0a1776]/10 text-[#0a1776]" : "text-slate-600 hover:bg-slate-50")}
            >
              <HelpCircle size={20} /> Support
            </button>
          </nav>
        </div>
        
        <div className="mt-auto p-6 border-t border-slate-100">
          <nav className="space-y-1">
             <button 
               onClick={() => setActiveTab('settings')}
               className={cn("w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition", activeTab === 'settings' ? "bg-[#0a1776]/10 text-[#0a1776]" : "text-slate-600 hover:bg-slate-50")}
             >
              <Settings size={20} /> Settings
            </button>
             <button onClick={() => navigate('/')} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium text-red-600 hover:bg-red-50 transition">
              <LogOut size={20} /> Sign Out
            </button>
          </nav>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 md:p-10 lg:px-12 max-w-6xl">
        <div className="mb-10 flex items-center justify-between">
          <div>
            {activeTab === 'courses' ? (
              <h1 className="text-3xl font-display font-bold text-slate-900 mb-2">My courses</h1>
            ) : (
              <h1 className="text-3xl font-display font-bold text-slate-900 mb-2">Welcome, {profile.firstName}.</h1>
            )}
            <p className="text-slate-600 text-lg">Manage your learning journey with IWS Online School.</p>
          </div>
          {activeTab === 'courses' && (
            <div className="flex items-center gap-4 text-slate-600 hidden sm:flex">
              <button className="p-2 hover:bg-slate-200/50 rounded-full transition">
                <Search size={24} />
              </button>
              <button className="p-2 hover:bg-slate-200/50 rounded-full transition">
                <Bell size={24} />
              </button>
            </div>
          )}
        </div>

        {activeTab === 'courses' && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col lg:flex-row gap-8">
            
            {/* Main Courses Area */}
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-6 border-b border-slate-200 pb-4">
                <button className="font-bold text-slate-900 border-b-2 border-slate-900 pb-4 -mb-[17px]">Active</button>
                <button className="font-medium text-slate-500 hover:text-slate-900 pb-4 -mb-[17px]">Completed</button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                {COURSES.map((course) => (
                  <div 
                    key={course.id}
                    onClick={() => setSelectedCourseId(course.id)}
                    className={cn(
                      "rounded-3xl p-6 flex flex-col justify-between aspect-[4/5] relative overflow-hidden cursor-pointer transition-all duration-300",
                      course.color,
                      selectedCourseId === course.id ? "ring-4 ring-offset-4 ring-slate-900/10 scale-[1.02]" : "hover:scale-[1.02] hover:shadow-xl"
                    )}
                  >
                    {/* Abstract decorative elements / Background Image */}
                    <div className="absolute inset-0 z-0">
                       <img src={course.imageUrl} alt={course.title} className="w-full h-full object-cover opacity-40 mix-blend-overlay" />
                    </div>
                    <div className={cn("absolute inset-0 opacity-[0.15] pointer-events-none z-0", course.patternColor)} style={{ backgroundImage: 'radial-gradient(circle at 4px 4px, currentColor 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
                    
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex justify-between items-start mb-auto">
                        <span className="text-white/80 text-sm font-medium px-3 py-1 bg-black/20 backdrop-blur-sm rounded-full">{course.category}</span>
                      </div>
                      
                      <div className="mt-auto">
                        <h3 className="text-white font-bold text-2xl mb-6 leading-tight drop-shadow-md">{course.title}</h3>
                        
                        <div className="flex items-center justify-between text-white/90 text-sm mb-3 font-medium">
                          <span>Progress</span>
                          <span>{course.progress}/{course.total} modules</span>
                        </div>
                        <div className="h-1.5 w-full bg-black/30 rounded-full overflow-hidden">
                          <div className={cn("h-full rounded-full", course.accent)} style={{ width: `${(course.progress / course.total) * 100}%` }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side Panel - Selected Course Details */}
            <div className="w-full lg:w-80 shrink-0">
               <div className="bg-white border border-slate-200 rounded-3xl p-6 sticky top-6 shadow-sm">
                 <div className={cn("aspect-square rounded-2xl mb-6 relative overflow-hidden", selectedCourse.color)}>
                    {/* Background image for right panel */}
                    <div className="absolute inset-0 z-0">
                       <img src={selectedCourse.imageUrl} alt={selectedCourse.title} className="w-full h-full object-cover opacity-50 mix-blend-overlay" />
                    </div>
                    {/* Decorative abstract pattern for the header */}
                    <div className="absolute inset-0 opacity-20 mix-blend-overlay z-0" style={{ backgroundImage: 'radial-gradient(circle at 4px 4px, white 2px, transparent 0)', backgroundSize: '32px 32px' }}></div>
                    <div className={cn("absolute -bottom-10 -right-10 w-40 h-40 rounded-full blur-2xl z-0 opacity-50", selectedCourse.accent)}></div>
                 </div>

                 <h3 className="text-2xl font-bold text-slate-900 mb-4">{selectedCourse.title}</h3>
                 <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                   {selectedCourse.description}
                 </p>

                 <ul className="space-y-3 mb-8">
                   {selectedCourse.bullets.map((bullet, idx) => (
                     <li key={idx} className="flex items-start gap-2 text-sm text-slate-700 font-medium">
                       <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0"></span>
                       <span className="leading-snug">{bullet}</span>
                     </li>
                   ))}
                 </ul>

                 <div className="flex items-center justify-between border-t border-b border-slate-100 py-4 mb-6">
                   <div className="text-center">
                     <p className="font-bold text-lg text-slate-900">{selectedCourse.theoryHours}h</p>
                     <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Theory</p>
                   </div>
                   <div className="w-px h-8 bg-slate-200"></div>
                   <div className="text-center">
                     <p className="font-bold text-lg text-slate-900">{selectedCourse.practiceHours}h</p>
                     <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Practice</p>
                   </div>
                 </div>

                 <a 
                   href={selectedCourse.link}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex items-center justify-center w-full py-3.5 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition shadow-sm"
                 >
                   View Schedule & Join
                 </a>
               </div>
            </div>

          </motion.div>
        )}

        {activeTab === 'profile' && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-4">Profile Details</h2>
            
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
              <div className="p-8 border-b border-slate-100 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                {profile.avatarUrl ? (
                  <img src={profile.avatarUrl} alt="Profile" className="w-24 h-24 rounded-full object-cover border-4 border-slate-50" />
                ) : (
                  <div className="w-24 h-24 bg-blue-50 text-[#0a1776] rounded-full flex items-center justify-center text-3xl font-bold">
                    {profile.firstName.charAt(0)}{profile.lastName.charAt(0)}
                  </div>
                )}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">{profile.firstName} {profile.lastName}</h3>
                  <p className="text-slate-500 mb-4">{profile.email}</p>
                  
                  <input type="file" accept="image/*" className="hidden" ref={fileInputRef} onChange={handleImageUpload} />
                  <button 
                    onClick={() => fileInputRef.current?.click()}
                    className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-lg transition text-sm"
                  >
                    Upload Photo
                  </button>
                </div>
              </div>
              
              <div className="p-8">
                <form onSubmit={handleProfileSave} className="space-y-6 max-w-2xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-slate-700">First Name</label>
                      <input 
                        type="text" 
                        value={profile.firstName} 
                        onChange={e => setProfile({...profile, firstName: e.target.value})}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#0a1776] focus:border-[#0a1776] outline-none transition" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-slate-700">Last Name</label>
                      <input 
                        type="text" 
                        value={profile.lastName} 
                        onChange={e => setProfile({...profile, lastName: e.target.value})}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#0a1776] focus:border-[#0a1776] outline-none transition" 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-slate-700">Nickname</label>
                      <input 
                        type="text" 
                        value={profile.nickname} 
                        onChange={e => setProfile({...profile, nickname: e.target.value})}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#0a1776] focus:border-[#0a1776] outline-none transition" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-slate-700">Email Address</label>
                      <input type="email" value={profile.email} disabled className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-500 outline-none cursor-not-allowed" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-slate-700">Country</label>
                      <input 
                        type="text" 
                        value={profile.country} 
                        onChange={e => setProfile({...profile, country: e.target.value})}
                        placeholder="e.g., United Kingdom"
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#0a1776] focus:border-[#0a1776] outline-none transition" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-slate-700">City</label>
                      <input 
                        type="text" 
                        value={profile.city} 
                        onChange={e => setProfile({...profile, city: e.target.value})}
                        placeholder="e.g., London"
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#0a1776] focus:border-[#0a1776] outline-none transition" 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-700">Bio</label>
                    <textarea 
                      rows={4}
                      value={profile.bio} 
                      onChange={e => setProfile({...profile, bio: e.target.value})}
                      placeholder="Tell us about yourself, your interests, or professional background..."
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#0a1776] focus:border-[#0a1776] outline-none transition" 
                    />
                  </div>

                  <div className="bg-slate-50 rounded-lg p-4 border border-slate-100 flex items-start gap-3 mt-6">
                    <Settings size={18} className="text-slate-400 shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-600">
                      <strong>Note:</strong> All fields will be updated on the Learning Platform (Moodle) automatically when you save.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-slate-700">Phone Number</label>
                      <input 
                        type="tel" 
                        value={profile.phone} 
                        onChange={e => setProfile({...profile, phone: e.target.value})}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#0a1776] focus:border-[#0a1776] outline-none transition" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-slate-700">Time Zone</label>
                      <select 
                        value={profile.timezone}
                        onChange={e => setProfile({...profile, timezone: e.target.value})}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#0a1776] focus:border-[#0a1776] outline-none transition bg-white"
                      >
                        <option>Europe/London (GMT)</option>
                        <option>Europe/Istanbul (GMT+3)</option>
                        <option>Asia/Dubai (GMT+4)</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button 
                      type="submit" 
                      disabled={isSaving}
                      className="px-6 py-2.5 bg-[#0a1776] text-white font-medium rounded-lg hover:bg-[#0a1776]/90 transition disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSaving ? "Saving..." : "Save Changes"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'support' && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-4">Help & Support</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Link to="/faq" className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-[#0a1776]/30 hover:shadow-md transition cursor-pointer block">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <BookOpen size={24} />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Knowledge Base</h3>
                <p className="text-slate-600 text-sm mb-4">Find answers to common questions about the platform.</p>
                <span className="text-[#0a1776] font-medium text-sm flex items-center gap-1">Browse articles <ChevronRight size={16} /></span>
              </Link>
              
              <a href="mailto:support@iwsonlineschool.co.uk" className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-[#0a1776]/30 hover:shadow-md transition cursor-pointer block">
                <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-4">
                  <Mail size={24} />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Email Support</h3>
                <p className="text-slate-600 text-sm mb-4">Send us an email and we'll get back to you within 24 hours.</p>
                <span className="text-[#0a1776] font-medium text-sm flex items-center gap-1">support@iwsonlineschool.co.uk <ExternalLink size={16} /></span>
              </a>
              
              <a href="https://wa.me/447440423094" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-[#0a1776]/30 hover:shadow-md transition cursor-pointer block">
                <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-4">
                  <Phone size={24} />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">WhatsApp Us</h3>
                <p className="text-slate-600 text-sm mb-4">Available Monday to Friday, 9am - 5pm (UK Time).</p>
                <span className="text-[#0a1776] font-medium text-sm flex items-center gap-1">+44 7440 423094 <ExternalLink size={16} /></span>
              </a>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-8">
              <h3 className="font-bold text-lg text-slate-900 mb-6">Send a Message</h3>
              <form onSubmit={handleSupportSubmit} className="space-y-4 max-w-2xl">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-700">Subject</label>
                  <select required className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#0a1776] focus:border-[#0a1776] outline-none transition bg-white">
                    <option value="">Select a subject...</option>
                    <option value="technical">Technical Issue (Learning Platform)</option>
                    <option value="content">Course Content Question</option>
                    <option value="billing">Billing & Enrolment</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-700">Message</label>
                  <textarea required rows={5} className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#0a1776] focus:border-[#0a1776] outline-none transition" placeholder="Describe your issue or question in detail..."></textarea>
                </div>
                <button type="submit" disabled={isSaving} className="px-6 py-2.5 bg-[#0a1776] text-white font-medium rounded-lg hover:bg-[#0a1776]/90 transition disabled:opacity-70 disabled:cursor-not-allowed">
                  {isSaving ? "Submitting..." : "Submit Request"}
                </button>
              </form>
            </div>
          </motion.div>
        )}

        {activeTab === 'settings' && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-4">Account Settings</h2>
            
            <div className="bg-white border border-slate-200 rounded-2xl divide-y divide-slate-100">
              
              <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-slate-100 text-slate-600 rounded-lg flex items-center justify-center shrink-0">
                    <Lock size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Password</h3>
                    <p className="text-sm text-slate-500">Update your password associated with this portal.</p>
                  </div>
                </div>
                <button className="px-4 py-2 border border-slate-200 rounded-lg font-medium text-slate-700 hover:bg-slate-50 transition shrink-0 whitespace-nowrap">
                  Change Password
                </button>
              </div>

              <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-slate-100 text-slate-600 rounded-lg flex items-center justify-center shrink-0">
                    <Bell size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Notifications</h3>
                    <p className="text-sm text-slate-500">Manage email notifications for course updates and announcements.</p>
                  </div>
                </div>
                <button className="px-4 py-2 border border-slate-200 rounded-lg font-medium text-slate-700 hover:bg-slate-50 transition shrink-0 whitespace-nowrap">
                  Configure
                </button>
              </div>

              <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-slate-100 text-slate-600 rounded-lg flex items-center justify-center shrink-0">
                    <Shield size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Privacy & Data</h3>
                    <p className="text-sm text-slate-500">Manage your data preferences and privacy settings.</p>
                  </div>
                </div>
                <button className="px-4 py-2 border border-slate-200 rounded-lg font-medium text-slate-700 hover:bg-slate-50 transition shrink-0 whitespace-nowrap">
                  Privacy Settings
                </button>
              </div>

            </div>
          </motion.div>
        )}

      </main>
    </div>
  );
}

