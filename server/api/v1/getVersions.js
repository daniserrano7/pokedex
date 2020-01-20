const router = require('express').Router();

router.get('/versions', (req, res) => {
    const query = {
        text: `
            SELECT
                v.identifier,
                vn.name as version,
                gn.name as gen
            FROM
                versions v
            INNER JOIN version_names vn ON vn.version_id = v.id
            INNER JOIN languages l_version ON l_version.id = vn.local_language_id AND l_version.identifier = $lang
            INNER JOIN version_groups vg ON vg.id = v.version_group_id
            INNER JOIN generation_names gn ON gn.generation_id = vg.generation_id
            INNER JOIN languages l_gen ON l_gen.id = gn.local_language_id AND l_gen.identifier = $lang
            ;
        `,
        params: {
            $lang: req.query.lang
        }
    };

    req.db.all(query.text, query.params, (err, rows) => {
        const result = [];
        rows.forEach(row => {
            let isGen = result.find(element => element.gen == row.gen);
            let versionData = {
                id: row.identifier,
                name: row.version
            };

            if (isGen) {isGen.versions.push(versionData);} 
            else {
                result.push({
                    gen: row.gen,
                    versions: [versionData]
                });
            }
        });
         
        res.json(result);
    });
});

module.exports = router;