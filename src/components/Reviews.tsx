import React, { useState } from "react";
import { Star, MessageSquareCode, Plus, Check, Filter, Search } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { initialReviews } from "../data";
import { Review } from "../types";

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [filterRating, setFilterRating] = useState<number | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  
  // New review form states
  const [newName, setNewName] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newText, setNewText] = useState("");
  const [newRating, setNewRating] = useState(5);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName || !newTitle || !newText) return;

    const newReview: Review = {
      id: `review-custom-${Date.now()}`,
      name: newName,
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      rating: newRating,
      title: newTitle,
      text: newText,
      avatar: newName.charAt(0).toUpperCase() || "U",
    };

    setReviews([newReview, ...reviews]);
    setSubmitSuccess(true);
    
    // Reset inputs
    setTimeout(() => {
      setNewName("");
      setNewTitle("");
      setNewText("");
      setNewRating(5);
      setSubmitSuccess(false);
      setShowAddForm(false);
    }, 2000);
  };

  const filteredReviews = reviews.filter((review) => {
    const matchesRating = filterRating === "all" || review.rating === filterRating;
    const matchesSearch =
      review.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.text.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRating && matchesSearch;
  });

  return (
    <section id="reviews" className="py-24 bg-white border-b-2 border-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section title & Header details */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-4">
          <span className="text-[10px] uppercase font-mono tracking-widest text-brand-red font-black">
            TESTIMONIALS & TRUST
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-neutral-950 uppercase">
            VOICES FROM TRANSFORMED LEADERS
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed font-bold uppercase tracking-wider">
            Real reflections from our past cohort participants. 
            Listen to genuine feedback from executive leaders, startup founders, and managers who underwent real transformation.
          </p>
          <div className="w-20 h-1 bg-brand-red mx-auto mt-2" />
        </div>

        {/* Interactive Filters Block - brutalist container */}
        <div className="bg-white border-2 border-neutral-950 p-6 mb-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 grow">
            {/* Search inputs */}
            <div className="relative grow">
              <Search className="w-4 h-4 text-neutral-900 absolute left-3.5 top-1/2 -translate-y-1/2 stroke-[2.5]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name, position, or keywords..."
                className="w-full pl-10 pr-4 py-2.5 text-xs font-black bg-white border-2 border-neutral-950 rounded-none outline-none focus:bg-zinc-50"
              />
            </div>

            {/* Stars rating selection filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-neutral-900 shrink-0 stroke-[2.5]" />
              <label className="text-[10px] font-mono font-black text-neutral-800 uppercase shrink-0">
                STARS:
              </label>
              <select
                value={filterRating}
                onChange={(e) => {
                  const val = e.target.value;
                  setFilterRating(val === "all" ? "all" : Number(val));
                }}
                className="py-2.5 px-3 text-xs bg-white border-2 border-neutral-950 rounded-none font-black text-neutral-900 outline-none cursor-pointer"
              >
                <option value="all">⭐ All Rating</option>
                <option value="5">⭐⭐⭐⭐⭐ 5 Stars</option>
                <option value="4">⭐⭐⭐⭐ 4 Stars</option>
              </select>
            </div>
          </div>

          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="shrink-0 bg-brand-red hover:bg-neutral-950 text-white rounded-none py-3 px-6 text-xs uppercase font-black tracking-widest transition-colors duration-150 border-2 border-neutral-950 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none translate-x-[-1px] translate-y-[-1px] hover:translate-x-0 hover:translate-y-0 cursor-pointer self-start lg:self-auto"
          >
            <Plus className="w-4 h-4 stroke-[2.5]" /> WRITE A COHORT REVIEW
          </button>
        </div>

        {/* Add review form overlay/section with Animation */}
        <AnimatePresence>
          {showAddForm && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-zinc-50 border-2 border-neutral-950 rounded-none p-6 mb-10 overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              <h3 className="font-display font-black text-lg text-neutral-950 mb-4 flex items-center gap-2 uppercase tracking-tight">
                <MessageSquareCode className="w-5 h-5 text-brand-red stroke-[2.5]" /> SHARE YOUR LIVE LEARNING EXPERIENCE
              </h3>
              
              {submitSuccess ? (
                <div className="flex flex-col items-center justify-center py-8 text-center text-brand-red animate-pulse">
                  <div className="bg-brand-red text-white p-3 rounded-none border-2 border-neutral-950 mb-3">
                    <Check className="w-6 h-6 stroke-[3]" />
                  </div>
                  <h4 className="font-black text-sm uppercase tracking-wider">YOUR REVIEW HAS BEEN SUBMITTED!</h4>
                  <p className="text-xs text-neutral-500 mt-1 font-bold">Thank you for sharing your experience. Your review is now live on our board.</p>
                </div>
              ) : (
                <form onSubmit={handleAddReview} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-mono font-black text-neutral-400 uppercase tracking-widest">
                      YOUR FULL NAME
                    </label>
                    <input
                      type="text"
                      required
                      value={newName}
                      onChange={(e) => setNewName(e.target.value)}
                      placeholder="e.g. Somchai Srivichai"
                      className="bg-white border-2 border-neutral-950 rounded-none p-3 text-xs outline-none focus:bg-zinc-50 font-bold"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-mono font-black text-neutral-400 uppercase tracking-widest">
                      REVIEW CORE TITLE / POSITION
                    </label>
                    <input
                      type="text"
                      required
                      value={newTitle}
                      onChange={(e) => setNewTitle(e.target.value)}
                      placeholder="e.g. Managing Director & CEO"
                      className="bg-white border-2 border-neutral-950 rounded-none p-3 text-xs outline-none focus:bg-zinc-50 font-bold"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5 md:col-span-2">
                    <label className="text-[10px] font-mono font-black text-neutral-400 uppercase tracking-widest">
                      RATING STARS
                    </label>
                    <div className="flex gap-2 bg-white border-2 border-neutral-950 p-2.5 max-w-xs justify-center items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setNewRating(star)}
                          className="cursor-pointer"
                        >
                          <Star
                            className={`w-6 h-6 ${
                              star <= newRating ? "fill-orange-400 text-orange-400" : "text-gray-200"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5 md:col-span-2">
                    <label className="text-[10px] font-mono font-black text-neutral-400 uppercase tracking-widest">
                      YOUR DETAILED EXPERIENCE
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={newText}
                      onChange={(e) => setNewText(e.target.value)}
                      placeholder="e.g. This cohort provided incredibly actionable frameworks. The somatic breathing session for pressure reset was particularly transformative!"
                      className="bg-white border-2 border-neutral-950 rounded-none p-3 text-xs outline-none focus:bg-zinc-50 font-bold font-sans"
                    />
                  </div>

                  <div className="md:col-span-2 flex justify-end gap-3 mt-2">
                    <button
                      type="button"
                      onClick={() => setShowAddForm(false)}
                      className="py-3 px-6 text-xs uppercase font-black tracking-widest text-neutral-600 hover:bg-neutral-100 bg-white border-2 border-neutral-950 rounded-none cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-brand-red hover:bg-neutral-950 border-2 border-neutral-950 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none translate-x-[-1px] translate-y-[-1px] hover:translate-x-0 hover:translate-y-0 text-white rounded-none px-6 py-3 text-xs font-black uppercase tracking-widest cursor-pointer"
                    >
                      Submit Your Review
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Reviews Grid */}
        {filteredReviews.length === 0 ? (
          <div className="text-center py-12 border-2 border-dashed border-neutral-950 rounded-none">
            <p className="text-xs font-black uppercase tracking-widest text-neutral-400">No reviews found matching your search. Try another query.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10">
            {filteredReviews.map((review) => (
              <div
                key={review.id}
                className="bg-white border-2 border-neutral-950 rounded-none p-6 sm:p-7 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(220,38,38,1)] transition-all duration-200 flex flex-col justify-between gap-5 relative group"
              >
                {/* Header card info */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-none bg-brand-red text-white font-black flex items-center justify-center font-mono border border-neutral-950 text-base">
                        {review.avatar}
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-black text-neutral-950 leading-tight uppercase tracking-tight">
                          {review.name}
                        </h4>
                        <span className="text-[10px] text-neutral-400 font-bold block mt-0.5">
                          {review.date}
                        </span>
                      </div>
                    </div>
                    {/* Stars render */}
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <Star
                          key={idx}
                          className={`w-3.5 h-3.5 ${
                            idx < review.rating ? "fill-orange-400 text-orange-400" : "text-gray-100"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-zinc-100 pt-3 flex flex-col gap-1.5">
                    <h5 className="font-display font-black text-sm text-neutral-950 leading-snug uppercase tracking-tight">
                      "{review.title}"
                    </h5>
                    <p className="text-xs sm:text-sm text-neutral-500 font-bold leading-relaxed italic">
                      "{review.text}"
                    </p>
                  </div>
                </div>

                {/* Read full review action modal block */}
                <div className="border-t border-zinc-150 pt-3 flex items-center justify-between">
                  <span className="text-[9px] text-brand-red font-black uppercase tracking-widest bg-white border border-brand-red py-1 px-2.5 rounded-none select-none">
                    Verified Cohort Participant
                  </span>
                  <button className="text-[10px] font-black text-neutral-400 hover:text-brand-red uppercase tracking-wide transition-colors cursor-pointer">
                    Read full review
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}