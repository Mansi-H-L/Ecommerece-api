const router = require('express').Router();
const { auth } = require('../middlewares/authMiddleware');
const controller = require('../controllers/cartController');

router.get('/', auth, controller.getCart);
router.post('/', auth, controller.addToCart);
router.post("/add", auth, async (req, res) => {
    // logic here
});

router.delete('/:itemId', auth, controller.removeFromCart);

module.exports = router;
