const WhoIsEris = () => {
    return (
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
    );
};

export default WhoIsEris;
