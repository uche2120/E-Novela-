
import React, { useState, useRef, useCallback } from 'react';
import type { Book } from './types';
import { MOCK_BOOKS } from './constants';
import Header from './components/Header';
import Hero from './components/Hero';
import Trending from './components/Trending';
import Recommended from './components/Recommended';
import HowItWorks from './components/HowItWorks';
import BecomeWriterSection from './components/BecomeWriterSection';
import Footer from './components/Footer';
import BookModal from './components/BookModal';
import WriterModal from './components/WriterModal';

const App: React.FC = () => {
    const [isBookModalOpen, setBookModalOpen] = useState(false);
    const [isWriterModalOpen, setWriterModalOpen] = useState(false);
    const [selectedBook, setSelectedBook] = useState<Book | null>(null);

    const trendingRef = useRef<HTMLDivElement>(null);
    const writerRef = useRef<HTMLDivElement>(null);
    const homeRef = useRef<HTMLDivElement>(null);

    const handleOpenBookModal = useCallback((book: Book) => {
        setSelectedBook(book);
        setBookModalOpen(true);
    }, []);

    const handleCloseBookModal = useCallback(() => {
        setBookModalOpen(false);
        setSelectedBook(null);
    }, []);

    const handleOpenWriterModal = useCallback(() => {
        setWriterModalOpen(true);
    }, []);
    
    const handleCloseWriterModal = useCallback(() => {
        setWriterModalOpen(false);
    }, []);

    const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="bg-white text-gray-800">
            <Header
                onScrollToTrending={() => scrollToSection(trendingRef)}
                onScrollToWriter={() => scrollToSection(writerRef)}
                onScrollToHome={() => scrollToSection(homeRef)}
            />
            <main>
                <div ref={homeRef}>
                    <Hero
                        onScrollToTrending={() => scrollToSection(trendingRef)}
                        onScrollToWriter={() => scrollToSection(writerRef)}
                    />
                </div>
                <div ref={trendingRef}>
                    <Trending books={MOCK_BOOKS.slice(0, 6)} onReadClick={handleOpenBookModal} />
                </div>
                <Recommended books={MOCK_BOOKS.slice(2)} onReadClick={handleOpenBookModal} />
                <HowItWorks />
                <div ref={writerRef}>
                    <BecomeWriterSection onApplyClick={handleOpenWriterModal} />
                </div>
            </main>
            <Footer />

            {selectedBook && (
                <BookModal
                    isOpen={isBookModalOpen}
                    onClose={handleCloseBookModal}
                    book={selectedBook}
                />
            )}

            <WriterModal
                isOpen={isWriterModalOpen}
                onClose={handleCloseWriterModal}
            />
        </div>
    );
};

export default App;
