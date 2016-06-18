coolsms-rest-sdk
=====
coolsms rest-sdk for node.js
[Documentation](http://www.coolsms.co.kr/REST_API)

[![Build Status](https://travis-ci.org/a0ly/coolsms-rest-sdk.svg?branch=master)](https://travis-ci.org/a0ly/coolsms-rest-sdk)
[![npm version](https://badge.fury.io/js/coolsms-rest-sdk.svg)](https://badge.fury.io/js/coolsms-rest-sdk)
[![Dependency Status](https://david-dm.org/a0ly/coolsms-rest-sdk.svg)](https://david-dm.org/a0ly/coolsms-rest-sdk)


## Installation
`npm install coolsms-rest-sdk`

## Test
`npm test`

## Usage
```javascript
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
```

## Available resources & methods
*Where you see `params` it is a plain JavaScript object, e.g. `{ text: 'Hello world!' }`*
*`param` is not need to include authentication information*

 * sms
  * [`sms.send( params, [callback] )`](http://www.coolsms.co.kr/SMS_API#POSTsend)
  * [`sms.status( [params, callback] )`](http://www.coolsms.co.kr/SMS_API#GETstatus)
  * [`sms.sent( [params, callback] )`](http://www.coolsms.co.kr/SMS_API#GETsent)
  * [`sms.balance( [callback] )`](http://www.coolsms.co.kr/SMS_API#GETbalance)
  * [`sms.cancel( [params, callback] )`](http://www.coolsms.co.kr/SMS_API#POSTcancel)
 * mo
  * [`mo.list( [params, callback] )`](http://www.coolsms.co.kr/MO_API#GETlist)
  * [`mo.insert( params, [callback] )`](http://www.coolsms.co.kr/MO_API#POSTinsert)
 * senderID
  * [`senderID.register( params, [callback] )`](http://www.coolsms.co.kr/SenderID_API#POSTregister)
  * [`senderID.verify( params, [callback] )`](http://www.coolsms.co.kr/SenderID_API#POSTverify)
  * [`senderID.delete( params, [callback] )`](http://www.coolsms.co.kr/SenderID_API#POSTdelete)
  * [`senderID.list([ params, callback] )`](http://www.coolsms.co.kr/SenderID_API#GETlist)
  * [`senderID.setDefault( params, [callback] )`](http://www.coolsms.co.kr/SenderID_API#POSTset_default)
  * [`senderID.getDefault( [params, callback] )`](http://www.coolsms.co.kr/SenderID_API#GETget_default)

## License
MIT
