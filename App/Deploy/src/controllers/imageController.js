"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _v = require("uuid/v1");

var _v2 = _interopRequireDefault(_v);

var _cloudinary = require("cloudinary");

var _cloudinary2 = _interopRequireDefault(_cloudinary);

var _imageModel = require("../models/imageModel.js");

var _imageModel2 = _interopRequireDefault(_imageModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_cloudinary2.default.config({
  cloud_name: "dilijjjnt",
  api_key: "965942992426216",
  api_secret: "U3qqtBQsZiApbjDBVzc4lISzvLY"
});

exports.default = {
  findImagelimit: function findImagelimit(req, res) {
    _imageModel2.default.find(function (err, image) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting user.",
          error: err
        });
      }
    }).limit(10).exec(function (err, image) {
      if (err) return res.status(500).send(err);
      return res.status(202).json(image);
    });
  },
  findImage: function findImage(req, res) {
    _imageModel2.default.find(function (err, image) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting image.",
          error: err
        });
      }
      return res.json(image);
    });
  },
  findImageUser: function findImageUser(req, res) {
    _imageModel2.default.find({ owner: req.headers.authorization }).exec(function (err, image) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting image.",
          error: err
        });
      }
      return res.json(image);
    });
  },
  upload: function upload(req, res, next) {
    var imageFile = req.files.file;
    var type = imageFile.mimetype.split("/")[1];
    var id = (0, _v2.default)();
    var publicUrl = process.env.HOST_APP + "/public/" + id + "." + type;

    imageFile.mv("./public/" + id + "." + type, function (err) {
      if (err) {
        return res.status(500).send(err);
      }
    });

    _cloudinary2.default.v2.uploader.upload(publicUrl, function (error, result) {
      var image = new _imageModel2.default({
        name: imageFile.name,
        type: imageFile.mimetype,
        url: result ? result.url : publicUrl,
        owner: req.headers.user ? req.headers.user : "admin"
      });

      image.save(function (err, image) {
        if (err) {
          return res.status(500).json({
            message: "Error when creating image",
            error: err
          });
        }
        return res.status(201).json(image);
      });
    });
  }
};
//# sourceMappingURL=imageController.js.map