import Button from '@/components/Button/Button';
import Footer from '@/components/Footer/Footer';
import ResumeCard from '@/components/ResumeCard/ResumeCard';
import {
  profileImageUrl,
  xsauceLogoUrl,
  umsiLogoUrl,
  snuLogoUrl,
  i2labLogoUrl,
  i2labPhoto2Url,
  orbaidLogoUrl,
  mintifyLogoUrl,
  clawsLogoUrl,
  noaaLogoUrl,
  mpfLogoUrl,
  abcLogoUrl,
  // artifact photos
  orbaidPhoto1Url,
  orbaidPhoto2Url,
  snuPhoto1Url,
  snuPhoto2Url,
  snuPhoto3Url,
  clawsPhoto2Url,
  clawsPhoto3Url,
  clawsPhoto5Url,
  mintifyPhoto1Url,
  mintifyPhoto2Url,
  mintifyPhoto3Url,
  mpfPhoto1Url,
  mpfPhoto3Url,
  mpfPhoto5Url,
  abcNewsPhoto1Url,
  abcNewsPhoto2Url,
  abcNewsPhoto3Url,
  // skill icons
  skillFigmaUrl,
  skillCursorUrl,
  skillReactUrl,
  skillPythonUrl,
  skillHtmlUrl,
  skillCssUrl,
  skillPsUrl,
  skillMongdbUrl,
  skillMazeUrl,
} from '@/assets/images';
import './Resume.css';

// ── Data ─────────────────────────────────────────────────────

const EDUCATION = [
  {
    logoSrc: umsiLogoUrl,
    title: 'University of Michigan School of Information',
    dateRange: 'Master of Science in Information',
    duration: 'May 2026',
    description: 'User-Centered Agile Development Track | GPA: 3.96',
  },
  {
    logoSrc: snuLogoUrl,
    title: 'Seoul National University',
    dateRange: 'Master of Science in Crop Science and Biotechnology',
    duration: 'Feb 2023',
    description: 'GPA: 3.8/4.0',
  },
];

const EXPERIENCE = [
  {
    logoSrc: xsauceLogoUrl,
    title: 'Xsauce Inc.',
    dateRange: 'May 2025 \u2013 Present',
    duration: '11 mos',
    subRoles: [
      { title: 'Product Designer', dateRange: 'Sep 2025 \u2013 Present', duration: '8 mos' },
      { title: 'UX Design Intern (via Zell Lurie)', dateRange: 'May 2025 \u2013 Aug 2025', duration: '3 mos' },
    ],
    description:
      'Designed and shipped a gamified investing MVP for Gen-Z learners through an end-to-end UX redesign using mixed-methods research and AI-assisted workflows.',
    artifacts: [] as string[],
  },
  {
    logoSrc: i2labLogoUrl,
    title: 'Mixed-method UX Researcher',
    org: 'Information Interaction Lab',
    dateRange: 'Jan 2025 \u2013 Present',
    duration: '1 yr 3 mos',
    description:
      'Researching how GenAI voice agents shape human collaboration by analyzing multi-agent conversations and building dashboards to visualize behavioral shifts.',
    articleLink: {
      href: 'https://arxiv.org/abs/2602.14407v1',
      thumbnailSrc: i2labPhoto2Url,
      title: 'Understanding How Interface-Driven Social Prominence Shapes Group Discussions with GenAI',
    },
  },
  {
    logoSrc: orbaidLogoUrl,
    title: 'UX Design Intern',
    org: 'OrbAid',
    dateRange: 'Sep 2025 \u2013 Dec 2025',
    duration: '3 mos',
    description:
      'Redesigned an AI sustainability platform for sustainability managers, enabling hands-free field data access through GenAI voice and cross-platform dashboards.',
    artifacts: [orbaidPhoto1Url, orbaidPhoto2Url],
  },
  {
    logoSrc: snuLogoUrl,
    title: 'Research Data Analyst',
    org: 'Crop Molecular Breeding Lab',
    dateRange: 'Aug 2020 \u2013 Feb 2023',
    duration: '3 yrs',
    description:
      'The aging population in family caregiving presents growing challenges, with over 60% of caregivers reporting burnout due to time-intensive responsibilities.',
    artifacts: [snuPhoto3Url, snuPhoto1Url, snuPhoto2Url],
  },
];

const PROJECTS = [
  {
    logoSrc: noaaLogoUrl,
    title: 'UX Designer / Developer',
    org: 'NOAA GLANSIS',
    dateRange: 'Jan 2026 \u2013 Present',
    duration: '3 mos',
    description:
      'Developed a 0\u21921 map-based HUC code search feature for NOAA\u2019s GLANSIS platform to help educators and students easily locate their local watershed.',
    artifacts: [] as string[],
  },
  {
    logoSrc: abcLogoUrl,
    title: 'XR/VR UX Designer',
    org: 'ABC NEWS',
    dateRange: 'Fall 2024',
    duration: '3 mos',
    description:
      'Designed a VR stress-relief experience for trauma-exposed journalists, creating a debrief environment to support emotional recovery after high-stress reporting.',
    artifacts: [abcNewsPhoto1Url, abcNewsPhoto2Url, abcNewsPhoto3Url],
  },
  {
    logoSrc: mpfLogoUrl,
    title: 'UX Lead',
    org: 'Muskegon Polish Festival',
    dateRange: 'Jan 2025 \u2013 Apr 2025',
    duration: '3 mos',
    description:
      'Led the 0\u21921 design of an interactive festival exhibit featuring a tablet-based map and timeline that allows visitors to explore key moments in Polish history through clickable events and video displays.',
    artifacts: [mpfPhoto1Url, mpfPhoto3Url, mpfPhoto5Url],
  },
];

const INVOLVEMENT = [
  {
    logoSrc: mintifyLogoUrl,
    title: 'Founding President',
    org: 'Mintify \u2014 University of Michigan',
    dateRange: 'Sep 2024 \u2013 Aug 2025',
    duration: '1 yr',
    description:
      'Founded Mintify, a student design organization at UMSI, organizing events and sourcing real-world projects to help design students gain hands-on product and UX experience.',
    artifacts: [mintifyPhoto1Url, mintifyPhoto2Url, mintifyPhoto3Url],
  },
  {
    logoSrc: clawsLogoUrl,
    title: 'UX Researcher',
    org: 'CLAWS(University of Michigan)',
    dateRange: 'Sep 2024 \u2013 Aug 2025',
    duration: '1 yr',
    description:
      'Researched visibility and accessibility in lunar-analog environments, studying how astronauts maintain situational awareness in dusty, high-contrast conditions.',
    artifacts: [clawsPhoto2Url, clawsPhoto3Url, clawsPhoto5Url],
  },
];

const SKILLS = [
  { name: 'Figma', src: skillFigmaUrl },
  { name: 'Cursor', src: skillCursorUrl },
  { name: 'React', src: skillReactUrl },
  { name: 'Python', src: skillPythonUrl },
  { name: 'HTML', src: skillHtmlUrl },
  { name: 'CSS', src: skillCssUrl },
  { name: 'Photoshop', src: skillPsUrl },
  { name: 'MongoDB', src: skillMongdbUrl },
  { name: 'Maze', src: skillMazeUrl },
];

// ── Component ─────────────────────────────────────────────────

interface ResumeSectionItem {
  logoSrc?: string;
  title: string;
  org?: string;
  dateRange?: string;
  duration?: string;
  description?: string;
  subRoles?: { title: string; dateRange: string; duration?: string }[];
  artifacts?: string[];
  articleLink?: { href: string; thumbnailSrc: string; title: string };
}

interface ResumeSection {
  label: string;
  items: ResumeSectionItem[];
}

const SECTIONS: ResumeSection[] = [
  { label: 'Education', items: EDUCATION },
  { label: 'Experience', items: EXPERIENCE },
  { label: 'Projects', items: PROJECTS },
  { label: 'Involvement', items: INVOLVEMENT },
];

export default function Resume() {
  return (
    <div className="resume-page">
      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="resume-hero">
        <img
          className="resume-profile-img"
          src={profileImageUrl}
          alt="Ji Young Nam"
        />
        <div className="resume-profile-info">
          <h1 className="resume-name">Ji Young Nam</h1>
          <div className="resume-profile-meta">
            <p className="resume-role">Product Designer / HCI Researcher</p>
            <p className="resume-links">
              <a
                href="https://www.linkedin.com/in/ji-young-nam-jiyoungnam/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <span className="resume-dot" />
              <a
                href="https://x.com/jiyoungnam_"
                target="_blank"
                rel="noopener noreferrer"
              >
                X (ex-Twitter)
              </a>
            </p>
          </div>
        </div>

        <div className="resume-cta">
          <Button
            label="Download Resume"
            href="/resume.pdf"
            variant="primary"
            size="sm"
          />
        </div>
      </section>

      {/* ── Content sections ──────────────────────────────── */}
      <div className="resume-content">
        {SECTIONS.map(({ label, items }) => (
          <div key={label} className="resume-section">
            <p className="resume-section-label">{label}</p>
            <div className="resume-section-cards">
              {items.map((item, i) => (
                <ResumeCard key={i} {...item} />
              ))}
            </div>
          </div>
        ))}

        {/* ── Skills ──────────────────────────────────────── */}
        <div className="resume-section">
          <p className="resume-section-label">Skills</p>
          <div className="resume-skills-grid">
            {SKILLS.map((skill) => (
              <div key={skill.name} className="resume-skill-icon">
                <img src={skill.src} alt={skill.name} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
