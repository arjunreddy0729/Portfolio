'use client';

import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { RESUME_DATA } from './data';

export default function Skills() {
  return (
    <section id="skills" className="relative z-[1] py-24 px-6">
      <SectionHeader label="Skills" title="My Toolkit" />

      {/* Skills grid */}
      <div className="max-w-[900px] mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(RESUME_DATA.skills).map(([category, items], i) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
            className="glass-card p-6"
          >
            <h3 className="text-[0.7rem] font-bold tracking-[0.15em] text-accent uppercase mb-4 font-body">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-lg text-sm font-medium font-body text-white/55 bg-white/[0.04] border border-white/[0.08] hover:text-white/80 hover:border-white/15 transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certifications */}
      <div className="max-w-[900px] mx-auto mt-16">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-bold tracking-[0.2em] text-accent uppercase mb-8 text-center font-body"
        >
          Certifications
        </motion.h3>
        <div className="flex flex-wrap gap-4 justify-center">
          {RESUME_DATA.certifications.map((c, i) => (
            <motion.a
              key={i}
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card px-5 py-4 flex items-center gap-3 no-underline group cursor-pointer"
            >
              <span className="text-xl">🏅</span>
              <div>
                <p className="text-gray-100 text-sm font-semibold font-body group-hover:text-accent transition-colors duration-300">
                  {c.name}
                </p>
                <p className="text-white/35 text-xs font-body">{c.issuer}</p>
              </div>
              <span className="text-white/20 text-xs ml-auto group-hover:text-accent transition-colors duration-300">
                ↗
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
