import { useState } from 'react';
import Reveal from './shared/Reveal';

const MAILCHIMP_URL =
  'https://gmail.us22.list-manage.com/subscribe/post-json?u=2ca104a85b835c3729759132f&id=05ee0fa58b&f_id=00abc2e1f0';

export default function CTA() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');

    const callbackName = `mc_callback_${Date.now()}`;
    const url = `${MAILCHIMP_URL}&EMAIL=${encodeURIComponent(email)}&c=${callbackName}`;

    window[callbackName] = (data) => {
      if (data.result === 'success') {
        setStatus('success');
      } else {
        setStatus('error');
        setMessage(data.msg?.replace(/<[^>]+>/g, '') ?? 'Something went wrong. Please try again.');
      }
      delete window[callbackName];
      document.body.removeChild(script);
    };

    const script = document.createElement('script');
    script.src = url;
    script.onerror = () => {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
      delete window[callbackName];
      document.body.removeChild(script);
    };
    document.body.appendChild(script);
  };

  return (
    <section id="cta">
      <div className="cta-watermark" aria-hidden="true">
        <svg width="600" height="600" viewBox="0 0 600 600" fill="none">
          <polygon points="300,20 580,300 300,580 20,300" fill="none" stroke="white" strokeWidth="2"/>
          <polygon points="300,100 500,300 300,500 100,300" fill="none" stroke="white" strokeWidth="1.5"/>
          <polygon points="300,180 420,300 300,420 180,300" fill="none" stroke="white" strokeWidth="1"/>
          <circle cx="300" cy="300" r="30" fill="none" stroke="white" strokeWidth="1"/>
          <circle cx="300" cy="300" r="6" fill="white" opacity="0.5"/>
        </svg>
      </div>

      <div className="container">
        <div className="cta-inner">
          <Reveal tag="p" className="cta-eyebrow">Limited Spots 3.30.26</Reveal>
          <Reveal delay={0.1} tag="h2" className="cta-heading">
            Receive Your Free<br />Stress Screening
          </Reveal>
          <Reveal delay={0.15} tag="p" className="cta-subhead">
            Register for Diamond Presence™ Training on March 30, 2026 and we'll
            include a complimentary stress screening.
          </Reveal>
          <Reveal delay={0.2}>
            <div className="cta-value">A $350 Value Complimentary With Registration</div>
          </Reveal>

          <Reveal delay={0.25}>
            {status === 'success' ? (
              <p className="form-success">
                Thank you — we'll be in touch with your next steps.
              </p>
            ) : (
              <form className="email-form" onSubmit={handleSubmit}>
                <input
                  className="email-input"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  autoComplete="email"
                  aria-label="Email address"
                />
                {/* Mailchimp honeypot — must stay hidden */}
                <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                  <input type="text" name="b_2ca104a85b835c3729759132f_05ee0fa58b" tabIndex="-1" defaultValue="" />
                </div>
                <button className="email-btn" type="submit" disabled={status === 'loading'}>
                  {status === 'loading' ? 'Submitting…' : 'Claim Your Spot'}
                </button>
              </form>
            )}
            {status === 'error' && (
              <p className="form-note" style={{ color: '#c0392b', marginTop: '0.75rem' }}>{message}</p>
            )}
          </Reveal>

          {status === 'idle' && (
            <Reveal delay={0.3} tag="p" className="form-note">
              No spam. Unsubscribe at any time.
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
