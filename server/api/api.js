const routes = require('./router');

const router = require('express').Router();
const version = 'v1';


router.use(`/api/${version}`, routes(version));

module.exports = router;