'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type SectionInViewProps = {
  children: ReactNode;
};

export default function SectionInView({ children }: SectionInViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
