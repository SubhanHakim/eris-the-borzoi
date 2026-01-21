const Roadmap = () => {
    return (
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
    );
};

export default Roadmap;
