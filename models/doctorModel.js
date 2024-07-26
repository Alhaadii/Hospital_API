const mongoose = require("mongoose");
const drSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  specialist: {
    type: String,
    required: true,
  },
});

const drModel = mongoose.model("doctors", drSchema);

module.exports = drModel;
