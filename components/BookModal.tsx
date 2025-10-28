
import React, { useState, useEffect } from 'react';
import type { Book } from '../types';
import { CurrencyDollarIcon, VideoCameraIcon, CheckCircleIcon } from './icons/Icons';

interface BookModalProps {
    isOpen: boolean;
    onClose: () => void;
    book: Book;
}

type AdState = 'idle' | 'watching' | 'finished';

const BookModal: React.FC<BookModalProps> = ({ isOpen, onClose, book }) => {
    const [adState, setAdState] = useState<AdState>('idle');
    const [countdown, setCountdown] = useState(60);

    useEffect(() => {
        if (adState === 'watching' && countdown > 0) {
            const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
            return () => clearTimeout(timer);
        } else if (adState === 'watching' && countdown === 0) {
            setAdState('finished');
            const unlockedBooks = JSON.parse(localStorage.getItem('unlockedBooks') || '[]');
            if (!unlockedBooks.includes(book.id)) {
                unlockedBooks.push(book.id);
                localStorage.setItem('unlockedBooks', JSON.stringify(unlockedBooks));
            }
        }
    }, [adState, countdown, book.id]);

    const handleWatchAd = () => {
        setAdState('watching');
        setCountdown(60);
    };

    const handleClose = () => {
        setAdState('idle');
        setCountdown(60);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg relative transform transition-all duration-300 scale-95 animate-scale-in">
                <button onClick={handleClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                
                {adState === 'idle' && (
                    <div className="p-8 text-center">
                        <img src={book.coverUrl} alt={book.title} className="w-40 h-60 mx-auto rounded-lg shadow-lg mb-4" />
                        <h2 className="text-2xl font-bold text-gray-900">{book.title}</h2>
                        <p className="text-md text-gray-500 mb-6">{book.author}</p>
                        <div className="space-y-4">
                            <button className="w-full bg-green-500 text-white font-semibold py-3 px-6 rounded-full shadow-md hover:bg-green-600 transition duration-300 flex items-center justify-center space-x-2">
                                <CurrencyDollarIcon className="w-6 h-6"/>
                                <span>Buy to Read (₦2.00)</span>
                            </button>
                            <button onClick={handleWatchAd} className="w-full bg-orange-500 text-white font-semibold py-3 px-6 rounded-full shadow-md hover:bg-purple-600 transition duration-300 flex items-center justify-center space-x-2">
                                <VideoCameraIcon className="w-6 h-6"/>
                                <span>Watch Ad (1 Minute) to Unlock</span>
                            </button>
                        </div>
                    </div>
                )}

                {adState === 'watching' && (
                    <div className="p-8 text-center h-80 flex flex-col items-center justify-center">
                         <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-orange-500 mb-4"></div>
                         <h3 className="text-xl font-semibold">Ad playing...</h3>
                         <p className="text-4xl font-bold my-4">{countdown}s</p>
                         <p className="text-gray-500">Please wait for the ad to finish.</p>
                    </div>
                )}

                {adState === 'finished' && (
                    <div className="p-8 text-center h-80 flex flex-col items-center justify-center">
                        <CheckCircleIcon className="w-20 h-20 text-green-500 mb-4 animate-pulse"/>
                        <h3 className="text-2xl font-bold text-green-500">Ad Watched!</h3>
                        <p className="text-lg text-gray-700 mt-2">Book unlocked for 1 hour.</p>
                        <button onClick={handleClose} className="mt-6 bg-gray-800 text-white font-semibold py-2 px-8 rounded-full shadow-md hover:bg-gray-900 transition duration-300">
                            Start Reading
                        </button>
                    </div>
                )}
            </div>
            <style jsx>{`
                @keyframes scale-in {
                    from { opacity: 0; transform: scale(0.95); }
                    to { opacity: 1; transform: scale(1); }
                }
                .animate-scale-in {
                    animation: scale-in 0.3s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

export default BookModal;
