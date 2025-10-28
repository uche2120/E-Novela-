
import React from 'react';
import { VideoCameraIcon, CurrencyDollarIcon, PencilIcon } from './icons/Icons';

const InfoCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="bg-white p-8 rounded-2xl shadow-lg text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl">
        <div className="flex items-center justify-center h-16 w-16 mx-auto mb-6 rounded-full bg-orange-100 text-orange-500">
            {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

const HowItWorks: React.FC = () => {
    return (
        <section className="py-20 bg-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900">How E-Novela Works</h2>
                    <p className="text-lg text-gray-600 mt-2">A simple and flexible way to enjoy stories.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <InfoCard
                        icon={<VideoCameraIcon className="w-8 h-8" />}
                        title="Read for Free"
                        description="Watch a 1-minute ad to unlock stories and enjoy them without any cost."
                    />
                    <InfoCard
                        icon={<CurrencyDollarIcon className="w-8 h-8" />}
                        title="Buy & Read Anytime"
                        description="Purchase stories for a small fee for an ad-free experience and offline access."
                    />
                    <InfoCard
                        icon={<PencilIcon className="w-8 h-8" />}
                        title="Publish & Earn"
                        description="Become an author on our platform, publish your stories, and earn from your readers."
                    />
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
