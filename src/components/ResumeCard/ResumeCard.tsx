import { useState } from 'react';
import './ResumeCard.css';

export interface SubRole {
  title: string;
  dateRange: string;
  duration?: string;
}

export interface ResumeCardProps {
  logoSrc?: string;
  /** Primary title — role name or company name */
  title: string;
  /** If provided, renders as "title | org" */
  org?: string;
  /** Date range string, e.g. "May 2025 – Present" */
  dateRange?: string;
  /** Duration string, e.g. "11 mos" */
  duration?: string;
  /** Expandable description text */
  description?: string;
  /** Whether the card starts expanded */
  defaultOpen?: boolean;
  /** Additional role entries (Xsauce-style multi-role) */
  subRoles?: SubRole[];
  /** Photo artifact thumbnail URLs (up to 3), shown when open */
  artifacts?: string[];
  /** Article link artifact — thumbnail + title, whole row is a link */
  articleLink?: { href: string; thumbnailSrc: string; title: string };
  /** Any extra content inside the expanded body */
  children?: React.ReactNode;
}

export default function ResumeCard({
  logoSrc,
  title,
  org,
  dateRange,
  duration,
  description,
  defaultOpen = false,
  subRoles,
  artifacts,
  articleLink,
  children,
}: ResumeCardProps) {
  const [open, setOpen] = useState(defaultOpen);
  const hasToggle = !!(description || children);
  const isMultiRole = !!subRoles?.length;

  return (
    <div className={`resume-card${open ? ' resume-card--open' : ''}`}>
      {/* Left column: logo, and timeline below it for multi-role cards */}
      <div className={`resume-card-left${isMultiRole ? ' resume-card-left--timeline' : ''}`}>
        <div className="resume-card-logo">
          {logoSrc ? (
            <img src={logoSrc} alt={org || title} />
          ) : (
            <div className="resume-card-logo-empty" />
          )}
        </div>
        {isMultiRole && (
          <div className="resume-card-timeline" aria-hidden="true">
            <div className="resume-card-timeline-dot" />
            <div className="resume-card-timeline-line" />
            <div className="resume-card-timeline-dot" />
            <div className="resume-card-timeline-line resume-card-timeline-line--flex" />
            <div className="resume-card-timeline-dot" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="resume-card-content">
        {/* Header row — always visible */}
        <div className="resume-card-header">
          <div className="resume-card-title-group">
            <p className="resume-card-title">
              {title}
              {org && <span className="resume-card-org"><span className="resume-card-pipe"> | </span>{org}</span>}
            </p>
            {(dateRange || duration) && (
              <p className="resume-card-meta">
                {dateRange}
                {dateRange && duration && <span className="resume-dot" />}
                {duration && <span className="resume-card-duration">{duration}</span>}
              </p>
            )}
          </div>

          {hasToggle && (
            <button
              className="resume-card-toggle"
              onClick={() => setOpen(v => !v)}
              aria-expanded={open}
              aria-label={open ? 'Collapse' : 'Expand'}
            >
              <svg
                className={`resume-card-icon${open ? ' resume-card-icon--open' : ''}`}
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                aria-hidden="true"
              >
                <line x1="6.5" y1="0.5" x2="6.5" y2="12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="0.5" y1="6.5" x2="12.5" y2="6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          )}
        </div>

        {/* Sub-roles — always visible */}
        {subRoles && subRoles.length > 0 && (
          <div className="resume-card-body">
            {subRoles.map((role, i) => (
              <div key={i} className="resume-card-subrole">
                <p className="resume-card-subrole-title">{role.title}</p>
                <p className="resume-card-meta">
                  {role.dateRange}
                  {role.dateRange && role.duration && <span className="resume-dot" />}
                  {role.duration}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Description — toggleable */}
        {open && description && (
          <p className="resume-card-description">{description}</p>
        )}

        {/* Artifact thumbnails — always visible */}
        {artifacts && artifacts.length > 0 && (
          <div className="resume-card-artifacts">
            {artifacts.map((src, i) => (
              <div key={i} className="resume-card-artifact">
                <img src={src} alt="" />
              </div>
            ))}
          </div>
        )}

        {/* Article link artifact — whole row is one link, always visible */}
        {articleLink && (
          <a
            className="resume-card-article-link"
            href={articleLink.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="resume-card-article-thumbnail">
              <img src={articleLink.thumbnailSrc} alt="" />
              <div className="resume-card-article-btn" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <g clipPath="url(#export-clip)">
                    <path d="M13 6.5V12.3333C13 12.5101 12.9368 12.6797 12.8243 12.8047C12.7117 12.9298 12.5591 13 12.4 13H1.6C1.44087 13 1.28826 12.9298 1.17574 12.8047C1.06321 12.6797 1 12.5101 1 12.3333V1.66667C1 1.48986 1.06321 1.32029 1.17574 1.19526C1.28826 1.07024 1.44087 1 1.6 1H6.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M11 1L13 3L11 5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 9.5V7C7 4.79086 8.79086 3 11 3H12.875" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="export-clip">
                      <rect width="14" height="14" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <p className="resume-card-article-title">{articleLink.title}</p>
          </a>
        )}

        {/* Children — toggleable */}
        {open && children}
      </div>
    </div>
  );
}
