
import React, { useState } from 'react';

interface HeaderProps {
    onScrollToHome: () => void;
    onScrollToTrending: () => void;
    onScrollToWriter: () => void;
}

const NavLink: React.FC<{ onClick: () => void; children: React.ReactNode }> = ({ onClick, children }) => (
    <button onClick={onClick} className="text-gray-600 hover:text-orange-500 transition duration-300 font-medium px-3 py-2">
        {children}
    </button>
);

const Header: React.FC<HeaderProps> = ({ onScrollToHome, onScrollToTrending, onScrollToWriter }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <h1 onClick={onScrollToHome} className="text-3xl font-bold text-gray-900 cursor-pointer">
                            E-<span className="text-orange-500">Novela</span>
                        </h1>
                    </div>
                    <div className="hidden md:flex items-center space-x-2">
                        <NavLink onClick={onScrollToHome}>Home</NavLink>
                        <NavLink onClick={onScrollToTrending}>Library</NavLink>
                        <NavLink onClick={onScrollToWriter}>Become a Writer</NavLink>
                        <button className="bg-orange-500 text-white font-semibold px-5 py-2 rounded-full shadow-md hover:bg-purple-600 transition duration-300 transform hover:scale-105">
                            Login / Signup
                        </button>
                    </div>
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800 hover:text-orange-500 focus:outline-none">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-white py-4">
                    <div className="flex flex-col items-center space-y-4">
                        <NavLink onClick={() => { onScrollToHome(); setIsMenuOpen(false); }}>Home</NavLink>
                        <NavLink onClick={() => { onScrollToTrending(); setIsMenuOpen(false); }}>Library</NavLink>
                        <NavLink onClick={() => { onScrollToWriter(); setIsMenuOpen(false); }}>Become a Writer</NavLink>
                        <button className="bg-orange-500 text-white font-semibold px-6 py-2 rounded-full shadow-md hover:bg-purple-600 transition duration-300">
                            Login / Signup
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
