var bitLength = require('sjcl-bit-array/bit-length');
var chars = require('./chars');

/** Convert from a bitArray to a base64 string. */
module.exports = function (arr, _noEquals, _url) {
  var out = "", i, bits=0, c = chars, ta=0, bl = bitLength(arr);
  if (_url) {
    c = c.substr(0,62) + '-_';
  }
  for (i=0; out.length * 6 < bl; ) {
    out += c.charAt((ta ^ arr[i]>>>bits) >>> 26);
    if (bits < 6) {
      ta = arr[i] << (6-bits);
      bits += 26;
      i++;
    } else {
      ta <<= 6;
      bits -= 6;
    }
  }
  while ((out.length & 3) && !_noEquals) { out += "="; }
  return out;
};
