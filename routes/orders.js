const router = require('express').Router();
const { auth } = require('../middlewares/authMiddleware');
const controller = require('../controllers/orderController');

router.post('/', auth, controller.createOrder);

module.exports = router;
