const router = require('express').Router();

router.get('/types', (req, res) => {
    const query = {
        text: `
            SELECT
                types.identifier as id,
                type_names.name
            FROM
                types
            INNER JOIN type_names ON type_names.type_id = types.id
            INNER JOIN languages ON languages.id = type_names.local_language_id AND languages.identifier = $lang
            ;
        `,
        params: {
            $lang: req.query.lang
        }
    }

    req.db.all(query.text, query.params, (err, rows) => {
        res.json(rows);
    });
});

module.exports = router;