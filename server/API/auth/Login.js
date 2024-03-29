import User from "../../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

function Login(req, res) {
  const userLoggingIn = req.body;

  User.findOne({ email: userLoggingIn.email }).then((dbUser) => {
    if (!dbUser) {
      return res.send({
        message: "No Account Found with this Email",
        status: 1,
      });
    }
    bcrypt
      .compare(userLoggingIn.password, dbUser.password)
      .then((isCorrect) => {
        if (isCorrect) {
          const payload = {
            id: dbUser._id,
            email: dbUser.email,
          };
          jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: "30d" },
            (err, token) => {
              if (err) return res.data({ message: err });
              return res.send({
                message: "Logged In Successfully",
                status: 0,
                token: token,
                user: dbUser,
              });
            }
          );
        } else {
          return res.send({ message: "Incorrect Password", status: 2 });
        }
      });
  });
}


export { Login };
