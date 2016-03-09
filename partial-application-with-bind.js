function logger(namespace) {

  // Function#bind can be used to partially apply new parameters to a function's given arguments

  return console.log.bind(console, namespace)

}

module.exports = logger
