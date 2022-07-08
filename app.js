const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

// routes
const indexRoutes = require('./routes/index.js');
const userRoutes = require('./routes/user.js');
const workoutRoutes = require('./routes/workout.js');

// environment variables
const PORT = process.env.PORT || 9999;
const CONNECTION_URL = process.env.MONGODB_LOCAL_URL;

const app = express();

// middlewares
app.use(
  cors({
    origin: '*',
  })
);
app.use(
  bodyParser.json({
    extended: false,
    limit: '5mb',
  })
);
app.use(
  bodyParser.urlencoded({
    extended: false,
    limit: '5mb',
  })
);

app.use('/', indexRoutes);
app.use('/api/user', userRoutes);
app.use('/api/workout', workoutRoutes);

// creating httpServer
const httpServer = require('http').createServer(app);

// establishing connection
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Database Connected');
    httpServer.listen(PORT, () => {
      console.log(`Server running on ${PORT}...`);
    });
  })
  .catch((error) => console.log(error.message));
