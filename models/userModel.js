const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = Schema({
  fullname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const userdataModel = mongoose.model("users", userSchema);
module.exports = userdataModel;
