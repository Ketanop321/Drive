const mongoose = require('mongoose');

// Replace <db_name> with your actual database name, e.g., 'BACKEND-LEARNING'
const dbName = 'BACKEND-LEARNING';
  
const connectionString = process.env.MONGO_URI;

const connection = mongoose.connect(connectionString)
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((error) => {
    console.error("Error connecting to the database: ", error);
  });

module.exports = connection;
