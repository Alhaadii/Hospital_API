const express = require("express");
const userdataModel = require("../models/userModel");
const userRouter = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

userRouter.get("/", async (req, res) => {
  const userData = await userdataModel.find();
  res.json({ "Message: ": userData });
});

userRouter.post("/", async (req, res) => {
  const { fullname, username, password } = req.body;
  try {
    const userdata = await userdataModel({
      fullname,
      username,
      password,
    });
    const salt = await bcrypt.genSalt(10);
    userdata.password = await bcrypt.hash(userdata.password, salt);
    await userdata.save();
    res.send(userdata);
  } catch (error) {
    res.send(error.message);
  }
});

userRouter.post("/login", async (req, res) => {
  try {
    const userlogin = await userdataModel.findOne({
      username: req.body.username,
    });
    if (!userlogin)
      return res.send({ message: "username or password incorrect" });
    const { password } = req.body;
    const checkPass = await bcrypt.compare(password, userlogin.password);
    if (!checkPass)
      return res.send({ message: "username or password incorrect" });

    const token = jwt.sign(
      {
        id: userlogin.id,
        username: userlogin.username,
      },
      "user"
    );

    res.send({ Message: "Successfully Singed in with this : ", token });
  } catch (error) {
    res.send(error.message);
  }
});

userRouter.put("/:id", async (req, res) => {
  try {
    const userdata = await userdataModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json({ message: "User updated successfully", userdata });
  } catch (error) {
    res.send(error.message);
  }
});

userRouter.delete("/:id", async (req, res) => {
  try {
    const userdata = await userdataModel.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted successfully", userdata });
  } catch (error) {
    res.send(error.message);
  }
});

module.exports = userRouter;
