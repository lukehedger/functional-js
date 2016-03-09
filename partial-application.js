function logger(namespace) {

  // Function#apply calls a function with a list of arguments provided as an array (or array-like object)
  // the `namespace` is prepended to the given arguments by creating an array with it as the first arg and then using the spread-operator to expand the `arguments` expression
  // console.log() thus gets a list of arguments with namespace as the first

  return function() {

    console.log.apply(console, [namespace, ...arguments])

  }


}

module.exports = logger
