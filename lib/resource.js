/*!
 * coolsms-rest-sdk
 * Copyright(c) 2016 Seungjae Lee (a0ly)
 * MIT Licensed
 */
'use strict';

var request = require('request'),
    _ = require('lodash'),
    util = require('./util');

Resource.extend = util.protoExtend;
Resource.coolsmsMethod = require('./coolsmsMethod');
Resource.errorStates = [400, 402, 403, 404, 413, 500];

/**
 * Resource constructor.
 *
 * @param {coolsms instance} 
 * @constructor
 */
function Resource(coolsms) {
  this._coolsms = coolsms;
  this._host = coolsms._host;
}

Resource.prototype._makeRequest = function(method, url, formData, callback) {
  var _this   = this,
      reqForm = {},
      query;

  formData = formData || {};
  query = _.defaults(formData, util.getAuth( _this._coolsms._key, _this._coolsms._secret ));

  reqForm        = {};
  reqForm.url    = url;
  reqForm.method = method;
  reqForm.json   = true;
  if(reqForm.method === 'POST') {
    reqForm.form = query;
  } else {
    reqForm.qs = query;
  }
  request(reqForm)
    .on('response', _this._responseHandler(callback))
    .on('error', _this._errorHandler(callback));
}

Resource.prototype._responseHandler = function(cb) {
  return function(res) {
    var buffer = [];
    if( Resource.errorStates.indexOf(res.statusCode) > -1 ) {
      cb(new Error(res.statusCode));
    } else {
      res.on('data', function(chunk) {
        buffer.push(chunk);
      });
      res.on('end', function(body) {
        cb( 0, JSON.parse(buffer.join('')) );
      });
    }
  };
};

Resource.prototype._errorHandler = function(cb) {
  return function(err) {
    return cb(new Error(err));
  };
};

module.exports = Resource;
