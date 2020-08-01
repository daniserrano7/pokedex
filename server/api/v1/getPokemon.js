const router = require('express').Router();

router.get('/pokemon/:id', (req, res) => {
    res.send(req.params.id);
});

module.exports = router;