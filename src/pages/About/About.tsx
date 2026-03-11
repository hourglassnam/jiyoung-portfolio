import React from 'react';
import Footer from '@/components/Footer/Footer';
import {
  profileImageUrl,
  aboutPhoto6Url,
  crochetImageUrl,
  fortuneCookieImageUrl,
  musicImageUrl,
  cameraImageUrl,
  videoImageUrl,
  foodImageUrl,
  natureImageUrl,
  linkedinIconUrl,
  emailIconUrl,
} from '@/assets/images';
import './About.css';

type GalleryItem = {
  key: string;
  num: string;
  src: string;
  alt: string;
  badge: string;
  rounded?: boolean;
  isMusic?: boolean;
  desktopLeft: string;
  desktopTop: string;
  tabletLeft: string;
  tabletTop: string;
};

// Desktop positions: px values from Figma (308:14067) converted to
// percentages of the 1400px gallery container (1440px viewport − 40px padding).
// Tablet positions: px values from Figma (313:14243) converted to
// percentages of the 632px gallery stage.
const GALLERY_ITEMS: GalleryItem[] = [
  {
    key: 'crochet',
    num: '01.',
    src: crochetImageUrl,
    alt: 'Crochet',
    badge: 'handcrafts',
    desktopLeft: '9.36%',    // 131 / 1400
    desktopTop: '29px',
    tabletLeft: '3.48%',     // 22 / 632
    tabletTop: '11px',
  },
  {
    key: 'fortune',
    num: '02.',
    src: fortuneCookieImageUrl,
    alt: 'Fortune Cookie',
    badge: 'Sharing luck with you',
    desktopLeft: '21.43%',   // 300 / 1400
    desktopTop: '249px',
    tabletLeft: '40.51%',    // 256 / 632 (centered: (632−120)/2)
    tabletTop: '131px',
  },
  {
    key: 'camera',
    num: '03.',
    src: cameraImageUrl,
    alt: 'Photography',
    badge: 'Moments in memory',
    desktopLeft: '38.79%',   // 543 / 1400
    desktopTop: '26px',
    tabletLeft: '71.20%',    // 450 / 632
    tabletTop: '4px',
  },
  {
    key: 'music',
    num: '04.',
    src: musicImageUrl,
    alt: 'Music',
    badge: 'Go to songs \u266b',
    rounded: true,
    isMusic: true,
    desktopLeft: '49.43%',   // 692 / 1400
    desktopTop: '295px',     // Figma wrapper=272px; num(19)+gap(4)+image → image top=295
    tabletLeft: '6.96%',     // 44 / 632
    tabletTop: '250px',      // Figma wrapper=227px; num(19)+gap(4)+image → image top=250
  },
  {
    key: 'video',
    num: '05.',
    src: videoImageUrl,
    alt: 'K-drama',
    badge: 'Fav K-Drama',
    desktopLeft: '61.93%',   // 867 / 1400
    desktopTop: '99px',
    tabletLeft: '31.01%',    // 196 / 632
    tabletTop: '420px',
  },
  {
    key: 'food',
    num: '06.',
    src: foodImageUrl,
    alt: 'Potluck',
    badge: 'Foods with friends',
    desktopLeft: '78.21%',   // 1095 / 1400
    desktopTop: '20px',
    tabletLeft: '75.63%',    // 478 / 632
    tabletTop: '208px',
  },
  {
    key: 'nature',
    num: '07.',
    src: natureImageUrl,
    alt: 'Plants',
    badge: 'Nature Lover',
    desktopLeft: '82.57%',   // 1156 / 1400
    desktopTop: '272px',
    tabletLeft: '68.20%',    // 431 / 632
    tabletTop: '417px',
  },
];

export default function About() {
  return (
    <div className="about-page">

      {/* ── Intro ─────────────────────────────────────────────── */}
      <section className="about-intro">
        <div className="about-intro-inner">
          <h1 className="about-intro-title">About Me</h1>
          <div className="about-intro-story">
            <h2 className="about-intro-subheading">
              Did you know the three-leaf clover symbolizes happiness?
            </h2>
            <div className="about-intro-body">
              <p>
                There&rsquo;s a saying, &ldquo;don&rsquo;t step on happiness while searching for
                luck&rdquo;, because most people walk right past the three-leaf ones, eyes scanning
                for the rare four-leaf.
              </p>
              <p>
                I think about that often, because what brings me joy is also embarrassingly
                ordinary: nailing a crochet tutorial, cracking open fortune cookies with friends
                outside Panda Express, learning new dishes at potlucks and photographing plants
                that seem identical until you notice each has its own character and name.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Gallery ───────────────────────────────────────────── */}
      <section className="about-gallery">
        <div className="about-gallery-inner">
          <h2 className="about-gallery-heading">
            Small things. Common things. Things I love.
          </h2>

          <div className="about-gallery-stage">
            {GALLERY_ITEMS.map((item) => (
              <div
                key={item.key}
                className={`about-gallery-item${item.isMusic ? ' about-gallery-item--music' : ''}`}
                style={
                  {
                    '--item-left': item.desktopLeft,
                    '--item-top': item.desktopTop,
                    '--tablet-left': item.tabletLeft,
                    '--tablet-top': item.tabletTop,
                  } as React.CSSProperties
                }
              >
                <span className="about-gallery-num">{item.num}</span>
                <img
                  className={
                    item.rounded
                      ? 'about-gallery-img about-gallery-img--rounded'
                      : 'about-gallery-img'
                  }
                  src={item.src}
                  alt={item.alt}
                />
                <span className="about-gallery-badge">{item.badge}</span>
              </div>
            ))}
          </div>

          <p className="about-gallery-legend">
            01. Crochet&nbsp;&nbsp;&nbsp;&nbsp;02. Photography&nbsp;&nbsp;&nbsp;&nbsp;
            03. Potluck&nbsp;&nbsp;&nbsp;&nbsp;04. Fortune Cookies&nbsp;&nbsp;&nbsp;&nbsp;
            05. K-drama Recommendations&nbsp;&nbsp;&nbsp;&nbsp;06. Potluck&nbsp;&nbsp;&nbsp;&nbsp;
            07. Music I Listen To&nbsp;&nbsp;&nbsp;&nbsp;08. Plants
          </p>
        </div>
      </section>

      {/* ── Connect ───────────────────────────────────────────── */}
      <section className="about-connect">
        <div className="about-connect-inner">
          <div className="about-connect-main">
            <img
              className="about-connect-profile"
              src={profileImageUrl}
              alt="Ji Young Nam"
            />
            <img
              className="about-connect-secondary"
              src={aboutPhoto6Url}
              alt=""
            />
            <div className="about-connect-body">
              <p className="about-connect-text">
                I&rsquo;d love to learn your name as well.{' '}
                Would you like to connect?
              </p>
              <div className="about-connect-btns">
                <a
                  href="https://www.linkedin.com/in/gijiyoungnam/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about-connect-btn"
                >
                  <img src={linkedinIconUrl} alt="" className="about-connect-btn-icon" />
                  LinkedIn
                </a>
                <a
                  href="mailto:jiyoungnam@umich.edu"
                  className="about-connect-btn"
                >
                  <img src={emailIconUrl} alt="" className="about-connect-btn-icon" />
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
