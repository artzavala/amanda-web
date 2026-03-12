import CustomCursor from '../components/CustomCursor';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function TermsPage() {
  return (
    <>
      <CustomCursor />
      <Nav />
      <main style={{ background: 'var(--cream)', minHeight: '100vh' }}>
        <section className="py-24">
          <div className="container" style={{ maxWidth: '720px' }}>
            <p className="section-label">Legal</p>
            <h1
              className="section-heading"
              style={{
                fontFamily: 'var(--font-head)',
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                marginBottom: '2rem',
              }}
            >
              Terms &amp; Conditions
            </h1>
            <p style={{ color: 'var(--mid-gray)', fontFamily: 'var(--font-body)', marginBottom: '0.5rem' }}>
              Last updated: March 12, 2026
            </p>

            <div className="legal-body" style={{ fontFamily: 'var(--font-body)', color: 'var(--mid-gray)', lineHeight: '1.8' }}>

              <h2>Agreement to Terms</h2>
              <p>
                By accessing or using the New Human Potential website, you agree to be bound by these Terms &amp;
                Conditions. If you disagree with any part of these terms, please do not use our site.
              </p>

              <h2>Use of Services</h2>
              <p>
                You may use our website for lawful purposes only. You agree not to use the site in any way
                that violates applicable laws, infringes on the rights of others, or disrupts the operation
                of the site. We reserve the right to refuse service to anyone for any reason at any time.
              </p>

              <h2>Intellectual Property</h2>
              <p>
                All content on this website — including text, graphics, logos, images, and audio clips — is the
                property of New Human Potential or its content suppliers and is protected by applicable
                intellectual property laws. You may not reproduce, distribute, or create derivative works
                without our express written permission.
              </p>

              <h2>Disclaimer of Warranties</h2>
              <p>
                This website is provided on an "as is" and "as available" basis without warranties of any
                kind, either express or implied. We do not warrant that the site will be uninterrupted,
                error-free, or free of viruses or other harmful components. Your use of the site is at
                your sole risk.
              </p>

              <h2>Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, New Human Potential shall not be liable for any
                indirect, incidental, special, consequential, or punitive damages arising from your use of,
                or inability to use, the website or services, even if we have been advised of the possibility
                of such damages.
              </p>

              <h2>Changes to Terms</h2>
              <p>
                We reserve the right to update these Terms &amp; Conditions at any time. Changes will be posted
                on this page with an updated date. Continued use of the site after changes constitutes
                acceptance of the new terms.
              </p>

              <h2>Contact</h2>
              <p>
                Questions about these terms? Reach us at{' '}
                <a href="mailto:hello@newhumanpotential.com" style={{ color: 'var(--gold)' }}>
                  hello@newhumanpotential.com
                </a>
                .
              </p>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
