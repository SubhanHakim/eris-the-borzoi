const Marquee = () => {
    const MarqueeContent = () => (
        <div className="flex gap-8 items-center shrink-0 animate-marquee min-w-full text-amber-900 font-bold text-2xl font-display">
            <span>STRANGE CREATURE</span> ✦ <span>INFINITELY EXCITED</span> ✦ <span>CONTENT TO NAP</span> ✦ <span>LONG SNOOT ENERGY</span> ✦ <span>STRANGE CREATURE</span> ✦ <span>INFINITELY EXCITED</span> ✦ <span>CONTENT TO NAP</span> ✦ <span>LONG SNOOT ENERGY</span> ✦
        </div>
    );

    return (
        <div className="bg-eris-yellow py-4 overflow-hidden -rotate-1 border-y-4 border-white shadow-sm flex gap-8">
            <MarqueeContent />
            <MarqueeContent />
        </div>
    );
};

export default Marquee;
