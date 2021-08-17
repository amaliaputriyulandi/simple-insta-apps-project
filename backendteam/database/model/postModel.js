const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  image: {
    type: String,
    required: true,
  },
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
