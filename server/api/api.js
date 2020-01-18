import routes from './router';

const router = require('express').Router();
const version = 'v1';


router.use(`/api/${version}`, routes(version));

export default router;