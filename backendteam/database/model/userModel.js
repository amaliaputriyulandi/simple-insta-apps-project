const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  session_id: {
    type: String,
    required: false,
    default: null,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
