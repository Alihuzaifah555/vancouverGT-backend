const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const routes = require('./routes/routes');

// Enable CORS
app.use(cors());

// Middleware
app.use(express.json());

// Routes
app.use('/api', routes);

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/vancouvergt')
  .then(() => console.log('Connected to MongoDB!'))
  .catch(err => console.error('MongoDB connection error:', err));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
