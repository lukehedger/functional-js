function reduce(arr, fn, initial) {

  // run reduce recursively passing the original `arr` less 1 item and a new `initial` value as the `fn` always applied to the first item in `arr`

  if (arr.length <= 0) return initial
  return reduce(arr.slice(1), fn, fn(initial, arr[0], 0, arr))

}

module.exports = reduce
