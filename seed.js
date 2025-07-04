const bcrypt = require('bcrypt');
const sequelize = require('./config/database');
const User = require('./models/User');
const Product = require('./models/Product');

async function seed() {
  try {
    await sequelize.sync({ force: true }); // Wipes all tables and recreates them

    console.log('📦 Database synced');

    const hashedPassword = await bcrypt.hash('password123', 10);

    const admin = await User.create({
      username: 'admin',
      email: 'admin@example.com',
      password: hashedPassword,
      role: 'admin'
    });

    const customer = await User.create({
      username: 'customer',
      email: 'customer@example.com',
      password: hashedPassword,
      role: 'customer'
    });

    await Product.bulkCreate([
      {
        name: 'iPhone 14',
        description: 'Latest iPhone model',
        category: 'electronics',
        price: 79999,
        stock: 30
      },
      {
        name: 'Samsung M14',
        description: 'Affordable Android phone',
        category: 'electronics',
        price: 13999,
        stock: 40
      },
      {
        name: 'HP Pavilion Laptop',
        description: 'High performance laptop',
        category: 'electronics',
        price: 59999,
        stock: 20
      }
    ]);

    console.log('✅ Seeded successfully');
    console.log('🔐 Admin Login → admin@example.com / password123');
    console.log('🙋‍♂️ Customer Login → customer@example.com / password123');
  } catch (err) {
    console.error('❌ Seeding failed:', err.message);
  } finally {
    await sequelize.close();
  }
}

seed();
