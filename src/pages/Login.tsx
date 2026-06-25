import React, { useState } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { motion } from 'motion/react';
import { ArrowRight, Lock, Mail } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirectUrl = searchParams.get('redirect') || '/dashboard';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    if (email && password) {
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
              <p className="text-slate-600 text-[17px]">Ready to continue?</p>
              <h2 className="text-2xl font-bold text-[#0a1776] mt-1 leading-tight">Your courses are waiting.</h2>
            </div>
            {/* Mascot Image Wrapper */}
            <div className="relative flex-1 w-full flex items-end justify-center mt-6">
              <img src="/sign-in.webp" alt="Mascot pointing" className="object-contain object-bottom w-full h-[110%] absolute bottom-0 max-w-none" />
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="p-8 sm:p-12 w-full md:w-1/2">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-slate-900 mb-3">Welcome Back</h1>
              <p className="text-slate-600">Please sign in to your account</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Mail size={20} />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#0a1776]/20 focus:border-[#0a1776] transition-colors"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Lock size={20} />
                  </div>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#0a1776]/20 focus:border-[#0a1776] transition-colors"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-sm mt-2">
                <label className="flex items-center gap-2 text-slate-600 cursor-pointer">
                  <input type="checkbox" className="rounded border-slate-300 text-[#0a1776] focus:ring-[#0a1776]" />
                  Remember me
                </label>
                <a href="#" className="font-medium text-[#0a1776] hover:underline">Forgot password?</a>
              </div>

              <button
                type="submit"
                className="w-full mt-6 py-3.5 bg-[#0a1776] text-white rounded-xl font-bold text-lg hover:bg-[#071050] transition-colors flex items-center justify-center gap-2"
              >
                Sign In <ArrowRight size={20} />
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-slate-100 text-center">
              <p className="text-slate-600">
                Don't have an account?{' '}
                <Link to={`/signup${searchParams.toString() ? `?${searchParams.toString()}` : ''}`} className="font-bold text-[#0a1776] hover:underline">Sign up</Link>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
