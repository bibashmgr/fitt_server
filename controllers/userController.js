// model
const user = require('../models/user.js');

const storeUserInfo = async (req, res) => {
  try {
    const newUser = new user(req.body);
    const savedUser = await newUser.save();
    res.json({
      status: 'ok',
      data: savedUser,
      message: 'Store Info',
    });
  } catch (error) {
    res.json({
      status: 'fail',
      data: null,
      message: 'Internal Error',
    });
  }
};

module.exports = { storeUserInfo };
