const express = require('express');
const { getUsers, updateUser, deleteUser, createUser } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Rute untuk mendaftarkan pengguna baru (tanpa autentikasi)
router.post('/users', createUser);

// Middleware untuk melindungi endpoint dengan JWT (untuk rute di bawah ini)
router.use(authMiddleware);

// Mendapatkan data pengguna berdasarkan ID
router.get('/profile', getUsers);

// Memperbarui data pengguna
router.put('/profile', updateUser);

// Menghapus data pengguna
router.delete('/profile', deleteUser);

module.exports = router;
