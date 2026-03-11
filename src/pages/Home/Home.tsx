import { useState, useEffect, useRef } from 'react';
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import Footer from '@/components/Footer/Footer';
import {
  wageThumbUrl,
  heroesThumbUrl,
  wageDesignSystemThumbUrl,
  orbaidThumbUrl,
  decompressionThumbUrl,
  heroBgUrl,
  heroDesignUrl,
  heroResearchUrl,
} from '@/assets/images';
import './Home.css';

/** Active state for the Research / Design toggle in the Hero */
type HeroToggle = 'research' | 'design';

type SearchSuggestion = { label: string; value: HeroToggle | null };

const SEARCH_SUGGESTIONS: SearchSuggestion[] = [
  { label: 'UX Research', value: 'research' },
  { label: 'UX Design', value: 'design' },
  { label: 'UX Everything', value: null },
];

/** Rotating badge labels — "Engineer" only appears in auto-cycle */
const BADGE_CYCLE = ['Researcher', 'Designer', 'Engineer'] as const;
const BADGE_CYCLE_MS = 2500;

const BIO_ITEMS = [
  "Master's Student @ University of Michigan",
  'Product Designer @ Play Wage',
  'HCI Researcher @ Information Interaction Lab',
];

const PROJECTS = [
  {
    title: 'Wage',
    description:
      'Turning investing into a competitive training ground where beginners learn decision-making through gameplay.',
    tags: ['Product Design', 'User Research', 'Fintech'],
    thumbnail: wageThumbUrl,
    href: '/work/wage',
  },
  {
    title: 'Heroes',
    description:
      "Designing a privacy-first monitoring system that helps family caregivers detect early health changes while preserving seniors\u2019 independence.",
    tags: ['UX Research', 'Product Design', 'Healthtech'],
    thumbnail: heroesThumbUrl,
    href: '/work/heroes',
  },
  {
    title: 'Wage Design System',
    description:
      'Building a scalable design system for a fintech game product, aligning UX patterns, UI components, and developer handoff.',
    tags: ['Design System'],
    thumbnail: wageDesignSystemThumbUrl,
    href: '/work/wage-design-system',
  },
  {
    title: 'OrbAid',
    description:
      'Exploring how AI can support human decision-making through explainable recommendations and interaction design.',
    tags: ['Product Design', 'AI Product'],
    thumbnail: orbaidThumbUrl,
    href: '/work/orbaid',
  },
  {
    title: 'Decompression Room',
    description:
      "Developing a VR decompression space to support journalists\u2019 mental recovery after high-stress training scenarios.",
    tags: ['XR Design'],
    thumbnail: decompressionThumbUrl,
    href: '/work/decompression-room',
  },
];

function IconSearch({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="7.5" cy="7.5" r="5" stroke="currentColor" strokeWidth="1.5" />
      <line
        x1="11.5" y1="11.5" x2="16" y2="16"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
      />
    </svg>
  );
}

function IconArrowUp() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M8 12V4M8 4L4 8M8 4L12 8"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Home() {
  const [activeToggle, setActiveToggle] = useState<HeroToggle>('research');
  const [userSelected, setUserSelected] = useState(false);
  const [badgeLabel, setBadgeLabel] = useState<string>('Researcher');
  const [badgeKey, setBadgeKey] = useState(0);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<HeroToggle | null>(null);
  const cycleIdxRef = useRef(0);

  // Auto-cycle badge when no explicit selection has been made
  useEffect(() => {
    if (userSelected) return;
    const timer = setInterval(() => {
      cycleIdxRef.current = (cycleIdxRef.current + 1) % BADGE_CYCLE.length;
      setBadgeLabel(BADGE_CYCLE[cycleIdxRef.current]);
      setBadgeKey((k) => k + 1);
    }, BADGE_CYCLE_MS);
    return () => clearInterval(timer);
  }, [userSelected]);

  function selectCard(mode: HeroToggle) {
    setActiveToggle(mode);
    setUserSelected(true);
    const label = mode === 'research' ? 'Researcher' : 'Designer';
    setBadgeLabel(label);
    setBadgeKey((k) => k + 1);
  }

  function handleSearchSuggestion(value: HeroToggle | null) {
    if (value) selectCard(value);
  }

  return (
    <div className="home">
      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="home-hero" aria-label="Introduction">
        {/* Full-bleed background illustration */}
        <div className="home-hero-bg" aria-hidden="true">
          <img src={heroBgUrl} alt="" />
        </div>

        {/* Centered hero content */}
        <div className="home-hero-inner">
          {/* ── Headline: "I am Ji! A UX [badge]" ── */}
          <div className="home-hero-headline">
            <span className="home-hero-headline-gi">I am Ji!</span>
            <div className="home-hero-headline-ux-row">
              <span className="home-hero-headline-ux">A UX</span>
              <div className="home-hero-badge" aria-live="polite" aria-atomic="true">
                <span key={badgeKey} className="home-hero-badge-text">{badgeLabel}</span>
              </div>
            </div>
          </div>

          {/* ── Cards + search: gapless stack ── */}
          <div className="home-hero-cards-section">
          {/* ── Hero cards — both visible, depth on selection ── */}
          <div className="home-hero-cards" aria-label="Hero illustrations">
            {/* Research card */}
            <div
              className={`home-hero-card-wrap home-hero-card-wrap--research${
                activeToggle === 'research'
                  ? ' home-hero-card-wrap--active'
                  : ' home-hero-card-wrap--inactive'
              }`}
              role="button"
              tabIndex={0}
              aria-label="Select Research mode"
              aria-pressed={activeToggle === 'research'}
              onClick={() => selectCard('research')}
              onKeyDown={(e) => e.key === 'Enter' && selectCard('research')}
              onMouseEnter={() => setHoveredCard('research')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <img src={heroResearchUrl} alt="" className="home-hero-card-img" />
              <span
                className={`home-hero-card-label${
                  hoveredCard === 'research' ? ' home-hero-card-label--visible' : ''
                }`}
              >
                Research
              </span>
            </div>

            {/* Design card */}
            <div
              className={`home-hero-card-wrap home-hero-card-wrap--design${
                activeToggle === 'design'
                  ? ' home-hero-card-wrap--active'
                  : ' home-hero-card-wrap--inactive'
              }`}
              role="button"
              tabIndex={0}
              aria-label="Select Design mode"
              aria-pressed={activeToggle === 'design'}
              onClick={() => selectCard('design')}
              onKeyDown={(e) => e.key === 'Enter' && selectCard('design')}
              onMouseEnter={() => setHoveredCard('design')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <img src={heroDesignUrl} alt="" className="home-hero-card-img" />
              <span
                className={`home-hero-card-label${
                  hoveredCard === 'design' ? ' home-hero-card-label--visible' : ''
                }`}
              >
                Design
              </span>
            </div>
          </div>

          {/* ── Search bar ── */}
          <div className={`home-hero-search${isSearchOpen ? ' home-hero-search--open' : ''}`}>
            <div className="home-hero-search-bar">
              <span className="home-hero-search-icon">
                <IconSearch />
              </span>
              <input
                className="home-hero-search-input"
                type="text"
                placeholder="What do you want to see from me today?"
                onFocus={() => setIsSearchOpen(true)}
                onBlur={() => setTimeout(() => setIsSearchOpen(false), 150)}
                aria-label="Search portfolio"
              />
              <button className="home-hero-search-submit" aria-label="Submit search">
                <IconArrowUp />
              </button>
            </div>

            {isSearchOpen && (
              <div className="home-hero-search-dropdown" role="listbox" aria-label="Suggestions">
                {SEARCH_SUGGESTIONS.map(({ label, value }) => (
                  <button
                    key={label}
                    className="home-hero-search-option"
                    role="option"
                    aria-selected={value === activeToggle}
                    onMouseDown={() => handleSearchSuggestion(value)}
                  >
                    <span className="home-hero-search-option-icon">
                      <IconSearch />
                    </span>
                    {label}
                  </button>
                ))}
                <div className="home-hero-search-footer">Click to see related projects</div>
              </div>
            )}
          </div>
          </div>{/* end home-hero-cards-section */}
        </div>

      </section>

      {/* ── Bio ticker — scrolling band ── */}
      <div className="home-bio-ticker">
        <div className="home-bio-ticker-track">
          {[0, 1].map((setIdx) => (
            <div key={setIdx} className="home-bio-ticker-set" aria-hidden={setIdx > 0 ? true : undefined}>
              {BIO_ITEMS.map((item, i) => (
                <span key={`${setIdx}-${i}`} className="home-bio-ticker-item">
                  {item}
                  <span className="home-bio-ticker-dot" aria-hidden="true">•</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── Projects ───────────────────────────────────────── */}
      <section className="home-projects" aria-label="Selected work">
        <div className="home-projects-grid">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tags={project.tags}
              thumbnail={project.thumbnail}
              href={project.href}
            />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
