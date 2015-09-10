'use strict';
/*
 * Utility functions
 */

module.exports = signal;


/**
 * Returns a signal, the monadic unit of a channel.
 *

 */
function signal(source, path) {
    var signal = Rx.Observable.from(source);
    signal.path = path;
}



/**
 * Links all notifications from the sensor observable to the given effector.
 *
 * @param {Rx.Observable} sensor the origin observable
 * @param {Rx.Subject} effector the destination effector
 * @return {Rx.Disposable} a disposable generated by a subscribe method
 */
//function link(sensor, effector) {
//    if (typeof sensor === 'undefined') {
//        throw new Error('Cannot channel() if sensor is undefined.');
//    }
//    return sensor.subscribe(
//        function channelNext(x) {
//            effector.onNext(x);
//        },
//        function channelError(err) {
//            console.error(err);
//        }
//    );
//}
//
//module.exports = link;


