const ForgeSdk = require('forge-apis');
require("dotenv").config();

// Set up your Forge API credentials
const FORGE_CLIENT_ID = process.env.FORGE_CLIENT_ID;
const FORGE_CLIENT_SECRET = process.env.FORGE_CLIENT_SECRET;

// Initialize the Forge API client
try {
    const forge_api = new ForgeSdk.ForgeApi({
        client_id: FORGE_CLIENT_ID,
        client_secret: FORGE_CLIENT_SECRET
    });
    console.log("Connected to database");
    module.exports = forge_api;
} catch (err) {
    console.log("Error connecting to the database", err);
}
