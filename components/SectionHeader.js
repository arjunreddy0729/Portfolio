'use client';

import { motion } from 'framer-motion';

export default function SectionHeader({ label, title }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="mb-14 text-center"
    >
      <span className="text-xs font-bold tracking-[0.2em] text-accent uppercase font-body">
        {label}
      </span>
      <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-100 mt-2 tracking-tight">
        {title}
      </h2>
    </motion.div>
  );
}
