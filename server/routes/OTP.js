import express from "express";
import User from "../models/User.js";
const app = express.Router();
import { registerOTP, loginOTP, resetOTP } from "../API/mail/Mail.js";

app.post("/:reason", (req, res) => {
  const data = req.body;
  const OTP = Math.floor(100000 + Math.random() * 900000).toString();
  console.log(OTP);

  if (req.params.reason === "NewUser") {
    registerOTP(data, OTP);
  } else if (req.params.reason === "login") {
    loginOTP(data, OTP);
    User.findOne({ email: data.email }, (err, user) => {
      if (err) {
        console.log(err);
      } else if (user) {
        console.log(user);
      }
    });
  } else if (req.params.reason === "reset") {
    resetOTP(data, OTP);
    User.findOne({ email: data.email }, (err, user) => {
      if (err) {
        console.log(err);
      } else if (user) {
        console.log(user);
      }
    });
  }

  return res.send(OTP);
});

export default app;
