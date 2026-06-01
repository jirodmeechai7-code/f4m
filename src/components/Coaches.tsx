import React, { useState } from "react";
import { Sparkles, Trophy, CheckCircle, ChevronRight, GraduationCap } from "lucide-react";
import { coaches } from "../data";

export default function Coaches() {
  const [selectedCoachId, setSelectedCoachId] = useState<string>("benjamin");

  const currentCoach = coaches.find((c) => c.id === selectedCoachId) || coaches[0];

  return (
    <section id="coaches" className="py-24 bg-white border-b-2 border-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section title & Subtext */}
        <div className="text-center max-w-4xl mx-auto mb-16 flex flex-col gap-4">
          <span className="text-[10px] uppercase font-mono tracking-widest text-brand-red font-black">
            MEET YOUR COACHES
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-neutral-900 uppercase tracking-tighter">
            INTERNATIONALLY CERTIFIED MENTORS
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed max-w-2xl mx-auto font-bold">
            Three internationally certified coaches — accredited by the International Coaching Federation (ICF), 
            the American Board of NLP, and the Professional Business Coaching Association. 
            Co-created and guided by a world-class executive coaching panel that has empowered hundreds of leaders and high-growth startup founders globally.
          </p>
          <div className="w-20 h-1 bg-brand-red mx-auto mt-2" />
        </div>

        {/* Coach selection tabs buttons - brutalist blocks */}
        <div className="flex justify-center flex-wrap gap-3 sm:gap-4 mb-12">
          {coaches.map((coach) => (
            <button
              key={coach.id}
              onClick={() => setSelectedCoachId(coach.id)}
              className={`py-3.5 px-6 sm:px-8 text-xs sm:text-sm font-black tracking-widest uppercase rounded-none transition-all duration-150 cursor-pointer border-2 border-neutral-950 ${
                selectedCoachId === coach.id
                  ? "bg-brand-red text-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] translate-x-[-1px] translate-y-[-1px]"
                  : "bg-white hover:bg-neutral-50/80 text-neutral-800 hover:text-brand-red"
              }`}
            >
              {coach.name.split(" ")[0]} ({coach.role.split("&")[0].split(" ")[0]})
            </button>
          ))}
        </div>

        {/* Selected Coach profile layout */}
        <div className="bg-white rounded-none overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] border-2 border-neutral-950 max-w-5xl mx-auto mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Left information card (7 columns) */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between gap-6">
              
              {/* Header role */}
              <div className="flex flex-col gap-2">
                <span className="text-[10px] uppercase font-mono tracking-widest font-black text-brand-red">
                  {currentCoach.role}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-black text-neutral-950 uppercase tracking-tight">
                  {currentCoach.name} —
                </h3>
                <p className="text-[10px] italic font-mono font-black text-white bg-brand-red py-1.5 px-3 rounded-none mt-1.5 inline-block self-start border border-neutral-950 select-none">
                  {currentCoach.quote}
                </p>
              </div>

              {/* Bio description paragraph */}
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-bold uppercase tracking-wider">
                {currentCoach.bio}
              </p>

              {/* Focus points mapping */}
              <div className="border-t-2 border-neutral-950 pt-6">
                <h4 className="text-[10px] uppercase font-mono font-black tracking-widest text-neutral-400 mb-3 flex items-center gap-1.5">
                  <Trophy className="w-4 h-4 text-brand-red stroke-[2.5]" /> COACHING FOCUS:
                </h4>
                <div className="flex flex-col gap-2.5">
                  {currentCoach.focus.map((item, index) => (
                    <div key={index} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-brand-red mt-0.5 shrink-0 stroke-[2.5]" />
                      <span className="text-xs font-black text-neutral-800 leading-tight uppercase tracking-tight">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Signature quote accent */}
              <div className="border-l-4 border-brand-red bg-zinc-50 p-4 rounded-none mt-2 border border-y-2 border-r-2 border-neutral-950">
                <p className="text-xs font-black text-neutral-950 leading-relaxed uppercase">
                  {currentCoach.signatureQuote}
                </p>
              </div>

            </div>

            {/* Right Profile Photo background frame (5 columns) */}
            <div className="lg:col-span-5 relative min-h-[350px] lg:min-h-full border-t-2 lg:border-t-0 lg:border-l-2 border-neutral-950">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/40 via-transparent to-transparent z-10" />
              <img
                src={currentCoach.image}
                alt={currentCoach.name}
                className="absolute inset-0 w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-300"
                referrerPolicy="no-referrer"
              />
              {/* Badge Overlay */}
              <div className="absolute bottom-6 left-6 z-20 text-white flex items-center gap-3 bg-neutral-950 p-3.5 rounded-none border-2 border-neutral-800">
                <div className="bg-brand-red p-2 rounded-none text-white border border-neutral-950">
                  <GraduationCap className="w-5 h-5 stroke-[2]" />
                </div>
                <div>
                  <h5 className="text-[10px] font-black font-mono tracking-widest uppercase">ICF ACCREDITED</h5>
                  <p className="text-[9px] text-zinc-300 font-bold">Global standard of leadership coaching.</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
