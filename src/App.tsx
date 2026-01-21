import { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Marquee from './components/sections/Marquee';
import WhoIsEris from './components/sections/WhoIsEris';
import ViralSection from './components/sections/ViralSection';
import WhyCoin from './components/sections/WhyCoin';
import Tokenomics from './components/sections/Tokenomics';
import Roadmap from './components/sections/Roadmap';
import Community from './components/sections/Community';
import Footer from './components/layout/Footer';

function App() {
  const [luckDragonMode, setLuckDragonMode] = useState(false);


  const toggleMode = () => {
    setLuckDragonMode(!luckDragonMode);
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <div className={`min-h-screen grain-bg transition-colors duration-700 ${luckDragonMode ? 'bg-gradient-to-br from-eris-sky/30 via-eris-pink/30 to-eris-yellow/30' : 'bg-eris-white'}`}>
      <Navbar luckDragonMode={luckDragonMode} toggleMode={toggleMode} />
      <Hero />
      <Marquee />
      <WhoIsEris />
      <ViralSection />
      <WhyCoin />
      <Tokenomics />
      {/* <Roadmap /> */}
      <Community />
      <Footer />
    </div>
  );
}

export default App;
