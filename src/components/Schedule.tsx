import React, { useState } from "react";
import { BookOpen, Check, ChevronDown, ChevronUp, Lock } from "lucide-react";
import { motion } from "motion/react";
import { scheduleSessions } from "../data";
import { ScheduleSession } from "../types";

export default function Schedule() {
  const [activeSessionId, setActiveSessionId] = useState<string>("session-1");

  const toggleSession = (id: string) => {
    setActiveSessionId(activeSessionId === id ? "" : id);
  };

  return (
    <section id="sessions" className="py-24 bg-white border-b-2 border-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section title & Header details */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-[10px] uppercase font-mono tracking-widest text-brand-red font-black">
              CURRICULUM BREAKDOWN
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-neutral-950 mt-1 uppercase tracking-tighter">
              CONSCIOUS LEADER COURSE SCHEDULE
            </h2>
          </div>
          <div className="bg-brand-red text-white text-[10px] font-mono tracking-widest font-black uppercase py-2 px-4 rounded-none border-2 border-neutral-950 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] self-start select-none">
            6 LIVE SECURE SESSIONS · COHORT SCHEDULE
          </div>
        </div>

        {/* Schedule Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left panel: Selected active Session full card detail viewer */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-5 bg-neutral-950 text-white rounded-none p-6 sm:p-8 shadow-[8px_8px_0px_0px_rgba(220,38,38,1)] sticky top-24 border-2 border-neutral-950"
          >
            <span className="text-[9px] uppercase font-mono font-black text-brand-red tracking-widest block mb-1">
              Active Module Overview
            </span>
            
            {activeSessionId ? (
              (() => {
                const current = scheduleSessions.find((s) => s.id === activeSessionId);
                if (!current) return null;
                return (
                  <div className="flex flex-col gap-5 animate-in fade-in slide-in-from-left-4 duration-200">
                    <div className="flex items-center justify-between border-b-2 border-zinc-800 pb-4 mt-2">
                      <div className="bg-brand-red text-white rounded-none border-2 border-neutral-950 w-12 h-12 flex items-center justify-center text-lg font-black">
                        0{current.sessionNum}
                      </div>
                      <span className="text-[10px] font-mono font-black tracking-widest text-neutral-950 bg-white px-3 py-1 border border-neutral-950">
                        WEEK 0{current.sessionNum} · LIVE SEAT
                      </span>
                    </div>

                    <h3 className="font-display text-2xl font-black tracking-tight text-white uppercase sm:text-3xl">
                      {current.title}
                    </h3>
                    
                    <p className="text-zinc-300 text-xs sm:text-sm font-bold tracking-wide italic leading-snug border-l-2 border-brand-red pl-3">
                      {current.subtitle}
                    </p>

                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-medium">
                      {current.description}
                    </p>

                    {/* Topics bullet list */}
                    <div className="mt-2 border-t border-zinc-800 pt-4">
                      <h4 className="text-[10px] uppercase font-mono font-black tracking-widest text-white mb-3 flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-brand-red stroke-[2.5]" /> INSIDE THIS LECTURE:
                      </h4>
                      <ul className="flex flex-col gap-2.5">
                        {current.topics.map((topic, index) => (
                          <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 font-medium">
                            <span className="p-0.5 rounded-none bg-brand-red text-white mt-0.5 shrink-0">
                              <Check className="w-3 h-3 stroke-[3]" />
                            </span>
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-neutral-900 border border-neutral-800 rounded-none p-4 mt-2 flex items-center gap-3">
                      <Lock className="w-5 h-5 text-brand-red shrink-0" />
                      <p className="text-[10px] text-zinc-400 font-bold leading-snug">
                        Live sessions are 2.5 hours long (1.5 hours deep lecture, 1 hour interactive virtual breakout groups and live Q&A sessions).
                      </p>
                    </div>
                  </div>
                );
              })()
            ) : (
              <div className="flex flex-col items-center justify-center text-center py-16 text-neutral-600">
                <BookOpen className="w-12 h-12 mb-3 text-neutral-700" />
                <p className="text-xs font-black uppercase tracking-widest leading-none text-center">Select a lesson module to view curriculum details</p>
              </div>
            )}
          </motion.div>

          {/* Right panel: Timeline of Sessions interactive accordion list */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {scheduleSessions.map((session, sIdx) => {
              const isOpen = activeSessionId === session.id;
              return (
                <motion.div
                  key={session.id}
                  onClick={() => toggleSession(session.id)}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: sIdx * 0.05 }}
                  whileHover={{ x: 6 }}
                  className={`group rounded-none p-5 border-2 cursor-pointer transition-all duration-200 flex items-start gap-4 select-none ${
                    isOpen
                      ? "bg-white border-brand-red shadow-[4px_4px_0px_0px_rgba(220,38,38,1)] text-neutral-950"
                      : "bg-white hover:bg-neutral-50/50 border-neutral-950 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-neutral-900"
                  }`}
                >
                  {/* Number Badge */}
                  <div
                    className={`shrink-0 w-10 sm:w-11 h-10 sm:h-11 rounded-none flex items-center justify-center font-black text-sm transition-colors border ${
                      isOpen
                        ? "bg-brand-red text-white border-brand-red"
                        : "bg-neutral-950 text-white border-neutral-950 group-hover:bg-brand-red group-hover:border-brand-red"
                    }`}
                  >
                    0{session.sessionNum}
                  </div>

                  {/* Header text */}
                  <div className="grow flex flex-col gap-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h4
                        className={`text-sm sm:text-base font-black transition-colors uppercase tracking-tight truncate ${
                          isOpen ? "text-brand-red" : "text-neutral-950"
                        }`}
                      >
                        {session.title}
                      </h4>
                      <div className="shrink-0 text-neutral-500 group-hover:text-brand-red transition-colors">
                        {isOpen ? <ChevronUp className="w-5 h-5 stroke-[2.5]" /> : <ChevronDown className="w-5 h-5 stroke-[2.5]" />}
                      </div>
                    </div>
                    
                    <p className={`text-xs truncate font-bold uppercase tracking-wide leading-none ${isOpen ? "text-brand-red/90" : "text-neutral-500"}`}>
                      {session.subtitle}
                    </p>

                    {/* Quick description preview (only when closed) */}
                    {!isOpen && (
                      <p className="text-xs text-neutral-500 line-clamp-1 mt-1 leading-normal font-medium">
                        {session.description}
                      </p>
                    )}

                    {/* Quick topic items preview tags */}
                    {isOpen && (
                      <div className="flex flex-wrap gap-1.5 mt-3 animate-in fade-in slide-in-from-top-1 duration-150">
                        {session.topics.slice(0, 2).map((topic, i) => (
                          <span key={i} className="text-[10px] bg-brand-red text-white font-black font-mono px-2.5 py-1 border border-neutral-950 uppercase tracking-widest leading-none">
                            {topic}
                          </span>
                        ))}
                        {session.topics.length > 2 && (
                          <span className="text-[10px] bg-neutral-950 text-white font-mono px-2 py-1 leading-none">
                            +{session.topics.length - 2} MORE
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Inside the Journey section */}
        <div className="mt-16 border-2 border-neutral-950 bg-amber-50/40 p-6 sm:p-8 md:p-10 rounded-none shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row gap-6 md:gap-8 items-start justify-between">
          <div className="max-w-3xl">
            <span className="text-[10px] uppercase font-mono tracking-widest text-brand-red font-black block mb-2">
              Inside the Journey
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-black text-neutral-950 uppercase tracking-tight mb-3">
              Experience What's Next
            </h3>
            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-bold mb-4">
              Before each module begins, step inside the experience. Join a complimentary live session with the founders of F4M and get a first look at what's coming next.
            </p>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-semibold">
              You'll experience real coaching, gain new perspectives, and understand how each module can support your personal and professional growth. No pressure. No commitment. Just a powerful introduction to the journey ahead.
            </p>
          </div>
          <div className="flex flex-col gap-2 shrink-0 w-full md:w-auto font-mono text-[10px] uppercase tracking-widest text-neutral-500 font-bold border-l-2 md:border-l-4 border-brand-red pl-4 self-stretch justify-center">
            <div>FANTASTIC4MIND (F4M)</div>
            <div>COMPLIMENTARY ACCESS</div>
            <div className="text-neutral-900 font-extrabold text-[11px]">100% VALUE-FOCUSED</div>
          </div>
        </div>

      </div>
    </section>
  );
}
