import React, { useState, useEffect } from "react";
import { Menu, X, Compass, ChevronRight } from "lucide-react";

interface HeaderProps {
  onReserveClick: () => void;
}

export default function Header({ onReserveClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Overview", href: "#about" },
    { label: "Curriculum", href: "#sessions" },
    { label: "Coaches", href: "#coaches" },
    { label: "Reviews", href: "#reviews" },
    { label: "Schedules & Pricing", href: "#checkout" },
  ];

  return (
    <header
      id="header-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-white/98 backdrop-blur-md shadow-md border-neutral-900 py-3"
          : "bg-white border-zinc-150 py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a href="#" className="flex items-center gap-3 group select-none">
            <div className="w-9 h-9 bg-brand-red text-white flex items-center justify-center transition-transform duration-300 group-hover:rotate-6">
              <Compass className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-lg sm:text-xl tracking-tighter text-neutral-900 leading-none">
                STUDIO.RED
              </span>
              <span className="text-[9px] uppercase font-mono tracking-widest text-brand-red font-bold leading-none mt-1">
                CONSCIOUS LEADER
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[11px] font-black uppercase tracking-widest text-neutral-800 hover:text-brand-red transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden md:block">
            <button
              onClick={onReserveClick}
              className="bg-brand-red hover:bg-neutral-900 text-white text-[11px] uppercase tracking-widest font-black py-3 px-6 transition-colors duration-200 flex items-center gap-1 cursor-pointer border-2 border-brand-red hover:border-neutral-900 active:translate-y-0.5"
            >
              Reserve Seat $99
              <ChevronRight className="w-4 h-4 text-white" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-neutral-900 hover:text-brand-red p-1 cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6 stroke-[2.5]" /> : <Menu className="w-6 h-6 stroke-[2.5]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-Out Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b-2 border-neutral-900 py-6 px-4 absolute top-full left-0 w-full shadow-xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-black uppercase tracking-widest text-neutral-900 hover:text-brand-red py-2 border-b border-zinc-100"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onReserveClick();
            }}
            className="bg-brand-red hover:bg-neutral-900 text-white font-black py-3 px-6 text-xs uppercase tracking-widest text-center transition-colors cursor-pointer w-full flex items-center justify-center gap-1"
          >
            Reserve Seat Now $99 <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
}
