import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import ConnectDB from "./database.js";
import Auth from "./routes/Auth.js";
import OTP from "./routes/OTP.js";
import File from "./routes/FileUpload.js";

const urlencodedParser = bodyParser.urlencoded({ extended: false });
const PORT = process.env.PORT || 5000;
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use(bodyParser.json(), urlencodedParser);
// Routes

app.use("/auth", Auth);
app.use("/otp", OTP);
app.use("/file", File);

app.get("/", (req, res) => {
  res.send("Hello from 1000 Projects");
});

app.listen(PORT, () => {
  ConnectDB()
    .then(() => console.log(`Server is Running  at Port ✌`))
    .catch(() =>
      console.log(
        "Error in Connecting to Database. Please Check your Database Configurations"
      )
    );
});
