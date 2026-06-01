import React, { useState, useEffect } from "react";
import { ArrowUpRight, Calendar, Users, ShieldAlert, Award } from "lucide-react";
import { motion } from "motion/react";
import { HERO_IMAGE } from "../data";

interface HeroProps {
  onReserveClick: () => void;
}

export default function Hero({ onReserveClick }: HeroProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 19,
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  // Dynamic countdown timer targeting June 21, 2026 (UTC)
  useEffect(() => {
    const targetDate = new Date("2026-06-21T00:00:00Z").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const d = Math.floor(difference / (1000 * 60 * 60 * 24));
        const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days: d, hours: h, minutes: m, seconds: s });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen bg-white pt-32 pb-20 flex items-center overflow-hidden">
      {/* Decorative red background accent - sharp geometric block */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-brand-red translate-x-12 rotate-3 skew-y-3 opacity-[0.03] -z-10 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text content (7 columns on desktop) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Live badge - sharp high contrast block */}
            <div className="inline-flex items-center gap-2 self-start bg-white border-2 border-neutral-950 py-1.5 px-4 rounded-none select-none">
              <span className="w-2.5 h-2.5 bg-brand-red animate-ping" />
              <span className="text-[10px] uppercase font-mono font-black tracking-widest text-brand-red">
                LIVE COACH-LED COHORT · STARTS JUNE 23, 2026
              </span>
            </div>

            {/* Main title - Massive and Bold */}
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-neutral-900 leading-[0.85] select-text">
              Lead with <span className="text-brand-red font-black">clarity</span>.<br />
              <span className="text-neutral-900">Not pressure.</span><br className="hidden sm:inline" />
              <span className="text-neutral-950">Not reaction.</span>
            </h1>

            {/* Description - left elegant quote style */}
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl border-l-4 border-brand-red pl-6 font-semibold">
              A premium 6-week live cohort masterclass for high-responsibility leaders and founders — 
              designed to build presence, focus, and alignment. 
              As pressure becomes constant, transition back to balance with world-class, ICF-accredited leadership mentors.
            </p>

            {/* Promotion offer summary - brutalist block shadow */}
            <div className="bg-white border-2 border-neutral-950 p-5 rounded-none max-w-xl shadow-[4px_4px_0px_0px_rgba(220,38,38,1)]">
              <div className="flex items-baseline gap-2.5">
                <span className="text-gray-400 line-through text-sm font-black">$149 USD</span>
                <span className="text-3xl font-black text-neutral-900">$99</span>
                <span className="bg-brand-red text-white text-[10px] font-mono uppercase font-black py-1 px-3 rounded-none tracking-widest">
                  CODE: LEADER99 ACTIVE
                </span>
              </div>
              <p className="text-xs text-neutral-500 font-bold mt-2">
                Register using this discount code to reserve your seat at our launch price before <span className="font-black text-brand-red">June 21</span>.
              </p>
            </div>

            {/* Countdown timer container */}
            <div className="flex flex-col gap-2 mt-1">
              <span className="text-[10px] uppercase font-mono tracking-widest font-black text-neutral-400">
                PROMOTIONAL DISCOUNT EXPIRES IN:
              </span>
              <div className="flex gap-2 sm:gap-3 text-center">
                {[
                  { value: timeLeft.days, label: "DAYS" },
                  { value: timeLeft.hours, label: "HRS" },
                  { value: timeLeft.minutes, label: "MINS" },
                  { value: timeLeft.seconds, label: "SECS" },
                ].map((t, idx) => (
                  <div key={idx} className="bg-white border-2 border-neutral-950 rounded-none px-3.5 sm:px-5 py-2 min-w-[70px] sm:min-w-[80px] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="font-mono font-black text-xl sm:text-2xl text-brand-red">
                      {String(t.value).padStart(2, "0")}
                    </span>
                    <span className="block text-[9px] font-mono font-black tracking-widest text-neutral-400 mt-0.5">
                      {t.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Actions - brutalist double boundary buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-3">
              <button
                onClick={onReserveClick}
                className="bg-brand-red hover:bg-neutral-950 text-white text-xs sm:text-sm font-black tracking-widest py-4 px-8 rounded-none transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer border-2 border-neutral-950 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none translate-x-[-2px] translate-y-[-2px] hover:translate-x-0 hover:translate-y-0 active:translate-x-[2px] active:translate-y-[2px]"
              >
                <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                RESERVE MY SEAT FOR ONLY $99
              </button>
              <div className="flex items-center justify-center gap-2 text-[11px] font-black uppercase tracking-wider text-neutral-700 bg-zinc-50 border-2 border-neutral-950 rounded-none py-4 px-5">
                <Users className="w-4 h-4 text-brand-red" />
                Limited to 20 seats (only 4 seats left)
              </div>
            </div>

            {/* Feature Checkmarks info board - high contrast flat grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 border-t-2 border-neutral-950 pt-6">
              {[
                { icon: Calendar, label: "6 Live Sessions" },
                { icon: Award, label: "ICF Global Coaches" },
                { icon: ShieldAlert, label: "7-Day Refund Policy" },
                { icon: Users, label: "Exclusive Peer Circle" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2.5">
                  <div className="bg-neutral-950 text-white p-1.5 rounded-none">
                    <item.icon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-neutral-800">{item.label}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Banner Graphic/Image (5 columns on desktop) */}
          <div className="lg:col-span-5 relative w-full flex justify-center items-center py-6">
            {/* Flat Solid shadows offset block mimicking theme banner layout */}
            <div className="absolute inset-0 bg-brand-red border-2 border-neutral-950 rounded-none transform translate-x-4 translate-y-4 -z-10" />
            
            {/* Image card wrapper - crisp rectangle border */}
            <div className="relative border-2 border-neutral-950 bg-white shadow-none rounded-none overflow-hidden aspect-[4/3] w-full max-w-md sm:max-w-lg lg:max-w-full">
              <img
                src={HERO_IMAGE}
                alt="Conscious Leader Advantage Group Session"
                className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-300"
                referrerPolicy="no-referrer"
              />
              {/* Overlapping small credential plate card - brutalist style */}
              <div className="absolute bottom-4 left-4 right-4 bg-white border-2 border-neutral-950 p-4 rounded-none shadow-md flex items-center gap-3">
                <div className="w-10 h-10 rounded-none bg-brand-red border-2 border-neutral-950 flex items-center justify-center text-white font-mono text-sm font-black">
                  ICF
                </div>
                <div>
                  <h4 className="text-[10px] sm:text-xs font-black text-neutral-900 uppercase tracking-widest leading-none">
                    ICF MENTORS PARTNERSHIP
                  </h4>
                  <p className="text-[10px] text-neutral-500 font-bold mt-1.5 leading-tight">
                    Accredited coaching frameworks and methodologies.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
