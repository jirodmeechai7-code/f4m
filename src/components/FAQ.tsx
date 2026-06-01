import React, { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface FAQItemProps {
  key?: string;
  id: string;
  question: string;
  answer: string;
}

function FAQItem({ id, question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="border-2 border-neutral-950 rounded-none p-5 bg-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(220,38,38,1)] cursor-pointer transition-all duration-200 select-none pb-4"
    >
      <div className="flex justify-between items-center gap-4">
        <h4 className="text-neutral-900 font-extrabold text-sm sm:text-base font-display uppercase tracking-tight">
          {question}
        </h4>
        <div className="text-brand-red shrink-0">
          {isOpen ? <ChevronUp className="w-5 h-5 stroke-[2.5]" /> : <ChevronDown className="w-5 h-5 stroke-[2.5]" />}
        </div>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-xs sm:text-sm text-neutral-600 mt-3 font-bold leading-relaxed border-t-2 border-neutral-950 pt-3">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const faqs = [
    {
      id: "faq-1",
      question: "Are there recordings of the live sessions available for review?",
      answer: "Absolutely! Every week after our 2.5-hour live teaching session, high-quality video recordings, study guides, and actionable summaries are uploaded to our custom Alumni Portal. You will obtain lifetime access to review all skills and somatic drills whenever you need them.",
    },
    {
      id: "faq-2",
      question: "Can we request corporate invoicing, tax receipts, or certificates for business training?",
      answer: "Yes! After completing your registration and secure checkout, you can reply directly to your receipt summary email or reach out to our dedicated support workspace to provide your business organization taxable details for official corporate support documents.",
    },
    {
      id: "faq-3",
      question: "Which language is used in the sessions and is language assistance provided?",
      answer: "The masterclass sessions are conducted by Benjamin Seelos in clear, straightforward English with beautiful visual slides. Live international sessions are supported by accredited ICF bilingual facilitators to translate key terms, synthesize summaries in real-time, and host high-value localized virtual breakout rooms.",
    },
    {
      id: "faq-4",
      question: "What is the policy for the 7-day money-back guarantee?",
      answer: "We believe in the premium, transformative value of this cohort program. If within the first 7 days of starting the first module you feel the frameworks do not meet your active executive learning targets, you can contact us for a 100% full refund with no complex conditions or hassle.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-white border-b-2 border-neutral-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12 flex flex-col gap-3">
          <span className="text-[10px] uppercase font-mono tracking-widest text-brand-red font-black">
            COMMON CONCERNS
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-black text-neutral-950 uppercase tracking-tighter">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <div className="w-20 h-1 bg-brand-red mx-auto mt-2" />
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq) => (
            <FAQItem key={faq.id} id={faq.id} question={faq.question} answer={faq.answer} />
          ))}
        </div>

      </div>
    </section>
  );
}
