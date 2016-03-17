'use strict';

var Coolsms = require('coolsms-rest-sdk');
var client = new Coolsms({
  key: 'your API key',
  secret: 'your API secret key'
});

coolsms.balance(function (error, result) {
  console.log(result);
});

client.sms.balance(function (error, result) {
  console.log(result);
});

client.sms.send({
  to: '00000000000',
  from: '11111111111',
  type: 'SMS', // SMS, LMS, MMS
  text: 'your message',
}, function (error, result) {
  console.log(result);
});

client.sms.sent(function (error, result) {
  console.log(result);
});

client.sms.status(function (error, result) {
  console.log(result);
});