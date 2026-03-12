import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const vFadeUp = {
  hidden:  { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0 },
};

const EASE = [0.16, 1, 0.3, 1];

export default function Reveal({ children, delay = 0, variants = vFadeUp, className = '', style, tag = 'div' }) {
  const ref  = useRef(null);
  const show = useInView(ref, { once: true, amount: 0.15 });
  const Tag  = motion[tag] ?? motion.div;
  return (
    <Tag
      ref={ref}
      className={className}
      style={style}
      initial="hidden"
      animate={show ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 0.8, ease: EASE, delay }}
    >
      {children}
    </Tag>
  );
}
