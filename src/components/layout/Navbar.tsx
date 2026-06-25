import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, GraduationCap, ChevronDown, ChevronRight, LogOut } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../../lib/utils';
import { useAuth } from '../../contexts/AuthContext';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const { isLoggedIn, logout } = useAuth();

  const isCoursePage = location.pathname.includes('/course/');
  const isHomePage = location.pathname === '/';

  const navLinks = [
    { name: 'Home', path: '/' },
    { 
      name: 'Courses', 
      path: '/courses',
      dropdown: [
        {
          group: 'GCSEs',
          items: [
            { name: 'Foundation Mathematics', path: '/course/math' },
            { name: 'Higher Mathematics', path: '#', comingSoon: true }
          ]
        },
        {
          group: 'A-Levels',
          items: [
            { name: 'Courses Coming Soon', path: '#', comingSoon: true }
          ]
        },
        {
          group: 'Primary',
          items: [
            { name: 'Courses Coming Soon', path: '#', comingSoon: true }
          ]
        },
        {
          group: 'Secondary',
          items: [
            { name: 'Courses Coming Soon', path: '#', comingSoon: true }
          ]
        },
        {
          group: 'Uni Foundation',
          items: [
            { name: 'Courses Coming Soon', path: '#', comingSoon: true }
          ]
        }
      ]
    },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'About Us', path: '/about' },
  ];

  const scrollToAnchor = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path.startsWith('#') && isCoursePage) {
      e.preventDefault();
      const element = document.getElementById(path.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
      }
    }
  };

  return (
    <div className={cn(
      "z-50 w-full transition-all duration-300",
      isHomePage ? "absolute top-0 left-0 right-0 p-4 md:p-6 pb-0" : "sticky top-0 bg-white border-b border-slate-200 shadow-sm p-2 md:p-4"
    )}>
      <nav className={cn("max-w-7xl mx-auto transition-all duration-300", isHomePage ? "text-white" : "text-slate-900")}>
        <div className="flex justify-between items-center h-16 md:h-20 px-4 md:px-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img src={isHomePage ? "/IWS_Logo_White.png" : "/IWS_Logo.png"} alt="IWS Online School" className={cn("h-10 object-contain", isHomePage ? "drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]" : "")} onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling?.classList.remove('hidden') }} />
            <span className={cn("hidden font-bold text-2xl tracking-tight", isHomePage ? "text-white" : "text-slate-900")}>IWS Online</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex flex-1 items-center justify-center gap-8">
             {navLinks.map((link) => (
               <div key={link.name} className="relative group">
                 {link.dropdown ? (
                   <>
                     <Link
                       to={link.path}
                       className={cn(
                         "text-[15px] font-medium transition-colors flex items-center gap-1",
                         isHomePage ? "hover:text-white/80 text-white/90 drop-shadow-sm" : "hover:text-[#0a1776] text-slate-600"
                       )}
                     >
                       {link.name}
                       <ChevronDown size={14} className="opacity-70 group-hover:rotate-180 transition-transform duration-200" />
                     </Link>
                     <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                       <div className="bg-white rounded-2xl shadow-xl border border-slate-100 w-64 relative">
                         {/* Dropdown pointer */}
                         <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-slate-100 rotate-45"></div>
                         
                         <div className="p-2 relative bg-white">
                           {link.dropdown.map((group, idx) => (
                             <div key={idx} className="relative group/sub mb-1 last:mb-0">
                               <div className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors cursor-default">
                                 <span>{group.group}</span>
                                 {group.items && group.items.length > 0 && (
                                   <ChevronRight size={16} className="text-slate-400 group-hover/sub:text-[#0a1776]" />
                                 )}
                               </div>
                               
                               {group.items && group.items.length > 0 && (
                                 <div className="absolute top-0 left-full pl-2 opacity-0 pointer-events-none group-hover/sub:opacity-100 group-hover/sub:pointer-events-auto transition-all duration-200 z-50">
                                   <div className="bg-white rounded-2xl shadow-xl border border-slate-100 w-[280px] p-2 relative">
                                     {/* Side pointer */}
                                     <div className="absolute top-4 -left-1.5 w-3 h-3 bg-white border-l border-b border-slate-100 rotate-45 z-0"></div>
                                     
                                     <div className="relative z-10">
                                       {group.items.map((item, itemIdx) => (
                                         <Link
                                           key={itemIdx}
                                           to={item.path}
                                           className={cn(
                                             "block px-3 py-2.5 rounded-xl text-sm font-medium transition-colors",
                                             item.comingSoon 
                                               ? "text-slate-400 pointer-events-none" 
                                               : "text-slate-700 hover:bg-slate-50 hover:text-[#0a1776]"
                                           )}
                                         >
                                           <div className="flex items-center justify-between gap-2">
                                             <span className="line-clamp-2 leading-snug">{item.name}</span>
                                             {item.comingSoon && (
                                              <span className="text-[10px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded-full shrink-0">Soon</span>
                                             )}
                                           </div>
                                         </Link>
                                       ))}
                                     </div>
                                   </div>
                                 </div>
                               )}
                             </div>
                           ))}
                           <div className="mt-2 border-t border-slate-100 pt-2 px-1">
                             <Link to="/courses" className="flex items-center justify-center gap-1 w-full p-2 text-sm font-bold text-[#0a1776] hover:bg-slate-50 rounded-xl transition-colors">
                               View All Courses <ArrowRight size={14} />
                             </Link>
                           </div>
                         </div>
                       </div>
                     </div>
                   </>
                 ) : (
                   <Link
                     to={link.path}
                     onClick={(e) => scrollToAnchor(e, link.path)}
                     className={cn(
                       "text-[15px] font-medium transition-colors",
                       isHomePage ? "hover:text-white/80 text-white/90 drop-shadow-sm" : "hover:text-[#0a1776] text-slate-600"
                     )}
                   >
                     {link.name}
                   </Link>
                 )}
               </div>
             ))}
          </div>

          <div className="hidden lg:flex items-center gap-6">
            {isLoggedIn ? (
              <div className="flex items-center gap-6">
                <Link
                  to="/dashboard"
                  className={cn(
                    "text-[15px] font-medium transition-colors",
                    isHomePage ? "hover:text-white/80 text-white/90 drop-shadow-sm" : "hover:text-[#0a1776] text-slate-600"
                  )}
                >
                  Dashboard
                </Link>
                <button
                  onClick={logout}
                  className={cn(
                    "text-[15px] font-medium transition-colors flex items-center gap-2",
                    isHomePage ? "hover:text-white/80 text-white/90 drop-shadow-sm" : "hover:text-[#0a1776] text-slate-600"
                  )}
                >
                  <LogOut size={16} /> Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className={cn(
                  "text-[15px] font-medium transition-colors",
                  isHomePage ? "hover:text-white/80 text-white/90 drop-shadow-sm" : "hover:text-[#0a1776] text-slate-600"
                )}
              >
                Login
              </Link>
            )}
            <Link
              to="/checkout"
              className={cn(
                "flex items-center justify-center w-10 h-10 rounded-full transition-all",
                isHomePage ? "bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm" : "bg-slate-100 hover:bg-slate-200 border border-slate-200"
              )}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn("lucide lucide-shopping-cart", isHomePage ? "text-white" : "text-slate-700")}><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn("lg:hidden p-2 rounded-md mr-2", isHomePage ? "text-white" : "text-slate-600")}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={cn(
                "lg:hidden overflow-hidden rounded-2xl mt-2 border shadow-xl",
                isHomePage ? "bg-slate-900 border-white/10" : "bg-white border-slate-200"
              )}
            >
              <div className="px-6 pt-4 pb-6 space-y-4">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    {link.dropdown ? (
                      <div className="space-y-2">
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                          className={cn(
                            "flex items-center justify-between w-full py-2 text-base font-medium",
                            isHomePage ? "text-slate-300 hover:text-white" : "text-slate-600 hover:text-[#0a1776]"
                          )}
                        >
                          {link.name}
                          <ChevronDown size={18} className={cn("transition-transform duration-200", activeDropdown === link.name ? "rotate-180" : "")} />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === link.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden"
                            >
                              <div className={cn(
                                "pl-4 py-2 space-y-4 border-l-2 ml-2",
                                isHomePage ? "border-white/10" : "border-slate-100"
                              )}>
                                {link.dropdown.map((group, idx) => (
                                  <div key={idx}>
                                    <div className={cn(
                                      "text-xs font-bold uppercase tracking-wider mb-2",
                                      isHomePage ? "text-slate-500" : "text-slate-400"
                                    )}>
                                      {group.group}
                                    </div>
                                    <div className="space-y-2">
                                      {group.items.map((item, itemIdx) => (
                                        <Link
                                          key={itemIdx}
                                          to={item.path}
                                          onClick={() => !item.comingSoon && setIsMobileMenuOpen(false)}
                                          className={cn(
                                            "flex items-center justify-between text-sm py-1 transition-colors",
                                            item.comingSoon 
                                              ? (isHomePage ? "text-slate-600 pointer-events-none" : "text-slate-400 pointer-events-none")
                                              : (isHomePage ? "text-slate-300 hover:text-white" : "text-slate-600 hover:text-[#0a1776]")
                                          )}
                                        >
                                          <span>{item.name}</span>
                                          {item.comingSoon && (
                                            <span className={cn(
                                              "text-[10px] px-1.5 py-0.5 rounded-full",
                                              isHomePage ? "bg-white/10 text-slate-400" : "bg-slate-100 text-slate-500"
                                            )}>Soon</span>
                                          )}
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                                <Link 
                                  to="/courses"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className={cn(
                                    "inline-block mt-2 text-sm font-bold transition-colors",
                                    isHomePage ? "text-white hover:text-white/80" : "text-[#0a1776] hover:text-[#071050]"
                                  )}
                                >
                                  View All Courses →
                                </Link>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={link.path}
                        className={cn(
                          "block py-2 text-base font-medium",
                          isHomePage ? "text-slate-300 hover:text-white" : "text-slate-600 hover:text-[#0a1776]"
                        )}
                        onClick={(e) => scrollToAnchor(e, link.path)}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="pt-4 flex flex-col gap-3">
                  {isLoggedIn ? (
                    <>
                      <Link
                        to="/dashboard"
                        className={cn(
                          "block py-2 text-base font-medium",
                          isHomePage ? "text-slate-300 hover:text-white" : "text-slate-600 hover:text-[#0a1776]"
                        )}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Dashboard
                      </Link>
                      <button
                        onClick={() => {
                          logout();
                          setIsMobileMenuOpen(false);
                        }}
                        className={cn(
                          "flex items-center gap-2 py-2 text-base font-medium w-full text-left",
                          isHomePage ? "text-slate-300 hover:text-white" : "text-slate-600 hover:text-[#0a1776]"
                        )}
                      >
                        <LogOut size={18} /> Logout
                      </button>
                    </>
                  ) : (
                    <Link
                      to="/login"
                      className={cn(
                        "block py-2 text-base font-medium",
                        isHomePage ? "text-slate-300 hover:text-white" : "text-slate-600 hover:text-[#0a1776]"
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Login
                    </Link>
                  )}
                  <Link
                    to="/checkout"
                    className="flex justify-center items-center gap-2 py-3 bg-[#0a1776] hover:bg-[#071050] text-white rounded-lg font-bold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Cart
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}
