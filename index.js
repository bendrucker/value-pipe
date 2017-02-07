'use strict'

var toArray = require('to-array')

module.exports = valuePipe

function valuePipe (fns) {
  if (!fns) throw new TypeError('At least one function is required')
  if (!Array.isArray(fns)) return valuePipe(toArray(arguments))
  return function valuePipeline (value, options) {
    for (var i = 0; i < fns.length; i++) {
      value = fns[i](value, options)
    }
    return value
  }
}
