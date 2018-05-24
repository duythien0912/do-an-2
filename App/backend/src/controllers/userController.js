import userModel from "../models/userModel.js";

/**
 * userController.js
 *
 * @description :: Server-side logic for managing users.
 */
export default {
  /**
   * userController.login()
   */
  login(req, res) {
    const email = req.body.userName;
    userModel.findOne({ email }, (err, user) => {
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
        return res.status(201).json(`success ${user.role} ${user.email}`);
      } else {
        return res.status(401).json("password error");
      }
    });
  },
  /**
   * userController.list()
   */
  list(req, res) {
    userModel.find((err, users) => {
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
  show(req, res) {
    const id = req.params.id;
    userModel.findOne({ _id: id }, (err, user) => {
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
  create(req, res) {
    const user = new userModel({
      email: req.body.email,
      password: req.body.password,
      nickname: req.body.nickname,
      role: req.body.role
    });

    user.save((err, user) => {
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
  update(req, res) {
    const id = req.params.id;
    userModel.findOne({ _id: id }, (err, user) => {
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

      user.save((err, user) => {
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
  remove(req, res) {
    const id = req.params.id;
    userModel.findByIdAndRemove(id, (err, user) => {
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
