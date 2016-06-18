
var expect = require('chai').expect;
var util = require('../lib/util');
var hasOwn = {}.hasOwnProperty;

describe('getAuth', function() {
   var authInfo = util.getAuth('1234', '5678');
   it('should have api_key value properly', function() {
      expect(authInfo).have.property('api_key').and.equal('1234');
   });
   it('should have api_key, timestamp, salt, signature property', function() {
      expect(authInfo).to.have.all.keys(['api_key','timestamp','salt','signature']);
   });
});

describe('getTextLength', function() {
   it('"abcd" return 4', function(){
      expect(util.getTextLength('abcd')).to.be.equal(4);
   });
   it('"a" return 1', function(){
      expect(util.getTextLength('a')).to.be.equal(1);
   });
   it('"12dgfde" return 7', function(){
      expect(util.getTextLength('12dgfde')).to.be.equal(7);
   });
   it('"001" return 3', function(){
      expect(util.getTextLength('001')).to.be.equal(3);
   });
   it('"abcdefghijklmn" return 14', function(){
      expect(util.getTextLength('abcdefghijklmn')).to.be.equal(14);
   });
});

describe('protoExtend', function() {
  it('Provides an extension mechanism', function() {
    function A() {}
    A.extend = util.protoExtend;
    var B = A.extend({
      constructor: function() {
        this.called = true;
      },
    });
    expect(new B()).to.be.an.instanceof(A);
    expect(new B()).to.be.an.instanceof(B);
    expect(new B().called).to.equal(true);
    expect(B.extend === util.protoExtend).to.equal(true);
  });
});
