'use strict';

var Coolsms = require('coolsms-rest-sdk');
var client = new Coolsms({
  key: 'your API key',
  secret: 'your API secret key'
});

client.sms.send({
  to: '00000000000',    // recipient
  from: '11111111111',  // sender 
  type: 'SMS',          // SMS, LMS, MMS
  text: 'your message',
}, function (error, result) {
  if(error) {
    console.log(error);
  } else {
    console.log(result);
  }
});
