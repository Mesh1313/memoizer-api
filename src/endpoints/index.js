const express = require('express');
const router = express.Router();

// Endpoints
const memosApi = require('./memos');

router.use('/memos', memosApi);

module.exports = router;