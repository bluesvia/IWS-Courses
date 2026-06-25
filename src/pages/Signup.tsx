import React, { useState } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { motion } from 'motion/react';
import { ArrowRight, Lock, Mail, User } from 'lucide-react';

export default function Signup() {
  const [studentFirstName, setStudentFirstName] = useState('');
  const [studentLastName, setStudentLastName] = useState('');
  const [studentDob, setStudentDob] = useState('');
  const [parentName, setParentName] = useState('');
  const [parentEmail, setParentEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirectUrl = searchParams.get('redirect') || '/dashboard';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // Simulate signup & login
    if (studentFirstName && studentLastName && studentDob && parentName && parentEmail && password) {
      login();
      navigate(redirectUrl);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24 flex items-center justify-center">
      <div className="max-w-4xl w-full px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-xl border border-slate-200 relative overflow-hidden flex flex-col md:flex-row"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#0a1776] to-blue-500 z-20"></div>
          
          {/* Left Side - Mascot */}
          <div className="hidden md:flex flex-col items-center justify-start bg-white pt-12 px-10 pb-0 w-1/2 border-r border-slate-200 relative">
            <div className="text-center z-10 relative mb-6">
              <p className="text-slate-600 text-[17px]">Welcome aboard!</p>
              <h2 className="text-2xl font-bold text-[#0a1776] mt-1 leading-tight">Continue your learning<br/>journey with IWS.</h2>
            </div>
            {/* Mascot Image Wrapper */}
            <div className="relative flex-1 w-full flex items-end justify-center mt-6">
              <img src="/sign-up.webp" alt="Mascot waving" className="object-contain object-bottom w-full h-[110%] absolute bottom-0 max-w-none" />
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="p-8 sm:p-12 w-full md:w-1/2">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-slate-900 mb-3">Create Account</h1>
              <p className="text-slate-600">Sign up to get started</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-slate-700 mb-1">Student First Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <User size={18} />
                    </div>
                    <input
                      type="text"
                      value={studentFirstName}
                      onChange={(e) => setStudentFirstName(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#0a1776]/20 focus:border-[#0a1776] transition-colors text-sm"
                      placeholder="First Name"
                      required
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-slate-700 mb-1">Student Last Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <User size={18} />
                    </div>
                    <input
                      type="text"
                      value={studentLastName}
                      onChange={(e) => setStudentLastName(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#0a1776]/20 focus:border-[#0a1776] transition-colors text-sm"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Student Date of Birth</label>
                <div className="relative">
                  <input
                    type="date"
                    value={studentDob}
                    onChange={(e) => setStudentDob(e.target.value)}
                    className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#0a1776]/20 focus:border-[#0a1776] transition-colors text-sm"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Parent / Guardian Full Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <User size={18} />
                  </div>
                  <input
                    type="text"
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#0a1776]/20 focus:border-[#0a1776] transition-colors text-sm"
                    placeholder="Full Name"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Parent / Guardian Email</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Mail size={18} />
                  </div>
                  <input
                    type="email"
                    value={parentEmail}
                    onChange={(e) => setParentEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#0a1776]/20 focus:border-[#0a1776] transition-colors text-sm"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <Lock size={18} />
                    </div>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#0a1776]/20 focus:border-[#0a1776] transition-colors text-sm"
                      placeholder="••••••••"
                      required
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-slate-700 mb-1">Confirm Password</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <Lock size={18} />
                    </div>
                    <input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#0a1776]/20 focus:border-[#0a1776] transition-colors text-sm"
                      placeholder="••••••••"
                      required
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-4 py-3 bg-[#0a1776] text-white rounded-xl font-bold text-base hover:bg-[#071050] transition-colors flex items-center justify-center gap-2"
              >
                Sign Up <ArrowRight size={18} />
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-slate-100 text-center">
              <p className="text-slate-600">
                Already have an account?{' '}
                <Link to={`/login${searchParams.toString() ? `?${searchParams.toString()}` : ''}`} className="font-bold text-[#0a1776] hover:underline">Sign in</Link>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
