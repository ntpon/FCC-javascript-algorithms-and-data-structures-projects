function dropElements(arr, func) {
  let results = [...arr]
  for (let i = 0; i < arr.length; i++) {
    if (!func(arr[i])) {
      results = results.slice(1)
    } else {
      return results
    }
  }
  return results
}

console.log(
  dropElements([1, 2, 3, 9, 2], function (n) {
    return n > 2
  })
)
