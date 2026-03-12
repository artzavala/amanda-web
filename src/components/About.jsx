import Reveal from './shared/Reveal';

const CREDENTIALS = [
  'Sales Performance & Coaching',
  'HeartMath Certified Practitioner',
  'Organizational Trainer · 10–400+ Participants',
  'Founder, New Human Potential',
];

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <Reveal tag="p" className="section-label">About</Reveal>
            <Reveal delay={0.1} tag="h2" className="section-heading">
              Meet Amanda<br />Shannon
            </Reveal>

            <Reveal delay={0.15} tag="blockquote" className="about-pullquote">
              "Brilliance under pressure is not a gift.<br />It's an architecture."
            </Reveal>

            <Reveal delay={0.2} tag="p" className="about-bio">
              Amanda Shannon is a sales performance coach, human potential specialist,
              and founder of the Diamond Presence™ methodology a proprietary framework
              integrating neuroscience, somatic intelligence, and elite performance coaching.
            </Reveal>
            <Reveal delay={0.25} tag="p" className="about-bio">
              She works with CEOs, founders, and organizational leaders to build the internal
              architecture that makes brilliance under pressure not an exception but a baseline.
            </Reveal>

            <Reveal delay={0.3} className="about-credentials">
              {CREDENTIALS.map((c) => (
                <span key={c} className="credential">
                  <span className="credential-dot" />
                  {c}
                </span>
              ))}
            </Reveal>
          </div>

          <Reveal delay={0.2} className="about-photo-wrap">
            <div className="about-photo-frame">
              <img src="/amanda.webp" alt="Amanda Shannon Founder, New Human Potential" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
