import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Reveal from './shared/Reveal';
import SectionLabel from './shared/SectionLabel';
import { GOLD, SLATE, SLATE_M, SLATE_L, EASE } from '../tokens';

const vFadeUp  = { hidden: { opacity: 0, y: 36 }, visible: { opacity: 1, y: 0 } };
const vFadeIn  = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
const vStagger = { hidden: {}, visible: { transition: { staggerChildren: 0.11, delayChildren: 0.08 } } };

function DiamondPresenceSVG() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });

  const lines = [
    [400, 100, 255, 300],
    [400, 100, 545, 300],
    [650, 300, 400, 490],
    [150, 300, 400, 490],
  ];
  const arrows = [
    { x1: 400, y1: 97,  x2: 400, y2: 48,  delay: 0.8  },
    { x1: 654, y1: 300, x2: 718, y2: 300, delay: 0.85 },
    { x1: 400, y1: 493, x2: 400, y2: 548, delay: 0.9  },
    { x1: 146, y1: 300, x2: 82,  y2: 300, delay: 0.95 },
  ];

  return (
    <div ref={ref} className="w-full max-w-2xl mx-auto px-4">
      <svg viewBox="-55 0 910 610" className="w-full h-auto"
        aria-label="Diamond Presence Framework: four pillars — Clarity, Coherence, Pressure, Facets">
        <defs>
          <marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M0 0L10 5L0 10z" fill={GOLD} opacity="0.9" />
          </marker>
          <radialGradient id="dGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={SLATE_L} stopOpacity="1" />
            <stop offset="100%" stopColor={SLATE} stopOpacity="1" />
          </radialGradient>
          <radialGradient id="innerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={SLATE_M} />
            <stop offset="100%" stopColor={SLATE} />
          </radialGradient>
          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        <motion.ellipse cx="400" cy="300" rx="260" ry="210"
          fill="none" stroke={GOLD} strokeWidth="40" opacity="0"
          filter="url(#softGlow)"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 0.04 } : {}}
          transition={{ duration: 1.5, delay: 0.3 }}
        />
        <motion.polygon points="400,100 650,300 400,490 150,300"
          fill="url(#dGlow)" stroke={GOLD} strokeWidth="1.5"
          initial={{ opacity: 0, scale: 0.82 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.0, ease: EASE, delay: 0.2 }}
          style={{ transformOrigin: '400px 300px' }}
        />
        {lines.map(([x1, y1, x2, y2], i) => (
          <motion.line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
            stroke={GOLD} strokeWidth="0.6" opacity="0.18"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 0.18 } : {}}
            transition={{ delay: 0.65 + i * 0.04 }}
          />
        ))}
        <motion.polygon points="400,178 545,300 400,422 255,300"
          fill="url(#innerGlow)" stroke={GOLD} strokeWidth="1" opacity="0.95"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={inView ? { opacity: 0.95, scale: 1 } : {}}
          transition={{ duration: 0.9, ease: EASE, delay: 0.45 }}
          style={{ transformOrigin: '400px 300px' }}
        />
        {arrows.map((a, i) => (
          <motion.line key={i} x1={a.x1} y1={a.y1} x2={a.x2} y2={a.y2}
            stroke={GOLD} strokeWidth="1.5" markerEnd="url(#arr)"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: a.delay }}
          />
        ))}
        <motion.g initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.6 }}>
          <text x="400" y="289" textAnchor="middle" fill="white" fontSize="20" fontWeight="600"
            fontFamily="'Cormorant Garamond', Georgia, serif" letterSpacing="0.5">Diamond</text>
          <text x="400" y="312" textAnchor="middle" fill="white" fontSize="20" fontWeight="600"
            fontFamily="'Cormorant Garamond', Georgia, serif" letterSpacing="0.5">Presence</text>
          <text x="400" y="332" textAnchor="middle" fill={GOLD} fontSize="7.5" fontWeight="500"
            fontFamily="'DM Sans', system-ui, sans-serif" letterSpacing="3">◆ FRAMEWORK ◆</text>
        </motion.g>

        {[
          { x: 400, y: 24, sub: 39, label: 'Clarity', sublabel: 'TRANSPARENT COMMUNICATION', anchor: 'middle', dx: 0, dy: 0 },
          { x: 736, y: 294, sub: 309, label: 'Coherence', sublabel: 'STATE & ACTION', anchor: 'start', dx: 0, dy: 0 },
          { x: 400, y: 572, sub: 587, label: 'Pressure', sublabel: 'RESILIENCE UNDER STRESS', anchor: 'middle', dx: 0, dy: 0 },
          { x: 64, y: 294, sub: 309, label: 'Facets', sublabel: 'REFINING SKILLS', anchor: 'end', dx: 0, dy: 0 },
        ].map((l, i) => (
          <motion.g key={l.label}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1.0 + i * 0.05 }}
          >
            <text x={l.x} y={l.y} textAnchor={l.anchor} fill="white" fontSize="18" fontWeight="600"
              fontFamily="'Cormorant Garamond', Georgia, serif">{l.label}</text>
            <text x={l.x} y={l.sub} textAnchor={l.anchor} fill={GOLD} fontSize="7.5" fontWeight="500"
              fontFamily="'DM Sans', system-ui, sans-serif" letterSpacing="1.8" opacity="0.75">{l.sublabel}</text>
          </motion.g>
        ))}
      </svg>
    </div>
  );
}

export default function NorthStar() {
  return (
    <section className="py-28 relative overflow-hidden" style={{ background: SLATE }}>
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `linear-gradient(${GOLD} 1px, transparent 1px), linear-gradient(90deg, ${GOLD} 1px, transparent 1px)`,
        backgroundSize: '72px 72px',
      }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <Reveal delay={0}><SectionLabel>The North Star Model</SectionLabel></Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-5xl md:text-6xl font-semibold leading-[1.05] text-white mb-5"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", letterSpacing: '-0.015em' }}>
              Diamond Presence™
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-base leading-relaxed max-w-xl mx-auto"
              style={{ color: 'rgba(255,255,255,0.5)', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
              Four interconnected pillars that form the architecture of sustained high performance.
              Each dimension reinforces the others — creating a self-amplifying system of excellence.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15} variants={vFadeIn}>
          <DiamondPresenceSVG />
        </Reveal>

        <Reveal delay={0.2} variants={vStagger}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-12">
            {[
              { label: 'Clarity',   desc: 'Precise, honest communication that cuts through complexity.' },
              { label: 'Coherence', desc: 'Internal alignment between thought, emotion, and action.' },
              { label: 'Pressure',  desc: 'Converting stress into signal — not noise.' },
              { label: 'Facets',    desc: 'The ongoing sharpening of skills into mastery.' },
            ].map((p) => (
              <motion.div key={p.label} variants={vFadeUp}
                className="border border-white/10 p-4 rounded-sm hover:border-[#C4A04B]/40 transition-colors duration-300"
                style={{ background: 'rgba(255,255,255,0.03)' }}>
                <p className="text-[0.62rem] font-semibold tracking-[0.2em] uppercase mb-2" style={{ color: GOLD }}>{p.label}</p>
                <p className="text-[0.8rem] leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
