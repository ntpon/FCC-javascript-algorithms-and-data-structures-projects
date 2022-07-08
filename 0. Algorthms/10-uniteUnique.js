function uniteUnique(arr) {
  const sets = new Set()
  for (const key in arguments) {
    for (const item of arguments[key]) {
      sets.add(item)
    }
  }
  return Array.from(sets)
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))
