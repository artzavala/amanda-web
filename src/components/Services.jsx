import Reveal from './shared/Reveal';

const SERVICES = [
  {
    num: '01',
    title: 'Executive Intensives',
    desc: 'Setting the coherence bar. Bespoke 1-on-1 coaching for CEOs and Founders navigating high-stakes inflection points.',
  },
  {
    num: '02',
    title: 'Organizational Training',
    desc: 'Become Brilliant Under Pressure. Diamond Presence™ delivered for groups of 10 to 400+, calibrated to your culture.',
  },
  {
    num: '03',
    title: 'Sonic Coherence Lab',
    desc: 'Daily nervous system maintenance via proprietary sonic frequencies and bio-feedback tools. Performance begins in the body.',
  },
];

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <div className="services-header">
          <div>
            <Reveal tag="p" className="section-label">What We Offer</Reveal>
            <Reveal delay={0.1} tag="h2" className="section-heading">
              Built for Those Who<br />Operate at the Edge
            </Reveal>
          </div>
          <Reveal delay={0.2} className="services-header-right">
            <p className="services-header-desc">
              Three distinct engagement models each designed to create measurable shifts in coherence, capacity, and performance.
            </p>
          </Reveal>
        </div>

        <div className="cards-grid">
          {SERVICES.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.1} tag="article" className="card">
              <div className="card-number" aria-hidden="true">{s.num}</div>
              <h3 className="card-title">{s.title}</h3>
              <div className="card-rule" />
              <p className="card-desc">{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
