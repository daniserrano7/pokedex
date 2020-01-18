const router = require('express').Router()

router.get('/languages', (req, res) => {
    const query = `
        SELECT
            languages.identifier,
            language_names.name as lang
        FROM
            languages
        INNER JOIN language_names ON language_names.local_language_id = languages.id AND language_names.language_id = languages.id
        ORDER BY languages.identifier
        ;
    `;

    req.db.all(query, (err, rows) => {
        res.json(rows);
    });
});

module.exports = router;