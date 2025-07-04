const router = require('express').Router();
const { auth, isAdmin } = require('../middlewares/authMiddleware');
const controller = require('../controllers/productController');

router.get('/', controller.getAll);
router.post('/', auth, isAdmin, controller.add);
router.put('/:id', auth, isAdmin, controller.update);
router.delete('/:id', auth, isAdmin, controller.remove);

const express = require('express');
const Product = require('../models/Product');

// Public Route – Get All Products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find(); // Fetch all products
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
module.exports = router;
