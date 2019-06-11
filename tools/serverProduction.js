'use strict';
/* eslint-disable no-console */
const dotenv = require('dotenv');
dotenv.config();

require('../server/models/database');
const express = require('express');
const router = require('../server/core/router.js');
const cors = require('cors');
const logger = require('./logger');

const app = express();

app.use(
  cors({
    origin: [`http://${process.env.FRONTEND_HOST}`,
      `https://${process.env.FRONTEND_HOST}`,
      `http://${process.env.BACKEND_HOST}`,
      `https://${process.env.BACKEND_HOST}`
    ],
    methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'],
    credentials: true
  })
);
app.use(router);
app.use(logger.errorHandler());

module.exports = app;
