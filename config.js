// Load .env file
const dotenv = require('dotenv');
dotenv.config();
// Autodesk Forge configuration
module.exports = {
    // Set environment variables or hard-code here
    credentials: {
        client_id: process.env.APS_CLIENT_ID,
        client_secret: process.env.APS_CLIENT_SECRET,
        callback_url: process.env.APS_CALLBACK || process.env.APS_CALLBACK_URL,
        webhook_url: process.env.APS_WEBHOOK_URL
    },
    scopes: {
        // Required scopes for the server-side application
        internal: ['bucket:create', 'bucket:read', 'bucket:delete', 'data:read', 'data:create', 'data:write', 'code:all'],
        // Required scopes for the server-side design automation api
        internal_2legged: ['code:all', 'bucket:create', 'bucket:read', 'data:read', 'data:create', 'data:write'],

        // Required scope for the client-side viewer
        public: ['viewables:read']
    },
    designAutomation:{
        webhook_url: process.env.APS_WEBHOOK_URL,
        endpoint: 'https://developer.api.autodesk.com/da/us-east/v3/',
        nickname:     process.env.DESIGN_AUTOMATION_NICKNAME?process.env.DESIGN_AUTOMATION_NICKNAME:process.env.APS_CLIENT_ID,
        activity_name: process.env.DESIGN_AUTOMATION_ACTIVITY_NAME || 'ExportImportExcelActivity',
        appbundle_activity_alias: 'dev',

        URL:{
            GET_ENGINES_URL:    "https://developer.api.autodesk.com/da/us-east/v3/engines",
            ACTIVITIES_URL:     "https://developer.api.autodesk.com/da/us-east/v3/activities",
            ACTIVITY_URL:       "https://developer.api.autodesk.com/da/us-east/v3/activities/{0}",
            APPBUNDLES_URL:     "https://developer.api.autodesk.com/da/us-east/v3/appbundles",
            APPBUNDLE_URL:      "https://developer.api.autodesk.com/da/us-east/v3/appbundles/{0}",

            CREATE_APPBUNDLE_VERSION_URL: "https://developer.api.autodesk.com/da/us-east/v3/appbundles/{0}/versions",
            CREATE_APPBUNDLE_ALIAS_URL:   "https://developer.api.autodesk.com/da/us-east/v3/appbundles/{0}/aliases",

            UPDATE_APPBUNDLE_ALIAS_URL:  "https://developer.api.autodesk.com/da/us-east/v3/appbundles/{0}/aliases/{1}",
            CREATE_ACTIVITY_ALIAS: "https://developer.api.autodesk.com/da/us-east/v3/activities/{0}/aliases",
        }
    },
    client: {
        circuitBreaker: {
            threshold: 11,
            interval: 1200
        },
        retry: {
            maxNumberOfRetries: 7,
            backoffDelay: 4000,
            backoffPolicy: 'exponentialBackoffWithJitter'
        },
        requestTimeout: 13000
    }
};
