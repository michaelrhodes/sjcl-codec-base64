var partial = require('sjcl-bit-array/partial');
var chars = require('./chars');

/** Convert from a base64 string to a bitArray */
module.exports = function(str, _url) {
  str = str.replace(/\s|=/g,'');
  var out = [], i, bits=0, c = chars, ta=0, x;
  if (_url) {
    c = c.substr(0,62) + '-_';
  }
  for (i=0; i<str.length; i++) {
    x = c.indexOf(str.charAt(i));
    if (x < 0) {
      throw new Error("this isn't base64!");
    }
    if (bits > 26) {
      bits -= 26;
      out.push(ta ^ x>>>bits);
      ta  = x << (32-bits);
    } else {
      bits += 6;
      ta ^= x << (32-bits);
    }
  }
  if (bits&56) {
    out.push(partial(bits&56, ta, 1));
  }
  return out;
};
