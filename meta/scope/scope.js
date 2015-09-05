'use strict';
/*
 * Scope us used by aspects to determine patterns of application
 */

var rx = require('rx');

module.exports = function (opt) {
    var scope = function(){

    };

    scope.prototype = {
        IM: "immanent",
        TRANS: "transcendent",
        get depth() {

        },
        set depth(val) {
            this.depth = val;
        }
    };
    return scope;
}
;

function test(a) {

}