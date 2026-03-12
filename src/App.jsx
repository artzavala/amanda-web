import { Routes, Route } from 'react-router-dom';
import CustomCursor     from './components/CustomCursor';
import AnnouncementBar  from './components/AnnouncementBar';
import Nav              from './components/Nav';
import Hero             from './components/Hero';
import MissionStrip     from './components/MissionStrip';
import NorthStar        from './components/NorthStar';
import DiamondSelf      from './components/DiamondSelf';
import DiamondCoherence from './components/DiamondCoherence';
import IndustryCarousel from './components/IndustryCarousel';
import Services         from './components/Services';
import About            from './components/About';
import LilyGrace        from './components/LilyGrace';
import CTA              from './components/CTA';
import Footer           from './components/Footer';
import PrivacyPage      from './pages/PrivacyPage';
import TermsPage        from './pages/TermsPage';

function MainLayout() {
  return (
    <>
      <CustomCursor />
      <AnnouncementBar />
      <Nav />
      <main>
        <Hero />
        <MissionStrip />
        <NorthStar />
        <DiamondSelf />
        <DiamondCoherence />
        <IndustryCarousel />
        <Services />
        <About />
        <LilyGrace />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/terms" element={<TermsPage />} />
    </Routes>
  );
}
