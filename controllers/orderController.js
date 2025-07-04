const Order = require('../models/Order');
const Cart = require('../models/Cart');
const Product = require('../models/Product');

exports.placeOrder = async (req, res) => {
  try {
    const cartItems = await Cart.findAll({ where: { userId: req.user.id } });

    if (cartItems.length === 0) {
      return res.status(400).json({ message: 'Cart is empty' });
    }

    let totalPrice = 0;
    const orderItems = [];

    for (const item of cartItems) {
      const product = await Product.findByPk(item.productId);
      if (product) {
        const itemTotal = product.price * item.quantity;
        totalPrice += itemTotal;
        orderItems.push({
          productId: product.id,
          name: product.name,
          quantity: item.quantity,
          price: product.price
        });
      }
    }

    const order = await Order.create({
      userId: req.user.id,
      items: orderItems,
      totalPrice
    });

    await Cart.destroy({ where: { userId: req.user.id } });

    res.status(201).json({ message: 'Order placed successfully', order });
  } catch (error) {
    res.status(500).json({ message: 'Order creation failed', error });
  }
};

exports.getMyOrders = async (req, res) => {
  try {
    const orders = await Order.findAll({ where: { userId: req.user.id } });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Could not fetch orders' });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Could not fetch all orders' });
  }
};
