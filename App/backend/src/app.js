import express from "express";
import compression from "compression";
import helmet from "helmet";
import path from "path";
import favicon from "serve-favicon";
import logger from "morgan";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import fileUpload from "express-fileupload";
import cors from "cors";
import mongoose from "mongoose";

import user from "./routes/userRoutes";
import image from "./routes/imageRoutes";

require("dotenv").config();

const app = express();
const HOST = process.env.PORT || 8080;

app.use(compression());
app.use(helmet());
app.use(logger("combined"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(fileUpload());
app.use(favicon(path.join(__dirname, 'views/client', 'logo2.png')))
app.use(express.static(path.join(__dirname, "/views/client")));
app.use("/public", express.static("public"));

mongoose.connect(process.env.DB_HOST);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use("/api/user", user);
app.use("/", image);
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, process.env.FRONTEND_HOST));
});

app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.listen(HOST, () => console.log(`app start running in : ${HOST}`));