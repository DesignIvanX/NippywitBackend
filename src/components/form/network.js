const express = require("express");
const controller = require("./controller");
const response = require("../../network/response");

const router = express.Router();

router.get("/", (req, res) => {
  controller
    .getUsers()
    .then((data) =>
      response.success(req, res, data, 200, "[Success] - get users correct")
    )
    .catch((e) => {
      response.error(req, res, e, 500, "[Error] - not get user.");
    });
});

router.post("/", (req, res) => {
  const { name, lastName, email, message } = req.body;
  controller
    .addUser(name, lastName, email, message)
    .then((data) => {
      response.success(req, res, data, 201, "[Success] - post user correctly!");
    })
    .catch((e) => {
      response.error(req, res, e, 500, "[Error] - not post user.");
    });
});

module.exports = router;
