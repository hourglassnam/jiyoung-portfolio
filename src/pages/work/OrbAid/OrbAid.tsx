import SectionHeader from '@/components/SectionHeader/SectionHeader';
import Button from '@/components/Button/Button';
import Footer from '@/components/Footer/Footer';
import { orbaidThumbUrl } from '@/assets/images';
import '../Wage/Wage.css';
import './OrbAid.css';

export default function OrbAid() {
  return (
    <div className="case-study-page">
      <section className="case-study-hero case-study-hero--orbaid">
        <div className="case-study-hero-content">
          <SectionHeader
            label="Product Design · AI Product"
            title="OrbAid"
            subtitle="Exploring how AI can support human decision-making through explainable recommendations and interaction design."
            level="h1"
          />
          <div className="case-study-cta">
            <Button label="Read Case Study" href="#overview" variant="primary" size="md" />
          </div>
        </div>
        <div className="case-study-hero-thumbnail">
          <img src={orbaidThumbUrl} alt="OrbAid project thumbnail" />
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
