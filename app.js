'use strict'

// instal dotenv
require('dotenv').config();

// instal libraries
const express = require('express');
const app = express();
const router = require('./router/Router');

// instal PORT
const port = process.env.PORT || 8000

// cors Option Origin
let originOptionCors = {
    origin: `http://localhost:${port}`,
  };

  // routing
  app.use('/', routes);

  app.listen(port, () => console.log('listening on port ' + port));