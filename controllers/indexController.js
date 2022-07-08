const welcomeUser = (req, res) => {
  res.status(200).json('Welcome to FITT');
};

module.exports = { welcomeUser };
