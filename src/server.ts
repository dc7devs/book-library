import express from 'express';
import { routes } from './routes';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(process.env.port || 3000, () => {
    console.log('HTTP server runing...');
});