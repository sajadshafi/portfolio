import React from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

const slideUpVariant: Variants = {
  hidden: { opacity: 0, y: 50, transition: { duration: 0.6 } },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
};

const SlideSection = ({
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

export default SlideSection;
