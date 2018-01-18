'use strict';

let config = require('./default');
const develop = require('./develop');
const production = require('./production');

Object.assign(config, process.env.NODE_ENV === 'production' ? production : develop);

if (!config.prefix) config.prefix = '';
if (!config.delta) config.delta = 0;

module.exports = exports = config;
