const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');

const router = express.Router();

// User Authentication Routes
router.post('/register', registerUser); // Register a new user
router.post('/login', loginUser); // Login and return JWT token

module.exports = router;
