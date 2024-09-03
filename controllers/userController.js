const User = require('../models/userModel');

const getUsers = async (req, res) => {
  try {
    const user = await User.findById(req.user.id); // Ensure `findById` uses async/await
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = await User.create({ name, email, password });
    res.status(201).json({ message: 'User created successfully', newUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  const { name, email } = req.body;
  try {
    await User.update(req.user.id, { name, email }); // Ensure `update` uses async/await
    res.json({ message: 'User updated successfully!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    await User.deleteUser(req.user.id); // Ensure `deleteUser` uses async/await
    res.json({ message: 'User deleted successfully!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createUser, getUsers, updateUser, deleteUser };
