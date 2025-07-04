E-commerce API with Authentication and Cart Management

This is a simple full-stack E-commerce API built with Node.js, Express, PostgreSQL (Sequelize), and JWT authentication. It allows users to register, login, browse products, manage a shopping cart, place orders, and provides admin routes for product management.


## 🧰 Tech Stack

- **Backend**: Node.js, Express, PostgreSQL, Sequelize
- **Authentication**: JWT-based with role-based access (`customer`, `admin`)
- **Frontend**: HTML + JS (Fetch API)

---

Getting Started

1. Clone the repository

2. Set up the database
  Create a PostgreSQL database (e.g. ecommerce_db)
  Make sure PostgreSQL is running

3. Set up the database
  Create a PostgreSQL database (e.g. ecommerce)
  Make sure PostgreSQL is running

4. Configure environment variables
   
  Rename .env.example to .env

  Fill in your DB credentials

5. Install dependencies & start the server

  npm install

  node server.js
  
This will:

Sync tables

Serve API at http://localhost:5000

Serve frontend from /frontend

6. Open the frontend in browser
  http://localhost:5000/index.html
  Also visit: login.html, register.html, cart.html, admin.html, etc.

Seeding the Database (Optional but Recommended)
To populate your database with sample users and products, follow these steps:

🔧 Step 1: Make sure your PostgreSQL server is running


🔧 Step 2: Run the seed script

  node seed.js
  
This will:

Sync your database schema (drops existing tables)

Create:

✅ 1 Admin user (admin@example.com / password123)

✅ 1 Customer user (customer@example.com / password123)

✅ 3 sample products

⚠️ Note: This will clear all existing data using { force: true }. Remove force: true if you don’t want that.

🔐 Login Credentials Created
Role	Email	Password
Admin	admin@example.com	password123
Customer	customer@example.com	password123



![App preview]([https://i.imgur.com/abc123.png](https://drive.google.com/file/d/1jpsI_Z97TGuqzgyeG_o55KB2l3p_BUOO/view?usp=sharing))

