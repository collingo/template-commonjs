'use strict';
var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var Q = require('q');
var expect = chai.expect;
chai.use(sinonChai);

var sandbox;

//// SUT
var <%= constructor %> = require('../src/<%= name %>');

describe('<%= name %>', function() {

  beforeEach(function() {
    sandbox = sinon.sandbox.create();
  });

  afterEach(function() {
    sandbox.restore();
  });

  it('should write proper tests', function() {
    expect(true).to.be.true;
  });

});