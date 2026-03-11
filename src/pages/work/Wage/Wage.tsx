import SectionHeader from '@/components/SectionHeader/SectionHeader';
import Button from '@/components/Button/Button';
import Footer from '@/components/Footer/Footer';
import { wageThumbUrl } from '@/assets/images';
import './Wage.css';

export default function Wage() {
  return (
    <div className="case-study-page">
      {/* Hero */}
      <section className="case-study-hero case-study-hero--wage">
        <div className="case-study-hero-content">
          <SectionHeader
            label="Product Design · User Research · Fintech"
            title="Wage"
            subtitle="Turning investing into a competitive training ground where beginners learn decision-making through gameplay."
            level="h1"
            accentColor="var(--color-wage-accent)"
          />
          <div className="case-study-cta">
            <Button label="Read Case Study" href="#overview" variant="primary" size="md" />
          </div>
        </div>
        <div className="case-study-hero-thumbnail">
          <img src={wageThumbUrl} alt="Wage project thumbnail" />
        </div>
      </section>

      {/* Placeholder content */}
      <section className="case-study-body" id="overview">
        <SectionHeader
          label="01. Overview"
          title="Coming Soon"
          subtitle="Full case study content is currently being written."
          level="h2"
        />
      </section>

      <Footer />
    </div>
  );
}
