import React from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

const slideUpVariant: Variants = {
  hidden: { opacity: 0, y: 50, transition: { duration: 0.6 } },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
};

const slideDownVariant: Variants = {
  hidden: { opacity: 0, y: -50, transition: { duration: 0.6 } },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
};

const slideRightVariant: Variants = {
  hidden: { opacity: 0, x: -50, transition: { duration: 0.6 } },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2 } },
};

const slideLeftVariant: Variants = {
  hidden: { opacity: 0, x: 50, transition: { duration: 0.6 } },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2 } },
};

const SlideUp = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return (
    <AnimatePresence>
      <motion.div
        initial="hidden"
        whileInView="visible"
        className={className}
        variants={slideUpVariant}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
const SlideDown = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return (
    <AnimatePresence>
      <motion.div
        initial="hidden"
        whileInView="visible"
        className={className}
        variants={slideDownVariant}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
const SlideRight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return (
    <AnimatePresence>
      <motion.div
        initial="hidden"
        whileInView="visible"
        className={className}
        variants={slideRightVariant}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
const SlideLeft = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return (
    <AnimatePresence>
      <motion.div
        initial="hidden"
        whileInView="visible"
        className={className}
        variants={slideLeftVariant}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

const slideAnimations = {
  SlideUp,
  SlideDown,
  SlideRight,
  SlideLeft,
};

export default slideAnimations;
