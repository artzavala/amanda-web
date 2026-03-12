import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Reveal from './shared/Reveal';
import SectionLabel from './shared/SectionLabel';
import GoldRule from './shared/GoldRule';
import { GOLD, SLATE, SLATE_M, SLATE_L, EASE } from '../tokens';

const METRICS = [
  { label: 'HRV',             name: 'Heart Rate Variability' },
  { label: 'GSR',             name: 'Galvanic Skin Response' },
  { label: 'HRV Coherence',   name: 'Sympathetic / Parasympathetic Balance' },
  { label: 'RMSSD',           name: 'Vagal Tone Measurement' },
];

const ROI = [
  { value: '34%',  desc: 'reduction in stress-related absence' },
  { value: '2.4×', desc: 'improvement in team decision speed' },
  { value: '91%',  desc: 'of participants report sustained change at 90 days' },
];

function BentoCard({ children, className = '', style = {}, delay = 0 }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.12 });
  return (
    <motion.div ref={ref} className={`rounded-sm overflow-hidden relative ${className}`} style={style}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, ease: EASE, delay }}>
      {children}
    </motion.div>
  );
}

export default function DiamondCoherence() {
  return (
    <section className="py-28" style={{ background: SLATE_M }}>
      <div className="max-w-6xl mx-auto px-6 mb-14">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <Reveal><SectionLabel>Module Two</SectionLabel></Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-5xl md:text-6xl font-semibold leading-[1.05] text-white"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", letterSpacing: '-0.015em' }}>
                Diamond Coherence™
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2} className="md:max-w-xs">
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Where neuroscience meets performance. Measurable, trainable, and organizationally transformative.
            </p>
          </Reveal>
        </div>
        <GoldRule className="mt-8" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 auto-rows-auto">

          {/* Card 1: The Science */}
          <BentoCard delay={0} className="md:col-span-7 md:row-span-2 p-8 md:p-10 group"
            style={{ background: SLATE_L, border: `1px solid rgba(196,160,75,0.15)` }}>
            <div className="absolute top-0 left-0 w-16 h-16 opacity-20"
              style={{ background: `linear-gradient(135deg, ${GOLD} 0%, transparent 70%)` }} />
            <div className="relative z-10 h-full flex flex-col">
              <div className="mb-6">
                <SectionLabel>The Science</SectionLabel>
                <h3 className="text-4xl font-semibold text-white mb-4 leading-tight"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                  Coherence Carriers™
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  Coherence is not a metaphor. It's a measurable physiological state — documented
                  by the HeartMath Institute and replicated across 30 years of research.
                </p>
              </div>
              <div className="space-y-5 flex-1">
                {[
                  { icon: '◈', title: 'Cardiac Coherence', body: 'When heart rhythm patterns become smooth and ordered, the brain receives signals that unlock access to higher cognitive function, creativity, and emotional intelligence.' },
                  { icon: '◈', title: 'Nervous System Entrainment', body: 'The coherence state can be intentionally trained, transferred, and stabilized — making it a learnable performance asset rather than a lucky state.' },
                  { icon: '◈', title: 'Psychophysiological Synchrony', body: 'In coherent groups, individual nervous systems begin to entrain to one another — amplifying team intelligence and reducing reactive conflict.' },
                ].map(item => (
                  <div key={item.title} className="flex gap-4">
                    <span className="text-xl mt-0.5 flex-shrink-0" style={{ color: GOLD }}>{item.icon}</span>
                    <div>
                      <p className="text-sm font-semibold text-white mb-1">{item.title}</p>
                      <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-white/10">
                <span className="inline-flex items-center gap-2 text-[0.65rem] font-semibold tracking-[0.18em] uppercase transition-colors duration-200 group-hover:opacity-100 opacity-70"
                  style={{ color: GOLD }}>
                  Explore the Research
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </div>
          </BentoCard>

          {/* Card 2: Measurement */}
          <BentoCard delay={0.1} className="md:col-span-5 p-7"
            style={{ background: SLATE, border: `1px solid rgba(196,160,75,0.12)` }}>
            <SectionLabel>Measurement</SectionLabel>
            <h3 className="text-2xl font-semibold text-white mb-5"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
              Nervous System Metrics
            </h3>
            <div className="space-y-3">
              {METRICS.map(m => (
                <div key={m.label} className="flex items-center justify-between py-2.5 border-b border-white/[0.06] last:border-0">
                  <span className="text-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>{m.name}</span>
                  <span className="text-[0.58rem] font-bold tracking-widest uppercase px-2.5 py-1"
                    style={{ background: `rgba(196,160,75,0.12)`, color: GOLD }}>
                    {m.label}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-[0.75rem] mt-5 leading-relaxed" style={{ color: 'rgba(255,255,255,0.3)' }}>
              Real-time biometric feedback during sessions provides objective evidence of state change.
            </p>
          </BentoCard>

          {/* Card 3: ROI */}
          <BentoCard delay={0.2} className="md:col-span-5 p-7 relative overflow-hidden"
            style={{ background: `linear-gradient(135deg, ${SLATE_L}, ${SLATE})`, border: `1px solid rgba(196,160,75,0.18)` }}>
            <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full opacity-10"
              style={{ background: `radial-gradient(circle, ${GOLD}, transparent)` }} />
            <div className="relative z-10">
              <SectionLabel>Organizational ROI</SectionLabel>
              <h3 className="text-2xl font-semibold text-white mb-6"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                Organizational Stability
              </h3>
              <div className="space-y-5">
                {ROI.map((s, i) => (
                  <div key={i} className="flex items-baseline gap-4">
                    <span className="text-3xl font-bold flex-shrink-0"
                      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: GOLD }}>
                      {s.value}
                    </span>
                    <span className="text-xs leading-snug" style={{ color: 'rgba(255,255,255,0.45)' }}>{s.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}
