export interface Book {
    id: number;
    title: string;
    author: string;
    description: string;
    year: number;
}
export const books: Book[] = [
    {
        id: 1,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        description: "A novel about the serious issues of rape and racial inequality.",
        year: 1960
    },
    {
        id: 2,
        title: "1984",
        author: "George Orwell",
        description: "A dystopian social science fiction novel and cautionary tale about the dangers of totalitarianism.",
        year: 1949
    },
    {
        id: 3,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        description: "A novel that critiques the American Dream in a story of wealth, love, and tragedy.",
        year: 1925
    }
];// read-only

// re-assigned

