import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Trash2, ShieldCheck, Tag, Plus, Minus, ArrowRight, Clock, AlertCircle, ShoppingBag, ArrowLeft } from 'lucide-react';
import { trackEvent } from '../lib/tracking';
import { useAuth } from '../contexts/AuthContext';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function Cart() {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  const [quantity, setQuantity] = useState(1);
  const [promoCode, setPromoCode] = useState('');
  const [isPromoApplied, setIsPromoApplied] = useState(true);

  const basePrice = 149.00;
  const discountAmount = isPromoApplied ? 29.80 : 0;
  const total = (basePrice * quantity) - discountAmount;

  const handleCheckoutClick = () => {
    trackEvent('click_checkout_from_cart');
    if (isLoggedIn) {
      navigate('/checkout');
    } else {
      navigate('/login?redirect=/checkout');
    }
  };

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.toUpperCase() === 'GCSE-20') {
      setIsPromoApplied(true);
    } else {
      alert('Invalid promo code');
    }
  };

  const handleRemovePromo = () => {
    setIsPromoApplied(false);
    setPromoCode('');
  };

  return (
    <>
      <div className="min-h-screen pt-32 pb-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="mb-8">
            <button 
              onClick={() => navigate(-1)} 
              className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition font-medium text-sm mb-6"
            >
              <ArrowLeft size={16} /> Continue Browsing
            </button>
            <div className="flex items-end justify-between border-b border-slate-200 pb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#0a1776]/10 flex items-center justify-center text-[#0a1776]">
                  <ShoppingBag size={24} />
                </div>
                <h1 className="text-3xl md:text-4xl font-display font-bold text-slate-900">Your Cart</h1>
              </div>
              <span className="text-slate-500 font-medium bg-slate-200 px-3 py-1 rounded-full text-sm">{quantity} Item{quantity !== 1 ? 's' : ''}</span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Column: Cart Items */}
            <div className="flex-1">
              {/* Cart Item Card */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col md:flex-row gap-6 shadow-sm hover:shadow-md transition relative">
                
                {/* Course Image Thumbnail */}
                <div className="w-full md:w-40 aspect-video md:aspect-square bg-slate-100 rounded-xl overflow-hidden shrink-0 relative">
                  <img src="/math_board.webp" alt="GCSE Maths" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-[#0a1776]/10 mix-blend-overlay"></div>
                </div>

                <div className="flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <span className="text-xs font-bold tracking-wider text-[#ff9600] uppercase mb-1 block">Online Course</span>
                      <h3 className="font-bold text-2xl text-slate-900">Cambridge IGCSE Mathematics</h3>
                    </div>
                    <button className="text-slate-400 hover:text-red-500 transition p-2 rounded-lg hover:bg-red-50 hidden md:block">
                      <Trash2 size={20} />
                    </button>
                  </div>
                  
                  <p className="text-slate-600 text-sm mb-6 max-w-md">Comprehensive preparation for the Cambridge IGCSE examination with live classes and interactive resources.</p>

                  <div className="mt-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    {/* Quantity Selector */}
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium text-slate-500">Students:</span>
                      <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden h-10 bg-slate-50">
                        <button 
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="w-10 h-full flex items-center justify-center text-slate-500 hover:bg-slate-200 hover:text-slate-900 transition"
                        >
                          <Minus size={14} />
                        </button>
                        <div className="w-10 h-full flex items-center justify-center font-bold text-[#0a1776] bg-white border-x border-slate-200">
                          {quantity}
                        </div>
                        <button 
                          onClick={() => setQuantity(quantity + 1)}
                          className="w-10 h-full flex items-center justify-center text-slate-500 hover:bg-slate-200 hover:text-slate-900 transition"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>

                    <div className="flex items-end flex-col">
                       {isPromoApplied && (
                         <span className="text-slate-400 line-through text-sm font-medium mb-1">
                           £{(basePrice * quantity).toFixed(2)}
                         </span>
                       )}
                       <div className="flex items-center gap-3">
                         {isPromoApplied && (
                           <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-1 rounded-md">
                             SAVE 20%
                           </span>
                         )}
                         <span className="text-2xl font-bold text-[#0a1776]">£{total.toFixed(2)}</span>
                       </div>
                    </div>
                  </div>

                  <button className="text-slate-400 hover:text-red-500 transition flex items-center gap-2 mt-4 text-sm font-medium md:hidden w-fit">
                    <Trash2 size={16} /> Remove
                  </button>
                </div>
              </div>

              {/* Informational Banner */}
              <div className="mt-6 bg-[#0a1776]/5 border border-[#0a1776]/10 rounded-xl p-4 flex gap-4">
                <AlertCircle className="text-[#0a1776] shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="font-bold text-[#0a1776] text-sm mb-1">Enrolment Process</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">After completing your payment, you will receive an email with credentials for the IWS Learning Platform (Moodle) where you can access your course materials.</p>
                </div>
              </div>

            </div>

            {/* Right Column: Order Summary */}
            <div className="w-full lg:w-[380px] shrink-0">
              
              <div className="sticky top-32 space-y-6">
                {/* Order Summary Box */}
                <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
                  <h2 className="text-xl font-bold text-slate-900 mb-6">Order Summary</h2>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between text-slate-600 font-medium">
                      <span>Subtotal ({quantity} item{quantity !== 1 ? 's' : ''})</span>
                      <span>£{(basePrice * quantity).toFixed(2)}</span>
                    </div>
                    
                    {isPromoApplied && (
                      <div className="flex items-center justify-between font-medium">
                        <span className="text-emerald-600 flex items-center gap-1.5">
                          <Tag size={16} /> Promo (GCSE-20)
                        </span>
                        <div className="text-right">
                          <span className="text-emerald-600 block">-£{discountAmount.toFixed(2)}</span>
                          <button onClick={handleRemovePromo} className="text-xs text-slate-400 hover:text-slate-600 underline mt-1">Remove</button>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="pt-6 border-t border-slate-200 mb-8">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-slate-900 text-lg">Total</span>
                      <span className="font-bold text-3xl text-[#0a1776]">£{total.toFixed(2)}</span>
                    </div>
                    <p className="text-xs text-slate-500 text-right">Including VAT</p>
                  </div>
                  
                  <button 
                    onClick={handleCheckoutClick}
                    className="w-full py-4 bg-[#ff9600] text-white rounded-xl font-bold text-lg hover:bg-[#e68700] hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
                  >
                    Proceed to Checkout <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>

                  <div className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-500 font-medium">
                    <ShieldCheck size={18} className="text-emerald-600" /> Secure encrypted checkout
                  </div>
                </div>

                {/* Promo Code Box */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-sm font-bold text-slate-900 mb-3">Add a discount code</h3>
                  <form onSubmit={handleApplyPromo} className="flex gap-2">
                    <input 
                      type="text" 
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Enter code" 
                      className="flex-1 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-[#0a1776] focus:border-[#0a1776] outline-none transition font-medium"
                    />
                    <button type="submit" className="px-5 py-2.5 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-slate-800 transition">
                      Apply
                    </button>
                  </form>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
