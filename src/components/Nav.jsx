import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const isSubPage = pathname !== '/';

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav id="nav" className={scrolled || isSubPage ? 'scrolled' : ''} aria-label="Main navigation">
        <div className="container">
          <a href="/" className="nav-logo">
            <svg className="nav-logo-mark" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <polygon points="12,1 23,12 12,23 1,12" fill="none" stroke="currentColor" strokeWidth="1.2"/>
              <polygon points="12,6 18,12 12,18 6,12" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.5"/>
              <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
            </svg>
            <span className="nav-logo-text">New Human Potential</span>
          </a>

          <ul className="nav-links" role="list">
            <li><a href="/#services">Services</a></li>
            <li><a href="/#about">About</a></li>
            <li>
              <a href="/#cta" className="nav-cta-btn">
                <span>Contact</span>
              </a>
            </li>
          </ul>

          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(o => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={menuOpen ? 'open' : ''}
        role="navigation"
        aria-label="Mobile navigation"
      >
        <a href="/#services" onClick={closeMenu}>Services</a>
        <a href="/#about" onClick={closeMenu}>About</a>
        <a href="/#cta" onClick={closeMenu}>Contact</a>
      </div>
    </>
  );
}
