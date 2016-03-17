coolsms-rest-sdk
=====

coolsms rest-sdk for node.js
- [Documentation](http://www.coolsms.co.kr/REST_API)

## Installation
`npm install coolsms-rest-sdk`

## Usage
```javascript
var Coolsms = require('coolsms-rest-sdk');
var client = new Coolsms({
  key: 'your API key',
  secret: 'your API secret key'
});

client.sms.balance(function (error, result) {
  console.log(result);
});

client.sms.send({
  to: '01000000000',
  from: '0200000000', // your number
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
