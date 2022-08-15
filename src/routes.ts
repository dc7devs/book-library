import express from 'express';
import { uuid } from 'uuidv4';

interface Author {
    name: string;
}
 
interface LiteraryBookProps {
    id: string;
    title: string;
    publishingCompany: string;
    photo?: string;
    authors: Author[];
}

export const routes = express.Router();
const Libry:Array<LiteraryBookProps> = [];

routes.get('/literary-books', (req, res) => {
    return res.json(Libry);
});

routes.post('/literary-books', (req, res) => {
    const { 
        title, 
        publishingCompany, 
        photo, 
        authors
    } : LiteraryBookProps = req.body;

    const newLiteraryBook : LiteraryBookProps = {
        id: uuid(),
        title,
        publishingCompany,
        photo,
        authors
    }

    Libry.push(newLiteraryBook);
    return res.status(201).send(newLiteraryBook);
});

routes.put('/literary-books/:id', (req, res) => {
    const { id } = req.params;
    const { 
        title, 
        publishingCompany, 
        photo, 
        authors
    } : LiteraryBookProps = req.body;

    const updateLiteraryBook : LiteraryBookProps = {
        id,
        title,
        publishingCompany,
        photo,
        authors
    }

    const indexBook = Libry.findIndex(book => book.id === id);

    Libry[indexBook] = updateLiteraryBook;

    return res.json(updateLiteraryBook);
});