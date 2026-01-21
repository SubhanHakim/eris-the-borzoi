const Tokenomics = () => {
    return (
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
                <span className="font-mono font-bold text-lg md:text-xl truncate">Coming Soon</span>
                <button className="bg-eris-green text-green-900 px-4 py-2 rounded-lg font-bold text-sm hover:bg-emerald-300">COPY</button>
            </div>
        </section>
    );
};

export default Tokenomics;
