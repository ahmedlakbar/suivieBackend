const express = require("express");
const userRouter = require("../controllers/user.controller.js");

const router = express.Router();

router.post("/auth/register", userRouter.register);

module.exports = router;
