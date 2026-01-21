import { useState, useEffect } from 'react';
import erisImage from './assets/eris.jpg';

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

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4 glass-nav">
        <div className="max-w-6xl mx-auto flex justify-between items-center bg-white/40 backdrop-blur-md rounded-full px-6 py-3 shadow-sm border border-white/50">
          <div className="text-2xl font-display font-bold text-eris-sky drop-shadow-sm flex items-center gap-2">
            <span>🐉</span> ERIS
          </div>
          <div className="hidden md:flex gap-8 font-display text-gray-700 font-medium">
            <a href="#who" className="hover:text-eris-sky transition-colors cursor-pointer">Who?</a>
            <a href="#why" className="hover:text-eris-pink transition-colors cursor-pointer">Why?</a>
            <a href="#token" className="hover:text-eris-green transition-colors cursor-pointer">$ERIS</a>
            <a href="#roadmap" className="hover:text-eris-yellow transition-colors cursor-pointer">Roadmap</a>
          </div>
          <button
            onClick={toggleMode}
            className={`px-4 py-2 rounded-full font-bold text-sm transition-all transform hover:scale-105 active:scale-95 ${luckDragonMode ? 'bg-eris-yellow text-amber-800 shadow-[0_0_15px_rgba(253,230,138,0.6)]' : 'bg-eris-sky text-white'}`}
          >
            {luckDragonMode ? '✨ LUCK MODE ON ✨' : 'Activate Luck Dragon'}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 px-4 min-h-screen flex items-center justify-center overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div className="order-2 md:order-1 relative z-10 text-center md:text-left">
            <div className={`inline-block px-4 py-2 bg-eris-green/30 rounded-full mb-6 text-emerald-800 font-bold transform -rotate-2 animate-bounce-gentle`}>
              The Longest Snoot on Solana 📏
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight text-gray-800 text-shadow-sm">
              ERIS THE <span className="text-eris-sky">BORZOI</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 font-medium leading-relaxed max-w-lg mx-auto md:mx-0">
              Awkwardly majestic. Wholesome chaos. The luck dragon you didn't know you needed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="px-8 py-4 bg-gray-900 text-white rounded-2xl text-xl font-bold hover:bg-gray-800 transform hover:-translate-y-1 transition-all shadow-xl hover:shadow-2xl">
                Buy $ERIS
              </button>
              <button className="px-8 py-4 bg-white text-gray-900 border-2 border-gray-200 rounded-2xl text-xl font-bold hover:bg-gray-50 transform hover:-translate-y-1 transition-all">
                Join Cult 🐕
              </button>
            </div>
          </div>

          <div className="order-1 md:order-2 relative flex justify-center">
            {/* Floating Emojis */}
            <div className="absolute -top-10 -right-10 text-6xl animate-float" style={{ animationDelay: '0s' }}>🐉</div>
            <div className="absolute top-1/2 -left-12 text-5xl animate-float" style={{ animationDelay: '1.5s' }}>✨</div>
            <div className="absolute -bottom-8 right-12 text-6xl animate-wobble-slow">😂</div>

            <div className="relative w-80 h-80 md:w-[500px] md:h-[500px]">
              <div className="absolute inset-0 bg-eris-sky rounded-[3rem] rotate-3 transform scale-105 opacity-50 blur-sm"></div>
              <div className="absolute inset-0 bg-eris-pink rounded-[3rem] -rotate-2 transform scale-105 opacity-50 blur-sm"></div>
              <img
                src={erisImage}
                alt="Eris the Borzoi"
                className="relative w-full h-full object-cover rounded-[2.5rem] shadow-2xl transform hover:scale-[1.02] transition-transform duration-500 border-4 border-white"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Marquee */}
      <div className="bg-eris-yellow py-4 overflow-hidden -rotate-1 border-y-4 border-white shadow-sm">
        <div className="whitespace-nowrap flex gap-8 animate-linear text-amber-900 font-bold text-2xl font-display">
          <span>LONG SNOOT ENERGY</span> ✦ <span>LUCK DRAGON VIBES</span> ✦ <span>MUCH LENGTH</span> ✦ <span>VERY MAJESTIC</span> ✦ <span>LONG SNOOT ENERGY</span> ✦ <span>LUCK DRAGON VIBES</span> ✦ <span>MUCH LENGTH</span> ✦ <span>VERY MAJESTIC</span>
        </div>
      </div>

      {/* Who is Eris? */}
      <section id="who" className="py-24 px-4 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black mb-12 text-gray-800">Who is <span className="text-eris-pink underline decoration-wavy decoration-eris-yellow">Eris?</span></h2>

          <div className="bg-white p-8 rounded-[3rem] shadow-xl border-4 border-eris-cream transform hover:rotate-1 transition-transform duration-500">
            <p className="text-2xl text-gray-700 leading-loose">
              Eris is not just a dog. She is a <span className="font-bold bg-eris-sky/30 px-2 rounded-md">mythical creature</span> trapped in a pool noodle's body.
              With a snoot that defies physics and a personality that screams "I don't know what's happening but I'm happy to be here,"
              she is the internet's favorite Luck Dragon.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="aspect-square bg-gray-100 rounded-2xl flex items-center justify-center text-4xl">📏</div>
              <div className="aspect-square bg-gray-100 rounded-2xl flex items-center justify-center text-4xl">🐺</div>
              <div className="aspect-square bg-gray-100 rounded-2xl flex items-center justify-center text-4xl">🥔</div>
            </div>
          </div>
        </div>
      </section>

      {/* Viral Section */}
      <section className="py-24 px-4 bg-white/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black mb-12 text-gray-800">Caught on <span className="text-eris-sky">Camera 📸</span></h2>
          <div className="flex justify-center transform hover:scale-[1.01] transition-transform duration-500">
            <blockquote className="tiktok-embed rounded-[2rem] overflow-hidden shadow-2xl border-4 border-eris-pink" cite="https://www.tiktok.com/@eriszoi/video/7012308529306422533" data-video-id="7012308529306422533" style={{ maxWidth: '605px', minWidth: '325px' }}>
              <section>
                <a target="_blank" title="@eriszoi" href="https://www.tiktok.com/@eriszoi?refer=embed">@eriszoi</a>
              </section>
            </blockquote>
          </div>
          <p className="mt-12 text-2xl text-gray-700 font-display font-bold italic bg-eris-yellow/50 inline-block px-6 py-2 rounded-full transform -rotate-1">
            "It's not a nose, it's a lifestyle."
          </p>
        </div>
      </section>

      {/* Why a Coin? */}
      <section id="why" className="py-24 px-4 bg-eris-cream/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="bg-eris-sky rounded-[3rem] p-12 text-white relative shadow-lg transform -rotate-1">
              <h3 className="text-4xl font-bold mb-6">Why a Coin? 🧐</h3>
              <p className="text-xl leading-relaxed font-medium">
                Because every majestic creature deserves a market cap.
                We're not here to revolutionize finance. We're here to revolutionize <span className="italic">joy</span>.
                And maybe buy Eris more really long sweaters.
              </p>
              <div className="absolute -bottom-6 -right-6 bg-white text-gray-800 px-6 py-3 rounded-xl font-bold shadow-md rotation-3">
                Essentially: For the memes
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-3xl shadow-sm border-2 border-dashed border-gray-300 flex items-center gap-4 hover:scale-105 transition-transform">
                <span className="text-4xl">📈</span>
                <div>
                  <h4 className="font-bold text-xl">Number Go Up?</h4>
                  <p className="text-gray-500">Maybe. Snoot definitely goes out.</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-3xl shadow-sm border-2 border-dashed border-gray-300 flex items-center gap-4 hover:scale-105 transition-transform">
                <span className="text-4xl">🤝</span>
                <div>
                  <h4 className="font-bold text-xl">Community Driven</h4>
                  <p className="text-gray-500">Run by people who like long dogs.</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-3xl shadow-sm border-2 border-dashed border-gray-300 flex items-center gap-4 hover:scale-105 transition-transform">
                <span className="text-4xl">🛡️</span>
                <div>
                  <h4 className="font-bold text-xl">Safe & Secure</h4>
                  <p className="text-gray-500">Liquidity burned like a well-done toast.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tokenomics */}
      <section id="token" className="py-24 px-4 text-center">
        <h2 className="text-5xl font-black mb-16 text-gray-800">Tokenomics 📊</h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border-b-8 border-eris-green hover:-translate-y-2 transition-transform">
            <div className="text-6xl mb-6">🔥</div>
            <h3 className="text-3xl font-bold mb-2">LP Burned</h3>
            <p className="text-gray-500">Gone forever. Like a ball thrown into the woods.</p>
          </div>

          <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border-b-8 border-eris-sky hover:-translate-y-2 transition-transform">
            <div className="text-6xl mb-6">🏗️</div>
            <h3 className="text-3xl font-bold mb-2">0% Tax</h3>
            <p className="text-gray-500">No taxes. Eris doesn't understand the IRS anyway.</p>
          </div>

          <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border-b-8 border-eris-pink hover:-translate-y-2 transition-transform">
            <div className="text-6xl mb-6">💎</div>
            <h3 className="text-3xl font-bold mb-2">1B Supply</h3>
            <p className="text-gray-500">One for every inch of snoot length (multiplied a bit).</p>
          </div>
        </div>

        <div className="mt-16 bg-gray-900 text-white p-6 rounded-2xl max-w-2xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-mono text-gray-400">CA:</span>
          <span className="font-mono font-bold text-lg md:text-xl truncate">ErisTheBorzoiLongSnootPump12345...</span>
          <button className="bg-eris-green text-green-900 px-4 py-2 rounded-lg font-bold text-sm hover:bg-emerald-300">COPY</button>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="py-24 px-4 bg-gradient-to-b from-transparent to-eris-sky/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-black mb-16 text-center text-gray-800">The Long Path 🛣️</h2>

          <div className="space-y-8 relative before:absolute before:left-8 md:before:left-1/2 before:top-0 before:bottom-0 before:w-1 before:bg-gray-200 before:-translate-x-1/2">

            <div className="relative flex flex-col md:flex-row items-center justify-between md:odd:flex-row-reverse group">
              <div className="w-full md:w-[45%] bg-white p-8 rounded-3xl shadow-md border-4 border-transparent group-hover:border-eris-yellow transition-all">
                <span className="inline-block px-3 py-1 bg-eris-yellow rounded-full text-xs font-bold mb-2">PHASE 1</span>
                <h3 className="text-2xl font-bold mb-2">Birth of the Snoot</h3>
                <ul className="text-gray-600 list-disc list-inside">
                  <li>Website Launch</li>
                  <li>Meme Collection</li>
                  <li>Confuse the internet</li>
                </ul>
              </div>
              <div className="absolute left-8 md:left-1/2 w-8 h-8 bg-eris-yellow rounded-full border-4 border-white -translate-x-1/2 my-4 md:my-0 shadow-sm z-10"></div>
              <div className="w-full md:w-[45%]"></div>
            </div>

            <div className="relative flex flex-col md:flex-row items-center justify-between md:odd:flex-row-reverse group">
              <div className="w-full md:w-[45%] bg-white p-8 rounded-3xl shadow-md border-4 border-transparent group-hover:border-eris-pink transition-all">
                <span className="inline-block px-3 py-1 bg-eris-pink rounded-full text-xs font-bold mb-2">PHASE 2</span>
                <h3 className="text-2xl font-bold mb-2">Global Confusion</h3>
                <ul className="text-gray-600 list-disc list-inside">
                  <li>1,000 Holders</li>
                  <li>Viral Borzoi Videos</li>
                  <li>Merch (Long Scarves)</li>
                </ul>
              </div>
              <div className="absolute left-8 md:left-1/2 w-8 h-8 bg-eris-pink rounded-full border-4 border-white -translate-x-1/2 my-4 md:my-0 shadow-sm z-10"></div>
              <div className="w-full md:w-[45%]"></div>
            </div>

            <div className="relative flex flex-col md:flex-row items-center justify-between md:odd:flex-row-reverse group">
              <div className="w-full md:w-[45%] bg-white p-8 rounded-3xl shadow-md border-4 border-transparent group-hover:border-eris-green transition-all">
                <span className="inline-block px-3 py-1 bg-eris-green rounded-full text-xs font-bold mb-2">PHASE 3</span>
                <h3 className="text-2xl font-bold mb-2">Maximum Length</h3>
                <ul className="text-gray-600 list-disc list-inside">
                  <li>Exchange Listings</li>
                  <li>Eris meets a real dragon</li>
                  <li>World Domination (Gently)</li>
                </ul>
              </div>
              <div className="absolute left-8 md:left-1/2 w-8 h-8 bg-eris-green rounded-full border-4 border-white -translate-x-1/2 my-4 md:my-0 shadow-sm z-10"></div>
              <div className="w-full md:w-[45%]"></div>
            </div>

          </div>
        </div>
      </section>

      {/* Community / CTA */}
      <section className="py-32 px-4 text-center">
        <div className="max-w-4xl mx-auto bg-gray-900 text-white rounded-[3rem] p-12 md:p-20 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-black mb-8 group-hover:scale-105 transition-transform duration-500">JOIN THE PACK 🐕</h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
              We are awkward. We are long. We are family.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="bg-eris-sky text-gray-900 px-8 py-4 rounded-2xl font-bold text-xl hover:bg-white hover:scale-110 transition-all shadow-lg shadow-eris-sky/30">
                Telegram ✈️
              </button>
              <button className="bg-eris-pink text-gray-900 px-8 py-4 rounded-2xl font-bold text-xl hover:bg-white hover:scale-110 transition-all shadow-lg shadow-eris-pink/30">
                Twitter 🐦
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center text-gray-500 font-medium">
        <p>© 2026 Eris the Borzoi Coin. Not financial advice. Just a really long dog.</p>
        <div className="mt-4 flex justify-center gap-4 text-2xl">
          <span>🦴</span>
          <span>🎾</span>
          <span>💤</span>
        </div>
      </footer>

    </div>
  );
}

export default App;
