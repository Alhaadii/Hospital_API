const express = require("express");
const patientModel = require("../models/patientModel");
const ptRouter = express.Router();

// reading the Data
ptRouter.get("/", async (req, res) => {
  const getData = await patientModel.find();
  res.send(getData);
});

// Registering Data
ptRouter.post("", async (req, res) => {
  try {
    const postData = await patientModel(req.body);
    await postData.save();
    res.send({ message: "Xogta patient saved successfully" });
  } catch (error) {
    res.send(error.message);
  }
});

// Updating Data

ptRouter.put("/:id", async (req, res) => {
  try {
    const updateData = await patientModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.send({
      Message: "updated the patient recored successfully.",
      updateData,
    });
  } catch (error) {
    res.send(error.message);
  }
});

ptRouter.delete("/:id", async (req, res) => {
  try {
    const deleteData = await patientModel.findByIdAndDelete(req.params.id);
    res.send({ message: "deleted successfully.", deleteData });
  } catch (error) {
    res.send(error.message);
  }
});

module.exports = ptRouter;
