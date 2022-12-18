import nodemailer from "nodemailer";
import hbs from "nodemailer-express-handlebars";
import path from "path";

let transporter = nodemailer.createTransport({
  host: "smtp.elasticemail.com",
  port: 2525,
  auth: {
    user: "no-reply@aboutrohit.in",
    pass: "98392DD59B0F72CE3EDCE1B2A66191598C4B",
  },
});

const handlebarOptions = {
  viewEngine: {
    partialsDir: path.resolve("./API/mail/templates/"),
    defaultLayout: false,
  },
  viewPath: path.resolve("./API/mail/templates/"),
};

transporter.use("compile", hbs(handlebarOptions));

const date = {
  name: "Rohit Kumar",
  email: "r.k2962002@gmail.com",
};

// registerOTP(date, 123456);

function registerOTP(user, OTP) {
  var mailOptions = {
    from: "Dashboards <no-reply@aboutrohit.in>",
    to: user.email,
    subject: "OTP to verify your Account on Dashboards",
    template: "registerOTP",
    context: {
      name: user.name,
      email: user.email,
      otp: OTP,
    },
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

function welcomeMail(name, email) {
  var mailOptions = {
    from: "Dashboards <no-reply@aboutrohit.in>",
    to: email,
    subject: "Welcome to Dashboards",
    template: "welcome",
    context: {
      name: name,
      email: email,
    },
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

function resetOTP(user, OTP) {
  var mailOptions = {
    from: "Dashboards <no-reply@aboutrohit.in>",
    to: user.email,
    subject: "OTP to Reset Password on Dashboards",
    template: "resetOTP",
    context: {
      name: user.name,
      email: user.email,
      otp: OTP,
    },
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

export { registerOTP, welcomeMail, resetOTP };
