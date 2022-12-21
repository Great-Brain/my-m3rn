const express = require("express");

const config = require("../config");
const { OAuth } = require("./common/oauthImp");

let router = express.Router();

router.get("/callback/oauth", async (req, res, next) => {
  const { code } = req.query;
  const oauth = new OAuth(req.session);
  try {
    await oauth.setCode(code);
    res.redirect("/");
  } catch (err) {
    next(err);
  }
});

router.get("/oauth/v1/clientid", (req, res) => {
  res.status(200).end(JSON.stringify({ id: config.credentials.client_id }));
});

router.get("/oauth/v1/url", (req, res) => {
  const url =
    "https://developer.api.autodesk.com" +
    "/authentication/v1/authorize?response_type=code" +
    "&client_id=" +
    config.credentials.client_id +
    "&redirect_uri=" +
    config.credentials.callback_url +
    "&scope=" +
    config.scopes.internal.join(" ");
  res.end(url);
});

router.get("/oauth/v1/signout", (req, res) => {
  req.session = null;
  res.redirect("/");
});

// Endpoint to return a 2-legged access token
router.get("/oauth/v1/token", async (req, res, next) => {
  const oauth = new OAuth(req.session);
  if (!oauth.isAuthorized()) {
    res.status(401).end();
    return;
  }
  try {
    const publicCredentials = await oauth.getPublicToken();
    publicCredentials ? res.json(publicCredentials) : res.status(401).end();
    return;
  } catch (err) {
    res.status(401).end();
    return;
  }
});

module.exports = router;
