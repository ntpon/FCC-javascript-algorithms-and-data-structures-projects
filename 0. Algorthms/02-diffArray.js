function diffArray(arr1, arr2) {
  const sets = new Set(arr1)
  arr2.forEach((item) => {
    if (sets.has(item)) {
      sets.delete(item)
    } else {
      sets.add(item)
    }
  })
  return Array.from(sets)
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))

// v1

// function diffArray(arr1, arr2) {
//   const newArr = []
//   for (const item of arr1) {
//     if (!arr2.includes(item)) {
//       newArr.push(item)
//     }
//   }
//   for (const item of arr2) {
//     if (!arr1.includes(item)) {
//       newArr.push(item)
//     }
//   }

//   return newArr
// }

// diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])

// v2

// const newArr = []
// const hash = {}
// for (const item of arr1) {
//   hash[item] = item
// }

// for (const item of arr2) {
//   if (hash[item]) {
//     delete hash[item]
//   } else {
//     hash[item] = item
//   }
// }
// for (const item in hash) {
//   newArr.push(hash[item])
// }

// return newArr

//  Sets

// const sets = new Set()
// while (arr1.length > 0) {
//   sets.add(arr1.pop())
// }
// while (arr2.length > 0) {
//   const data = arr2.pop()
//   if (sets.has(data)) {
//     sets.delete(data)
//   } else {
//     sets.add(data)
//   }
// }

// return [...sets]
