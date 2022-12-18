//creates a new instance of the Server class with middleware, routes, and then starts it on a port. 
const express = require('express');
const path = require('path');
const cookieSession = require('cookie-session');
const connection = require('./connection');
const forgeApi = require('./forge_connection');
const fabinfoModel = require('./models/fabinfo');
const { MongoClient, ServerApiVersion } = require('mongodb');
const config = require('./config');
const env = require('dotenv').config();

// Import the Server class
const Server = require('./server');

// Create a new server instance
const server = new Server();

// Check if the APS_CLIENT_ID and APS_CLIENT_SECRET environment variables are set
if (!config.credentials.client_id || !config.credentials.client_secret) {
  console.error('Missing APS_CLIENT_ID or APS_CLIENT_SECRET env variables.');
  return;
}

// Add middleware to the server
server.addMiddleware(express.urlencoded({ extended: true }));
server.addMiddleware(express.json());
server.addMiddleware(cookieSession({
  name: 'forge_session',
  keys: ['forge_secure_key'],
  maxAge: 60 * 60 * 1000, // 1 hour, same as the 2 legged lifespan token
}));
server.addMiddleware(express.json({
  limit: '50mb',
}));

// Add routes to the server
server.addRoutes(require('./routes/DesignAutomation'));
server.addRoutes(require('./routes/dbcomm'));
server.addRoutes(require('./routes/forgeBucket'))

// Configure the server
server.configure({
  port: process.env.PORT || 8000
});

// Start the server
server.start()
  .then(() => {
    console.log('Server started');
  })
  .catch((err) => {
    console.error('Error starting server', err);
  });
