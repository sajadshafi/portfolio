'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  heading: string;
  // eslint-disable-next-line react/require-default-props
  icon?: React.ReactNode;
  // eslint-disable-next-line react/require-default-props
  classNames?: string;
}

const ResumeCard = ({ children, heading, icon, classNames }: Props) => {
  return (
    <motion.div
      className={`rounded-[10px] font-secondary dark:text-colorLightn text-colorBodyWhite bg-backgroundColor1 dark:bg-backgroundColor2 shadow-shadowWhite3 dark:shadow-shadow1 my-5 flex ${classNames} flex-col gap-5 pb-8`}
      initial={{ scale: 0.4, opacity: 0, x: 30 }}
      animate={{
        scale: 1,
        opacity: 1,
        x: 0,
        transition: { duration: 0.3 },
      }}>
      <div className="flex items-center align-start">
        {icon && (
          <div className="p-4 flex">
            <span className="w-[50px] h-[50px] text-2xl text-colorWhite">
              {icon}
            </span>
            <span>{heading}</span>
          </div>
        )}
      </div>
      <div>{children}</div>
    </motion.div>
  );
};

export default ResumeCard;
