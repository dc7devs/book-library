import express from 'express';
import { uuid } from 'uuidv4';

export const routes = express.Router();
const obras = [];

routes.get('/obras', (req, res) => {
    return res.json(obras);
});

routes.post('/obras', (req, res) => {});

routes.put('/obras/:id', (req, res) => {});

routes.delete('/obras/:id', (req, res) => {});