
import React from 'react';
import { MailIcon, PhoneIcon } from './icons/Icons';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4">E-<span className="text-orange-500">Novela</span></h2>
                        <p className="text-sm">Discover, Read & Publish Inspiring Stories.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#trending" className="hover:text-orange-500 transition-colors">Library</a></li>
                            <li><a href="#writer" className="hover:text-orange-500 transition-colors">Become a Writer</a></li>
                            <li><a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-orange-500 transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center space-x-2">
                                <MailIcon className="w-5 h-5" />
                                <a href="mailto:info@enovela.com" className="hover:text-orange-500 transition-colors">info@enovela.com</a>
                            </li>
                            <li className="flex items-center space-x-2">
                                <PhoneIcon className="w-5 h-5" />
                                <a href="tel:+2340000000000" className="hover:text-orange-500 transition-colors">+234 ***</a>
                            </li>
                        </ul>
                    </div>
                     <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                           {/* Social Icons Placeholder */}
                           <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">X</a>
                           <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">F</a>
                           <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">I</a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} E-Novela. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
