
import React from 'react';

interface BecomeWriterSectionProps {
    onApplyClick: () => void;
}

const BecomeWriterSection: React.FC<BecomeWriterSectionProps> = ({ onApplyClick }) => {
    return (
        <section className="py-20 bg-purple-600 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-bold mb-4">Are You a Storyteller?</h2>
                <p className="text-lg max-w-2xl mx-auto mb-8">
                    Join our growing community of authors. Get your stories published and earn from your readers.
                </p>
                <button
                    onClick={onApplyClick}
                    className="bg-white text-purple-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-orange-500 hover:text-white transition duration-300 transform hover:scale-105 text-lg"
                >
                    Apply Now
                </button>
            </div>
        </section>
    );
};

export default BecomeWriterSection;
