import express from "express";
import User from "../models/User.js";
const app = express.Router();
import { registerOTP, resetOTP } from "../API/mail/Mail.js";

app.post("/:reason", async (req, res) => {
  const data = req.body;
  const OTP = Math.floor(100000 + Math.random() * 900000).toString();
  console.log(OTP);

  if (req.params.reason === "NewUser") {
    registerOTP(data, OTP);
    return res.send({
      success: true,
      OTP: OTP,
      message: "OTP Sent to your Email",
    });
  } else if (req.params.reason === "reset") {
    const user = await User.findOne({ email: data.email });
    if (user) {
      resetOTP(user, OTP);
      return res.send({
        success: true,
        OTP: OTP,
        message: "OTP Sent to your Email",
      });
    } else {
      return res.send({
        success: false,
        message: "No User registered with this email",
      });
    }
  }
});

export default app;
