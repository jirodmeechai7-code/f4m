import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Advantage from "./components/Advantage";
import Schedule from "./components/Schedule";
import Coaches from "./components/Coaches";
import Reviews from "./components/Reviews";
import Checkout from "./components/Checkout";
import FAQ from "./components/FAQ";
import { Mail, Compass, HelpCircle } from "lucide-react";

export default function App() {
  const handleReserveClick = () => {
    // Smooth scroll down to checkout pricing table
    const checkoutElement = document.getElementById("checkout");
    if (checkoutElement) {
      checkoutElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="landing-app" className="min-h-screen bg-white font-sans text-gray-800 antialiased overflow-x-hidden">
      {/* Sticky Top Header */}
      <Header onReserveClick={handleReserveClick} />

      {/* Main Sections Stack */}
      <main>
        {/* Hero Section Banner */}
        <Hero onReserveClick={handleReserveClick} />

        {/* Philosophy Advantage Section */}
        <Advantage />

        {/* Schedule & Syllabus Section */}
        <Schedule />

        {/* Coach Profiles Section */}
        <Coaches />

        {/* Trainee Reviews Section */}
        <Reviews />

        {/* Enrollment Pricing Desk */}
        <Checkout />

        {/* FAQ Accordian section */}
        <FAQ />
      </main>

      {/* High-Contrast Footer Block */}
      <footer className="bg-gray-950 text-white pt-16 pb-8 border-t border-gray-900 selection:bg-brand-red selection:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-gray-900">
            
            {/* Primary Column Brand Description (5 columns) */}
            <div className="md:col-span-5 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="bg-brand-red text-white p-2 rounded-lg">
                  <Compass className="w-5 h-5 animate-spin" style={{ animationDuration: '8s' }} />
                </div>
                <span className="font-display font-extrabold text-lg tracking-tight select-none">
                  THE CONSCIOUS LEADER
                </span>
              </div>
              <p className="text-xs text-gray-400 font-semibold leading-relaxed max-w-sm">
                A mastery program for leaders to regain inner balance, 
                transitioning from reaction to calm strategic focus and aligned decision-making.
              </p>
              <div className="flex items-center gap-2 text-xs font-semibold text-gray-400 mt-2 bg-white/5 py-2 px-3 rounded-lg w-fit">
                <Mail className="w-4 h-4 text-brand-red" />
                <span>Contact Admin: jirodwork2@gmail.com</span>
              </div>
            </div>

            {/* Middling Quick links (3 columns) */}
            <div className="md:col-span-3 flex flex-col gap-4 md:pl-6">
              <h5 className="font-display font-bold text-xs uppercase tracking-widest text-brand-red">
                QUICK ACCESS
              </h5>
              <ul className="flex flex-col gap-2.5 text-xs font-semibold text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">About Course</a></li>
                <li><a href="#sessions" className="hover:text-white transition-colors">Curriculum Details</a></li>
                <li><a href="#coaches" className="hover:text-white transition-colors">Certified Coaches</a></li>
                <li><a href="#reviews" className="hover:text-white transition-colors">Student Testimonials</a></li>
              </ul>
            </div>

            {/* Right Column: Support / Policy (4 columns) */}
            <div className="md:col-span-4 flex flex-col gap-4">
              <h5 className="font-display font-bold text-xs uppercase tracking-widest text-brand-red">
                TERMS & POLICY
              </h5>
              <p className="text-xs text-gray-500 font-semibold leading-relaxed">
                This program details a 100% money-back satisfaction guarantee within 7 days 
                and fully complies with the ethical guidelines and professional standards of the International Coaching Federation (ICF Global Compliance).
              </p>
            </div>

          </div>

          {/* Copyright Bottom row */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-400 text-[11px] font-mono font-bold border-t border-gray-900 mt-6">
            <div className="flex flex-col gap-1 text-center sm:text-left">
              <p className="uppercase">
                © 2026 F4M Pte. Ltd. | Fantastic4Mind Conscious Leadership Coaching
              </p>
              <p className="text-brand-red uppercase tracking-wider text-[10px]">
                Train Your Mind. Transform Your Life.
              </p>
            </div>
            <div className="flex gap-4">
              <span className="cursor-pointer hover:text-white transition-colors">TERMS OF USE</span>
              <span className="cursor-pointer hover:text-white transition-colors">PRIVACY REGULATION</span>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}
