const express = require('express');
const router = express.Router();

const textRouter = require('./text.route.js');

router.use('/', [textRouter]);

module.exports = router;
