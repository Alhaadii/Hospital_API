const express = require("express");
const stdmodel = require("../models/studentModel");
const req = require("express/lib/request");
const stdRouter = express.Router();

stdRouter.get("/", async (req, res) => {
  res.send("Welcome to Student Management System");

  res.json(data);
});

stdRouter.post("/", async (req, res) => {
  try {
    const data = await stdmodel.find;
    await data.save();
    res.send({ Message: "Success" });
  } catch (error) {
    res.send(error.message);
  }
});

stdRouter.put("/", async (req, res) => {
  try {
    const data = await stdmodel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.send({ message: "Data Updated Successfully", data });
  } catch (error) {
    res.send(error.message);
  }
});
stdRouter.delete("/", async (req, res) => {
  try {
    const data = await stdmodel.findByIdAndDelete(req.params.id);
    res.send({ message: "Data Deleted Successfully", data });
  } catch (error) {
    res.send(error.message);
  }
});

module.exports = stdRouter;
