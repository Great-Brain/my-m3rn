//creates a new instance of the Server class with middleware, routes, and then starts it on a port. 
const express = require('express');
const path = require('path');
const connection = require('./routes/common/dbConnection');
const fabinfoModel = require('./models/fabinfo');
const { MongoClient, ServerApiVersion } = require('mongodb');
const config = require('./config');
const env = require('dotenv').config();
const daRoutes = require('./routes/DesignAutomation');
const dbCommRoutes = require('./routes/dbcomm');
const oauthRoutes = require('./routes/oauth');
const datamanagementRoutes = require('./routes/datamanagement');
const userRoutes = require('./routes/user'));
const da4revitRoutes = require('./routes/da4revit');
const daconfigureRoutes = require('./routes/daconfigure')

// Import the Server class
const Server = require('./server');

// Create a new server instance
const server = new Server();

// Configure the server
server.configure({
  port: process.env.PORT || 8000,
  mongoDb: connection
});

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

server.addRoutes("/db", dbCommRoutes);
server.addRoutes("/api", daRoutes);
server.addRoutes('/api/aps', oauthRoutes);
server.addRoutes('/api/aps', datamanagementRoutes);
server.addRoutes('/api/aps', useRoutesr);
server.addRoutes('/api/aps', da4revitRoutes);
server.addRoutes('/api/aps', daconfigureRoutes);

//server.addRoutes(require('./routes/forgeBucket'))

// Export the custom server
module.exports = server;