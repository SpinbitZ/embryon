'use strict';
/*
 * Utility functions
 */

/**
 * Returns a signal, the monadic unit of a channel.
 *

 */
function signal(source) {
    var signal = Rx.Observable.from(source);
    //TODO:: what would a signal be
    return signal;
}

module.exports = signal;
