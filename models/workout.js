const mongoose = require('mongoose');

const workoutSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  bodyPart: {
    type: String,
    require: true,
  },
  desc: {
    type: String,
    require: true,
  },
  steps: {
    type: Array,
    require: true,
  },
  media: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model('workouts', workoutSchema);
