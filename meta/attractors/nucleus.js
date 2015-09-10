'use strict';
var Rx = require(rxjs);

/**
 * Nucleus contains models (ganglia) and
 *
 */
function nucleus(source, num) {















    var empty = Rx.Observable.fromArray(new Array(num));
    return empty
        .map(function(requestUrl) {
            return Rx.Observable.from(source);
        });
}

module.exports = nucleus;


function test(opt){






}

test();



