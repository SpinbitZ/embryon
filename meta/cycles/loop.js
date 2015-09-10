'use strict';
/*
 * Useful for Model-View-Intent binding function.
 */

var rx = require('rx');

console.log('loop');

function loop() {
    //var args = Array.prototype.slice.call(arguments);
    var monads = Array.prototype.slice.call(arguments);
    for (var i = 0; i < args.length; i++) {
        if (extant(args[i])) {



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

            return {
                loop: "empty"
            }

        }
    }
    function extant(obsr) {
        return !!obsr;
    }
}

module.exports = loop;


function test(a) {

    var l = loop();
    console.log('l is ... ', l);

}

test();