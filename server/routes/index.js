const Router = require('express');
const router = new Router();
const listRouter = require('./listRouter');
const cardRouter = require('./cardRouter');

router.use('/list', listRouter);
router.use('/card', cardRouter);

module.exports = router;