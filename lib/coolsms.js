/*
 * coolsms-rest-sdk
 * Copyright(c) 2016 Seungjae Lee (a0ly)
 * MIT Licensed
 */
'use strict';

var   _ = require('lodash'),
    util = require('./util');

Coolsms.DEFAULT_HOST = 'https://api.coolsms.co.kr';

var resources = {
  Sms: require('./resources/Sms'),
  Mo: require('./resources/Mo'),
  SenderID: require('./resources/SenderID')
};
Coolsms.resources = resources;

/**
 * Coolsms constructor.
 *
 * @param {object} options {key, secret}
 * @constructor
 */
function Coolsms(options, callback) {
  if(!(this instanceof Coolsms)) {
    return new Coolsms(options);
  }

  if( !options.key || !options.secret ) {
    callback && callback(new Error('Key or Secret parameter missing'));
  }

  options || (options = {});
  this._host = Coolsms.DEFAULT_HOST;
  this._key = options.key;
  this._secret = options.secret;
  this._preResources();
}
Coolsms.prototype._preResources = function() {
  for (var name in resources) {
    this [
      name[0].toLowerCase() + name.substring(1)
    ] = new resources[name](this);
  }
};

/**
 * Module exports.
 * @public
 */
module.exports = Coolsms;
