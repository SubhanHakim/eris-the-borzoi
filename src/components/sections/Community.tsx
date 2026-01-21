const Community = () => {
    return (
        <section className="py-32 px-4 text-center">
            <div className="max-w-4xl mx-auto bg-gray-900 text-white rounded-[3rem] p-12 md:p-20 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

                <div className="relative z-10">
                    <h2 className="text-5xl md:text-7xl font-black mb-8 group-hover:scale-105 transition-transform duration-500">JOIN THE PACK 🐕</h2>
                    <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
                        We are awkward. We are long. We are family.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <button className="bg-eris-pink text-gray-900 px-8 py-4 rounded-2xl font-bold text-xl hover:bg-white hover:scale-110 transition-all shadow-lg shadow-eris-pink/30">
                            <a href="#">X Community</a>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Community;
