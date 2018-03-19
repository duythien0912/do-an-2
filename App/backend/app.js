const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const cors = require("cors");
// Generate a v1 UUID (time-based)
const uuidV1 = require("uuid/v1");

const MongoClient = require("mongodb").MongoClient;

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(fileUpload());
app.use("/public", express.static(__dirname + "/public"));

var db;

MongoClient.connect(
  "your_key",
  (err, client) => {
    if (err) return console.log(err);
    db = client.db("uploadfile");
    console.log("mongodb okeeeeeeeeeeeee");
  }
);

app.post("/upload", (req, res, next) => {
  let imageFile = req.files.file;
  let id = uuidV1();
  imageFile.mv(`${__dirname}/public/${id}`, function (err) {
    if (err) {
      return res.status(500).send(err);
    }

    res.json({
      fileId: id,
      fileUrl: `public/${id}`,
      filename: imageFile.name,
      filetype: imageFile.mimetype,
    });
  });

  let save = {
    name: imageFile.name,
    type: imageFile.mimetype,
    url: `public/${id}`,
  };

  db.collection("apiLocal").save(save, (err, result) => {
    if (err) return console.log(err);

    console.log(
      `saved success id: ${result.ops[0]._id},name: ${
      result.ops[0].name
      }.${result.ops[0].mimetype} to database`
    );
  });
});

app.get("/findImage", (req, res) => {
  db
    .collection("apiLocal")
    .find()
    .toArray((err, result) => {
      if (err) return console.log(err);
      // renders index.ejs
      console.log(`all file:`);
      console.log(result);
      res.json(result);
      res.status(202)
    });
});

app.post("/api/upload", (req, res) => {
  console.log(req.body.file);
  fileUploadImg
    .create({ ...req.body.file, useId: req.currentUser._id })
    .then(item => res.json({ item }))
    .catch(err =>
      res.status(401).json({ errors: parseErrors(err.errors) })
    );
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(8000, () => {
  console.log("8000");
});

module.exports = app;
