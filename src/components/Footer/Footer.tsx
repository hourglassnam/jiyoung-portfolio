import './Footer.css';

/**
 * Site-wide footer.
 * Reused across all pages.
 * Background: brand/600. Full-width.
 */
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Message */}
        <div className="footer-message">
          <p className="footer-title">
            Thanks for wandering into my tiny data garden.
          </p>
          <p className="footer-subtitle">
            Built with way too many Figma frames, vibe‑coding, and too many screenshots.
          </p>
        </div>

        {/* Social + copyright */}
        <div className="footer-bottom">
          <div className="footer-social" aria-label="Social links">
            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon"
              aria-label="LinkedIn"
            >
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                <circle cx="20" cy="20" r="20" fill="rgba(255,255,255,0.2)" />
                <path
                  d="M14 16.5h3v10h-3v-10zm1.5-1.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm4 1.5h2.9v1.4h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6V26.5h-3v-4.5c0-1.07-.02-2.45-1.5-2.45-1.5 0-1.73 1.17-1.73 2.37V26.5H19.5v-10z"
                  fill="white"
                />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon"
              aria-label="GitHub"
            >
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                <circle cx="20" cy="20" r="20" fill="rgba(255,255,255,0.2)" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20 12a8 8 0 00-2.53 15.59c.4.07.55-.17.55-.38v-1.33c-2.23.48-2.7-1.07-2.7-1.07-.36-.92-.89-1.17-.89-1.17-.73-.5.05-.49.05-.49.8.06 1.23.82 1.23.82.71 1.22 1.87.87 2.33.66.07-.52.28-.87.5-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.68 7.68 0 014 0c1.53-1.03 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48v2.19c0 .21.14.46.55.38A8 8 0 0020 12z"
                  fill="white"
                />
              </svg>
            </a>

            {/* Behance */}
            <a
              href="https://behance.net"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon"
              aria-label="Behance"
            >
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                <circle cx="20" cy="20" r="20" fill="rgba(255,255,255,0.2)" />
                <path
                  d="M17.4 19.3c.6-.3 1-.9 1-1.7 0-1.6-1.2-2.6-2.9-2.6H11v10h4.8c1.8 0 3.2-1.1 3.2-2.8 0-1.2-.7-2.2-1.6-2.9zM12.8 16.5h2.1c.7 0 1.2.5 1.2 1.2 0 .7-.5 1.2-1.2 1.2h-2.1v-2.4zm2.4 6h-2.4V21h2.4c.8 0 1.3.5 1.3 1.3 0 .7-.5 1.2-1.3 1.2zm9.3-7.5h3.3v1h-3.3v-1zm3.8 4c-.3-1.9-1.7-3.1-3.5-3.1-2 0-3.5 1.5-3.5 3.7 0 2.1 1.4 3.6 3.6 3.6 1.5 0 2.7-.8 3.2-2h-1.7c-.2.5-.8.7-1.4.7-1 0-1.7-.6-1.8-1.7H28.4c0-.4 0-.8-.1-1.2zm-5-.7c.2-.8.8-1.3 1.7-1.3.8 0 1.5.5 1.6 1.3h-3.3z"
                  fill="white"
                />
              </svg>
            </a>
          </div>

          <p className="footer-copyright">© 2024 Ji Young Nam</p>
        </div>
      </div>
    </footer>
  );
}
