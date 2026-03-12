import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from './shared/Reveal';
import SectionLabel from './shared/SectionLabel';
import { GOLD, SLATE, CREAM, EASE } from '../tokens';

const SLIDES = [
  {
    industry: 'Real Estate',
    problem: {
      headline: 'The Burnout Cycle',
      points: [
        'Top producers carry every client\'s anxiety as their own.',
        'Emotional reactivity in negotiation costs deals often silently.',
        'Commission volatility creates chronic nervous system dysregulation.',
        'Agent turnover averages 87% within the first 5 years.',
      ],
    },
    solution: {
      headline: 'Coherence as Competitive Edge',
      points: [
        'Agents in Diamond Presence training close 23% more in 90 days.',
        'Coherent negotiators read rooms better and hold frames longer.',
        'Regulated state signals trustworthiness clients feel it.',
        'Retention increases when performance is sustainable, not explosive.',
      ],
    },
  },
  {
    industry: 'Corporate Leadership',
    problem: {
      headline: 'The Dysregulated Leader Problem',
      points: [
        'One dysregulated leader destabilizes an entire team\'s nervous system.',
        'Decision fatigue peaks exactly when high-stakes choices are required.',
        'Pressure environments reward reactivity and punish it simultaneously.',
        'Culture problems are often coherence problems in disguise.',
      ],
    },
    solution: {
      headline: 'Leading from Coherence',
      points: [
        'Coherent leaders have measurably faster decision-recovery times.',
        'Teams led by regulated executives show lower cortisol levels.',
        'Diamond Presence builds the capacity to be calm and effective simultaneously.',
        'A regulated leader is the most powerful organizational asset there is.',
      ],
    },
  },
  {
    industry: 'Your Industry',
    problem: {
      headline: 'Every Profession Has a Pressure Problem',
      points: [
        'Healthcare, law, finance, education pressure is universal.',
        'The tools most industries use for "resilience" address symptoms, not systems.',
        'Burnout is not a personal failure. It is a systemic design flaw.',
        'The question isn\'t whether your field has this problem it\'s when.',
      ],
    },
    solution: {
      headline: 'Diamond Presence Is Industry-Agnostic',
      points: [
        'The human nervous system doesn\'t change across professions.',
        'Coherence tools adapt to any high-stakes environment.',
        'Custom deployments available for healthcare, legal, and education.',
        'Reach out to explore a tailored engagement for your field.',
      ],
    },
  },
];

const slideVariants = {
  enter: (d) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit:  (d) => ({ x: d < 0 ? '100%' : '-100%', opacity: 0 }),
};

export default function IndustryCarousel() {
  const [[active, dir], setSlide] = useState([0, 0]);

  const paginate = useCallback((newDir) => {
    setSlide(prev => {
      const next = (prev[0] + newDir + SLIDES.length) % SLIDES.length;
      return [next, newDir];
    });
  }, []);

  const slide = SLIDES[active];

  return (
    <section className="py-28 overflow-hidden" style={{ background: CREAM }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <div>
            <Reveal><SectionLabel>Applications</SectionLabel></Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-5xl md:text-6xl font-semibold leading-[1.05]"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: SLATE, letterSpacing: '-0.015em' }}>
                Presence as a<br />Professional Advantage
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2} className="flex items-center gap-3">
            {SLIDES.map((s, i) => (
              <button key={i}
                onClick={() => setSlide([i, i > active ? 1 : -1])}
                className="text-[0.62rem] font-semibold tracking-[0.16em] uppercase px-4 py-2 transition-all duration-300 border"
                style={{
                  background: active === i ? SLATE : 'transparent',
                  color: active === i ? 'white' : SLATE,
                  borderColor: active === i ? SLATE : 'rgba(0,0,0,0.15)',
                }}>
                {s.industry}
              </button>
            ))}
          </Reveal>
        </div>

        <div className="relative overflow-hidden rounded-sm" style={{ minHeight: '420px' }}>
          <AnimatePresence initial={false} custom={dir} mode="wait">
            <motion.div key={active} custom={dir}
              variants={slideVariants} initial="enter" animate="center" exit="exit"
              transition={{ duration: 0.55, ease: EASE }}
              className="w-full"
              drag="x" dragConstraints={{ left: 0, right: 0 }} dragElastic={0.12}
              onDragEnd={(_, info) => { if (Math.abs(info.offset.x) > 60) paginate(info.offset.x < 0 ? 1 : -1); }}>
              <div className="grid md:grid-cols-2 gap-0 overflow-hidden rounded-sm"
                style={{ border: `1px solid rgba(0,0,0,0.08)` }}>
                {/* Problem */}
                <div className="p-8 md:p-10" style={{ background: SLATE }}>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-8 h-8 flex items-center justify-center text-xs font-bold"
                      style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)' }}>✕</span>
                    <span className="text-[0.62rem] font-semibold tracking-[0.2em] uppercase" style={{ color: 'rgba(255,255,255,0.4)' }}>The Problem</span>
                  </div>
                  <h3 className="text-3xl font-semibold text-white mb-6 leading-tight"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                    {slide.problem.headline}
                  </h3>
                  <ul className="space-y-3">
                    {slide.problem.points.map((pt, i) => (
                      <li key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                        <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'rgba(255,255,255,0.25)' }} />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Solution */}
                <div className="p-8 md:p-10" style={{ background: 'white' }}>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-8 h-8 flex items-center justify-center text-xs font-bold"
                      style={{ background: `rgba(196,160,75,0.15)`, color: GOLD }}>◆</span>
                    <span className="text-[0.62rem] font-semibold tracking-[0.2em] uppercase" style={{ color: GOLD }}>The Solution</span>
                  </div>
                  <h3 className="text-3xl font-semibold mb-6 leading-tight"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: SLATE }}>
                    {slide.solution.headline}
                  </h3>
                  <ul className="space-y-3">
                    {slide.solution.points.map((pt, i) => (
                      <li key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: '#5a5a5a' }}>
                        <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: GOLD }} />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-between mt-8">
          <div className="flex items-center gap-2">
            {SLIDES.map((_, i) => (
              <button key={i} onClick={() => setSlide([i, i > active ? 1 : -1])}
                className="transition-all duration-300"
                style={{ width: active === i ? '28px' : '8px', height: '8px', borderRadius: '4px', background: active === i ? GOLD : '#ccc' }} />
            ))}
          </div>
          <div className="flex gap-2">
            {[-1, 1].map((d, idx) => (
              <button key={idx} onClick={() => paginate(d)}
                className="w-10 h-10 flex items-center justify-center border transition-all duration-200 hover:opacity-80"
                style={{ border: `1px solid rgba(0,0,0,0.12)`, color: SLATE }}>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  {d === -1
                    ? <path d="M13 8H3M7 12l-4-4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    : <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  }
                </svg>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
