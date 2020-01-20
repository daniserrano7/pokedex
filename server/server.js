import express from 'express';
import router from './api/api';
import sqlite3 from 'sqlite3';

const app = express();
const port = 8000;
const db = new sqlite3.Database('../db/pokedex-db.sqlite');

app
    .use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET, POST');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        
        req.db = db;
        next();
    })
    .use('/', router);

app.listen(port, () => console.log(`Server running on port ${port}`));
