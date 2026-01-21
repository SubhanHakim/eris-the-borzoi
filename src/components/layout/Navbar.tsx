interface NavbarProps {
    luckDragonMode: boolean;
    toggleMode: () => void;
}

const Navbar = ({ luckDragonMode, toggleMode }: NavbarProps) => {
    return (
        <nav className="fixed top-0 w-full z-50 px-6 py-4 glass-nav">
            <div className="max-w-6xl mx-auto flex justify-between items-center bg-white/40 backdrop-blur-md rounded-full px-6 py-3 shadow-sm border border-white/50">
                <div className="text-2xl font-display font-bold text-eris-sky drop-shadow-sm flex items-center gap-2">
                    <span>🐉</span> ERIS THE BORZOI
                </div>
                <div className="hidden md:flex gap-8 font-display text-gray-700 font-medium">
                    <a href="#who" className="hover:text-eris-sky transition-colors cursor-pointer">Who?</a>
                    <a href="#why" className="hover:text-eris-pink transition-colors cursor-pointer">Why?</a>
                    <a href="#token" className="hover:text-eris-green transition-colors cursor-pointer">$ERIS</a>
                </div>
                <button
                    onClick={toggleMode}
                    className={`px-4 py-2 rounded-full font-bold text-sm transition-all transform hover:scale-105 active:scale-95 ${luckDragonMode ? 'bg-eris-yellow text-amber-800 shadow-[0_0_15px_rgba(253,230,138,0.6)]' : 'bg-eris-sky text-white'}`}
                >
                    {luckDragonMode ? '✨ LUCK MODE ON ✨' : 'Activate Luck Dragon'}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
