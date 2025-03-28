const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
app.use(express.json());

const bookRoutes = require('./routes/bookRoutes');

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected2"))
  .catch((err) => console.log(err));


app.use('/api/books', bookRoutes);

app.listen(6000, () => {
    console.log('Server running on http://localhost:6000');
  });


//   const express = require('express');
// const mongoose = require('mongoose');
// require('dotenv').config();
// const userRoutes = require('./routes/userRoutes');
// const productRoutes = require('./routes/productRoutes');

// const app = express();
// app.use(express.json());

// // MongoDB Connection
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log("MongoDB Connected2"))
//   .catch((err) => console.log(err));

// // Routes
// app.use('/api/users', userRoutes);
// app.use('/api/products', productRoutes);

// app.listen(5000, () => {
//   console.log('Server running on http://localhost:5000');
// });
  