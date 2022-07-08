const express = require('express');

const router = express.Router();

// controllers
const { storeUserInfo } = require('../controllers/userController.js');

// store userInfo
router.post('/store', storeUserInfo);

module.exports = router;
