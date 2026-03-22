'use client';

import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { RESUME_DATA } from './data';

export default function About() {
  return (
    <section id="about" className="relative z-[1] py-24 px-6">
      <SectionHeader label="About" title="Who I Am" />

      <div className="max-w-[900px] mx-auto space-y-8">
        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card p-8"
        >
          <p className="font-body text-lg text-white/55 leading-relaxed">
            I&apos;m a Computer Science graduate student at{' '}
            <strong className="text-white/85">Stevens Institute of Technology</strong> with a
            passion for building software that bridges creativity and logic. My experience spans
            full-stack development, machine learning, and data analytics — and I love taking ideas
            from concept to deployment.
          </p>
        </motion.div>

        {/* Education cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {RESUME_DATA.education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.15 }}
              className="glass-card p-6"
            >
              <div className="text-[0.7rem] text-accent font-bold tracking-[0.15em] mb-3 font-body">
                {edu.year}
              </div>
              <h3 className="font-display text-lg text-gray-100 mb-1">{edu.school}</h3>
              <p className="text-white/45 text-sm font-body">{edu.degree}</p>
              <p className="text-accent/80 text-sm mt-2 font-semibold font-body">
                GPA: {edu.gpa}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
