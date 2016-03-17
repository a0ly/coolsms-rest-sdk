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
  
  path    : 'sms',
  version : '1.5',

  send: coolsmsMethod({
    method: 'POST',
    command: 'send'
  }),

  status: coolsmsMethod({
    method: 'GET',
    command: 'status'
  }),

  sent: coolsmsMethod({
    method: 'GET',
    command: 'sent'
  }),

  balance: coolsmsMethod({
    method: 'GET',
    command: 'balance'
  }),

  cancel: coolsmsMethod({
    method: 'POST',
    command: 'cancel'
  }),

});
