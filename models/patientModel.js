const mongoose = require("mongoose");
const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  sex: {
    type: String,
    required: true,
    enum: ["male", "female"],
  },
});

const patientModel = mongoose.model("patient", patientSchema);

module.exports = patientModel;
