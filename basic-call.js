function duckCount() {

  // Every function has an `arguments` object that corresponds to the arguments passed to it
  // this is Array-like so has to be converted to an Array to iterate over it without using `for...in` loops
  // Array#from is an ES6 feature
  // Array#filter is used to remove objects that do not have the `quack` property directly assigned to it

  return Array.from(arguments).filter( object => {
    return Object.prototype.hasOwnProperty.call(object, 'quack')
  }).length

}

module.exports = duckCount
