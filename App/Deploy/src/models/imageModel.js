"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var imageSchema = new Schema({
  name: String,
  type: String,
  url: String,
  owner: { type: String, default: "admin" }
});

exports.default = _mongoose2.default.model("image", imageSchema);
//# sourceMappingURL=imageModel.js.map