'use strict';

var mock = require('mock-require');
var chai = require('chai');
var expect = chai.expect;

let conf = require('../config');

const env = Object.assign({}, process.env);

describe('Config', function () {

  after(() => process.env = env);

  it('Config', function (done) {
    process.env.NODE_ENV = 'production';
    conf = mock.reRequire('../config');
    done();
  });

});
