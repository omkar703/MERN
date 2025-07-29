const mongoose = require("mongoose");
const user = require("./user");

const postSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    // required: true,
  },
  data: {
    type: Date,
    default: Date.now(),
  },
  content: {
    type: String,
    // required: true,
  },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],
});

module.exports = mongoose.model("user", postSchema);
