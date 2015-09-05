'use strict';
var shell = require('shelljs'),
prompt = require('prompt');


function init() {

}

module.exports = {
    init: init,
    render: function render(string) {
        shell.echo();
    },
    prompt: prompt,
    animate: function animate(strings) {

        //TODO:: return an observable of render-frame command-line rewrite functions that can be iterated over with a timer
    }
};
