import { useState, useEffect, useRef, type FormEvent, type KeyboardEvent } from 'react';
import { useNavigate } from 'react-router-dom';
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

type SearchSuggestion = {
  label: string;
  value: HeroToggle | null;
  href: string;
};

const SEARCH_SUGGESTIONS: SearchSuggestion[] = [
  { label: 'UX Research', value: 'research', href: '/' },
  { label: 'UX Design', value: 'design', href: '/' },
  { label: 'UX Everything', value: null, href: '/' },
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

function normalizeSearchValue(value: string) {
  return value.trim().toLowerCase();
}

function findSuggestionByQuery(query: string) {
  const normalizedQuery = normalizeSearchValue(query);

  if (!normalizedQuery) return null;

  const suggestionAliases: Record<string, SearchSuggestion['value']> = {
    research: 'research',
    'ux research': 'research',
    design: 'design',
    'ux design': 'design',
    everything: null,
    'ux everything': null,
    work: null,
  };

  const matchedValue = suggestionAliases[normalizedQuery];

  return SEARCH_SUGGESTIONS.find(({ value }) => value === matchedValue) ?? null;
}

function getSuggestionMatchRange(label: string, query: string) {
  const normalizedQuery = normalizeSearchValue(query);

  if (!normalizedQuery) return null;

  const matchIndex = label.toLowerCase().indexOf(normalizedQuery);
  if (matchIndex === -1) return null;

  return {
    start: matchIndex,
    end: matchIndex + normalizedQuery.length,
  };
}

function getNextSuggestionIndex(currentIndex: number | null, direction: 'up' | 'down') {
  if (direction === 'down') {
    return currentIndex === null ? 0 : (currentIndex + 1) % SEARCH_SUGGESTIONS.length;
  }

  return currentIndex === null
    ? SEARCH_SUGGESTIONS.length - 1
    : (currentIndex - 1 + SEARCH_SUGGESTIONS.length) % SEARCH_SUGGESTIONS.length;
}

export default function Home() {
  const navigate = useNavigate();
  const [activeToggle, setActiveToggle] = useState<HeroToggle>('research');
  const [userSelected, setUserSelected] = useState(false);
  const [badgeLabel, setBadgeLabel] = useState<string>('Researcher');
  const [badgeKey, setBadgeKey] = useState(0);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [highlightedSuggestionIndex, setHighlightedSuggestionIndex] = useState<number | null>(null);
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

  useEffect(() => {
    if (!isSearchOpen) {
      setHighlightedSuggestionIndex(null);
    }
  }, [isSearchOpen]);

  function selectCard(mode: HeroToggle) {
    setActiveToggle(mode);
    setUserSelected(true);
    setSearchValue(mode === 'research' ? 'UX Research' : 'UX Design');
    const label = mode === 'research' ? 'Researcher' : 'Designer';
    setBadgeLabel(label);
    setBadgeKey((k) => k + 1);
  }

  function applySearchSuggestion(suggestion: SearchSuggestion) {
    setSearchValue(suggestion.label);
    setIsSearchOpen(false);

    if (suggestion.value) {
      selectCard(suggestion.value);
    } else {
      navigate(suggestion.href);
    }
  }

  function handleSearchSuggestion(value: HeroToggle | null) {
    const suggestion = SEARCH_SUGGESTIONS.find((item) => item.value === value);
    if (suggestion) applySearchSuggestion(suggestion);
  }

  function handleSearchSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (
      highlightedSuggestionIndex !== null &&
      SEARCH_SUGGESTIONS[highlightedSuggestionIndex]
    ) {
      applySearchSuggestion(SEARCH_SUGGESTIONS[highlightedSuggestionIndex]);
      return;
    }

    const matchedSuggestion = findSuggestionByQuery(searchValue);
    if (matchedSuggestion) {
      applySearchSuggestion(matchedSuggestion);
    }
  }

  function handleSearchInputKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setIsSearchOpen(true);
      setHighlightedSuggestionIndex((currentIndex) => {
        const nextIndex = getNextSuggestionIndex(currentIndex, 'down');
        setSearchValue(SEARCH_SUGGESTIONS[nextIndex].label);
        return nextIndex;
      });
      return;
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      setIsSearchOpen(true);
      setHighlightedSuggestionIndex((currentIndex) => {
        const nextIndex = getNextSuggestionIndex(currentIndex, 'up');
        setSearchValue(SEARCH_SUGGESTIONS[nextIndex].label);
        return nextIndex;
      });
      return;
    }

    if (event.key === 'Escape') {
      setIsSearchOpen(false);
    }
  }

  function renderSuggestionLabel(label: string) {
    const matchRange = getSuggestionMatchRange(label, searchValue);

    if (!matchRange) {
      return <span className="home-hero-search-option-text">{label}</span>;
    }

    return (
      <span className="home-hero-search-option-text">
        {label.slice(0, matchRange.start)}
        <span className="home-hero-search-option-match">
          {label.slice(matchRange.start, matchRange.end)}
        </span>
        {label.slice(matchRange.end)}
      </span>
    );
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
            <form className="home-hero-search-bar" onSubmit={handleSearchSubmit}>
              <span className="home-hero-search-icon">
                <IconSearch />
              </span>
              <input
                className="home-hero-search-input"
                type="text"
                placeholder="What do you want to see from me today?"
                value={searchValue}
                onChange={(event) => {
                  setSearchValue(event.target.value);
                  setHighlightedSuggestionIndex(null);
                }}
                onFocus={() => setIsSearchOpen(true)}
                onBlur={() => setTimeout(() => setIsSearchOpen(false), 150)}
                onKeyDown={handleSearchInputKeyDown}
                aria-label="Search portfolio"
                aria-expanded={isSearchOpen}
                aria-controls="home-search-suggestions"
                aria-activedescendant={
                  highlightedSuggestionIndex !== null
                    ? `home-search-suggestion-${highlightedSuggestionIndex}`
                    : undefined
                }
              />
              <button type="submit" className="home-hero-search-submit" aria-label="Submit search">
                <IconArrowUp />
              </button>
            </form>

            {isSearchOpen && (
              <div
                id="home-search-suggestions"
                className="home-hero-search-dropdown"
                role="listbox"
                aria-label="Suggestions"
              >
                {SEARCH_SUGGESTIONS.map(({ label, value }, index) => (
                  <button
                    key={label}
                    className={`home-hero-search-option${
                      highlightedSuggestionIndex === index
                        ? ' home-hero-search-option--active'
                        : ''
                    }${
                      getSuggestionMatchRange(label, searchValue)
                        ? ' home-hero-search-option--matched'
                        : ''
                    }`}
                    id={`home-search-suggestion-${index}`}
                    role="option"
                    aria-selected={highlightedSuggestionIndex === index}
                    onMouseDown={() => handleSearchSuggestion(value)}
                    onMouseEnter={() => setHighlightedSuggestionIndex(index)}
                  >
                    <span
                      className={`home-hero-search-option-icon${
                        highlightedSuggestionIndex === index ||
                        getSuggestionMatchRange(label, searchValue)
                          ? ' home-hero-search-option-icon--matched'
                          : ''
                      }`}
                    >
                      <IconSearch />
                    </span>
                    {renderSuggestionLabel(label)}
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
