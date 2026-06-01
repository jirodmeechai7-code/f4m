import React, { useState } from "react";
import { Check, Ticket, Users, CreditCard, Sparkles, Send, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Checkout() {
  const [promoCode, setPromoCode] = useState("");
  const [isPromoApplied, setIsPromoApplied] = useState(true); // Default applied for a warm presentation
  const [promoError, setPromoError] = useState("");
  const [promoSuccessMessage, setPromoSuccessMessage] = useState("LEADER99 applied: $50 USD launch discount active!");
  
  // Interactive seat countdown
  const [seatsLeft, setSeatsLeft] = useState(4);

  // Reservation payment modal states
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isReservedSuccess, setIsReservedSuccess] = useState(false);

  // Form states
  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPhone, setRegPhone] = useState("");
  const [regOrg, setRegOrg] = useState("");
  const [regSlot, setRegSlot] = useState("starts-june-23");

  const basePrice = 149;
  const currentPrice = isPromoApplied ? 99 : basePrice;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCode = promoCode.trim().toUpperCase();
    if (cleanCode === "LEADER99") {
      setIsPromoApplied(true);
      setPromoError("");
      setPromoSuccessMessage("LEADER99 applied successfully! $50 discount applied.");
    } else {
      setPromoError("Invalid promo code. Try using 'LEADER99'!");
    }
  };

  const handleRemovePromo = () => {
    setIsPromoApplied(false);
    setPromoCode("");
    setPromoSuccessMessage("");
    setPromoError("");
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!regName || !regEmail || !regPhone) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsReservedSuccess(true);
      setSeatsLeft((prev) => Math.max(1, prev - 1));
    }, 1800);
  };

  const resetRegisterForm = () => {
    setIsOpenModal(false);
    setIsReservedSuccess(false);
    setRegName("");
    setRegEmail("");
    setRegPhone("");
    setRegOrg("");
  };

  return (
    <section id="checkout" className="py-24 bg-brand-red text-white flex items-center justify-center relative overflow-hidden border-b-2 border-neutral-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        
        {/* Course schedule wrapper board styled in card list */}
        <div className="bg-white text-neutral-900 rounded-none p-6 sm:p-10 lg:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] border-2 border-neutral-950 max-w-2xl mx-auto flex flex-col gap-6 relative">
          
          {/* Top category ribbon banner */}
          <div className="bg-red-50 text-brand-red text-[10px] font-mono font-black tracking-widest uppercase rounded-none py-2 px-4 self-center text-center w-full border border-brand-red">
            LAUNCH OFFER · VALID UNTIL JUNE 21
          </div>

          <div className="text-center flex flex-col gap-2 mt-2">
            <h3 className="font-display font-black text-3xl sm:text-4xl text-neutral-900 uppercase tracking-tighter/90">
              Join the June Cohort
            </h3>
            <p className="text-xs text-neutral-400 font-bold uppercase tracking-wider">
              6 LIVE LESSONS · CERTIFIED ICF MENTORS
            </p>
          </div>

          {/* Pricing area */}
          <div className="flex flex-col items-center justify-center p-6 bg-zinc-50 rounded-none relative border-2 border-neutral-950">
            <span className="text-xs font-black text-neutral-400 line-through uppercase">
              ${basePrice} USD
            </span>
            <span className="font-display font-black text-6xl sm:text-7xl text-brand-red tracking-tight mt-1">
              ${currentPrice}
            </span>
            
            {/* Promo code badge indicator */}
            {isPromoApplied && (
              <span className="bg-white text-emerald-700 text-[10px] font-mono uppercase font-black py-1 px-3 rounded-none mt-3 border-2 border-emerald-600 flex items-center gap-1 select-none">
                <Sparkles className="w-3.5 h-3.5 stroke-[2.5]" /> Launch Discount Applied!
              </span>
            )}
          </div>

          {/* Live Promo Code input block */}
          <div className="border-y-2 border-neutral-950 py-5">
            {isPromoApplied ? (
              <div className="flex items-center justify-between bg-zinc-50 border-2 border-dashed border-emerald-600 p-3 rounded-none">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-800">
                  <Ticket className="w-4 h-4 text-emerald-600 shrink-0 stroke-[2.5]" />
                  <span className="uppercase font-mono text-[11px] tracking-tight">{promoSuccessMessage}</span>
                </div>
                <button
                  onClick={handleRemovePromo}
                  className="text-[10px] font-black text-neutral-400 hover:text-brand-red uppercase cursor-pointer p-1"
                >
                  Remove
                </button>
              </div>
            ) : (
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Enter promo code (e.g. LEADER99)..."
                  className="grow border-2 border-neutral-950 outline-none rounded-none p-3 text-xs font-bold focus:bg-zinc-50 bg-white"
                />
                <button
                  type="submit"
                  className="bg-neutral-950 hover:bg-neutral-800 text-white rounded-none border-2 border-neutral-950 text-xs font-black px-6 uppercase tracking-widest cursor-pointer select-none"
                >
                  Apply Code
                </button>
              </form>
            )}
            
            {/* Error notifications */}
            {promoError && !isPromoApplied && (
              <p className="text-[10px] text-brand-red font-black uppercase tracking-wider mt-2 pl-1 font-mono">
                {promoError}
              </p>
            )}
          </div>

          {/* Value offerings checkmarks list from mockup image */}
          <div className="flex flex-col gap-3">
            {[
              "6 Live Online Sessions with Coach-led drills",
              "The Conscious Leader Framework & Toolset",
              "Private Small Cohort (Limited to 20 seats)",
              "Lifetime access to session recordings",
              "7-day full money-back guarantee"
            ].map((bullet, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-5 h-5 bg-white text-neutral-950 rounded-none flex items-center justify-center mt-0.5 shrink-0 border-2 border-neutral-950">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-xs sm:text-sm font-black text-neutral-800 uppercase tracking-tight">
                  {bullet}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Big button */}
          <button
            onClick={() => setIsOpenModal(true)}
            className="w-full bg-brand-red hover:bg-neutral-950 text-white font-black py-4 px-8 rounded-none border-2 border-neutral-950 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none translate-x-[-1px] translate-y-[-1px] hover:translate-x-0 hover:translate-y-0 transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer mt-2 text-base uppercase tracking-widest"
          >
            RESERVE MY SEAT – ${currentPrice}
          </button>

          {/* Dynamic seats banner copy */}
          <div className="flex items-center justify-center gap-2 text-xs font-black text-neutral-900 bg-zinc-100 border-2 border-neutral-950 py-3.5 rounded-none uppercase tracking-wide">
            <Users className="w-4 h-4 text-brand-red animate-pulse stroke-[2.5]" />
            <span>Only {seatsLeft} seats remaining. Live cohort starts June 23.</span>
          </div>

        </div>
      </div>

      {/* Reservation Submission Modal overlay */}
      <AnimatePresence>
        {isOpenModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/70 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white text-neutral-900 rounded-none shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] p-6 sm:p-8 max-w-lg w-full overflow-hidden border-2 border-neutral-950 select-text"
            >
              
              {isReservedSuccess ? (
                /* Success screen */
                <div className="flex flex-col items-center justify-center text-center py-8">
                  <div className="bg-white text-emerald-600 p-4 rounded-none border-2 border-neutral-950 mb-4 animate-bounce">
                    <ShieldCheck className="w-10 h-10 stroke-[2.5]" />
                  </div>
                  <h4 className="font-display font-black text-2xl text-neutral-950 uppercase tracking-tighter">
                    SEAT RESERVED!
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-500 mt-2 font-bold max-w-sm whitespace-pre-line leading-relaxed uppercase tracking-wide">
                    Congratulations, {regName}! Your seat for the live cohort starting June 23 is successfully reserved.<br />
                    We have sent the class schedule, live session link, and welcome materials to <span className="font-black text-brand-red">{regEmail}</span>.
                  </p>
                  
                  <div className="border-2 border-neutral-950 bg-zinc-50 p-4 rounded-none w-full mt-6 text-left">
                    <h5 className="text-[10px] font-mono font-black tracking-widest text-brand-red uppercase mb-1">Receipt details:</h5>
                    <p className="text-xs font-black text-neutral-900">COHORT: The Conscious Leader Advantage (June 23)</p>
                    <p className="text-xs font-bold text-neutral-500 mt-1 uppercase">Paid Price: ${currentPrice} USD (LEADER99 active)</p>
                  </div>

                  <button
                    onClick={resetRegisterForm}
                    className="w-full bg-neutral-950 hover:bg-neutral-800 text-white font-black py-3 px-6 rounded-none mt-6 border-2 border-neutral-950 uppercase text-xs tracking-widest cursor-pointer shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none translate-x-[-1px] translate-y-[-1px] hover:translate-x-0 hover:translate-y-0"
                  >
                    Close & Go Back
                  </button>
                </div>
              ) : (
                /* Application form details */
                <form onSubmit={handleRegisterSubmit} className="flex flex-col gap-4">
                  <div className="flex justify-between items-center pb-3 border-b-2 border-neutral-950">
                    <div>
                      <h4 className="font-display font-black text-lg text-neutral-950 uppercase tracking-tight">
                        Confirm Reservation
                      </h4>
                      <p className="text-[9px] text-brand-red font-black uppercase tracking-wider">
                        Amount to pay today: ${currentPrice} USD
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setIsOpenModal(false)}
                      className="text-neutral-500 hover:text-neutral-950 cursor-pointer text-xs font-black uppercase p-1 tracking-wider"
                    >
                      Close
                    </button>
                  </div>

                  {/* Input forms */}
                  <div className="flex flex-col gap-3.5">
                    
                    <div className="flex flex-col gap-1">
                      <label className="text-[9px] font-mono font-black text-neutral-400 uppercase tracking-widest">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={regName}
                        onChange={(e) => setRegName(e.target.value)}
                        placeholder="Your first and last name"
                        className="border-2 border-neutral-950 p-3 text-xs rounded-none outline-none focus:bg-zinc-50 bg-white font-bold"
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-[9px] font-mono font-black text-neutral-400 uppercase tracking-widest">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={regEmail}
                        onChange={(e) => setRegEmail(e.target.value)}
                        placeholder="yourname@company.com"
                        className="border-2 border-neutral-950 p-3 text-xs rounded-none outline-none focus:bg-zinc-50 bg-white font-bold"
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-[9px] font-mono font-black text-neutral-400 uppercase tracking-widest">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={regPhone}
                        onChange={(e) => setRegPhone(e.target.value)}
                        placeholder="e.g. +1 555-0199"
                        className="border-2 border-neutral-950 p-3 text-xs rounded-none outline-none focus:bg-zinc-50 bg-white font-bold"
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-[9px] font-mono font-black text-neutral-400 uppercase tracking-widest">
                        Current Organization / Role (Optional)
                      </label>
                      <input
                        type="text"
                        value={regOrg}
                        onChange={(e) => setRegOrg(e.target.value)}
                        placeholder="e.g. Managing Director at Google"
                        className="border-2 border-neutral-950 p-3 text-xs rounded-none outline-none focus:bg-zinc-50 bg-white font-bold"
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-[9px] font-mono font-black text-neutral-400 uppercase tracking-widest">
                        Select Cohort Intake Schedule
                      </label>
                      <select
                        value={regSlot}
                        onChange={(e) => setRegSlot(e.target.value)}
                        className="border-2 border-neutral-950 p-3 text-xs rounded-none outline-none bg-white font-black uppercase text-neutral-800"
                      >
                        <option value="starts-june-23">📅 June Cohort — Starts June 23 ($99)</option>
                        <option value="starts-aug-15">📅 August Cohort — Starts August 15 ($99)</option>
                      </select>
                    </div>

                  </div>

                  <div className="mt-4 flex flex-col gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-brand-red hover:bg-neutral-950 text-white font-black py-3 px-6 rounded-none border-2 border-neutral-950 text-center cursor-pointer transition-all flex items-center justify-center gap-2 uppercase tracking-widest text-xs shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                          Processing Security Checkout...
                        </>
                      ) : (
                        <>
                          <CreditCard className="w-4 h-4 stroke-[2.5]" />
                          COMPLETE RESERVATION WITH SECURE CHECKOUT
                        </>
                      )}
                    </button>
                    <p className="text-[9px] text-neutral-400 text-center uppercase tracking-widest font-bold">
                      🔒 Your private information is kept fully encrypted under secure systems.
                    </p>
                  </div>

                </form>
              )}
              
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
