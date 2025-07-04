const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');
const cartRoutes = require('./routes/cart');
const orderRoutes = require('./routes/orders');

dotenv.config(); // This loads .env variables before anything else

const app = express();
app.use(express.json());
app.use("/api", productRoutes);           // Accept JSON body

// Route groups
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);

mongoose.connect(process.env.MONGO_URI)

.then(() => {
  console.log("MongoDB connected");
  app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
})
.catch(err => console.error("MongoDB connection error:", err));



