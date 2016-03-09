mapReduce = function arrayMap(arr, fn, thisArg) {

  // Array#reduce returns a single value after iterating an array
  // so, to get a new array with the `fn` applied to each value in `arr`, we take `curr`, apply the `fn`, push it to `prev` and then `return prev` for the next iteration

  return arr.reduce( (prev, curr, index) => {

    prev[index] = fn(curr)

    return prev


  }, [])

  // or with optional `thisArg`

  // return arr.reduce( (prev, curr, index) => {
  //
  //   prev[index] = fn.call(thisArg, curr)
  //
  //   return prev
  //
  //
  // }, [])

}

module.exports = mapReduce
