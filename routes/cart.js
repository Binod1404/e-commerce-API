const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const {
  getCart,
  addToCart,
  updateCartItem,
  removeCartItem
} = require('../controllers/cartController');

router.get('/', auth, getCart);
router.post('/', auth, addToCart);
router.put('/:itemId', auth, updateCartItem);
router.delete('/:itemId', auth, removeCartItem);

module.exports = router;
