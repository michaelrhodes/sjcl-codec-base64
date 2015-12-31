# sjcl-codec-base64

A modular fork of the [sjcl](https://github.com/bitwiseshiftleft/sjcl) codec.base64 namespace.

[![Build status](https://travis-ci.org/michaelrhodes/sjcl-codec-base64.svg?branch=master)](https://travis-ci.org/michaelrhodes/sjcl-codec-base64)

## Install

```sh
$ npm install sjcl-codec-base64
```

## Usage

As described in the [sjcl docs](http://bitwiseshiftleft.github.io/sjcl/doc/symbols/sjcl.codec.base64.html) but with each method required separately.

```js
var fromBits = require('sjcl-codec-base64/from-bits')
var toBits = require('sjcl-codec-base64/to-bits')

var urlFromBits = require('sjcl-codec-base64/url/from-bits')
var urlToBits = require('sjcl-codec-base64/url/to-bits')
```

## License

BSD or GPL 2.0
