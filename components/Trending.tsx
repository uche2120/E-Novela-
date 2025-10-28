
import React from 'react';
import type { Book } from '../types';
import BookCard from './BookCard';
import { FireIcon } from './icons/Icons';

interface TrendingProps {
    books: Book[];
    onReadClick: (book: Book) => void;
}

const Trending: React.FC<TrendingProps> = ({ books, onReadClick }) => {
    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center mb-8">
                     <FireIcon className="w-8 h-8 text-orange-500 mr-2"/>
                    <h2 className="text-3xl font-bold text-gray-900">Trending Novels</h2>
                </div>
                <div className="flex overflow-x-auto space-x-6 pb-4 -mx-4 px-4">
                    {books.map(book => (
                        <div key={book.id} className="flex-shrink-0 w-64">
                             <BookCard book={book} onReadClick={onReadClick} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Trending;
