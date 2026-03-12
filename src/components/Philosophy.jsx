import Reveal from './shared/Reveal';

const PILLARS = [
  {
    letter: 'C',
    index: '01 / 04',
    name: 'Clarity',
    desc: 'Seeing and communicating with precision. The ability to cut through noise and act from truth.',
  },
  {
    letter: 'C',
    index: '02 / 04',
    name: 'Coherence',
    desc: 'Alignment of mind, emotion, and physiology. The state in which peak performance becomes sustainable.',
  },
  {
    letter: 'C',
    index: '03 / 04',
    name: 'Capacity',
    desc: 'The ability to remain stable under pressure. Building range — not just resilience.',
  },
  {
    letter: 'C',
    index: '04 / 04',
    name: 'Craft',
    desc: 'Refining strengths into mastery. The relentless, joyful pursuit of your highest expression.',
  },
];

export default function Philosophy() {
  return (
    <section id="philosophy">
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <Reveal tag="p" className="section-label">Framework</Reveal>
        <Reveal delay={0.1} tag="h2" className="section-heading">
          The Diamond Presence™<br />Framework
        </Reveal>
        <Reveal delay={0.2} tag="p" className="philosophy-subhead">
          The internal structure required to thrive under pressure.
        </Reveal>

        <div className="pillars-grid">
          {PILLARS.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1} className="pillar">
              <div className="pillar-letter" aria-hidden="true">{p.letter}</div>
              <div className="pillar-index">{p.index}</div>
              <h3 className="pillar-name">{p.name}</h3>
              <div className="pillar-rule" />
              <p className="pillar-desc">{p.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
