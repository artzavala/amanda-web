import CustomCursor from '../components/CustomCursor';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function TermsPage() {
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
            <h1>Terms &amp; Conditions</h1>
            <time dateTime="2026-03-12">Last updated: March 12, 2026</time>
          </div>
          <span className="legal-hero-watermark" aria-hidden="true">Terms</span>
        </div>

        {/* Body */}
        <div className="legal-layout container">

          {/* Content */}
          <div>

            <section className="legal-section" id="agreement">
              <span className="legal-section-num" aria-hidden="true">01</span>
              <h2>Agreement to Terms</h2>
              <p>
                By accessing or using the New Human Potential website, you agree to be bound by
                these Terms and Conditions. If you disagree with any part of these terms, please
                do not use our site.
              </p>
            </section>

            <section className="legal-section" id="use">
              <span className="legal-section-num" aria-hidden="true">02</span>
              <h2>Use of Services</h2>
              <p>
                You may use our website for lawful purposes only. You agree not to use the site
                in any way that violates applicable laws, infringes on the rights of others, or
                disrupts the operation of the site. We reserve the right to refuse service to
                anyone for any reason at any time.
              </p>
            </section>

            <section className="legal-section" id="ip">
              <span className="legal-section-num" aria-hidden="true">03</span>
              <h2>Intellectual Property</h2>
              <p>
                All content on this website (including text, graphics, logos, images, and audio
                clips) is the property of New Human Potential or its content suppliers and is
                protected by applicable intellectual property laws. You may not reproduce,
                distribute, or create derivative works without our express written permission.
              </p>
            </section>

            <section className="legal-section" id="disclaimer">
              <span className="legal-section-num" aria-hidden="true">04</span>
              <h2>Disclaimer of Warranties</h2>
              <p>
                This website is provided on an "as is" and "as available" basis without warranties
                of any kind, either express or implied. We do not warrant that the site will be
                uninterrupted, error-free, or free of viruses or other harmful components. Your
                use of the site is at your sole risk.
              </p>
            </section>

            <section className="legal-section" id="liability">
              <span className="legal-section-num" aria-hidden="true">05</span>
              <h2>Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, New Human Potential shall not be liable
                for any indirect, incidental, special, consequential, or punitive damages arising
                from your use of, or inability to use, the website or services, even if we have
                been advised of the possibility of such damages.
              </p>
            </section>

            <section className="legal-section" id="changes">
              <span className="legal-section-num" aria-hidden="true">06</span>
              <h2>Changes to Terms</h2>
              <p>
                We reserve the right to update these Terms and Conditions at any time. Changes
                will be posted on this page with an updated date. Continued use of the site after
                changes constitutes your acceptance of the revised terms.
              </p>
            </section>

            <section className="legal-section" id="contact">
              <span className="legal-section-num" aria-hidden="true">07</span>
              <h2>Contact</h2>
              <p>
                Questions about these terms? Reach us at{' '}
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
