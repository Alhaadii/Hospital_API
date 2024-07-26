const mongoose = require("mongoose");
const stdScheme = new mongoose.Schema({
  stdname: {
    typeof: String,
    required: true,
  },
  stdclass: {
    typeof: String,
    required: true,
  },
  stdparent: {
    typeof: String,
    required: true,
  },
});

const stdModel = mongoose.model("student", stdScheme);
module.exports = stdModel;
