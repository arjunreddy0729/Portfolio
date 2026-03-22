'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { RESUME_DATA } from './data';

export default function Projects() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section id="projects" className="relative z-[1] py-24 px-6">
      <SectionHeader label="Projects" title="What I've Built" />

      <div className="max-w-[1100px] mx-auto grid sm:grid-cols-2 gap-6">
        {RESUME_DATA.projects.map((p, i) => (
          <motion.a
            key={i}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
            onMouseEnter={() => setHoveredIdx(i)}
            onMouseLeave={() => setHoveredIdx(null)}
            className="block p-8 rounded-2xl no-underline relative overflow-hidden group"
            style={{
              background:
                hoveredIdx === i
                  ? 'rgba(255,255,255,0.05)'
                  : 'rgba(255,255,255,0.025)',
              border:
                hoveredIdx === i
                  ? '1px solid rgba(245,158,11,0.25)'
                  : '1px solid rgba(255,255,255,0.06)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
              boxShadow:
                hoveredIdx === i
                  ? '0 20px 60px rgba(0,0,0,0.3), 0 0 40px rgba(245,158,11,0.06)'
                  : 'none',
            }}
          >
            {/* Hover glow — from guide's "subtle hover glow" */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background:
                  'radial-gradient(300px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(245,158,11,0.06), transparent 60%)',
              }}
            />

            {/* Year badge */}
            <div className="absolute top-6 right-6 text-[0.7rem] text-white/25 font-semibold font-body">
              {p.year}
            </div>

            <span className="text-3xl block mb-4">{p.emoji}</span>

            <h3 className="font-display text-xl text-gray-100 mb-2">{p.title}</h3>

            <p className="text-white/45 text-sm leading-relaxed mb-4 font-body">
              {p.description}
            </p>

            {/* Tech tags — glassmorphism style from guide */}
            <div className="flex flex-wrap gap-2 mb-5">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-md text-[0.75rem] font-semibold font-body"
                  style={{
                    background: 'rgba(245,158,11,0.08)',
                    border: '1px solid rgba(245,158,11,0.15)',
                    color: '#f59e0b',
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* View link */}
            <div
              className="flex items-center gap-1.5 text-xs font-semibold font-body transition-colors duration-300"
              style={{
                color: hoveredIdx === i ? '#f59e0b' : 'rgba(255,255,255,0.3)',
              }}
            >
              View on GitHub
              <span
                className="transition-transform duration-300"
                style={{
                  transform: hoveredIdx === i ? 'translateX(4px)' : 'translateX(0)',
                }}
              >
                →
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
