'use strict';
var Rx = require(rxjs);

/**
 * Returns a new observable composed of the number of duplicates of the source.
 *

 */
function branch(source, num) {
    var empty = Rx.Observable.fromArray(new Array(num));
    return empty
        .map(function(requestUrl) {
            return Rx.Observable.from(source);
        });
}

module.exports = branch;


function test(opt){


    var b = branch([1,2,3,4,5],7);
    console.log('b is ... ', b);



}

test();