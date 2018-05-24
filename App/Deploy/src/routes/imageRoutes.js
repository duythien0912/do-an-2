"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _imageController = require("../controllers/imageController.js");

var _imageController2 = _interopRequireDefault(_imageController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get("/findImagelimit", _imageController2.default.findImagelimit);
router.get("/findImage", _imageController2.default.findImage);
router.get("/findImageUser", _imageController2.default.findImageUser);

router.post("/upload", _imageController2.default.upload);

exports.default = router;
//# sourceMappingURL=imageRoutes.js.map