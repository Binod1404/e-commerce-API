const Product = require('../models/Product');

// GET /products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching products' });
  }
};

// POST /products
exports.createProduct = async (req, res) => {
  const { name, description, category, price, stock } = req.body;
  try {
    const product = await Product.create({ name, description, category, price, stock });
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create product' });
  }
};

// PUT /products/:id
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    await product.update(req.body);
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: 'Failed to update product' });
  }
};

// DELETE /products/:id
exports.deleteProduct = async (req, res) => {
  try {
    const deleted = await Product.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ message: 'Product not found' });

    res.json({ message: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete product' });
  }
};
