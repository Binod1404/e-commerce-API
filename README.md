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

3. Configure environment variables
  Rename .env.example to .env

  Fill in your DB credentials

4. Install dependencies & start the server
  npm install
  node server.js
This will:

Sync tables

Serve API at http://localhost:5000

Serve frontend from /frontend

5. Open the frontend in browser
  http://localhost:5000/index.html
  Also visit: login.html, register.html, cart.html, admin.html, etc.


