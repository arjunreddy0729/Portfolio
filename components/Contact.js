'use client';

import { motion } from 'framer-motion';
import { RESUME_DATA } from './data';

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative z-[1] py-32 px-6 border-t border-white/[0.04]"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[700px] mx-auto text-center"
      >
        <span className="text-xs font-bold tracking-[0.2em] text-accent uppercase font-body">
          Contact
        </span>

        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-gray-100 mt-2 mb-4 tracking-tight leading-tight">
          Let&apos;s Build Something{' '}
          <span className="gradient-text">Together</span>
          <span className="text-accent">.</span>
        </h2>

        <p className="font-body text-base sm:text-lg text-white/45 leading-relaxed mb-10 max-w-[550px] mx-auto">
          I&apos;m always open to discussing new opportunities, collaborations,
          or just connecting over shared interests in tech.
        </p>

        {/* Email CTA */}
        <motion.a
          href={`mailto:${RESUME_DATA.email}`}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block px-8 py-4 rounded-xl text-lg font-bold font-body no-underline transition-all duration-400 border border-accent/40 text-accent hover:text-[#0a0a0e] hover:shadow-[0_8px_30px_rgba(245,158,11,0.3)]"
          style={{
            background: 'transparent',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'linear-gradient(135deg, #f59e0b, #f97316)';
            e.currentTarget.style.color = '#0a0a0e';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = '#f59e0b';
          }}
        >
          {RESUME_DATA.email}
        </motion.a>

        {/* Social links */}
        <div className="flex gap-6 justify-center mt-10">
          {[
            { href: RESUME_DATA.github, label: 'GitHub' },
            { href: RESUME_DATA.linkedin, label: 'LinkedIn' },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/35 no-underline text-sm font-medium font-body border-b border-transparent hover:text-accent hover:border-accent transition-all duration-300"
            >
              {s.label} ↗
            </a>
          ))}
        </div>

        {/* Location */}
        <p className="text-white/20 text-sm font-body mt-8">
          📍 {RESUME_DATA.location}
        </p>
      </motion.div>
    </section>
  );
}
