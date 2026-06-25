/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { StrictMode } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Newsletter from './components/layout/Newsletter';
import Home from './pages/Home';
import Course from './pages/Course';
import Courses from './pages/Courses';
import HowItWorks from './pages/HowItWorks';
import AboutUs from './pages/AboutUs';
import BookACall from './pages/BookACall';
import Dashboard from './pages/Dashboard';
import Checkout from './pages/Checkout';
import Cart from './pages/Cart';
import ThankYou from './pages/ThankYou';
import Onboarding from './pages/Onboarding';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import SalesAgreement from './pages/SalesAgreement';
import Login from './pages/Login';
import Signup from './pages/Signup';
import FAQ from './pages/FAQ';
import { useEffect } from 'react';
import { AuthProvider } from './contexts/AuthContext';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <div className="font-sans text-slate-900 bg-[#fafafa]">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/book-a-call" element={<BookACall />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/course/math" element={<Course />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/sales-agreement" element={<SalesAgreement />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
          <Newsletter />
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}
