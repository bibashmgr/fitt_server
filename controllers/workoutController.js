// model
const workout = require('../models/workout.js');

const createWorkout = async (req, res) => {
  try {
    const newWorkout = new workout(req.body);
    const savedWorkout = await newWorkout.save();
    res.json({
      status: 'ok',
      data: savedWorkout,
      message: 'Create Workout',
    });
  } catch (error) {
    res.json({
      status: 'fail',
      data: null,
      message: 'Internal Error',
    });
  }
};

module.exports = { createWorkout };
