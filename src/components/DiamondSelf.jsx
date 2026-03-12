import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from './shared/Reveal';
import SectionLabel from './shared/SectionLabel';
import { GOLD, GOLD_DARK, CREAM, CREAM_D, SLATE, SLATE_L, EASE } from '../tokens';

const vSlideRight = { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } };
const vSlideLeft  = { hidden: { opacity: 0, x: 40  }, visible: { opacity: 1, x: 0 } };

const STEPS = [
  { num: '01', title: 'Awareness',           desc: 'The foundation. Seeing yourself and your environment without the distortion of ego, fear, or assumption.' },
  { num: '02', title: 'Emotional Regulation',desc: 'The ability to feel fully without being ruled by feeling. Mastery of state — not suppression of it.' },
  { num: '03', title: 'Coherence',           desc: 'When your heart, mind, and nervous system move in the same direction. The body as ally, not obstacle.' },
  { num: '04', title: 'Integration',         desc: 'Weaving insight into habit. Transforming episodic excellence into a repeatable, trainable baseline.' },
  { num: '05', title: 'Embodiment',          desc: 'Identity-level change. You are no longer performing at your best — you have become your best.' },
];

export default function DiamondSelf() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-28 overflow-hidden" style={{ background: CREAM }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* Left: Content */}
          <Reveal variants={vSlideRight} className="order-2 md:order-1">
            <SectionLabel>Module One</SectionLabel>
            <h2 className="text-5xl md:text-6xl font-semibold leading-[1.05] mb-6"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: SLATE, letterSpacing: '-0.015em' }}>
              Diamond Self™
            </h2>
            <div className="w-8 h-px mb-8" style={{ background: GOLD }} />
            <p className="text-lg leading-relaxed mb-6"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: '#3a3a3a', fontStyle: 'italic', fontWeight: 300 }}>
              "Before you can lead others through pressure, you must have built an
              unshakeable internal operating system of your own."
            </p>
            <p className="text-sm leading-[1.85] mb-6" style={{ color: '#5a5a5a' }}>
              Diamond Self™ is the foundational module — a deep exploration of your internal landscape.
              Through somatic intelligence, neuroscience-backed tools, and reflective practice, you build
              the internal infrastructure that all outer performance depends on.
            </p>
            <p className="text-sm leading-[1.85]" style={{ color: '#5a5a5a' }}>
              This is not therapy. It is architecture. The five principles below map the sequence
              of transformation every high-performing leader must traverse.
            </p>
            <div className="mt-10 flex gap-3">
              <button className="text-[0.65rem] font-semibold tracking-[0.2em] uppercase px-6 py-3 transition-all duration-300"
                style={{ background: GOLD, color: 'white' }}
                onMouseEnter={e => e.currentTarget.style.background = GOLD_DARK}
                onMouseLeave={e => e.currentTarget.style.background = GOLD}>
                Book A Call
              </button>
            </div>
          </Reveal>

          {/* Right: Stepper */}
          <Reveal variants={vSlideLeft} delay={0.15} className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute left-[22px] top-8 bottom-8 w-px"
                style={{ background: `linear-gradient(to bottom, transparent, ${GOLD}40, transparent)` }} />
              <div className="space-y-3">
                {STEPS.map((step, i) => (
                  <motion.button key={step.num}
                    className="relative w-full text-left pl-14 pr-4 py-4 rounded-sm transition-all duration-300"
                    style={{
                      background: active === i ? SLATE : 'transparent',
                      border: `1px solid ${active === i ? SLATE_L : 'rgba(0,0,0,0.08)'}`,
                    }}
                    onClick={() => setActive(i)}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center text-[0.62rem] font-bold tracking-wider transition-all duration-300"
                      style={{
                        background: active === i ? GOLD : CREAM_D,
                        color: active === i ? 'white' : '#888',
                        border: `1px solid ${active === i ? GOLD : 'rgba(0,0,0,0.1)'}`,
                      }}>
                      {step.num}
                    </span>
                    <p className="text-base font-semibold mb-1 transition-colors duration-300"
                      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: active === i ? 'white' : SLATE }}>
                      {step.title}
                    </p>
                    <AnimatePresence>
                      {active === i && (
                        <motion.p className="text-[0.8rem] leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: EASE }}>
                          {step.desc}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.button>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex gap-1.5">
                  {STEPS.map((_, i) => (
                    <button key={i} onClick={() => setActive(i)} className="transition-all duration-300"
                      style={{ width: active === i ? '24px' : '6px', height: '6px', borderRadius: '3px', background: active === i ? GOLD : '#ccc' }} />
                  ))}
                </div>
                <span className="text-[0.65rem] tracking-widest uppercase" style={{ color: '#aaa' }}>
                  {active + 1} / {STEPS.length}
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
