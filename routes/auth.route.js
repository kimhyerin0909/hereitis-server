const router = require("express").Router();
const encryption = require("../util/auth/encryption");
const db = require("../config/db.config");
const jwtController = require("../controller/jwt.controller");
const generateAccessToken = require("../util/auth/generateAccessToken");
const generateRefreshToken = require("../util/auth/generateRefreshToken");

router.post("/login", (req, res) => {
  console.log(124);
});

module.exports = router;
