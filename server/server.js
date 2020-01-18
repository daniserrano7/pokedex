import express from 'express';
import router from './api/api';
import sqlite3 from 'sqlite3';

const app = express();
const port = 3000;
const db = new sqlite3.Database('../db/pokedex-db.sqlite');

app
    .use((req, res, next) => {
        req.db = db;
        next();
    })
    .use('/', router);

app.listen(port, () => console.log('Server running on port 3000'));
