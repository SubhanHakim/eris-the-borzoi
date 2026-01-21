import erisImage from '../../assets/eris.jpg';

const Hero = () => {
    return (
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
                        Strange creature. Infinitely excited. Content to nap.

                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <button className="px-8 py-4 bg-gray-900 text-white rounded-2xl text-xl font-bold hover:bg-gray-800 transform hover:-translate-y-1 transition-all shadow-xl hover:shadow-2xl">
                            <a href="#" target="_blank">Buy $ERIS</a>
                        </button>
                        <button className="px-8 py-4 bg-white text-gray-900 border-2 border-gray-200 rounded-2xl text-xl font-bold hover:bg-gray-50 transform hover:-translate-y-1 transition-all">
                            <a href="https://x.com/i/communities/2013951530936991842" target="_blank">Join Cult 🐕</a>
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
    );
};

export default Hero;
