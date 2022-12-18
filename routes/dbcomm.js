const fabinfoModel = require("./models/fabinfo");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const router = express.Router();
const { getClient } = require('../routes/common/oauth');
const config = require('../config');

router.get("/", async (req, res) => {
    try {
      const posts = await fabinfoModel.find();
      res.json(posts);
    } catch (e) {
      console.log(e);
    }
  });
  
  router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const post = await fabinfoModel.findById(id);
      res.json(post);
    } catch (e) {
      res.status(500).send(e);
    }
  });
  
  router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const post = await fabinfoModel.findById(id);
      await post.remove();
      res.json("deleted");
    } catch (e) {
      res.status(500).send(e);
    }
  });
  
  router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    try {
      const post = await fabinfoModel.findByIdAndUpdate(id, { title, content });
      res.json(post);
    } catch (e) {
      res.status(500).send(e);
    }
  });
  
  router.post("/", async (req, res) => {
    const { title, content } = req.body;
    try {
      const newPost = await fabinfoModel.create({
        title,
        content,
      });
      res.json(newPost);
    } catch (e) {
      res.status(500).send(e);
    }
  });
  
  router.post("/forge/", async (req, res) => {
      try {
          // Use the Forge API to list your buckets
          forge_api.buckets.list()
              .then(function (buckets) {
                  console.log(buckets);
              })
              .catch(function (error) {
                  console.error(error);
              });
          res.status(400)
      } catch (e) {
          res.status(500).send(e);
      }
  });