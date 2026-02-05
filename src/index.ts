import express, { type Request, type Response } from "express";
import { books, type Book } from "./models/Book.js";
const app = express();
const hostName = "192.168.20.31";
const port = 9999;
app.use(express.json());
let nextId = 4;
app.get("/books", (req: Request, res: Response) => {
    res.status(200).json(books);
});

app.listen(port, hostName, () => {
    console.log(`Server running at http://${hostName}:${port}/`);
});
app.post('/books', (req: Request, res: Response) => {
    //destructuring
    const { title, author, description, year } = req.body;

    if (!title || !author || !description || !year) {
        return res.status(400).json({ message: "Missing fields" });

    }
    const newBook : Book = {
        id: nextId++,
        title,
        author,
        description,
        year: Number(year)
    };
    books.push(newBook);
    res.status(201).json(newBook);
});

app.get('/books/:id', (req: Request, res: Response) => {
    const id=Number(req.params.id);
    const book = books.find((b) => b.id === id);
    if (!book) {
        return res.status(404).json({ message: "Book Not Found" });
    }
    res.status(200).json(book);
});
app.patch('/books/:id', (req: Request, res: Response) => {
    const id=Number(req.params.id);
    const book = books.find((b) => b.id === id);
    if (!book) {
        return res.status(404).json({ message: "Book Not Found" });
    }
    const { title, author, description, year } = req.body;
    book.title = title || book.title;
    book.author = author || book.author;
    book.description = description || book.description;
    book.year = year ? Number(year) : book.year;
    res.status(200).json(book);
});
app.delete('/books/:id', (req: Request, res: Response) => {
    const id=Number(req.params.id);
    const index = books.findIndex((b) => b.id === id);
    if (index === -1) {
        return res.status(404).json({ message: "Book Not Found" });
    }
    const deletedBook = books.splice(index, 1)[0];
    res.status(200).json(deletedBook);
});