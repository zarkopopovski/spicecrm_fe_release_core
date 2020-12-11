"use strict";var __extends=this&&this.__extends||function(){var n=function(r,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,e){r.__proto__=e}||function(r,e){for(var t in e)e.hasOwnProperty(t)&&(r[t]=e[t])})(r,e)};return function(r,e){function t(){this.constructor=r}n(r,e),r.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t)}}();Object.defineProperty(exports,"__esModule",{value:!0});var from_1=require("../observable/from"),isArray_1=require("../util/isArray"),innerSubscribe_1=require("../innerSubscribe");function onErrorResumeNext(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return 1===e.length&&isArray_1.isArray(e[0])&&(e=e[0]),function(r){return r.lift(new OnErrorResumeNextOperator(e))}}function onErrorResumeNextStatic(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];var t;return 1===r.length&&isArray_1.isArray(r[0])&&(r=r[0]),t=r.shift(),from_1.from(t).lift(new OnErrorResumeNextOperator(r))}exports.onErrorResumeNext=onErrorResumeNext,exports.onErrorResumeNextStatic=onErrorResumeNextStatic;var OnErrorResumeNextOperator=function(){function r(r){this.nextSources=r}return r.prototype.call=function(r,e){return e.subscribe(new OnErrorResumeNextSubscriber(r,this.nextSources))},r}(),OnErrorResumeNextSubscriber=function(n){function r(r,e){var t=n.call(this,r)||this;return t.destination=r,t.nextSources=e,t}return __extends(r,n),r.prototype.notifyError=function(){this.subscribeToNextSource()},r.prototype.notifyComplete=function(){this.subscribeToNextSource()},r.prototype._error=function(r){this.subscribeToNextSource(),this.unsubscribe()},r.prototype._complete=function(){this.subscribeToNextSource(),this.unsubscribe()},r.prototype.subscribeToNextSource=function(){var r=this.nextSources.shift();if(r){var e=new innerSubscribe_1.SimpleInnerSubscriber(this),t=this.destination;t.add(e);var n=innerSubscribe_1.innerSubscribe(r,e);n!==e&&t.add(n)}else this.destination.complete()},r}(innerSubscribe_1.SimpleOuterSubscriber);