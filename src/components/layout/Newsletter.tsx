import { Mail } from 'lucide-react';

export default function Newsletter() {
  return (
    <section className="bg-[#0a1776] py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-white">
          <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm border border-white/20">
            <Mail className="text-white" size={28} />
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">Stay informed with IWS</h2>
          <p className="text-blue-100 text-lg max-w-md leading-relaxed">
            Subscribe to our newsletter for the latest educational courses, school updates, and exclusive offers.
          </p>
        </div>

        <div className="flex-1 w-full max-w-xl">
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-label uppercase tracking-widest text-blue-100 mb-1.5">First Name <span className="text-red-400">*</span></label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-white rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white/50 border-0"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-label uppercase tracking-widest text-blue-100 mb-1.5">Last Name <span className="text-red-400">*</span></label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-white rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white/50 border-0"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-label uppercase tracking-widest text-blue-100 mb-1.5">Email <span className="text-red-400">*</span></label>
              <input 
                type="email" 
                className="w-full px-4 py-3 bg-white rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white/50 border-0"
                required
              />
            </div>

            <button 
              type="submit"
              className="w-full mt-2 bg-slate-900 hover:bg-slate-800 text-white font-label font-bold text-xs uppercase tracking-[0.15em] py-4 rounded-xl transition-colors border border-white/10"
            >
              Submit
            </button>

            <p className="text-center text-sm text-blue-200 mt-4">
              Your privacy matters • Unsubscribe at any time
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
