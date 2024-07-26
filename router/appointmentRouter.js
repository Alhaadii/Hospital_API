const express = require("express");
const appointmentModel = require("../models/appointmentModel");
const appointmentRout = new express.Router();

appointmentRout.get("/", async (req, res) => {
  const appointmentData = await appointmentModel.find().populate({
    path: "ptid",
    modal: "patient",
    select: "name address sex",
  });
  res.send(appointmentData);
});

appointmentRout.post("/", async (req, res) => {
  try {
    const appointmentData = await appointmentModel(req.body);
    await appointmentData.save();
    res.send(appointmentData);
  } catch (error) {
    res.send(error.message);
  }
});
appointmentRout.put("/:id", async (req, res) => {
  try {
    const appointmentData = await appointmentModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.send(appointmentData);
  } catch (error) {
    res.send(error.message);
  }
});

appointmentRout.delete("/:id", async (req, res) => {
  try {
    const appointmentData = await appointmentModel.findByIdAndDelete(
      req.params.id
    );
    res.send(appointmentData);
  } catch (error) {
    res.send(error.message);
  }
});
module.exports = appointmentRout;
