const mysql = require('mysql2/promise'); // Menggunakan versi promise dari mysql2
const db = require('../config/db');

// Mengambil data pengguna berdasarkan ID
const findById = async (id) => {
  try {
    const [results] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
    if (results.length === 0) return null;
    return results[0];
  } catch (err) {
    throw err;
  }
};

// Memperbarui data pengguna berdasarkan ID
const update = async (id, userData) => {
  try {
    await db.query('UPDATE users SET name = ?, email = ? WHERE id = ?', [userData.name, userData.email, id]);
  } catch (err) {
    throw err;
  }
};

// Menghapus data pengguna berdasarkan ID
const deleteUser = async (id) => {
  try {
    await db.query('DELETE FROM users WHERE id = ?', [id]);
  } catch (err) {
    throw err;
  }
};
const create = async ({ name, email, password }) => {
  try {
    const [result] = await db.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, password]);
    return { id: result.insertId, name, email };
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = { findById, update, deleteUser , create};
