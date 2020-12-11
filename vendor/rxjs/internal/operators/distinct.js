"use strict";var __extends=this&&this.__extends||function(){var i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};return function(t,e){function r(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}();Object.defineProperty(exports,"__esModule",{value:!0});var innerSubscribe_1=require("../innerSubscribe");function distinct(e,r){return function(t){return t.lift(new DistinctOperator(e,r))}}exports.distinct=distinct;var DistinctOperator=function(){function t(t,e){this.keySelector=t,this.flushes=e}return t.prototype.call=function(t,e){return e.subscribe(new DistinctSubscriber(t,this.keySelector,this.flushes))},t}(),DistinctSubscriber=function(n){function t(t,e,r){var i=n.call(this,t)||this;return i.keySelector=e,i.values=new Set,r&&i.add(innerSubscribe_1.innerSubscribe(r,new innerSubscribe_1.SimpleInnerSubscriber(i))),i}return __extends(t,n),t.prototype.notifyNext=function(){this.values.clear()},t.prototype.notifyError=function(t){this._error(t)},t.prototype._next=function(t){this.keySelector?this._useKeySelector(t):this._finalizeNext(t,t)},t.prototype._useKeySelector=function(t){var e,r=this.destination;try{e=this.keySelector(t)}catch(t){return void r.error(t)}this._finalizeNext(e,t)},t.prototype._finalizeNext=function(t,e){var r=this.values;r.has(t)||(r.add(t),this.destination.next(e))},t}(innerSubscribe_1.SimpleOuterSubscriber);exports.DistinctSubscriber=DistinctSubscriber;