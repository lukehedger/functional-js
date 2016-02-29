function repeat(operation, num) {

  // higher-order functions take one or more functions as inputs and output a function
  // a recursive function can be used to recursively call a function rather than using a loop

  if (num <= 0) return
  operation()
  return repeat(operation, num - 1)

}


module.exports = repeat
