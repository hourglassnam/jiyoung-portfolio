import SectionHeader from '@/components/SectionHeader/SectionHeader';
import Button from '@/components/Button/Button';
import Footer from '@/components/Footer/Footer';
import { decompressionThumbUrl } from '@/assets/images';
import '../Wage/Wage.css';
import './DecompressionRoom.css';

export default function DecompressionRoom() {
  return (
    <div className="case-study-page">
      <section className="case-study-hero case-study-hero--decompression">
        <div className="case-study-hero-content">
          <SectionHeader
            label="XR Design"
            title="Decompression Room"
            subtitle="Developing a VR decompression space to support journalists' mental recovery after high-stress training scenarios."
            level="h1"
          />
          <div className="case-study-cta">
            <Button label="Read Case Study" href="#overview" variant="primary" size="md" />
          </div>
        </div>
        <div className="case-study-hero-thumbnail">
          <img src={decompressionThumbUrl} alt="Decompression Room project thumbnail" />
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
