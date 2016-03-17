/*!
 * coolsms-rest-sdk
 * Copyright(c) 2016 Seungjae Lee (a0ly)
 * MIT Licensed
 */
'use strict';

var resource = require('../resource'),
    coolsmsMethod = resource.coolsmsMethod;

/**
 * Module exports.
 * @public
 */
module.exports = resource.extend({
  
  path : 'mo',
  version : '1',

  list: coolsmsMethod({
    method: 'GET',
    command: 'list'
  }),

  insert: coolsmsMethod({
    method: 'POST',
    command: 'insert',
    require: ['mo_number','sender_id','content']
  }),

});
