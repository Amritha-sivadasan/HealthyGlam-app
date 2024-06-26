const express = require("express");

const { register, login } = require("../controller/authController");

const router = express();
router.post("/", login);
router.post("/register", register);

module.exports = router;
