const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    fullname: {
      type: String,
      require: true,
    },
    age: {
      type: Number,
      require: true,
    },
    gender: {
      type: String,
      require: true,
    },
    weight: {
      type: Number,
    },
    height: {
      type: Number,
      require: true,
    },
    level: {
      type: String,
      require: true,
    },
    goals: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('users', userSchema);
