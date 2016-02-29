function doubleAll(numbers) {

  // remember - Array.map's primary use is to return a modified copy of an array

  return numbers.map( n => { return n * 2 })

}

module.exports = doubleAll
