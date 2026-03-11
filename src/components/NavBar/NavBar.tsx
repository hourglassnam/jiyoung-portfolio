import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import NavLink from '../NavLink/NavLink';
import { logoUrl } from '@/assets/images';
import './NavBar.css';

const NAV_LINKS = [
  { label: 'Work', to: '/' },
  { label: 'Playground', to: '/playground' },
  { label: 'Resume', to: '/resume' },
  { label: 'About', to: '/about' },
];

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const closeMenu = () => setIsMenuOpen(false);

  /**
   * "Work" links to "/" but should be active on any /work/* route too.
   * All other links use exact match.
   */
  function isLinkActive(to: string): boolean {
    if (to === '/') {
      return pathname === '/' || pathname.startsWith('/work/');
    }
    return pathname === to;
  }

  return (
    <>
      <header className="navbar">
        <div className="navbar-inner">
          {/* Logo — always visible */}
          <Link to="/" className="navbar-logo" aria-label="Go to home">
            <img src={logoUrl} alt="Ji Young Nam" width={24} height={24} />
          </Link>

          {/* Desktop / Tablet: all links in one row */}
          <nav className="navbar-links" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                label={link.label}
                isActive={isLinkActive(link.to)}
                variant="desktop"
              />
            ))}
          </nav>

          {/* Mobile: hamburger button */}
          <button
            className="navbar-hamburger"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
          >
            <span className="navbar-hamburger-line" />
            <span className="navbar-hamburger-line" />
            <span className="navbar-hamburger-line" />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`navbar-overlay${isMenuOpen ? ' navbar-overlay--visible' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Mobile drawer */}
      <div
        className={`navbar-drawer${isMenuOpen ? ' navbar-drawer--open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <button className="navbar-drawer-close" onClick={closeMenu} aria-label="Close menu">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <nav aria-label="Mobile navigation">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              label={link.label}
              isActive={isLinkActive(link.to)}
              variant="mobile"
              onClick={closeMenu}
            />
          ))}
        </nav>
      </div>
    </>
  );
}
