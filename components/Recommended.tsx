
import React from 'react';
import type { Book } from '../types';
import BookCard from './BookCard';
import { StarIcon } from './icons/Icons';


interface RecommendedProps {
    books: Book[];
    onReadClick: (book: Book) => void;
}

const Recommended: React.FC<RecommendedProps> = ({ books, onReadClick }) => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center mb-8">
                    <StarIcon className="w-8 h-8 text-orange-500 mr-2"/>
                    <h2 className="text-3xl font-bold text-gray-900">Recommended For You</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {books.map(book => (
                        <BookCard key={book.id} book={book} onReadClick={onReadClick} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Recommended;
