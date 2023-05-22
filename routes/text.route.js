const express = require("express");
const router = express.Router();

const TextController = require("../controllers/text.controller.js");

const textController = new TextController();

router.post("/test", textController.test); // 테스트

module.exports = router;
