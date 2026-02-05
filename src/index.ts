import express, { type Request, type Response } from "express";
import { books } from "./models/Book.js";
const app = express();
const hostName = "192.168.20.31";
const port = 9999;
app.use(express.json());

app.get("/books", (req: Request, res: Response) => {
    res.status(200).json(books);
});

app.listen(port, hostName, () => {
    console.log(`Server running at http://${hostName}:${port}/`);
});