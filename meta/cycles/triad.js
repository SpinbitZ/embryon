'use strict';
/*
 * Useful for Model-View-Intent binding function.
 */
module.exports = function (one, two, three) {
  if (two) { two.observe(one); }
  if (three) { three.observe(two); }
  if (one) { one.observe(three); }
};
