import type { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
}

/**
 * Lightweight scroll reveal wrapper applying subtle, high-performance entrance animations.
 */
export const Reveal: FC<RevealProps> = ({
  children,
  delay = 0,
  duration = 0.55,
  y = 18,
  className = '',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface RevealGroupProps {
  children: ReactNode;
  stagger?: number;
  className?: string;
}

/**
 * Container component that staggers children entrance animations smoothly.
 */
export const RevealGroup: FC<RevealGroupProps> = ({
  children,
  stagger = 0.08,
  className = '',
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-30px' }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * Child item for RevealGroup.
 */
export const RevealItem: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className = '',
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 16 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
