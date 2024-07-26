const express = require("express");
const customerModel = require("../models/customermodel");
const router = express.Router();

router.get("/", async (req, res) => {
  const data = await customerModel.find();
  res.json(data);
});

router.post("/", async (req, res) => {
  try {
    const postData = await customerModel(req.body);
    await postData.save();
    res.send({ Message: "New Customer is registered.", postData });
  } catch (error) {
    res.send(error.message);
  }
});
router.put("/:id", async (req, res) => {
  try {
    const postData = await customerModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.send({ Message: "Updated customer successfully.", postData });
  } catch (error) {
    res.send(error.message);
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const customer = await customerModel.findByIdAndDelete(req.params.id);
    res.send({ Message: "Customer deleted" });
  } catch (error) {
    res.send(error.message);
  }
});

module.exports = router;
