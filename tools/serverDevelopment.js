'use strict';
/* eslint-disable no-console */
const dotenv = require('dotenv');
dotenv.config();

require('../server/models/database');
const express = require('express');
const router = require('../server/core/router.js');
const cors = require('cors');
const morgan = require('morgan');
const logger = require('./logger');
const app = express();

app.use(
  cors({
    origin: ['http://localhost:3339'],
    methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'],
  })
);
app.use(router);
app.use(logger.errorHandler());
app.use(morgan('tiny'));

module.exports = app;
