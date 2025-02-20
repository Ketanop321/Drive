const mongoose = require('mongoose');

// Replace <db_name> with your actual database name, e.g., 'BACKEND-LEARNING'
const dbName = 'BACKEND-LEARNING';

const connectionString = `mongodb+srv://ketanop473:raW8krQKzGU5TeMJ@cluster0.aovxz.mongodb.net/${dbName}?retryWrites=true&w=majority`;

const connection = mongoose.connect(connectionString)
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((error) => {
    console.error("Error connecting to the database: ", error);
  });

module.exports = connection;
