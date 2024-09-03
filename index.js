const express = require('express');
const mysql = require('mysql2/promise');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

// Load environment variables from .env file
dotenv.config();

// Create an instance of express app
const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON bodies

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '', // Password for MySQL root user
  database: process.env.DB_NAME || 'crud_db'
});

// Test MySQL connection
const testConnection = async () => {
  try {
    const connection = await pool.getConnection();
    console.log('Connected to database.');
    connection.release(); // Release connection back to pool
  } catch (err) {
    console.error('Database connection failed:', err.stack);
  }
};

// Test the database connection when server starts
testConnection();

// Define routes
app.use('/api/auth', authRoutes);
app.use('/api', userRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the Node.js CRUD and Authentication API');
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = pool; // Export the pool for use in other modules
