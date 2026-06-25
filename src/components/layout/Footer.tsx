import { Link } from 'react-router-dom';
import { Phone, Mail, MessageCircle, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand & Info */}
          <div className="md:col-span-1">
             <Link to="/" className="flex items-center gap-2 group mb-6">
              <img src="/IWS_Logo.png" alt="IWS Online School" className="h-10" />
            </Link>
            <p className="text-[#15203C] text-[15px] leading-relaxed mb-6">
              A Cambridge-accredited British online school, delivering live, expert-taught education to students aged 7–19 worldwide.
            </p>
            <p className="text-[#15203C] text-[15px] leading-relaxed mb-8">
              167-169 Great Portland Street, 5th Floor, London, England, W1W 5PF
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/iwsonlineschool/" target="_blank" rel="noopener noreferrer" className="text-[#0A1776] hover:text-[#0067E0] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://x.com/iwsonlineschool" target="_blank" rel="noopener noreferrer" className="text-[#0A1776] hover:text-[#0067E0] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://www.youtube.com/@iwsonlineschool" target="_blank" rel="noopener noreferrer" className="text-[#0A1776] hover:text-[#0067E0] transition-colors">
                <Youtube size={22} />
              </a>
              <a href="https://www.facebook.com/iwschoolonline" target="_blank" rel="noopener noreferrer" className="text-[#0A1776] hover:text-[#0067E0] transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-label font-bold text-xs uppercase tracking-[0.15em] text-[#0A1776] mb-6">Platform</h4>
            <ul className="space-y-4">
              <li><Link to="/#courses" className="text-[15px] text-[#15203C] hover:text-[#0067E0] transition">Courses</Link></li>
              <li><Link to="/#about" className="text-[15px] text-[#15203C] hover:text-[#0067E0] transition">About Us</Link></li>
              <li><Link to="/dashboard" className="text-[15px] text-[#15203C] hover:text-[#0067E0] transition">Student Dashboard</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-label font-bold text-xs uppercase tracking-[0.15em] text-[#0A1776] mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><Link to="/privacy" className="text-[15px] text-[#15203C] hover:text-[#0067E0] transition">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-[15px] text-[#15203C] hover:text-[#0067E0] transition">Terms of Service</Link></li>
              <li><Link to="/sales-agreement" className="text-[15px] text-[#15203C] hover:text-[#0067E0] transition">Distance Sales Agreement</Link></li>
            </ul>
          </div>

          {/* Admissions & Contact */}
          <div>
             <h4 className="font-label font-bold text-xs uppercase tracking-[0.15em] text-[#0A1776] mb-6">Admissions & Contact</h4>
            <ul className="space-y-4">
              <li><Link to="/book-a-call" className="text-[15px] text-[#15203C] hover:text-[#0067E0] transition">Book a Consultation</Link></li>
              <li><Link to="/courses" className="text-[15px] text-[#15203C] hover:text-[#0067E0] transition">Fees & Funding</Link></li>
              <li><Link to="/courses" className="text-[15px] text-[#15203C] hover:text-[#0067E0] transition mb-6 block">How It Works</Link></li>
              
              <li>
                <a href="tel:+447440423094" className="flex items-center gap-3 text-[15px] text-[#15203C] hover:text-[#0067E0] transition">
                  <Phone size={18} className="text-[#0A1776]" />
                  +44 7440 423094
                </a>
              </li>
              <li>
                <a href="mailto:info@iwschool.co.uk" className="flex items-center gap-3 text-[15px] text-[#15203C] hover:text-[#0067E0] transition">
                  <Mail size={18} className="text-[#0A1776]" />
                  info@iwschool.co.uk
                </a>
              </li>
              <li>
                <a href="https://wa.me/447440423094" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[15px] text-[#15203C] hover:text-[#0067E0] transition">
                  <MessageCircle size={18} className="text-[#0A1776]" />
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} IWS Online School. All rights reserved.</p>
          <div className="flex bg-white px-4 py-2 rounded-lg border border-slate-200">
             <span className="text-xs font-medium text-[#15203C]">Cambridge Approved Curriculum Partner</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
