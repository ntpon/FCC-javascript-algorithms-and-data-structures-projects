function sumFibs(num) {}
// num = 4, return 5
// 0 1 1 2 3 5

console.log(sumFibs(10))

// n = 1 = 1
// n = 2 = 1
// n = 3 = 2
// n = 4 = 2 + 1
// n = 5 = 3 + 2
// n = 6 = 5 + 3
// n = 7 = 8 + 5

// function sumFibs(num) {
//   let n1 = 0
//   let n2 = 1
//   let next
//   let sumOld = 0
//   while (n1 <= num) {
//     if (n1 % 2 !== 0) {
//       sumOld += n1
//     }
//     next = n1 + n2
//     n1 = n2
//     n2 = next
//   }
//   return sumOld
// }

// function sumFibs(num) {
//   const numbers = [1, 1]
//   for (let i = 1; i < num - 1; i++) {
//     numbers.push(numbers[i] + numbers[i - 1])
//   }

//   return numbers
// }
// // num = 4, return 5
// // 0 1 1 2 3 5

// console.log(sumFibs(10))
