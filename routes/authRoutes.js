const express = require('express');
const { registerUser, login } = require('../controllers/authController');

const router = express.Router();

// User registration
router.post('/register', registerUser);

// User login
router.post('/login', login);

module.exports = router;
