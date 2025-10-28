
import React from 'react';

interface WriterModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const WriterModal: React.FC<WriterModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative transform transition-all duration-300 scale-95 animate-scale-in p-8 text-center">
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Become a Verified Writer</h2>
                <p className="text-gray-600 mb-6">
                    To join our author community, please get in touch with our editorial team through one of the following methods.
                </p>
                <div className="text-left space-y-4">
                    <p><strong>Phone/WhatsApp:</strong> <a href="tel:+2340000000000" className="text-purple-600 hover:underline">+234 ***</a></p>
                    <p><strong>Email:</strong> <a href="mailto:info@enovela.com" className="text-purple-600 hover:underline">info@enovela.com</a></p>
                </div>
                 <button onClick={onClose} className="mt-8 bg-orange-500 text-white font-semibold py-2 px-8 rounded-full shadow-md hover:bg-purple-600 transition duration-300">
                    Got it!
                </button>
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

export default WriterModal;
