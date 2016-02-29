function countWords(inputWords) {

  // Array#reduce applies a function against each value to reduce the array to a single value
  // the callback receives the previously returned value and the current value (=== array[index])
  // the previous value can be initialised by passing a 2nd param to reduce => array.reduce(callback, initialValue)

  return inputWords.reduce( (prev, curr) => {

    prev[curr] = ++prev[curr] || 1 // increment or initialise to 1

    return prev

  }, {})

}

module.exports = countWords
