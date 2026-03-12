import { motion } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.25 } },
};
const item = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: EASE } },
};
const watermark = {
  hidden:  { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.8, ease: EASE, delay: 0.6 } },
};

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-bg">
        <img className="hero-photo" src="/amanda.webp" alt="Amanda Shannon" />
      </div>

      <motion.div
        className="hero-watermark"
        aria-hidden="true"
        initial="hidden"
        animate="visible"
        variants={watermark}
      >
        Presence
      </motion.div>

      <div className="container">
        <motion.div
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={container}
        >
          <motion.div className="diamond-mark" aria-hidden="true" variants={item}>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <polygon points="24,2 46,24 24,46 2,24" fill="none" stroke="#C4A04B" strokeWidth="1.2"/>
              <polygon points="24,10 36,24 24,38 12,24" fill="none" stroke="#C4A04B" strokeWidth="0.8" opacity="0.55"/>
              <line x1="24" y1="2"  x2="24" y2="10" stroke="#C4A04B" strokeWidth="0.8" opacity="0.35"/>
              <line x1="46" y1="24" x2="36" y2="24" stroke="#C4A04B" strokeWidth="0.8" opacity="0.35"/>
              <line x1="24" y1="46" x2="24" y2="38" stroke="#C4A04B" strokeWidth="0.8" opacity="0.35"/>
              <line x1="2"  y1="24" x2="12" y2="24" stroke="#C4A04B" strokeWidth="0.8" opacity="0.35"/>
              <circle cx="24" cy="24" r="2" fill="#C4A04B" opacity="0.85"/>
            </svg>
          </motion.div>

          <motion.p className="hero-eyebrow" variants={item}>
            <span className="hero-eyebrow-line" />
            Diamond Presence™
          </motion.p>

          <motion.h1 className="hero-headline" variants={item}>
            The Future of<br />Human Performance<br />Is <em>Coherence</em>
          </motion.h1>

          <motion.p className="hero-subhead" variants={item}>
            Become Brilliant Under Pressure
          </motion.p>

          <motion.div className="hero-stats" variants={item}>
            <div className="hero-stat">
              <div className="hero-stat-num">400+</div>
              <div className="hero-stat-label">Leaders Transformed</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-num">12+</div>
              <div className="hero-stat-label">Years of Practice</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-num">F500</div>
              <div className="hero-stat-label">Clientele</div>
            </div>
          </motion.div>

          <motion.a href="#services" className="btn-primary" variants={item}>
            Discover Diamond Presence
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.a>
        </motion.div>
      </div>

      <div className="hero-scroll" aria-hidden="true">
        <div className="hero-scroll-line" />
        <span className="hero-scroll-label">Scroll</span>
      </div>
    </section>
  );
}
