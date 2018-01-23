'use strict';

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const conf = require('./config');
const Uber = require('./lib/uber');
const uber = new Uber();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/', uber.estimate.bind(uber));
app.post('/search', uber.searchAddress.bind(uber));

app.use((req, res, next) => {
  if (res.headersSent) return next();
  next('Cannot ' + req.method + ' ' + req.path);
});

app.use((error, req, res, next) => {
  console.error(error);
  res.status(404).send(error);
  next();
});

if (!conf.port) conf.port = 3038;

app.listen(conf.port, () => console.log(`Example app listening on port ${conf.port}`));
