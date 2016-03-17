/*!
 * coolsms-rest-sdk
 * Copyright(c) 2016 Seungjae Lee (a0ly)
 * MIT Licensed
 */

'use strict';

var hasOwn = {}.hasOwnProperty;
var emptyFunction = function() {};

/** method 생성 함수
 * API path 생성
 * URL Param, Form Param require check
 * 
 * @returns resource method [function]
 * @public
*/
function coolsmsMethod (spec) {
   var requestMethod = (spec.method || 'GET').toUpperCase();
   return function( _param, _callback) {
      var _this = this,
         apiParams = [this._host, this.path, this.version],
         API_BASE, formData, param, callback;

      if( typeof _param === 'function' ) {
         param = {};
         callback = _param;
      } else {
         param = _param || {};
         callback = _callback || emptyFunction;
      }

      if(spec.command) {
         apiParams.push(spec.command);
      }

      if(spec.urlParam) {
         if( hasOwn.call(param, spec.urlParam) ) {
            apiParams.push( param[spec.urlParam] );
         } else {
            callback(new Error('Param missing: ' + spec.urlParam));
            return;
         }
      }

      if(spec.require && spec.require.length) {
         for(var i=0; i<spec.require.length; i++) {
            if( !hasOwn.call( param, spec.require[i] )) {
               callback(new Error('Param missing: ' + spec.require[i]));
               return;
            }
         }
      }

      API_BASE = apiParams.join('/');

      if( requestMethod === 'POST' ) formData = param;

      _this._makeRequest( requestMethod, API_BASE, formData, callback);
   }
}

/**
 * Module exports.
 * @public
 */
module.exports = coolsmsMethod;
