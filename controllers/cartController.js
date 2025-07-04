const Cart = require('../models/Cart');

// GET /cart
exports.getCart = async (req, res) => {
  try {
    const cartItems = await Cart.findAll({ where: { userId: req.user.id } });
    res.json(cartItems);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch cart' });
  }
};

// POST /cart
exports.addToCart = async (req, res) => {
  const { productId, quantity } = req.body;
  try {
    const cartItem = await Cart.create({ userId: req.user.id, productId, quantity });
    res.status(201).json(cartItem);
  } catch (err) {
    res.status(500).json({ message: 'Failed to add to cart' });
  }
};

// PUT /cart/:itemId
exports.updateCartItem = async (req, res) => {
  const { quantity } = req.body;
  try {
    const item = await Cart.findOne({ where: { id: req.params.itemId, userId: req.user.id } });
    if (!item) return res.status(404).json({ message: 'Item not found' });
    item.quantity = quantity;
    await item.save();
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: 'Failed to update item' });
  }
};

// DELETE /cart/:itemId
exports.removeCartItem = async (req, res) => {
  try {
    const deleted = await Cart.destroy({ where: { id: req.params.itemId, userId: req.user.id } });
    res.json({ success: !!deleted });
  } catch (err) {
    res.status(500).json({ message: 'Failed to remove item' });
  }
};
