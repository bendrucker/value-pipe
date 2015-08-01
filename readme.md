# value-pipe [![Build Status](https://travis-ci.org/bendrucker/value-pipe.svg?branch=master)](https://travis-ci.org/bendrucker/value-pipe)

> Pipe a value through a list of synchronous transform functions


## Install

```
$ npm install --save value-pipe
```


## Usage

```js
var pipe = require('value-pipe')

var mirrorAndUppercase = pipe(mirror, uppercase)
mirrorAndUppercase('git')
//=> GITTIG

function mirror (value) {
  return value + value.split('').reverse().join('')
}

function uppercase (value) {
  return value.toUpperCase()
}

```

## API

#### `pipe(functions...)` -> `function`

##### functions

*Required*  
Type: `function` / `array[function]`

A set of functions to use to transform the value. At least one is required. You can pass the functions as arguments or pass a single array of functions.


## License

MIT © [Ben Drucker](http://bendrucker.me)
