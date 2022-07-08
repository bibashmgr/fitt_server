const express = require('express');

// controllers
const { welcomeUser } = require('../controllers/indexController.js');

const router = express.Router();

router.get('/', welcomeUser);

module.exports = router;
