'use strict';
/*
 * Useful for Model-View-Intent binding function.
 */

var rx = require('rx');

console.log('loopcycle');
var loopcycle = function () {

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

    return {
        loopcycle:"empty"
    }

};

module.exports = loopcycle;


function test(a) {

    var l = loopcycle();
    console.log('l is ... ', l);

}

test();