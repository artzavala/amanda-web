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

export default function App() {
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
