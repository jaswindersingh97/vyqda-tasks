// db.js
const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();
// Create a connection to the database
const connection = mysql.createConnection({
  host: process.env.SERVER,
  user: process.env.NAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the MySQL database');
  }
});

module.exports = connection;
