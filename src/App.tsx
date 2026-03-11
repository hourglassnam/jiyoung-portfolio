import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Playground from './pages/Playground/Playground';
import Resume from './pages/Resume/Resume';
import Wage from './pages/work/Wage/Wage';
import Heroes from './pages/work/Heroes/Heroes';
import WageDesignSystem from './pages/work/WageDesignSystem/WageDesignSystem';
import OrbAid from './pages/work/OrbAid/OrbAid';
import DecompressionRoom from './pages/work/DecompressionRoom/DecompressionRoom';

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work/wage" element={<Wage />} />
          <Route path="/work/heroes" element={<Heroes />} />
          <Route path="/work/wage-design-system" element={<WageDesignSystem />} />
          <Route path="/work/orbaid" element={<OrbAid />} />
          <Route path="/work/decompression-room" element={<DecompressionRoom />} />
          <Route path="/about" element={<About />} />
          <Route path="/playground" element={<Playground />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
