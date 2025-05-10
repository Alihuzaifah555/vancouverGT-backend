// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Define the port for the app
const PORT = process.env.PORT || 3000;

// MongoDB connection URI (Replace with your actual MongoDB URI)
const mongoURI = 'mongodb://localhost:27017/mydatabase'; // Replace 'mydatabase' with your db name

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB', err);
  });

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
