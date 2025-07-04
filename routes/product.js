const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const authorize = require('../middleware/roleMiddleware');
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct
} = require('../controllers/productController');

// Public route – anyone can view products
router.get('/', getAllProducts);

// Admin routes – require authentication and admin role
router.post('/', auth, authorize('admin'), createProduct);
router.put('/:id', auth, authorize('admin'), updateProduct);
router.delete('/:id', auth, authorize('admin'), deleteProduct);

module.exports = router;
