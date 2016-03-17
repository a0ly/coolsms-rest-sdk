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
  
  path: 'senderid',
  version: '1.1',

  register: coolsmsMethod({
    method: 'POST',
    command: 'register',
    require: ['phone']
  }),

  verify: coolsmsMethod({
    method: 'POST',
    command: 'verify',
    require: ['handle_key']
  }),

  // reserved word
  'delete': coolsmsMethod({
    method: 'POST',
    command: 'delete',
    require: ['handle_key']
  }),

  list: coolsmsMethod({
    method: 'GET',
    command: 'list'
  }),

  setDefault: coolsmsMethod({
    method: 'POST',
    command: 'set_default',
    require: ['handle_key']
  }),

  getDefault: coolsmsMethod({
    method: 'GET',
    command: 'get_default'
  })

});
