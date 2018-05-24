import uuidV1 from "uuid/v1";
import cloudinary from "cloudinary";

import imageModel from "../models/imageModel.js";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

export default {
  findImagelimit(req, res) {
    imageModel
      .find((err, image) => {
        if (err) {
          return res.status(500).json({
            message: "Error when getting user.",
            error: err
          });
        }
      })
      .limit(10)
      .exec((err, image) => {
        if (err) return res.status(500).send(err);
        return res.status(202).json(image);
      });
  },

  findImage(req, res) {
    imageModel.find((err, image) => {
      if (err) {
        return res.status(500).json({
          message: "Error when getting image.",
          error: err
        });
      }
      return res.json(image);
    });
  },

  findImageUser(req, res) {
    imageModel.find({ owner: req.headers.authorization }).exec((err, image) => {
      if (err) {
        return res.status(500).json({
          message: "Error when getting image.",
          error: err
        });
      }
      return res.json(image);
    });
  },

  upload(req, res, next) {
    let imageFile = req.files.file;
    const type = imageFile.mimetype.split("/")[1];
    let id = uuidV1();
    const publicUrl = `${process.env.HOST_APP}/public/${id}.${type}`;

    imageFile.mv(`./public/${id}.${type}`, err => {
      if (err) {
        return res.status(500).send(err);
      }
    });

    cloudinary.v2.uploader.upload(publicUrl, (error, result) => {
      const image = new imageModel({
        name: imageFile.name,
        type: imageFile.mimetype,
        url: result ? result.url : publicUrl,
        owner: req.headers.user ? req.headers.user : "admin"
      });

      image.save((err, image) => {
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
