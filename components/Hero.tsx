
import React from 'react';

interface HeroProps {
    onScrollToTrending: () => void;
    onScrollToWriter: () => void;
}

const Hero: React.FC<HeroProps> = ({ onScrollToTrending, onScrollToWriter }) => {
    return (
        <section className="relative bg-gray-900 text-white h-[85vh] flex items-center justify-center text-center">
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40" style={{ backgroundImage: "url('https://picsum.photos/seed/hero/1600/900')" }}></div>
            <div className="relative z-10 p-4">
                <h2 className="text-4xl md:text-6xl font-bold mb-4 leading-tight shadow-text">
                    Discover, Read & Publish Inspiring Stories.
                </h2>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto shadow-text">
                    Buy or Watch an Ad to Unlock Stories Instantly.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <button onClick={onScrollToTrending} className="bg-orange-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-purple-600 transition duration-300 transform hover:scale-105 text-lg">
                        🧡 Start Reading
                    </button>
                    <button onClick={onScrollToWriter} className="bg-gray-100 text-gray-800 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-purple-600 hover:text-white transition duration-300 transform hover:scale-105 text-lg">
                        💼 Become a Writer
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
