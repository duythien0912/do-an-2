"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var userSchema = new Schema({
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: [true, "can't be blank"],
    match: [/\S+@\S+\.\S+/, "is invalid"],
    index: true
  },
  password: String,
  nickname: String,
  role: { type: String, default: "user" }
});
var userModel = _mongoose2.default.model("user", userSchema);

exports.default = userModel;


userModel.findOne({ email: "admin@gmail.com" }, function (err, user) {
  if (err) {
    console.log("Error", err);
  }
  if (!user) {
    var user = new userModel({
      email: "admin@gmail.com",
      password: "admin",
      nickname: "admin",
      role: "admin"
    });

    user.save(function (err, user) {
      if (err) {
        console.log("Error create new Admin account");
      }
      console.log("New Admin account: ", user.email, user.password);
    });
  }
  console.log("Admin account: ", user.email, user.password);
});
//# sourceMappingURL=userModel.js.map