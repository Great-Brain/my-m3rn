const fabinfoModel = require("../models/fabinfo");
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express');
const config = require('../config');
const router = express.Router();

router.use(express.json());


// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

router.get("/", async (req, res) => {
  try {
    const posts = await fabinfoModel.find();
    res.json(posts);
  } catch (e) {
    console.error(e);
    res.status(500).send(e);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const post = await fabinfoModel.findById(id);
    if (post) {
      res.json(post);
    } else {
      res.status(404).send('Post not found');
    }
  } catch (e) {
    console.error(e);
    res.status(500).send(e);
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const post = await fabinfoModel.findById(id);
    if (post) {
      await post.remove();
      res.json('deleted');
    } else {
      res.status(404).send('Post not found');
    }
  } catch (e) {
    console.error(e);
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
module.exports = router;