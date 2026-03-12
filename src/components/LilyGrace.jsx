import Reveal from './shared/Reveal';
import { GOLD, GOLD_DARK, SLATE } from '../tokens';

const RECIPIENTS = [
  {
    label: 'First Responders',
    desc:  'Police, fire, and EMS departments receive coherence training to address PTSD, burnout, and duty-related trauma.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9" aria-hidden="true">
        <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.2" />
        <path d="M14 22l-4 6h20l-4-6" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
        <path d="M20 10v8M16 14l4-4 4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="20" cy="22" r="2.5" fill="currentColor" opacity="0.6" />
      </svg>
    ),
  },
  {
    label: 'Schools & Youth',
    desc:  'Emotional regulation curricula deployed in under-resourced schools — equipping the next generation with a nervous system toolkit.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9" aria-hidden="true">
        <rect x="6" y="12" width="28" height="22" rx="1" stroke="currentColor" strokeWidth="1.2" />
        <path d="M14 12V8a6 6 0 0112 0v4" stroke="currentColor" strokeWidth="1.2" />
        <path d="M16 22h8M20 18v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'Healthcare Workers',
    desc:  'Nurses, physicians, and hospital staff experiencing compassion fatigue receive targeted coherence interventions.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9" aria-hidden="true">
        <path d="M20 6C13.4 6 8 11.4 8 18c0 8 12 18 12 18s12-10 12-18c0-6.6-5.4-12-12-12z" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="20" cy="18" r="4" stroke="currentColor" strokeWidth="1.2" />
        <path d="M16 18h8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function LilyGrace() {
  return (
    <section className="py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #F0E6D0 0%, #EDE0C4 50%, #F5EDD8 100%)' }}>
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 500 500" className="w-[600px] h-[600px]">
          <polygon points="250,20 480,250 250,480 20,250" fill="none" stroke={GOLD_DARK} strokeWidth="2" />
          <polygon points="250,80 420,250 250,420 80,250" fill="none" stroke={GOLD_DARK} strokeWidth="1.5" />
          <polygon points="250,150 350,250 250,350 150,250" fill="none" stroke={GOLD_DARK} strokeWidth="1" />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full"
            style={{ border: `1px solid rgba(168,136,58,0.3)`, background: 'rgba(196,160,75,0.08)' }}>
            <span className="text-[0.6rem] font-bold tracking-[0.3em] uppercase" style={{ color: GOLD_DARK }}>
              ◆ Lily Grace Foundation
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="text-5xl md:text-6xl font-semibold leading-[1.05] mb-6"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: SLATE, letterSpacing: '-0.015em' }}>
            One Investment,<br />
            <span style={{ color: GOLD_DARK, fontStyle: 'italic', fontWeight: 300 }}>Two Transformations.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto mb-6"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: '#5a4a30', fontWeight: 300, fontStyle: 'italic' }}>
            "Every corporate engagement with New Human Potential directly funds
            an equal deployment of Diamond Presence training to those who serve our communities
            — and rarely have access to tools like these."
          </p>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="text-sm leading-relaxed max-w-xl mx-auto mb-14" style={{ color: '#8a7050' }}>
            This is the Pay It Forward model. You invest in your own performance and your team's
            coherence — and in doing so, you fund a mirrored humanitarian deployment of the same
            tools to first responders, students, and healthcare workers in need.
          </p>
        </Reveal>

        {/* Flow diagram */}
        <Reveal delay={0.3}>
          <div className="inline-flex items-center gap-4 px-8 py-5 mb-16 rounded-sm"
            style={{ background: 'rgba(168,136,58,0.1)', border: `1px solid rgba(168,136,58,0.25)` }}>
            <div className="text-center">
              <p className="text-[0.6rem] font-bold tracking-[0.2em] uppercase mb-1" style={{ color: GOLD_DARK }}>Corporate Client</p>
              <p className="text-xs" style={{ color: '#7a6040' }}>Invests in performance</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-px" style={{ background: GOLD }} />
              <svg viewBox="0 0 20 12" className="w-8" fill="none">
                <path d="M1 6h16M13 2l4 4-4 4" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="text-center px-5 py-3 rounded-sm" style={{ background: GOLD }}>
              <p className="text-[0.58rem] font-bold tracking-[0.2em] uppercase text-white mb-1">Diamond Presence</p>
              <p className="text-xs text-white opacity-80">Routes the funds</p>
            </div>
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 20 12" className="w-8" fill="none">
                <path d="M1 6h16M13 2l4 4-4 4" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="w-8 h-px" style={{ background: GOLD }} />
            </div>
            <div className="text-center">
              <p className="text-[0.6rem] font-bold tracking-[0.2em] uppercase mb-1" style={{ color: GOLD_DARK }}>Humanitarian Partner</p>
              <p className="text-xs" style={{ color: '#7a6040' }}>Receives equal training</p>
            </div>
          </div>
        </Reveal>

        {/* Recipients */}
        <div className="grid md:grid-cols-3 gap-6">
          {RECIPIENTS.map((r, i) => (
            <Reveal key={r.label} delay={0.1 * i}>
              <div className="p-7 text-left group hover:shadow-lg transition-shadow duration-300"
                style={{ background: 'rgba(255,255,255,0.65)', border: `1px solid rgba(168,136,58,0.15)`, backdropFilter: 'blur(8px)' }}>
                <div className="w-14 h-14 flex items-center justify-center mb-5 transition-colors duration-300"
                  style={{ background: 'rgba(196,160,75,0.12)', color: GOLD_DARK }}>
                  {r.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: SLATE }}>
                  {r.label}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#7a6040' }}>{r.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTAs */}
        <Reveal delay={0.4} className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#cta" className="inline-flex items-center gap-2 text-[0.65rem] font-semibold tracking-[0.2em] uppercase px-8 py-3.5 transition-all duration-300"
            style={{ background: GOLD_DARK, color: 'white' }}
            onMouseEnter={e => e.currentTarget.style.background = SLATE}
            onMouseLeave={e => e.currentTarget.style.background = GOLD_DARK}>
            Support the Mission
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="#" className="text-[0.65rem] font-semibold tracking-[0.2em] uppercase px-8 py-3.5 border transition-all duration-300"
            style={{ borderColor: 'rgba(168,136,58,0.4)', color: GOLD_DARK }}
            onMouseEnter={e => { e.currentTarget.style.background = GOLD_DARK; e.currentTarget.style.color = 'white'; e.currentTarget.style.borderColor = GOLD_DARK; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = GOLD_DARK; e.currentTarget.style.borderColor = 'rgba(168,136,58,0.4)'; }}>
            Learn About Lily Grace
          </a>
        </Reveal>
      </div>
    </section>
  );
}
