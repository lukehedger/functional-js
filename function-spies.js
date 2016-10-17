function Spy(target, method) {

  // store original method
  const originalFn = target[method]

  // init count
  const result = {
    count: 0
  }

  // spy method
  const spy = function () {

    // increment count
    result.count++

    // invoke original method
    return originalFn.apply(this, arguments)

  }

  // replace method with spy
  target[method] = spy

  // return count obj
  return result

}

module.exports = Spy
