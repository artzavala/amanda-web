import CustomCursor from '../components/CustomCursor';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const sections = [
  { id: 'introduction',  label: 'Introduction' },
  { id: 'collection',    label: 'Information We Collect' },
  { id: 'usage',         label: 'How We Use It' },
  { id: 'cookies',       label: 'Cookies' },
  { id: 'third-parties', label: 'Third Parties' },
  { id: 'your-rights',   label: 'Your Rights' },
  { id: 'contact',       label: 'Contact' },
];

export default function PrivacyPage() {
  return (
    <>
      <CustomCursor />
      <Nav />

      <main style={{ background: 'var(--cream)' }}>

        {/* Hero Header */}
        <div className="legal-hero">
          <div className="container">
            <a href="/" className="legal-back">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to Home
            </a>
            <p className="section-label">Legal</p>
            <h1>Privacy Policy</h1>
            <time dateTime="2026-03-12">Last updated: March 12, 2026</time>
          </div>
          <span className="legal-hero-watermark" aria-hidden="true">Privacy</span>
        </div>

        {/* Body */}
        <div className="legal-layout container">

          {/* Sticky TOC */}
          <aside className="legal-toc" aria-label="Table of contents">
            <p className="legal-toc-heading">Contents</p>
            <ol>
              {sections.map(s => (
                <li key={s.id}>
                  <a href={`#${s.id}`}>{s.label}</a>
                </li>
              ))}
            </ol>
          </aside>

          {/* Content */}
          <div>

            <section className="legal-section" id="introduction">
              <span className="legal-section-num" aria-hidden="true">01</span>
              <h2>Introduction</h2>
              <p>
                New Human Potential ("we," "us," or "our") respects your privacy and is committed to
                protecting your personal data. This policy explains how we collect, use, and safeguard
                information when you visit our website or engage with our services.
              </p>
            </section>

            <section className="legal-section" id="collection">
              <span className="legal-section-num" aria-hidden="true">02</span>
              <h2>Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul>
                <li>
                  <span><strong>Contact information:</strong> your name and email address when you
                  submit an inquiry through our site.</span>
                </li>
                <li>
                  <span><strong>Usage data:</strong> pages visited, time on site, and browser type,
                  collected through standard analytics tools.</span>
                </li>
                <li>
                  <span><strong>Cookies:</strong> small files placed on your device to improve your
                  browsing experience (see the Cookies section below for details).</span>
                </li>
              </ul>
            </section>

            <section className="legal-section" id="usage">
              <span className="legal-section-num" aria-hidden="true">03</span>
              <h2>How We Use Your Information</h2>
              <p>We use collected information to:</p>
              <ul>
                <li><span>Respond to your inquiries and provide requested services.</span></li>
                <li><span>Improve and personalize the website experience.</span></li>
                <li><span>Send occasional updates or offers, only with your consent.</span></li>
                <li><span>Comply with applicable legal obligations.</span></li>
              </ul>
            </section>

            <section className="legal-section" id="cookies">
              <span className="legal-section-num" aria-hidden="true">04</span>
              <h2>Cookies</h2>
              <p>
                We use essential cookies necessary for the site to function and, where you have
                consented, analytics cookies to understand how visitors interact with our pages.
                You may disable cookies through your browser settings; doing so may affect some
                site functionality.
              </p>
            </section>

            <section className="legal-section" id="third-parties">
              <span className="legal-section-num" aria-hidden="true">05</span>
              <h2>Third Parties</h2>
              <p>
                We do not sell your personal data. We may share information with trusted third-party
                service providers (such as analytics or email platforms) solely to operate our
                business, under confidentiality agreements that prohibit them from using your data
                for any other purpose.
              </p>
            </section>

            <section className="legal-section" id="your-rights">
              <span className="legal-section-num" aria-hidden="true">06</span>
              <h2>Your Rights</h2>
              <p>
                Depending on your location, you may have the right to access, correct, or delete
                your personal data, or to opt out of certain processing. To exercise these rights,
                please contact us using the details below.
              </p>
            </section>

            <section className="legal-section" id="contact">
              <span className="legal-section-num" aria-hidden="true">07</span>
              <h2>Contact</h2>
              <p>
                Questions about this policy? Reach us at{' '}
                <a
                  className="legal-contact-link"
                  href="mailto:hello@newhumanpotential.com"
                >
                  hello@newhumanpotential.com
                </a>
                .
              </p>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
