const express = require('express');
const sqlite3 = require('sqlite3');
const api = require('./api/api');

const app = express();
const port = 8000;
const db = new sqlite3.Database('db/pokedex-db.sqlite');

app
    .use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET, POST');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        
        req.db = db;
        next();
    })
    .use('/', api);

app.listen(port, () => console.log(`Server running on port ${port}`));
