const express = require('express');
const cors = require('cors');
const { errorHandler } = require('./utils/errorHandler');
const { loginUser } = require('./controllers/authController');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());


//Auth Routes
app.post('/login', loginUser)

// Root Route
app.get('/', (req, res) => {
  res.send('Welcome to Tabussum Mujahid - FYP Backend Server');
});

// Handle unknown routes
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Global error handler
app.use(errorHandler);

module.exports = app;
