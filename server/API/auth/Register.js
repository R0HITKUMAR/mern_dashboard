import express from "express";
var app = express.Router();
app.use(express.json());

import User from "../../models/User.js";
import bcrypt from "bcrypt";
import { welcomeMail } from "../../API/mail/Mail.js";

app.post("/register", async (req, res) => {
  const user = req.body;
  const takenEmail = await User.findOne({ email: user.email });
  const registeredOn = new Date().toLocaleString();

  if (takenEmail) {
    return res.send({
      message: "User Exists Already! Please try with another Email Address",
      status: 1,
    });
  } else {
    user.password = await bcrypt.hash(user.password, 10);
    const dbUser = new User({
      name: user.name,
      phone: user.phone,
      email: user.email,
      password: user.password,
      registeredOn: registeredOn,
      role: "voter",
    });
    dbUser
      .save()
      .then((user) => {
        welcomeMail(user.name, user.email);
        return res.send({
          message: "User Registered Successfully",
          status: 0,
        });
      })
      .catch((err) => {
        return res.send({
          message: "Error in Registering User",
          status: 2,
        });
      });
  }
});

export default app;
