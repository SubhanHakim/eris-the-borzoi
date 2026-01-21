const ViralSection = () => {
    return (
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
    );
};

export default ViralSection;
