'use strict';
/*
 * Anatom is a fundamental unit of anatomy.  It has insides, outsides (aspects),
 */

var rx = require('rx');
module.exports = function () {
    var monads = Array.prototype.slice.call(arguments);

/*

    if (two) {
        two.observe(one);
    }
    if (three) {
        three.observe(two);
    }
    if (one) {
        one.observe(three);
    }
*/

    var m1, m2, m3;



    //for (var i = 0; i < monads.length; i++) {
    //    if (extant(monads[i])) {
    //
    //    }
    //}

    //TODO:: ...


    function extant(obsr) {
        return !!obsr;
    }

};


function test(a) {

}