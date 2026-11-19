import React, { useState, useEffect } from 'react';
import { SITE } from '../data/portfolioData';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Projects', 'About', 'Services', 'Skills', 'Contact'];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-3 md:px-6 pt-3">
      <div
        className={`glass max-w-7xl mx-auto rounded-2xl px-4 sm:px-6 md:px-8 flex items-center justify-between transition-all duration-300 ${
          scrolled ? 'py-2.5 !bg-[#111113]/90 backdrop-blur-md shadow-lg shadow-black/40' : 'py-3 sm:py-3.5'
        }`}
      >
        <a
          href="/"
          className="text-white text-xl sm:text-2xl font-black tracking-tight uppercase group flex items-center"
        >
          <span className="text-[#D8C3A5] drop-shadow-[0_0_10px_rgba(216,195,165,0.7)]">
            {SITE.name.charAt(0)}
          </span>
          <span className="group-hover:text-[#D8C3A5] transition-colors duration-300">
            {SITE.name.slice(1)}.
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-xs md:text-sm font-bold text-gray-400 uppercase tracking-[0.15em] transition-colors duration-300 hover:text-white group"
            >
              {item}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#D8C3A5] transition-all duration-300 ease-out group-hover:w-full shadow-[0_0_8px_rgba(216,195,165,0.7)]" />
            </a>
          ))}
        </div>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="glass-red hidden sm:inline-block px-5 py-2 rounded-full text-white text-xs font-bold uppercase tracking-wider"
          >
            Let's Talk
          </a>

          {/* Mobile Menu Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="md:hidden glass-chip p-2 rounded-xl text-gray-200 hover:text-white transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#D8C3A5]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-7xl mx-auto glass rounded-2xl p-5 border border-[#8C7960]/30 bg-[#141311]/95 backdrop-blur-xl animate-in fade-in slide-in-from-top-3 duration-200 shadow-2xl shadow-black/80">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold text-gray-300 uppercase tracking-widest px-4 py-2.5 rounded-xl hover:bg-white/5 hover:text-[#D8C3A5] transition-all flex items-center justify-between"
              >
                <span>{item}</span>
                <span className="text-[#8C7960] text-xs">→</span>
              </a>
            ))}
            <div className="pt-2 border-t border-white/10 mt-1">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="glass-red w-full py-2.5 rounded-xl text-center text-white text-xs font-bold uppercase tracking-wider block"
              >
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
