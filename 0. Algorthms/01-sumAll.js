function sumAll(arr) {
  const start = Math.min(arr[0], arr[1])
  const end = Math.max(arr[0], arr[1])
  let total = 0
  for (let i = start; i <= end; i++) {
    total += i
  }
  return total
}

console.log(sumAll([1, 4]))

// v1

// let [start, last] = arr
//   if (start > last) {
//     let temp = start
//     start = last
//     last = temp
//   }
//   let total = 0
//   for (let i = start; i <= last; i++) {
//     total += i
//   }
//   return total
