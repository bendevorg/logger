'use strict';
/* eslint-disable no-console */
const dotenv = require('dotenv');
dotenv.config();

require('../server/models/database');
const express = require('express');
const router = require('../server/core/router.js');
const logger = require('./logger');

const app = express();

app.use('/api', router);
app.use(logger.errorHandler());

module.exports = app;
