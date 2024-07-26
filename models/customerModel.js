const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
});

const customerModel = mongoose.model("customers", customerSchema);

module.exports = customerModel;
