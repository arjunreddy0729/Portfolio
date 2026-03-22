'use client';

import { motion } from 'framer-motion';

export default function Resume() {
  return (
    <section id="resume" className="relative z-[1] py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[700px] mx-auto text-center glass-card p-10"
      >
        <span className="text-xs font-bold tracking-[0.2em] text-accent uppercase font-body">
          Resume
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-100 mt-2 mb-4 tracking-tight">
          View My Full Resume
        </h2>
        <p className="font-body text-white/45 text-base mb-8 leading-relaxed">
          Download or view my complete resume with detailed experience, projects, skills, and certifications.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow font-body text-sm inline-flex items-center gap-2"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
            Open Resume
          </a>
          <a
            href="/resume.pdf"
            download="Kadari_Arjun_Reddy_Resume.pdf"
            className="btn-outline-glow font-body text-sm inline-flex items-center gap-2"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download PDF
          </a>
        </div>
      </motion.div>
    </section>
  );
}
