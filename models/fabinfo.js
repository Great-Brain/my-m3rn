const mongoose = require("mongoose");
const schema = new mongoose.Schema(
  {
    title: "String",
    content: "String",
  },
  { timestamps: true }
);

const fabinfo = mongoose.model("fabinfo", schema);
module.exports = fabinfo;