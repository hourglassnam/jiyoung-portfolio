import SectionHeader from '@/components/SectionHeader/SectionHeader';
import Button from '@/components/Button/Button';
import Footer from '@/components/Footer/Footer';
import { wageDesignSystemThumbUrl } from '@/assets/images';
import '../Wage/Wage.css';
import './WageDesignSystem.css';

export default function WageDesignSystem() {
  return (
    <div className="case-study-page">
      <section className="case-study-hero case-study-hero--wds">
        <div className="case-study-hero-content">
          <SectionHeader
            label="Design System"
            title="Wage Design System"
            subtitle="Building a scalable design system for a fintech game product, aligning UX patterns, UI components, and developer handoff."
            level="h1"
            accentColor="var(--color-wage-accent)"
          />
          <div className="case-study-cta">
            <Button label="Read Case Study" href="#overview" variant="primary" size="md" />
          </div>
        </div>
        <div className="case-study-hero-thumbnail">
          <img src={wageDesignSystemThumbUrl} alt="Wage Design System thumbnail" />
        </div>
      </section>

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
