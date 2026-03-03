import { useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';

const ScrollReveal = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  once = true,
}) => {
  const [isScrollingDown, setIsScrollingDown] = useState(true);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous) setIsScrollingDown(true);
    else setIsScrollingDown(false);
  });

  const directionMap = {
    up: { y: 50, opacity: 0 },
    down: { y: -50, opacity: 0 },
    left: { x: -50, opacity: 0 },
    right: { x: 50, opacity: 0 },
    'dynamic-y': isScrollingDown ? { y: -50, opacity: 0 } : { y: 50, opacity: 0 },
  };

  const hidden = directionMap[direction] ?? directionMap.up;

  return (
    <motion.div
      initial={hidden}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      transition={{ delay, duration, ease: 'easeOut' }}
      viewport={{ once: once, margin: '-10%' }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
