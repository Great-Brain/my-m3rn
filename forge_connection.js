const { ApiClient } = require('forge-apis');
const ForgeBucketsApi = require('forge-apis').ForgeBucketsApi;

// Set up your Forge API credentials
const FORGE_CLIENT_ID = process.env.FORGE_CLIENT_ID;
const FORGE_CLIENT_SECRET = process.env.FORGE_CLIENT_SECRET;

// Initialize the Forge API client
try {
    const apiClient = new ApiClient({
    client_id: FORGE_CLIENT_ID,
    client_secret: FORGE_CLIENT_SECRET
    });
    const forge_api = new ForgeBucketsApi(apiClient);
    console.log("Connected to forge");
    module.exports = forge_api;
} catch (err) {
    console.log("Error connecting to forge", err);
}