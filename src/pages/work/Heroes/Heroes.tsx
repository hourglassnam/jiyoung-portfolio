import SectionHeader from '@/components/SectionHeader/SectionHeader';
import Button from '@/components/Button/Button';
import Footer from '@/components/Footer/Footer';
import { heroesThumbUrl } from '@/assets/images';
import '../Wage/Wage.css';
import './Heroes.css';

export default function Heroes() {
  return (
    <div className="case-study-page">
      <section className="case-study-hero case-study-hero--heroes">
        <div className="case-study-hero-content">
          <SectionHeader
            label="UX Research · Product Design · Healthtech"
            title="Heroes"
            subtitle="Designing a privacy-first monitoring system that helps family caregivers detect early health changes while preserving seniors' independence."
            level="h1"
          />
          <div className="case-study-cta">
            <Button label="Read Case Study" href="#overview" variant="primary" size="md" />
          </div>
        </div>
        <div className="case-study-hero-thumbnail">
          <img src={heroesThumbUrl} alt="Heroes project thumbnail" />
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
