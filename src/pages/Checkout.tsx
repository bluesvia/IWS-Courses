import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { trackEvent } from '../lib/tracking';
import { CheckCircle2, ShieldCheck, CreditCard, Lock } from 'lucide-react';
import { cn } from '../lib/utils';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function Checkout() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('card');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    trackEvent('begin_checkout');
    
    // Simulate API call
    setTimeout(() => {
      trackEvent('purchase', { value: 149, currency: 'GBP', items: ['Foundation IGCSE Mathematics'] });
      setIsSubmitting(false);
      navigate('/thank-you');
    }, 1500);
  };

  return (
    <>
      <div className="bg-[#fafafa] min-h-screen pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col lg:flex-row gap-10">
            
            {/* Main Checkout Form */}
            <div className="flex-1 space-y-8">
              <form id="checkout-form" onSubmit={handleSubmit}>
                
                {/* Express Checkout */}
                <div className="mb-8">
                  <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <button type="button" className="flex-1 py-3 px-4 bg-black text-white rounded-lg flex items-center justify-center gap-2 hover:bg-slate-800 transition">
                      <span className="font-bold text-lg tracking-wider">G Pay</span>
                    </button>
                    <button type="button" className="flex-1 py-3 px-4 bg-[#1ddc6b] text-black rounded-lg flex items-center justify-center gap-2 hover:bg-[#1bc660] transition font-medium">
                      Pay with <span className="bg-black text-white text-xs px-1.5 py-0.5 rounded font-bold ml-1 tracking-wider">link</span>
                    </button>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex-1 border-t border-slate-200"></div>
                    <span className="text-sm font-medium text-slate-500 uppercase tracking-widest">OR</span>
                    <div className="flex-1 border-t border-slate-200"></div>
                  </div>
                </div>

                {/* Section 1: Billing Details */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-full bg-[#0a1776] text-white flex items-center justify-center font-bold text-sm">1</div>
                    <h2 className="text-2xl font-bold text-slate-900">Billing Details</h2>
                  </div>
                  
                  <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200">
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-bold text-slate-700 mb-2">First Name *</label>
                          <input required type="text" className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#0a1776] focus:border-[#0a1776] outline-none transition" placeholder="First Name" />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-slate-700 mb-2">Last Name *</label>
                          <input required type="text" className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#0a1776] focus:border-[#0a1776] outline-none transition" placeholder="Last Name" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number *</label>
                          <input required type="tel" className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#0a1776] focus:border-[#0a1776] outline-none transition" placeholder="Phone Number" />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-slate-700 mb-2">Email Address *</label>
                          <input required type="email" className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#0a1776] focus:border-[#0a1776] outline-none transition" placeholder="Email Address" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Billing Address *</label>
                        <input required type="text" className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#0a1776] focus:border-[#0a1776] outline-none transition" placeholder="Street Address" />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-bold text-slate-700 mb-2">Postcode *</label>
                          <input required type="text" className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#0a1776] focus:border-[#0a1776] outline-none transition" placeholder="Postcode" />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-slate-700 mb-2">Country *</label>
                          <select required className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#0a1776] focus:border-[#0a1776] outline-none transition bg-white">
                            <option value="">Select a country</option>
                            <option value="UK">United Kingdom</option>
                            <option value="US">United States</option>
                            <option value="TR">Turkey</option>
                            <option value="AE">United Arab Emirates</option>
                            <option value="SA">Saudi Arabia</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 2: Payment Details */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-full bg-[#0a1776] text-white flex items-center justify-center font-bold text-sm">2</div>
                    <h2 className="text-2xl font-bold text-slate-900">Payment Details</h2>
                  </div>

                  <div className="space-y-4">
                    
                    {/* Credit Card Option */}
                    <div className={cn(
                      "rounded-2xl transition-all overflow-hidden border-2",
                      paymentMethod === 'card' ? "border-[#0a1776] bg-white shadow-sm" : "border-slate-200 bg-white hover:border-slate-300 cursor-pointer"
                    )}>
                      <label className="flex items-center justify-between p-6 cursor-pointer">
                        <div className="flex items-center gap-3">
                          <div className={cn(
                            "w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors",
                            paymentMethod === 'card' ? "border-[#0a1776]" : "border-slate-300"
                          )}>
                            {paymentMethod === 'card' && <div className="w-2.5 h-2.5 rounded-full bg-[#0a1776]" />}
                          </div>
                          <span className="font-bold text-slate-900">Credit / Debit Card</span>
                        </div>
                        <div className="flex gap-1.5 opacity-80">
                          <div className="px-2 py-1 bg-slate-100 border border-slate-200 rounded text-[10px] font-bold text-blue-900">VISA</div>
                          <div className="px-2 py-1 bg-slate-100 border border-slate-200 rounded text-[10px] font-bold text-red-600">Mastercard</div>
                        </div>
                      </label>
                      
                      {paymentMethod === 'card' && (
                        <div className="px-6 pb-6 pt-2 border-t border-slate-100">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div className="md:col-span-2">
                              <label className="block text-sm font-medium text-slate-700 mb-1">Card number</label>
                              <div className="relative">
                                <input required type="text" className="w-full px-4 py-3 pl-10 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#0a1776] focus:border-[#0a1776] outline-none" placeholder="1234 1234 1234 1234" />
                                <CreditCard size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                              </div>
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-1">Expiration date</label>
                              <input required type="text" className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#0a1776] focus:border-[#0a1776] outline-none" placeholder="MM / YY" />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-1">Security code</label>
                              <div className="relative">
                                <input required type="text" className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#0a1776] focus:border-[#0a1776] outline-none" placeholder="CVC" />
                                <Lock size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
                              </div>
                            </div>
                          </div>
                          <label className="flex items-center gap-2 cursor-pointer mt-4">
                            <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-[#0a1776] focus:ring-[#0a1776]" />
                            <span className="text-sm font-medium text-slate-700">Save payment information to my account for future purchases.</span>
                          </label>
                        </div>
                      )}
                      
                      {/* Hidden radio button just for accessibility/function */}
                      <input type="radio" name="payment_method" value="card" checked={paymentMethod === 'card'} onChange={() => setPaymentMethod('card')} className="hidden" />
                    </div>

                    {/* PayPal Option */}
                    <div className={cn(
                      "rounded-2xl transition-all border-2",
                      paymentMethod === 'paypal' ? "border-[#0a1776] bg-white shadow-sm" : "border-slate-200 bg-[#f8f9fa] hover:border-slate-300 cursor-pointer"
                    )}>
                      <label className="flex items-center justify-between p-6 cursor-pointer">
                        <div className="flex items-center gap-3">
                          <div className={cn(
                            "w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors",
                            paymentMethod === 'paypal' ? "border-[#0a1776]" : "border-slate-300"
                          )}>
                            {paymentMethod === 'paypal' && <div className="w-2.5 h-2.5 rounded-full bg-[#0a1776]" />}
                          </div>
                          <span className="font-bold text-slate-600">PayPal</span>
                        </div>
                        <div className="text-blue-900 font-bold italic text-lg">PayPal</div>
                      </label>
                      <input type="radio" name="payment_method" value="paypal" checked={paymentMethod === 'paypal'} onChange={() => setPaymentMethod('paypal')} className="hidden" />
                    </div>

                  </div>
                </div>

                <div className="mt-12 text-center">
                  <button type="button" onClick={() => navigate('/cart')} className="text-[#0a1776] font-bold hover:underline mb-6">
                    Check your order
                  </button>
                  <button 
                    disabled={isSubmitting} 
                    type="submit" 
                    className="w-full py-4 bg-[#ff9600] text-white rounded-xl font-bold text-lg hover:bg-[#e68700] hover:shadow-lg transition-all disabled:opacity-70 shadow-sm flex justify-center items-center gap-2"
                  >
                    {isSubmitting ? 'Processing...' : '✓ Place order'}
                  </button>
                  <p className="text-sm text-slate-500 mt-4 flex justify-center items-center gap-1">
                    <ShieldCheck size={16} /> Secure encrypted transaction
                  </p>
                </div>
              </form>
            </div>

            {/* Order Summary Sidebar */}
            <div className="w-full lg:w-96 shrink-0">
               <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 sticky top-32">
                 <h3 className="font-bold text-slate-900 mb-6 text-xl">Order Summary</h3>
                 
                 <div className="flex justify-between items-start mb-6">
                   <div>
                     <p className="font-bold text-slate-900">Cambridge IGCSE Mathematics</p>
                     <p className="text-sm text-slate-500 mt-1">1x Online Course</p>
                   </div>
                   <span className="font-bold text-slate-900">£149.00</span>
                 </div>
                 
                 <div className="border-t border-slate-100 pt-4 mb-6 space-y-3">
                   <div className="flex justify-between text-slate-600 font-medium">
                     <span>Subtotal</span>
                     <span>£149.00</span>
                   </div>
                   <div className="flex justify-between text-[#0a1776] font-bold text-xl pt-3 border-t border-slate-100">
                     <span>Total</span>
                     <span>£149.00</span>
                   </div>
                 </div>

                 <div className="bg-slate-50 rounded-xl p-5 text-sm text-slate-600 space-y-3">
                    <div className="flex gap-3">
                      <CheckCircle2 size={18} className="text-[#ff9600] shrink-0" />
                      <span className="font-medium">Instant access to materials after payment</span>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 size={18} className="text-[#ff9600] shrink-0" />
                      <span className="font-medium">14-day money back guarantee</span>
                    </div>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
