import Reveal from './shared/Reveal';

export default function MissionStrip() {
  return (
    <section id="mission">
      <div className="mission-watermark" aria-hidden="true">
        <svg width="500" height="500" viewBox="0 0 500 500" fill="none">
          <polygon points="250,10 490,250 250,490 10,250" fill="none" stroke="white" strokeWidth="2"/>
          <polygon points="250,80 420,250 250,420 80,250" fill="none" stroke="white" strokeWidth="1.5"/>
          <polygon points="250,150 350,250 250,350 150,250" fill="none" stroke="white" strokeWidth="1"/>
          <circle cx="250" cy="250" r="20" fill="none" stroke="white" strokeWidth="1"/>
        </svg>
      </div>

      <div className="container">
        <div className="mission-inner">
          <div className="mission-ornament">
            <div className="mission-ornament-line" />
            <span className="mission-ornament-diamond">◆</span>
            <div className="mission-ornament-line" />
          </div>
          <Reveal tag="p" className="mission-text">
            Pioneering <strong>Human Capacity Training</strong> for leaders who perform<br />
            brilliantly under pressure.
          </Reveal>
        </div>
      </div>
    </section>
  );
}
