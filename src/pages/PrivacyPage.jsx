import CustomCursor from '../components/CustomCursor';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
            <p style={{ color: 'var(--mid-gray)', fontFamily: 'var(--font-body)', marginBottom: '0.5rem' }}>
              Last updated: March 12, 2026
            </p>

            <div className="legal-body" style={{ fontFamily: 'var(--font-body)', color: 'var(--mid-gray)', lineHeight: '1.8' }}>

              <h2>Introduction</h2>
              <p>
                New Human Potential ("we," "us," or "our") respects your privacy and is committed to protecting
                your personal data. This policy explains how we collect, use, and safeguard information when
                you visit our website or engage with our services.
              </p>

              <h2>Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul>
                <li><strong>Contact information</strong> — name and email address when you submit an inquiry.</li>
                <li><strong>Usage data</strong> — pages visited, time on site, and browser type, collected via analytics tools.</li>
                <li><strong>Cookies</strong> — small files placed on your device to improve your browsing experience (see Cookies section below).</li>
              </ul>

              <h2>How We Use Your Information</h2>
              <p>We use collected information to:</p>
              <ul>
                <li>Respond to your inquiries and provide requested services.</li>
                <li>Improve and personalize the website experience.</li>
                <li>Send occasional updates or offers, only with your consent.</li>
                <li>Comply with legal obligations.</li>
              </ul>

              <h2>Cookies</h2>
              <p>
                We use essential cookies necessary for the site to function and, where you have consented,
                analytics cookies to understand how visitors interact with our pages. You may disable cookies
                through your browser settings; doing so may affect some site functionality.
              </p>

              <h2>Third Parties</h2>
              <p>
                We do not sell your personal data. We may share information with trusted third-party service
                providers (such as analytics or email platforms) solely to operate our business, under
                confidentiality agreements that prohibit them from using your data for any other purpose.
              </p>

              <h2>Your Rights</h2>
              <p>
                Depending on your location, you may have the right to access, correct, or delete your personal
                data, or to opt out of certain processing. To exercise these rights, please contact us at the
                address below.
              </p>

              <h2>Contact</h2>
              <p>
                Questions about this policy? Reach us at{' '}
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
