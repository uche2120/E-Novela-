
import React from 'react';
import type { Book } from '../types';
import { EyeIcon, BookOpenIcon, TagIcon } from './icons/Icons';

interface BookCardProps {
    book: Book;
    onReadClick: (book: Book) => void;
}

const BookCard: React.FC<BookCardProps> = ({ book, onReadClick }) => {
    return (
        <div className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden flex flex-col group">
            <div className="relative">
                <img src={book.coverUrl} alt={book.title} className="w-full h-64 object-cover" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                     <button
                        onClick={() => onReadClick(book)}
                        className="bg-orange-500 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:bg-purple-600 transition duration-300 transform hover:scale-110"
                    >
                        Read
                    </button>
                </div>
            </div>
            <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-gray-900 truncate">{book.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{book.author}</p>
                <div className="mt-auto flex justify-between items-center text-xs text-gray-500">
                    <span className="flex items-center space-x-1">
                        <TagIcon className="w-4 h-4 text-purple-600"/>
                        <span>{book.genre}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                        <EyeIcon className="w-4 h-4 text-orange-500"/>
                        <span>{book.views}</span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default BookCard;
