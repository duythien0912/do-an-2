"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _compression = require("compression");

var _compression2 = _interopRequireDefault(_compression);

var _helmet = require("helmet");

var _helmet2 = _interopRequireDefault(_helmet);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _serveFavicon = require("serve-favicon");

var _serveFavicon2 = _interopRequireDefault(_serveFavicon);

var _morgan = require("morgan");

var _morgan2 = _interopRequireDefault(_morgan);

var _cookieParser = require("cookie-parser");

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _expressFileupload = require("express-fileupload");

var _expressFileupload2 = _interopRequireDefault(_expressFileupload);

var _cors = require("cors");

var _cors2 = _interopRequireDefault(_cors);

var _v = require("uuid/v1");

var _v2 = _interopRequireDefault(_v);

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _userRoutes = require("./routes/userRoutes");

var _userRoutes2 = _interopRequireDefault(_userRoutes);

var _imageRoutes = require("./routes/imageRoutes");

var _imageRoutes2 = _interopRequireDefault(_imageRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require("dotenv").config();

var app = (0, _express2.default)();
var HOST = process.env.PORT || 8080;

app.use((0, _compression2.default)());
app.use((0, _helmet2.default)());
app.use((0, _morgan2.default)("dev"));
app.use((0, _cors2.default)());
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use((0, _cookieParser2.default)());
app.use((0, _expressFileupload2.default)());

app.use(_express2.default.static(_path2.default.join(__dirname, "/views/client")));
app.use("/public", _express2.default.static("public"));

_mongoose2.default.connect(process.env.DB_HOST);

var db = _mongoose2.default.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use("/api/user", _userRoutes2.default);
app.use("/", _imageRoutes2.default);

app.get("/*", function (req, res) {
  res.sendFile(_path2.default.join(__dirname, process.env.FRONTEND_HOST));
});

app.use(function (req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.listen(HOST, function () {
  return console.log("app start running in : " + HOST);
});
//# sourceMappingURL=app.js.map