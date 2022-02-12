const Router = require('express');
const router = new Router();
const cardController = require('../controllers/cardController');

router.post('/', cardController.create);
router.get('/', cardController.getAll);
router.patch('/:id', cardController.update)
router.delete('/deleteByBoardId/:id', cardController.deleteAll);
router.delete('/:id', cardController.deleteById);

module.exports = router