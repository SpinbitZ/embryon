module.exports = function (options, imports, register) {
    var orig = console;
    var c = require('./zindex');
    console = c;






    register(null, {
        "holodeck": c,
        "original_console": orig
    });
};

