"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _userModel = require("../models/userModel.js");

var _userModel2 = _interopRequireDefault(_userModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * userController.js
 *
 * @description :: Server-side logic for managing users.
 */
exports.default = {
  /**
   * userController.login()
   */
  login: function login(req, res) {
    var email = req.body.userName;
    _userModel2.default.findOne({ email: email }, function (err, user) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting user.",
          error: err
        });
      }
      if (!user) {
        return res.status(404).json({
          message: "No such user"
        });
      }
      if (user.password === req.body.password) {
        return res.status(201).json("success " + user.role + " " + user.email);
      } else {
        return res.status(401).json("password error");
      }
    });
  },

  /**
   * userController.list()
   */
  list: function list(req, res) {
    _userModel2.default.find(function (err, users) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting user.",
          error: err
        });
      }
      return res.json(users);
    });
  },


  /**
   * userController.show()
   */
  show: function show(req, res) {
    var id = req.params.id;
    _userModel2.default.findOne({ _id: id }, function (err, user) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting user.",
          error: err
        });
      }
      if (!user) {
        return res.status(404).json({
          message: "No such user"
        });
      }
      return res.json(user);
    });
  },


  /**
   * userController.create()
   */
  create: function create(req, res) {
    var user = new _userModel2.default({
      email: req.body.email,
      password: req.body.password,
      nickname: req.body.nickname,
      role: req.body.role
    });

    user.save(function (err, user) {
      if (err) {
        return res.status(500).json({
          message: "Error when creating user",
          error: err
        });
      }
      return res.status(201).json(user);
    });
  },


  /**
   * userController.update()
   */
  update: function update(req, res) {
    var id = req.params.id;
    _userModel2.default.findOne({ _id: id }, function (err, user) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting user",
          error: err
        });
      }
      if (!user) {
        return res.status(404).json({
          message: "No such user"
        });
      }

      user.email = req.body.email ? req.body.email : user.email;
      user.password = req.body.password ? req.body.password : user.password;
      user.nickname = req.body.nickname ? req.body.nickname : user.nickname;
      user.role = req.body.role ? req.body.role : user.role;

      user.save(function (err, user) {
        if (err) {
          return res.status(500).json({
            message: "Error when updating user.",
            error: err
          });
        }

        return res.json(user);
      });
    });
  },


  /**
   * userController.remove()
   */
  remove: function remove(req, res) {
    var id = req.params.id;
    _userModel2.default.findByIdAndRemove(id, function (err, user) {
      if (err) {
        return res.status(500).json({
          message: "Error when deleting the user.",
          error: err
        });
      }
      return res.status(204).json();
    });
  }
};
//# sourceMappingURL=userController.js.map