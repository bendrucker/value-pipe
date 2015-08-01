'use strict'

var test = require('tape')
var pipe = require('./')

test(function (t) {
  t.equal(pipe(mirror, uppercase)('ben'), 'BENNEB')
  t.equal(pipe([mirror, uppercase])('ben'), 'BENNEB')
  t.equal(typeof pipe(mirror), 'function')
  t.throws(pipe)
  t.end()
})

function mirror (value) {
  return value + value.split('').reverse().join('')
}

function uppercase (value) {
  return value.toUpperCase()
}
