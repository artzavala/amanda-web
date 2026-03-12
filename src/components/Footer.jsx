export default function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer-inner">
          <span className="footer-logo">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <polygon points="12,1 23,12 12,23 1,12" fill="none" stroke="currentColor" strokeWidth="1.2"/>
              <polygon points="12,6 18,12 12,18 6,12" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.5"/>
              <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
            </svg>
            New Human Potential
          </span>
          <nav className="footer-links" aria-label="Footer navigation">
            <a href="#services">Services</a>
            <a href="#philosophy">Philosophy</a>
            <a href="#about">About</a>
            <a href="#cta">Contact</a>
          </nav>
          <span className="footer-copy">© 2026 New Human Potential. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
