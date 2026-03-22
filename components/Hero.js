'use client';

import { motion } from 'framer-motion';
import { RESUME_DATA } from './data';

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* ── Background Image ── */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/hero-bg.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* ── Cinematic Dark Overlays ── */}
      <div className="absolute inset-0 z-[1] bg-[#0a0a0e]/75" />
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 40%, #0a0a0e 95%)',
        }}
      />
      <div
        className="absolute inset-0 z-[2] pointer-events-none mix-blend-soft-light"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 30% 20%, rgba(245,158,11,0.15) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(59,130,246,0.1) 0%, transparent 60%)',
        }}
      />
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 50%, rgba(10,10,14,0.6) 100%)',
        }}
      />

      {/* ── Content ── */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-[900px] text-center px-6 pt-32 pb-16"
      >
        <motion.div variants={fadeUp} className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-md">
            <span
              className="w-2 h-2 rounded-full bg-green-500"
              style={{ animation: 'pulse-dot 2s ease-in-out infinite' }}
            />
            <span className="text-xs font-bold tracking-[0.05em] text-accent font-body">
              OPEN TO OPPORTUNITIES
            </span>
          </div>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[1.05] tracking-tight mb-6 drop-shadow-lg"
        >
          Hi, I&apos;m{' '}
          <span className="gradient-text">Arjun</span>
          <span className="text-accent">.</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="font-body text-base sm:text-lg text-white/60 leading-relaxed max-w-[620px] mx-auto mb-8 drop-shadow-sm"
        >
          {RESUME_DATA.tagline}
        </motion.p>

        <motion.div variants={fadeUp} className="flex gap-2 justify-center flex-wrap mb-10">
          {['Full-Stack', 'AI / ML', 'Data Analytics', 'Cloud'].map((s) => (
            <span
              key={s}
              className="px-4 py-1.5 rounded-full border border-white/15 bg-white/[0.06] backdrop-blur-sm text-white/55 text-sm font-medium font-body"
            >
              {s}
            </span>
          ))}
        </motion.div>

        {/* CTA buttons with Resume download */}
        <motion.div variants={fadeUp} className="flex gap-4 justify-center flex-wrap mb-10">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-glow font-body text-sm cursor-pointer border-none"
          >
            View Projects
          </button>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-glow font-body text-sm inline-flex items-center gap-2"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Resume
          </a>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-outline-glow font-body text-sm cursor-pointer border-none"
          >
            Get in Touch
          </button>
        </motion.div>

        {/* Social icons */}
        <motion.div variants={fadeUp} className="flex gap-4 justify-center">
          {[
            {
              href: RESUME_DATA.github,
              label: 'GitHub',
              path: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z',
            },
            {
              href: RESUME_DATA.linkedin,
              label: 'LinkedIn',
              path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
            },
            {
              href: `mailto:${RESUME_DATA.email}`,
              label: 'Email',
              path: 'M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z',
            },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              title={s.label}
              className="w-11 h-11 rounded-full border border-white/15 bg-white/[0.06] backdrop-blur-sm flex items-center justify-center hover:bg-accent/20 hover:border-accent/40 transition-all duration-300"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="rgba(255,255,255,0.7)">
                <path d={s.path} />
              </svg>
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[0.65rem] text-white/40 tracking-[0.15em] font-body">SCROLL</span>
        <div
          className="w-px h-10"
          style={{
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)',
            animation: 'scroll-line 2s ease-in-out infinite',
          }}
        />
      </motion.div>
    </section>
  );
}
