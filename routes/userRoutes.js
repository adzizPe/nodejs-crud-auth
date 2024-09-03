const express = require('express');
const { createUser, getUsers, updateUser, deleteUser } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Middleware untuk melindungi endpoint dengan JWT
// router.use(authMiddleware); // Jika diperlukan

// Endpoint untuk menambahkan pengguna baru
router.post('/users', createUser);

// Endpoint lainnya
router.get('/profile', authMiddleware, getUsers);
router.put('/profile', authMiddleware, updateUser);
router.delete('/profile', authMiddleware, deleteUser);

module.exports = router;
