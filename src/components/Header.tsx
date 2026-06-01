import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, User, ShoppingBag, Eye, LogIn, Lock, GraduationCap, Sparkles, Check, Send } from "lucide-react";

const logoImg = "/src/assets/images/F4M logo.png";

interface HeaderProps {
  onReserveClick: () => void;
}

export default function Header({ onReserveClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  // Custom interactive Modals
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { 
      label: "About", 
      href: "#about", 
      hasDropdown: true,
      dropdownItems: [
        { title: "Our Methodology", desc: "Scientific state regulation & nervous system safety.", href: "#about" },
        { title: "Inner Leadership", desc: "Shift from constant reaction to aligned composure.", href: "#about" },
        { title: "Team Alignment", desc: "Cultivate high-trust multiplier communication.", href: "#about" }
      ]
    },
    { label: "Start Here", href: "#about" },
    { 
      label: "Classes", 
      href: "#sessions", 
      hasDropdown: true,
      dropdownItems: [
        { title: "Session 1: Reality Reset", desc: "Lead from clarity, not calendar chaos.", href: "#sessions" },
        { title: "Session 2: Identity Alignment", desc: "Ground actions with authentic core values.", href: "#sessions" },
        { title: "Session 3: EQ in Action", desc: "Master communication & team composure.", href: "#sessions" },
        { title: "View All 6 Sessions", desc: "See complete curriculum breakdown.", href: "#sessions" }
      ]
    },
    { label: "Personal Coaching", href: "#coaches" },
    { label: "Corporate/SME", href: "#checkout" },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginEmail.trim() && loginPassword.trim()) {
      setIsLoginSuccess(true);
      setTimeout(() => {
        setIsLoginOpen(false);
        setIsLoginSuccess(false);
        setLoginEmail("");
        setLoginPassword("");
      }, 1500);
    }
  };

  return (
    <>
      <header
        id="header-nav"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#9C1C1D] shadow-lg py-2"
            : "bg-[#9C1C1D] py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            
            {/* Logo / Brand (Matching requested custom vector format as image) */}
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="flex items-center group select-none mr-2"
            >
              <img 
                src={logoImg} 
                alt="Fantastic 4 Mind" 
                className="h-10 sm:h-11 w-auto max-w-[150px] object-contain transition-transform duration-200 group-hover:scale-102"
                referrerPolicy="no-referrer"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navItems.map((item) => (
                <div 
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
                  onMouseLeave={() => item.hasDropdown && setActiveDropdown(null)}
                >
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className="flex items-center gap-1 text-[13px] xl:text-[14px] font-bold text-white/90 hover:text-white transition-colors py-2"
                  >
                    <span>{item.label}</span>
                    {item.hasDropdown && (
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                    )}
                  </a>

                  {/* Dropdown menu */}
                  {item.hasDropdown && activeDropdown === item.label && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full w-72 bg-white text-neutral-900 shadow-2xl p-4 flex flex-col gap-3.5 rounded-none border border-neutral-200 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                      <div className="absolute top-0 left-12 w-3 h-3 bg-white rotate-45 -translate-y-1.5 border-t border-l border-neutral-200" />
                      {item.dropdownItems?.map((drop, idx) => (
                        <a
                          key={idx}
                          href={drop.href}
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavClick(drop.href);
                          }}
                          className="group/item flex flex-col gap-0.5 p-1.5 hover:bg-neutral-50 transition-colors"
                        >
                          <span className="text-[11px] font-bold uppercase tracking-wider text-[#9C1C1D] group-hover/item:text-neutral-900 transition-colors">
                            {drop.title}
                          </span>
                          <span className="text-[10px] text-neutral-500 font-medium leading-tight">
                            {drop.desc}
                          </span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Action Buttons & Utilities */}
            <div className="hidden lg:flex items-center gap-6">
              
              {/* Profile Log In */}
              <button 
                onClick={() => setIsLoginOpen(true)}
                className="flex items-center gap-2 text-[13px] xl:text-[14px] font-bold text-white/90 hover:text-white transition-opacity cursor-pointer select-none"
              >
                <User className="w-4 h-4 text-white" />
                <span>Log In</span>
              </button>

              {/* Shopping Bag Cart */}
              <button 
                onClick={() => setIsCartOpen(true)}
                className="text-white hover:opacity-85 transition-opacity cursor-pointer relative p-1.5 bg-white/10 rounded-full"
                aria-label="Cart"
              >
                <ShoppingBag className="w-4 h-4 text-white" />
                <span className="absolute -top-1 -right-1 bg-neutral-950 border border-[#9C1C1D] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-black">
                  1
                </span>
              </button>

              {/* Instant Action */}
              <button
                onClick={onReserveClick}
                className="bg-white hover:bg-neutral-950 text-[#9C1C1D] hover:text-white text-[10px] uppercase font-black tracking-widest py-2 px-4 transition-colors duration-200 cursor-pointer border-2 border-white hover:border-neutral-950 rounded-none"
              >
                Reserve Seat $99
              </button>
            </div>

            {/* Mobile Actions Container */}
            <div className="flex lg:hidden items-center gap-4">
              <button 
                onClick={() => setIsLoginOpen(true)}
                className="text-white hover:opacity-85 p-1.5 bg-white/10 rounded-full"
                aria-label="Login"
              >
                <User className="w-4 h-4" />
              </button>

              <button 
                onClick={() => setIsCartOpen(true)}
                className="text-white hover:opacity-85 p-1.5 bg-white/10 rounded-full relative"
                aria-label="Cart"
              >
                <ShoppingBag className="w-4 h-4" />
                <span className="absolute top-0 right-0 bg-neutral-950 text-[9px] w-3 h-3 rounded-full flex items-center justify-center font-bold">1</span>
              </button>

              {/* Mobile Menu Toggle button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:opacity-85 p-1 cursor-pointer"
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu Container */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#881415] text-white py-6 px-4 absolute top-full left-0 w-full shadow-2xl border-t border-white/10 flex flex-col gap-5 animate-in fade-in slide-in-from-top-3 duration-250 z-50">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <div key={item.label} className="border-b border-white/5 pb-2">
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className="flex items-center justify-between text-sm font-bold py-2 hover:opacity-85"
                  >
                    <span>{item.label}</span>
                    {item.hasDropdown && <ChevronDown className="w-4 h-4 opacity-70" />}
                  </a>
                  
                  {item.hasDropdown && (
                    <div className="pl-4 mt-1 flex flex-col gap-1.5 border-l-2 border-white/20">
                      {item.dropdownItems?.map((drop, idx) => (
                        <a
                          key={idx}
                          href={drop.href}
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavClick(drop.href);
                          }}
                          className="text-[11px] text-white/80 hover:text-white py-1 block font-medium"
                        >
                          · {drop.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onReserveClick();
              }}
              className="bg-white text-[#9C1C1D] font-black py-2.5 px-6 text-xs uppercase tracking-widest text-center transition-colors cursor-pointer w-full flex items-center justify-center gap-1 rounded-none"
            >
              Reserve Seat Now $99
            </button>
          </div>
        )}
      </header>

      {/* 1. INTERACTIVE LOG IN MODAL (Zero alert fallback!) */}
      {isLoginOpen && (
        <div className="fixed inset-0 bg-neutral-950/80 backdrop-blur-sm flex items-center justify-center p-4 z-[9999] animate-in fade-in duration-200">
          <div className="bg-white text-neutral-950 w-full max-w-md p-6 sm:p-8 rounded-none border-2 border-neutral-950 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative">
            <button 
              onClick={() => setIsLoginOpen(false)}
              className="absolute top-4 right-4 text-neutral-500 hover:text-neutral-950 transition-colors p-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#9C1C1D] text-white flex items-center justify-center">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-lg font-black uppercase tracking-tight text-neutral-950">
                  F4M Member Portal
                </h3>
                <p className="text-[10px] font-mono tracking-wider text-neutral-500 uppercase">
                  Secure Access System
                </p>
              </div>
            </div>

            {isLoginSuccess ? (
              <div className="py-8 flex flex-col items-center justify-center text-center gap-3">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>
                <h4 className="font-bold text-neutral-900 text-sm">Access Verified Successfully!</h4>
                <p className="text-xs text-neutral-500">Redirecting to your F4M Conscious LMS Dashboard...</p>
              </div>
            ) : (
              <form onSubmit={handleLoginSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 font-bold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="leader@executive.com"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    className="w-full text-xs font-semibold bg-neutral-50 border-2 border-neutral-200 focus:border-[#9C1C1D] p-2.5 rounded-none outline-none transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 font-bold">
                    Password
                  </label>
                  <input
                    type="password"
                    required
                    placeholder="••••••••••••"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    className="w-full text-xs font-semibold bg-neutral-50 border-2 border-neutral-200 focus:border-[#9C1C1D] p-2.5 rounded-none outline-none transition-colors"
                  />
                </div>

                <div className="flex items-center justify-between text-[11px] text-neutral-500 font-semibold mt-1">
                  <label className="flex items-center gap-1.5 cursor-pointer selection:bg-transparent">
                    <input type="checkbox" className="rounded-none accent-[#9C1C1D]" />
                    <span>Remember me</span>
                  </label>
                  <a href="#" className="hover:text-[#9C1C1D] transition-colors">Forgot Password?</a>
                </div>

                <button
                  type="submit"
                  className="bg-[#9C1C1D] hover:bg-neutral-950 text-white font-mono font-black text-xs uppercase tracking-widest py-3 mt-2 text-center transition-colors rounded-none flex items-center justify-center gap-2 border-2 border-[#9C1C1D] hover:border-neutral-950 cursor-pointer"
                >
                  Authorize Login <Send className="w-3.5 h-3.5" />
                </button>

                <div className="text-center text-[10px] font-semibold text-neutral-400 mt-2 border-t border-neutral-100 pt-3">
                  Don't have an F4M account yet? <button type="button" onClick={() => { setIsLoginOpen(false); onReserveClick(); }} className="text-[#9C1C1D] font-extrabold hover:underline">Enroll in Conscious Leader Program</button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* 2. INTERACTIVE CART / ORDER SUMMARY DRAWER */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-neutral-950/80 backdrop-blur-sm flex justify-end z-[9999] animate-in fade-in duration-200">
          <div className="bg-white text-neutral-950 w-full max-w-sm h-full p-6 sm:p-8 flex flex-col justify-between rounded-none shadow-2xl relative border-l-4 border-[#9C1C1D] animate-in slide-in-from-right duration-250">
            <div>
              <div className="flex items-center justify-between border-b pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-[#9C1C1D]" />
                  <h3 className="font-display text-lg font-black uppercase tracking-tight text-neutral-950">
                    Your Order Cart
                  </h3>
                </div>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="text-neutral-500 hover:text-neutral-950 transition-colors p-1"
                  aria-label="Close cart"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Cart Item Detail */}
              <div className="flex flex-col gap-4">
                <div className="bg-neutral-50 p-4 border border-neutral-200 rounded-none flex gap-3">
                  <div className="w-12 h-12 bg-[#9C1C1D]/10 text-[#9C1C1D] flex items-center justify-center scale-95 font-mono font-black text-sm select-none border border-[#9C1C1D]/30">
                    CL
                  </div>
                  <div className="flex-1 flex flex-col gap-0.5">
                    <span className="text-xs font-black text-neutral-900 uppercase tracking-tight">
                      Conscious Leader Cohort
                    </span>
                    <span className="text-[10px] text-neutral-500 font-bold">
                      Format: 6 Live Online Coach Sessions
                    </span>
                    <span className="text-xs font-black text-[#9C1C1D] mt-1">$99 USD</span>
                  </div>
                </div>

                <div className="border-t border-dashed border-neutral-200 mt-4 pt-4 flex flex-col gap-2.5 text-xs text-neutral-600 font-bold">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="text-neutral-900">$99.00 USD</span>
                  </div>
                  <div className="flex justify-between text-emerald-600">
                    <span>Introductory Discount Applied</span>
                    <span>- $900.00 USD</span>
                  </div>
                  <div className="flex justify-between border-t pt-2.5 font-black text-sm text-neutral-950">
                    <span>Total Amount due</span>
                    <span className="text-[#9C1C1D]">$99.00 USD</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions of Drawer */}
            <div className="flex flex-col gap-3">
              <div className="flex gap-2 items-center text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>ICF Accredited Compliance System ready</span>
              </div>
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  onReserveClick();
                }}
                className="w-full bg-[#9C1C1D] hover:bg-neutral-950 text-white font-mono font-black text-xs uppercase tracking-widest py-3 px-6 text-center transition-all border-2 border-[#9C1C1D] hover:border-neutral-950"
              >
                Proceed to Checkout
              </button>
              <button
                onClick={() => setIsCartOpen(false)}
                className="w-full bg-transparent hover:bg-neutral-50 text-neutral-700 font-bold text-[11px] py-1 text-center hover:underline cursor-pointer"
              >
                Continue Browsing Curriculum
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
