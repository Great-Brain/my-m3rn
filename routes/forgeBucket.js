const express = require('express');
const { getClient } = require('../routes/common/oauth');
const config = require('../config');
const router = express.Router();
// Middleware for obtaining a token for each request.
router.use(async (req, res, next) => {
  req.oauth_client = await getClient();
  req.oauth_token = req.oauth_client.getCredentials();
  next();
});

router.use(express.json());

router.post("/forge/buckets", async (req, res) => {
  try {
    // Use the Forge API to list your buckets
    forge_api.buckets.list()
      .then(function (buckets) {
        console.log(buckets);
        res.status(200).send(buckets);
      })
      .catch(function (error) {
        console.error(error);
        res.status(500).send(error);
      });
  } catch (e) {
    res.status(500).send(e);
  }
});
module.exports = router;
