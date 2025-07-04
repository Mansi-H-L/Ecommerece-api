const Product = require('../models/Product');

exports.getAll = async (req, res) => {
  const { page = 1, limit = 10, search, category } = req.query;
  const query = {};
  if (search) query.name = { $regex: search, $options: 'i' };
  if (category) query.category = category;

  const products = await Product.find(query)
    .skip((page - 1) * limit)
    .limit(parseInt(limit));
  res.json(products);
};

exports.add = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json(product);
};

exports.update = async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(product);
};

exports.remove = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
};
