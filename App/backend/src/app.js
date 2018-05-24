import express from "express";
import path from "path";
import favicon from "serve-favicon";
import logger from "morgan";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import fileUpload from "express-fileupload";
import cors from "cors";
import uuidV1 from "uuid/v1";
import mongoose from "mongoose";

import user from "./routes/userRoutes";
import image from "./routes/imageRoutes";

require("dotenv").config();

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const app = express();
const HOST = process.env.PORT || 8080;

app.use(logger("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileUpload());

app.use(express.static(path.join(__dirname, "/views/client")));
app.use("/public", express.static("public"));

mongoose.connect(process.env.DB_HOST);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use("/api/user", user);
app.use("/", image);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/client/index.html"));
});

app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.listen(HOST, () => console.log(`app start running in : ${HOST}`));
