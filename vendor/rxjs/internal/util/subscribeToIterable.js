"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var iterator_1=require("../symbol/iterator");exports.subscribeToIterable=function(o){return function(e){for(var r=o[iterator_1.iterator]();;){var t=void 0;try{t=r.next()}catch(r){return e.error(r),e}if(t.done){e.complete();break}if(e.next(t.value),e.closed)break}return"function"==typeof r.return&&e.add(function(){r.return&&r.return()}),e}};