'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HeadingProps } from '@/interfaces/types';

const Heading = ({ title, subTitle, className }: HeadingProps) => {
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0.3 }}
      whileInView={{ scale: 1, opacity: 1, transition: { duration: 0.5 } }}
      className={`flex flex-col items-center ${className}`}>
      <h5 className="uppercase font-medium mb-3 text-colorSubtitle">
        {subTitle}
      </h5>
      <h2 className="text-4xl font-bold font-primary capitalize">{title}</h2>
    </motion.div>
  );
};

export default Heading;
