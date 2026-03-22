'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = ['About', 'Experience', 'Projects', 'Skills', 'Resume', 'Contact'];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[rgba(10,10,14,0.85)] backdrop-blur-xl border-b border-white/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="font-display text-xl font-bold text-gray-100 no-underline">
          <span className="text-accent">A</span>rjun<span className="text-accent">.</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8 items-center">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => document.getElementById(l.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
              className="text-white/50 bg-transparent border-none cursor-pointer text-xs font-medium tracking-[0.08em] uppercase font-body hover:text-accent transition-colors duration-300"
            >
              {l}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden bg-transparent border-none text-gray-100 text-2xl cursor-pointer"
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[rgba(10,10,14,0.95)] backdrop-blur-xl overflow-hidden"
          >
            <div className="px-6 pb-6 flex flex-col gap-1">
              {links.map((l) => (
                <button
                  key={l}
                  onClick={() => {
                    setMobileOpen(false);
                    setTimeout(() => document.getElementById(l.toLowerCase())?.scrollIntoView({ behavior: 'smooth' }), 100);
                  }}
                  className="text-white/60 bg-transparent border-none cursor-pointer text-left text-base font-medium py-3 border-b border-white/[0.06] font-body hover:text-accent transition-colors"
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
                >
                  {l}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
