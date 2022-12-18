const mongoose = require("mongoose");

// Load environment variables from .env file
require("dotenv").config();

// Connection parameters for MongoDB
const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// MongoDB connection URI
const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@maincluster.loxtteu.mongodb.net/?retryWrites=true&w=majority`;

// Connect to MongoDB using the connection URI and parameters
const connexion = mongoose
  .connect(uri, connectionParams)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("Error connecting to the database", err);
  });

module.exports = connexion;
