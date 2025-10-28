
import type { Book } from './types';

export const NAV_LINKS = [
    { name: 'Home', href: '#home' },
    { name: 'Library', href: '#trending' },
    { name: 'Become a Writer', href: '#writer' },
];

export const MOCK_BOOKS: Book[] = [
    {
        id: 1,
        title: "The Shadow of the Oracle",
        author: "J.K. Rowling",
        genre: "Fantasy",
        views: "1.2M",
        coverUrl: "https://picsum.photos/seed/book1/400/600",
    },
    {
        id: 2,
        title: "Cybernetic Dreams",
        author: "Isaac Asimov",
        genre: "Sci-Fi",
        views: "980K",
        coverUrl: "https://picsum.photos/seed/book2/400/600",
    },
    {
        id: 3,
        title: "Echoes of the Past",
        author: "Agatha Christie",
        genre: "Mystery",
        views: "2.5M",
        coverUrl: "https://picsum.photos/seed/book3/400/600",
    },
    {
        id: 4,
        title: "The Last Alchemist",
        author: "Brandon Sanderson",
        genre: "Fantasy",
        views: "850K",
        coverUrl: "https://picsum.photos/seed/book4/400/600",
    },
    {
        id: 5,
        title: "Love in the Time of Pixels",
        author: "Jane Austen",
        genre: "Romance",
        views: "3.1M",
        coverUrl: "https://picsum.photos/seed/book5/400/600",
    },
    {
        id: 6,
        title: "A Realm of Kings",
        author: "George R.R. Martin",
        genre: "Adventure",
        views: "4.2M",
        coverUrl: "https://picsum.photos/seed/book6/400/600",
    },
    {
        id: 7,
        title: "The Quantum Thief",
        author: "Hannu Rajaniemi",
        genre: "Sci-Fi",
        views: "720K",
        coverUrl: "https://picsum.photos/seed/book7/400/600",
    },
    {
        id: 8,
        title: "Whispers of the Heart",
        author: "Nicholas Sparks",
        genre: "Romance",
        views: "1.8M",
        coverUrl: "https://picsum.photos/seed/book8/400/600",
    }
];
