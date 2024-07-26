const express = require("express");
const drModel = require("../models/doctorModel");
const drRouter = new express.Router();

drRouter.get("/", async (req, res) => {
  const drData = await drModel.find();
  res.json(drData);
});
drRouter.post("/", async (req, res) => {
  try {
    const drdata = await drModel(req.body);
    await drdata.save();
    res.json({ Message: "Successfully saved data", drdata });
  } catch (error) {
    res.send(error.message);
  }
});
drRouter.put("/:id", async (req, res) => {
  try {
    const drData = await drModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.send({ Message: "updated successfully ", drData });
  } catch (error) {
    res.send(error.message);
  }
});

drRouter.delete("/:id", async (req, res) => {
  const drdata = await drModel.findByIdAndDelete(req.params.id);
  res.send({ Message: "delete successfully ", drdata });
});

module.exports = drRouter;
