const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  drid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "doctors",
    required: true,
  },
  ptid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "patient",
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
    required: true,
  },
});

const appointmentModel = mongoose.model("appointment", appointmentSchema);

module.exports = appointmentModel;
