#  Simple E-commerce API

This project is a basic E-commerce REST API built using Node.js, Express, and MongoDB. It supports user authentication, product management, cart features, and order processing with two roles: **admin** and **customer**.

---

##  Features

- **User Authentication** using JWT
- **Role-based access** (`admin`, `customer`)
- **Product Management**
  - Admin can add, update, delete products
  - Customer can view products
- **Cart Management**
  - Add, remove, view products in the cart
- **Order Creation**
  - Create order from cart
- **Secure Routes** via token
- **Basic Frontend (Optional)** for UI interaction
- **Postman Tests** included

---

##  Installation

### 1. Clone the repo

```bash
git clone https://github.com/your-username/ecommerce-api.git
cd ecommerce-api
```

### 2. Install dependencies
```bash 
     npm install 
```

### 3. Setup environment variables
```bash 
Create a .env file in the root directory:
    PORT=5000
    MONGO_URI=mongodb://localhost:27017/ecommerce
    JWT_SECRET=your_jwt_secret
```

### 4. Start the server
```bash 
     npm start
```


##  API Endpoints

###  Auth

| Method | Route              | Description         |
|--------|--------------------|---------------------|
| POST   | /api/auth/register | Register new user   |
| POST   | /api/auth/login    | Login user & get JWT |

###  Products

| Method | Route             | Role  | Description      |
|--------|-------------------|-------|------------------|
| GET    | /api/products     | All   | List products    |
| POST   | /api/products     | Admin | Add new product  |
| PUT    | /api/products/:id | Admin | Update product   |
| DELETE | /api/products/:id | Admin | Delete product   |

###  Cart

| Method | Route         | Role     | Description         |
|--------|---------------|----------|---------------------|
| POST   | /api/cart/add | Customer | Add product to cart |
| GET    | /api/cart     | Customer | View user's cart    |

###  Orders

| Method | Route            | Role     | Description          |
|--------|------------------|----------|----------------------|
| POST   | /api/orders      | Customer | Place order from cart|
| GET    | /api/orders/my   | Customer | View own orders      |
| GET    | /api/orders      | Admin    | View all orders      |
