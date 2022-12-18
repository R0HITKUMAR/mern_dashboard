import User from "../../models/User.js";
import bcrypt from "bcrypt";

function changepassword(req, res) {
  const user = req.body;
  // Update Password
  const dbUser = User.findOne({ email: user.email });
  user.password = bcrypt.hash(user.password, 10).then((hash) => {
    dbUser
      .updateOne({ password: hash })
      .then((user) => {
        return res.send({
          success: true,
          message: "Password Changed Successfully",
        });
      })
      .catch((err) => {
        return res.send({
          success: false,
          message: "Password Change Failed",
        });
      });
  });
}

export default changepassword;
