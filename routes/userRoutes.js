const express = require('express');
const { getUsers, updateUser, deleteUser, createUser } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware'); // Ensure this path is correct

const router = express.Router();

// Middleware for protected routes
router.use(authMiddleware);

// Get user profile
router.get('/profile', getUsers);

// Update user profile
router.put('/profile', updateUser);

// Delete user profile
router.delete('/profile', deleteUser);

// Route for creating a new user (if needed)
router.post('/users', createUser);

module.exports = router;
