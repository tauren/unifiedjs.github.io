'use strict'

var fmt = require('pretty-bytes')
var locale = require('./constant-locale')

module.exports = bytes

function bytes(value) {
  return fmt(value || 0, {locale})
}
