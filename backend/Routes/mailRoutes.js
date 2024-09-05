// routes/mailRoutes.js
const express = require('express');
const router = express.Router();
const mailController = require('../Controllers/mailController.js');

router.post('/send-email', mailController.sendEmail);

module.exports = router;
