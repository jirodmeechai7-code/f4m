import React from "react";
import { CheckCircle2, Zap, Flame, BrainCircuit, HeartHandshake } from "lucide-react";

export default function Advantage() {
  const trainingPoints = [
    {
      num: "01",
      icon: Flame,
      title: "Emotional Steadiness",
      desc: "Maintain calm under pressure",
    },
    {
      num: "02",
      icon: BrainCircuit,
      title: "Aligned Decision-Making",
      desc: "Decide with confidence and clarity",
    },
    {
      num: "03",
      icon: HeartHandshake,
      title: "Calm Presence",
      desc: "Ground your leadership style",
    },
  ];

  return (
    <section id="about" className="py-24 bg-white border-b-2 border-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Modern styled Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-4">
          <span className="text-[10px] uppercase font-mono tracking-widest text-brand-red font-black">
            THE INNER LEADERSHIP METHOD
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-neutral-900 uppercase">
            THE CONSCIOUS LEADER ADVANTAGE
          </h2>
          <p className="text-sm sm:text-base text-neutral-500 font-bold whitespace-pre-line leading-relaxed">
            Lead with clarity, confidence, and calm — from reaction to transformation.<br className="hidden sm:inline" />
            Shift from reactive damage control to centered, unwavering executive presence.          </p>
          <div className="w-20 h-1 bg-brand-red mx-auto mt-2" />
        </div>

        {/* Two-column detailed comparison structure from Mockup 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch mt-12 bg-white rounded-none p-6 sm:p-10 lg:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] border-2 border-neutral-950">
          
          {/* Left Column: Philosophical context */}
          <div className="lg:col-span-6 flex flex-col justify-center gap-6">
            <div className="inline-flex items-center gap-2 bg-brand-red text-white text-[11px] tracking-widest uppercase font-black py-1.5 px-3 rounded-none self-start border-2 border-neutral-950">
              <Zap className="w-4 h-4 text-white" /> THE REALITY CHECK
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-black text-neutral-950 leading-tight uppercase tracking-tight">
              When pressure is constant, capable leaders slip into reaction mode — pushing harder while losing inner alignment.
            </h3>
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed font-bold">
              This live, coach-led training helps you regulate your state and lead yourself first, so your decisions and presence feel grounded again.
            </p>
            <p className="text-neutral-500 text-sm leading-relaxed font-semibold">
              <span className="font-mono font-black text-xs text-brand-red uppercase tracking-wider block mb-1">Format:</span>
              6 live online sessions · Coach-led by Fantastic4Mind (F4M)
            </p>
          </div>

          {/* Elegant Middle Vertical Divider */}
          <div className="hidden lg:flex lg:col-span-1 justify-center items-center">
            <div className="w-[2px] h-4/5 bg-neutral-950" />
          </div>

          {/* Right Column: Training outcomes */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8 pt-6 lg:pt-0">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-mono font-black uppercase tracking-widest text-brand-red">
                WHAT YOU WILL MASTER IN THIS COHORT
              </span>
              <h4 className="font-display text-xl sm:text-2xl font-black text-neutral-950 uppercase tracking-tight">
                Course Training Modules:
              </h4>
            </div>

            {/* List with styled icons and big bold numbers */}
            <div className="flex flex-col gap-6">
              {trainingPoints.map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="shrink-0 font-display font-black text-red-600 text-3xl sm:text-4xl leading-none w-12 text-left">
                    {item.num}
                  </div>
                  <div>
                    <h5 className="text-sm sm:text-base font-black text-neutral-950 leading-snug uppercase tracking-tight">
                      {item.title}
                    </h5>
                    <p className="text-xs sm:text-sm text-neutral-500 mt-1 font-medium leading-relaxed italic">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Session Count Summary badge details from mockups */}
            <div className="bg-zinc-50 border-2 border-neutral-950 p-4 rounded-none flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-red shrink-0 stroke-[2.5]" />
              <span className="text-xs sm:text-sm font-black text-neutral-950 uppercase tracking-wide">
                6 INTENSIVE LIVE INTERACTIVE LESSONS · ACC CREDITED COACHING
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
