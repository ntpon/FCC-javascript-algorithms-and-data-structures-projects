function destroyer(arr) {
  const args = Array.from(arguments)
  const [results, ...deleteList] = args
  const sets = new Set(deleteList)
  const answers = results.filter((item) => {
    if (sets.has(item)) {
      return false
    } else {
      return true
    }
  })
  return answers
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))

// v1

// function destroyer(arr) {
//     const args = Array.from(arguments)
//     const [results, ...deleteList] = args
//     const answers = results.filter((item) => {
//       if (deleteList.includes(item)) {
//         return false
//       } else {
//         return true
//       }
//     })
//     return answers
//   }

//   console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))
