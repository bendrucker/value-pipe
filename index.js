'use strict'

module.exports = valuePipe

function valuePipe (fns) {
  if (!fns) throw new TypeError('At least one function is required')
  if (!Array.isArray(fns)) {
    fns = Array.prototype.slice.call(arguments)
  }

  return function valuePipeline (value) {
    for (var i = 0; i < fns.length; i++) {
      value = fns[i](value)
    }
    return value
  }
}
