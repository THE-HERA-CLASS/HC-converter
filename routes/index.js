const express = require('express');
const router = express.Router();

const textRouter = require('./text.route.js');
const imageRouter = require('./image.router.js');

router.use('/', [textRouter, imageRouter]);

module.exports = router;
