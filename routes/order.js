const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const authorize = require('../middleware/roleMiddleware');
const { placeOrder, getMyOrders, getAllOrders } = require('../controllers/orderController');

router.post('/', auth, placeOrder); 
router.get('/', auth, getMyOrders); 
router.get('/admin', auth, authorize('admin'), getAllOrders); // admin only

module.exports = router;
