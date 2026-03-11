import Footer from '@/components/Footer/Footer';
import { aboutPhoto1Url } from '@/assets/images';
import './Playground.css';

export default function Playground() {
  return (
    <div className="playground-page">
      <section className="playground-building">
        <div className="playground-building-inner">
          <img
            className="playground-building-img"
            src={aboutPhoto1Url}
            alt="Under construction"
          />
          <p className="playground-building-text">
            This page is under construction!{' '}
            Please revisit! It won&rsquo;t take long!
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
