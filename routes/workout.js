const express = require('express');

const router = express.Router();

// controllers
const { createWorkout } = require('../controllers/workoutController.js');

// store userInfo
router.post('/create', createWorkout);

module.exports = router;
