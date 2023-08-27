// index.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const config = require('./config');

//middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/carapp')
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.error('MongoDB connection error:', error));



// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
