"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _userController = require("../controllers/userController.js");

var _userController2 = _interopRequireDefault(_userController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

/*
 * GET
 */
router.get("/", _userController2.default.list);

/*
 * GET
 */
router.get("/:id", _userController2.default.show);

/*
 * GET
 */
router.post("/login", _userController2.default.login);
/*
 * POST
 */
router.post("/", _userController2.default.create);

/*
 * PUT
 */
router.put("/:id", _userController2.default.update);

/*
 * DELETE
 */
router.delete("/:id", _userController2.default.remove);

exports.default = router;
//# sourceMappingURL=userRoutes.js.map