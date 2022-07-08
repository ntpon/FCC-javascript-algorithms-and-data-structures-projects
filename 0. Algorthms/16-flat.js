function steamrollArray(arr) {
  const results = []
  for (const item of arr) {
    if (Array.isArray(item)) {
      results.push(...steamrollArray(item))
    } else {
      results.push(item)
    }
  }
  return results
}

console.log(steamrollArray([1, [2], [3, [[4]]]]))
