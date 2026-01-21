const WhyCoin = () => {
    return (
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
    );
};

export default WhyCoin;
