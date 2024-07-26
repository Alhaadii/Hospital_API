require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const customers = require("./router/customerRouter");
const appointments = require("./router/appointmentRouter");
const doctor = require("./router/doctorRouter");
const patient = require("./router/patientRouter");
const userRouter = require("./router/userRouter");
const jwt = require("jsonwebtoken");
const port = 4000;
app.use(express.json());
app.use("/users", userRouter);

app.use((req, res, next) => {
  try {
    const token = req.headers.token;
    if (!token) return res.send({ Message: "You aren't allowed" });
    const verifyUser = jwt.verify(token, "user");
    console.log(verifyUser.id);
    console.log(verifyUser.username);
    next();
  } catch (error) {}
});

app.use("/customer", customers);
app.use("/appoint", appointments);
app.use("/doctor", doctor);
app.use("/patient", patient);

app.use("/", (req, res) => {
  res.send({ Message: "Success " });
});

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("Connected to MongoDB successfully");
  })
  .catch((error) => {
    console.log("Failed to connect to MongoDB");
  });

app.listen(port, () => {
  console.log("listening on port: " + port);
});
