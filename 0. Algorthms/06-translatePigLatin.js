function translatePigLatin(str) {
  const vowels = new Set(["a", "e", "i", "o", "u"])
  if (vowels.has(str[0])) {
    return str + "way"
  }
  let stack = ""
  let count = 0
  const length = str.length
  for (let i = 0; i < length; i++) {
    if (!vowels.has(str[i])) {
      stack += str[i]
      count++
    } else {
      return str.slice(count) + stack + "ay"
    }
  }
  return str + "ay"
}

console.log(translatePigLatin("rhythm"))
//   ถ้าขึ้นต้นด้วยสระยะ ย้ายสระไปท้ายสุดแล้วเติม way
//   ถ้าขึ้นต้นด้วย พยัญชนะ ย้ายกลุ่มพยัญชนะ ไปท้ายสุดแล้วเติม ay
