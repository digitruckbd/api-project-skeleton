// Only configuration related data required for connection and ODM is in this file
const config = require('./config.js');
const express = require('express');

const app = express();
const router = express.Router();

app.listen(config.port, () => {
  console.log('Server started successfully');
});

// Exporting the express server and router
module.exports = {
  app,
  router
};
