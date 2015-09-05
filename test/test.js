"use strict";
//var test = function (embryon) {
var assert = require("assert");
var mocha = require("mocha");
var test = describe("'embryon'' should have all its functions", function () {

    var tri = require('../meta/triad');
    var renderer = require('../ui/shell-renderer');
    var model = require('../test/models/test-model');
    var view = require('../test/views/shell_view');
    var intent = require('../test/intents/test-intent');

    tri(model, view, intent);
    renderer.init();

    //it("Base should ...", function testOn(item) {
    //    assert(false, "embryon function failed...");
    //});
});
//return test;
//};
assert(false,"it's just wrong");
