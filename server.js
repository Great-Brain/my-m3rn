const express = require('express');
const path = require('path');
const cookieSession = require('cookie-session');
const connection = require('./connection');
const forgeApi = require('./forge_connection');
const fabinfoModel = require('./models/fabinfo');
const { MongoClient, ServerApiVersion } = require('mongodb');
const config = require('./config');

require('dotenv').config();

const app = express();

if (!config.credentials.client_id || !config.credentials.client_secret) {
  console.error('Missing APS_CLIENT_ID or APS_CLIENT_SECRET env variables.');
  return;
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieSession({
  name: 'forge_session',
  keys: ['forge_secure_key'],
  maxAge: 60 * 60 * 1000, // 1 hour, same as the 2 legged lifespan token
}));

app.use(express.json({
  limit: '50mb',
}));

app.use('/api', require('./routes/DesignAutomation'));
app.use('/dbcomm', require('./routes/dbcomm'));

app.set('port', process.env.PORT || 8000);

module.exports = app;
