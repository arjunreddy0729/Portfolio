'use client';

import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { RESUME_DATA } from './data';

export default function Experience() {
  return (
    <section id="experience" className="relative z-[1] py-24 px-6">
      <SectionHeader label="Experience" title="Where I've Worked" />

      <div className="max-w-[800px] mx-auto flex flex-col gap-6">
        {RESUME_DATA.experience.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.15 }}
            className="glass-card p-8 relative overflow-hidden"
          >
            {/* Accent left border */}
            <div className="absolute top-0 left-0 w-[3px] h-full bg-gradient-to-b from-accent to-orange-500" />

            <div className="flex justify-between flex-wrap gap-2 mb-4">
              <div className="flex items-center gap-3 flex-wrap">
                <div>
                  <h3 className="font-display text-xl text-gray-100">{exp.role}</h3>
                  <p className="text-accent text-base font-semibold font-body">{exp.company}</p>
                </div>
                {exp.current && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold font-body tracking-wide">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400" style={{ animation: 'pulse-dot 2s ease-in-out infinite' }} />
                    CURRENT
                  </span>
                )}
              </div>
              <span className="text-white/35 text-sm font-body">{exp.period}</span>
            </div>

            <div className="flex flex-col gap-3">
              {exp.highlights.map((h, j) => (
                <div key={j} className="flex gap-3 items-start">
                  <span className="text-accent text-[0.55rem] mt-2 shrink-0">◆</span>
                  <p className="text-white/50 text-[0.95rem] leading-relaxed font-body">{h}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
