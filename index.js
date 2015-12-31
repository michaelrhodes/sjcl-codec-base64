/** @fileOverview Bit array codec implementations.
 *
 * @author Emily Stark
 * @author Mike Hamburg
 * @author Dan Boneh
 */

/** @namespace Base64 encoding/decoding */
module.exports = {
  _chars: require('./chars'),
  fromBits: require('./from-bits'),
  toBits: require('./to-bits')
};
