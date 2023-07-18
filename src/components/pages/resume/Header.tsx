'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.div
      className="rounded-[10px] font-secondary dark:text-colorLightn text-colorBodyWhite bg-backgroundColor1 dark:bg-backgroundColor2 shadow-shadowWhite3 dark:shadow-shadow1 my-5 flex items-center justify-center flex-col md:flex-row gap-5 py-8"
      initial={{ scale: 0.4, opacity: 0, x: 30 }}
      animate={{
        scale: 1,
        opacity: 1,
        x: 0,
        transition: { duration: 0.3 },
      }}>
      <Image
        className="rounded-full"
        src="/images/img-2.jpg"
        alt="Sajad shafi - Software engineer"
        width={150}
        height={150}
      />
      <div className="lg:ml-3 flex flex-col items-center md:items-start">
        <h3 className="text-colorPrimary font-bold text-4xl font-primary">
          Sajad Shafi
        </h3>
        <p className="font-primary font-semibold mt-2">SOFTWARE ENGINEER</p>
      </div>
    </motion.div>
  );
};

export default Header;
