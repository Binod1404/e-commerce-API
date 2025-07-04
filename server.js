const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const sequelize = require('./config/database');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Static Frontend Files
app.use(express.static(path.join(__dirname, '/frontend')));

// API Routes
app.use('/auth', require('./routes/auth'));
app.use('/products', require('./routes/product'));
app.use('/cart', require('./routes/cart'));
app.use('/orders', require('./routes/order'));

// Sync database
sequelize.sync().then(() => {
  console.log('PostgreSQL DB synced');
  // Start server
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
