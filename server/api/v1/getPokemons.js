const router = require('express').Router();

router.get('/pokemons', (req, res) => {
    const query = {
        text: `
            SELECT
                p.id,
                pokemon_species_names.name AS name,
                t1.identifier AS type_identifier_1,
                tn1.name AS type_name_1,
                t2.identifier AS type_identifier_2,
                tn2.name AS type_name_2
            FROM
                pokemon p
                
            -- JOINS FOR POKEMON ID AND TRANSLATED NAME
            INNER JOIN pokemon_game_indices ON pokemon_game_indices.pokemon_id = p.id
            INNER JOIN versions ON versions.id = pokemon_game_indices.version_id AND versions.identifier = $version
            INNER JOIN pokemon_species_names ON pokemon_species_names.pokemon_species_id = p.id
            INNER JOIN languages lang_pokemon ON lang_pokemon.id = pokemon_species_names.local_language_id AND lang_pokemon.identifier = $lang
            
            -- JOINS FOR FIRST TYPE
            INNER JOIN pokemon_types pt1 ON pt1.pokemon_id = p.id AND pt1.slot = 1
            INNER JOIN types t1 ON t1.id = pt1.type_id
            INNER JOIN type_names tn1 ON tn1.type_id = t1.id
            INNER JOIN languages lang_type1 ON lang_type1.id = tn1.local_language_id AND lang_type1.identifier = $lang
            
            -- JOINS FOR SECOND TYPE
            LEFT JOIN pokemon_types pt2 ON pt2.pokemon_id = p.id AND pt2.slot = 2
            LEFT JOIN types t2 ON t2.id = pt2.type_id
            LEFT JOIN type_names tn2 ON tn2.type_id = pt2.type_id
            LEFT JOIN languages lang_type2 ON lang_type2.id = tn2.local_language_id
            
            WHERE lang_type2.identifier = $lang OR lang_type2.identifier IS NULL
            --LIMIT 10
            ;
        `,
        params: {
            $version: req.query.version,
            $lang: req.query.lang
        }
    };

    const result = [];
    req.db.each(query.text, query.params, (err, row) => {
        let element = {
            id: row.id,
            name: row.name,
            types: []
        };

        if (row.type_identifier_1) {element.types.push({id: row.type_identifier_1, name: row.type_name_1})}
        if (row.type_identifier_2) {element.types.push({id: row.type_identifier_2, name: row.type_name_2})}

        result.push(element);
    }, (err, rows) => {
        res.json(result);
    });
});

module.exports = router;